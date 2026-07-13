import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { InfoTip } from "@/components/ui/info-tip";
import { cn } from "@/lib/utils";
import type { SectionId } from "@/lib/section-theme";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tip?: string;
  backHref?: string;
  backLabel?: string;
  actions?: ReactNode;
  eyebrowClassName?: string;
  className?: string;
  /** Tighter vertical padding for content-heavy pages (e.g. Rebuttal) */
  compact?: boolean;
  /** Kept for call-site compatibility; chrome is neutral navy/gray */
  section?: SectionId;
  /** @deprecated Prefer `section`; kept for call-site compatibility */
  tone?: "default" | "sunrise" | "amber" | "critical";
};

export function PageHero({
  eyebrow,
  title,
  description,
  tip,
  backHref = "/",
  backLabel = "Back to Project Sunrise",
  actions,
  eyebrowClassName,
  className,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border border-l-4 border-l-navy/25 bg-white",
        className
      )}
    >
      <div
        className={cn(
          "page-container",
          compact ? "py-4 sm:py-7" : "py-5 sm:py-8"
        )}
      >
        <Link
          href={backHref}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mb-2 h-8 gap-1.5 px-2 text-xs text-muted-foreground sm:mb-3 sm:h-9 sm:px-3 sm:text-sm"
          )}
        >
          <ArrowLeft className="size-3.5" />
          {backLabel}
        </Link>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 max-w-2xl">
            <p
              className={cn(
                "mb-1 text-[10px] font-semibold tracking-[0.2em] text-navy/55 uppercase sm:mb-1.5 sm:text-xs sm:tracking-[0.22em]",
                eyebrowClassName
              )}
            >
              {eyebrow}
            </p>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-bold tracking-tight text-navy sm:text-2xl lg:text-3xl">
                {title}
              </h1>
              {tip ? <InfoTip label={tip} /> : null}
            </div>
            <p className="mt-1.5 text-xs leading-snug text-muted-foreground sm:mt-2 sm:text-sm sm:leading-relaxed">
              {description}
            </p>
          </div>
          {actions ? (
            <div className="w-full shrink-0 sm:w-auto">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
