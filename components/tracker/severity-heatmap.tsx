"use client";

import { useMemo } from "react";
import { Grid3x3 } from "lucide-react";
import type { TimelineEvent, TimelineCategory } from "@/lib/types";
import { timelineCategories } from "@/lib/data/timeline-events";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SECTORS = timelineCategories.filter(
  (c) => c !== "All"
) as TimelineCategory[];

function severityColor(score: number): string {
  if (score >= 8.5) return "oklch(0.55 0.22 25)";
  if (score >= 7.5) return "oklch(0.62 0.20 35)";
  if (score >= 6.5) return "oklch(0.68 0.18 55)";
  if (score >= 5.5) return "oklch(0.72 0.15 85)";
  return "oklch(0.62 0.16 145)";
}

export function computeSectorSeverity(events: TimelineEvent[]) {
  const map = new Map<TimelineCategory, { sum: number; count: number }>();
  for (const sector of SECTORS) {
    map.set(sector, { sum: 0, count: 0 });
  }
  for (const event of events) {
    for (const sector of event.Impacted_Sectors) {
      const entry = map.get(sector);
      if (entry) {
        entry.sum += event.Severity_Score;
        entry.count += 1;
      }
    }
  }
  return SECTORS.map((sector) => {
    const { sum, count } = map.get(sector)!;
    return {
      sector,
      avgSeverity: count > 0 ? Math.round((sum / count) * 10) / 10 : 0,
      eventCount: count,
    };
  }).sort((a, b) => b.avgSeverity - a.avgSeverity);
}

export function SeverityHeatmap({ events }: { events: TimelineEvent[] }) {
  const data = useMemo(() => computeSectorSeverity(events), [events]);
  const maxAvg = Math.max(...data.map((d) => d.avgSeverity), 1);

  return (
    <Card className="mb-8 border-border bg-card/80">
      <CardContent className="p-6">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
          <Grid3x3 className="size-4 text-destructive" />
          Sector Severity Heatmap
        </h3>
        <p className="mb-4 text-xs text-muted-foreground">
          Average severity by impacted sector — color intensity reflects aggregate
          harm across tracked actions.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {data.map(({ sector, avgSeverity, eventCount }) => {
            const intensity = avgSeverity > 0 ? avgSeverity / maxAvg : 0;
            const color = severityColor(avgSeverity || 5);
            return (
              <div
                key={sector}
                className={cn(
                  "relative overflow-hidden rounded-lg border border-border p-4 transition-transform hover:scale-[1.02]",
                  eventCount === 0 && "opacity-40"
                )}
                title={
                  eventCount > 0
                    ? `${sector}: avg ${avgSeverity}/10 (${eventCount} events)`
                    : `${sector}: no events`
                }
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundColor: color,
                    opacity: 0.12 + intensity * 0.55,
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <p className="text-xs font-semibold leading-tight">{sector}</p>
                  <p
                    className="mt-1 text-2xl font-bold tabular-nums"
                    style={{ color: eventCount > 0 ? color : undefined }}
                  >
                    {eventCount > 0 ? avgSeverity : "—"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {eventCount} event{eventCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
          <span className="font-medium uppercase tracking-wider">Scale</span>
          {[4, 6, 8, 10].map((n) => (
            <span key={n} className="flex items-center gap-1">
              <span
                className="size-2.5 rounded-sm"
                style={{ backgroundColor: severityColor(n) }}
              />
              {n}/10
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
