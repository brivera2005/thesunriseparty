"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Link2 } from "lucide-react";
import type { DistractionEntry } from "@/lib/types";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { CitationList } from "@/components/citation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDateUS } from "@/lib/format-date";
import { cn } from "@/lib/utils";

function severityClass(score: number) {
  if (score >= 9) return "text-severity-critical";
  if (score >= 7) return "text-severity-high";
  if (score >= 5) return "text-severity-moderate";
  return "text-severity-low";
}

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
        <div className="page-container max-w-xl space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {entry.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-[10px]">
                {cat}
              </Badge>
            ))}
          </div>

          <article className="rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <dl className="space-y-4 text-sm leading-snug">
              <div>
                <dt className="text-[10px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
                  Distraction
                </dt>
                <dd className="mt-1 text-navy/90">{entry.distraction}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold tracking-[0.14em] text-[#e16323] uppercase">
                  Covering up
                </dt>
                <dd className="mt-1 text-navy/90">{entry.coveringUp}</dd>
              </div>
            </dl>
          </article>

          <article className="rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5">
            <h2 className="text-[10px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
              Why
            </h2>
            <ul className="mt-3 space-y-3 text-sm leading-snug text-navy/90">
              <li>
                <span className="font-semibold text-navy">Motive. </span>
                {entry.whyTheyDoIt}
              </li>
              <li>
                <span className="font-semibold text-navy">Why it sticks. </span>
                {entry.whyPeopleBelieveIt}
              </li>
              <li>
                <span className="font-semibold text-navy">Tell. </span>
                {entry.howToSpotIt}
              </li>
            </ul>
          </article>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5"
              >
                <Link2 className="size-3.5" />
                Citations
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-left text-base">
                  Citations
                </DialogTitle>
                <DialogDescription className="text-left text-sm">
                  {entry.title}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 text-sm">
                <CitationList sources={entry.sources} />
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  {entry.sources.map((s, i) => (
                    <li key={s.id}>
                      [{i + 1}] {s.title}
                      {s.publisher ? ` · ${s.publisher}` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>

          {(entry.relatedEventIds?.length || entry.relatedRebuttalIds?.length) ? (
            <article className="rounded-xl border border-black/[0.08] bg-white p-4 sm:p-5">
              <h2 className="text-[10px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
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
