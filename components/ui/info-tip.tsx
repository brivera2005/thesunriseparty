"use client";

import { useId, useState, type ReactNode } from "react";
import { CircleHelp } from "lucide-react";
import { useCanHover } from "@/hooks/use-can-hover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type InfoTipProps = {
  label: string;
  children?: ReactNode;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  /** Compact icon-only trigger (default). Pass children for custom trigger. */
  iconClassName?: string;
};

/**
 * Progressive disclosure: hover tooltip on fine pointers; tap-to-toggle on touch.
 * Critical copy should not live only here; use for secondary descriptions.
 */
export function InfoTip({
  label,
  children,
  className,
  side = "top",
  iconClassName,
}: InfoTipProps) {
  const canHover = useCanHover();
  const [open, setOpen] = useState(false);
  const tipId = useId();

  const trigger = children ?? (
    <span
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        iconClassName
      )}
    >
      <CircleHelp className="size-3.5" aria-hidden />
    </span>
  );

  if (canHover) {
    return (
      <Tooltip>
        <TooltipTrigger
          className={cn("inline-flex border-0 bg-transparent p-0", className)}
          aria-label={label}
          delay={200}
        >
          {trigger}
        </TooltipTrigger>
        <TooltipContent side={side}>{label}</TooltipContent>
      </Tooltip>
    );
  }

  return (
    <span className={cn("relative inline-flex", className)}>
      <button
        type="button"
        className="inline-flex border-0 bg-transparent p-0"
        aria-expanded={open}
        aria-controls={tipId}
        aria-label={open ? "Hide description" : label}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        {trigger}
      </button>
      {open && (
        <span
          id={tipId}
          role="tooltip"
          className="absolute top-full left-1/2 z-40 mt-2 w-72 max-w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-lg border border-border bg-white px-3 py-2.5 text-left text-xs leading-relaxed text-foreground shadow-md"
        >
          {label}
        </span>
      )}
    </span>
  );
}

type ExpandableHintProps = {
  text: string;
  className?: string;
  /** Always show a one-line preview; expand for full text on tap (touch) or hover (desktop). */
  previewLines?: 1 | 2;
};

/** Inline description: hover-reveal on desktop, tap-expand on mobile. */
export function ExpandableHint({
  text,
  className,
  previewLines = 1,
}: ExpandableHintProps) {
  const canHover = useCanHover();
  const [expanded, setExpanded] = useState(false);

  if (canHover) {
    return (
      <p
        className={cn(
          "text-sm leading-relaxed text-muted-foreground transition-colors",
          previewLines === 1 ? "line-clamp-1 group-hover:line-clamp-none" : "line-clamp-2 group-hover:line-clamp-none",
          className
        )}
      >
        {text}
      </p>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "w-full border-0 bg-transparent p-0 text-left text-sm leading-relaxed text-muted-foreground",
        className
      )}
      aria-expanded={expanded}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpanded((v) => !v);
      }}
    >
      <span className={expanded ? undefined : previewLines === 1 ? "line-clamp-1" : "line-clamp-2"}>
        {text}
      </span>
      <span className="mt-1 block text-[11px] font-medium text-primary">
        {expanded ? "Show less" : "More"}
      </span>
    </button>
  );
}
