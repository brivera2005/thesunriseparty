"use client";

import Link from "next/link";
import { ArrowLeft, MessageSquareQuote } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { Citation } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  getAllHistoricalRebuttals,
  countHistoricalRebuttals,
  historyEras,
  historyDetailPath,
} from "@/lib/data/hidden-history";
import type { HistoryEra } from "@/lib/types";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const allRebuttals = getAllHistoricalRebuttals();

export function HistoryRebuttalsPage() {
  const [eraFilter, setEraFilter] = useState<HistoryEra | "All">("All");

  const filtered = useMemo(() => {
    if (eraFilter === "All") return allRebuttals;
    return allRebuttals.filter((item) => item.era === eraFilter);
  }, [eraFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-sunrise/5 to-background">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/history"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Hidden History
            </Link>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-sunrise uppercase">
              <MessageSquareQuote className="size-4" />
              Historical Rebuttals
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What They Said Then — What You Say Now
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Plain-language counters to propaganda from every era — written for
              the least aware reader. Every rebuttal sourced.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {countHistoricalRebuttals()} rebuttals across {historyEras.length} eras
            </p>
          </div>
        </section>

        <section className="border-b border-border py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setEraFilter("All")}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  eraFilter === "All"
                    ? "border-sunrise bg-sunrise text-sunrise-foreground"
                    : "border-border"
                )}
              >
                All eras
              </button>
              {historyEras.map((era) => (
                <button
                  key={era}
                  type="button"
                  onClick={() => setEraFilter(era)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium",
                    eraFilter === era
                      ? "border-sunrise bg-sunrise text-sunrise-foreground"
                      : "border-border"
                  )}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-6xl space-y-4 px-4 sm:px-6">
            {filtered.map((item, i) => (
              <article
                key={`${item.entryId}-${item.index}`}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{item.era}</Badge>
                  <Badge variant="outline">{item.date}</Badge>
                  <Link
                    href={historyDetailPath(item.entryId)}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    {item.entryTitle} →
                  </Link>
                </div>
                <p className="text-xs font-medium text-muted-foreground">They said:</p>
                <p className="mt-1 text-sm italic">&ldquo;{item.rebuttal.theySaid}&rdquo;</p>
                <p className="mt-3 text-xs font-medium text-primary">You say:</p>
                <p className="mt-1 text-sm leading-relaxed">{item.rebuttal.youSay}</p>
                {item.rebuttal.stab && (
                  <p className="mt-2 text-sm font-semibold text-sunrise">
                    {item.rebuttal.stab}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.rebuttal.sources.map((src, j) => (
                    <Citation key={src.id} source={src} index={j + 1} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-muted/20 py-10">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="text-sm text-muted-foreground">
              Modern versions of these claims? See the{" "}
              <Link href="/rebuttal" className="font-medium text-primary hover:underline">
                Rebuttal Desk
              </Link>{" "}
              for today&apos;s talking points.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
