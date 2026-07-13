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

const platformCards = [
  {
    href: "/rebuttal",
    title: "Rebuttal Desk",
    description:
      "Copy-ready counters to common claims - every response backed by primary sources.",
    icon: MessageSquareQuote,
    meta: `${conversationHelpers.length}+ rebuttals`,
  },
  {
    href: "/history",
    title: "Hidden History",
    description:
      "Textbook narrative vs. what the archives document, with historical rebuttals.",
    icon: History,
    meta: `${historyStats.entries}+ dual-timeline moments`,
  },
  {
    href: "/tracker",
    title: "Project 2025 Tracker",
    description:
      "Executive actions scored by severity and cross-checked with independent watchdogs.",
    icon: Activity,
    meta: `${trackerStats.total}+ verified actions`,
  },
  {
    href: "/legislation",
    title: "Live Legislation",
    description:
      "119th Congress bills with party-colored sponsors, roll-call tallies, and progressive analysis.",
    icon: Landmark,
    meta: `${legislationStats.total} bills · updated ${legislationStats.lastUpdated}`,
  },
  {
    href: "/scenarios",
    title: "Impact Scenarios",
    description:
      "Complex causal chains from administration actions and congressional blockage to lived family outcomes.",
    icon: GitBranch,
    meta: `${scenarioStats.total} causal scenarios`,
  },
  {
    href: "/blueprint",
    title: "The Blueprint",
    description:
      "Evidence-based progressive policy pillars with timelines and irreversible safeguards.",
    icon: BookOpen,
    meta: `${policyFixes.length} policy pillars`,
  },
  {
    href: "/mission",
    title: "Mission",
    description:
      "Why we exist, how we cite, and the transparency pledge that keeps us honest.",
    icon: Compass,
    meta: "Open-source stance",
  },
  {
    href: "/accountability",
    title: "Accountability",
    description:
      "Follow the money, the courts, and the structural fixes that constrain power.",
    icon: Scale,
    meta: "Citizens United & more",
  },
  {
    href: "/methodology",
    title: "Methodology",
    description:
      "How we score severity, verify sources, and archive every citation for durability.",
    icon: ShieldCheck,
    meta: "How we verify",
  },
  {
    href: "/donate",
    title: "Donate",
    description:
      "Keep the receipts public. Fund research, verification, and hosting.",
    icon: Heart,
    meta: "Support the work",
  },
  {
    href: "/contribute",
    title: "Contribute",
    description:
      "Suggest sources, report errors, or help expand rebuttals and history entries.",
    icon: Handshake,
    meta: "Community input",
  },
  {
    href: "/start",
    title: "Start Here",
    description:
      "A short guided tour through Rebuttal Desk, History, Tracker, and Blueprint.",
    icon: Compass,
    meta: "Guided tour",
  },
  {
    href: "/saved",
    title: "Saved",
    description:
      "Your bookmarked rebuttals, tracker events, and history moments - private to this device.",
    icon: BookMarked,
    meta: "Optional bookmarks",
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
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                Start here
              </Link>
              <Link
                href="/rebuttal"
                className="inline-flex h-11 min-w-[44px] items-center gap-2 rounded-lg border border-border bg-white px-5 text-sm font-semibold text-navy transition-all hover:border-primary/40 hover:bg-accent"
              >
                Open Rebuttal Desk
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white" aria-label="Platform sections">
        <div className="page-container">
          <FadeIn>
            <div className="mb-6 text-center sm:mb-8">
              <p className="mb-1.5 text-xs font-semibold tracking-[0.22em] text-navy uppercase">
                Explore the platform
              </p>
              <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                Every major section, one grid
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
                Same white canvas, navy type, and sunrise accents everywhere.
                Pick a section and go deep.
              </p>
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
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary">
                    Explore
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
