"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { EyeOff, Share2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { DistractionCard } from "@/components/distracted/distraction-card";
import { FilterChips } from "@/components/ui/filter-chips";
import {
  CollapsibleFilters,
  FilterPanelSection,
} from "@/components/ui/collapsible-filters";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroActions, heroActionClass } from "@/components/ui/hero-actions";
import { cn } from "@/lib/utils";
import {
  distractionCategories,
  filterDistractions,
  getDistractionStats,
  type DistractionCategoryFilter,
} from "@/lib/data/distractions";

const severityOptions = [
  { value: "1", label: "Any" },
  { value: "5", label: "5+" },
  { value: "7", label: "7+" },
  { value: "9", label: "9+" },
];

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = "https://thesunriseparty.pages.dev/distracted";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Distraction Watch | Project Sunrise",
          text: "Shiny object vs what it buries - MAGA distraction patterns with receipts.",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className={heroActionClass}
    >
      <Share2 className="size-3" />
      {copied ? "Copied" : "Share"}
    </Button>
  );
}

export function DistractedPage() {
  const [category, setCategory] = useState<DistractionCategoryFilter>("All");
  const [minSeverity, setMinSeverity] = useState("1");
  const [query, setQuery] = useState("");
  const stats = getDistractionStats();

  const filtered = useMemo(
    () =>
      filterDistractions({
        category,
        minSeverity: Number(minSeverity) || 1,
        query,
      }),
    [category, minSeverity, query]
  );

  const chipOptions = distractionCategories.map((c) => ({
    value: c,
    label: c === "All" ? `All (${stats.total})` : c,
  }));

  const activeFilterCount =
    (category !== "All" ? 1 : 0) +
    (minSeverity !== "1" ? 1 : 0) +
    (query.trim() ? 1 : 0);

  const clearFilters = () => {
    setCategory("All");
    setMinSeverity("1");
    setQuery("");
  };

  return (
    <PageShell>
      <PageHero
        section="distracted"
        eyebrow="Cover-up Watch"
        title="Distraction Watch"
        description="Shiny object in, accountability out. Spot the MAGA flashbang, then look at what it buries."
        tip="Filter by category or severity, search a keyword, then open a card for the full tell."
        actions={
          <HeroActions>
            <span
              className={cn(
                heroActionClass,
                "rounded-md border border-border bg-white text-muted-foreground"
              )}
            >
              <EyeOff className="size-3 text-primary" />
              {stats.total} · avg {stats.avgSeverity}
            </span>
            <ShareButton />
          </HeroActions>
        }
      />

      <section className="border-b border-border bg-white">
        <div className="page-container py-4 sm:py-5">
          <CollapsibleFilters
            sticky
            activeCount={activeFilterCount}
            label="Filters"
            summary={`${filtered.length} distraction${filtered.length === 1 ? "" : "s"}`}
            onClear={clearFilters}
            leading={
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search distractions…"
                className="h-9 max-w-sm"
                aria-label="Search distractions"
              />
            }
          >
            <FilterPanelSection label="Category">
              <FilterChips
                options={chipOptions}
                value={category}
                onChange={(v) => setCategory(v as DistractionCategoryFilter)}
              />
            </FilterPanelSection>
            <FilterPanelSection label="Minimum severity">
              <FilterChips
                options={severityOptions}
                value={minSeverity}
                onChange={setMinSeverity}
              />
            </FilterPanelSection>
          </CollapsibleFilters>
        </div>
      </section>

      <section className="section-y bg-muted/10" aria-label="Distraction cards">
        <div className="page-container">
          <div className="mb-4 flex flex-wrap gap-3 text-xs font-medium text-muted-foreground">
            <Link href="/tracker" className="hover:text-navy">
              Tracker
            </Link>
            <span aria-hidden>·</span>
            <Link href="/rebuttal" className="hover:text-navy">
              Rebuttal
            </Link>
            <span aria-hidden>·</span>
            <Link href="/quiz" className="hover:text-navy">
              Quiz
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((entry, i) => (
              <DistractionCard key={entry.id} entry={entry} index={i} />
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No distractions match these filters.
            </p>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
