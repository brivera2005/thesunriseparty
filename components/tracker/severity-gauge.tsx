"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ShieldAlert } from "lucide-react";
import type { ThreatLevel } from "@/lib/data/timeline-events";
import { cn } from "@/lib/utils";

interface SeverityGaugeProps {
  score: number;
  className?: string;
}

const SEVERITY_COLORS = {
  critical: "oklch(0.55 0.22 25)",
  high: "oklch(0.68 0.18 55)",
  moderate: "oklch(0.72 0.15 85)",
  low: "oklch(0.62 0.16 145)",
  track: "oklch(0.35 0.06 28 / 35%)",
} as const;

function getSeverityLabel(score: number) {
  if (score >= 9) return { label: "Critical", color: SEVERITY_COLORS.critical };
  if (score >= 7) return { label: "High", color: SEVERITY_COLORS.high };
  if (score >= 5) return { label: "Moderate", color: SEVERITY_COLORS.moderate };
  return { label: "Low", color: SEVERITY_COLORS.low };
}

export function SeverityGauge({ score, className }: SeverityGaugeProps) {
  const { label, color } = getSeverityLabel(score);
  const data = [
    { name: "score", value: score, fill: color },
    { name: "remainder", value: 10 - score, fill: SEVERITY_COLORS.track },
  ];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative size-28">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={38}
              outerRadius={52}
              dataKey="value"
              stroke="none"
            />
            <Tooltip
              content={({ active }) =>
                active ? (
                  <div className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs shadow-lg">
                    Severity: {score}/10
                  </div>
                ) : null
              }
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
          <span className="text-2xl font-bold tabular-nums" style={{ color }}>
            {score}
          </span>
          <span className="text-[10px] text-muted-foreground">/ 10</span>
        </div>
      </div>
      <span
        className="mt-1 text-xs font-semibold tracking-wide uppercase"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

interface AggregateSeverityProps {
  events: { Severity_Score: number }[];
}

export function AggregateSeverityChart({ events }: AggregateSeverityProps) {
  const buckets = [
    { name: "Critical (9-10)", count: 0, fill: SEVERITY_COLORS.critical },
    { name: "High (7-8)", count: 0, fill: SEVERITY_COLORS.high },
    { name: "Moderate (5-6)", count: 0, fill: SEVERITY_COLORS.moderate },
    { name: "Low (1-4)", count: 0, fill: SEVERITY_COLORS.low },
  ];

  events.forEach((e) => {
    if (e.Severity_Score >= 9) buckets[0].count++;
    else if (e.Severity_Score >= 7) buckets[1].count++;
    else if (e.Severity_Score >= 5) buckets[2].count++;
    else buckets[3].count++;
  });

  const avg =
    events.length > 0
      ? (events.reduce((s, e) => s + e.Severity_Score, 0) / events.length).toFixed(1)
      : "0";

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex-1">
        <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Severity Distribution
        </p>
        <div className="flex h-3 overflow-hidden rounded-full">
          {buckets.map(
            (b) =>
              b.count > 0 && (
                <div
                  key={b.name}
                  className="transition-all"
                  style={{
                    width: `${(b.count / events.length) * 100}%`,
                    backgroundColor: b.fill,
                  }}
                  title={`${b.name}: ${b.count}`}
                />
              )
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-3">
          {buckets
            .filter((b) => b.count > 0)
            .map((b) => (
              <div key={b.name} className="flex items-center gap-1.5 text-xs">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: b.fill }}
                />
                <span className="text-muted-foreground">
                  {b.name.split(" ")[0]} ({b.count})
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="text-center sm:border-l sm:border-border sm:pl-6">
        <p className="text-3xl font-bold text-destructive tabular-nums">{avg}</p>
        <p className="text-xs text-muted-foreground">Avg Severity</p>
      </div>
    </div>
  );
}

const THREAT_COLORS = {
  critical: "oklch(0.55 0.22 25)",
  severe: "oklch(0.62 0.20 35)",
  high: "oklch(0.68 0.18 55)",
  elevated: "oklch(0.72 0.15 85)",
  moderate: "oklch(0.62 0.16 145)",
  track: "oklch(0.35 0.06 28 / 35%)",
} as const;

function threatColor(label: string) {
  if (label === "Critical") return THREAT_COLORS.critical;
  if (label === "Severe") return THREAT_COLORS.severe;
  if (label === "High") return THREAT_COLORS.high;
  if (label === "Elevated") return THREAT_COLORS.elevated;
  return THREAT_COLORS.moderate;
}

interface ThreatLevelGaugeProps {
  threat: ThreatLevel;
  className?: string;
}

export function ThreatLevelGauge({ threat, className }: ThreatLevelGaugeProps) {
  const color = threatColor(threat.label);
  const data = [
    { name: "risk", value: threat.score, fill: color },
    { name: "remainder", value: 10 - threat.score, fill: THREAT_COLORS.track },
  ];

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-xl border border-destructive/20 bg-destructive/5 px-6 py-5 sm:flex-row sm:gap-8",
        className
      )}
    >
      <div className="relative size-36 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={48}
              outerRadius={64}
              dataKey="value"
              stroke="none"
            />
            <Tooltip
              content={({ active }) =>
                active ? (
                  <div className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs shadow-lg">
                    Democracy risk: {threat.score}/10
                  </div>
                ) : null
              }
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-5">
          <span className="text-3xl font-bold tabular-nums" style={{ color }}>
            {threat.score}
          </span>
          <span className="text-[10px] text-muted-foreground">/ 10</span>
        </div>
      </div>

      <div className="mt-4 text-center sm:mt-0 sm:text-left">
        <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
          <ShieldAlert className="size-5 text-destructive" />
          <p className="text-xs font-semibold tracking-[0.15em] text-destructive uppercase">
            Democracy Threat Level
          </p>
        </div>
        <p className="text-2xl font-bold" style={{ color }}>
          {threat.label}
        </p>
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
          Composite score from avg severity ({threat.avgSeverity}/10) and{" "}
          {threat.highSeverity} high-severity actions ({threat.total} tracked).
        </p>
      </div>
    </div>
  );
}

interface ThreatGaugeMiniProps {
  threat: ThreatLevel;
  className?: string;
}

/** Compact threat gauge for homepage — links to full tracker */
export function ThreatGaugeMini({ threat, className }: ThreatGaugeMiniProps) {
  const color = threatColor(threat.label);
  const data = [
    { name: "risk", value: threat.score, fill: color },
    { name: "remainder", value: 10 - threat.score, fill: THREAT_COLORS.track },
  ];

  return (
    <a
      href="/tracker"
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-destructive/25 bg-destructive/5 p-4 transition-colors hover:border-destructive/40 hover:bg-destructive/10",
        className
      )}
    >
      <div className="relative size-16 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={20}
              outerRadius={28}
              dataKey="value"
              stroke="none"
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span className="text-lg font-bold tabular-nums" style={{ color }}>
            {threat.score}
          </span>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <ShieldAlert className="size-3.5 text-destructive" />
          <p className="text-[10px] font-semibold tracking-wider text-destructive uppercase">
            Threat Level
          </p>
        </div>
        <p className="text-lg font-bold" style={{ color }}>
          {threat.label}
        </p>
        <p className="text-xs text-muted-foreground group-hover:text-foreground">
          {threat.highSeverity} high-severity actions · View tracker →
        </p>
      </div>
    </a>
  );
}
