"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SunrisePolicyIdea } from "@/lib/data/sunrise-policy-ideas";
import { cn } from "@/lib/utils";

export function PolicyIdeaCard({
  idea,
  className,
}: {
  idea: SunrisePolicyIdea;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5",
        className
      )}
    >
      <p className="text-[10px] font-semibold tracking-[0.16em] text-navy/50 uppercase">
        Project Sunrise idea
      </p>
      <h4 className="mt-1 text-base font-bold leading-snug text-navy sm:text-lg">
        {idea.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-navy/85">{idea.whatItIs}</p>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-[#e16323]">Pros</dt>
          <dd className="mt-1 text-navy/80">
            <ul className="list-disc space-y-1 pl-4">
              {idea.pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Cons (honest)</dt>
          <dd className="mt-1 text-navy/80">
            <ul className="list-disc space-y-1 pl-4">
              {idea.cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Why it would be incredible</dt>
          <dd className="mt-1 leading-relaxed text-navy/80">{idea.whyIncredible}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy">Where it already works</dt>
          <dd className="mt-1 leading-relaxed text-muted-foreground">
            {idea.alreadyWorksWhere}
          </dd>
        </div>
      </dl>

      {idea.relatedBlueprintCategory ? (
        <p className="mt-4 text-xs text-muted-foreground">
          Related Blueprint pillar:{" "}
          <Link
            href="/blueprint"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            {idea.relatedBlueprintCategory}
          </Link>
        </p>
      ) : null}
    </article>
  );
}

export function PolicyIdeasSection({
  ideas,
  title = "Project Sunrise policy ideas for you",
  blurb = "Novel or proven-abroad fixes matched to topics you answered. Fast quiz, deeper ideas here.",
}: {
  ideas: SunrisePolicyIdea[];
  title?: string;
  blurb?: string;
}) {
  if (!ideas.length) return null;

  return (
    <section className="rounded-2xl border border-black/[0.08] bg-white p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">{blurb}</p>
        </div>
        <Link
          href="/blueprint#sunrise-ideas"
          className="inline-flex items-center gap-1 text-xs font-semibold text-navy/70 hover:text-navy"
        >
          All ideas
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      <ul className="mt-5 space-y-4">
        {ideas.map((idea) => (
          <li key={idea.id}>
            <PolicyIdeaCard idea={idea} />
          </li>
        ))}
      </ul>
    </section>
  );
}
