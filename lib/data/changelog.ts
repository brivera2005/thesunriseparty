export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  highlights: string[];
}

/** Site iteration history - meta transparency for Project Sunrise builds */
export const changelog: ChangelogEntry[] = [
  {
    version: "0.28.0",
    date: "2026-07-11",
    title: "Pass 28 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 180+ dual-timeline entries (Pequot War through Scopes, 14th Amendment, Memphis/New Orleans massacres, and more)",
      "Rebuttal Desk expanded to 450+ sourced counters spanning Freedom-to-Fix, NSPMs, Schedule Policy/Career, climate, courts, and labor",
      "Project 2025 Tracker crossed 200+ verified actions including Freedom-to-Fix EPA memo, trade proclamations, NSPM-11/12, and Pacific fishing",
      "Blueprint safeguards deepened (SAFE-002 emergency/NSPM sunsets; SAFE-004 FR archival and FOIA backlog metrics) plus FIX cost-of-inaction sourcing",
      "Accountability page adds Freedom-to-Fix, NSPM cascade, trade-by-proclamation, and clemency-pattern facts",
    ],
  },
  {
    version: "0.27.0",
    date: "2026-07-11",
    title: "Pass 27 - Aggressive verifiable expansion",
    highlights: [
      "Hidden History expanded to 150+ dual-timeline entries (Pueblo Revolt through SFFA, Selma, Agent Orange, Muslim ban, and more)",
      "Rebuttal Desk expanded to 400+ sourced counters spanning Schedule F, DOGE, climate, elections, labor, and courts",
      "Project 2025 Tracker expanded to 180+ verified actions including fintech E.O.s 14405/14406, cryptographic/quantum orders, and regenerative agriculture",
      "Blueprint cost-of-inaction text deepened with GAO, BLS, Brennan, CRS, EPA, and NOAA sourcing markers",
      "Accountability page adds GAO improper-payments, fintech deregulation, Federal Register receipts, and vaccine-schedule capture facts",
    ],
  },
  {
    version: "0.26.0",
    date: "2026-07-11",
    title: "Pass 26 - Massive verifiable content expansion",
    highlights: [
      "Hidden History expanded to 120+ dual-timeline entries across Indigenous history, labor wars, coups, Jim Crow, LGBTQ and disability rights, environmental justice, and voting rights",
      "Rebuttal Desk expanded to 350+ sourced counters for high-value MAGA/conservative talking points",
      "Project 2025 Tracker expanded to 160+ verified actions including Federal Register DOGE orders, Schedule Policy/Career (E.O. 14410), AI deregulation, lands access, and vaccine-schedule politicization",
      "Blueprint adds Immigration, Housing, Media/Antitrust, Disability, and Indigenous Sovereignty policy fixes with cost-of-inaction citations",
      "Accountability, Mission, and Methodology pages deepened with FOIA, OpenSecrets, FEC, and CRS transparency facts",
    ],
  },
  {
    version: "0.25.0",
    date: "2026-07-10",
    title: "Pass 25 - Logo-first header, Donate, history expansion",
    highlights: [
      "Header is logo-only with a larger mark; removed Ctrl+K badge and Tracker/Blueprint mode toggle",
      "New /donate page with support channels (Stripe/ActBlue/Open Collective coming soon)",
      "Hidden History expanded to 60+ dual-timeline entries; prior textbook-attribution style removed",
      "Mobile density pass: 44px touch targets, compact cards, phone-first history list",
    ],
  },
  {
    version: "0.21.0",
    date: "2026-07-06",
    title: "Pass 21 - Infrastructure & polish",
    highlights: [
      "Comprehensive README.md - stack, local dev, Cloudflare Pages deploy, custom domains, and all major routes",
      "AGENTS.md contributor guide for Cursor and future dev passes",
      "125 verified tracker events (+5) and 240 rebuttals (+10)",
      "Link validation and deploy pipeline verified for v0.21 release",
    ],
  },
  {
    version: "0.20.0",
    date: "2026-07-06",
    title: "Pass 20 - Round number milestone",
    highlights: [
      "Human-readable site map at /sitemap - sections, live counts, and quick links",
      "Start Here guided tour at /start - four-step onboarding for new visitors",
      "120 verified tracker events (+5) and 230 rebuttals (+10)",
      "Homepage banner updated for 120-event milestone; rebuttal desk celebrates #230",
    ],
  },
  {
    version: "0.19.0",
    date: "2026-07-06",
    title: "Pass 19 - Quiz mode & transparency",
    highlights: [
      "Rebuttal quiz mode at /rebuttal?quiz=1 - multiple choice to pick the best counter",
      "Accountability page expanded with declassification section: Epstein files mandate, dark money, FOIA - tied to SAFE-004",
      "115 verified tracker events (+5) and 220 rebuttals (+10)",
      "Footer refreshed with Events Hub, Study Mode, Quiz Mode, and all new pages",
    ],
  },
  {
    version: "0.18.0",
    date: "2026-07-06",
    title: "Pass 18 - Saved items & accountability",
    highlights: [
      "Heart-icon bookmarks for tracker events and rebuttals - stored in localStorage",
      "My Saved section in command palette and new /saved page",
      "Dark money & elite capture transparency at /accountability with OpenSecrets and FEC links",
      "110 verified tracker events (+5) and 210 rebuttals (+10)",
      "OG preview images for contribute, saved, accountability, and methodology pages",
    ],
  },
  {
    version: "0.17.0",
    date: "2026-07-06",
    title: "Pass 17 - 200 rebuttals & contribute",
    highlights: [
      "200 sourced rebuttals - celebration banner on /rebuttal with link to entry #200",
      "New /contribute page for event, correction, and rebuttal submissions",
      "Tracker month-over-month events chart (Recharts) on stats dashboard",
      "105 verified tracker events (+5)",
    ],
  },
  {
    version: "0.16.0",
    date: "2026-07-06",
    title: "Pass 16 - 100 events milestone",
    highlights: [
      "100 verified tracker events - event #100 is a severity-10 democracy enforcement halt",
      "Homepage celebration banner and tracker CSV + iCal export tools",
      "190 rebuttals + command palette recent searches and pinned items",
    ],
  },
  {
    version: "0.15.0",
    date: "2026-07-06",
    title: "Pass 15 - Blueprint pages & clusters",
    highlights: [
      "Shareable blueprint policy pages at /blueprint/[id] with OG tags",
      "Related events cluster (“See also”) on tracker detail pages",
      "95 events + 180 rebuttals milestone",
    ],
  },
  {
    version: "0.14.0",
    date: "2026-07-06",
    title: "Pass 14 - Filters & scale-up",
    highlights: [
      "Heritage Mandate chapter filter on /tracker",
      "Rebuttal difficulty pills (easy / medium / hard) on desk and category pages",
      "90 events + 170 rebuttals milestone",
      "Submit a correction mailto on methodology page",
    ],
  },
  {
    version: "0.1.0",
    date: "2025-11-01",
    title: "Pass 1 - Launch",
    highlights: [
      "Project Sunrise goes live on Cloudflare Pages",
      "Home hub with tracker, blueprint, and rebuttal desk sections",
      "Primary-source citation modal with Wayback archives",
    ],
  },
  {
    version: "0.2.0",
    date: "2025-11-15",
    title: "Pass 2 - Tracker depth",
    highlights: [
      "Severity scoring (1-10) on every tracked action",
      "Category filters and month-grouped timeline",
      "Independent watchdog cross-references",
    ],
  },
  {
    version: "0.3.0",
    date: "2025-12-01",
    title: "Pass 3 - Rebuttal desk",
    highlights: [
      "Conversation helpers with copy-to-clipboard responses",
      "Category filters and study mode",
      "Difficulty tags (easy / medium / hard)",
    ],
  },
  {
    version: "0.4.0",
    date: "2025-12-15",
    title: "Pass 4 - Shareable pages",
    highlights: [
      "Per-event tracker detail pages (/tracker/[id])",
      "Per-rebuttal detail pages (/rebuttal/[id])",
      "Open Graph images per section",
    ],
  },
  {
    version: "0.5.0",
    date: "2026-01-10",
    title: "Pass 5 - Blueprint & mission",
    highlights: [
      "Progressive Blueprint with bill references",
      "Mission page and transparency pledge",
      "Command palette site search",
    ],
  },
  {
    version: "0.6.0",
    date: "2026-01-25",
    title: "Pass 6 - Data exports",
    highlights: [
      "JSON exports at /data/events.json and /data/rebuttals.json",
      "RSS feed at /feed.xml",
      "Sitemap and robots.txt generation at build",
    ],
  },
  {
    version: "0.7.0",
    date: "2026-02-10",
    title: "Pass 7 - Link integrity",
    highlights: [
      "validate-links script with verified URL registry",
      "Citation modal “verified” badges",
      "Automated broken-link CI gate",
    ],
  },
  {
    version: "0.8.0",
    date: "2026-03-01",
    title: "Pass 8 - Tracker analytics",
    highlights: [
      "Democracy threat level composite gauge",
      "Compare Trackers panel vs. CPR and observer",
      "Calendar view for timeline events",
    ],
  },
  {
    version: "0.9.0",
    date: "2026-04-15",
    title: "Pass 9 - Content milestone",
    highlights: [
      "60+ events and 100+ rebuttals",
      "Upcoming threats panel",
      "Schedule F deep-dive explainer",
    ],
  },
  {
    version: "0.10.0",
    date: "2026-05-15",
    title: "Pass 10 - Events hub",
    highlights: [
      "Dedicated /events landing page",
      "P2025 chapter map visualization",
      "Embed snippets for sharing tracker events",
    ],
  },
  {
    version: "0.11.0",
    date: "2026-06-15",
    title: "Pass 11 - Scale-up",
    highlights: [
      "75 events, 140 rebuttals, 196 verified links",
      "Lazy-loaded rebuttal cards for performance",
      "Enhanced metadata and JSON-LD",
    ],
  },
  {
    version: "0.13.0",
    date: "2026-07-06",
    title: "Pass 13 - Methodology & tiers",
    highlights: [
      "Methodology page documenting sourcing, verification, and severity scoring",
      "Source tier badges (Primary / Institutional / Fact-check) in citation modal",
      "85 events + 160 rebuttals milestone",
      "Homepage platform-at-a-glance infographic stats block",
    ],
  },
  {
    version: "0.12.0",
    date: "2026-07-06",
    title: "Pass 12 - Heatmap & SEO",
    highlights: [
      "Sector severity heatmap on /tracker",
      "Rebuttal category landing pages for SEO",
      "80 events + 150 rebuttals milestone",
      "This changelog page - because receipts apply to us too",
    ],
  },
];
