"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Calendar,
  Compass,
  MessageSquareQuote,
  PartyPopper,
  ShieldCheck,
} from "lucide-react";
import { timelineEvents, getThreatLevel, eventDetailPath, getAgendaEvents, getTrackerStats } from "@/lib/data/timeline-events";
import { conversationHelpers, rebuttalCategorySlugs } from "@/lib/data/conversation-helpers";
import { policyFixes } from "@/lib/data/policies";
import { validatedUrls } from "@/lib/data/validated-urls";
import { trackerSources } from "@/lib/data/tracker-sources";
import { ThreatGaugeMini } from "@/components/tracker/severity-gauge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const portalCards = [
  {
    href: "/tracker",
    title: "Project 2025 Tracker",
    description:
      "Verified executive actions, severity scores, and cross-references to independent watchdogs.",
    icon: Activity,
    accent: "border-destructive/30 bg-destructive/5 hover:border-destructive/50",
    iconColor: "text-destructive",
  },
  {
    href: "/blueprint",
    title: "Progressive Blueprint",
    description:
      "Evidence-based policy fixes with economic modeling and irreversible safeguards.",
    icon: BookOpen,
    accent: "border-primary/30 bg-primary/5 hover:border-primary/50",
    iconColor: "text-primary",
  },
  {
    href: "/rebuttal",
    title: "Rebuttal Desk",
    description:
      "Sourced counter-arguments for MAGA talking points — copy, print, and deploy.",
    icon: MessageSquareQuote,
    accent: "border-sunrise/30 bg-sunrise/5 hover:border-sunrise/50",
    iconColor: "text-sunrise",
  },
  {
    href: "/mission",
    title: "Our Mission",
    description:
      "Why Project Sunrise exists and how we hold power accountable with primary sources.",
    icon: Compass,
    accent: "border-border bg-card hover:border-primary/40",
    iconColor: "text-foreground",
  },
] as const;

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function severityTextClass(score: number) {
  if (score >= 8) return "text-severity-critical";
  if (score >= 6) return "text-severity-high";
  return "text-severity-moderate";
}

const agendaEvents = getAgendaEvents();
const showingRecentFallback = agendaEvents.every((event) => {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  return new Date(`${event.Date}T00:00:00`) < weekAgo;
});

function PlatformAtAGlance() {
  const trackerStats = getTrackerStats();
  const nodes = [
    {
      label: "Tracker Events",
      value: timelineEvents.length,
      sub: `${trackerStats.highSeverity} high severity`,
      color: "from-destructive/20 to-destructive/5 border-destructive/30",
      accent: "text-destructive",
    },
    {
      label: "Rebuttals",
      value: conversationHelpers.length,
      sub: `${rebuttalCategorySlugs.length} categories`,
      color: "from-sunrise/20 to-sunrise/5 border-sunrise/30",
      accent: "text-sunrise",
    },
    {
      label: "Verified Links",
      value: validatedUrls.size,
      sub: "archived + checked",
      color: "from-primary/20 to-primary/5 border-primary/30",
      accent: "text-primary",
    },
    {
      label: "Policy Fixes",
      value: policyFixes.length,
      sub: "Blueprint pillars",
      color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
      accent: "text-emerald-600 dark:text-emerald-400",
    },
    {
      label: "External Trackers",
      value: trackerSources.length,
      sub: "cross-referenced",
      color: "from-violet-500/20 to-violet-500/5 border-violet-500/30",
      accent: "text-violet-600 dark:text-violet-400",
    },
  ];

  return (
    <section className="border-b border-border bg-muted/10 py-10 sm:py-14" aria-label="Platform at a glance">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Platform at a Glance
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            One mission. Five data layers.
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connector lines — decorative */}
          <div
            className="pointer-events-none absolute inset-0 hidden sm:block"
            aria-hidden
          >
            <div className="absolute top-1/2 left-[10%] right-[10%] h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-[20%] bottom-[20%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {nodes.map((node, i) => (
              <div
                key={node.label}
                className={cn(
                  "relative flex flex-col items-center rounded-2xl border bg-gradient-to-b p-4 text-center sm:p-5",
                  node.color,
                  i === 4 && "col-span-2 sm:col-span-1"
                )}
              >
                <span
                  className={cn(
                    "text-3xl font-bold tabular-nums sm:text-4xl",
                    node.accent
                  )}
                >
                  {node.value}
                </span>
                <span className="mt-1 text-xs font-semibold tracking-wide uppercase">
                  {node.label}
                </span>
                <span className="mt-0.5 text-[10px] text-muted-foreground">
                  {node.sub}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" />
              Tier 1 primary sources
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-sky-500" />
              Tier 2 institutional
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-500" />
              Tier 3 fact-checks
            </span>
            <Link
              href="/methodology"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Full methodology →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeHub() {
  const threat = getThreatLevel();
  const stats = [
    { label: "Actions tracked", value: timelineEvents.length },
    { label: "Rebuttals ready", value: conversationHelpers.length },
    { label: "Policy fixes", value: policyFixes.length },
    { label: "Links verified", value: validatedUrls.size },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="hero-gradient-blueprint absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Democracy Needs Receipts
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Project Sunrise
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Track the authoritarian agenda with primary sources. Build the
              progressive counter-vision for when democracy wins. Every claim
              sourced. Every link archived.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/80">
              For the people — not the billionaires. Not the propagandists.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Compass className="size-4" />
                Start here — guided tour
              </Link>
              <Link
                href="/sitemap"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Site map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {timelineEvents.length >= 125 && (
        <section
          className="border-b border-border bg-gradient-to-r from-primary/10 via-sunrise/10 to-destructive/10"
          aria-label="125 events milestone"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
            <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
            <div>
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                125 actions tracked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pass 21 infrastructure milestone — FOIA backlogs, spending transparency,
                and press access limits now documented.{" "}
                <Link
                  href="/tracker/EVT-2025-1225-125"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  See event #125 →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {timelineEvents.length >= 120 && timelineEvents.length < 125 && (
        <section
          className="border-b border-border bg-gradient-to-r from-primary/10 via-sunrise/10 to-destructive/10"
          aria-label="120 events milestone"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
            <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
            <div>
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                120 actions tracked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pass 20 round-number milestone — election security, ethics rollbacks,
                and transparency events now documented.{" "}
                <Link
                  href="/tracker/EVT-2025-1212-120"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  See event #120 →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {timelineEvents.length >= 115 && timelineEvents.length < 120 && (
        <section
          className="border-b border-border bg-gradient-to-r from-primary/10 via-sunrise/10 to-destructive/10"
          aria-label="115 events milestone"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
            <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
            <div>
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                115 actions tracked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A verified milestone — transparency, FOIA, and accountability events
                now documented.{" "}
                <Link
                  href="/tracker/EVT-2025-1125-115"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  See event #115 →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {timelineEvents.length >= 110 && timelineEvents.length < 115 && (
        <section
          className="border-b border-border bg-gradient-to-r from-primary/10 via-sunrise/10 to-destructive/10"
          aria-label="110 events milestone"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
            <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
            <div>
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                110 actions tracked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A verified milestone — every executive action sourced, scored, and
                archived.{" "}
                <Link
                  href="/tracker/EVT-2025-1107-110"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  See event #110 →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      {timelineEvents.length >= 100 && timelineEvents.length < 110 && (
        <section
          className="border-b border-border bg-gradient-to-r from-primary/10 via-sunrise/10 to-destructive/10"
          aria-label="100 events milestone"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-center sm:px-6 sm:py-8">
            <PartyPopper className="size-8 shrink-0 text-sunrise" aria-hidden />
            <div>
              <p className="text-lg font-bold tracking-tight sm:text-xl">
                100 actions tracked
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A verified milestone — every executive action sourced, scored, and
                archived.{" "}
                <Link
                  href="/tracker/EVT-2025-0918-100"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  See event #100 →
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}

      <PlatformAtAGlance />

      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <ThreatGaugeMini threat={threat} />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-background px-4 py-6 text-center"
            >
              <p className="text-3xl font-bold tabular-nums sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Explore the Platform
            </h2>
            <p className="mt-2 text-muted-foreground">
              Four pillars — one transparency mission.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {portalCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={cn(
                  "group flex flex-col rounded-2xl border p-6 transition-all hover:shadow-md",
                  card.accent
                )}
              >
                <card.icon
                  className={cn("mb-4 size-8", card.iconColor)}
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="size-2 animate-pulse rounded-full bg-destructive" />
                <span className="text-xs font-semibold tracking-[0.2em] text-destructive uppercase">
                  {showingRecentFallback ? "Latest on the Agenda" : "This Week in the Agenda"}
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {showingRecentFallback
                  ? "Most Recent Tracker Events"
                  : "This Week in the Agenda"}
              </h2>
              {showingRecentFallback && (
                <p className="mt-1 text-sm text-muted-foreground">
                  No events dated within the last 7 days — showing the 5 most recent verified actions.
                </p>
              )}
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Calendar view
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {agendaEvents.map((event) => (
              <Link
                key={event.Event_ID}
                href={eventDetailPath(event.Event_ID)}
                className="block"
              >
              <Card
                className="border-border bg-card transition-shadow hover:shadow-sm"
              >
                <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
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
                  </div>
                  <span
                    className={cn(
                      "shrink-0 text-lg font-bold tabular-nums",
                      severityTextClass(event.Severity_Score)
                    )}
                  >
                    {event.Severity_Score}/10
                  </span>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            All events cross-referenced with independent Project 2025 monitors
          </p>
        </div>
      </section>
    </>
  );
}
