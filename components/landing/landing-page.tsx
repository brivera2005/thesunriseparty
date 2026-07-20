"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookMarked,
  BookOpen,
  EyeOff,
  GitBranch,
  History,
  Landmark,
  MessageSquareQuote,
  Compass,
} from "lucide-react";
import { ActivityTicker } from "@/components/landing/activity-ticker";
import { WizardPrompt } from "@/components/start/wizard-prompt";
import { PageShell } from "@/components/layout/page-shell";
import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Short grid labels; hero has the punchy line only. */
const platformCards: {
  href: string;
  title: string;
  description: string;
  icon: typeof MessageSquareQuote;
  highlight?: "blueprint";
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
    href: "/quiz",
    title: "Quiz",
    description: "Find where you actually stand.",
    icon: Compass,
  },
  {
    href: "/distracted",
    title: "Distraction Watch",
    description: "Shiny object vs what it buries.",
    icon: EyeOff,
  },
  {
    href: "/legislation",
    title: "Legislation",
    description: "Live bills, sponsors, and party votes.",
    icon: Landmark,
  },
  {
    href: "/history",
    title: "Hidden History",
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
    href: "/saved",
    title: "Saved",
    description: "Bookmarks on this device only.",
    icon: BookMarked,
  },
  {
    href: "/blueprint",
    title: "Blueprint",
    description: "THE FIX: how we enact change and build the best America yet.",
    icon: BookOpen,
    highlight: "blueprint",
  },
];

/** Logo navy: PROJECT SUNRISE mark (~#0b1f3a). */
const LOGO_NAVY = "#0b1f3a";
const BLUEPRINT_BLUE = "#2563eb";

/**
 * Sunrise orange to yellow progression across the destination grid.
 * Blueprint card overrides with a strong blue accent as THE FIX.
 */
function sunriseCardAccent(index: number, total: number) {
  const t = total <= 1 ? 0 : index / (total - 1);
  const h = 24 + t * 26;
  const s = 92 - t * 10;
  const l = 50 + t * 8;
  return {
    accent: `hsl(${h} ${s}% ${l}%)`,
    wash: `hsl(${h} ${s}% ${l}% / 0.1)`,
  };
}

export function LandingPage() {
  const cardCount = platformCards.length;

  return (
    <PageShell>
      <WizardPrompt />
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(11,31,58,0.04),_transparent_55%)]"
        />
        <div className="page-container relative flex flex-col items-center py-12 text-center sm:py-16 lg:py-20">
          <FadeIn>
            <h1 className="mx-auto max-w-full overflow-hidden px-2 text-[clamp(1.05rem,5.5vw,1.875rem)] font-bold tracking-[0.03em] text-navy uppercase whitespace-nowrap sm:px-0 sm:text-4xl sm:tracking-[0.06em] lg:text-5xl">
              Track. Counter. Fix.
            </h1>
            <p className="mx-auto mt-3 max-w-full overflow-hidden px-2 text-[clamp(9px,2.65vw,0.875rem)] font-semibold tracking-[0.04em] text-navy/55 uppercase whitespace-nowrap sm:mt-4 sm:tracking-[0.08em] md:text-base md:tracking-[0.1em]">
              Live bills. Sourced answers. Real impact. Right now.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8">
              <Link
                href="/start"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "min-h-11 gap-2 bg-navy text-white hover:bg-navy/90"
                )}
              >
                <Compass className="size-4" aria-hidden />
                Take the tour
              </Link>
              <Link
                href="/start"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "min-h-11 border-navy/20 text-navy hover:bg-navy/[0.04]"
                )}
              >
                New here? Start
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ActivityTicker limit={6} />

      <section className="section-y bg-white" aria-label="Sections">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
            {platformCards.map((card, i) => {
              const isBlueprint = card.highlight === "blueprint";
              const { accent, wash } = isBlueprint
                ? { accent: BLUEPRINT_BLUE, wash: "rgba(37, 99, 235, 0.12)" }
                : sunriseCardAccent(i, cardCount);

              return (
                <FadeIn key={card.href} delay={i * 25}>
                  <Link
                    href={card.href}
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-3.5",
                      isBlueprint && "ring-2 ring-[#2563eb]/35"
                    )}
                    style={{
                      borderColor: isBlueprint ? BLUEPRINT_BLUE : LOGO_NAVY,
                      backgroundImage: `linear-gradient(90deg, ${wash} 0%, transparent 55%)`,
                      boxShadow: isBlueprint
                        ? `inset 4px 0 0 0 ${BLUEPRINT_BLUE}, 0 2px 12px rgba(37,99,235,0.12)`
                        : `inset 3px 0 0 0 ${accent}`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex size-7 shrink-0 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-105",
                          isBlueprint
                            ? "bg-[#2563eb]/15 text-[#2563eb]"
                            : "bg-navy/[0.06] text-navy"
                        )}
                      >
                        <card.icon className="size-3.5" strokeWidth={1.75} />
                      </span>
                      <h2
                        className={cn(
                          "min-w-0 flex-1 truncate text-sm font-semibold",
                          isBlueprint ? "text-[#1d4ed8]" : "text-navy"
                        )}
                      >
                        {card.title}
                        {isBlueprint ? (
                          <span className="ml-1.5 rounded bg-[#2563eb] px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white uppercase">
                            The Fix
                          </span>
                        ) : null}
                      </h2>
                      <span
                        className={cn(
                          "inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold transition-colors",
                          isBlueprint
                            ? "text-[#2563eb] group-hover:text-[#1d4ed8]"
                            : "text-navy/70 group-hover:text-navy"
                        )}
                      >
                        Open
                        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-[13px]">
                      {card.description}
                    </p>
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
