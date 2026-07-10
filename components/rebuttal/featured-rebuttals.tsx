"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquareQuote, Sparkles } from "lucide-react";
import { conversationHelpers } from "@/lib/data/conversation-helpers";
import { rebuttalDetailPath } from "@/lib/data/conversation-helpers";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const featuredIds = [
  "but-obama-did-this",
  "election-stolen",
  "migrant-crime-wave",
  "climate-hoax",
  "deep-state",
  "trump-best-economy-ever",
  "crt-schools",
  "project-2025-doesnt-exist",
];

const featured = featuredIds
  .map((id) => conversationHelpers.find((r) => r.id === id))
  .filter(Boolean);

export function FeaturedRebuttals() {
  return (
    <section className="border-b border-border bg-white py-12 sm:py-16" aria-label="Featured rebuttals">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-sunrise uppercase">
              Featured Rebuttals
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              When they say X, you say Y
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {conversationHelpers.length}+ sourced counter-arguments - copy, study, or deploy in real conversations.
            </p>
          </div>
          <Link
            href="/rebuttal"
            className="inline-flex items-center gap-2 rounded-lg bg-sunrise/15 px-4 py-2 text-sm font-medium text-sunrise-foreground transition-colors hover:bg-sunrise/25"
          >
            Browse all rebuttals
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((entry) =>
            entry ? (
              <Link key={entry.id} href={rebuttalDetailPath(entry.id)} className="group">
                <Card className="h-full border-border bg-white shadow-sm transition-all hover:border-sunrise/40 hover:shadow-md">
                  <CardContent className="flex h-full flex-col p-5">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {entry.category.slice(0, 2).map((cat) => (
                        <Badge key={cat} variant="outline" className="text-[10px]">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <p className="mb-2 text-xs font-semibold text-destructive/80 uppercase tracking-wide">
                      They say:
                    </p>
                    <p className="line-clamp-3 flex-1 text-sm font-medium leading-snug group-hover:text-sunrise">
                      &ldquo;{entry.theySay}&rdquo;
                    </p>
                    {entry.difficulty && (
                      <span
                        className={cn(
                          "mt-3 inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-medium capitalize",
                          entry.difficulty === "easy" && "bg-emerald-50 text-emerald-700",
                          entry.difficulty === "medium" && "bg-amber-50 text-amber-700",
                          entry.difficulty === "hard" && "bg-red-50 text-red-700"
                        )}
                      >
                        {entry.difficulty}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

export function RebuttalHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="hero-gradient-rebuttal absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <Image
            src="/logo.png"
            alt="The Sunrise Party"
            width={160}
            height={160}
            className="size-28 shrink-0 object-contain sm:size-36 lg:size-40"
            priority
          />
          <div className="max-w-2xl flex-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3 py-1 text-xs font-semibold text-sunrise">
              <MessageSquareQuote className="size-3.5" />
              Rebuttal Desk - Front &amp; Center
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              When they say X,{" "}
              <span className="text-sunrise">you say Y</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sourced counter-arguments for the MAGA talking points you hear every day.
              Every rebuttal backed by primary sources, archived links, and copy-ready responses.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/rebuttal"
                className="inline-flex items-center gap-2 rounded-lg bg-sunrise px-5 py-2.5 text-sm font-semibold text-sunrise-foreground shadow-sm transition-colors hover:bg-sunrise/90"
              >
                <Sparkles className="size-4" />
                Open Rebuttal Desk
              </Link>
              <Link
                href="/rebuttal?study=1"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-sunrise/40"
              >
                Study Mode
              </Link>
              <Link
                href="/rebuttal?quiz=1"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-sunrise/40"
              >
                Quiz Mode
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground tabular-nums">
                {conversationHelpers.length}
              </span>{" "}
              rebuttals ready · Project Sunrise institutional research platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
