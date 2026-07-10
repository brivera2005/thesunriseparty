"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Compass,
  History,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { BrandLogo } from "@/components/brand-logo";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  conversationHelpers,
  rebuttalDetailPath,
  rebuttalCategorySlugs,
} from "@/lib/data/conversation-helpers";
import {
  timelineEvents,
  getTrackerStats,
  eventDetailPath,
} from "@/lib/data/timeline-events";
import {
  getFeaturedHistoryEntry,
  getHistoryStats,
  historyDetailPath,
} from "@/lib/data/hidden-history";
import { policyFixes } from "@/lib/data/policies";
import { validatedUrls } from "@/lib/data/validated-urls";
import { cn } from "@/lib/utils";

const featuredRebuttal =
  conversationHelpers.find((r) => r.id === "but-obama-did-this") ??
  conversationHelpers[0];

const featuredHistory = getFeaturedHistoryEntry();
const historyStats = getHistoryStats();
const trackerStats = getTrackerStats();

const highSeverityLatest = [...timelineEvents]
  .filter((e) => e.Severity_Score >= 8)
  .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
  .slice(0, 3);

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

const platformCards = [
  {
    href: "/rebuttal",
    title: "Rebuttal Desk",
    stat: `${conversationHelpers.length}+`,
    statLabel: "sourced rebuttals",
    description:
      "When they say X, you say Y. Copy-ready counter-arguments with primary sources.",
    icon: MessageSquareQuote,
    accent: "border-sunrise/40 hover:border-sunrise hover:shadow-sunrise/10",
    iconBg: "bg-sunrise/15 text-sunrise",
    featured: true,
  },
  {
    href: "/history",
    title: "Hidden History",
    stat: `${historyStats.entries}+`,
    statLabel: "dual-timeline moments",
    description:
      "Textbook version vs. what actually happened. Dual timeline with historical rebuttals.",
    icon: History,
    accent: "border-amber-500/30 hover:border-amber-500/60",
    iconBg: "bg-amber-500/15 text-amber-700",
    featured: false,
  },
  {
    href: "/tracker",
    title: "Project 2025 Tracker",
    stat: `${trackerStats.total}+`,
    statLabel: "verified actions",
    description:
      "Executive actions scored by severity, cross-referenced with independent watchdogs.",
    icon: Activity,
    accent: "border-destructive/30 hover:border-destructive/60",
    iconBg: "bg-destructive/10 text-destructive",
    featured: false,
  },
  {
    href: "/blueprint",
    title: "The Blueprint",
    stat: `${policyFixes.length}`,
    statLabel: "policy pillars",
    description:
      "Evidence-based progressive fixes with economic modeling and irreversible safeguards.",
    icon: BookOpen,
    accent: "border-primary/30 hover:border-primary/60",
    iconBg: "bg-primary/10 text-primary",
    featured: false,
  },
  {
    href: "/mission",
    title: "Mission & Accountability",
    stat: "Open",
    statLabel: "source pledge",
    description:
      "Why we exist, how we cite, and how we hold power accountable with receipts.",
    icon: Compass,
    accent: "border-border hover:border-foreground/30",
    iconBg: "bg-muted text-foreground",
    featured: false,
  },
] as const;

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        {/* 1. Hero */}
        <section className="relative overflow-hidden border-b border-border bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.98_0.015_75)_0%,_#ffffff_60%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-16 lg:py-20">
            <FadeIn>
              <h1 className="sr-only">Project Sunrise</h1>
              <BrandLogo variant="hero" priority />
            </FadeIn>
            <FadeIn delay={80}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:max-w-2xl sm:text-base">
                Track the authoritarian agenda with primary sources. Arm
                yourself with sourced rebuttals. Build the progressive
                counter-vision. Every claim cited. Every link archived.
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
                <Link
                  href="/start"
                  className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:px-6"
                >
                  <Compass className="size-4" />
                  Start here
                </Link>
                <Link
                  href="/rebuttal"
                  className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold transition-all hover:border-sunrise/50 hover:bg-sunrise/5 sm:px-6"
                >
                  <MessageSquareQuote className="size-4 text-sunrise" />
                  Open Rebuttal Desk
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Platform overview */}
        <section
          className="border-b border-border bg-white py-10 sm:py-16"
          aria-label="Platform overview"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="mb-6 text-center sm:mb-8">
                <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  Explore the platform
                </p>
                <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-3xl">
                  Everything you need in one place
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                  Five tools. One mission. Pick a door and go deeper.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {platformCards.map((card, i) => (
                <FadeIn key={card.href} delay={i * 60}>
                  <Link
                    href={card.href}
                    className={cn(
                      "group flex h-full flex-col rounded-xl border bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:p-5",
                      card.accent,
                      card.featured && "sm:col-span-2 lg:col-span-1 lg:row-span-1"
                    )}
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <span
                        className={cn(
                          "inline-flex size-10 items-center justify-center rounded-xl sm:size-11",
                          card.iconBg
                        )}
                      >
                        <card.icon className="size-5" strokeWidth={1.75} />
                      </span>
                      {card.featured && (
                        <Badge className="bg-sunrise/15 text-sunrise-foreground hover:bg-sunrise/20">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-base font-semibold group-hover:text-primary sm:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xl font-bold tabular-nums tracking-tight sm:text-2xl">
                      {card.stat}
                      <span className="ml-2 text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
                        {card.statLabel}
                      </span>
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                    <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary sm:min-h-0 sm:mt-5">
                      Explore
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Featured Rebuttal */}
        <section className="border-b border-border bg-muted/20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-sunrise uppercase">
                    Featured Rebuttal
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    They say / You say
                  </h2>
                </div>
                <Link
                  href="/rebuttal"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Browse all {conversationHelpers.length}+
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <Link
                href={rebuttalDetailPath(featuredRebuttal.id)}
                className="group block"
              >
                <Card className="overflow-hidden border-sunrise/30 bg-white shadow-sm transition-all hover:border-sunrise/60 hover:shadow-md">
                  <CardContent className="grid gap-0 p-0 md:grid-cols-2">
                    <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
                      <p className="mb-3 text-xs font-semibold tracking-wide text-destructive uppercase">
                        They say
                      </p>
                      <p className="text-lg font-medium leading-snug sm:text-xl">
                        &ldquo;{featuredRebuttal.theySay}&rdquo;
                      </p>
                    </div>
                    <div className="bg-sunrise/5 p-6 md:p-8">
                      <p className="mb-3 text-xs font-semibold tracking-wide text-sunrise uppercase">
                        You say
                      </p>
                      <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                        {featuredRebuttal.youSay.length > 280
                          ? featuredRebuttal.youSay.slice(0, 280).trim() + "…"
                          : featuredRebuttal.youSay}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                        Read full rebuttal
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* 4. Featured History moment */}
        <section className="border-b border-border bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-amber-700 uppercase">
                    Hidden History
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Textbook vs. reality
                  </h2>
                </div>
                <Link
                  href="/history"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Open dual timeline
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <Link
                href={historyDetailPath(featuredHistory.id)}
                className="group block"
              >
                <Card className="border-amber-500/25 bg-white transition-all hover:border-amber-500/50 hover:shadow-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{featuredHistory.era}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {featuredHistory.date}
                      </span>
                      <span className="text-sm font-semibold">
                        {featuredHistory.title}
                      </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                          Textbook version
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {featuredHistory.textbookVersion}
                        </p>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-amber-700 uppercase">
                          What actually happened
                        </p>
                        <p className="text-sm leading-relaxed">
                          {featuredHistory.actualHistory}
                        </p>
                      </div>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                      Explore this moment
                      <ArrowRight className="size-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* 5. Tracker snapshot */}
        <section className="border-b border-border bg-muted/20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-destructive uppercase">
                    Tracker snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Latest high-severity events
                  </h2>
                </div>
                <Link
                  href="/tracker"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Full tracker
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>

            <div className="space-y-3">
              {highSeverityLatest.map((event, i) => (
                <FadeIn key={event.Event_ID} delay={i * 70}>
                  <Link href={eventDetailPath(event.Event_ID)} className="block">
                    <Card className="border-border bg-white transition-all hover:border-destructive/40 hover:shadow-sm">
                      <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                        <div className="min-w-0 flex-1">
                          <div className="mb-1.5 flex flex-wrap items-center gap-2">
                            <Badge variant="destructive" className="text-[10px]">
                              {event.Action_Type}
                            </Badge>
                            <span className="text-[11px] text-muted-foreground">
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
                </FadeIn>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              Cross-referenced with independent Project 2025 monitors
            </p>
          </div>
        </section>

        {/* 6. Stats strip */}
        <section
          className="border-b border-border bg-white py-12 sm:py-16"
          aria-label="Platform statistics"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
                {[
                  {
                    label: "Tracker events",
                    value: trackerStats.total,
                    sub: `${trackerStats.highSeverity} high severity`,
                  },
                  {
                    label: "Rebuttals",
                    value: conversationHelpers.length,
                    sub: `${rebuttalCategorySlugs.length} categories`,
                  },
                  {
                    label: "History entries",
                    value: historyStats.entries,
                    sub: `${historyStats.rebuttals} historical rebuttals`,
                  },
                  {
                    label: "Verified links",
                    value: validatedUrls.size,
                    sub: "archived + checked",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center"
                  >
                    <p className="text-3xl font-bold tabular-nums sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-foreground uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 7. Start here CTA */}
        <section className="border-b border-border bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <FadeIn>
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/8 to-white px-6 py-12 sm:px-10">
                <Sparkles className="mx-auto size-8 text-primary" />
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  New here? Start with the tour.
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                  A short guided path through the Rebuttal Desk, Hidden History,
                  Tracker, and Blueprint so you know where to go next.
                </p>
                <Link
                  href="/start"
                  className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  <Compass className="size-4" />
                  Take the guided tour
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
