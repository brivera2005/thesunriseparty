import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Single-row action strip for PageHero; stays on one line on mobile. */
export function HeroActions({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-nowrap items-center gap-1 overflow-x-auto sm:w-auto sm:gap-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Compact icon+label styling for hero action buttons and links. */
export const heroActionClass =
  "inline-flex h-8 shrink-0 items-center gap-1 whitespace-nowrap px-2 text-xs";
