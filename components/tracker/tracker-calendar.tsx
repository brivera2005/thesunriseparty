"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TimelineEvent } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function severityDotClass(score: number) {
  if (score >= 8) return "bg-destructive";
  if (score >= 6) return "bg-severity-high";
  return "bg-severity-moderate";
}

interface TrackerCalendarProps {
  events: TimelineEvent[];
  selectedEventId: string;
  onSelectEvent: (event: TimelineEvent) => void;
}

export function TrackerCalendar({
  events,
  selectedEventId,
  onSelectEvent,
}: TrackerCalendarProps) {
  const latestDate = useMemo(() => {
    if (events.length === 0) return new Date();
    const sorted = [...events].sort(
      (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
    );
    return new Date(sorted[0].Date + "T00:00:00");
  }, [events]);

  const [month, setMonth] = useState(
    () => new Date(latestDate.getFullYear(), latestDate.getMonth(), 1)
  );

  const eventsByDate = useMemo(() => {
    const map = new Map<string, TimelineEvent[]>();
    for (const event of events) {
      const list = map.get(event.Date) ?? [];
      list.push(event);
      map.set(event.Date, list);
    }
    return map;
  }, [events]);

  const monthLabel = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const calendarDays = useMemo(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const firstDay = new Date(year, monthIndex, 1);
    const startOffset = firstDay.getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const cells: { date: string | null; day: number | null }[] = [];
    for (let i = 0; i < startOffset; i++) {
      cells.push({ date: null, day: null });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      cells.push({ date: dateStr, day });
    }
    return cells;
  }, [month]);

  const monthEventCount = useMemo(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    return events.filter((e) => {
      const d = new Date(e.Date + "T00:00:00");
      return d.getFullYear() === year && d.getMonth() === monthIndex;
    }).length;
  }, [events, month]);

  const shiftMonth = (delta: number) => {
    setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-4 flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => shiftMonth(-1)}
          aria-label="Previous month"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className="text-center">
          <p className="text-sm font-semibold">{monthLabel}</p>
          <p className="text-[10px] text-muted-foreground">
            {monthEventCount} event{monthEventCount !== 1 ? "s" : ""} this month
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => shiftMonth(1)}
          aria-label="Next month"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((label) => (
          <div
            key={label}
            className="py-1 text-center text-[10px] font-medium text-muted-foreground"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((cell, i) => {
          if (!cell.date || cell.day === null) {
            return <div key={`empty-${i}`} className="aspect-square" />;
          }

          const dayEvents = eventsByDate.get(cell.date) ?? [];
          const count = dayEvents.length;
          const maxSeverity =
            count > 0
              ? Math.max(...dayEvents.map((e) => e.Severity_Score))
              : 0;
          const hasSelected = dayEvents.some((e) => e.Event_ID === selectedEventId);

          return (
            <button
              key={cell.date}
              type="button"
              disabled={count === 0}
              onClick={() => {
                if (dayEvents[0]) onSelectEvent(dayEvents[0]);
              }}
              className={cn(
                "relative flex aspect-square flex-col items-center justify-center rounded-md border text-xs transition-colors",
                count === 0
                  ? "cursor-default border-transparent text-muted-foreground/40"
                  : "border-border hover:border-destructive/40 hover:bg-accent/50",
                hasSelected && "border-destructive/50 bg-accent ring-1 ring-destructive/30",
                count >= 3 && "bg-destructive/10",
                count === 2 && "bg-destructive/5"
              )}
              aria-label={
                count > 0
                  ? `${cell.day}: ${count} event${count !== 1 ? "s" : ""}`
                  : `${cell.day}: no events`
              }
            >
              <span className="font-medium tabular-nums">{cell.day}</span>
              {count > 0 && (
                <span className="mt-0.5 flex items-center gap-0.5">
                  <span
                    className={cn("size-1.5 rounded-full", severityDotClass(maxSeverity))}
                  />
                  {count > 1 && (
                    <span className="text-[9px] font-bold text-muted-foreground">
                      {count}
                    </span>
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-[10px] text-muted-foreground">
        Darker cells = more events. Dot color = highest severity that day.
      </p>
    </div>
  );
}
