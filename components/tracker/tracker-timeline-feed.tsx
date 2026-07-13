"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDownUp,
  ArrowRight,
  Calendar,
  Share2,
} from "lucide-react";
import {
  timelineEvents,
  timelineCategories,
  eventDetailPath,
} from "@/lib/data/timeline-events";
import type { TimelineEvent } from "@/lib/types";
import { EventDetailSlideover } from "@/components/tracker/event-detail-slideover";
import { TrackerTimelineScrubber } from "@/components/tracker/tracker-timeline-scrubber";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CollapsibleFilters,
  FilterPanelSection,
} from "@/components/ui/collapsible-filters";
import { cn } from "@/lib/utils";
import { formatMonthUS } from "@/lib/format-date";

type SortMode = "date-desc" | "date-asc" | "severity-desc" | "severity-asc";

function severityDot(score: number) {
  if (score >= 8) return "bg-severity-critical";
  if (score >= 6) return "bg-severity-high";
  return "bg-navy/35";
}

function severityText(score: number) {
  if (score >= 8) return "text-severity-critical";
  if (score >= 6) return "text-severity-high";
  return "text-navy/70";
}

function monthHeading(dateStr: string) {
  const iso = dateStr.trim().match(/^(\d{4})-(\d{2})/);
  if (!iso) return formatMonthUS(dateStr);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[Number(iso[2]) - 1]} ${iso[1]}`;
}

/** Preserve caller sort order; only bucket by calendar month. */
function groupByMonth(events: TimelineEvent[]) {
  const groups: { label: string; key: string; events: TimelineEvent[] }[] = [];
  let current = "";
  for (const event of events) {
    const key = event.Date.slice(0, 7);
    if (key !== current) {
      current = key;
      groups.push({ label: monthHeading(event.Date), key, events: [] });
    }
    groups[groups.length - 1].events.push(event);
  }
  return groups;
}

function shortDate(dateStr: string) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Timeline-first tracker feed inspired by project2025.observer interaction:
 * month headers, chronological entries, sort + date/category/severity filters,
 * scrubber for jumping along the range.
 */
export function TrackerTimelineFeed() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [minSeverity, setMinSeverity] = useState(1);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("date-desc");
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);
  const [slideoverOpen, setSlideoverOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    let events =
      activeCategory === "All"
        ? timelineEvents
        : timelineEvents.filter((e) => e.category === activeCategory);
    if (minSeverity > 1) {
      events = events.filter((e) => e.Severity_Score >= minSeverity);
    }
    if (dateFrom) events = events.filter((e) => e.Date >= dateFrom);
    if (dateTo) events = events.filter((e) => e.Date <= dateTo);
    return [...events].sort((a, b) => {
      if (sortMode === "date-desc")
        return new Date(b.Date).getTime() - new Date(a.Date).getTime();
      if (sortMode === "date-asc")
        return new Date(a.Date).getTime() - new Date(b.Date).getTime();
      if (sortMode === "severity-desc") return b.Severity_Score - a.Severity_Score;
      return a.Severity_Score - b.Severity_Score;
    });
  }, [activeCategory, minSeverity, dateFrom, dateTo, sortMode]);

  const monthGroups = useMemo(() => groupByMonth(filtered), [filtered]);

  const openEvent = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setSlideoverOpen(true);
  };

  const jumpToEvent = (event: TimelineEvent) => {
    setSelectedEvent(event);
    const el = document.getElementById(`timeline-${event.Event_ID}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const activeFilterCount =
    (activeCategory !== "All" ? 1 : 0) +
    (minSeverity > 1 ? 1 : 0) +
    (dateFrom ? 1 : 0) +
    (dateTo ? 1 : 0) +
    (sortMode !== "date-desc" ? 1 : 0);

  const clearFilters = () => {
    setDateFrom("");
    setDateTo("");
    setMinSeverity(1);
    setActiveCategory("All");
    setSortMode("date-desc");
  };

  return (
    <section className="section-y-tight bg-white" aria-label="Event timeline">
      <div className="page-container">
        <CollapsibleFilters
          sticky
          className="-mx-4 mb-6 px-4 sm:-mx-6 sm:px-6 lg:top-16"
          activeCount={activeFilterCount}
          label="Sort & filter"
          summary={`${filtered.length} of ${timelineEvents.length} events`}
          onClear={clearFilters}
          leading={
            <p className="text-xs font-semibold tracking-[0.18em] text-navy/50 uppercase">
              Timeline
            </p>
          }
        >
          <FilterPanelSection label="Sort">
            <div className="flex items-center gap-2">
              <ArrowDownUp className="size-3.5 text-navy/40" />
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="h-9 w-full rounded-md border border-border bg-white px-2.5 text-xs font-medium text-navy"
                aria-label="Sort timeline"
              >
                <option value="date-desc">Newest first</option>
                <option value="date-asc">Oldest first</option>
                <option value="severity-desc">Highest severity</option>
                <option value="severity-asc">Lowest severity</option>
              </select>
            </div>
          </FilterPanelSection>

          <FilterPanelSection label="Category">
            <div className="flex flex-wrap gap-1.5">
              {timelineCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "h-8 px-2.5 text-xs",
                    activeCategory === cat
                      ? "bg-navy text-white hover:bg-navy/90"
                      : "border-navy/15 text-navy/70 hover:bg-navy/[0.04]"
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </FilterPanelSection>

          <FilterPanelSection label="Date range">
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex flex-1 min-w-[8rem] items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-navy/60">From</span>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="h-9 w-full rounded-md border border-border bg-white px-2 text-xs"
                  aria-label="Filter from date"
                />
              </label>
              <label className="flex flex-1 min-w-[8rem] items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-navy/60">To</span>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="h-9 w-full rounded-md border border-border bg-white px-2 text-xs"
                  aria-label="Filter to date"
                />
              </label>
            </div>
          </FilterPanelSection>

          <FilterPanelSection label="Min severity">
            <div className="flex flex-wrap items-center gap-3">
              <span className={cn("text-sm font-bold tabular-nums", severityText(minSeverity))}>
                {minSeverity}+
              </span>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={minSeverity}
                onChange={(e) => setMinSeverity(Number(e.target.value))}
                className="h-1.5 min-w-[10rem] flex-1 cursor-pointer accent-navy"
                aria-label="Minimum severity filter"
              />
            </div>
          </FilterPanelSection>

          <FilterPanelSection label="Timeline scrubber">
            <TrackerTimelineScrubber
              events={filtered}
              selectedId={selectedEvent.Event_ID}
              onSelect={jumpToEvent}
            />
          </FilterPanelSection>
        </CollapsibleFilters>

        {/* Vertical timeline feed */}
        <div ref={listRef} className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[11px] w-px bg-navy/10 sm:left-[15px]"
          />

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No events match these filters. Widen the date range or lower
              severity.
            </p>
          ) : (
            <div className="space-y-10">
              {monthGroups.map((group) => (
                <section key={group.key} aria-labelledby={`month-${group.key}`}>
                  <h2
                    id={`month-${group.key}`}
                    className="sticky top-[7.5rem] z-20 mb-5 inline-block rounded-md bg-white/95 px-2 py-1 text-lg font-bold tracking-tight text-navy backdrop-blur-sm sm:top-[8.5rem]"
                  >
                    {group.label}
                  </h2>
                  <ol className="space-y-0">
                    {group.events.map((event) => {
                      const selected = selectedEvent.Event_ID === event.Event_ID;
                      return (
                        <li
                          key={event.Event_ID}
                          id={`timeline-${event.Event_ID}`}
                          className="relative pl-10 sm:pl-12"
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "absolute top-5 left-[7px] size-2.5 rounded-full ring-4 ring-white sm:left-[11px] sm:size-3",
                              severityDot(event.Severity_Score),
                              selected && "ring-navy/15"
                            )}
                          />
                          <button
                            type="button"
                            onClick={() => openEvent(event)}
                            className={cn(
                              "mb-4 w-full rounded-xl border px-4 py-4 text-left transition-all sm:px-5",
                              selected
                                ? "border-navy/25 bg-navy/[0.03] shadow-sm"
                                : "border-transparent bg-transparent hover:border-navy/10 hover:bg-navy/[0.02]"
                            )}
                          >
                            <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
                              <span className="inline-flex items-center gap-1 font-semibold text-navy/70">
                                <Calendar className="size-3" />
                                {shortDate(event.Date)}
                              </span>
                              <span aria-hidden className="text-navy/25">
                                ·
                              </span>
                              <span className="font-medium tracking-wide uppercase">
                                {event.Action_Type}
                              </span>
                              <span
                                className={cn(
                                  "ml-auto text-xs font-bold tabular-nums",
                                  severityText(event.Severity_Score)
                                )}
                              >
                                {event.Severity_Score}/10
                              </span>
                            </div>
                            <p className="text-[15px] leading-snug font-medium text-navy sm:text-base">
                              {event.Description}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-1.5">
                              <Badge
                                variant="outline"
                                className="border-navy/15 text-[10px] text-navy/60"
                              >
                                {event.category}
                              </Badge>
                              {event.Impacted_Sectors.slice(0, 2).map((s) => (
                                <Badge
                                  key={s}
                                  variant="secondary"
                                  className="bg-navy/[0.05] text-[10px] text-navy/55"
                                >
                                  {s}
                                </Badge>
                              ))}
                              <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-navy/50">
                                Details
                                <ArrowRight className="size-3" />
                              </span>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>Every event cited. Open any row for sources and severity detail.</p>
          <Link
            href={eventDetailPath(selectedEvent.Event_ID)}
            className="inline-flex items-center gap-1.5 font-medium text-navy hover:underline"
          >
            <Share2 className="size-3.5" />
            Open selected event page
          </Link>
        </div>
      </div>

      <EventDetailSlideover
        event={selectedEvent}
        open={slideoverOpen}
        onClose={() => setSlideoverOpen(false)}
      />
    </section>
  );
}
