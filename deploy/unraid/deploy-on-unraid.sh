#!/bin/bash
# Quick deploy helper on unRAID (from /mnt/user/appdata/project-sunrise-updater)
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p logs
docker compose up -d --build
echo "Following logs (Ctrl+C to detach)…"
docker logs -f project-sunrise-updater
