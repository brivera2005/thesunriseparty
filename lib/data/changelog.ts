export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  highlights: string[];
}

/** Site iteration history - meta transparency for Project Sunrise builds */
export const changelog: ChangelogEntry[] = [
  {
    version: "0.41.0",
    date: "2026-07-13",
    title: "Pass 41 - Newbie clarity + live-mode overhaul",
    highlights: [
      "Landing hero answers in under 10 words: Track the agenda. Counter the lies. Build the fix. CTAs: Start tour / Rebuttal Desk / Live bills",
      "Deleted design-meta fluff (white canvas, navy type, sunrise accents, pick a section and go deep)",
      "Live pulse strip: legislation last-updated, high-severity tracker count, scenarios, rebuttals",
      "Guided tour reordered tools-first: Rebuttal, History, Tracker, Legislation, Scenarios, Blueprint, Mission last; one headline + two sentences per step",
      "PageHero and nav copy tightened sitewide; SW cache bumped to sunrise-v41",
    ],
  },
  {
    version: "0.40.0",
    date: "2026-07-13",
    title: "Pass 40 - Complex Impact Scenarios",
    highlights: [
      "New /scenarios hub with 32 multi-step causal chains linking administration actions, Congress, budgets, propaganda, and lived outcomes",
      "Vertical actor-color timelines, Gets Y vs Should Get Z panels, topic filters, and deep links to Tracker events and Blueprint fixes",
      "Scenarios wired into More nav (top), homepage grid, footer, sitemap, SEO, and command-palette search",
      "Plain-language family personas with verified institutional sources across healthcare, housing, labor, climate, immigration, and more",
    ],
  },
  {
    version: "0.39.0",
    date: "2026-07-13",
    title: "Pass 39 - Live Legislation Tracker + nav overhaul",
    highlights: [
      "New /legislation (alias /bills) live tracker for 119th Congress bills with party-colored sponsors, roll-call bars, and progressive analysis",
      "Hybrid data: curated major bills + scripts/fetch-legislation.ts for Congress.gov API refresh when CONGRESS_API_KEY is set",
      "Nav decluttered: primary = Rebuttal · History · Tracker · Legislation · Blueprint; overflow More menu + Donate accent",
      "Homepage, footer, sitemap, SEO, and command palette wired for legislation search",
    ],
  },
  {
    version: "0.38.0",
    date: "2026-07-13",
    title: "Pass 38 - Blueprint common-sense pillars expanded",
    highlights: [
      "Blueprint FIX policies expanded from 10 to 24 pillars (childcare, gun safety, reproductive rights, tax fairness, Social Security/Medicare, rural care, veterans, transit, anti-corruption, drug pricing, living wage, antitrust, climate jobs, mental health, plus deepened originals)",
      "Every policy and safeguard now ships whyItWorks, whyPeopleCallItExtreme, theGaslight, alreadyWorksWhere, cost of inaction, and verified sources",
      "Blueprint accordion and /blueprint/[id] share pages surface Evidence & framing subsections; safeguards get the same treatment plus copy-link",
      "Shareable pages for all new IDs (e.g. /blueprint/FIX-CC-001, /blueprint/FIX-GUN-001); search indexes the new fields",
    ],
  },
  {
    version: "0.37.0",
    date: "2026-07-13",
    title: "Pass 37 - Mobile cache bust + Kamala projection rebuttal",
    highlights: [
      "Service worker rewritten: network-first for HTML/CSS/JS, hard cache bump to sunrise-v37 (fixes phones stuck on pre-Pass-35 layout)",
      "PWA register forces SW update, updateViaCache none, one-time soft reload on controllerchange",
      "New Rebuttal Desk entry kamala-would-have-been-worse with search aliases (kamala worse, dodged a bullet, if kamala won)",
      "Blueprint schema prepared for gaslight-exposure fields; pillar expansion continues next",
    ],
  },
  {
    version: "0.36.0",
    date: "2026-07-12",
    title: "Pass 36 - Cohesion + sources that actually open",
    highlights: [
      "Unified white + navy + sunrise-orange palette across every route; killed mode-tracker/blueprint and page-specific gradient islands",
      "BrandLogo only in header/footer at consistent size; PageShell wraps every page",
      "Homepage rebuilt as a clear grid of all major sections (Rebuttal, History, Tracker, Blueprint, Mission, Accountability, Methodology, Donate, Contribute, Start, Saved)",
      "Fixed citation Wayback links that used fabricated timestamps (often 404 for recent White House pages) — now use durable archive.org/web/*/ calendar URLs",
      "Citation modal prefers archive when primary is unverified; absolute https-only hrefs; validate-links soft-404 detection expanded",
    ],
  },
  {
    version: "0.34.0",
    date: "2026-07-11",
    title: "Pass 34 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 360+ dual-timeline entries (Marbury through Bruen, Wilmot, Pacific Railway, Gettysburg Address, Prohibition, Kerner, ERA, Prop 13, AUMF, and more)",
      "Rebuttal Desk crossed 750 sourced counters spanning history deep cuts, Schedule F, metals tariffs, DPA waivers, housing EO stacks, elections mandates, and continuity optics",
      "Project 2025 Tracker crossed 320 verified actions including Schedule F continuity, tariff proclamations, DPA waivers, citizenship-verification, FEMA review, and lands deregulation",
      "New Archives / NPS / State Department / Oyez / Congress.gov citations for judicial review, Reconstruction statutes, WWI diplomacy, Cold War strategy, and modern gun-rights doctrine",
      "Homepage and rebuttal milestone banners updated for 320-event and 750-rebuttal markers; link validation and Cloudflare Pages deploy for v0.34",
    ],
  },
  {
    version: "0.33.0",
    date: "2026-07-11",
    title: "Pass 33 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 330+ dual-timeline entries (Constitutional Convention through Loper Bright, Pendleton, Antietam, TVA/WPA, Miranda, Camp David, TARP, Kansas tax experiment, and more)",
      "Rebuttal Desk crossed 700 sourced counters spanning history deep cuts, Schedule F, metals tariffs, DPA waivers, housing EO stacks, elections mandates, and Chevron/Loper Bright",
      "Project 2025 Tracker crossed 300 verified actions including Schedule F continuity, tariff proclamations, DPA waivers, citizenship-verification, FEMA review, and lands deregulation",
      "New Archives / NPS / State Department / Oyez / Congress.gov citations for civil-service reform, due-process landmarks, Cold War doctrine, and modern regulatory power shifts",
      "Homepage and rebuttal milestone banners updated for 300-event and 700-rebuttal markers; link validation and Cloudflare Pages deploy for v0.33",
    ],
  },
  {
    version: "0.32.0",
    date: "2026-07-11",
    title: "Pass 32 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 300+ dual-timeline entries (Stamp Act through Trayvon, 13th/15th Amendments, New Deal, Medicare, Title IX, Saturday Night Massacre, and more)",
      "Rebuttal Desk crossed 650 sourced counters spanning history deep cuts, Schedule F, metals tariffs, DPA waivers, housing EO stacks, and elections mandates",
      "Project 2025 Tracker crossed 280 verified actions including Schedule F continuity, tariff proclamations, DPA waivers, citizenship-verification, and FEMA review continuance",
      "New National Archives / NPS / Congress.gov / FDA / SSA citations for constitutional amendments, Progressive regulation, New Deal, civil rights, and post-9/11 policy",
      "Homepage and rebuttal milestone banners updated for 280-event and 650-rebuttal markers; link validation and Cloudflare Pages deploy for v0.32",
    ],
  },
  {
    version: "0.31.0",
    date: "2026-07-11",
    title: "Pass 31 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 270+ dual-timeline entries (Treaty of Tripoli through Trump immunity, Manzanar, Church Committee, Deepwater, Dominion v. Fox, and more)",
      "Rebuttal Desk crossed 600 sourced counters spanning Schedule F, metals tariffs, DPA waivers, Kickapoo permitting, housing EO stacks, and history deep cuts",
      "Project 2025 Tracker crossed 260 verified actions including housing continuity, DPA industrial waivers, treaty-exit memos, elections mandates, and lands deregulation",
      "New and reused Federal Register / White House / Archives citations for industrial policy, Indigenous permitting, FOIA transparency, and civil-service conversion",
      "Homepage and rebuttal milestone banners updated for 260-event and 600-rebuttal markers; link validation and Cloudflare Pages deploy for v0.31",
    ],
  },
  {
    version: "0.30.0",
    date: "2026-07-11",
    title: "Pass 30 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 240+ dual-timeline entries (Lexington through Shelby deep cuts, Little Bighorn, Sacco and Vanzetti, Hiroshima, and more)",
      "Rebuttal Desk crossed 550 sourced counters spanning metals tariffs, DPA waivers, international-organization exits, Kickapoo permit denial, and sports federalization",
      "Project 2025 Tracker crossed 240 verified actions including DPA Section 303 waivers, aluminum-steel-copper tariffs, treaty-exit memos, and Preserving America's Game",
      "New Federal Register and White House citations for industrial-policy, Indigenous permitting, appropriations implementation, and critical-pay memoranda",
      "Homepage and rebuttal milestone banners updated for 240-event and 550-rebuttal markers; link validation and Cloudflare Pages deploy for v0.30",
    ],
  },
  {
    version: "0.29.0",
    date: "2026-07-11",
    title: "Pass 29 - Keep expanding verifiable room",
    highlights: [
      "Hidden History expanded to 210 dual-timeline entries (Salem through COVID, Fort Pillow, Bakke, Tet, Guadalupe Hidalgo, and more)",
      "Rebuttal Desk hit 500 sourced counters spanning citizenship-verification, DEI contractor bans, housing EOs, de minimis trade, NSPMs, and FOIA",
      "Project 2025 Tracker crossed 220 verified actions including citizenship-verification elections order, TrumpIRA.gov, FEMA Review continuance, and E.O. 14389 tariff toggles",
      "New Federal Register and White House citations for housing, customs, arms-transfer, recovery, and Made in America advertising orders",
      "Link validation and Cloudflare Pages deploy for v0.29",
    ],
  },
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
