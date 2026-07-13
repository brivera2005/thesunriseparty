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
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

/** Primary tools match header nav order; Start/Donate/Contribute are footer-only. */
const platformCards: {
  href: string;
  title: string;
  description: string;
  icon: typeof MessageSquareQuote;
}[] = [
  {
    href: "/tracker",
    title: "Project 2025 Tracker",
    description: "Admin actions scored by severity, every claim cited.",
    icon: Activity,
  },
  {
    href: "/rebuttal",
    title: "Rebuttal Desk",
    description: "Someone lied. Get the sourced answer, ready to copy.",
    icon: MessageSquareQuote,
  },
  {
    href: "/legislation",
    title: "Legislation",
    description: "Live bills, sponsors, and party votes. Updated continuously.",
    icon: Landmark,
  },
  {
    href: "/history",
    title: "Hidden History",
    description: "Textbook story vs. what the archives actually show.",
    icon: History,
  },
  {
    href: "/scenarios",
    title: "Scenarios",
    description: "See how a policy choice lands on a real family.",
    icon: GitBranch,
  },
  {
    href: "/blueprint",
    title: "Blueprint",
    description: "The fix, the receipts, and the gaslight exposed.",
    icon: BookOpen,
  },
  {
    href: "/mission",
    title: "About",
    description:
      "Mission, accountability, and methodology - why we exist and how we verify.",
    icon: Compass,
  },
  {
    href: "/saved",
    title: "Saved",
    description: "Your bookmarks on this device only.",
    icon: BookMarked,
  },
  {
    href: "/donate",
    title: "Donate",
    description: "Fund research, verification, and hosting.",
    icon: Heart,
  },
  {
    href: "/contribute",
    title: "Contribute",
    description: "Suggest sources, fix errors, add rebuttals.",
    icon: Handshake,
  },
];

export function LandingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(11,31,58,0.04),_transparent_55%)]"
        />
        <div className="page-container relative flex flex-col items-center py-10 text-center sm:py-14 lg:py-16">
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              Track. Counter. Fix.
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground sm:text-lg">
              Live bills. Sourced answers. Real impact. Right now.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white" aria-label="Destinations">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {platformCards.map((card, i) => (
              <FadeIn key={card.href} delay={i * 30}>
                <Link
                  href={card.href}
                  className={cn(
                    "group surface-card-interactive flex h-full min-h-[11.5rem] flex-col p-4 sm:p-5"
                  )}
                >
                  <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-navy/[0.06] text-navy transition-transform duration-300 group-hover:scale-105">
                    <card.icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-[15px] font-semibold text-navy transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-snug text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-8 items-center gap-1 text-sm font-semibold text-navy/70 transition-colors group-hover:text-navy">
                    Open
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
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
