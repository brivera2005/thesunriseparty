"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BookOpen, HelpCircle, List, MessageSquareQuote, Search } from "lucide-react";
import {
  conversationHelpers,
  rebuttalCategories,
} from "@/lib/data/conversation-helpers";
import type { RebuttalCategory, RebuttalDifficulty } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion } from "@/components/ui/accordion";
import { RebuttalCard } from "@/components/rebuttal/rebuttal-card";
import { StudyMode } from "@/components/rebuttal/study-mode";
import { QuizMode } from "@/components/rebuttal/quiz-mode";
import { LazyVisible } from "@/components/rebuttal/lazy-visible";
import { RebuttalDifficultyFilter } from "@/components/rebuttal/rebuttal-difficulty-filter";
import { cn } from "@/lib/utils";

const LAZY_AFTER_INDEX = 8;

interface RebuttalDeskSectionProps {
  /** Hide section header when embedded on dedicated /rebuttal page */
  standalone?: boolean;
  /** Shortened home embed — hides search/filters */
  compact?: boolean;
  /** Max entries when compact */
  limit?: number;
}

type DeskMode = "browse" | "study" | "quiz";

export function RebuttalDeskSection({
  standalone = false,
  compact = false,
  limit,
}: RebuttalDeskSectionProps) {
  const searchParams = useSearchParams();
  const [deskMode, setDeskMode] = useState<DeskMode>("browse");
  const [activeCategory, setActiveCategory] = useState<RebuttalCategory | "All">(
    "All"
  );
  const [activeDifficulty, setActiveDifficulty] = useState<
    RebuttalDifficulty | "All"
  >("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchParams.get("quiz") === "1") {
      setDeskMode("quiz");
    } else if (searchParams.get("study") === "1") {
      setDeskMode("study");
    }
  }, [searchParams]);

  const setDeskModeWithUrl = (mode: DeskMode) => {
    setDeskMode(mode);
    const url = new URL(window.location.href);
    url.searchParams.delete("study");
    url.searchParams.delete("quiz");
    if (mode === "study") url.searchParams.set("study", "1");
    if (mode === "quiz") url.searchParams.set("quiz", "1");
    window.history.replaceState({}, "", url.toString());
  };

  const studyMode = deskMode === "study";
  const quizMode = deskMode === "quiz";

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let results = conversationHelpers.filter((entry) => {
      const matchesCategory =
        activeCategory === "All" ||
        entry.category.includes(activeCategory as RebuttalCategory);
      const matchesDifficulty =
        activeDifficulty === "All" || entry.difficulty === activeDifficulty;
      const matchesSearch =
        !q ||
        entry.theySay.toLowerCase().includes(q) ||
        entry.youSay.toLowerCase().includes(q) ||
        entry.stab?.toLowerCase().includes(q) ||
        entry.category.some((c) => c.toLowerCase().includes(q));
      return matchesCategory && matchesDifficulty && matchesSearch;
    });
    if (compact && limit) {
      results = results.slice(0, limit);
    }
    return results;
  }, [activeCategory, activeDifficulty, search, compact, limit]);

  return (
    <section
      id="rebuttal-desk"
      className={cn(
        "section-rebuttal scroll-mt-16 py-16 sm:py-20",
        !standalone && "border-t border-border"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {!standalone && (
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <div className="size-2 rounded-full bg-sunrise shadow-[0_0_8px_oklch(0.76_0.16_66/40%)]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-sunrise uppercase">
                Counter-Intel
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Rebuttal Desk
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A study guide for countering MAGA talking points with facts, primary
              sources, and sharp rebuttals. Expand a claim, learn the response,
              copy it to your clipboard.
            </p>
            <p className="mt-2 text-sm text-muted-foreground/80">
              {conversationHelpers.length} entries &middot; sourced &middot; ready
              to deploy
            </p>
          </div>
        )}

        {!compact && (
        <>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search claims, responses, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
              disabled={studyMode || quizMode}
            />
          </div>
          {standalone && (
            <div className="flex shrink-0 rounded-lg border border-border p-1">
              <Button
                variant={deskMode === "browse" ? "default" : "ghost"}
                size="sm"
                onClick={() => setDeskModeWithUrl("browse")}
                className={cn(
                  "gap-1.5",
                  deskMode === "browse" &&
                    "bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
                )}
              >
                <List className="size-3.5" />
                Browse
              </Button>
              <Button
                variant={deskMode === "study" ? "default" : "ghost"}
                size="sm"
                onClick={() => setDeskModeWithUrl("study")}
                className={cn(
                  "gap-1.5",
                  deskMode === "study" &&
                    "bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
                )}
              >
                <BookOpen className="size-3.5" />
                Study
              </Button>
              <Button
                variant={deskMode === "quiz" ? "default" : "ghost"}
                size="sm"
                onClick={() => setDeskModeWithUrl("quiz")}
                className={cn(
                  "gap-1.5",
                  deskMode === "quiz" &&
                    "bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
                )}
              >
                <HelpCircle className="size-3.5" />
                Quiz
              </Button>
            </div>
          )}
        </div>

        {!studyMode && !quizMode && (
        <>
        <RebuttalDifficultyFilter
          value={activeDifficulty}
          onChange={setActiveDifficulty}
          className="mb-4"
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {rebuttalCategories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                activeCategory === cat &&
                  "bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
              )}
            >
              {cat}
            </Button>
          ))}
        </div>
        </>
        )}
        </>
        )}

        {studyMode ? (
          <StudyMode entries={filtered} />
        ) : quizMode ? (
          <QuizMode entries={filtered} />
        ) : filtered.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No entries match your search. Try a different category or keyword.
          </p>
        ) : (
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.map((entry, index) => {
              const card = <RebuttalCard key={entry.id} entry={entry} />;
              if (index < LAZY_AFTER_INDEX) return card;
              return (
                <LazyVisible key={entry.id} minHeight={88}>
                  {card}
                </LazyVisible>
              );
            })}
          </Accordion>
        )}

        {standalone && (
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <MessageSquareQuote className="size-3.5 text-sunrise" />
            {conversationHelpers.length} rebuttals with primary-source citations
          </p>
        )}
      </div>
    </section>
  );
}
