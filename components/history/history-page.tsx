"use client";

import { useMemo, useState } from "react";
import { BookOpen, Filter, MessageSquareQuote, Search } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
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
import { FilterChips } from "@/components/ui/filter-chips";

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

  const categoryOptions = [
    { value: "All" as const, label: "All topics", tip: "Show every Hidden History entry." },
    ...historyCategories.map((cat) => ({
      value: cat,
      label: cat,
      tip: `Filter dual-timeline entries tagged ${cat}.`,
    })),
  ];

  return (
    <PageShell>
      <PageHero
        tone="amber"
        eyebrow="Suppressed History"
        title="Hidden History"
        description="What textbooks leave out vs. what the archives document. Dual timeline with historical rebuttals. Every entry sourced."
        tip={`${stats.entries} entries, ${stats.rebuttals} historical rebuttals, ${stats.eras} eras. Same filters and card anatomy on every screen size.`}
      />

      <section className="sticky top-14 z-30 border-b border-border bg-white/95 py-3 backdrop-blur-lg sm:top-16">
        <div className="page-container">
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
          <FilterChips
            className="mt-2.5"
            options={categoryOptions}
            value={activeCategory}
            onChange={setActiveCategory}
            label="Topic"
            labelTip="Same topic chips on mobile and desktop. Tap a chip or open the tip for a short description."
          />
          <div className="mt-2">
            <select
              value={activeEra}
              onChange={(e) => setActiveEra(e.target.value as HistoryEra | "All")}
              className="h-9 rounded-md border border-border bg-white px-2.5 text-xs font-medium"
              aria-label="Filter by era"
              title="Filter dual-timeline entries by historical era"
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

      <section className="section-y">
        <div className="page-container space-y-3 sm:space-y-4">
          {filtered.map((entry) => (
            <Card
              key={entry.id}
              id={entry.id}
              className="scroll-mt-36 border-border"
            >
              <CardContent className="p-4 sm:p-5">
                <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
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
                <h2 className="text-lg font-bold tracking-tight sm:text-xl">
                  {entry.title}
                </h2>

                <div className="mt-3 grid gap-3 lg:grid-cols-2">
                  <div className="rounded-lg border border-amber-200/60 bg-amber-50/50 p-3">
                    <h3 className="mb-1.5 text-xs font-semibold tracking-wider text-amber-800 uppercase">
                      Textbook Version
                    </h3>
                    <p className="text-sm leading-relaxed text-amber-950/80">
                      {entry.textbookVersion}
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <h3 className="mb-1.5 flex items-center gap-2 text-xs font-semibold tracking-wider text-primary uppercase">
                      <BookOpen className="size-3.5" />
                      What Actually Happened
                    </h3>
                    <p className="text-sm leading-relaxed">{entry.actualHistory}</p>
                  </div>
                </div>

                {entry.historicalRebuttals.length > 0 && (
                  <div className="mt-4 border-t border-border pt-4">
                    <h3 className="mb-2.5 flex items-center gap-2 text-xs font-semibold tracking-wider text-sunrise uppercase">
                      <MessageSquareQuote className="size-3.5" />
                      Historical Rebuttals
                    </h3>
                    <div className="space-y-2.5">
                      {entry.historicalRebuttals.map((reb, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-border bg-muted/20 p-3"
                        >
                          <p className="text-xs font-semibold text-destructive/80">
                            They say: &ldquo;{reb.theySaid}&rdquo;
                          </p>
                          <p className="mt-1.5 text-sm font-medium leading-relaxed">
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

                <div className="mt-4 border-t border-border pt-3">
                  <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Sources
                  </p>
                  <CitationList sources={entry.sources} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
