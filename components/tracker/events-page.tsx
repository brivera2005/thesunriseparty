"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { useEffect } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CitationModal } from "@/components/citation";
import { CommandPalette } from "@/components/layout/command-palette";
import { TrackerSection } from "@/components/tracker/tracker-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

export function EventsPage() {
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
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 size-8 text-destructive" strokeWidth={1.5} />
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-destructive uppercase">
                  Calendar View
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Agenda Events
                </h1>
                <p className="mt-3 text-muted-foreground">
                  Browse verified administrative actions by date. Darker cells
                  indicate more events; dot color reflects highest severity that
                  day.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TrackerSection standalone defaultView="calendar" />
      </main>

      <SiteFooter />
    </div>
  );
}
