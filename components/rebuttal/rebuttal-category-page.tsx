"use client";

import Link from "next/link";
import { ArrowLeft, MessageSquareQuote } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { RebuttalCard } from "@/components/rebuttal/rebuttal-card";
import { RebuttalDifficultyFilter } from "@/components/rebuttal/rebuttal-difficulty-filter";
import { Accordion } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { RebuttalCategory, RebuttalDifficulty } from "@/lib/types";
import {
  getRebuttalsByCategory,
  rebuttalCategoryPath,
  rebuttalCategories,
} from "@/lib/data/conversation-helpers";
import { cn } from "@/lib/utils";

const CATEGORY_DESCRIPTIONS: Record<RebuttalCategory, string> = {
  Economy:
    "Tariffs, inflation, jobs, taxes, and the myth that trickle-down ever trickled.",
  Immigration:
    "Border rhetoric, asylum law, and the gap between Fox chyrons and BLS data.",
  "But Obama!":
    "Whataboutism with a presidential name attached - and why it's still a dodge.",
  Courts: "Judicial activism, activist judges, and whose rulings count as politics.",
  "Jan 6": "Tourist visits, FBI setups, and what the DOJ actually prosecuted.",
  Healthcare:
    "Medicare, ACA, abortion, and the socialized-medicine boogeyman.",
  Crime: "Defund myths, migrant crime waves, and what FBI statistics show.",
  Elections:
    "Stolen elections, voter ID, mail ballots, and the evidence (or lack of it).",
  Climate:
    "Hoaxes, natural cycles, green scams, and what every major academy says.",
  "Culture Wars":
    "CRT, drag story hour, DEI, and the outrage machine.",
  Media: "Fake news, bias, and who actually owns the narrative.",
  Democracy:
    "Executive power, Schedule F, courts, and whether the republic still rhymes.",
  Whataboutism: "The universal deflection - and how to name it without losing the room.",
  "Foreign Policy":
    "NATO, Ukraine, peace presidents, and who actually ended which wars.",
  Education:
    "School choice, book bans, grooming panics, and what teachers actually teach.",
};

interface RebuttalCategoryPageProps {
  category: RebuttalCategory;
}

export function RebuttalCategoryPage({ category }: RebuttalCategoryPageProps) {
  const allEntries = getRebuttalsByCategory(category);
  const [activeDifficulty, setActiveDifficulty] = useState<
    RebuttalDifficulty | "All"
  >("All");
  const entries = useMemo(
    () =>
      activeDifficulty === "All"
        ? allEntries
        : allEntries.filter((e) => e.difficulty === activeDifficulty),
    [allEntries, activeDifficulty]
  );
  const slug = rebuttalCategoryPath(category).split("/").pop();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-sunrise/5 to-background">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/rebuttal"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Rebuttal Desk
            </Link>
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-sunrise uppercase">
                Rebuttal Category
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {category}
              </h1>
              <p className="mt-3 text-muted-foreground">
                {CATEGORY_DESCRIPTIONS[category]}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">
                  {entries.length} rebuttal{entries.length !== 1 ? "s" : ""}
                  {activeDifficulty !== "All" ? ` · ${activeDifficulty}` : ""}
                </Badge>
                <Badge variant="outline" className="font-mono text-[10px]">
                  /rebuttal/category/{slug}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <RebuttalDifficultyFilter
            value={activeDifficulty}
            onChange={setActiveDifficulty}
            className="mb-6"
          />
          <div className="mb-8 flex flex-wrap gap-2">
            {rebuttalCategories
              .filter((c) => c !== "All")
              .map((cat) => (
                <Link
                  key={cat}
                  href={rebuttalCategoryPath(cat)}
                  className={cn(
                    buttonVariants({
                      variant: cat === category ? "default" : "outline",
                      size: "sm",
                    }),
                    cat === category &&
                      "bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
                  )}
                >
                  {cat}
                </Link>
              ))}
          </div>

          {entries.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No rebuttals in this category yet.
            </p>
          ) : (
            <Accordion type="multiple" className="space-y-3">
              {entries.map((entry) => (
                <RebuttalCard key={entry.id} entry={entry} />
              ))}
            </Accordion>
          )}

          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
            <MessageSquareQuote className="mx-auto mb-3 size-8 text-sunrise" />
            <p className="text-sm text-muted-foreground">
              Every response is sourced. Browse all categories or open study
              mode on the main desk.
            </p>
            <Link
              href="/rebuttal"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-4"
              )}
            >
              Full Rebuttal Desk
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
