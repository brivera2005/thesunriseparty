"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Link2,
  Share2,
} from "lucide-react";
import type { TimelineEvent } from "@/lib/types";
import { eventDetailPath, getRelatedEvents } from "@/lib/data/timeline-events";
import { policyFixPath } from "@/lib/data/policies";
import { SaveButton } from "@/components/ui/save-button";
import { CitationList } from "@/components/citation";
import { SeverityGauge } from "@/components/tracker/severity-gauge";
import { EventEmbedSnippet } from "@/components/tracker/event-embed-snippet";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDateUS, formatMonthUS } from "@/lib/format-date";
import { SITE_URL } from "@/lib/metadata";
import { PageShell } from "@/components/layout/page-shell";

function formatDate(dateStr: string) {
  return formatDateUS(dateStr);
}

function ShareEventButton({ event }: { event: TimelineEvent }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${SITE_URL}${eventDetailPath(event.Event_ID)}`;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${event.Action_Type} | Project Sunrise`,
          text: event.Description.slice(0, 200),
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share event"}
    </Button>
  );
}

export function EventDetailPage({ event }: { event: TimelineEvent }) {
  const relatedEvents = getRelatedEvents(event);

  return (
    <PageShell>

        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/tracker"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Tracker
            </Link>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="destructive">{event.Action_Type}</Badge>
              <Badge variant="outline">{event.category}</Badge>
              {event.p2025Pillar && (
                <Badge variant="secondary" className="text-[10px]">
                  P2025: {event.p2025Pillar}
                </Badge>
              )}
              <span className="font-mono text-[10px] text-muted-foreground">
                {event.Event_ID}
              </span>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h1 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  {event.Description}
                </h1>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="size-3.5" />
                  {formatDate(event.Date)}
                </p>
              </div>
              <SeverityGauge score={event.Severity_Score} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <ShareEventButton event={event} />
              <SaveButton
                type="event"
                id={event.Event_ID}
                title={event.Description}
                href={eventDetailPath(event.Event_ID)}
              />
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Card className="border-border">
              <CardContent className="space-y-6 p-6">
                <div>
                  <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
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

                <div className="border-t border-border pt-6">
                  <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Sources
                  </p>
                  <CitationList sources={event.Sources} />
                </div>

                {event.externalTrackers && event.externalTrackers.length > 0 && (
                  <div className="border-t border-border pt-6">
                    <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Also Tracked At
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.externalTrackers.map((ref) => (
                        <a
                          key={ref.url}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
                        >
                          <ExternalLink className="size-3" />
                          {ref.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {event.Linked_Fix_ID && (
                  <div className="border-t border-border pt-6">
                    <Link
                      href={policyFixPath(event.Linked_Fix_ID)}
                      className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-3 py-2 text-sm font-medium text-primary hover:bg-accent"
                    >
                      <Link2 className="size-3.5" />
                      View Linked Fix: {event.Linked_Fix_ID}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-6">
              <EventEmbedSnippet event={event} />
            </div>

            {relatedEvents.length > 0 && (
              <div className="mt-8">
                <p className="mb-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  See Also
                </p>
                <div className="space-y-2">
                  {relatedEvents.map((related) => (
                    <Link
                      key={related.Event_ID}
                      href={eventDetailPath(related.Event_ID)}
                      className="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/50"
                    >
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <Badge variant="destructive" className="text-[10px]">
                          {related.Action_Type}
                        </Badge>
                        {related.p2025Pillar && (
                          <Badge variant="secondary" className="text-[10px]">
                            {related.p2025Pillar}
                          </Badge>
                        )}
                        <span className="text-[10px] text-muted-foreground">
                          {related.Severity_Score}/10
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug">
                        {related.Description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </PageShell>
  );
}
