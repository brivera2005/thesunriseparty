import fs from "fs";

function ensureImport(t) {
  if (t.includes("format-date")) return t;
  const line = 'import { formatDateUS, formatMonthUS } from "@/lib/format-date";\n';
  if (t.includes('from "@/lib/utils"')) {
    return t.replace(
      /import \{[^}]*\} from "@\/lib\/utils";?/,
      (m) => `${m.endsWith(";") ? m : m + ";"}\n${line.trim()}`
    );
  }
  // after "use client" or first import
  if (t.startsWith('"use client"')) {
    return t.replace('"use client";\n', `"use client";\n\n${line}`);
  }
  return line + t;
}

function replaceLocalFormatters(t) {
  // Remove local formatDate functions that use toLocaleDateString long/short month
  t = t.replace(
    /function formatDate\(dateStr: string\) \{\n  const d = new Date\([^)]+\);\n  return d\.toLocaleDateString\("en-US", \{[\s\S]*?\}\);\n\}\n/,
    "function formatDate(dateStr: string) {\n  return formatDateUS(dateStr);\n}\n"
  );
  t = t.replace(
    /function formatThreatDate\(dateStr: string\) \{\n  const d = new Date\([^)]+\);\n  return d\.toLocaleDateString\("en-US", \{[\s\S]*?\}\);\n\}\n/,
    "function formatThreatDate(dateStr: string) {\n  return formatDateUS(dateStr);\n}\n"
  );
  t = t.replace(
    /function monthKey\(dateStr: string\) \{\n  const d = new Date\([^)]+\);\n  return d\.toLocaleDateString\("en-US", \{ month: "long", year: "numeric" \}\);\n\}\n/,
    "function monthKey(dateStr: string) {\n  return formatMonthUS(dateStr);\n}\n"
  );
  t = t.replace(
    /Saved \{new Date\(item\.savedAt\)\.toLocaleDateString\(\)\}/g,
    "Saved {formatDateUS(new Date(item.savedAt))}"
  );
  t = t.replace(
    /return date\.toLocaleDateString\("en-US", \{\n    month: "long",\n    day: "numeric",\n    year: "numeric",\n  \}\);/,
    "return formatDateUS(date);"
  );
  t = t.replace(
    /label: d\.toLocaleDateString\("en-US", \{ month: "short", year: "2-digit" \}\),/,
    "label: formatMonthUS(d),"
  );
  t = t.replace(
    /const monthLabel = month\.toLocaleDateString\("en-US", \{[\s\S]*?\}\);/,
    "const monthLabel = formatMonthUS(month);"
  );
  return t;
}

const files = [
  "components/home-hub.tsx",
  "components/changelog/changelog-page.tsx",
  "components/tracker/event-detail-page.tsx",
  "components/tracker/event-detail-slideover.tsx",
  "components/tracker/tracker-section.tsx",
  "components/saved/saved-page.tsx",
  "components/tracker/tracker-timeline-scrubber.tsx",
  "components/tracker/tracker-calendar.tsx",
  "lib/data/validated-urls.ts",
  "lib/data/timeline-events.ts",
  "lib/search.ts",
  "components/citation.tsx",
];

for (const f of files) {
  if (!fs.existsSync(f)) {
    console.log("missing", f);
    continue;
  }
  let t = fs.readFileSync(f, "utf8");
  const before = t;
  t = ensureImport(t);
  t = replaceLocalFormatters(t);

  // scrubber raw ISO dates
  if (f.includes("tracker-timeline-scrubber")) {
    t = t.replace(
      "{sorted[0].Date} → {sorted[sorted.length - 1].Date}",
      "{formatDateUS(sorted[0].Date)} → {formatDateUS(sorted[sorted.length - 1].Date)}"
    );
    t = t.replace(
      "title={`${event.Date}:",
      "title={`${formatDateUS(event.Date)}:"
    );
    t = t.replace(
      "aria-label={`${event.Date} -",
      "aria-label={`${formatDateUS(event.Date)} -"
    );
  }

  // search subtitle
  if (f.includes("search.ts")) {
    t = t.replace(
      "subtitle: `${event.Date} · ${event.Severity_Score}/10`",
      "subtitle: `${formatDateUS(event.Date)} · ${event.Severity_Score}/10`"
    );
  }

  // citation published / archive dates
  if (f.includes("citation.tsx")) {
    t = t.replace(
      "Published {activeCitation.date}",
      "Published {formatDateUS(activeCitation.date)}"
    );
    t = t.replace(
      "Snapshot archived {archiveDate}",
      "Snapshot archived {archiveDate ? formatDateUS(archiveDate) : archiveDate}"
    );
  }

  fs.writeFileSync(f, t);
  console.log(f, t === before ? "unchanged" : "updated");
}
