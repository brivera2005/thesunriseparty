"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  MessageSquareQuote,
  RotateCcw,
  Shuffle,
  Swords,
  Zap,
} from "lucide-react";
import type { ConversationHelper } from "@/lib/types";
import { CitationList } from "@/components/citation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StudyModeProps {
  entries: ConversationHelper[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function StudyMode({ entries }: StudyModeProps) {
  const [deck, setDeck] = useState(entries);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const entry = deck[index];
  const progress = deck.length > 0 ? ((index + 1) / deck.length) * 100 : 0;

  const resetCard = useCallback(() => setRevealed(false), []);

  useEffect(() => {
    resetCard();
  }, [index, resetCard]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % deck.length);
  }, [deck.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + deck.length) % deck.length);
  }, [deck.length]);

  const handleShuffle = useCallback(() => {
    setDeck(shuffleArray(entries));
    setIndex(0);
    resetCard();
  }, [entries, resetCard]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setRevealed((r) => !r);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const studied = useMemo(
    () => new Set(deck.map((e) => e.id)),
    [deck]
  );

  if (!entry) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No entries to study. Adjust your filters.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          Card {index + 1} of {deck.length}
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-sunrise transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Button variant="ghost" size="sm" onClick={handleShuffle} className="gap-1.5 text-xs">
          <Shuffle className="size-3.5" />
          Shuffle
        </Button>
      </div>

      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2 rounded-2xl"
        aria-label={revealed ? "Hide response" : "Reveal response"}
      >
        <Card
          className={cn(
            "min-h-[320px] border-2 transition-all duration-300 cursor-pointer",
            revealed
              ? "border-sunrise/40 bg-sunrise/5 shadow-lg"
              : "border-border bg-card shadow-md hover:border-sunrise/25 hover:shadow-lg"
          )}
        >
          <CardContent className="flex min-h-[320px] flex-col p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {entry.category.map((cat) => (
                <Badge key={cat} variant="outline" className="border-sunrise/30 text-sunrise">
                  {cat}
                </Badge>
              ))}
              {entry.difficulty && (
                <Badge variant="secondary" className="text-[10px] uppercase">
                  {entry.difficulty}
                </Badge>
              )}
            </div>

            {!revealed ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-destructive/80 uppercase">
                  They Say
                </p>
                <MessageSquareQuote className="mb-4 size-8 text-destructive/50" />
                <p className="text-xl font-semibold leading-snug sm:text-2xl">
                  &ldquo;{entry.theySay}&rdquo;
                </p>
                <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-sunrise">
                  <Eye className="size-4" />
                  Tap or press Space to reveal your response
                </p>
              </div>
            ) : (
              <div className="flex flex-1 flex-col gap-5">
                <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  They said: &ldquo;{entry.theySay.slice(0, 80)}
                  {entry.theySay.length > 80 ? "…" : ""}&rdquo;
                </p>

                <div>
                  <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
                    <Swords className="size-3.5" />
                    You Say
                  </h4>
                  <p className="text-base leading-relaxed">{entry.youSay}</p>
                </div>

                {entry.stab && (
                  <div className="rounded-lg border border-sunrise/30 bg-sunrise/10 px-4 py-3">
                    <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-sunrise uppercase">
                      <Zap className="size-3.5" />
                      The Stab
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">{entry.stab}</p>
                  </div>
                )}

                <div className="mt-auto border-t border-border pt-4">
                  <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Sources
                  </p>
                  <CitationList sources={entry.sources} />
                </div>

                <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <EyeOff className="size-3.5" />
                  Tap to hide response
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </button>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="outline" onClick={goPrev} className="gap-1.5">
          <ChevronLeft className="size-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={resetCard}
          aria-label="Reset card"
        >
          <RotateCcw className="size-4" />
        </Button>
        <Button onClick={goNext} className="gap-1.5 bg-sunrise text-sunrise-foreground hover:bg-sunrise/90">
          Next
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Arrow keys navigate · Space toggles reveal · {studied.size} cards in deck
      </p>
    </div>
  );
}
