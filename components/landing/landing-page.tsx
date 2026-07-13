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

/** Short grid labels — hero has the punchy line only. */
const platformCards: {
  href: string;
  title: string;
  description: string;
  icon: typeof MessageSquareQuote;
}[] = [
  {
    href: "/tracker",
    title: "Tracker",
    description: "Admin actions by date, scored and cited.",
    icon: Activity,
  },
  {
    href: "/rebuttal",
    title: "Rebuttal",
    description: "Sourced counters, ready to copy.",
    icon: MessageSquareQuote,
  },
  {
    href: "/legislation",
    title: "Legislation",
    description: "Live bills, sponsors, and party votes.",
    icon: Landmark,
  },
  {
    href: "/history",
    title: "History",
    description: "Textbook story vs. the archives.",
    icon: History,
  },
  {
    href: "/scenarios",
    title: "Scenarios",
    description: "How a policy lands on a real family.",
    icon: GitBranch,
  },
  {
    href: "/blueprint",
    title: "Blueprint",
    description: "The fix and the gaslight exposed.",
    icon: BookOpen,
  },
  {
    href: "/mission",
    title: "About",
    description: "Mission, accountability, methodology.",
    icon: Compass,
  },
  {
    href: "/saved",
    title: "Saved",
    description: "Bookmarks on this device only.",
    icon: BookMarked,
  },
  {
    href: "/donate",
    title: "Donate",
    description: "Fund research and hosting.",
    icon: Heart,
  },
  {
    href: "/contribute",
    title: "Contribute",
    description: "Suggest sources, fix errors.",
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
        <div className="page-container relative flex flex-col items-center py-12 text-center sm:py-16 lg:py-20">
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-[0.06em] text-navy uppercase sm:text-4xl lg:text-5xl">
              Track. Counter. Fix.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold tracking-[0.14em] text-navy/55 uppercase sm:text-base">
              Live bills. Sourced answers. Real impact. Right now.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white" aria-label="Sections">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {platformCards.map((card, i) => (
              <FadeIn key={card.href} delay={i * 25}>
                <Link
                  href={card.href}
                  className={cn(
                    "group surface-card-interactive flex h-full min-h-[10.5rem] flex-col p-4 sm:p-5"
                  )}
                >
                  <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-navy/[0.06] text-navy transition-transform duration-300 group-hover:scale-105">
                    <card.icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <h2 className="text-[15px] font-semibold text-navy">
                    {card.title}
                  </h2>
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
