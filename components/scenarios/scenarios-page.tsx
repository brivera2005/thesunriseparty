"use client";

import { useMemo, useState } from "react";
import { GitBranch, Share2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { ScenarioCard } from "@/components/scenarios/scenario-card";
import { FilterChips } from "@/components/ui/filter-chips";
import {
  CollapsibleFilters,
  FilterPanelSection,
} from "@/components/ui/collapsible-filters";
import { Button } from "@/components/ui/button";
import {
  getScenarioStats,
  getScenariosByTopic,
  scenarioTopics,
  type ScenarioTopicFilter,
} from "@/lib/data/scenarios";

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = "https://thesunriseparty.pages.dev/scenarios";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Impact Scenarios | Project Sunrise",
          text: "Complex causal chains from policy choices to lived outcomes - with receipts.",
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
    <Button variant="outline" size="sm" onClick={handleShare} className="h-9 gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share"}
    </Button>
  );
}

export function ScenariosPage() {
  const [topic, setTopic] = useState<ScenarioTopicFilter>("All");
  const stats = getScenarioStats();
  const filtered = useMemo(() => getScenariosByTopic(topic), [topic]);

  const chipOptions = scenarioTopics.map((t) => ({
    value: t,
    label: t === "All" ? `All (${stats.total})` : t,
  }));

  const activeFilterCount = topic !== "All" ? 1 : 0;

  const clearFilters = () => setTopic("All");

  return (
    <PageShell>
      <PageHero
        section="scenarios"
        eyebrow="Lived Outcomes"
        title="Impact Scenarios"
        description="Family gets Y. Should get Z. Trace who blocked the fix."
        tip="Filter by topic, then open a card for the full causal chain."
        actions={
          <>
            <span className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-xs text-muted-foreground">
              <GitBranch className="size-3.5 text-primary" />
              {stats.total} scenarios · avg severity {stats.avgSeverity}
            </span>
            <ShareButton />
          </>
        }
      />

      <section className="border-b border-border bg-white">
        <div className="page-container py-4 sm:py-5">
          <CollapsibleFilters
            activeCount={activeFilterCount}
            label="Filters"
            summary={`${filtered.length} scenario${filtered.length === 1 ? "" : "s"}${topic !== "All" ? ` in ${topic}` : ""}`}
            onClear={clearFilters}
          >
            <FilterPanelSection label="Topic">
              <FilterChips
                labelTip="Each scenario can appear under multiple topics."
                options={chipOptions}
                value={topic}
                onChange={setTopic}
              />
            </FilterPanelSection>
          </CollapsibleFilters>
        </div>
      </section>

      <section className="section-y bg-muted/10" aria-label="Scenario cards">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((scenario, i) => (
              <ScenarioCard key={scenario.id} scenario={scenario} index={i} />
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No scenarios in this topic yet. Try All.
            </p>
          ) : null}
        </div>
      </section>
    </PageShell>
  );
}
