# Project Sunrise updater on unRAID

Always-on container that keeps [Project Sunrise](https://thesunriseparty.pages.dev) fresh: pulls GitHub, refreshes legislation every cycle, clears Distracted/Tracker FR auto stubs by default (curated facts only unless opt-in flags), builds the static site, and deploys to Cloudflare Pages.

**Canonical files:** `C:\Users\Benjamin\Projects\sunrise\deploy\unraid\`

Live site: https://thesunriseparty.pages.dev · Repo: https://github.com/brivera2005/thesunriseparty

---

## What each cycle does

1. `git pull` / hard reset to `origin/master` (discards dirty generated `public/` artifacts so checkout never blocks)
2. `npm ci --include=dev` (needed because the image sets `NODE_ENV=production`)
3. `npm run refresh:tracker` — **curated-only by default** (writes empty `EVT-AUTO-*` unless `TRACKER_FR_AUTO=1`)
4. `npm run fetch-legislation` — **every cycle**: member-level roll calls from House Clerk EVS + Senate LIS (no key required); Congress.gov bill list + action roll discovery when `CONGRESS_API_KEY` is set → `public/data/legislation-live.json` + `lib/data/legislation-votes-live.ts`
5. `npm run refresh:distracted` — **every cycle**: writes **empty** `DIST-AUTO-*` by default (curated Distracted only). FR/RSS/Congress auto require explicit `DISTRACTED_FR_AUTO=1` / `DISTRACTED_RSS_AUTO=1` / `DISTRACTED_CONGRESS_AUTO=1`
6. `npm run build` (static export → `out/`)
7. `npx wrangler pages deploy out --project-name=thesunriseparty --branch=main`
8. Optional: commit + push auto data if `PUSH_DATA_UPDATES=1` and `GITHUB_TOKEN` is set

Failures are logged; the container **does not crash-loop** — it sleeps and retries on the next schedule.

**Default schedule:** every **1 hour** (`UPDATE_HOURS=1`) so Tracker + Legislation + Distracted stay live without manual daily updates.

---

## What gets auto-updated

| Artifact | Source | Notes |
| --- | --- | --- |
| Tracker stubs (`EVT-AUTO-*`) | **Disabled by default** | Empty unless `TRACKER_FR_AUTO=1` (short high-signal EOs only; rejects Section 301 / ceremonial dumps) |
| `public/data/tracker-live.json` | Same refresh | Audit trail; empty autoEvents when FR auto is off |
| `public/data/legislation-live.json` + `lib/data/legislation-votes-live.ts` | House Clerk + Senate LIS (+ Congress.gov when keyed) | Member Yea/Nay/Present merged into curated UI at build; commentary stays in `legislation.ts` |
| Distracted stubs (`DIST-AUTO-*`) | **Disabled by default** | Empty unless `DISTRACTED_FR_AUTO=1` (hard-signal flashbangs only). Live page = curated cards in `distractions.ts` |
| Live Pages site | Wrangler | Redeployed every successful cycle |

`project2025.observer` has no public JSON API — the updater probes reachability and keeps it as an external cross-reference on auto events.

---

## Deploy on Unraid

### 1. Copy stack to appdata

```powershell
$dest = "\\192.168.0.19\appdata\project-sunrise-updater"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Copy-Item -Recurse C:\Users\Benjamin\Projects\sunrise\deploy\unraid\* $dest -Force
```

Adjust the NAS share path to match your Unraid host.

### 2. Configure secrets

```bash
cd /mnt/user/appdata/project-sunrise-updater
cp .env.example .env
nano .env
```

**Do not rely on interactive Wrangler OAuth** inside the container — those tokens expire (`cfoat_*` OAuth tokens → Wrangler auth error 10000). Set a long-lived **CLOUDFLARE_API_TOKEN** (Pages Edit) in `/mnt/user/appdata/project-sunrise-updater/.env` on the NAS. The token is not stored in this repo; create it in the Cloudflare dashboard (see below).

**Required for publish**

| Variable | Purpose |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Pages Edit token (API Token, not OAuth) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account id |

**Recommended**

| Variable | Purpose |
| --- | --- |
| `UPDATE_HOURS` | Hours between runs (default `1`) |
| `CONGRESS_API_KEY` | Optional: Congress.gov bill list + roll-call discovery from bill actions. Member votes still refresh from Clerk/LIS without a key. |
| `GITHUB_TOKEN` | Authenticated clone / optional data push |

**Optional**

| Variable | Purpose |
| --- | --- |
| `PUSH_DATA_UPDATES=1` | Commit auto tracker/distracted files back to GitHub |
| `MOUNT_MODE=mount` | Use a host-mounted checkout instead of clone |
| `SKIP_DEPLOY=1` | Build/refresh only (dry run) |
| `DISTRACTED_LOOKBACK_DAYS` | FR lookback for distraction stubs (default `21`) |
| `DISTRACTED_MAX_NEW` | Cap new distraction stubs per run (default `25`) |

### 3. Start

```bash
cd /mnt/user/appdata/project-sunrise-updater
mkdir -p logs
docker compose up -d --build
docker logs -f project-sunrise-updater
```

Healthy log markers:

```
project-sunrise-updater starting (UPDATE_HOURS=1 …
======== Project Sunrise update cycle start ========
[tracker] Fetching Federal Register presidential documents…
── Legislation refresh (fetch-legislation) ──
✅ Wrote …/legislation-live.json
[distracted] Federal Register docs: …
✅ Wrote …/distracted-live.json
npx wrangler pages deploy out …
======== Project Sunrise update cycle OK ========
```

---

## Clone vs mount

### Default: clone inside container (`MOUNT_MODE=clone`)

- Repo lives on the `sunrise_workspace` Docker volume at `/workspace/sunrise`
- Each cycle: shallow fetch + **hard reset** to `origin/master`
- Best for headless Unraid — no Windows path mounts required
- Set `GITHUB_TOKEN` if the repo is private or you enable data push

### Alternate: mount host checkout (`MOUNT_MODE=mount`)

1. Clone the repo on the NAS, e.g. `/mnt/user/appdata/sunrise-src`
2. In `docker-compose.yml`, uncomment the host volume line and set `SUNRISE_HOST_PATH`
3. In `.env`:

```bash
MOUNT_MODE=mount
REPO_DIR=/workspace/sunrise
# SKIP_GIT_PULL=1   # if you manage pulls yourself
```

---

## Manual one-shot (from a local sunrise checkout)

```bash
cd /path/to/sunrise
npm run refresh:tracker
npm run fetch-legislation
npm run refresh:distracted
npm run build
npm run deploy:pages
```

Requires `CLOUDFLARE_API_TOKEN` (and usually `CLOUDFLARE_ACCOUNT_ID`) in the environment.

---

## Cloudflare token setup

1. [API Tokens](https://dash.cloudflare.com/profile/api-tokens) → Create Token
2. Template **Edit Cloudflare Workers** or custom with **Account → Cloudflare Pages → Edit**
3. Include the account that owns `thesunriseparty`
4. Paste into `.env` as `CLOUDFLARE_API_TOKEN`
5. Account ID: dashboard right sidebar / Workers & Pages overview → `CLOUDFLARE_ACCOUNT_ID`

If deploy logs show `Authentication error [code: 10000]`, the token is expired or OAuth-scoped — replace it with a fresh **API Token** (not `wrangler login` OAuth).

---

## Stop / rebuild

```bash
cd /mnt/user/appdata/project-sunrise-updater
docker compose down
docker compose up -d --build
```

---

## Notes

- Tracker / Distracted FR auto is **OFF by default**. Hourly cycles clear `EVT-AUTO-*` / `DIST-AUTO-*` unless you explicitly set `TRACKER_FR_AUTO=1` or `DISTRACTED_FR_AUTO=1`.
- Curated Cover-up Watch narrative lives in `lib/data/distractions.ts`. Curated tracker narrative lives in `lib/data/timeline-events.ts`.
- Do not commit `.env` with real secrets. Only `.env.example` belongs in git.
- Style matches other Unraid stacks under `rushify/deploy/unraid/` (compose + `.env.example` + README + always-on `restart: unless-stopped`).
