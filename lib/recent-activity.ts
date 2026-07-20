import type { BillStatus } from "@/lib/types";
import { distractions, distractionDetailPath } from "@/lib/data/distractions";
import {
  legislationBills,
  legislationDetailPath,
  statusLabel,
} from "@/lib/data/legislation";
import {
  eventDetailPath,
  timelineEvents,
} from "@/lib/data/timeline-events";

export type RecentActivitySection = "tracker" | "bills" | "distracted";

export type RecentActivityItem = {
  id: string;
  date: string;
  section: RecentActivitySection;
  label: string;
  href: string;
  severity?: number;
  /** Distracted only: what they are burying (for red BURY: prefix in ticker) */
  bury?: string;
};

export const recentActivitySectionBadge: Record<
  RecentActivitySection,
  string
> = {
  tracker: "Tracker",
  bills: "Bills",
  distracted: "Distracted",
};

function clip(text: string, max = 88): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  const cut = cleaned.slice(0, max - 1);
  const at = cut.lastIndexOf(" ");
  return `${(at > 48 ? cut.slice(0, at) : cut).trimEnd()}…`;
}

function trackerLabel(actionType: string, description: string): string {
  const desc = clip(description, 72);
  if (!actionType) return desc;
  if (desc.toLowerCase().startsWith(actionType.toLowerCase())) return desc;
  return clip(`${actionType}: ${desc}`, 88);
}

function billLabel(
  billNumber: string,
  title: string,
  status: BillStatus,
  lastAction: string
): string {
  const statusBit =
    status === "floor" || status === "enacted" || status === "passed"
      ? statusLabel(status)
      : null;
  const head = statusBit ? `${billNumber} (${statusBit})` : billNumber;
  const body = clip(title || lastAction, 64);
  return clip(`${head}: ${body}`, 88);
}

function distractionFeedLabel(
  title: string,
  coveringUp: string,
  distraction: string,
  id: string
): { label: string; bury?: string } {
  const bury = coveringUp ? clip(coveringUp, 64) : undefined;
  if (bury) {
    return { label: bury, bury };
  }
  if (id.startsWith("DIST-AUTO-") && distraction) {
    return { label: clip(distraction, 88) };
  }
  return { label: clip(title, 88) };
}

function labelFingerprint(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .slice(0, 48);
}

/**
 * Merge live Tracker / Bills / Distracted items, newest first.
 * Soft section cap keeps the feed mixed instead of one source flooding.
 */
export function getRecentActivity(limit = 6): RecentActivityItem[] {
  const capped = Math.max(1, Math.min(limit, 7));
  const perSectionCap = Math.max(2, Math.ceil(capped / 2));
  const items: RecentActivityItem[] = [];

  for (const event of timelineEvents) {
    if (!event.Date) continue;
    items.push({
      id: `tracker:${event.Event_ID}`,
      date: event.Date,
      section: "tracker",
      label: trackerLabel(event.Action_Type, event.Description),
      href: eventDetailPath(event.Event_ID),
      severity: event.Severity_Score,
    });
  }

  for (const bill of legislationBills) {
    if (!bill.lastActionDate) continue;
    items.push({
      id: `bills:${bill.id}`,
      date: bill.lastActionDate,
      section: "bills",
      label: billLabel(
        bill.billNumber,
        bill.title,
        bill.status,
        bill.lastAction
      ),
      href: legislationDetailPath(bill.id),
      severity: bill.impactSeverity,
    });
  }

  for (const entry of distractions) {
    if (!entry.date) continue;
    const { label, bury } = distractionFeedLabel(
      entry.title,
      entry.coveringUp,
      entry.distraction,
      entry.id
    );
    items.push({
      id: `distracted:${entry.id}`,
      date: entry.date,
      section: "distracted",
      label,
      href: distractionDetailPath(entry.id),
      severity: entry.severity,
      bury,
    });
  }

  const ranked = items.sort((a, b) => {
    const byDate = b.date.localeCompare(a.date);
    if (byDate !== 0) return byDate;
    return (b.severity ?? 0) - (a.severity ?? 0);
  });

  const picked: RecentActivityItem[] = [];
  const sectionCounts: Record<RecentActivitySection, number> = {
    tracker: 0,
    bills: 0,
    distracted: 0,
  };
  const seenLabels = new Set<string>();

  for (const item of ranked) {
    if (picked.length >= capped) break;
    if (sectionCounts[item.section] >= perSectionCap) continue;
    const fp = labelFingerprint(item.label);
    if (fp && seenLabels.has(fp)) continue;
    picked.push(item);
    sectionCounts[item.section] += 1;
    if (fp) seenLabels.add(fp);
  }

  if (picked.length < capped) {
    const have = new Set(picked.map((p) => p.id));
    for (const item of ranked) {
      if (picked.length >= capped) break;
      if (have.has(item.id)) continue;
      picked.push(item);
    }
  }

  return picked;
}
