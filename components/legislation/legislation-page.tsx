"use client";

import { useMemo, useState } from "react";
import { Radio, RefreshCw, Search } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { BillCard } from "@/components/legislation/bill-card";
import { FilterChips } from "@/components/ui/filter-chips";
import {
  CollapsibleFilters,
  FilterPanelSection,
} from "@/components/ui/collapsible-filters";
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

  const activeFilterCount =
    (chamber !== "all" ? 1 : 0) +
    (status !== "all" ? 1 : 0) +
    (party !== "all" ? 1 : 0) +
    (topic !== "all" ? 1 : 0);

  const clearFilters = () => {
    setChamber("all");
    setStatus("all");
    setParty("all");
    setTopic("all");
  };

  const floorBills = useMemo(
    () => legislationBills.filter((b) => b.status === "floor"),
    []
  );
  const houseFloor = floorBills.filter((b) => b.chamber === "house").length;
  const senateFloor = floorBills.filter((b) => b.chamber === "senate").length;

  const statItems = [
    { label: "Tracked", value: stats.total },
    { label: "Roll calls", value: stats.withVotes },
    { label: "Enacted", value: stats.byStatus.enacted },
    { label: "On floor", value: stats.byStatus.floor },
  ];

  return (
    <PageShell>
      <PageHero
        section="legislation"
        eyebrow="Live Congress Tracker"
        title="Legislation"
        description="Live bills, sponsors, party votes. Analysis from the text."
        tip="Filter bills, then open any card for sponsors, party roll calls, and member-level Yea/Nay with office contacts."
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
        <div className="page-container flex flex-nowrap items-stretch justify-between gap-1 overflow-x-auto py-2 sm:gap-2 sm:py-2.5">
          {statItems.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 text-center"
            >
              <p className="text-sm font-bold tabular-nums text-navy sm:text-lg">
                {stat.value}
              </p>
              <p className="text-[8px] font-medium tracking-wide text-muted-foreground uppercase sm:text-[9px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {stats.byStatus.floor > 0 ? (
        <section
          className="border-b border-sky-200 bg-sky-50"
          aria-label="Bills live on the floor"
        >
          <div className="page-container flex flex-nowrap items-center justify-center gap-2 overflow-x-auto px-2 py-2 text-center">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-sky-500" />
            </span>
            <p className="text-[10px] font-semibold whitespace-nowrap text-sky-900 sm:text-xs">
              LIVE NOW: {stats.byStatus.floor} on the floor
              {houseFloor > 0 ? ` · ${houseFloor} House` : ""}
              {senateFloor > 0 ? ` · ${senateFloor} Senate` : ""}
              {" · "}
              Votes and debate happening now
            </p>
          </div>
        </section>
      ) : null}

      <section className="border-b border-border bg-white">
        <div className="page-container py-5 sm:py-6">
          <CollapsibleFilters
            activeCount={activeFilterCount}
            label="Filters"
            summary={`Showing ${filtered.length} of ${stats.total}`}
            onClear={clearFilters}
            leading={
              <div className="relative min-w-0 flex-1 max-w-xl">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search bill number, title, sponsor, topic…"
                  className="h-11 pl-10"
                  aria-label="Search legislation"
                />
              </div>
            }
          >
            <FilterPanelSection label="Chamber">
              <FilterChips
                options={chamberOptions}
                value={chamber}
                onChange={setChamber}
              />
            </FilterPanelSection>
            <FilterPanelSection label="Status">
              <FilterChips
                options={statusOptions}
                value={status}
                onChange={setStatus}
              />
            </FilterPanelSection>
            <FilterPanelSection label="Sponsor">
              <FilterChips
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
            </FilterPanelSection>
            <FilterPanelSection label="Topic">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="h-9 w-full rounded-md border border-border bg-white px-3 text-xs"
                aria-label="Filter by topic"
              >
                {topicOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </FilterPanelSection>
          </CollapsibleFilters>
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
