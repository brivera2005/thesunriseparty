/**
 * Generates public/sitemap.xml and public/robots.txt at build time.
 * Run: npx tsx scripts/generate-seo.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { timelineEvents } from "../lib/data/timeline-events";
import { conversationHelpers } from "../lib/data/conversation-helpers";
import { policyFixes, safeguardItems, blueprintDetailPath } from "../lib/data/policies";
import { eventDetailPath } from "../lib/data/timeline-events";
import { rebuttalDetailPath, rebuttalCategorySlugs } from "../lib/data/conversation-helpers";

const SITE = "https://thesunriseparty.pages.dev";

type SitemapEntry = {
  loc: string;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
};

const STATIC_PAGES: SitemapEntry[] = [
  { loc: `${SITE}/`, changefreq: "weekly", priority: 1.0 },
  { loc: `${SITE}/start`, changefreq: "monthly", priority: 0.9 },
  { loc: `${SITE}/sitemap`, changefreq: "weekly", priority: 0.85 },
  { loc: `${SITE}/mission`, changefreq: "monthly", priority: 0.8 },
  { loc: `${SITE}/methodology`, changefreq: "monthly", priority: 0.75 },
  { loc: `${SITE}/contribute`, changefreq: "monthly", priority: 0.7 },
  { loc: `${SITE}/saved`, changefreq: "monthly", priority: 0.65 },
  { loc: `${SITE}/accountability`, changefreq: "monthly", priority: 0.75 },
  { loc: `${SITE}/tracker`, changefreq: "daily", priority: 0.9 },
  { loc: `${SITE}/events`, changefreq: "daily", priority: 0.85 },
  { loc: `${SITE}/blueprint`, changefreq: "monthly", priority: 0.85 },
  { loc: `${SITE}/rebuttal`, changefreq: "weekly", priority: 0.85 },
  { loc: `${SITE}/history`, changefreq: "weekly", priority: 0.88 },
  { loc: `${SITE}/history/rebuttals`, changefreq: "weekly", priority: 0.82 },
  { loc: `${SITE}/changelog`, changefreq: "monthly", priority: 0.5 },
  { loc: `${SITE}/feed.xml`, changefreq: "daily", priority: 0.6 },
  { loc: `${SITE}/feed.ics`, changefreq: "daily", priority: 0.6 },
  { loc: `${SITE}/data/events.json`, changefreq: "daily", priority: 0.5 },
  { loc: `${SITE}/data/events.csv`, changefreq: "daily", priority: 0.5 },
  { loc: `${SITE}/data/rebuttals.json`, changefreq: "weekly", priority: 0.5 },
];

function toLastmod(dateStr: string): string {
  return dateStr;
}

function buildSitemap(entries: SitemapEntry[]): string {
  const urls = entries
    .map((entry) => {
      const parts = [
        "  <url>",
        `    <loc>${entry.loc}</loc>`,
        entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : "",
        entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : "",
        entry.priority !== undefined
          ? `    <priority>${entry.priority.toFixed(1)}</priority>`
          : "",
        "  </url>",
      ].filter(Boolean);
      return parts.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const eventPages: SitemapEntry[] = timelineEvents.map((event) => ({
  loc: `${SITE}${eventDetailPath(event.Event_ID)}`,
  lastmod: toLastmod(event.Date),
  changefreq: "monthly",
  priority: 0.7,
}));

const rebuttalPages: SitemapEntry[] = conversationHelpers.map((entry) => ({
  loc: `${SITE}${rebuttalDetailPath(entry.id)}`,
  changefreq: "monthly",
  priority: 0.65,
}));

const rebuttalCategoryPages: SitemapEntry[] = rebuttalCategorySlugs.map((slug) => ({
  loc: `${SITE}/rebuttal/category/${slug}`,
  changefreq: "weekly",
  priority: 0.7,
}));

const blueprintPages: SitemapEntry[] = [
  ...policyFixes.map((policy) => ({
    loc: `${SITE}${blueprintDetailPath(policy.id)}`,
    changefreq: "monthly",
    priority: 0.75,
  })),
  ...safeguardItems.map((safeguard) => ({
    loc: `${SITE}${blueprintDetailPath(safeguard.id)}`,
    changefreq: "monthly",
    priority: 0.7,
  })),
];

const allEntries = [
  ...STATIC_PAGES,
  ...eventPages,
  ...rebuttalPages,
  ...rebuttalCategoryPages,
  ...blueprintPages,
];
const sitemap = buildSitemap(allEntries);

const robots = `# Project Sunrise - https://thesunriseparty.pages.dev
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

const publicDir = join(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");

console.log(
  `✅ Generated sitemap.xml (${allEntries.length} URLs) and robots.txt`
);
