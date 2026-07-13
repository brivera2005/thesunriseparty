import { timelineEvents } from "@/lib/data/timeline-events";
import { policyFixes, safeguardItems, blueprintDetailPath } from "@/lib/data/policies";
import { conversationHelpers } from "@/lib/data/conversation-helpers";
import { hiddenHistoryEntries, historyDetailPath } from "@/lib/data/hidden-history";
import {
  legislationBills,
  legislationDetailPath,
  statusLabel,
} from "@/lib/data/legislation";

export { highlightMatches } from "@/lib/search-highlight";

export type SearchResultType =
  | "Tracker"
  | "Blueprint"
  | "Rebuttal"
  | "Safeguard"
  | "History"
  | "Legislation";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  body: string;
  score: number;
  href: string;
  anchor?: string;
}

function normalize(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Subsequence fuzzy match - returns 0-1 score */
export function fuzzyScore(query: string, target: string): number {
  const q = normalize(query);
  const t = normalize(target);
  if (!q) return 1;
  if (t.includes(q)) return 1 + q.length / t.length;
  if (t.startsWith(q)) return 0.95;

  let qi = 0;
  let consecutive = 0;
  let maxConsecutive = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      qi++;
      consecutive++;
      maxConsecutive = Math.max(maxConsecutive, consecutive);
    } else {
      consecutive = 0;
    }
  }
  if (qi < q.length) return 0;
  return 0.4 + (maxConsecutive / q.length) * 0.4;
}

export function scoreFields(query: string, fields: string[]): number {
  if (!query.trim()) return 1;
  return Math.max(...fields.map((f) => fuzzyScore(query, f)));
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const event of timelineEvents) {
    const body = [
      event.Description,
      event.Action_Type,
      event.category,
      event.p2025Pillar ?? "",
      ...event.Impacted_Sectors,
      event.Event_ID,
    ].join(" ");
    results.push({
      id: event.Event_ID,
      type: "Tracker",
      title: `${event.Action_Type}: ${event.Description.slice(0, 80)}`,
      subtitle: `${event.Date} · ${event.Severity_Score}/10`,
      body,
      score: 0,
      href: `/tracker/${event.Event_ID}`,
    });
  }

  for (const policy of policyFixes) {
    const body = [
      policy.title,
      policy.category,
      policy.problem,
      policy.proposedFix,
      policy.economicImpact,
      policy.whyItWorks ?? "",
      policy.whyPeopleCallItExtreme ?? "",
      policy.theGaslight ?? "",
      policy.alreadyWorksWhere ?? "",
      ...policy.safeguards,
      policy.id,
    ].join(" ");
    results.push({
      id: policy.id,
      type: "Blueprint",
      title: policy.title,
      subtitle: policy.category,
      body,
      score: 0,
      href: blueprintDetailPath(policy.id),
    });
  }

  for (const safeguard of safeguardItems) {
    const body = [
      safeguard.title,
      safeguard.description,
      ...safeguard.mechanisms,
      safeguard.whyItWorks ?? "",
      safeguard.whyPeopleCallItExtreme ?? "",
      safeguard.theGaslight ?? "",
      safeguard.alreadyWorksWhere ?? "",
      safeguard.id,
    ].join(" ");
    results.push({
      id: safeguard.id,
      type: "Safeguard",
      title: safeguard.title,
      subtitle: "Irreversible Safeguard",
      body,
      score: 0,
      href: blueprintDetailPath(safeguard.id),
    });
  }

  for (const entry of conversationHelpers) {
    const body = [
      entry.theySay,
      entry.youSay,
      entry.stab ?? "",
      ...entry.category,
      entry.id,
      ...(entry.searchAliases ?? []),
    ].join(" ");
    results.push({
      id: entry.id,
      type: "Rebuttal",
      title: entry.theySay,
      subtitle: entry.category.join(", "),
      body,
      score: 0,
      href: `/rebuttal/${encodeURIComponent(entry.id)}`,
    });
  }

  for (const entry of hiddenHistoryEntries) {
    const body = [
      entry.title,
      entry.textbookVersion,
      entry.actualHistory,
      entry.era,
      ...entry.categories,
      entry.id,
    ].join(" ");
    results.push({
      id: entry.id,
      type: "History",
      title: entry.title,
      subtitle: `${entry.date} · ${entry.era}`,
      body,
      score: 0,
      href: historyDetailPath(entry.id),
    });
  }

  for (const bill of legislationBills) {
    const body = [
      bill.billNumber,
      bill.title,
      bill.summary,
      bill.whyItMatters,
      bill.progressiveTake,
      bill.sponsor.name,
      bill.status,
      ...bill.topics,
      bill.id,
    ].join(" ");
    results.push({
      id: bill.id,
      type: "Legislation",
      title: `${bill.billNumber}: ${bill.title}`,
      subtitle: `${statusLabel(bill.status)} · ${bill.sponsor.party}-${bill.sponsor.state}`,
      body,
      score: 0,
      href: legislationDetailPath(bill.id),
    });
  }

  return results;
}

export function searchContent(query: string, limit = 25): SearchResult[] {
  const index = buildSearchIndex();
  const q = query.trim();
  if (!q) {
    return index.slice(0, limit).map((r) => ({ ...r, score: 1 }));
  }

  return index
    .map((item) => ({
      ...item,
      score: scoreFields(q, [item.title, item.subtitle ?? "", item.body]),
    }))
    .filter((item) => item.score > 0.35)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export const searchTypeBadgeStyles: Record<SearchResultType, string> = {
  Tracker: "border-destructive/40 bg-destructive/10 text-destructive",
  Blueprint: "border-primary/40 bg-primary/10 text-primary",
  Rebuttal: "border-sunrise/40 bg-sunrise/10 text-sunrise",
  Safeguard: "border-severity-moderate/40 bg-severity-moderate/10 text-severity-moderate",
  History: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  Legislation: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-400",
};
