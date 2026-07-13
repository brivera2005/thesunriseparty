import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { InfoTip } from "@/components/ui/info-tip";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tip?: string;
  action?: ReactNode;
  align?: "left" | "center";
  eyebrowClassName?: string;
  className?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  tip,
  action,
  align = "left",
  eyebrowClassName,
  className,
  titleAs = "h2",
}: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <div
      className={cn(
        "mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8",
        align === "center" && "flex-col items-center text-center",
        className
      )}
    >
      <div className={cn(align === "center" && "mx-auto max-w-xl")}>
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.22em] text-primary uppercase",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
        <div
          className={cn(
            "mt-1.5 flex items-center gap-1.5 sm:mt-2",
            align === "center" && "justify-center"
          )}
        >
          <TitleTag className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
            {title}
          </TitleTag>
          {tip ? <InfoTip label={tip} /> : null}
        </div>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-[0.95rem]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
