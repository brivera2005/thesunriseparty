"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, Link2 } from "lucide-react";
import type { DistractionEntry } from "@/lib/types";
import { distractionDetailPath } from "@/lib/data/distractions";
import { formatDateUS } from "@/lib/format-date";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BuryCallout, BaitLine } from "@/components/distracted/bury-callout";
import { CitationList } from "@/components/citation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TipText } from "@/components/ui/term-tip";
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
  const [open, setOpen] = useState(false);

  return (
    <article
      id={entry.id}
      className={cn(
        "scroll-mt-24 rounded-lg border border-black/[0.08] bg-white",
        "animate-in fade-in fill-mode-both"
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 30}ms` }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 px-3 py-2.5 text-left touch-manipulation sm:px-4 sm:py-3"
      >
        <span className="w-[4.5rem] shrink-0 pt-0.5 text-[11px] tabular-nums text-muted-foreground">
          {formatDateUS(entry.date)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold leading-snug text-navy">
            {entry.title}
          </span>
          {!open ? (
            <span className="mt-1 line-clamp-1 text-[11px] font-medium text-[#b42318]">
              Bury: {entry.coveringUp}
            </span>
          ) : null}
        </span>
        <span
          className={cn(
            "shrink-0 pt-0.5 text-xs font-bold tabular-nums",
            severityClass(entry.severity)
          )}
        >
          {entry.severity}
        </span>
        <ChevronDown
          className={cn(
            "mt-0.5 size-4 shrink-0 text-navy/40 transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div className="border-t border-black/[0.06] px-3 pb-3 pt-2 sm:px-4">
          <dl className="space-y-3 text-sm leading-snug">
            <BuryCallout text={entry.coveringUp} compact />
            <BaitLine text={entry.distraction} />
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.12em] text-navy/45 uppercase">
                Tell
              </dt>
              <dd className="mt-0.5 text-navy/90">
                <TipText>{entry.howToSpotIt}</TipText>
              </dd>
            </div>
          </dl>
          <div className="mt-2 flex flex-wrap gap-1">
            {entry.categories.slice(0, 3).map((cat) => (
              <Badge
                key={cat}
                variant="secondary"
                className="text-[10px] font-medium"
              >
                {cat}
              </Badge>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-1.5 px-2 text-xs text-navy/60"
                >
                  <Link2 className="size-3.5" />
                  Citations
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-left text-base">
                    Citations
                  </DialogTitle>
                  <DialogDescription className="text-left text-sm">
                    {entry.title}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2 text-sm">
                  <CitationList sources={entry.sources} />
                  <ul className="mt-3 space-y-1.5 text-muted-foreground">
                    {entry.sources.map((s, i) => (
                      <li key={s.id}>
                        [{i + 1}] {s.title}
                        {s.publisher ? ` · ${s.publisher}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
            <Link
              href={distractionDetailPath(entry.id)}
              className="inline-flex h-8 items-center gap-1 text-xs font-semibold text-navy/60 hover:text-navy"
            >
              Open
              <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </div>
      ) : null}
    </article>
  );
}
