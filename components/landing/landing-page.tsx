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
import { formatDateUS } from "@/lib/format-date";
import {
  getSectionTheme,
  type SectionId,
} from "@/lib/section-theme";
import { cn } from "@/lib/utils";

const historyStats = getHistoryStats();
const trackerStats = getTrackerStats();
const legislationStats = getLegislationStats();
const scenarioStats = getScenarioStats();
const billsUpdated = formatDateUS(legislationStats.lastUpdated);

const livePulse: {
  label: string;
  value: string;
  href: string;
  section: SectionId;
}[] = [
  {
    label: "High-severity actions",
    value: String(trackerStats.highSeverity),
    href: "/tracker",
    section: "tracker",
  },
  {
    label: "Live rebuttals",
    value: `${conversationHelpers.length}+`,
    href: "/rebuttal",
    section: "rebuttal",
  },
  {
    label: "Bills updated",
    value: billsUpdated,
    href: "/legislation",
    section: "legislation",
  },
  {
    label: "Impact scenarios",
    value: String(scenarioStats.total),
    href: "/scenarios",
    section: "scenarios",
  },
];

/** Primary tools match header nav order; Start/Donate/Contribute are footer-only. */
const platformCards: {
  href: string;
  title: string;
  description: string;
  icon: typeof MessageSquareQuote;
  meta: string;
  section: SectionId;
}[] = [
  {
    href: "/tracker",
    title: "Project 2025 Tracker",
    description: "Admin actions scored by severity, every claim cited.",
    icon: Activity,
    meta: `${trackerStats.highSeverity} high-severity`,
    section: "tracker",
  },
  {
    href: "/rebuttal",
    title: "Rebuttal Desk",
    description: "Someone lied. Get the sourced answer, ready to copy.",
    icon: MessageSquareQuote,
    meta: `${conversationHelpers.length}+ ready`,
    section: "rebuttal",
  },
  {
    href: "/legislation",
    title: "Legislation",
    description: "Live bills, sponsors, and party votes. Updated continuously.",
    icon: Landmark,
    meta: `${legislationStats.total} bills · ${billsUpdated}`,
    section: "legislation",
  },
  {
    href: "/history",
    title: "Hidden History",
    description: "Textbook story vs. what the archives actually show.",
    icon: History,
    meta: `${historyStats.entries}+ moments`,
    section: "history",
  },
  {
    href: "/scenarios",
    title: "Scenarios",
    description: "See how a policy choice lands on a real family.",
    icon: GitBranch,
    meta: `${scenarioStats.total} causal chains`,
    section: "scenarios",
  },
  {
    href: "/blueprint",
    title: "Blueprint",
    description: "The fix, the receipts, and the gaslight exposed.",
    icon: BookOpen,
    meta: `${policyFixes.length} policy pillars`,
    section: "blueprint",
  },
  {
    href: "/mission",
    title: "About",
    description:
      "Mission, accountability, and methodology - why we exist and how we verify.",
    icon: Compass,
    meta: "Mission · Accountability · Methodology",
    section: "mission",
  },
  {
    href: "/saved",
    title: "Saved",
    description: "Your bookmarks on this device only.",
    icon: BookMarked,
    meta: "Private to you",
    section: "saved",
  },
  {
    href: "/donate",
    title: "Donate",
    description: "Fund research, verification, and hosting.",
    icon: Heart,
    meta: "Keep receipts public",
    section: "donate",
  },
  {
    href: "/contribute",
    title: "Contribute",
    description: "Suggest sources, fix errors, add rebuttals.",
    icon: Handshake,
    meta: "Community input",
    section: "contribute",
  },
];

export function LandingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.10),_transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-accent/30 to-transparent"
        />
        <div className="page-container relative flex flex-col items-center py-10 text-center sm:py-14 lg:py-16">
          <FadeIn>
            <h1 className="sr-only">Project Sunrise</h1>
            <BrandLogo variant="hero" priority />
          </FadeIn>
          <FadeIn delay={80}>
            <p className="mx-auto mt-6 max-w-xl text-3xl font-bold tracking-tight text-navy sm:mt-7 sm:text-4xl">
              Track. Counter. Fix.
            </p>
            <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
              Live bills. Sourced answers. Real impact, right now.
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
              <Link
                href="/tracker"
                className="inline-flex h-12 min-w-[44px] items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Project 2025 Tracker
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/rebuttal"
                className="inline-flex h-12 min-w-[44px] items-center gap-2 rounded-xl border border-[color:var(--section-rebuttal)]/40 bg-white px-6 text-sm font-semibold text-navy transition-all hover:bg-[color:var(--section-rebuttal-soft)]"
              >
                Rebuttal Desk
              </Link>
              <Link
                href="/legislation"
                className="inline-flex h-12 min-w-[44px] items-center gap-2 rounded-xl border border-[color:var(--section-legislation)]/40 bg-white px-6 text-sm font-semibold text-navy transition-all hover:bg-[color:var(--section-legislation-soft)]"
              >
                Legislation
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
            {livePulse.map((item) => {
              const theme = getSectionTheme(item.section);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl border border-border border-l-4 bg-white px-3 py-3 text-left shadow-sm transition-all hover:shadow-md"
                  style={{ borderLeftColor: theme.hex }}
                >
                  <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p
                    className="mt-1 text-lg font-bold tabular-nums sm:text-xl"
                    style={{ color: theme.hex }}
                  >
                    {item.value}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white" aria-label="What you get">
        <div className="page-container">
          <FadeIn>
            <div className="mb-6 text-center sm:mb-8">
              <p className="mb-1.5 text-xs font-semibold tracking-[0.22em] text-navy uppercase">
                For you
              </p>
              <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                What you get here
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformCards.map((card, i) => {
              const theme = getSectionTheme(card.section);
              return (
                <FadeIn key={card.href} delay={i * 40}>
                  <Link
                    href={card.href}
                    className={cn(
                      "group surface-card-interactive flex h-full flex-col border-l-4 p-4 sm:p-5"
                    )}
                    style={{ borderLeftColor: theme.hex }}
                  >
                    <span
                      className="mb-3 inline-flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: theme.soft,
                        color: theme.hex,
                      }}
                    >
                      <card.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <h3
                      className="text-base font-semibold text-navy transition-colors"
                      style={{ ["--hover" as string]: theme.hex }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                      {card.meta}
                    </p>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {card.description}
                    </p>
                    <span
                      className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold"
                      style={{ color: theme.hex }}
                    >
                      Open
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
