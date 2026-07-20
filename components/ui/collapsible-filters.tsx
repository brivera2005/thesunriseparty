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
  const sheetRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [panelBox, setPanelBox] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open || !canHover) return;
    const handler = (event: MouseEvent) => {
      const t = event.target as Node;
      if (rootRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
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

  useEffect(() => {
    if (!open || canHover) return;
    const id = requestAnimationFrame(() => {
      if (sheetRef.current) sheetRef.current.scrollTop = 0;
    });
    return () => cancelAnimationFrame(id);
  }, [open, canHover]);

  useLayoutEffect(() => {
    if (!open || !canHover || !rootRef.current) {
      setPanelBox(null);
      return;
    }
    const update = () => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const width = Math.min(Math.max(rect.width, 320), 36 * 16, window.innerWidth - 16);
      const left = Math.min(rect.left, window.innerWidth - width - 8);
      setPanelBox({
        top: rect.bottom + 8,
        left: Math.max(8, left),
        width,
      });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open, canHover]);

  const toggleLabel = activeCount > 0 ? `${label} (${activeCount})` : label;

  const panelBody = <div className="space-y-4">{children}</div>;

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

  const desktopPanel =
    canHover && open && panelBox && mounted
      ? createPortal(
          <div
            ref={panelRef}
            id={panelId}
            className="fixed z-[9999] rounded-xl border border-border bg-white p-4 shadow-lg animate-in fade-in zoom-in-95 duration-150"
            style={{
              top: panelBox.top,
              left: panelBox.left,
              width: panelBox.width,
              maxWidth: "36rem",
            }}
          >
            {panelBody}
            {clearRow ? (
              <div className="mt-4 border-t border-border pt-3">{clearRow}</div>
            ) : null}
          </div>,
          document.body
        )
      : null;

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
          "flex flex-nowrap items-center gap-2 overflow-x-auto sm:gap-3",
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
          <span className="shrink-0 text-xs text-muted-foreground">{summary}</span>
        ) : null}
      </div>

      {!canHover && open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[100] bg-black/40 animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
            aria-label="Close filters"
          />
          <div
            id={panelId}
            ref={sheetRef}
            role="dialog"
            aria-label={label}
            aria-modal="true"
            className="fixed inset-x-0 bottom-0 z-[101] flex max-h-[min(85vh,100dvh)] flex-col rounded-t-2xl border border-border bg-white shadow-2xl animate-in slide-in-from-bottom duration-300 ease-out"
          >
            <div className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-border" aria-hidden />
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3">
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
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {panelBody}
            </div>
            <div className="flex shrink-0 gap-2 border-t border-border px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
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

      {desktopPanel}
    </div>
  );
}
