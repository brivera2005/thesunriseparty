"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb, MapPin, Users } from "lucide-react";
import type { ImpactScenario } from "@/lib/types";
import { scenarioDetailPath } from "@/lib/data/scenarios";
import { Badge } from "@/components/ui/badge";
import { TipText } from "@/components/ui/term-tip";
import { cn } from "@/lib/utils";

function severityClass(score: number) {
  if (score >= 9) return "text-severity-critical";
  if (score >= 7) return "text-severity-high";
  if (score >= 5) return "text-severity-moderate";
  return "text-severity-low";
}

type ScenarioCardProps = {
  scenario: ImpactScenario;
  index?: number;
};

export function ScenarioCard({ scenario, index = 0 }: ScenarioCardProps) {
  return (
    <Link
      href={scenarioDetailPath(scenario.id)}
      className={cn(
        "group surface-card-interactive flex h-full flex-col p-4 sm:p-5",
        "animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "text-xs font-bold tabular-nums tracking-wide",
            severityClass(scenario.severity)
          )}
        >
          Severity {scenario.severity}/10
        </span>
        <span className="text-[11px] text-muted-foreground">
          {scenario.whyNotZ.steps.length}-step chain
        </span>
      </div>

      <h3 className="text-base font-semibold leading-snug text-navy group-hover:text-primary sm:text-[1.05rem]">
        <TipText>{scenario.title}</TipText>
      </h3>

      <div className="mt-3 flex flex-col gap-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-start gap-1.5">
          <Users className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
          <span>{scenario.persona.who}</span>
        </span>
        {scenario.persona.location ? (
          <span className="inline-flex items-start gap-1.5">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
            <span>{scenario.persona.location}</span>
          </span>
        ) : null}
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        <TipText>{scenario.persona.situation}</TipText>
      </p>

      <div className="mt-4 rounded-xl border border-primary/25 bg-primary/5 p-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
          <Lightbulb className="size-3.5" aria-hidden />
          Best solution
        </p>
        <p className="mt-1.5 line-clamp-3 text-sm leading-snug text-navy">
          <TipText>{scenario.bestSolution}</TipText>
        </p>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          <span className="font-medium text-navy/70">Why it works: </span>
          <TipText>{scenario.whyItWorks}</TipText>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {scenario.topics.slice(0, 3).map((topic) => (
          <Badge key={topic} variant="secondary" className="text-[10px] font-medium">
            {topic}
          </Badge>
        ))}
      </div>

      <span className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary">
        Open causal chain
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
