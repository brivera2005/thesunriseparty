"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Filter, MessageSquareQuote, Search } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { CitationList } from "@/components/citation";
import {
  hiddenHistoryEntries,
  historyCategories,
  historyEras,
  getHistoryStats,
} from "@/lib/data/hidden-history";
import type { HistoryCategory, HistoryEra } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HistoryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<HistoryCategory | "All">("All");
  const [activeEra, setActiveEra] = useState<HistoryEra | "All">("All");
  const stats = getHistoryStats();

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return hiddenHistoryEntries.filter((entry) => {
      const matchesCategory =
        activeCategory === "All" || entry.categories.includes(activeCategory);
      const matchesEra = activeEra === "All" || entry.era === activeEra;
      const matchesSearch =
        !q ||
        entry.title.toLowerCase().includes(q) ||
        entry.textbookVersion.toLowerCase().includes(q) ||
        entry.actualHistory.toLowerCase().includes(q) ||
        entry.categories.some((c) => c.toLowerCase().includes(q));
      return matchesCategory && matchesEra && matchesSearch;
    });
  }, [search, activeCategory, activeEra]);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Sunrise
            </Link>
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                Suppressed History
              </p>
              <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Hidden History
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                What textbooks leave out vs. what the archives document.
                Dual timeline with historical rebuttals. Every entry sourced.
                Every link archived.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stats.entries} entries · {stats.rebuttals} historical rebuttals ·{" "}
                {stats.eras} eras
              </p>
            </div>
          </div>
        </section>

        <section className="sticky top-14 z-30 border-b border-border bg-white/95 py-3 backdrop-blur-lg sm:top-16 md:top-[4.75rem]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search hidden history..."
                  className="h-11 pl-9 sm:h-9"
                  aria-label="Search hidden history"
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Filter className="size-3.5" />
                <span>{filtered.length} results</span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
              <Button
                variant={activeCategory === "All" ? "default" : "outline"}
                size="sm"
                className="h-9 min-h-9 text-xs"
                onClick={() => setActiveCategory("All")}
              >
                All topics
              </Button>
              {historyCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  className="h-9 min-h-9 text-xs"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <select
                value={activeEra}
                onChange={(e) => setActiveEra(e.target.value as HistoryEra | "All")}
                className="h-8 rounded-md border border-border bg-white px-2.5 text-xs font-medium"
                aria-label="Filter by era"
              >
                <option value="All">All eras</option>
                {historyEras.map((era) => (
                  <option key={era} value={era}>
                    {era}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-6xl space-y-4 px-4 sm:space-y-6 sm:px-6">
            {filtered.map((entry) => (
              <Card
                key={entry.id}
                id={entry.id}
                className="scroll-mt-36 border-border bg-white shadow-sm"
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-1.5 sm:mb-4 sm:gap-2">
                    <Badge variant="secondary">{entry.era}</Badge>
                    <Badge variant="outline" className="text-[10px]">
                      {entry.date}
                    </Badge>
                    {entry.categories.map((cat) => (
                      <Badge key={cat} variant="outline" className="text-[10px]">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold tracking-tight sm:text-2xl">
                    {entry.title}
                  </h2>

                  <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border border-amber-200/60 bg-amber-50/50 p-3 sm:p-4">
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                        Textbook Version
                      </h3>
                      <p className="text-sm leading-relaxed text-amber-950/80">
                        {entry.textbookVersion}
                      </p>
                    </div>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 sm:p-4">
                      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        <BookOpen className="size-3.5" />
                        What Actually Happened
                      </h3>
                      <p className="text-sm leading-relaxed">{entry.actualHistory}</p>
                    </div>
                  </div>

                  {entry.historicalRebuttals.length > 0 && (
                    <div className="mt-4 border-t border-border pt-4 sm:mt-6 sm:pt-6">
                      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sunrise">
                        <MessageSquareQuote className="size-3.5" />
                        Historical Rebuttals
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {entry.historicalRebuttals.map((reb, i) => (
                          <div
                            key={i}
                            className="rounded-lg border border-border bg-muted/20 p-3 sm:p-4"
                          >
                            <p className="text-xs font-semibold text-destructive/80">
                              They say: &ldquo;{reb.theySaid}&rdquo;
                            </p>
                            <p className="mt-2 text-sm font-medium leading-relaxed">
                              You say: {reb.youSay}
                            </p>
                            <div className="mt-2">
                              <CitationList sources={reb.sources} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 border-t border-border pt-3 sm:mt-6 sm:pt-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Sources
                    </p>
                    <CitationList sources={entry.sources} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
