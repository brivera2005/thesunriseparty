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

/** Short grid labels; hero carries the purpose + fight line. */
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

/** Dawn → full sunrise keyframes for grid accents (excl. Blueprint). */
const SUNRISE_STOPS: { t: number; h: number; s: number; l: number }[] = [
  { t: 0, h: 220, s: 58, l: 28 }, // early dawn — deep navy
  { t: 0.14, h: 338, s: 52, l: 42 }, // rose / pink dawn
  { t: 0.28, h: 14, s: 75, l: 44 }, // dark orange dawn
  { t: 0.42, h: 22, s: 86, l: 50 }, // coral
  { t: 0.56, h: 30, s: 90, l: 52 }, // mid sunrise orange
  { t: 0.7, h: 38, s: 88, l: 55 }, // gold
  { t: 0.85, h: 46, s: 84, l: 58 }, // bright gold
  { t: 1, h: 52, s: 78, l: 62 }, // full sunrise — soft yellow light
];

function lerp(a: number, b: number, u: number) {
  return a + (b - a) * u;
}

function lerpHue(a: number, b: number, u: number) {
  let d = b - a;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return (a + d * u + 360) % 360;
}

/**
 * Early dawn → mid sunrise → full sunrise across the destination grid.
 * Blueprint keeps a strong blue accent as THE FIX (not in this sequence).
 */
function sunriseCardAccent(index: number, total: number) {
  const t = total <= 1 ? 0 : index / (total - 1);
  let i = 0;
  while (i < SUNRISE_STOPS.length - 2 && t > SUNRISE_STOPS[i + 1].t) i += 1;
  const a = SUNRISE_STOPS[i];
  const b = SUNRISE_STOPS[i + 1];
  const u = (t - a.t) / (b.t - a.t || 1);
  const h = lerpHue(a.h, b.h, u);
  const s = lerp(a.s, b.s, u);
  const l = lerp(a.l, b.l, u);
  // Stronger left wash in dark dawn so the stripe reads on white.
  const washA = 0.08 + (1 - t) * 0.07;
  return {
    accent: `hsl(${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%)`,
    wash: `hsl(${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}% / ${washA.toFixed(3)})`,
  };
}

export function LandingPage() {
  const sunriseTotal = platformCards.filter(
    (c) => c.highlight !== "blueprint"
  ).length;

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
            <h1 className="mx-auto max-w-3xl px-2 text-[clamp(1.35rem,5.4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-navy text-balance sm:px-0 sm:text-4xl lg:text-5xl">
              They are dismantling democracy in public.
            </h1>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-[clamp(0.95rem,3.4vw,1.125rem)] font-medium leading-snug text-navy/70 text-balance sm:mt-4 sm:text-lg">
              We track it, counter it, and build the fix. Fight until we win.
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
              const sunriseIndex = platformCards
                .slice(0, i)
                .filter((c) => c.highlight !== "blueprint").length;
              const { accent, wash } = isBlueprint
                ? { accent: BLUEPRINT_BLUE, wash: "rgba(37, 99, 235, 0.12)" }
                : sunriseCardAccent(sunriseIndex, sunriseTotal);

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
