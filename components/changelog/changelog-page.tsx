"use client";

import Link from "next/link";
import { ArrowLeft, GitCommitHorizontal } from "lucide-react";
import { changelog } from "@/lib/data/changelog";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatDateUS, formatMonthUS } from "@/lib/format-date";
import { PageShell } from "@/components/layout/page-shell";

function formatDate(dateStr: string) {
  return formatDateUS(dateStr);
}

export function ChangelogPage() {
  return (
    <PageShell>

        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
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
            <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Meta Transparency
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Changelog
            </h1>
            <p className="mt-3 text-muted-foreground">
              Every pass of Project Sunrise - what shipped, when, and why we
              bother documenting our own iterations. Democracy needs receipts;
              so does this site.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <ol className="relative space-y-0 border-l border-border">
            {[...changelog].reverse().map((entry, i) => (
              <li key={entry.version} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className={cn(
                    "absolute -left-1.5 top-1.5 flex size-3 rounded-full border-2 border-background",
                    i === 0 ? "bg-primary" : "bg-muted-foreground/50"
                  )}
                  aria-hidden
                />
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="font-mono text-[10px]">
                    v{entry.version}
                  </Badge>
                  <time
                    dateTime={entry.date}
                    className="text-xs text-muted-foreground"
                  >
                    {formatDate(entry.date)}
                  </time>
                </div>
                <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold">
                  <GitCommitHorizontal className="size-4 text-primary" />
                  {entry.title}
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {entry.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary" aria-hidden>
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </PageShell>
  );
}
