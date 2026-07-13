"use client";

import { useMemo, useState } from "react";
import { Radio, RefreshCw, Search } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { BillCard } from "@/components/legislation/bill-card";
import { FilterChips } from "@/components/ui/filter-chips";
import { Input } from "@/components/ui/input";
import {
  getLegislationStats,
  legislationBills,
  legislationMeta,
  legislationTopics,
  statusLabel,
} from "@/lib/data/legislation";
import { formatDateUS } from "@/lib/format-date";
import type { BillChamber, BillStatus, PartyCode } from "@/lib/types";

type ChamberFilter = "all" | BillChamber;
type StatusFilter = "all" | BillStatus;
type PartyFilter = "all" | PartyCode;

function formatUpdated(dateStr: string) {
  return formatDateUS(dateStr);
}

const chamberOptions: { value: ChamberFilter; label: string }[] = [
  { value: "all", label: "All chambers" },
  { value: "house", label: "House" },
  { value: "senate", label: "Senate" },
  { value: "both", label: "Both" },
];

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All status" },
  { value: "introduced", label: "Introduced" },
  { value: "committee", label: "Committee" },
  { value: "floor", label: "Floor" },
  { value: "passed", label: "Passed" },
  { value: "failed", label: "Failed" },
  { value: "enacted", label: "Enacted" },
];

const partyOptions: { value: PartyFilter; label: string }[] = [
  { value: "all", label: "All sponsors" },
  { value: "D", label: "Democrat" },
  { value: "R", label: "Republican" },
  { value: "I", label: "Independent" },
];

export function LegislationPage() {
  const stats = getLegislationStats();
  const [chamber, setChamber] = useState<ChamberFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [party, setParty] = useState<PartyFilter>("all");
  const [topic, setTopic] = useState<string>("all");
  const [query, setQuery] = useState("");

  const topicOptions = useMemo(
    () => [
      { value: "all", label: "All topics" },
      ...legislationTopics.map((t) => ({ value: t, label: t })),
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return legislationBills
      .filter((b) => {
        if (chamber !== "all" && b.chamber !== chamber) return false;
        if (status !== "all" && b.status !== status) return false;
        if (party !== "all" && b.sponsor.party !== party) return false;
        if (topic !== "all" && !b.topics.includes(topic)) return false;
        if (!q) return true;
        const hay = [
          b.billNumber,
          b.title,
          b.summary,
          b.whyItMatters,
          b.progressiveTake,
          b.sponsor.name,
          ...b.topics,
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => b.lastActionDate.localeCompare(a.lastActionDate));
  }, [chamber, status, party, topic, query]);

  return (
    <PageShell>
      <PageHero
        section="legislation"
        eyebrow="Live Congress Tracker"
        title="Legislation"
        description="Live bills, sponsors, party votes. Analysis from the text."
        tip="Filter bills, then open any card for sponsors and roll-call bars."
        actions={
          <div className="flex flex-col items-end gap-1 text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/50 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {legislationMeta.congressLabel} · {legislationMeta.session}
            </span>
            <span className="text-[11px] text-muted-foreground">
              Updated {formatUpdated(legislationMeta.lastUpdated)}
            </span>
          </div>
        }
      />

      <section className="border-b border-border bg-muted/20">
        <div className="page-container grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {[
            { label: "Bills tracked", value: stats.total },
            { label: "With roll calls", value: stats.withVotes },
            { label: "Enacted", value: stats.byStatus.enacted },
            { label: "On the floor", value: stats.byStatus.floor },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-background px-4 py-5 text-center"
            >
              <p className="text-2xl font-bold tabular-nums text-navy sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="page-container space-y-4 py-5 sm:py-6">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search bill number, title, sponsor, topic…"
              className="h-11 pl-10"
              aria-label="Search legislation"
            />
          </div>

          <FilterChips
            label="Chamber"
            options={chamberOptions}
            value={chamber}
            onChange={setChamber}
          />
          <FilterChips
            label="Status"
            options={statusOptions}
            value={status}
            onChange={setStatus}
          />
          <FilterChips
            label="Sponsor"
            options={partyOptions}
            value={party}
            onChange={setParty}
            activeClassName={
              party === "D"
                ? "bg-[#2563eb] hover:bg-[#2563eb]/90"
                : party === "R"
                  ? "bg-[#dc2626] hover:bg-[#dc2626]/90"
                  : party === "I"
                    ? "bg-[#7c3aed] hover:bg-[#7c3aed]/90"
                    : undefined
            }
          />

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              Topic
            </span>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="h-9 rounded-md border border-border bg-white px-3 text-xs"
              aria-label="Filter by topic"
            >
              {topicOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="text-xs text-muted-foreground">
              Showing {filtered.length} of {stats.total}
            </span>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="page-container">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Radio className="size-4 text-primary" aria-hidden />
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Live bill feed
                </p>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                {status === "all" ? "Active & recent legislation" : statusLabel(status as BillStatus)}
              </h2>
            </div>
            <p className="max-w-sm text-right text-[11px] leading-snug text-muted-foreground">
              <RefreshCw className="mr-1 inline size-3" aria-hidden />
              {legislationMeta.refreshHint}
            </p>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border px-4 py-12 text-center text-sm text-muted-foreground">
              No bills match these filters. Clear a filter or try another search.
            </p>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {filtered.map((bill) => (
                <BillCard key={bill.id} bill={bill} />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
