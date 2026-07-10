"use client";

import { useMemo } from "react";
import type { TimelineEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TrackerTimelineScrubberProps {
  events: TimelineEvent[];
  selectedId: string;
  onSelect: (event: TimelineEvent) => void;
}

export function TrackerTimelineScrubber({
  events,
  selectedId,
  onSelect,
}: TrackerTimelineScrubberProps) {
  const sorted = useMemo(
    () => [...events].sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()),
    [events]
  );

  if (sorted.length === 0) return null;

  const minDate = new Date(sorted[0].Date).getTime();
  const maxDate = new Date(sorted[sorted.length - 1].Date).getTime();
  const range = maxDate - minDate || 1;

  return (
    <div className="mb-6 rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-semibold uppercase tracking-wider">Timeline</span>
        <span className="tabular-nums">
          {sorted[0].Date} → {sorted[sorted.length - 1].Date}
        </span>
      </div>
      <div className="relative h-12">
        <div className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded-full bg-muted" />
        {sorted.map((event) => {
          const pos =
            ((new Date(event.Date).getTime() - minDate) / range) * 100;
          const isSelected = event.Event_ID === selectedId;
          return (
            <button
              key={event.Event_ID}
              type="button"
              title={`${event.Date}: ${event.Description.slice(0, 60)}…`}
              onClick={() => onSelect(event)}
              className={cn(
                "absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all",
                isSelected
                  ? "z-10 size-4 border-destructive bg-destructive shadow-md"
                  : event.Severity_Score >= 8
                    ? "border-destructive/70 bg-destructive/60 hover:scale-125"
                    : event.Severity_Score >= 6
                      ? "border-severity-high/70 bg-severity-high/50 hover:scale-125"
                      : "border-muted-foreground/40 bg-muted hover:scale-125"
              )}
              style={{ left: `${Math.min(98, Math.max(2, pos))}%` }}
              aria-label={`${event.Date} - severity ${event.Severity_Score}`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground">
        Click a dot to jump to an event. Dot size and color reflect severity.
      </p>
    </div>
  );
}
