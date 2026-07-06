/**
 * Generates public/data/events.json, public/data/rebuttals.json, and public/data/events.csv.
 * Run: npx tsx scripts/generate-data-export.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { timelineEvents } from "../lib/data/timeline-events";
import { conversationHelpers } from "../lib/data/conversation-helpers";
import { getChapterEventCounts } from "../lib/data/p2025-chapters";
import { eventDetailPath } from "../lib/data/timeline-events";

const SITE = "https://thesunriseparty.pages.dev";
const publicDataDir = join(process.cwd(), "public", "data");
mkdirSync(publicDataDir, { recursive: true });

const chapterCounts = getChapterEventCounts();
const pillarToChapters = new Map<string, string[]>();
for (const { chapter, events } of chapterCounts) {
  for (const event of events) {
    if (!event.p2025Pillar) continue;
    const list = pillarToChapters.get(event.p2025Pillar) ?? [];
    if (!list.includes(chapter.id)) list.push(chapter.id);
    pillarToChapters.set(event.p2025Pillar, list);
  }
}

const eventsExport = {
  meta: {
    site: SITE,
    generated: new Date().toISOString(),
    count: timelineEvents.length,
    license: "CC-BY-4.0 — cite Project Sunrise (thesunriseparty.pages.dev)",
  },
  events: timelineEvents.map((event) => ({
    id: event.Event_ID,
    date: event.Date,
    actionType: event.Action_Type,
    description: event.Description,
    severity: event.Severity_Score,
    category: event.category,
    impactedSectors: event.Impacted_Sectors,
    p2025Pillar: event.p2025Pillar ?? null,
    p2025Chapters: event.p2025Pillar
      ? pillarToChapters.get(event.p2025Pillar) ?? []
      : [],
    linkedFixId: event.Linked_Fix_ID,
    url: `${SITE}/tracker/${encodeURIComponent(event.Event_ID)}`,
    sources: event.Sources.map((s) => ({
      id: s.id,
      title: s.title,
      publisher: s.publisher,
      url: s.url,
      date: s.date,
    })),
    externalTrackers: event.externalTrackers ?? [],
  })),
};

const rebuttalsExport = {
  meta: {
    site: SITE,
    generated: new Date().toISOString(),
    count: conversationHelpers.length,
    license: "CC-BY-4.0 — cite Project Sunrise (thesunriseparty.pages.dev)",
  },
  rebuttals: conversationHelpers.map((entry) => ({
    id: entry.id,
    categories: entry.category,
    theySay: entry.theySay,
    youSay: entry.youSay,
    stab: entry.stab ?? null,
    difficulty: entry.difficulty ?? null,
    relatedClaims: entry.relatedClaims ?? [],
    url: `${SITE}/rebuttal/${entry.id}`,
    sources: entry.sources.map((s) => ({
      id: s.id,
      title: s.title,
      publisher: s.publisher,
      url: s.url,
      date: s.date,
    })),
  })),
};

writeFileSync(
  join(publicDataDir, "events.json"),
  JSON.stringify(eventsExport, null, 2),
  "utf8"
);
writeFileSync(
  join(publicDataDir, "rebuttals.json"),
  JSON.stringify(rebuttalsExport, null, 2),
  "utf8"
);

function csvEscape(value: string): string {
  if (value.includes('"') || value.includes(",") || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const csvHeader = [
  "id",
  "date",
  "action_type",
  "description",
  "severity",
  "category",
  "impacted_sectors",
  "p2025_pillar",
  "linked_fix_id",
  "url",
].join(",");

const csvRows = timelineEvents.map((event) =>
  [
    event.Event_ID,
    event.Date,
    event.Action_Type,
    event.Description,
    String(event.Severity_Score),
    event.category,
    event.Impacted_Sectors.join("; "),
    event.p2025Pillar ?? "",
    event.Linked_Fix_ID ?? "",
    `${SITE}${eventDetailPath(event.Event_ID)}`,
  ]
    .map(csvEscape)
    .join(",")
);

writeFileSync(
  join(publicDataDir, "events.csv"),
  [csvHeader, ...csvRows].join("\n"),
  "utf8"
);

console.log(
  `✅ Generated public/data/events.json (${eventsExport.meta.count} events), events.csv, and rebuttals.json (${rebuttalsExport.meta.count} rebuttals)`
);
