"use client";

import { Button } from "@/components/ui/button";
import { InfoTip } from "@/components/ui/info-tip";
import { cn } from "@/lib/utils";

export type FilterChipOption<T extends string> = {
  value: T;
  label: string;
  tip?: string;
};

type FilterChipsProps<T extends string> = {
  options: FilterChipOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  activeClassName?: string;
  label?: string;
  labelTip?: string;
};

export function FilterChips<T extends string>({
  options,
  value,
  onChange,
  className,
  activeClassName,
  label,
  labelTip,
}: FilterChipsProps<T>) {
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5 sm:gap-2", className)}>
      {label ? (
        <span className="mr-1 inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
          {labelTip ? <InfoTip label={labelTip} iconClassName="size-6" /> : null}
        </span>
      ) : null}
      {options.map((opt) => (
        <span key={opt.value} className="inline-flex items-center gap-0.5">
          <Button
            variant={value === opt.value ? "default" : "outline"}
            size="sm"
            className={cn(
              "h-9 min-h-9 text-xs",
              value === opt.value && activeClassName
            )}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </Button>
          {opt.tip ? (
            <InfoTip label={opt.tip} iconClassName="size-6" />
          ) : null}
        </span>
      ))}
    </div>
  );
}
