import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { InfoTip } from "@/components/ui/info-tip";
import { cn } from "@/lib/utils";

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
  tone?: "default" | "sunrise" | "amber" | "critical";
};

const toneGradients: Record<NonNullable<PageHeroProps["tone"]>, string> = {
  default: "bg-gradient-to-b from-primary/5 to-white",
  sunrise: "bg-gradient-to-b from-sunrise/5 to-white",
  amber: "bg-gradient-to-b from-amber-500/5 to-white",
  critical: "bg-gradient-to-b from-destructive/5 to-white",
};

const toneEyebrows: Record<NonNullable<PageHeroProps["tone"]>, string> = {
  default: "text-primary",
  sunrise: "text-sunrise",
  amber: "text-amber-700",
  critical: "text-destructive",
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
  tone = "default",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border",
        toneGradients[tone],
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
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
                "mb-1.5 text-xs font-semibold tracking-[0.22em] uppercase",
                toneEyebrows[tone],
                eyebrowClassName
              )}
            >
              {eyebrow}
            </p>
            <div className="flex items-center gap-1.5">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
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
