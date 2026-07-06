"use client";

import type { RebuttalDifficulty } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const rebuttalDifficulties: (RebuttalDifficulty | "All")[] = [
  "All",
  "easy",
  "medium",
  "hard",
];

const LABELS: Record<RebuttalDifficulty | "All", string> = {
  All: "All levels",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

interface RebuttalDifficultyFilterProps {
  value: RebuttalDifficulty | "All";
  onChange: (value: RebuttalDifficulty | "All") => void;
  className?: string;
}

export function RebuttalDifficultyFilter({
  value,
  onChange,
  className,
}: RebuttalDifficultyFilterProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="text-xs font-medium text-muted-foreground">Difficulty:</span>
      {rebuttalDifficulties.map((level) => (
        <Button
          key={level}
          variant={value === level ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(level)}
          className={cn(
            "h-7 text-xs capitalize",
            value === level &&
              "bg-sunrise text-sunrise-foreground hover:bg-sunrise/90"
          )}
        >
          {LABELS[level]}
        </Button>
      ))}
    </div>
  );
}
