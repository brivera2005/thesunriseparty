"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
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

const tipPanelClass =
  "w-72 max-w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-border bg-white px-3 py-2.5 text-left text-xs leading-relaxed text-foreground shadow-md";

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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) {
      setCoords(null);
      return;
    }
    const update = () => {
      const el = triggerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const halfW = Math.min(144, (window.innerWidth - 16) / 2);
      const left = Math.min(
        Math.max(rect.left + rect.width / 2, halfW + 8),
        window.innerWidth - halfW - 8
      );
      const top = side === "top" ? rect.top - 8 : rect.bottom + 8;
      setCoords({ top, left });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open, side]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      const t = event.target as Node;
      if (triggerRef.current?.contains(t)) return;
      const tip = document.getElementById(tipId);
      if (tip?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [open, tipId]);

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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {trigger}
        </TooltipTrigger>
        <TooltipContent side={side}>{label}</TooltipContent>
      </Tooltip>
    );
  }

  const tipNode =
    open && coords && mounted
      ? createPortal(
          <span
            id={tipId}
            role="tooltip"
            className={cn(
              "pointer-events-auto fixed z-[9999] -translate-x-1/2",
              tipPanelClass,
              side === "top" && "-translate-y-full"
            )}
            style={{ top: coords.top, left: coords.left }}
          >
            {label}
          </span>,
          document.body
        )
      : null;

  return (
    <span className={cn("relative inline-flex", className)}>
      <button
        ref={triggerRef}
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
      {tipNode}
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
          previewLines === 1
            ? "line-clamp-1 group-hover:line-clamp-none"
            : "line-clamp-2 group-hover:line-clamp-none",
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
      <span
        className={
          expanded
            ? undefined
            : previewLines === 1
              ? "line-clamp-1"
              : "line-clamp-2"
        }
      >
        {text}
      </span>
      <span className="mt-1 block text-[11px] font-medium text-primary">
        {expanded ? "Show less" : "More"}
      </span>
    </button>
  );
}
