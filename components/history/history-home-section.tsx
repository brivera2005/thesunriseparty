"use client";

import Link from "next/link";
import { ArrowRight, Columns2, History } from "lucide-react";
import {
  getFeaturedHistoryEntry,
  getHistoryStats,
  historyDetailPath,
} from "@/lib/data/hidden-history";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = getHistoryStats();
const featured = getFeaturedHistoryEntry();

export function HistoryHomeSection() {
  return (
    <section
      id="hidden-history"
      className="scroll-mt-16 border-t border-border bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="size-2 rounded-full bg-amber-500 shadow-[0_0_8px_oklch(0.75_0.15_75/40%)]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
                Hidden History
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Textbooks Teach vs. What Happened
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Interactive dual timeline - {stats.entries} sourced events,{" "}
              {stats.rebuttals} historical rebuttals, scrub and compare every era.
            </p>
          </div>
          <Link
            href="/history"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
          >
            <History className="size-4" />
            Explore timeline
          </Link>
        </div>

        <Card className="overflow-hidden border-amber-200/60 bg-white">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border bg-sky-50/50 p-6 md:border-r md:border-b-0">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-700 uppercase">
                  <Columns2 className="size-3.5" />
                  What Textbooks Teach
                </p>
                <p className="text-sm leading-relaxed">{featured.textbookVersion}</p>
              </div>
              <div className="bg-amber-50/40 p-6">
                <p className="mb-2 text-xs font-semibold tracking-wide text-amber-800 uppercase">
                  What Actually Happened
                </p>
                <p className="text-sm leading-relaxed">{featured.actualHistory}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/30 px-6 py-4">
              <div>
                <p className="text-sm font-semibold">{featured.title}</p>
                <p className="text-xs text-muted-foreground">
                  {featured.date} · {featured.era}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {featured.categories.map((cat) => (
                  <Badge key={cat} variant="outline" className="text-[10px]">
                    {cat}
                  </Badge>
                ))}
                <Link
                  href={historyDetailPath(featured.id)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Read full entry
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
