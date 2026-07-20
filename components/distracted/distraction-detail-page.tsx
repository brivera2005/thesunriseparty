"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { DistractionEntry } from "@/lib/types";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Citation } from "@/components/citation";
import { formatDateUS } from "@/lib/format-date";
import { cn } from "@/lib/utils";

function severityClass(score: number) {
  if (score >= 9) return "text-severity-critical";
  if (score >= 7) return "text-severity-high";
  if (score >= 5) return "text-severity-moderate";
  return "text-severity-low";
}

const blocks: {
  key: keyof Pick<
    DistractionEntry,
    | "distraction"
    | "coveringUp"
    | "whyTheyDoIt"
    | "whyPeopleBelieveIt"
    | "howToSpotIt"
  >;
  label: string;
}[] = [
  { key: "distraction", label: "Distraction" },
  { key: "coveringUp", label: "Covering up" },
  { key: "whyTheyDoIt", label: "Why they do it" },
  { key: "whyPeopleBelieveIt", label: "Why people buy it" },
  { key: "howToSpotIt", label: "How to spot it" },
];

export function DistractionDetailPage({ entry }: { entry: DistractionEntry }) {
  return (
    <PageShell>
      <PageHero
        section="distracted"
        compact
        backHref="/distracted"
        backLabel="All distractions"
        eyebrow="Cover-up Watch"
        title={entry.title}
        description={`${formatDateUS(entry.date)} · Severity ${entry.severity}/10`}
        actions={
          <span
            className={cn(
              "inline-flex items-center rounded-md border border-border bg-white px-2.5 py-1 text-xs font-bold tabular-nums",
              severityClass(entry.severity)
            )}
          >
            {entry.severity}/10
          </span>
        }
      />

      <section className="section-y bg-muted/10">
        <div className="page-container max-w-3xl space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {entry.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-[10px]">
                {cat}
              </Badge>
            ))}
          </div>

          {blocks.map((block) => (
            <article
              key={block.key}
              className="rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5"
            >
              <h2 className="text-[11px] font-semibold tracking-[0.14em] text-navy/50 uppercase">
                {block.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/90 sm:text-[15px]">
                {entry[block.key]}
              </p>
            </article>
          ))}

          <article className="rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <h2 className="text-[11px] font-semibold tracking-[0.14em] text-navy/50 uppercase">
              Sources
            </h2>
            <ul className="mt-3 space-y-2">
              {entry.sources.map((source, i) => (
                <li key={source.id} className="text-sm">
                  <Citation source={source} index={i + 1} />
                  <span className="ml-1 text-muted-foreground">
                    {source.title} · {source.publisher}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {(entry.relatedEventIds?.length || entry.relatedRebuttalIds?.length) ? (
            <article className="rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5">
              <h2 className="text-[11px] font-semibold tracking-[0.14em] text-navy/50 uppercase">
                Cross-links
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {entry.relatedEventIds?.map((id) => (
                  <li key={id}>
                    <Link
                      href={`/tracker/${id}`}
                      className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                    >
                      Tracker {id}
                      <ExternalLink className="size-3.5" />
                    </Link>
                  </li>
                ))}
                {entry.relatedRebuttalIds?.map((id) => (
                  <li key={id}>
                    <Link
                      href={`/rebuttal/${id}`}
                      className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                    >
                      Rebuttal: {id}
                      <ExternalLink className="size-3.5" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/quiz"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    Political Standing Quiz
                    <ExternalLink className="size-3.5" />
                  </Link>
                </li>
              </ul>
            </article>
          ) : null}

          <Link
            href="/distracted"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5"
            )}
          >
            <ArrowLeft className="size-3.5" />
            Back to Distraction Watch
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
