#!/bin/bash
# Always-on loop for Unraid. Fail soft: bad runs do not kill the container.
set -u

UPDATE_HOURS="${UPDATE_HOURS:-2}"
RUN_ON_START="${RUN_ON_START:-1}"

log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }

# Fractional hours allowed (e.g. 0.5); minimum sleep 5 minutes between runs
sleep_seconds() {
  python3 - <<'PY' "$UPDATE_HOURS"
import sys, math
h = float(sys.argv[1])
secs = max(300, int(h * 3600))
print(secs)
PY
}

INTERVAL_SECS="$(sleep_seconds)"
log "project-sunrise-updater starting (UPDATE_HOURS=$UPDATE_HOURS → ${INTERVAL_SECS}s)"
log "MOUNT_MODE=${MOUNT_MODE:-clone} REPO_DIR=${REPO_DIR:-/workspace/sunrise}"

if [[ "$RUN_ON_START" == "1" ]]; then
  /app/run-update.sh || log "Initial run reported failure (container stays up)"
else
  log "RUN_ON_START=0 — waiting full interval before first run"
fi

while true; do
  log "Sleeping ${INTERVAL_SECS}s until next update…"
  sleep "$INTERVAL_SECS"
  /app/run-update.sh || log "Scheduled run reported failure (container stays up)"
done
