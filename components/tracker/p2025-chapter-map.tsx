"use client";

import Link from "next/link";
import { ExternalLink, BookOpen, ChevronRight } from "lucide-react";
import {
  getChapterEventCounts,
  getChaptersBySection,
  getMappedEventCount,
  mandatePdfUrl,
} from "@/lib/data/p2025-chapters";
import { eventDetailPath } from "@/lib/data/timeline-events";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function countBadgeClass(count: number) {
  if (count >= 5) return "bg-destructive/15 text-destructive border-destructive/30";
  if (count >= 2) return "bg-severity-high/15 text-severity-high border-severity-high/30";
  if (count >= 1) return "bg-primary/10 text-primary border-primary/30";
  return "bg-muted text-muted-foreground border-border";
}

export function P2025ChapterMap() {
  const sectionGroups = getChaptersBySection();
  const chapterCounts = getChapterEventCounts();
  const countById = new Map(chapterCounts.map((c) => [c.chapter.id, c]));
  const mappedTotal = getMappedEventCount();
  const chaptersWithEvents = chapterCounts.filter((c) => c.count > 0).length;

  return (
    <Card className="mb-8 border-border bg-card/80">
      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
              <BookOpen className="size-4 text-primary" />
              Heritage Mandate Chapter Mapping
            </h3>
            <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
              Our tracked events mapped to the 30 chapters of{" "}
              <em>Mandate for Leadership: The Conservative Promise</em> — the
              920-page Project 2025 policy guide published by the Heritage
              Foundation. {mappedTotal} events match {chaptersWithEvents} of 30
              chapters.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.project2025.org/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
            >
              <ExternalLink className="size-3" />
              project2025.org/policy
            </a>
            <a
              href={mandatePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
            >
              <ExternalLink className="size-3" />
              Full PDF (920 pp.)
            </a>
          </div>
        </div>

        {/* Summary matrix — top chapters by event count */}
        <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {chapterCounts
            .filter((c) => c.count > 0)
            .sort((a, b) => b.count - a.count)
            .slice(0, 10)
            .map(({ chapter, count }) => (
              <div
                key={chapter.id}
                className="rounded-lg border border-border bg-background/50 px-3 py-2"
              >
                <p className="text-[10px] font-medium text-muted-foreground">
                  Ch. {chapter.number}
                </p>
                <p className="line-clamp-2 text-xs font-semibold leading-snug">
                  {chapter.title}
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums text-destructive">
                  {count}
                </p>
              </div>
            ))}
        </div>

        <Accordion type="multiple" className="rounded-lg border border-border px-4">
          {sectionGroups.map(({ section, chapters }) => {
            const sectionTotal = chapters.reduce(
              (sum, ch) => sum + (countById.get(ch.id)?.count ?? 0),
              0
            );
            return (
              <AccordionItem key={section} value={section}>
                <AccordionTrigger className="text-sm hover:no-underline">
                  <span className="flex flex-1 items-center gap-3 text-left">
                    <span className="font-semibold">{section}</span>
                    <Badge
                      variant="outline"
                      className={cn("text-[10px] tabular-nums", countBadgeClass(sectionTotal))}
                    >
                      {sectionTotal} event{sectionTotal !== 1 ? "s" : ""}
                    </Badge>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pb-2">
                    {chapters.map((chapter) => {
                      const data = countById.get(chapter.id);
                      const count = data?.count ?? 0;
                      const events = data?.events ?? [];
                      return (
                        <div
                          key={chapter.id}
                          className="rounded-lg border border-border/60 bg-background/40 p-3"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[10px] text-muted-foreground">
                                  Ch. {chapter.number}
                                </span>
                                <span className="text-sm font-medium">
                                  {chapter.title}
                                </span>
                                <Badge
                                  variant="outline"
                                  className={cn("text-[10px] tabular-nums", countBadgeClass(count))}
                                >
                                  {count} tracked
                                </Badge>
                              </div>
                              <p className="mt-0.5 text-[11px] text-muted-foreground">
                                Author: {chapter.author}
                              </p>
                            </div>
                            <a
                              href={chapter.heritageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex shrink-0 items-center gap-1 text-[11px] text-primary hover:underline"
                            >
                              Heritage section
                              <ExternalLink className="size-3" />
                            </a>
                          </div>
                          {events.length > 0 && (
                            <ul className="mt-2 space-y-1 border-t border-border/50 pt-2">
                              {events.slice(0, 4).map((event) => (
                                <li key={event.Event_ID}>
                                  <Link
                                    href={eventDetailPath(event.Event_ID)}
                                    className="group flex items-start gap-1 text-[11px] leading-snug text-muted-foreground hover:text-foreground"
                                  >
                                    <ChevronRight className="mt-0.5 size-3 shrink-0 text-primary/60 group-hover:text-primary" />
                                    <span className="line-clamp-1">
                                      {event.Description}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                              {events.length > 4 && (
                                <li className="pl-4 text-[10px] text-muted-foreground">
                                  +{events.length - 4} more events
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}
