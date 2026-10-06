#!/usr/bin/env bash
# Cumbre II - one-step server launcher for Chromebooks (Linux / Crostini) and any Debian/Ubuntu box.
#   bash start-chromebook.sh            # starts on port 8080
#   PORT=3000 bash start-chromebook.sh
set -e
cd "$(dirname "$0")"
need_node() { ! command -v node >/dev/null 2>&1 || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 18 ]; }

if need_node; then
  echo ">> Node 18+ not found, installing (needs your Linux password once)..."
  sudo apt-get update -y
  sudo apt-get install -y curl ca-certificates
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi
echo ">> Using Node $(node -v)"
exec node online-server.js
