"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCanHover } from "@/hooks/use-can-hover";
import { cn } from "@/lib/utils";

export type CollapsibleFiltersProps = {
  /** Active filter count shown in the toggle label */
  activeCount?: number;
  /** Toggle button label */
  label?: string;
  /** Optional summary next to the toggle (e.g. result count) */
  summary?: ReactNode;
  /** Filter and sort controls */
  children: ReactNode;
  /** Clears all filters; shows Clear all when activeCount > 0 */
  onClear?: () => void;
  /** Pin the compact bar below the site header */
  sticky?: boolean;
  className?: string;
  barClassName?: string;
  /** Always-visible bar content (e.g. primary search) */
  leading?: ReactNode;
};

export function FilterPanelSection({
  label,
  children,
  className,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {label ? (
        <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
      ) : null}
      {children}
    </div>
  );
}

export function CollapsibleFilters({
  activeCount = 0,
  label = "Sort & filter",
  summary,
  children,
  onClear,
  sticky = false,
  className,
  barClassName,
  leading,
}: CollapsibleFiltersProps) {
  const [open, setOpen] = useState(false);
  const canHover = useCanHover();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !canHover) return;
    const handler = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, canHover]);

  useEffect(() => {
    if (!open || canHover) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, canHover]);

  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const toggleLabel = activeCount > 0 ? `${label} (${activeCount})` : label;

  const panelBody = (
    <div className="space-y-4">{children}</div>
  );

  const clearRow =
    activeCount > 0 && onClear ? (
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onClear}
        className="text-xs"
      >
        Clear all
      </Button>
    ) : null;

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative",
        sticky &&
          "sticky top-14 z-30 border-b border-border bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90 sm:top-16",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center gap-2 sm:gap-3",
          sticky && "py-3",
          barClassName
        )}
      >
        {leading}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "h-9 shrink-0 gap-2",
            activeCount > 0 && "border-primary/40 bg-primary/5"
          )}
        >
          <SlidersHorizontal className="size-3.5" />
          {toggleLabel}
          <ChevronDown
            className={cn("size-3.5 transition-transform", open && "rotate-180")}
          />
        </Button>
        {summary ? (
          <span className="text-xs text-muted-foreground">{summary}</span>
        ) : null}
      </div>

      {!canHover && open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close filters"
          />
          <div
            id={panelId}
            role="dialog"
            aria-label={label}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl border border-border bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl animate-in slide-in-from-bottom duration-200"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold">{label}</h3>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="size-4" />
              </Button>
            </div>
            {panelBody}
            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              {clearRow ? (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={onClear}
                  className="flex-1"
                >
                  Clear all
                </Button>
              ) : null}
              <Button
                type="button"
                size="sm"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Done
              </Button>
            </div>
          </div>
        </>
      ) : null}

      {canHover && open ? (
        <div
          id={panelId}
          className="absolute top-full left-0 z-50 mt-2 w-full min-w-[min(100%,20rem)] max-w-xl rounded-xl border border-border bg-white p-4 shadow-lg animate-in fade-in zoom-in-95 duration-150"
        >
          {panelBody}
          {clearRow ? <div className="mt-4 border-t border-border pt-3">{clearRow}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
