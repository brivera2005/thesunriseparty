"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { startTourIntro, tourSteps } from "@/lib/data/start-tour-content";
import { markWizardDone } from "@/lib/wizard";
import { cn } from "@/lib/utils";
import { PageShell } from "@/components/layout/page-shell";
import {
  BLUEPRINT_BLUE,
  BLUEPRINT_SKY_MID,
  BLUEPRINT_SKY_SOFT,
  BLUEPRINT_TEXT,
} from "@/lib/sunrise-accent";

export function StartPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const step = tourSteps[activeStep];
  const total = tourSteps.length;
  const isFirst = activeStep === 0;
  const isLast = activeStep === total - 1;
  const isLight = step.tone === "light";

  const closeWizard = useCallback(() => {
    markWizardDone();
    router.push("/");
  }, [router]);

  const goNext = useCallback(() => {
    if (isLast) {
      markWizardDone();
      router.push("/");
      return;
    }
    setActiveStep((s) => Math.min(s + 1, total - 1));
  }, [isLast, router, total]);

  const goPrev = useCallback(() => {
    setActiveStep((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeWizard();
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        if (
          e.target instanceof HTMLElement &&
          (e.target.tagName === "A" || e.target.tagName === "BUTTON")
        ) {
          if (e.key === "Enter") return;
        }
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeWizard, goNext, goPrev]);

  const textPrimary = isLight ? "text-white" : "text-navy";
  const textMuted = isLight ? "text-white/80" : "text-navy/70";
  const overlay = isLight
    ? "bg-black/25 backdrop-blur-[2px]"
    : "bg-white/55 backdrop-blur-[2px]";

  return (
    <PageShell hideFooter className="bg-navy">
      <section
        className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col sm:min-h-[calc(100dvh-4rem)]"
        style={{ backgroundImage: step.gradient }}
        aria-labelledby="wizard-step-title"
      >
        <div
          aria-hidden
          className={cn("pointer-events-none absolute inset-0 transition-colors duration-500", overlay)}
        />

        <div className="relative z-10 flex flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto flex w-full max-w-lg flex-1 flex-col">
            <div className="mb-6 flex items-center justify-between gap-3">
              <p
                className={cn(
                  "text-xs font-semibold tracking-[0.18em] uppercase",
                  textMuted
                )}
              >
                {startTourIntro.eyebrow}
              </p>
              <button
                type="button"
                onClick={closeWizard}
                className={cn(
                  "inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-lg px-2 text-sm font-medium transition-colors",
                  isLight
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
                aria-label="Close tour and skip wizard"
              >
                <X className="size-4" aria-hidden />
                <span className="hidden sm:inline">{startTourIntro.skipLabel}</span>
              </button>
            </div>

            <div
              className="mb-6 flex flex-col items-center gap-3"
              role="group"
              aria-label={`Step ${activeStep + 1} of ${total}`}
            >
              <p className={cn("text-sm font-medium tabular-nums", textMuted)}>
                {activeStep + 1} of {total}
              </p>
              <div
                className="flex flex-wrap items-center justify-center gap-2"
                role="tablist"
                aria-label="Tour progress"
              >
                {tourSteps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === activeStep}
                    aria-label={`${s.title}, step ${i + 1}`}
                    onClick={() => setActiveStep(i)}
                    className={cn(
                      "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      isLight
                        ? "focus-visible:ring-white focus-visible:ring-offset-transparent"
                        : "focus-visible:ring-navy focus-visible:ring-offset-white/40",
                      i === activeStep
                        ? "h-2.5 w-8"
                        : "h-2.5 w-2.5 opacity-70 hover:opacity-100"
                    )}
                    style={{
                      backgroundColor:
                        i === activeStep
                          ? isLight
                            ? "#ffffff"
                            : "#0b1f3a"
                          : i < activeStep
                            ? isLight
                              ? "rgba(255,255,255,0.55)"
                              : "rgba(11,31,58,0.45)"
                            : isLight
                              ? "rgba(255,255,255,0.28)"
                              : "rgba(11,31,58,0.22)",
                    }}
                  />
                ))}
              </div>
            </div>

            <article
              key={step.id}
              className={cn(
                "flex flex-1 flex-col rounded-2xl border p-6 shadow-lg sm:p-8",
                isLight
                  ? "border-white/20 bg-white/10 text-white shadow-black/20"
                  : "border-navy/10 bg-white/80 text-navy shadow-navy/10",
                step.highlight &&
                  "ring-2 ring-[#38bdf8]/45 ring-offset-2 ring-offset-transparent"
              )}
            >
              <div className="mb-5 flex items-start gap-4">
                <div
                  className={cn(
                    "flex size-14 shrink-0 items-center justify-center rounded-2xl border",
                    isLight
                      ? "border-white/30 bg-white/15 text-white"
                      : "border-navy/15 bg-navy/[0.06] text-navy",
                    step.highlight && "border-[#38bdf8]/50 text-navy"
                  )}
                  style={
                    step.highlight
                      ? { backgroundColor: BLUEPRINT_SKY_SOFT }
                      : undefined
                  }
                >
                  <step.icon className="size-7" aria-hidden />
                </div>
                <div className="min-w-0 pt-0.5">
                  {step.highlight ? (
                    <span
                      className="mb-1.5 inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase"
                      style={{
                        backgroundColor: BLUEPRINT_SKY_MID,
                        color: BLUEPRINT_TEXT,
                      }}
                    >
                      The Fix
                    </span>
                  ) : null}
                  <h1
                    id="wizard-step-title"
                    className={cn(
                      "text-2xl font-bold tracking-tight sm:text-3xl",
                      textPrimary,
                      step.highlight && !isLight && "text-navy"
                    )}
                  >
                    {step.title}
                  </h1>
                </div>
              </div>

              <p
                className={cn(
                  "text-base font-medium leading-relaxed sm:text-lg",
                  textPrimary
                )}
              >
                {step.whatItIs}
              </p>
              <p className={cn("mt-3 text-sm leading-relaxed sm:text-base", textMuted)}>
                {step.whatYouDo}
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                {step.href ? (
                  <Link
                    href={step.href}
                    onClick={() => markWizardDone()}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "min-h-12 w-full gap-2 text-base font-semibold",
                      step.highlight
                        ? "text-navy hover:opacity-90"
                        : isLight
                          ? "bg-white text-navy hover:bg-white/90"
                          : "bg-navy text-white hover:bg-navy/90"
                    )}
                    style={
                      step.highlight
                        ? { backgroundColor: BLUEPRINT_BLUE }
                        : undefined
                    }
                  >
                    {step.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                ) : null}

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  {!isFirst ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="lg"
                      onClick={goPrev}
                      className={cn(
                        "min-h-11 flex-1",
                        isLight
                          ? "text-white/85 hover:bg-white/10 hover:text-white"
                          : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                      )}
                    >
                      Back
                    </Button>
                  ) : null}
                  <Button
                    type="button"
                    size="lg"
                    onClick={goNext}
                    className={cn(
                      "min-h-11 flex-1 font-semibold",
                      step.href
                        ? isLight
                          ? "border border-white/35 bg-transparent text-white hover:bg-white/10"
                          : "border border-navy/20 bg-transparent text-navy hover:bg-navy/5"
                        : isLight
                          ? "bg-white text-navy hover:bg-white/90"
                          : "bg-navy text-white hover:bg-navy/90"
                    )}
                  >
                    {isLast ? "Finish" : "Next"}
                    {!isLast ? (
                      <ArrowRight className="size-4" aria-hidden />
                    ) : null}
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={closeWizard}
                  className={cn(
                    "min-h-10 text-center text-sm underline-offset-4 hover:underline",
                    textMuted
                  )}
                >
                  Skip wizard
                </button>
              </div>
            </article>

            <p className={cn("mt-5 text-center text-xs", textMuted)}>
              Prefer the full map?{" "}
              <Link
                href="/sitemap"
                onClick={() => markWizardDone()}
                className={cn(
                  "font-medium underline-offset-4 hover:underline",
                  textPrimary
                )}
              >
                Site map
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
