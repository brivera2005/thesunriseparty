# Project Sunrise

**Democracy needs receipts.** Project Sunrise is a static civic transparency platform that tracks Project 2025 executive actions, provides sourced rebuttals for real conversations, and maps evidence-based progressive policy fixes.

**Live site:** [https://thesunriseparty.pages.dev](https://thesunriseparty.pages.dev)

**Source:** [https://github.com/brivera2005/thesunriseparty](https://github.com/brivera2005/thesunriseparty)

---

## What it is

| Section | Description |
| -------- | ------------ |
| **Project 2025 Tracker** | Verified executive actions with severity scores, primary sources, and cross-links to independent watchdogs |
| **Rebuttal Desk** | Copy-ready, sourced counters for common MAGA talking points — study mode, quiz mode, and category filters |
| **Progressive Blueprint** | Policy fixes with bill numbers, economic modeling, and irreversible safeguards |
| **Accountability** | Dark money, FOIA, declassification, and elite-capture transparency |

Data exports: JSON, CSV, RSS, and iCal feeds. All content is statically generated — no database, no user accounts on the server.

---

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- TypeScript
- Tailwind CSS 4
- [shadcn/ui](https://ui.shadcn.com) + Radix primitives
- [Recharts](https://recharts.org) (tracker stats)
- [Zustand](https://zustand.docs.pmnd.rs) (client state — bookmarks, command palette)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)

---

## Major routes

| Route | Purpose |
| ----- | ------- |
| [`/`](https://thesunriseparty.pages.dev/) | Home hub — threat gauge, portal cards, recent events |
| [`/start`](https://thesunriseparty.pages.dev/start) | Four-step guided tour for new visitors |
| [`/sitemap`](https://thesunriseparty.pages.dev/sitemap) | Human-readable navigation hub with live counts |
| [`/tracker`](https://thesunriseparty.pages.dev/tracker) | Full Project 2025 event tracker |
| [`/tracker/[id]`](https://thesunriseparty.pages.dev/tracker/EVT-2025-0120-001) | Event detail pages |
| [`/events`](https://thesunriseparty.pages.dev/events) | Events hub — P2025 chapter map |
| [`/rebuttal`](https://thesunriseparty.pages.dev/rebuttal) | All rebuttals |
| [`/rebuttal?study=1`](https://thesunriseparty.pages.dev/rebuttal?study=1) | Study mode (flashcards) |
| [`/rebuttal?quiz=1`](https://thesunriseparty.pages.dev/rebuttal?quiz=1) | Quiz mode (multiple choice) |
| [`/rebuttal/[id]`](https://thesunriseparty.pages.dev/rebuttal/election-stolen) | Individual rebuttal pages |
| [`/rebuttal/category/[slug]`](https://thesunriseparty.pages.dev/rebuttal/category/democracy) | Category-filtered rebuttals |
| [`/blueprint`](https://thesunriseparty.pages.dev/blueprint) | Progressive policy overview |
| [`/blueprint/[id]`](https://thesunriseparty.pages.dev/blueprint/FIX-HC-001) | Shareable policy pages |
| [`/accountability`](https://thesunriseparty.pages.dev/accountability) | Dark money & accountability |
| [`/contribute`](https://thesunriseparty.pages.dev/contribute) | Submit events, corrections, rebuttals |
| [`/saved`](https://thesunriseparty.pages.dev/saved) | Bookmarked items (localStorage) |
| [`/methodology`](https://thesunriseparty.pages.dev/methodology) | Research & scoring standards |
| [`/mission`](https://thesunriseparty.pages.dev/mission) | Transparency pledge |
| [`/changelog`](https://thesunriseparty.pages.dev/changelog) | Pass-by-pass build history |

**Exports & feeds**

| Route | Format |
| ----- | ------ |
| [`/data/events.json`](https://thesunriseparty.pages.dev/data/events.json) | Events JSON |
| [`/data/events.csv`](https://thesunriseparty.pages.dev/data/events.csv) | Events CSV |
| [`/data/rebuttals.json`](https://thesunriseparty.pages.dev/data/rebuttals.json) | Rebuttals JSON |
| [`/feed.xml`](https://thesunriseparty.pages.dev/feed.xml) | RSS |
| [`/feed.ics`](https://thesunriseparty.pages.dev/feed.ics) | iCal |
| [`/sitemap.xml`](https://thesunriseparty.pages.dev/sitemap.xml) | XML sitemap |

---

## Run locally

```bash
git clone https://github.com/brivera2005/thesunriseparty.git
cd sunrise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Development server |
| `npm run build` | Production static export → `out/` |
| `npm run start` | Serve production build (after build) |
| `npm run lint` | ESLint |
| `npm run validate-links` | Check all citation URLs in `lib/data/` |
| `npm run generate-feed` | Regenerate RSS/iCal (runs in prebuild) |
| `npm run generate-data` | Regenerate JSON/CSV exports (runs in prebuild) |

The `prebuild` hook runs feed generation, SEO artifacts, and data exports automatically before `next build`.

---

## Deploy to Cloudflare Pages

This project uses **static export** (`output: "export"` in `next.config.ts`). The build output directory is `out/`.

### One-time setup

1. Create a [Cloudflare](https://dash.cloudflare.com) account.
2. Go to **Workers & Pages → Create → Pages → Connect to Git** (or direct upload).
3. Project name: `thesunriseparty` (matches current production).

**Build settings (Git integration)**

| Setting | Value |
| ------- | ----- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 20+ |

### Manual deploy (Wrangler CLI)

```bash
npm run build
npx wrangler pages deploy out --project-name=thesunriseparty
```

### Release checklist

```bash
npm run validate-links   # must pass — updates lib/data/validated-urls.ts
npm run build
npx wrangler pages deploy out --project-name=thesunriseparty
```

Update `lib/data/changelog.ts` and milestone UI before each pass deploy.

---

## Custom domains

Production currently serves at **thesunriseparty.pages.dev**. You can attach additional domains in the Cloudflare dashboard.

### Attach `projectsunrise.pages.dev` (or any `*.pages.dev` subdomain)

Cloudflare Pages subdomains are assigned per project. To use a different `*.pages.dev` name:

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**.
2. Select the **thesunriseparty** project.
3. Go to **Custom domains** → **Set up a custom domain**.
4. Enter the desired subdomain (e.g. `projectsunrise.pages.dev` if available on your account).
5. Cloudflare provisions DNS automatically for `*.pages.dev` names on the same account.

> **Note:** Each Pages project gets one default `*.pages.dev` subdomain at creation time. Adding another `*.pages.dev` name may require creating a separate Pages project or renaming the project under **Settings → General**.

### Attach a custom domain (e.g. `projectsunrise.org`)

1. **Workers & Pages** → select project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `projectsunrise.org` or `www.projectsunrise.org`).
3. If the domain is on Cloudflare, DNS records are added automatically.
4. If the domain is external, add the CNAME record Cloudflare provides:
   - `@` or `www` → `<project>.pages.dev`
5. Wait for SSL provisioning (usually minutes). HTTPS is automatic.

Both the default Pages URL and custom domains serve the same static `out/` build. Update `SITE_URL` in `lib/metadata.ts` if you change the canonical production URL.

---

## Contribute

See [`AGENTS.md`](./AGENTS.md) for developer and Cursor agent conventions.

**Content submissions:** [https://thesunriseparty.pages.dev/contribute](https://thesunriseparty.pages.dev/contribute) · [GitHub Issues](https://github.com/brivera2005/thesunriseparty/issues)

- **Tracker events** — primary source required (EO, Federal Register, GAO, court docket, etc.)
- **Rebuttals** — claim, counter, stab line, and at least two citations
- **Corrections** — link to the page and the corrected source

Editorial standards: [https://thesunriseparty.pages.dev/methodology](https://thesunriseparty.pages.dev/methodology)

---

## Project structure

```
app/                  Next.js App Router pages
components/           UI components (tracker, rebuttal, layout, etc.)
lib/data/             Source-of-truth data (events, rebuttals, policies, citations)
scripts/              Build helpers (validate-links, generate-feed, generate-seo)
public/               Static assets, OG images, generated exports
out/                  Static export output (deploy this)
```

---

## License

Open source. Data exports are CC-BY-4.0 — cite [Project Sunrise](https://thesunriseparty.pages.dev).
