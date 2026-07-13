"use client";

import { Share2, Download, CalendarPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/layout/page-hero";
import { TrackerTimelineFeed } from "@/components/tracker/tracker-timeline-feed";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = "https://thesunriseparty.pages.dev/tracker";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Project 2025 Tracker | Project Sunrise",
          text: "Live timeline of Project 2025 implementation with severity scoring and sources.",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleShare} className="h-9 gap-2">
      <Share2 className="size-3.5" />
      {copied ? "Link copied" : "Share"}
    </Button>
  );
}

export function TrackerPage() {
  const setMode = useAppStore((s) => s.setMode);

  useEffect(() => {
    setMode("tracker");
  }, [setMode]);

  return (
    <PageShell>
      <PageHero
        section="tracker"
        eyebrow="Timeline"
        title="Project 2025 Tracker"
        description="When each action happened — sorted, filterable, and cited. Severity and sources on every event."
        tip="Sort newest/oldest, scrub the timeline, or filter by date range, category, and severity."
        actions={
          <>
            <a
              href="/data/events.csv"
              download="project-sunrise-events.csv"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-9 gap-2")}
              title="Download the full event dataset as CSV"
            >
              <Download className="size-3.5" />
              Download CSV
            </a>
            <a
              href="/feed.ics"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "h-9 gap-2")}
              title="Subscribe to tracker updates in your calendar"
            >
              <CalendarPlus className="size-3.5" />
              Subscribe iCal
            </a>
            <ShareButton />
          </>
        }
      />
      <TrackerTimelineFeed />
    </PageShell>
  );
}
