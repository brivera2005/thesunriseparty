"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Compass, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { isWizardDone, markWizardDone } from "@/lib/wizard";
import { cn } from "@/lib/utils";

/**
 * First-visit homepage nudge. Shown once until dismissed or tour is taken.
 * Uses localStorage key sunrise-wizard-done.
 */
export function WizardPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isWizardDone()) setVisible(true);
  }, []);

  if (!visible) return null;

  function dismiss() {
    markWizardDone();
    setVisible(false);
  }

  return (
    <div
      className="relative border-b border-navy/10 bg-gradient-to-r from-[#0b1f3a] via-[#3a2848] to-[#c45a28] text-white"
      role="region"
      aria-label="New visitor tour invitation"
    >
      <div className="page-container flex flex-col gap-3 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
        <div className="min-w-0 pr-10 sm:pr-0">
          <p className="text-sm font-semibold tracking-tight">
            New here? Start with a short tour.
          </p>
          <p className="mt-0.5 text-xs text-white/75 sm:text-sm">
            Ten plain-English stops. Skip anytime.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/start"
            onClick={() => markWizardDone()}
            className={cn(
              buttonVariants({ size: "sm" }),
              "min-h-10 gap-1.5 bg-white text-navy hover:bg-white/90"
            )}
          >
            <Compass className="size-3.5" aria-hidden />
            Take the tour
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            Not now
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="absolute top-2.5 right-3 inline-flex size-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white sm:static"
            aria-label="Dismiss tour invitation"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
