import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  /** Hide footer on rare embed-like pages */
  hideFooter?: boolean;
};

/** Shared chrome so every route feels like one product on every breakpoint. */
export function PageShell({
  children,
  className,
  hideFooter = false,
}: PageShellProps) {
  return (
    <div className={cn("min-h-screen bg-white text-foreground", className)}>
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />
      <main id="main-content">{children}</main>
      {!hideFooter ? <SiteFooter /> : null}
    </div>
  );
}

