"use client";

import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { TipText } from "@/components/ui/term-tip";
import { cn } from "@/lib/utils";

type BuryCalloutProps = {
  text: string;
  className?: string;
  /** Compact for list rows */
  compact?: boolean;
};

/**
 * Primary "pay attention" callout for what they are burying.
 * Crimson banner; jargon gets ? tips automatically.
 */
export function BuryCallout({ text, className, compact = false }: BuryCalloutProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 border-[#b42318]/55 bg-[#fef3f2]",
        compact ? "px-2.5 py-2" : "px-3 py-2.5 sm:px-3.5 sm:py-3",
        className
      )}
      role="note"
    >
      <div className="flex items-center gap-1.5">
        <AlertTriangle
          className={cn(
            "shrink-0 text-[#b42318]",
            compact ? "size-3.5" : "size-4"
          )}
          strokeWidth={2}
          aria-hidden
        />
        <p
          className={cn(
            "font-bold tracking-[0.12em] text-[#b42318] uppercase",
            compact ? "text-[9px]" : "text-[10px] sm:text-[11px]"
          )}
        >
          Pay attention to this
        </p>
      </div>
      <p
        className={cn(
          "mt-1 font-semibold leading-snug text-[#7f1d1d]",
          compact ? "text-xs" : "text-sm sm:text-[15px]"
        )}
      >
        <span className="mr-1 font-bold tracking-wide text-[#b42318]">
          They&apos;re burying:
        </span>
        <TipText>{text}</TipText>
      </p>
    </div>
  );
}

type BaitLineProps = {
  text: string;
  className?: string;
  label?: string;
};

/** Secondary shiny-object line: quieter than the bury callout. */
export function BaitLine({
  text,
  className,
  label = "The distraction",
}: BaitLineProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <p className="text-[10px] font-semibold tracking-[0.14em] text-navy/40 uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm leading-snug text-navy/55">
        <TipText>{text}</TipText>
      </p>
    </div>
  );
}

export function BuryStack({
  coveringUp,
  distraction,
  header,
  className,
}: {
  coveringUp: string;
  distraction: string;
  header?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {header}
      <BuryCallout text={coveringUp} />
      <BaitLine text={distraction} />
    </div>
  );
}
