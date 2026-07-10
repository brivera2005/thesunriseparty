"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { getEventsByMonth } from "@/lib/data/timeline-events";
import { Card, CardContent } from "@/components/ui/card";

export function EventsByMonthChart() {
  const data = getEventsByMonth();
  const total = data.reduce((s, d) => s + d.count, 0);
  const peak = data.reduce(
    (best, d) => (d.count > best.count ? d : best),
    data[0] ?? { month: "", label: "", count: 0 }
  );

  return (
    <Card className="border-border bg-card/80">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              <TrendingUp className="size-4 text-destructive" />
              Month over Month
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Events added per calendar month - {total} total tracked
            </p>
          </div>
          {peak.count > 0 && (
            <div className="text-right">
              <p className="text-2xl font-bold tabular-nums text-destructive">
                {peak.count}
              </p>
              <p className="text-[11px] text-muted-foreground">
                Peak: {peak.label}
              </p>
            </div>
          )}
        </div>
        <div className="h-36 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <XAxis
                dataKey="label"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                tickLine={false}
                axisLine={false}
                width={28}
              />
              <Tooltip
                content={({ active, payload }) =>
                  active && payload?.[0] ? (
                    <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-lg">
                      <p className="font-medium">{payload[0].payload.label}</p>
                      <p className="text-muted-foreground">
                        {payload[0].value} event{payload[0].value === 1 ? "" : "s"}
                      </p>
                    </div>
                  ) : null
                }
              />
              <Bar
                dataKey="count"
                fill="oklch(0.58 0.22 25)"
                radius={[3, 3, 0, 0]}
                maxBarSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
