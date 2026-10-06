// Standalone online server for Cumbre II. No npm dependencies.
//   node online-server.js          -> http://localhost:8080  (PORT env var to change)
// Serves the game and a WebSocket endpoint at /ws that runs the matchmaking
// room defined in server.js.
import http from "node:http";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { room } from "./server.js";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 8080;
const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".json": "application/json",
};
const PUBLIC = new Set(["index.html", "style.css", "game.js", "mobile.js", "manifest.json", "icon-192.png", "icon-512.png", "uploads/titlescr.png"]);

const httpServer = http.createServer((req, res) => {
  let name = decodeURIComponent((req.url || "/").split("?")[0]).replace(/^\/+/, "");
  if (name === "") name = "index.html";
  if (name === "api/online") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true, mode: "realtime-room" }));
  }
  if (!PUBLIC.has(name)) {
    res.writeHead(404);
    return res.end("Not found");
  }
  fs.readFile(path.join(ROOT, name), (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("Not found");
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(name)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(data);
  });
});

// ---- Minimal RFC 6455 WebSocket implementation (text frames only) ----
function frame(opcode, payload) {
  const len = payload.length;
  let head;
  if (len < 126) head = Buffer.from([0x80 | opcode, len]);
  else if (len < 65536) {
    head = Buffer.alloc(4);
    head[0] = 0x80 | opcode;
    head[1] = 126;
    head.writeUInt16BE(len, 2);
  } else {
    head = Buffer.alloc(10);
    head[0] = 0x80 | opcode;
    head[1] = 127;
    head.writeBigUInt64BE(BigInt(len), 2);
  }
  return Buffer.concat([head, payload]);
}

let nextId = 1;
httpServer.on("upgrade", (req, socket) => {
  const url = new URL(req.url || "/", "http://x");
  const key = req.headers["sec-websocket-key"];
  if (url.pathname !== "/ws" || !key) {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
    return;
  }
  const accept = crypto.createHash("sha1").update(key + GUID).digest("base64");
  socket.write(
    "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n" +
      `Sec-WebSocket-Accept: ${accept}\r\n\r\n`
  );
  socket.setNoDelay(true);

  let open = true;
  const conn = {
    id: "p" + nextId++,
    username: "Fighter",
    send(obj) {
      if (!open) return;
      const text = typeof obj === "string" ? obj : JSON.stringify(obj);
      socket.write(frame(0x1, Buffer.from(text)));
    },
  };

  let buf = Buffer.alloc(0);
  let fragments = [];
  const close = () => {
    if (!open) return;
    open = false;
    clearInterval(pinger);
    Promise.resolve(room.onClose(conn)).catch(() => {});
    socket.destroy();
  };
  const pinger = setInterval(() => open && socket.write(frame(0x9, Buffer.alloc(0))), 25000);

  socket.on("data", (chunk) => {
    buf = Buffer.concat([buf, chunk]);
    while (buf.length >= 2) {
      const fin = (buf[0] & 0x80) !== 0;
      const opcode = buf[0] & 0x0f;
      const masked = (buf[1] & 0x80) !== 0;
      let len = buf[1] & 0x7f;
      let off = 2;
      if (len === 126) {
        if (buf.length < 4) return;
        len = buf.readUInt16BE(2);
        off = 4;
      } else if (len === 127) {
        if (buf.length < 10) return;
        len = Number(buf.readBigUInt64BE(2));
        off = 10;
      }
      if (len > 1 << 20) return close(); // 1 MB cap
      if (buf.length < off + (masked ? 4 : 0) + len) return;
      let payload;
      if (masked) {
        const mask = buf.subarray(off, off + 4);
        payload = Buffer.from(buf.subarray(off + 4, off + 4 + len));
        for (let i = 0; i < len; i++) payload[i] ^= mask[i & 3];
        off += 4;
      } else payload = buf.subarray(off, off + len);
      buf = buf.subarray(off + len);

      if (opcode === 0x8) {
        socket.write(frame(0x8, Buffer.alloc(0)));
        return close();
      } else if (opcode === 0x9) socket.write(frame(0xa, payload));
      else if (opcode === 0x1 || opcode === 0x0 || opcode === 0x2) {
        fragments.push(payload);
        if (fin) {
          const text = Buffer.concat(fragments).toString("utf8");
          fragments = [];
          Promise.resolve(room.onMessage(conn, text)).catch(() => {});
        }
      }
    }
  });
  socket.on("close", close);
  socket.on("error", close);

  Promise.resolve(room.onConnect(conn)).catch(() => {});
});

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Cumbre II online server running: http://localhost:${PORT}`);
  const lan = Object.values(os.networkInterfaces()).flat()
    .filter((i) => i && i.family === "IPv4" && !i.internal).map((i) => i.address);
  if (lan.length) {
    console.log("Other devices on the same Wi-Fi/network can open:");
    lan.forEach((ip) => console.log(`   http://${ip}:${PORT}`));
  }
  if (fs.existsSync("/dev/.cros_milestone") || process.env.CROS_USER_ID_HASH || os.hostname() === "penguin") {
    console.log("ChromeOS (Linux) detected: in this Chromebook use http://penguin.linux.test:" + PORT);
    console.log("For OTHER devices: Settings > Advanced > Developers > Linux > Port forwarding > add TCP " + PORT + ",");
    console.log("then use the Chromebook's Wi-Fi IP (Settings > Network) -> http://<that IP>:" + PORT);
  }
  console.log("Open that URL in two browser tabs/devices and pick Multijugador > Online.");
});
