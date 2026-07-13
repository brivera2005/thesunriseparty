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
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border border-l-4 border-l-navy/25 bg-white",
        className
      )}
    >
      <div className="page-container py-8 sm:py-10">
        <Link
          href={backHref}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "mb-4 h-9 gap-2 text-muted-foreground"
          )}
        >
          <ArrowLeft className="size-3.5" />
          {backLabel}
        </Link>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p
              className={cn(
                "mb-1.5 text-xs font-semibold tracking-[0.22em] text-navy/55 uppercase",
                eyebrowClassName
              )}
            >
              {eyebrow}
            </p>
            <div className="flex items-center gap-1.5">
              <h1 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                {title}
              </h1>
              {tip ? <InfoTip label={tip} /> : null}
            </div>
            <p className="mt-2 text-sm text-muted-foreground sm:text-[0.95rem]">
              {description}
            </p>
          </div>
          {actions ? (
            <div className="flex flex-wrap items-center gap-2">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
