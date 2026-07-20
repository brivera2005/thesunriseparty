"use client";

import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import type { DistractionEntry } from "@/lib/types";
import { distractionDetailPath } from "@/lib/data/distractions";
import { formatDateUS } from "@/lib/format-date";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function severityClass(score: number) {
  if (score >= 9) return "text-severity-critical";
  if (score >= 7) return "text-severity-high";
  if (score >= 5) return "text-severity-moderate";
  return "text-severity-low";
}

type DistractionCardProps = {
  entry: DistractionEntry;
  index?: number;
};

export function DistractionCard({ entry, index = 0 }: DistractionCardProps) {
  return (
    <Link
      href={distractionDetailPath(entry.id)}
      id={entry.id}
      className={cn(
        "group surface-card-interactive flex h-full flex-col scroll-mt-24 p-4 sm:p-5",
        "animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "text-xs font-bold tabular-nums tracking-wide",
            severityClass(entry.severity)
          )}
        >
          Severity {entry.severity}/10
        </span>
        <span className="text-[11px] text-muted-foreground">
          {formatDateUS(entry.date)}
        </span>
      </div>

      <h3 className="text-base font-semibold leading-snug text-navy group-hover:text-primary sm:text-[1.05rem]">
        {entry.title}
      </h3>

      <div className="mt-3 space-y-2 text-sm leading-relaxed">
        <p>
          <span className="font-semibold text-navy">Distraction: </span>
          <span className="text-muted-foreground line-clamp-2">
            {entry.distraction}
          </span>
        </p>
        <p>
          <span className="font-semibold text-navy">Covering up: </span>
          <span className="text-muted-foreground line-clamp-2">
            {entry.coveringUp}
          </span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {entry.categories.slice(0, 3).map((cat) => (
          <Badge key={cat} variant="secondary" className="text-[10px] font-medium">
            {cat}
          </Badge>
        ))}
      </div>

      <span className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-primary">
        <Eye className="size-4" aria-hidden />
        How to spot it
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
