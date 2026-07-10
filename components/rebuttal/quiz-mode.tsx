"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Shuffle,
  XCircle,
} from "lucide-react";
import type { ConversationHelper } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuizModeProps {
  entries: ConversationHelper[];
}

interface QuizQuestion {
  entry: ConversationHelper;
  options: { id: string; text: string; correct: boolean }[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function truncateResponse(text: string, max = 140): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function buildQuestion(entry: ConversationHelper, pool: ConversationHelper[]): QuizQuestion {
  const distractors = shuffleArray(pool.filter((e) => e.id !== entry.id)).slice(0, 3);
  const options = shuffleArray([
    { id: entry.id, text: truncateResponse(entry.youSay), correct: true },
    ...distractors.map((d) => ({
      id: d.id,
      text: truncateResponse(d.youSay),
      correct: false,
    })),
  ]);
  return { entry, options };
}

export function QuizMode({ entries }: QuizModeProps) {
  const [deck, setDeck] = useState(entries);
  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const question = useMemo(
    () => (deck[index] ? buildQuestion(deck[index], deck) : null),
    [deck, index]
  );

  const answered = selectedId !== null;
  const isCorrect = question?.options.find((o) => o.id === selectedId)?.correct ?? false;

  const resetQuestion = useCallback(() => setSelectedId(null), []);

  useEffect(() => {
    resetQuestion();
  }, [index, resetQuestion]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % deck.length);
  }, [deck.length]);

  const handleSelect = (optionId: string) => {
    if (answered) return;
    setSelectedId(optionId);
    const correct = question?.options.find((o) => o.id === optionId)?.correct ?? false;
    setScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      total: s.total + 1,
    }));
  };

  const handleShuffle = useCallback(() => {
    setDeck(shuffleArray(entries));
    setIndex(0);
    resetQuestion();
    setScore({ correct: 0, total: 0 });
  }, [entries, resetQuestion]);

  if (!question) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No entries for quiz. Adjust your filters.
      </p>
    );
  }

  const { entry, options } = question;
  const progress = deck.length > 0 ? ((index + 1) / deck.length) * 100 : 0;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          Question {index + 1} of {deck.length}
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-sunrise transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="tabular-nums">
          {score.correct}/{score.total} correct
        </span>
        <Button variant="ghost" size="sm" onClick={handleShuffle} className="gap-1.5 text-xs">
          <Shuffle className="size-3.5" />
          Shuffle
        </Button>
      </div>

      <Card className="border-2 border-border">
        <CardContent className="p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="gap-1 border-sunrise/30 text-sunrise">
              <HelpCircle className="size-3" />
              Quiz
            </Badge>
            {entry.category.map((cat) => (
              <Badge key={cat} variant="outline" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>

          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-destructive/80 uppercase">
            They Say
          </p>
          <p className="mb-6 text-xl font-semibold leading-snug sm:text-2xl">
            &ldquo;{entry.theySay}&rdquo;
          </p>

          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Pick the best counter-response:
          </p>

          <div className="space-y-3" role="radiogroup" aria-label="Quiz options">
            {options.map((option) => {
              const isSelected = selectedId === option.id;
              const showResult = answered;
              const showCorrect = showResult && option.correct;
              const showWrong = showResult && isSelected && !option.correct;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  disabled={answered}
                  className={cn(
                    "w-full rounded-lg border p-4 text-left text-sm leading-relaxed transition-colors",
                    !answered && "hover:border-sunrise/40 hover:bg-accent/50",
                    showCorrect && "border-green-500/50 bg-green-500/10",
                    showWrong && "border-destructive/50 bg-destructive/10",
                    isSelected && !showResult && "border-sunrise bg-sunrise/5"
                  )}
                  role="radio"
                  aria-checked={isSelected}
                >
                  <span className="flex items-start gap-2">
                    {showCorrect && (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" />
                    )}
                    {showWrong && (
                      <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                    )}
                    <span>{option.text}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div
              className={cn(
                "mt-6 rounded-lg border p-4",
                isCorrect
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-sunrise/30 bg-sunrise/5"
              )}
            >
              <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                {isCorrect ? "Correct - full response" : "Best response"}
              </p>
              <p className="text-sm leading-relaxed">{entry.youSay}</p>
              {entry.stab && (
                <p className="mt-3 text-sm font-medium text-sunrise">{entry.stab}</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-end">
        <Button
          onClick={goNext}
          disabled={!answered}
          className="gap-1.5 bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
        >
          Next question
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Multiple choice - pick the sourced counter, then review the full response
      </p>
    </div>
  );
}
