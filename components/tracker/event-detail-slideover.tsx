"use client";

import Link from "next/link";
import { Calendar, ExternalLink, Link2, Share2, X } from "lucide-react";
import type { TimelineEvent } from "@/lib/types";
import { eventDetailPath } from "@/lib/data/timeline-events";
import { p2025Chapters } from "@/lib/data/p2025-chapters";
import { CitationList } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { SeverityGauge } from "./severity-gauge";
import { cn } from "@/lib/utils";
import { formatDateUS, formatMonthUS } from "@/lib/format-date";

interface EventDetailSlideoverProps {
  event: TimelineEvent | null;
  open: boolean;
  onClose: () => void;
}

function formatDate(dateStr: string) {
  return formatDateUS(dateStr);
}

export function EventDetailSlideover({
  event,
  open,
  onClose,
}: EventDetailSlideoverProps) {
  if (!event || !open) return null;

  const chapter = event.p2025Pillar
    ? p2025Chapters.find((c) => c.pillars.includes(event.p2025Pillar!))
    : undefined;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[1px]"
        onClick={onClose}
        aria-label="Close event details"
      />
      <aside
        className="fixed top-0 right-0 z-50 flex h-full w-full max-w-lg flex-col border-l border-border bg-white shadow-2xl animate-in slide-in-from-right duration-200"
        role="dialog"
        aria-label="Event details"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-semibold">Event Details</span>
          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
            <X className="size-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="destructive">{event.Action_Type}</Badge>
            <Badge variant="outline">{event.category}</Badge>
            <span className="font-mono text-[10px] text-muted-foreground">
              {event.Event_ID}
            </span>
          </div>

          <h3 className="text-lg font-semibold leading-snug">{event.Description}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="size-3.5" />
            {formatDate(event.Date)}
          </p>

          <div className="mt-4">
            <SeverityGauge score={event.Severity_Score} />
          </div>

          {chapter && (
            <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Heritage Mandate - Chapter {chapter.number}
              </p>
              <p className="text-sm font-medium">{chapter.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{chapter.section}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Author: {chapter.author} · Maps to P2025 pillars tracked in our events
              </p>
              <a
                href={chapter.heritageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Read Heritage chapter
                <ExternalLink className="size-3" />
              </a>
            </div>
          )}

          <div className="mt-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Impacted Sectors
            </p>
            <div className="flex flex-wrap gap-2">
              {event.Impacted_Sectors.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Sources
            </p>
            <CitationList sources={event.Sources} />
          </div>

          {event.externalTrackers && event.externalTrackers.length > 0 && (
            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Also Tracked At
              </p>
              <div className="flex flex-wrap gap-2">
                {event.externalTrackers.map((ref) => (
                  <a
                    key={ref.url}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:border-primary/40"
                  >
                    <ExternalLink className="size-3" />
                    {ref.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {event.Linked_Fix_ID && (
            <div className="mt-6 border-t border-border pt-6">
              <Link
                href={`/blueprint/${event.Linked_Fix_ID}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2"
                )}
              >
                <Link2 className="size-3.5" />
                Blueprint Fix: {event.Linked_Fix_ID}
              </Link>
            </div>
          )}
        </div>

        <div className="border-t border-border p-4">
          <Link
            href={eventDetailPath(event.Event_ID)}
            className={cn(buttonVariants({ size: "sm" }), "w-full gap-2")}
          >
            <Share2 className="size-3.5" />
            Share full event page
          </Link>
        </div>
      </aside>
    </>
  );
}
