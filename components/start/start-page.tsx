"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { startTourIntro, tourSteps } from "@/lib/data/start-tour-content";
import { getSectionTheme } from "@/lib/section-theme";
import { cn } from "@/lib/utils";
import { PageShell } from "@/components/layout/page-shell";

export function StartPage() {
  const [activeStep, setActiveStep] = useState(0);
  const step = tourSteps[activeStep];
  const theme = getSectionTheme(step.section);
  const isLast = activeStep === tourSteps.length - 1;

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-14">
          <FadeIn>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              {startTourIntro.skipLabel}
            </Link>
            <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-sunrise uppercase">
              Guided Tour
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {startTourIntro.title}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg">
              {startTourIntro.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
              role="tablist"
              aria-label="Tour progress"
            >
              {tourSteps.map((s, i) => {
                const t = getSectionTheme(s.section);
                return (
                  <button
                    key={s.step}
                    type="button"
                    role="tab"
                    aria-selected={i === activeStep}
                    aria-label={s.title}
                    onClick={() => setActiveStep(i)}
                    className="transition-all duration-300"
                    style={
                      i === activeStep
                        ? {
                            height: 10,
                            width: 32,
                            borderRadius: 999,
                            backgroundColor: t.hex,
                          }
                        : {
                            height: 10,
                            width: 10,
                            borderRadius: 999,
                            backgroundColor:
                              i < activeStep ? `${t.hex}80` : undefined,
                          }
                    }
                  />
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <FadeIn key={step.step}>
          <Card
            className="overflow-hidden border-2 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            style={{ borderColor: `${theme.hex}59` }}
          >
            <CardContent className="p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="flex size-14 items-center justify-center rounded-2xl border-2"
                  style={{
                    backgroundColor: theme.soft,
                    borderColor: `${theme.hex}59`,
                    color: theme.hex,
                  }}
                >
                  <step.icon className="size-7" aria-hidden />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                    {step.title}
                  </h2>
                </div>
              </div>

              <p className="mb-3 text-lg font-medium leading-snug text-navy sm:text-xl">
                {step.whatItIs}
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {step.whatYouDo}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={step.href}
                  className={cn(buttonVariants({ size: "lg" }), "gap-2 text-white")}
                  style={{ backgroundColor: theme.hex }}
                >
                  {step.cta}
                  <ArrowRight className="size-4" />
                </Link>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((s) => s - 1)}
                  >
                    Previous
                  </Button>
                  {isLast ? (
                    <Link
                      href="/"
                      className={cn(buttonVariants({ size: "sm" }), "gap-2")}
                    >
                      Done
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => setActiveStep((s) => s + 1)}
                      style={{ backgroundColor: theme.hex }}
                      className="text-white"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prefer to browse?{" "}
          <Link
            href="/sitemap"
            className="font-medium text-primary hover:underline"
          >
            Full site map
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
