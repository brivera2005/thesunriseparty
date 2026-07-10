"use client";

import { useMemo } from "react";
import type { HiddenHistoryEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

const MIN_YEAR = 1490;
const MAX_YEAR = 2026;

interface DualTimelineProps {
  entries: HiddenHistoryEntry[];
  selectedId: string | null;
  compareMode: boolean;
  yearMin: number;
  yearMax: number;
  onSelect: (id: string) => void;
}

function yearToPercent(year: number, min: number, max: number) {
  return ((year - min) / (max - min)) * 100;
}

export function DualTimeline({
  entries,
  selectedId,
  compareMode,
  yearMin,
  yearMax,
  onSelect,
}: DualTimelineProps) {
  const sorted = useMemo(
    () => [...entries].sort((a, b) => a.sortYear - b.sortYear),
    [entries]
  );

  const eraTicks = useMemo(() => {
    const ticks: { year: number; label: string }[] = [];
    let lastEra = "";
    for (const entry of sorted) {
      if (entry.era !== lastEra) {
        ticks.push({ year: entry.sortYear, label: entry.era });
        lastEra = entry.era;
      }
    }
    return ticks;
  }, [sorted]);

  return (
    <div className="relative">
      {/* Mobile: card list (primary UX under md) */}
      <div className="space-y-2 md:hidden">
        {sorted.map((entry) => (
          <button
            key={`mobile-${entry.id}`}
            type="button"
            onClick={() => onSelect(entry.id)}
            className={cn(
              "flex min-h-11 w-full flex-col justify-center rounded-lg border px-3 py-2.5 text-left transition-colors",
              selectedId === entry.id
                ? "border-primary bg-primary/5"
                : "border-border bg-card hover:border-primary/40"
            )}
          >
            <p className="text-xs text-muted-foreground">
              {entry.date} · {entry.era}
            </p>
            <p className="mt-0.5 text-sm font-semibold leading-snug">
              {entry.title}
            </p>
          </button>
        ))}
      </div>

      {/* Desktop scrubber */}
      <div className="relative hidden md:block">
        <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>{yearMin}</span>
          <span className="font-medium">Scrub timeline</span>
          <span>{yearMax}</span>
        </div>

        <div className="relative overflow-x-auto pb-4">
          <div className="relative min-w-[900px] px-2">
            <div className="relative h-2 rounded-full bg-border">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-primary/20"
                style={{
                  width: `${yearToPercent(yearMax, MIN_YEAR, MAX_YEAR) - yearToPercent(yearMin, MIN_YEAR, MAX_YEAR)}%`,
                  left: `${yearToPercent(yearMin, MIN_YEAR, MAX_YEAR)}%`,
                }}
              />
            </div>

            <div className="relative mt-3 h-8">
              {eraTicks.map((tick) => (
                <div
                  key={`${tick.year}-${tick.label}`}
                  className="absolute -translate-x-1/2 text-[10px] text-muted-foreground"
                  style={{
                    left: `${yearToPercent(tick.year, yearMin, yearMax)}%`,
                  }}
                >
                  <span className="whitespace-nowrap rounded bg-muted px-1.5 py-0.5">
                    {tick.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-[140px_1fr] gap-3">
              <div className="flex flex-col justify-center gap-16 pr-2 text-right text-xs font-semibold">
                <div>
                  <span className="rounded bg-sky-100 px-2 py-1 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
                    Textbooks
                  </span>
                  <p className="mt-1 font-normal text-muted-foreground">
                    Official narrative
                  </p>
                </div>
                <div>
                  <span className="rounded bg-amber-100 px-2 py-1 text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                    Reality
                  </span>
                  <p className="mt-1 font-normal text-muted-foreground">
                    Sourced facts
                  </p>
                </div>
              </div>

              <div className="relative min-h-[220px]">
                <div className="absolute top-8 right-0 left-0 h-px bg-border" />
                <div className="absolute top-[calc(8rem+2px)] right-0 left-0 h-px bg-border" />

                {sorted.map((entry) => {
                  const left = yearToPercent(entry.sortYear, yearMin, yearMax);
                  const isSelected = selectedId === entry.id;
                  return (
                    <button
                      key={entry.id}
                      type="button"
                      onClick={() => onSelect(entry.id)}
                      className="group absolute -translate-x-1/2 focus:outline-none"
                      style={{ left: `${left}%`, top: 0 }}
                      aria-label={`${entry.title}, ${entry.date}`}
                    >
                      <div className="flex flex-col items-center gap-14">
                        <div
                          className={cn(
                            "size-3 rounded-full border-2 border-sky-400 bg-sky-100 transition-all group-hover:scale-125 dark:bg-sky-900",
                            isSelected && "scale-150 ring-2 ring-sky-400",
                            compareMode && "opacity-100"
                          )}
                        />
                        <div
                          className={cn(
                            "size-3 rounded-full border-2 border-amber-500 bg-amber-100 transition-all group-hover:scale-125 dark:bg-amber-900",
                            isSelected && "scale-150 ring-2 ring-amber-500",
                            compareMode && "animate-pulse"
                          )}
                        />
                      </div>
                      <span
                        className={cn(
                          "pointer-events-none absolute top-full mt-2 hidden max-w-[120px] -translate-x-1/2 truncate text-center text-[10px] font-medium group-hover:block",
                          isSelected && "block text-primary"
                        )}
                      >
                        {entry.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MIN_YEAR, MAX_YEAR };
