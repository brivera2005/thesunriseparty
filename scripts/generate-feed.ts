/**
 * Generates public/feed.xml and public/feed.ics from timeline events at build time.
 * Run: npx tsx scripts/generate-feed.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { timelineEvents } from "../lib/data/timeline-events";
import { eventDetailPath } from "../lib/data/timeline-events";

const SITE = "https://thesunriseparty.pages.dev";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeIcal(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function foldIcalLine(line: string): string {
  const max = 75;
  if (line.length <= max) return line;
  const parts: string[] = [line.slice(0, max)];
  let i = max;
  while (i < line.length) {
    parts.push(` ${line.slice(i, i + max - 1)}`);
    i += max - 1;
  }
  return parts.join("\r\n");
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

function toIcalDate(dateStr: string): string {
  return dateStr.replace(/-/g, "");
}

const sorted = [...timelineEvents].sort((a, b) => b.Date.localeCompare(a.Date));

const items = sorted
  .map((event) => {
    const title = `${event.Action_Type}: ${truncate(event.Description, 140)}`;
    const pubDate = new Date(`${event.Date}T12:00:00Z`).toUTCString();
    const description = `${event.Description} (Severity ${event.Severity_Score}/10 · ${event.category})`;

    return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${SITE}${eventDetailPath(event.Event_ID)}</link>
      <guid isPermaLink="false">${escapeXml(event.Event_ID)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <category>${escapeXml(event.category)}</category>
    </item>`;
  })
  .join("\n");

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Project Sunrise - Project 2025 Tracker</title>
    <link>${SITE}/tracker</link>
    <description>Verified administrative actions tracking Project 2025 implementation. Primary sources on every event.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

const icalEvents = sorted
  .map((event) => {
    const summary = escapeIcal(
      `${event.Action_Type}: ${truncate(event.Description, 120)}`
    );
    const description = escapeIcal(
      `${event.Description}\\n\\nSeverity: ${event.Severity_Score}/10\\nCategory: ${event.category}\\nSectors: ${event.Impacted_Sectors.join(", ")}`
    );
    const url = `${SITE}${eventDetailPath(event.Event_ID)}`;

    const lines = [
      "BEGIN:VEVENT",
      `UID:${event.Event_ID}@thesunriseparty.pages.dev`,
      `DTSTAMP:${toIcalDate(new Date().toISOString().slice(0, 10))}T120000Z`,
      `DTSTART;VALUE=DATE:${toIcalDate(event.Date)}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `URL:${url}`,
      `CATEGORIES:${escapeIcal(event.category)}`,
      "END:VEVENT",
    ];

    return lines.map(foldIcalLine).join("\r\n");
  })
  .join("\r\n");

const ical = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Project Sunrise//Project 2025 Tracker//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  `X-WR-CALNAME:Project Sunrise Tracker`,
  `X-WR-CALDESC:Verified Project 2025 administrative actions`,
  icalEvents,
  "END:VCALENDAR",
].join("\r\n");

const publicDir = join(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "feed.xml"), feed, "utf8");
writeFileSync(join(publicDir, "feed.ics"), ical, "utf8");

console.log(
  `✅ Generated public/feed.xml and public/feed.ics with ${sorted.length} tracker events`
);
