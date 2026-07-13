"use client";

import { InfoTip } from "@/components/ui/info-tip";
import { cn } from "@/lib/utils";

type StatTileProps = {
  label: string;
  value: string | number;
  sub?: string;
  tip?: string;
  className?: string;
  valueClassName?: string;
};

export function StatTile({
  label,
  value,
  sub,
  tip,
  className,
  valueClassName,
}: StatTileProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-white px-3 py-6 text-center sm:px-4 sm:py-7",
        className
      )}
    >
      <p
        className={cn(
          "text-2xl font-bold tabular-nums sm:text-3xl lg:text-4xl",
          valueClassName
        )}
      >
        {value}
      </p>
      <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide text-foreground uppercase sm:text-xs">
        {label}
        {tip ? <InfoTip label={tip} iconClassName="size-6" /> : null}
      </p>
      {sub ? (
        <p className="mt-0.5 text-[11px] text-muted-foreground">{sub}</p>
      ) : null}
    </div>
  );
}
