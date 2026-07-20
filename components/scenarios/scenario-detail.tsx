"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Lightbulb,
  Link2,
  MapPin,
  Scale,
  Users,
} from "lucide-react";
import type { ImpactScenario } from "@/lib/types";
import {
  actorColorClass,
  actorDotClass,
} from "@/lib/data/scenarios";
import { policyFixPath } from "@/lib/data/policies";
import { Citation } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TipText } from "@/components/ui/term-tip";
import { cn } from "@/lib/utils";

type ScenarioDetailProps = {
  scenario: ImpactScenario;
};

function severityClass(score: number) {
  if (score >= 9) return "bg-destructive/10 text-destructive border-destructive/30";
  if (score >= 7) return "bg-severity-high/10 text-severity-high border-severity-high/30";
  return "bg-severity-moderate/10 text-severity-moderate border-severity-moderate/30";
}

export function ScenarioDetail({ scenario }: ScenarioDetailProps) {
  return (
    <article>
      <section className="border-b border-border bg-white">
        <div className="page-container py-8 sm:py-10">
          <Link
            href="/scenarios"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "mb-4 h-9 gap-2 text-muted-foreground"
            )}
          >
            <ArrowLeft className="size-3.5" />
            All scenarios
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-bold tabular-nums",
                severityClass(scenario.severity)
              )}
            >
              Severity {scenario.severity}/10
            </span>
            {scenario.topics.map((topic) => (
              <Badge key={topic} variant="secondary" className="text-[11px]">
                {topic}
              </Badge>
            ))}
          </div>

          <h1 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            <TipText>{scenario.title}</TipText>
          </h1>

          <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
            <span className="inline-flex items-start gap-2">
              <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              {scenario.persona.who}
            </span>
            {scenario.persona.location ? (
              <span className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {scenario.persona.location}
              </span>
            ) : null}
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            <TipText>{scenario.persona.situation}</TipText>
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20" aria-label="What they get versus what they should get">
        <div className="page-container grid gap-4 py-8 sm:grid-cols-2 sm:py-10">
          <div className="rounded-2xl border border-destructive/25 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.18em] text-destructive uppercase">
              What they get now
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy sm:text-[0.95rem]">
              <TipText>{scenario.getsY}</TipText>
            </p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              What they should get
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy sm:text-[0.95rem]">
              <TipText>{scenario.shouldGetZ}</TipText>
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-border bg-primary/5"
        aria-label="Best solution and why it works"
      >
        <div className="page-container py-8 sm:py-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-white p-5 shadow-sm sm:p-7">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              <Lightbulb className="size-3.5" aria-hidden />
              Best solution
            </p>
            <p className="mt-3 text-base font-semibold leading-snug text-navy sm:text-lg">
              <TipText>{scenario.bestSolution}</TipText>
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">
                Why it works
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                <TipText>{scenario.whyItWorks}</TipText>
              </p>
            </div>
            {scenario.linkedFixId ? (
              <Link
                href={policyFixPath(scenario.linkedFixId)}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 text-sm font-semibold text-primary hover:bg-primary/10"
              >
                <BookOpen className="size-4" />
                Blueprint {scenario.linkedFixId}
                <ArrowRight className="size-3.5" />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white" aria-label="Causal chain">
        <div className="page-container py-8 sm:py-12">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-navy uppercase">
              Why not the fair outcome?
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Chain of responsibility
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow the steps from power to lived harm. Each node names an actor,
              what they did, and what it caused - with receipts.
            </p>
          </div>

          <ol className="relative mx-auto max-w-3xl space-y-0">
            <div
              className="absolute top-3 bottom-3 left-[15px] w-px bg-gradient-to-b from-destructive/50 via-navy/20 to-primary/40 sm:left-[19px]"
              aria-hidden
            />
            {scenario.whyNotZ.steps.map((step, i) => (
              <li key={`${step.actor}-${i}`} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5">
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <span
                    className={cn(
                      "flex size-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm sm:size-10 sm:text-sm",
                      actorDotClass(step.actor)
                    )}
                  >
                    {i + 1}
                  </span>
                </div>

                <div className="min-w-0 flex-1 rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold",
                        actorColorClass(step.actor)
                      )}
                    >
                      {step.actor}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Step {i + 1} of {scenario.whyNotZ.steps.length}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-navy sm:text-[0.95rem]">
                    <TipText>{step.action}</TipText>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-navy/80">Effect: </span>
                    <TipText>{step.effect}</TipText>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.linkedEventId ? (
                      <Link
                        href={`/tracker/${step.linkedEventId}`}
                        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-destructive/30 bg-destructive/5 px-2.5 text-xs font-medium text-destructive hover:bg-destructive/10"
                      >
                        <Link2 className="size-3.5" />
                        Tracker {step.linkedEventId.replace(/^EVT-/, "")}
                      </Link>
                    ) : null}
                    {step.linkedFixId ? (
                      <Link
                        href={`/blueprint/${step.linkedFixId}`}
                        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-2.5 text-xs font-medium text-primary hover:bg-primary/10"
                      >
                        <BookOpen className="size-3.5" />
                        Blueprint {step.linkedFixId}
                      </Link>
                    ) : null}
                    {step.linkedBillId ? (
                      <Link
                        href={`/legislation/${step.linkedBillId}`}
                        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-navy/20 bg-navy/5 px-2.5 text-xs font-medium text-navy hover:bg-navy/10"
                      >
                        <Scale className="size-3.5" />
                        Bill {step.linkedBillId}
                      </Link>
                    ) : null}
                  </div>

                  {step.sources.length > 0 ? (
                    <div className="mt-4 border-t border-border pt-3">
                      <p className="mb-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                        Sources
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {step.sources.map((source, si) => (
                          <Citation key={source.id} source={source} index={si + 1} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-accent/40">
        <div className="page-container py-8 sm:py-10">
          <p className="text-xs font-semibold tracking-[0.22em] text-navy uppercase">
            Bottom line
          </p>
          <p className="mt-3 max-w-3xl text-lg font-semibold leading-snug text-navy sm:text-xl">
            {scenario.bottomLine}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/scenarios"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 gap-2")}
            >
              <ArrowLeft className="size-3.5" />
              More scenarios
            </Link>
            <Link
              href="/rebuttal"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "h-10 gap-2")}
            >
              Arm the conversation
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/blueprint"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-10 gap-2")}
            >
              <ExternalLink className="size-3.5" />
              See the Blueprint
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
