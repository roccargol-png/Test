const peers = new Map();
const waiting = [];
const matches = new Map();
let nextMatch = 1;

function parseMessage(message) {
  try {
    return typeof message === "string" ? JSON.parse(message) : message;
  } catch {
    return null;
  }
}

export const room = {
  async onConnect(conn) {
    const player = { conn, id: conn.id, username: conn.username || "Fighter", matchId: null, slot: -1 };
    peers.set(conn.id, player);
    while (waiting.length) {
      const other = peers.get(waiting.shift());
      if (other && other.matchId === null) {
        const matchId = "match-" + nextMatch++;
        const players = [other, player];
        matches.set(matchId, players);
        players.forEach((p, slot) => {
          p.matchId = matchId;
          p.slot = slot;
          p.conn.send({ type: "matched", matchId, slot, opponent: players[1 - slot].username });
        });
        return;
      }
    }
    waiting.push(conn.id);
    conn.send({ type: "waiting" });
  },

  async onMessage(conn, raw) {
    const player = peers.get(conn.id);
    const message = parseMessage(raw);
    if (!player || !message || !player.matchId || message.matchId !== player.matchId) return;
    const players = matches.get(player.matchId);
    if (!players) return;
    const opponent = players[1 - player.slot];

    if (message.type === "selection" && Number.isInteger(message.character) &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].includes(message.character) && typeof message.ready === "boolean") {
      opponent.conn.send({ type: "selection", slot: player.slot, character: message.character, ready: message.ready });
    } else if (message.type === "input" && typeof message.key === "string" &&
        ["l", "r", "u", "d", "a", "s", "f", "h", "g"].includes(message.key) &&
        typeof message.down === "boolean") {
      opponent.conn.send({ type: "input", key: message.key, down: message.down });
    } else if (message.type === "state" && player.slot === 0 && message.state &&
        JSON.stringify(message.state).length < 40000) {
      opponent.conn.send({ type: "state", state: message.state });
    } else if (message.type === "result" && player.slot === 0 &&
        (message.winner === 0 || message.winner === 1)) {
      opponent.conn.send({ type: "result", winner: message.winner });
    }
  },

  async onClose(conn) {
    const player = peers.get(conn.id);
    if (!player) return;
    peers.delete(conn.id);
    const waitingIndex = waiting.indexOf(conn.id);
    if (waitingIndex !== -1) waiting.splice(waitingIndex, 1);
    if (player.matchId) {
      const players = matches.get(player.matchId);
      const opponent = players && players[1 - player.slot];
      if (opponent) {
        opponent.matchId = null;
        opponent.slot = -1;
        waiting.push(opponent.id);
        opponent.conn.send({ type: "opponentLeft" });
      }
      matches.delete(player.matchId);
    }
  },
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/api/online") {
      return Response.json({ ok: true, mode: "realtime-room" });
    }
    return new Response("Not found", { status: 404 });
  },
};
