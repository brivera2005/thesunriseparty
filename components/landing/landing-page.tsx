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
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/layout/section-header";
import { BrandLogo } from "@/components/brand-logo";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExpandableHint } from "@/components/ui/info-tip";
import { StatTile } from "@/components/ui/stat-tile";
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
    accent: "border-sunrise/40 hover:border-sunrise",
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
    <PageShell>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.98_0.015_75)_0%,_#ffffff_60%)]" />
        <div className="page-container relative flex flex-col items-center py-8 text-center sm:py-12 lg:py-14">
          <FadeIn>
            <h1 className="sr-only">Project Sunrise</h1>
            <BrandLogo variant="hero" priority />
          </FadeIn>
          <FadeIn delay={80}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:max-w-2xl">
              Track the authoritarian agenda with primary sources. Arm yourself
              with sourced rebuttals. Build the progressive counter-vision.
              Every claim cited. Every link archived.
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3">
              <Link
                href="/start"
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                title="Guided tour of Rebuttal Desk, History, Tracker, and Blueprint"
              >
                <Compass className="size-4" />
                Start here
              </Link>
              <Link
                href="/rebuttal"
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold transition-all hover:border-sunrise/50 hover:bg-sunrise/5"
                title="Open copy-ready sourced rebuttals"
              >
                <MessageSquareQuote className="size-4 text-sunrise" />
                Open Rebuttal Desk
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Platform overview */}
      <section className="section-y border-b border-border bg-white" aria-label="Platform overview">
        <div className="page-container">
          <FadeIn>
            <SectionHeader
              align="center"
              eyebrow="Explore the platform"
              title="Everything you need in one place"
              description="Five tools. One mission. Same structure on phone and desktop."
              tip="Each card opens a full workspace with the same filters and detail flow at every screen size."
            />
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformCards.map((card, i) => (
              <FadeIn key={card.href} delay={i * 50}>
                <Link
                  href={card.href}
                  className={cn(
                    "group surface-card-interactive flex h-full flex-col p-4 sm:p-4",
                    card.accent
                  )}
                >
                  <div className="mb-2.5 flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "inline-flex size-9 items-center justify-center rounded-lg sm:size-10",
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
                  <h3 className="text-base font-semibold group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold tabular-nums tracking-tight sm:text-xl">
                    {card.stat}
                    <span className="ml-2 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                      {card.statLabel}
                    </span>
                  </p>
                  <div className="mt-2 flex-1">
                    <ExpandableHint text={card.description} />
                  </div>
                  <span className="mt-3 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary">
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
      <section className="section-y border-b border-border bg-muted/15">
        <div className="page-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Featured Rebuttal"
              eyebrowClassName="text-sunrise"
              title="They say / You say"
              tip="Open the full rebuttal for sources, copy buttons, and related counters."
              action={
                <Link
                  href="/rebuttal"
                  className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Browse all {conversationHelpers.length}+
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
          </FadeIn>

          <FadeIn delay={60}>
            <Link href={rebuttalDetailPath(featuredRebuttal.id)} className="group block">
              <Card className="overflow-hidden border-sunrise/30 transition-all hover:border-sunrise/60 hover:shadow-md">
                <CardContent className="grid gap-0 p-0 md:grid-cols-2">
                  <div className="border-b border-border p-4 md:border-r md:border-b-0 sm:p-5 md:p-6">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-destructive uppercase">
                      They say
                    </p>
                    <p className="text-base font-medium leading-snug sm:text-lg">
                      &ldquo;{featuredRebuttal.theySay}&rdquo;
                    </p>
                  </div>
                  <div className="bg-sunrise/5 p-4 sm:p-5 md:p-6">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-sunrise uppercase">
                      You say
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                      {featuredRebuttal.youSay.length > 220
                        ? featuredRebuttal.youSay.slice(0, 220).trim() + "…"
                        : featuredRebuttal.youSay}
                    </p>
                    <span className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
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

      {/* 4. Featured History */}
      <section className="section-y border-b border-border bg-white">
        <div className="page-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Hidden History"
              eyebrowClassName="text-amber-700"
              title="Textbook vs. reality"
              tip="Same dual-column anatomy as the full Hidden History workspace."
              action={
                <Link
                  href="/history"
                  className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Open dual timeline
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
          </FadeIn>

          <FadeIn delay={60}>
            <Link href={historyDetailPath(featuredHistory.id)} className="group block">
              <Card className="border-amber-500/25 transition-all hover:border-amber-500/50 hover:shadow-md">
                <CardContent>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{featuredHistory.era}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {featuredHistory.date}
                    </span>
                    <span className="text-sm font-semibold">{featuredHistory.title}</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Textbook version
                      </p>
                      <ExpandableHint text={featuredHistory.textbookVersion} previewLines={2} />
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-semibold tracking-wide text-amber-700 uppercase">
                        What actually happened
                      </p>
                      <ExpandableHint text={featuredHistory.actualHistory} previewLines={2} />
                    </div>
                  </div>
                  <span className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
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
      <section className="section-y border-b border-border bg-muted/15">
        <div className="page-container">
          <FadeIn>
            <SectionHeader
              eyebrow="Tracker snapshot"
              eyebrowClassName="text-destructive"
              title="Latest high-severity events"
              tip="Severity scores use the same 1-10 scale as the full Tracker filters."
              action={
                <Link
                  href="/tracker"
                  className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Full tracker
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
          </FadeIn>

          <div className="space-y-2.5">
            {highSeverityLatest.map((event, i) => (
              <FadeIn key={event.Event_ID} delay={i * 50}>
                <Link href={eventDetailPath(event.Event_ID)} className="block">
                  <Card className="transition-all hover:border-destructive/40 hover:shadow-sm">
                    <CardContent className="flex flex-col gap-2.5 p-3.5 sm:flex-row sm:items-center sm:justify-between sm:p-4">
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
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
                          "shrink-0 text-base font-bold tabular-nums sm:text-lg",
                          severityTextClass(event.Severity_Score)
                        )}
                        title={`Severity ${event.Severity_Score} of 10`}
                      >
                        {event.Severity_Score}/10
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            Cross-referenced with independent Project 2025 monitors
          </p>
        </div>
      </section>

      {/* 6. Stats strip */}
      <section className="section-y-tight border-b border-border bg-white" aria-label="Platform statistics">
        <div className="page-container">
          <FadeIn>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              <StatTile
                label="Tracker events"
                value={trackerStats.total}
                sub={`${trackerStats.highSeverity} high severity`}
                tip="Verified executive actions scored by democratic risk."
              />
              <StatTile
                label="Rebuttals"
                value={conversationHelpers.length}
                sub={`${rebuttalCategorySlugs.length} categories`}
                tip="Sourced they-say / you-say counters ready to copy."
              />
              <StatTile
                label="History entries"
                value={historyStats.entries}
                sub={`${historyStats.rebuttals} historical rebuttals`}
                tip="Dual-timeline moments textbooks often skip."
              />
              <StatTile
                label="Verified links"
                value={validatedUrls.size}
                sub="archived + checked"
                tip="Primary URLs checked and archived for durability."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Start here CTA */}
      <section className="section-y border-b border-border bg-white">
        <div className="page-container max-w-3xl text-center">
          <FadeIn>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/8 to-white px-5 py-8 sm:px-8 sm:py-10">
              <Sparkles className="mx-auto size-7 text-primary" />
              <h2 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                New here? Start with the tour.
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                A short guided path through Rebuttal Desk, Hidden History,
                Tracker, and Blueprint so you know where to go next.
              </p>
              <Link
                href="/start"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                <Compass className="size-4" />
                Take the guided tour
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
