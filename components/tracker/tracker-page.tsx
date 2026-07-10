"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Download, CalendarPlus } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { TrackerSection } from "@/components/tracker/tracker-section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { useEffect } from "react";

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
    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
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
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-destructive/5 to-background">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Sunrise
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-destructive uppercase">
                  Shareable Resource
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Project 2025 Tracker
                </h1>
                <p className="mt-3 text-muted-foreground">
                  Full timeline with category and severity filters, cross-referenced
                  against independent watchdogs - every action sourced.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="/data/events.csv"
                    download="project-sunrise-events.csv"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-2"
                    )}
                  >
                    <Download className="size-3.5" />
                    Download CSV
                  </a>
                  <a
                    href="/feed.ics"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-2"
                    )}
                  >
                    <CalendarPlus className="size-3.5" />
                    Subscribe iCal
                  </a>
                </div>
              </div>
              <ShareButton />
            </div>
          </div>
        </section>

        <TrackerSection standalone />
      </main>

      <SiteFooter />
    </div>
  );
}
