"use client";

import Link from "next/link";
import { X, MessageSquareQuote, ExternalLink } from "lucide-react";
import type { HiddenHistoryEntry } from "@/lib/types";
import { Citation } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface HistoryEventPanelProps {
  entry: HiddenHistoryEntry | null;
  open: boolean;
  compareMode: boolean;
  onClose: () => void;
}

export function HistoryEventPanel({
  entry,
  open,
  compareMode,
  onClose,
}: HistoryEventPanelProps) {
  if (!entry) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="flex max-h-[90vh] max-w-2xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b border-border px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">
                {entry.date} · {entry.era}
              </p>
              <DialogTitle className="mt-1 text-xl">{entry.title}</DialogTitle>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {entry.categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-[10px]">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
              <X className="size-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div
            className={cn(
              "grid gap-4",
              compareMode ? "md:grid-cols-2" : "grid-cols-1"
            )}
          >
            <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-4 dark:border-sky-900 dark:bg-sky-950/30">
              <p className="mb-2 text-xs font-semibold tracking-wide text-sky-700 uppercase dark:text-sky-300">
                What Textbooks Teach
              </p>
              <p className="text-sm leading-relaxed">{entry.textbookVersion}</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
              <p className="mb-2 text-xs font-semibold tracking-wide text-amber-800 uppercase dark:text-amber-300">
                What Actually Happened
              </p>
              <p className="text-sm leading-relaxed">{entry.actualHistory}</p>
            </div>
          </div>

          {entry.historicalRebuttals.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <MessageSquareQuote className="size-4 text-sunrise" />
                Historical Rebuttals
              </h3>
              <div className="space-y-4">
                {entry.historicalRebuttals.map((rebuttal, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="text-xs font-medium text-muted-foreground">
                      They said:
                    </p>
                    <p className="mt-1 text-sm italic">&ldquo;{rebuttal.theySaid}&rdquo;</p>
                    <p className="mt-3 text-xs font-medium text-primary">You say:</p>
                    <p className="mt-1 text-sm leading-relaxed">{rebuttal.youSay}</p>
                    {rebuttal.stab && (
                      <p className="mt-2 text-sm font-medium text-sunrise">
                        {rebuttal.stab}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {rebuttal.sources.map((src, j) => (
                        <Citation key={src.id} source={src} index={j + 1} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="mb-2 text-sm font-semibold">Sources</h3>
            <ul className="space-y-2">
              {entry.sources.map((src) => (
                <li key={src.id} className="text-sm">
                  <Citation source={src}>{src.title}</Citation>
                  <span className="text-muted-foreground"> — {src.publisher}</span>
                </li>
              ))}
            </ul>
          </div>

          {entry.relatedRebuttalIds && entry.relatedRebuttalIds.length > 0 && (
            <div className="mt-4 rounded-lg border border-sunrise/30 bg-sunrise/5 p-3">
              <p className="text-xs font-medium text-sunrise">
                Modern versions of these claims live in the Rebuttal Desk →
              </p>
              <Link
                href="/rebuttal"
                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Open Rebuttal Desk
                <ExternalLink className="size-3" />
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
