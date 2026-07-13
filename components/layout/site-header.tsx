"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button, buttonVariants } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  getSectionTheme,
  type SectionId,
} from "@/lib/section-theme";

/** Primary nav only - Start / Contribute / Donate live in the footer. */
const siteNav: {
  label: string;
  href: string;
  description: string;
  section: SectionId;
  /** Extra path prefixes that count as active (About group). */
  activePrefixes?: string[];
}[] = [
  {
    label: "Project 2025 Tracker",
    href: "/tracker",
    description: "Admin actions scored by severity.",
    section: "tracker",
  },
  {
    label: "Rebuttal Desk",
    href: "/rebuttal",
    description: "When they say X, you say Y.",
    section: "rebuttal",
  },
  {
    label: "Legislation",
    href: "/legislation",
    description: "Live bills and party votes.",
    section: "legislation",
    activePrefixes: ["/bills"],
  },
  {
    label: "Hidden History",
    href: "/history",
    description: "Textbook vs. archives.",
    section: "history",
  },
  {
    label: "Scenarios",
    href: "/scenarios",
    description: "Family gets Y. Should get Z.",
    section: "scenarios",
  },
  {
    label: "Blueprint",
    href: "/blueprint",
    description: "The fix and the gaslight exposed.",
    section: "blueprint",
  },
  {
    label: "About",
    href: "/mission",
    description: "Mission, accountability, and methodology.",
    section: "mission",
    activePrefixes: ["/accountability", "/methodology"],
  },
];

function pathActive(
  pathname: string,
  href: string,
  activePrefixes?: string[]
) {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  if (activePrefixes) {
    return activePrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
  }
  return false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90">
      {/* Top row: logo + search */}
      <div className="page-container flex items-center justify-between gap-2 py-2 sm:py-2.5">
        <Link
          href="/"
          className="flex min-w-0 items-center py-0.5"
          aria-label="Project Sunrise home"
        >
          <BrandLogo variant="header" priority />
        </Link>

        <div className="flex items-center gap-1.5">
          <Tooltip>
            <TooltipTrigger
              delay={180}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "hidden h-8 gap-1.5 border-border px-2.5 text-xs sm:inline-flex"
              )}
              onClick={() => setCommandOpen(true)}
              aria-label="Search"
            >
              <Search className="size-3.5" />
              <span className="text-muted-foreground">Search</span>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Search rebuttals, tracker, legislation, history, and blueprint.
            </TooltipContent>
          </Tooltip>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCommandOpen(true)}
            className="size-9 sm:hidden"
            aria-label="Search the site"
            title="Search the site"
          >
            <Search className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Compact nav grid under logo - same order on mobile + desktop */}
      <nav
        className="border-t border-border bg-white"
        aria-label="Site sections"
      >
        <div className="page-container py-1.5 sm:py-2">
          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-7">
            {siteNav.map((item) => {
              const active = pathActive(
                pathname,
                item.href,
                item.activePrefixes
              );
              const theme = getSectionTheme(item.section);
              return (
                <li key={item.href}>
                  <Tooltip>
                    <TooltipTrigger
                      delay={160}
                      closeOnClick
                      className={cn(
                        "flex h-7 w-full items-center justify-center rounded-md border px-1 text-center text-[10px] font-semibold leading-tight tracking-wide transition-colors sm:h-8 sm:text-[11px]",
                        active
                          ? "text-white shadow-sm"
                          : "border-border bg-white text-navy hover:bg-muted/60"
                      )}
                      style={
                        active
                          ? {
                              backgroundColor: theme.hex,
                              borderColor: theme.hex,
                            }
                          : {
                              borderLeftWidth: 2,
                              borderLeftColor: theme.hex,
                            }
                      }
                      render={<Link href={item.href} />}
                    >
                      {item.label}
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      {item.description}
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
