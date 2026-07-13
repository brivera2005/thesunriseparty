"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookMarked,
  BookOpen,
  Compass,
  GitBranch,
  Handshake,
  Heart,
  History,
  Landmark,
  MessageSquareQuote,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { BrandLogo } from "@/components/brand-logo";
import { FadeIn } from "@/components/ui/fade-in";
import { conversationHelpers } from "@/lib/data/conversation-helpers";
import { getTrackerStats } from "@/lib/data/timeline-events";
import { getHistoryStats } from "@/lib/data/hidden-history";
import { getLegislationStats } from "@/lib/data/legislation";
import { policyFixes } from "@/lib/data/policies";
import { getScenarioStats } from "@/lib/data/scenarios";
import { cn } from "@/lib/utils";

const historyStats = getHistoryStats();
const trackerStats = getTrackerStats();
const legislationStats = getLegislationStats();
const scenarioStats = getScenarioStats();

const livePulse = [
  {
    label: "Bills updated",
    value: legislationStats.lastUpdated,
    href: "/legislation",
  },
  {
    label: "High-severity actions",
    value: String(trackerStats.highSeverity),
    href: "/tracker",
  },
  {
    label: "Impact scenarios",
    value: String(scenarioStats.total),
    href: "/scenarios",
  },
  {
    label: "Live rebuttals",
    value: `${conversationHelpers.length}+`,
    href: "/rebuttal",
  },
] as const;

const platformCards = [
  {
    href: "/rebuttal",
    title: "Rebuttal Desk",
    description: "When they say X, you say Y. Copy-ready, sourced.",
    icon: MessageSquareQuote,
    meta: `${conversationHelpers.length}+ ready`,
  },
  {
    href: "/history",
    title: "Hidden History",
    description: "Textbook story vs. what the archives actually show.",
    icon: History,
    meta: `${historyStats.entries}+ moments`,
  },
  {
    href: "/tracker",
    title: "Tracker",
    description: "Project 2025 and admin actions, scored by severity.",
    icon: Activity,
    meta: `${trackerStats.highSeverity} high-severity`,
  },
  {
    href: "/legislation",
    title: "Live Legislation",
    description: "Live bills, sponsors, party votes. Updated continuously.",
    icon: Landmark,
    meta: `${legislationStats.total} bills · ${legislationStats.lastUpdated}`,
  },
  {
    href: "/scenarios",
    title: "Scenarios",
    description: "Family gets Y. Should get Z. Trace who blocked the fix.",
    icon: GitBranch,
    meta: `${scenarioStats.total} causal chains`,
  },
  {
    href: "/blueprint",
    title: "Blueprint",
    description: "The fix, the receipts, and the gaslight exposed.",
    icon: BookOpen,
    meta: `${policyFixes.length} policy pillars`,
  },
  {
    href: "/mission",
    title: "Mission",
    description: "Why we exist and how we stay honest.",
    icon: Compass,
    meta: "Transparency pledge",
  },
  {
    href: "/accountability",
    title: "Accountability",
    description: "Follow the money, the courts, and power constraints.",
    icon: Scale,
    meta: "Dark money & courts",
  },
  {
    href: "/methodology",
    title: "Methodology",
    description: "How we score, verify, and archive every claim.",
    icon: ShieldCheck,
    meta: "How we verify",
  },
  {
    href: "/donate",
    title: "Donate",
    description: "Fund research, verification, and hosting.",
    icon: Heart,
    meta: "Keep receipts public",
  },
  {
    href: "/contribute",
    title: "Contribute",
    description: "Suggest sources, fix errors, add rebuttals.",
    icon: Handshake,
    meta: "Community input",
  },
  {
    href: "/saved",
    title: "Saved",
    description: "Your bookmarks on this device only.",
    icon: BookMarked,
    meta: "Private to you",
  },
] as const;

export function LandingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="page-container relative flex flex-col items-center py-8 text-center sm:py-12 lg:py-14">
          <FadeIn>
            <h1 className="sr-only">Project Sunrise</h1>
            <BrandLogo variant="hero" priority />
          </FadeIn>
          <FadeIn delay={80}>
            <p className="mx-auto mt-5 max-w-lg text-xl font-bold tracking-tight text-navy sm:mt-6 sm:text-2xl">
              Track the agenda. Counter the lies. Build the fix.
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              Live bills. Sourced counters. Family impact. Right now.
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3">
              <Link
                href="/start"
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                Start tour
              </Link>
              <Link
                href="/rebuttal"
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold text-navy transition-all hover:border-primary/40 hover:bg-accent"
              >
                Rebuttal Desk
              </Link>
              <Link
                href="/legislation"
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold text-navy transition-all hover:border-primary/40 hover:bg-accent"
              >
                Live bills
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className="border-b border-border bg-accent/40"
        aria-label="Live pulse"
      >
        <div className="page-container py-4 sm:py-5">
          <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">
              Live now
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {livePulse.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg border border-border bg-white px-3 py-3 text-left transition-colors hover:border-primary/40"
              >
                <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-navy sm:text-xl">
                  {item.value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white" aria-label="What we offer">
        <div className="page-container">
          <FadeIn>
            <div className="mb-6 text-center sm:mb-8">
              <p className="mb-1.5 text-xs font-semibold tracking-[0.22em] text-navy uppercase">
                Tools
              </p>
              <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                What you get here
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformCards.map((card, i) => (
              <FadeIn key={card.href} delay={i * 40}>
                <Link
                  href={card.href}
                  className={cn(
                    "group surface-card-interactive flex h-full flex-col p-4 sm:p-5"
                  )}
                >
                  <span className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                    <card.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base font-semibold text-navy group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                    {card.meta}
                  </p>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary">
                    Open
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
