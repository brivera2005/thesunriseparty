# AGENTS.md - Project Sunrise

Guidance for Cursor agents and human contributors working on this repository.

<!-- BEGIN:nextjs-agent-rules -->
## Next.js version note

This is Next.js 16 with breaking changes from earlier versions. Read relevant docs in `node_modules/next/dist/docs/` before modifying routing or data fetching. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project overview

- **Live:** [https://thesunriseparty.pages.dev](https://thesunriseparty.pages.dev)
- **Stack:** Next.js 16 static export, TypeScript, Tailwind 4, shadcn/ui
- **Deploy:** Cloudflare Pages - project name `thesunriseparty`, output dir `out/`
- **Canonical URL constant:** `lib/metadata.ts` → `SITE_URL`

---

## Repository layout

| Path | Purpose |
| ---- | ------- |
| `lib/data/timeline-events.ts` | Tracker events (source of truth) |
| `lib/data/conversation-helpers.ts` | Rebuttals (source of truth) |
| `lib/data/citations.ts` | Shared citation objects for events & rebuttals |
| `lib/data/policies.ts` | Blueprint policy fixes & safeguards |
| `lib/data/changelog.ts` | Version history for `/changelog` |
| `lib/data/sitemap-content.ts` | Human-readable sitemap sections |
| `lib/data/validated-urls.ts` | **Auto-generated** by `validate-links` - do not hand-edit |
| `scripts/validate-links.mjs` | HTTP-checks all URLs in `lib/data/*.ts` |
| `scripts/generate-feed.ts` | RSS + iCal |
| `scripts/generate-data-export.ts` | JSON + CSV exports |
| `scripts/generate-seo.ts` | XML sitemap + metadata artifacts |

---

## Pass workflow (typical release)

Each "pass" increments content and ships a version bump:

1. **Content** - Add events to `timeline-events.ts` and/or rebuttals to `conversation-helpers.ts`
2. **Milestones** - Update banners in `components/home-hub.tsx`, `components/rebuttal/rebuttal-page.tsx`, `lib/data/sitemap-content.ts`
3. **Changelog** - Add entry at top of `lib/data/changelog.ts` (semver, e.g. `0.21.0`)
4. **Validate** - `npm run validate-links` (must exit 0; rewrites `validated-urls.ts`)
5. **Build** - `npm run build` (runs prebuild generators)
6. **Deploy** - `npx wrangler pages deploy out --project-name=thesunriseparty`

### Content conventions

**Events**

- ID format: `EVT-YYYY-MMDD-NNN` (sequential number at end)
- Include: Date, Action_Type, Description, Severity_Score (1-10), Sources (from `citations.ts`), Linked_Fix_ID, category, p2025Pillar, externalTrackers
- Typical pass increment: +5 events

**Rebuttals**

- Unique kebab-case `id` (becomes `/rebuttal/[id]`)
- Fields: `category[]`, `theySay`, `youSay`, `stab`, `sources[]` (via `cite()`), `difficulty`, `relatedClaims[]`
- Typical pass increment: +10 rebuttals
- Reuse existing citations from `citations.ts` when possible; add new keys to `citations.ts` only when needed

**Citations**

- Every factual claim needs primary or authoritative secondary sources
- Prefer: `.gov`, CRS, GAO, FEC, court opinions, established research orgs
- Run `validate-links` after adding URLs

---

## Code style

- Match existing patterns in surrounding files
- Minimize scope - one pass, one focused diff
- No hand-editing generated files: `validated-urls.ts`, `public/data/*`, `public/sitemap.xml`, `public/feed.*`
- Static export only - no server actions, no API routes that require a Node server
- Client components use `"use client"`; data files are plain TS exports

---

## UI patterns

- **Milestone banners** - Show highest tier only (e.g. 125 events hides 120 banner). Index rebuttals at `length - 1` for milestone links.
- **Command palette** - `components/layout/command-palette.tsx` indexes events + rebuttals automatically from data files
- **OG images** - SVG previews in `public/og/`; section metadata in `lib/metadata.ts`

---

## Testing before deploy

```bash
npm run lint
npm run validate-links
npm run build
```

Verify counts after build:

- Events: `timelineEvents.length` in data file
- Rebuttals: `conversationHelpers.length`
- Sitemap URLs: check build log or `public/sitemap.xml`

---

## Common tasks

### Add a tracker event

1. Append to `timelineEvents` array in `lib/data/timeline-events.ts`
2. Use existing `citations.*` references
3. Link to a blueprint fix ID from `lib/data/policies.ts` when relevant

### Add a rebuttal

1. Append to `conversationHelpers` in `lib/data/conversation-helpers.ts`
2. Use `cite()` helper from `./conversation-citations`
3. Pick categories from `rebuttalCategories` type list

### Fix a broken link

1. Update URL in the source data file (`citations.ts` or inline in rebuttal)
2. Re-run `npm run validate-links`
3. If permanently dead, consider Wayback URL (document in commit message)

### Update README / docs

- Keep route table in sync with `app/` directory
- Document deploy and custom-domain steps in README.md (not duplicated here)

---

## Do not

- Commit secrets (`.env`, API keys)
- Force-push to main without explicit request
- Skip `validate-links` before deploy
- Edit `out/` or `.next/` directly
- Add server-only features incompatible with `output: "export"`

---

## External references

- [Contribute page](https://thesunriseparty.pages.dev/contribute) - public submission guide
- [Methodology](https://thesunriseparty.pages.dev/methodology) - editorial standards
- [Changelog](https://thesunriseparty.pages.dev/changelog) - shipped pass history
- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
