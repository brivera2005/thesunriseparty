#!/bin/bash
# One update cycle: pull → refresh tracker/legislation/distracted → build → deploy → optional push.
# Fail soft: non-zero steps log and return (caller keeps looping).
set -u

log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }

REPO_DIR="${REPO_DIR:-/workspace/sunrise}"
REPO_URL="${REPO_URL:-https://github.com/brivera2005/thesunriseparty.git}"
REPO_BRANCH="${REPO_BRANCH:-master}"
PAGES_PROJECT="${PAGES_PROJECT:-thesunriseparty}"
PAGES_BRANCH="${PAGES_BRANCH:-main}"
PUSH_DATA_UPDATES="${PUSH_DATA_UPDATES:-0}"
SKIP_DEPLOY="${SKIP_DEPLOY:-0}"
SKIP_BUILD="${SKIP_BUILD:-0}"

ensure_repo() {
  if [[ "${MOUNT_MODE:-clone}" == "mount" ]]; then
    if [[ ! -d "$REPO_DIR/.git" && ! -f "$REPO_DIR/package.json" ]]; then
      log "ERROR: MOUNT_MODE=mount but $REPO_DIR is not a sunrise checkout"
      return 1
    fi
    log "Using mounted repo at $REPO_DIR"
    return 0
  fi

  mkdir -p "$(dirname "$REPO_DIR")"
  if [[ ! -d "$REPO_DIR/.git" ]]; then
    log "Cloning $REPO_URL → $REPO_DIR (branch $REPO_BRANCH)"
    local auth_url="$REPO_URL"
    if [[ -n "${GITHUB_TOKEN:-}" ]]; then
      auth_url="https://x-access-token:${GITHUB_TOKEN}@github.com/brivera2005/thesunriseparty.git"
    fi
    git clone --depth 1 --branch "$REPO_BRANCH" "$auth_url" "$REPO_DIR" || return 1
  fi
}

git_pull() {
  if [[ "${MOUNT_MODE:-clone}" == "mount" && "${SKIP_GIT_PULL:-0}" == "1" ]]; then
    log "Skipping git pull (mounted + SKIP_GIT_PULL=1)"
    return 0
  fi
  cd "$REPO_DIR" || return 1
  log "git fetch / hard reset to origin/$REPO_BRANCH"
  if [[ -n "${GITHUB_TOKEN:-}" ]]; then
    git remote set-url origin \
      "https://x-access-token:${GITHUB_TOKEN}@github.com/brivera2005/thesunriseparty.git" || true
  fi
  git fetch --depth 1 origin "$REPO_BRANCH" || return 1
  # Discard dirty generated artifacts from prior builds (events.json, feed.xml, etc.)
  # so checkout cannot block; refreshed every cycle after pull.
  git reset --hard "origin/$REPO_BRANCH" || return 1
  git clean -fd -- public/data public/feed.xml public/feed.ics public/sitemap.xml 2>/dev/null || true
}

install_deps() {
  cd "$REPO_DIR" || return 1
  if [[ -f package-lock.json ]]; then
    log "npm ci"
    npm ci --include=dev --no-audit --no-fund || return 1
  else
    log "npm install (no lockfile)"
    npm install --no-audit --no-fund || return 1
  fi
}

refresh_data() {
  cd "$REPO_DIR" || return 1
  # Tracker (Federal Register) — also invokes fetch-legislation at end of script
  log "npm run refresh:tracker"
  npm run refresh:tracker || return 1
  # Explicit legislation refresh every cycle (API when keyed; curated probe otherwise)
  log "npm run fetch-legislation"
  npm run fetch-legislation || {
    log "WARN: fetch-legislation failed (fail soft — continuing with curated data)"
  }
  # Distraction / Cover-up Watch auto stubs (DIST-AUTO-*)
  log "npm run refresh:distracted"
  npm run refresh:distracted || {
    log "WARN: refresh:distracted failed (fail soft — continuing)"
    return 0
  }
}

build_site() {
  cd "$REPO_DIR" || return 1
  if [[ "$SKIP_BUILD" == "1" ]]; then
    log "Skipping build (SKIP_BUILD=1)"
    return 0
  fi
  log "npm run build"
  npm run build || return 1
}

deploy_pages() {
  cd "$REPO_DIR" || return 1
  if [[ "$SKIP_DEPLOY" == "1" ]]; then
    log "Skipping Cloudflare deploy (SKIP_DEPLOY=1)"
    return 0
  fi
  if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
    log "ERROR: CLOUDFLARE_API_TOKEN not set — cannot deploy"
    return 1
  fi
  if [[ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
    log "WARN: CLOUDFLARE_ACCOUNT_ID not set (wrangler may still work with token scope)"
  fi
  log "npx wrangler pages deploy out --project-name=$PAGES_PROJECT --branch=$PAGES_BRANCH"
  npx --yes wrangler pages deploy out \
    --project-name="$PAGES_PROJECT" \
    --branch="$PAGES_BRANCH" || return 1
}

maybe_push_data() {
  cd "$REPO_DIR" || return 1
  if [[ "$PUSH_DATA_UPDATES" != "1" ]]; then
    log "Skipping git push of data (PUSH_DATA_UPDATES!=1)"
    return 0
  fi
  if [[ -z "${GITHUB_TOKEN:-}" ]]; then
    log "WARN: PUSH_DATA_UPDATES=1 but GITHUB_TOKEN unset — skip push"
    return 0
  fi

  git config user.email "${GIT_AUTHOR_EMAIL:-sunrise-updater@local}"
  git config user.name "${GIT_AUTHOR_NAME:-Project Sunrise Updater}"

  git add \
    lib/data/tracker-auto-events.ts \
    lib/data/distracted-auto.ts \
    lib/data/distracted-with-auto.ts \
    public/data/tracker-live.json \
    public/data/legislation-live.json \
    public/data/distracted-live.json \
    2>/dev/null || true

  if git diff --cached --quiet; then
    log "No data changes to commit"
    return 0
  fi

  local count
  count="$(git diff --cached --numstat | wc -l | tr -d ' ')"
  git commit -m "chore(data): auto-refresh tracker / legislation / distracted

Synced by project-sunrise-updater on Unraid."
  log "Pushing data commit ($count files) to origin/$REPO_BRANCH"
  git push origin "HEAD:$REPO_BRANCH" || return 1
}

run_once() {
  log "======== Project Sunrise update cycle start ========"
  ensure_repo || { log "FAIL ensure_repo"; return 0; }
  git_pull || { log "FAIL git_pull (will retry next schedule)"; return 0; }
  install_deps || { log "FAIL install_deps"; return 0; }
  refresh_data || { log "FAIL refresh_data"; return 0; }
  build_site || { log "FAIL build_site"; return 0; }
  deploy_pages || { log "FAIL deploy_pages"; return 0; }
  maybe_push_data || { log "FAIL maybe_push_data (site already deployed)"; return 0; }
  log "======== Project Sunrise update cycle OK ========"
}

run_once
