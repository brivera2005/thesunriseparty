"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { startTourIntro, tourSteps } from "@/lib/data/start-tour-content";
import { cn } from "@/lib/utils";
import { PageShell } from "@/components/layout/page-shell";

export function StartPage() {
  const [activeStep, setActiveStep] = useState(0);
  const step = tourSteps[activeStep];
  const isLast = activeStep === tourSteps.length - 1;

  return (
    <PageShell>

        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-14">
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {startTourIntro.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {startTourIntro.subtitle}
            </p>

            <div
              className="mt-8 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Tour steps"
            >
              {tourSteps.map((s, i) => (
                <button
                  key={s.step}
                  type="button"
                  role="tab"
                  aria-selected={i === activeStep}
                  aria-label={`Step ${s.step}: ${s.title}`}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full border text-sm font-semibold transition-all",
                    i === activeStep
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : i < activeStep
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-border bg-muted/50 text-muted-foreground hover:border-primary/30"
                  )}
                >
                  {i < activeStep ? (
                    <Check className="size-4" aria-hidden />
                  ) : (
                    s.step
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Card
            className={cn(
              "overflow-hidden border-2 bg-white",
              step.accent
            )}
          >
            <CardContent className="p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={cn(
                    "flex size-14 items-center justify-center rounded-xl border-2 bg-background/80",
                    step.accent
                  )}
                >
                  <step.icon className="size-7" aria-hidden />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Step {step.step} of {tourSteps.length}
                  </p>
                  <h2 className="text-2xl font-bold sm:text-3xl">{step.title}</h2>
                  <p className="text-sm font-medium text-primary">{step.subtitle}</p>
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              <ul className="mb-8 space-y-2 border-l-2 border-primary/30 pl-4">
                {step.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={step.href}
                  className={cn(buttonVariants(), "gap-2")}
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
                      href="/sitemap"
                      className={cn(buttonVariants({ size: "sm" }), "gap-2")}
                    >
                      Explore site map
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ) : (
                    <Button size="sm" onClick={() => setActiveStep((s) => s + 1)}>
                      Next step
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prefer to browse on your own?{" "}
            <Link href="/sitemap" className="font-medium text-primary hover:underline">
              View the full site map
            </Link>{" "}
            with counts for all {tourSteps.length} core sections and more.
          </p>
        </section>
      </PageShell>
  );
}
