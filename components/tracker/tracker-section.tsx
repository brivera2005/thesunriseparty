"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Calendar,
  CalendarDays,
  ExternalLink,
  Link2,
  AlertTriangle,
  BarChart3,
  Globe,
  List,
  SlidersHorizontal,
  Share2,
} from "lucide-react";
import {
  timelineEvents,
  timelineCategories,
  getTrackerStats,
  getThreatLevel,
  eventDetailPath,
} from "@/lib/data/timeline-events";
import type { TimelineEvent } from "@/lib/types";
import { trackerSources } from "@/lib/data/tracker-sources";
import { upcomingThreats } from "@/lib/data/upcoming-threats";
import { CitationList } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { SeverityGauge, AggregateSeverityChart, ThreatLevelGauge } from "./severity-gauge";
import { SeverityHeatmap } from "./severity-heatmap";
import { EventsByMonthChart } from "./events-by-month-chart";
import { ScheduleFDeepDive } from "./schedule-f-deep-dive";
import { CompareTrackersPanel } from "./compare-trackers-panel";
import { P2025ChapterMap } from "./p2025-chapter-map";
import { TrackerCalendar } from "./tracker-calendar";
import { TrackerTimelineScrubber } from "./tracker-timeline-scrubber";
import { EventDetailSlideover } from "./event-detail-slideover";
import { cn } from "@/lib/utils";
import { formatDateUS, formatMonthUS } from "@/lib/format-date";
import { useAppStore } from "@/lib/store";
import { policyFixPath } from "@/lib/data/policies";
import {
  filterEventsByChapter,
  getChapterById,
  getChaptersBySection,
} from "@/lib/data/p2025-chapters";

type TrackerView = "list" | "calendar";
type SortMode = "date-desc" | "date-asc" | "severity-desc" | "severity-asc";

function formatDate(dateStr: string) {
  return formatDateUS(dateStr);
}

function severityTextClass(score: number) {
  if (score >= 8) return "text-severity-critical";
  if (score >= 6) return "text-severity-high";
  return "text-severity-moderate";
}

const statusStyles = {
  proposed: "border-severity-moderate/50 bg-severity-moderate/15 text-severity-moderate font-semibold",
  "in-progress": "border-destructive/50 bg-destructive/15 text-destructive font-semibold",
  litigation: "border-severity-high/50 bg-severity-high/15 text-severity-high font-semibold",
};

function formatThreatDate(dateStr: string) {
  return formatDateUS(dateStr);
}

function monthKey(dateStr: string) {
  return formatMonthUS(dateStr);
}

function groupByMonth(events: TimelineEvent[]) {
  const sorted = [...events].sort(
    (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
  );
  const groups: { label: string; events: TimelineEvent[] }[] = [];
  let current = "";
  for (const event of sorted) {
    const key = monthKey(event.Date);
    if (key !== current) {
      current = key;
      groups.push({ label: key, events: [] });
    }
    groups[groups.length - 1].events.push(event);
  }
  return groups;
}

export function TrackerSection({
  standalone = false,
  compact = false,
  defaultView = "list",
}: {
  standalone?: boolean;
  compact?: boolean;
  defaultView?: TrackerView;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeChapter, setActiveChapter] = useState<string>("all");
  const [minSeverity, setMinSeverity] = useState(1);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("date-desc");
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);
  const [slideoverOpen, setSlideoverOpen] = useState(false);
  const [viewMode, setViewMode] = useState<TrackerView>(defaultView);
  const setMode = useAppStore((s) => s.setMode);

  const chapterSections = getChaptersBySection();

  const filtered = useMemo(() => {
    let events =
      activeCategory === "All"
        ? timelineEvents
        : timelineEvents.filter((e) => e.category === activeCategory);
    events = filterEventsByChapter(events, activeChapter);
    if (minSeverity > 1) {
      events = events.filter((e) => e.Severity_Score >= minSeverity);
    }
    if (dateFrom) {
      events = events.filter((e) => e.Date >= dateFrom);
    }
    if (dateTo) {
      events = events.filter((e) => e.Date <= dateTo);
    }
    events = [...events].sort((a, b) => {
      if (sortMode === "date-desc")
        return new Date(b.Date).getTime() - new Date(a.Date).getTime();
      if (sortMode === "date-asc")
        return new Date(a.Date).getTime() - new Date(b.Date).getTime();
      if (sortMode === "severity-desc") return b.Severity_Score - a.Severity_Score;
      return a.Severity_Score - b.Severity_Score;
    });
    if (compact) {
      return events.slice(0, 3);
    }
    return events;
  }, [activeCategory, activeChapter, minSeverity, dateFrom, dateTo, sortMode, compact]);

  const selectEvent = (event: TimelineEvent, openPanel = false) => {
    setSelectedEvent(event);
    if (openPanel) setSlideoverOpen(true);
  };

  const activeChapterMeta =
    activeChapter !== "all" ? getChapterById(activeChapter) : undefined;

  const monthGroups = useMemo(() => groupByMonth(filtered), [filtered]);

  const stats = getTrackerStats(filtered);
  const threat = getThreatLevel(filtered);

  return (
    <section
      id={standalone ? undefined : "tracker"}
      className={cn("section-y scroll-mt-16", standalone && "section-y-tight")}
      aria-labelledby={standalone ? undefined : "tracker-heading"}
    >
      <div className="page-container">
        {!standalone && (
        <div className="mb-6 sm:mb-8">
          <div className="mb-2 flex items-center gap-2">
            <div className="size-2 animate-pulse rounded-full bg-destructive shadow-[0_0_8px_oklch(0.58_0.22_25/50%)]" />
            <span className="text-xs font-semibold tracking-[0.22em] text-destructive uppercase">
              Live Monitoring
            </span>
          </div>
          <h2 id="tracker-heading" className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
            Project 2025 Tracker
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Documenting authoritarian policy implementation with primary-source
            citations, severity scoring, and cross-references to independent
            watchdog trackers.
          </p>
        </div>
        )}

        {/* Stats dashboard */}
        {!compact && (
        <>
        <div className="mb-8">
          <ThreatLevelGauge threat={threat} />
        </div>
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              label: "Actions Tracked",
              value: stats.total,
              icon: BarChart3,
              color: "text-foreground",
            },
            {
              label: "High Severity (8+)",
              value: stats.highSeverity,
              icon: AlertTriangle,
              color: "text-destructive",
            },
            {
              label: "Linked Blueprint Fixes",
              value: stats.linkedFixes,
              icon: Link2,
              color: "text-primary",
            },
            {
              label: "Avg. Severity",
              value: stats.avgSeverity,
              icon: Globe,
              color: "text-severity-high",
            },
          ].map((stat) => (
            <Card key={stat.label} className="border-border bg-card/80">
              <CardContent className="flex items-center gap-3 p-4">
                <stat.icon className={cn("size-5 shrink-0", stat.color)} />
                <div>
                  <p className="text-2xl font-bold tabular-nums">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mb-8">
          <EventsByMonthChart />
        </div>
        </>
        )}

        {!compact && (
        <>
        {/* Tracker Sources panel */}
        <Card className="mb-8 border-border bg-card/80">
          <CardContent className="p-6">
            <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              <Globe className="size-4 text-primary" />
              Tracker Sources &amp; Fallbacks
            </h3>
            <p className="mb-4 text-xs text-muted-foreground">
              Cross-reference our data with these independent Project 2025
              monitors. We don&apos;t own the truth - we aggregate it.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trackerSources.map((source) => (
                <a
                  key={source.id}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-border p-3 transition-colors hover:border-primary/40 hover:bg-accent/50"
                >
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium group-hover:text-primary">
                      {source.name}
                    </span>
                    <ExternalLink className="size-3 shrink-0 text-muted-foreground" />
                  </div>
                  <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                    {source.description}
                  </p>
                  <Badge variant="outline" className="mt-2 text-[9px]">
                    {source.publisher}
                  </Badge>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <CompareTrackersPanel />

        <SeverityHeatmap events={timelineEvents} />

        <P2025ChapterMap />

        <ScheduleFDeepDive />

        <Card className="mb-8 border-border bg-card/80 shadow-sm">
          <CardContent className="p-6">
            <AggregateSeverityChart events={filtered} />
          </CardContent>
        </Card>
        </>
        )}

        {compact ? (
          <div className="space-y-3">
            {filtered.map((event) => (
              <Card key={event.Event_ID} className="border-border">
                <CardContent className="p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="destructive" className="text-[10px]">
                      {event.Action_Type}
                    </Badge>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Calendar className="size-3" />
                      {formatDate(event.Date)}
                    </span>
                    <span
                      className={cn(
                        "ml-auto text-sm font-bold tabular-nums",
                        severityTextClass(event.Severity_Score)
                      )}
                    >
                      {event.Severity_Score}/10
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{event.Description}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Sources: <CitationList sources={event.Sources} />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
        <>
        <TrackerTimelineScrubber
          events={filtered}
          selectedId={selectedEvent.Event_ID}
          onSelect={(e) => selectEvent(e)}
        />

        <div className="sticky top-14 z-30 -mx-4 mb-6 border-b border-border bg-white/95 px-4 py-3 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90 sm:-mx-6 sm:px-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
            {timelineCategories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveCategory(cat);
                  const first =
                    cat === "All"
                      ? timelineEvents.find((e) => e.Severity_Score >= minSeverity)
                      : timelineEvents.find(
                          (e) => e.category === cat && e.Severity_Score >= minSeverity
                        );
                  if (first) setSelectedEvent(first);
                }}
                className={cn(
                  activeCategory === cat &&
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                )}
              >
                {cat}
              </Button>
            ))}
            </div>
            <div className="flex items-center gap-1 rounded-lg border border-border p-0.5">
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={cn(
                  "h-7 gap-1.5 px-2.5 text-xs",
                  viewMode === "list" && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                )}
              >
                <List className="size-3.5" />
                List
              </Button>
              <Button
                variant={viewMode === "calendar" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("calendar")}
                className={cn(
                  "h-7 gap-1.5 px-2.5 text-xs",
                  viewMode === "calendar" && "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                )}
              >
                <CalendarDays className="size-3.5" />
                Calendar
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BookOpen className="size-3.5" />
              <label htmlFor="p2025-chapter-filter" className="font-medium">
                Heritage chapter:
              </label>
            </div>
            <select
              id="p2025-chapter-filter"
              value={activeChapter}
              onChange={(e) => {
                setActiveChapter(e.target.value);
                const next = filterEventsByChapter(
                  activeCategory === "All"
                    ? timelineEvents
                    : timelineEvents.filter((c) => c.category === activeCategory),
                  e.target.value
                ).find((ev) => ev.Severity_Score >= minSeverity);
                if (next) setSelectedEvent(next);
              }}
              className="h-8 max-w-xs flex-1 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground"
              aria-label="Filter by Heritage Mandate chapter"
            >
              <option value="all">All chapters ({timelineEvents.length} events)</option>
              {chapterSections.map(({ section, chapters }) => (
                <optgroup key={section} label={section}>
                  {chapters.map((chapter) => (
                    <option key={chapter.id} value={chapter.id}>
                      Ch. {chapter.number}: {chapter.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {activeChapterMeta && (
              <Badge variant="secondary" className="text-[10px]">
                Ch. {activeChapterMeta.number} · {activeChapterMeta.title}
              </Badge>
            )}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <SlidersHorizontal className="size-3.5" />
              <span className="font-medium">Min severity:</span>
              <span
                className={cn(
                  "font-bold tabular-nums",
                  minSeverity >= 8
                    ? "text-destructive"
                    : minSeverity >= 6
                      ? "text-severity-high"
                      : "text-foreground"
                )}
              >
                {minSeverity}+
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={minSeverity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setMinSeverity(val);
                if (selectedEvent.Severity_Score < val) {
                  const next = filtered.find((ev) => ev.Severity_Score >= val);
                  if (next) setSelectedEvent(next);
                }
              }}
              className="h-1.5 w-full max-w-xs cursor-pointer accent-destructive"
              aria-label="Minimum severity filter"
            />
            <span className="text-[10px] text-muted-foreground">
              {filtered.length} of {timelineEvents.length} events
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">From:</span>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="h-8 rounded-md border border-border bg-white px-2 text-xs"
                aria-label="Filter from date"
              />
            </label>
            <label className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">To:</span>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="h-8 rounded-md border border-border bg-white px-2 text-xs"
                aria-label="Filter to date"
              />
            </label>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="h-8 rounded-md border border-border bg-white px-2.5 text-xs font-medium"
              aria-label="Sort events"
            >
              <option value="date-desc">Newest first</option>
              <option value="date-asc">Oldest first</option>
              <option value="severity-desc">Highest severity</option>
              <option value="severity-asc">Lowest severity</option>
            </select>
            {(dateFrom || dateTo) && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs"
                onClick={() => {
                  setDateFrom("");
                  setDateTo("");
                }}
              >
                Clear dates
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {viewMode === "calendar" ? (
            <div className="lg:col-span-2">
              <TrackerCalendar
                events={filtered}
                selectedEventId={selectedEvent.Event_ID}
                onSelectEvent={setSelectedEvent}
              />
            </div>
          ) : (
          <div className="max-h-[600px] space-y-4 overflow-y-auto pr-1 lg:col-span-2">
            {filtered.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No events match these filters. Lower the severity threshold,
                change category, or select a different Heritage chapter.
              </p>
            ) : (
              monthGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="sticky top-0 z-10 mb-2 bg-background/90 py-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase backdrop-blur-sm">
                    {group.label}
                  </h4>
                  <div className="space-y-3">
                    {group.events.map((event) => (
                      <button
                        key={event.Event_ID}
                        type="button"
                        onClick={() => selectEvent(event, true)}
                        className={cn(
                          "w-full rounded-xl border p-4 text-left transition-all duration-200",
                          selectedEvent.Event_ID === event.Event_ID
                            ? "border-destructive/50 bg-accent ring-1 ring-destructive/30 shadow-sm"
                            : "border-border bg-card hover:border-destructive/25 hover:bg-accent/50"
                        )}
                      >
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <Badge variant="destructive" className="text-[10px]">
                            {event.Action_Type}
                          </Badge>
                          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <Calendar className="size-3" />
                            {formatDate(event.Date)}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug">
                          {event.Description}
                        </p>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="flex flex-wrap gap-1">
                            {event.Impacted_Sectors.slice(0, 2).map((s) => (
                              <Badge key={s} variant="outline" className="text-[10px]">
                                {s}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <Link
                              href={eventDetailPath(event.Event_ID)}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[10px] font-medium text-primary hover:underline"
                              title="Share event"
                            >
                              <Share2 className="size-3" />
                              Share
                            </Link>
                            <span
                              className={cn(
                                "text-xs font-bold tabular-nums",
                                severityTextClass(event.Severity_Score)
                              )}
                            >
                              {event.Severity_Score}/10
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
          )}

          <Card className="border-border lg:col-span-3">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="destructive">{selectedEvent.Action_Type}</Badge>
                    <Badge variant="outline">{selectedEvent.category}</Badge>
                    {selectedEvent.p2025Pillar && (
                      <Badge variant="secondary" className="text-[10px]">
                        P2025: {selectedEvent.p2025Pillar}
                      </Badge>
                    )}
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {selectedEvent.Event_ID}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug">
                    {selectedEvent.Description}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="size-3.5" />
                    {formatDate(selectedEvent.Date)}
                  </p>
                </div>
                <SeverityGauge score={selectedEvent.Severity_Score} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={eventDetailPath(selectedEvent.Event_ID)}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "gap-2"
                  )}
                >
                  <Share2 className="size-3.5" />
                  Share event
                </Link>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Impacted Sectors
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.Impacted_Sectors.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Sources
                </p>
                <CitationList sources={selectedEvent.Sources} />
              </div>

              {selectedEvent.externalTrackers &&
                selectedEvent.externalTrackers.length > 0 && (
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Also Tracked At
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.externalTrackers.map((ref) => (
                        <a
                          key={ref.url}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
                        >
                          <ExternalLink className="size-3" />
                          {ref.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              {selectedEvent.Linked_Fix_ID && (
                <div className="mt-6 border-t border-border pt-6">
                  {standalone ? (
                    <Link
                      href={policyFixPath(selectedEvent.Linked_Fix_ID)}
                      className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-3 py-2 text-sm font-medium text-primary hover:bg-accent"
                    >
                      <Link2 className="size-3.5" />
                      View Linked Fix: {selectedEvent.Linked_Fix_ID}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/30 text-primary hover:bg-accent"
                    onClick={() => {
                      setMode("blueprint");
                      window.location.hash = selectedEvent.Linked_Fix_ID!.startsWith("FIX-SAFE-")
                        ? selectedEvent.Linked_Fix_ID!.replace("FIX-SAFE-", "SAFE-")
                        : selectedEvent.Linked_Fix_ID!;
                      document
                        .getElementById("blueprint")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Link2 className="size-3.5" />
                    View Linked Fix: {selectedEvent.Linked_Fix_ID}
                    <ArrowRight className="size-3.5" />
                  </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* What's Next */}
        {!compact && (
        <div className="mt-16">
          <h3 className="mb-2 flex items-center gap-2 text-2xl font-bold">
            <AlertTriangle className="size-6 text-destructive" />
            What&apos;s Next
          </h3>
          <p className="mb-6 max-w-2xl text-sm text-muted-foreground">
            Upcoming and in-progress threats identified by tracker consensus
            across independent monitors. Status reflects current implementation
            stage.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {upcomingThreats.map((threat) => (
              <Card key={threat.id} className="border-border">
                <CardContent className="p-5">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className={cn("text-[10px] capitalize", statusStyles[threat.status])}
                      >
                        {threat.status.replace("-", " ")}
                      </Badge>
                      {threat.expectedDate && (
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Calendar className="size-3" />
                          {formatThreatDate(threat.expectedDate)}
                        </span>
                      )}
                    </div>
                    <span
                      className={cn(
                        "rounded-md px-2 py-0.5 text-sm font-bold tabular-nums",
                        threat.severity >= 9
                          ? "bg-destructive/15 text-severity-critical"
                          : threat.severity >= 7
                            ? "bg-severity-high/15 text-severity-high"
                            : "bg-severity-moderate/15 text-severity-moderate"
                      )}
                      aria-label={`Severity ${threat.severity} out of 10`}
                    >
                      {threat.severity}/10
                    </span>
                  </div>
                  <h4 className="font-semibold leading-snug">{threat.title}</h4>
                  {threat.statusNote && (
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {threat.statusNote}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {threat.description}
                  </p>
                  <div className="mt-3">
                    <CitationList sources={threat.sources} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {threat.externalTrackers.map((ref) => (
                      <a
                        key={ref.url}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-primary underline-offset-2 hover:underline"
                      >
                        <ExternalLink className="size-3" />
                        {ref.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        )}
        </>
        )}

        <EventDetailSlideover
          event={selectedEvent}
          open={slideoverOpen}
          onClose={() => setSlideoverOpen(false)}
        />
      </div>
    </section>
  );
}
