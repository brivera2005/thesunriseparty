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

/** Primary nav only - Start / Contribute / Donate live in the footer. */
const siteNav: {
  label: string;
  href: string;
  description: string;
  /** Extra path prefixes that count as active (About group). */
  activePrefixes?: string[];
}[] = [
  {
    label: "Tracker",
    href: "/tracker",
    description: "Project 2025 Tracker - admin actions scored by severity.",
  },
  {
    label: "Rebuttal",
    href: "/rebuttal",
    description: "Rebuttal Desk - when they say X, you say Y.",
  },
  {
    label: "Legislation",
    href: "/legislation",
    description: "Live bills and party votes.",
    activePrefixes: ["/bills"],
  },
  {
    label: "History",
    href: "/history",
    description: "Hidden History - textbook vs. archives.",
  },
  {
    label: "Scenarios",
    href: "/scenarios",
    description: "Family gets Y. Should get Z.",
  },
  {
    label: "Blueprint",
    href: "/blueprint",
    description: "The fix and the gaslight exposed.",
  },
  {
    label: "About",
    href: "/mission",
    description: "Mission, accountability, and methodology.",
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
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      {/* Top row: logo + search */}
      <div className="page-container flex items-center justify-between gap-4 py-3.5 sm:py-4">
        <Link
          href="/"
          className="flex min-w-0 items-center"
          aria-label="Project Sunrise home"
        >
          <BrandLogo variant="header" priority />
        </Link>

        <div className="flex items-center gap-1.5">
          <Tooltip>
            <TooltipTrigger
              delay={180}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "hidden h-8 gap-1.5 px-2.5 text-xs text-navy/70 hover:bg-black/[0.04] hover:text-navy sm:inline-flex"
              )}
              onClick={() => setCommandOpen(true)}
              aria-label="Search"
            >
              <Search className="size-3.5" />
              <span>Search</span>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Search rebuttals, tracker, legislation, history, and blueprint.
            </TooltipContent>
          </Tooltip>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCommandOpen(true)}
            className="size-9 text-navy/70 hover:bg-black/[0.04] hover:text-navy sm:hidden"
            aria-label="Search the site"
            title="Search the site"
          >
            <Search className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Compact nav under logo - text row desktop / 2-col mobile */}
      <nav className="border-t border-black/[0.05]" aria-label="Site sections">
        <div className="page-container py-2 sm:py-2.5">
          {/* Mobile: clean 2-col text grid */}
          <ul className="grid grid-cols-2 gap-x-1 gap-y-0.5 sm:hidden">
            {siteNav.map((item) => {
              const active = pathActive(
                pathname,
                item.href,
                item.activePrefixes
              );
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-9 items-center justify-center rounded-md px-2 text-[12px] tracking-wide transition-colors",
                      active
                        ? "bg-black/[0.05] font-semibold text-navy"
                        : "font-medium text-navy/65 hover:bg-black/[0.03] hover:text-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop/tablet: elegant text row with hairline separators */}
          <ul className="hidden items-center justify-center sm:flex sm:gap-0">
            {siteNav.map((item, i) => {
              const active = pathActive(
                pathname,
                item.href,
                item.activePrefixes
              );
              return (
                <li key={item.href} className="flex items-center">
                  {i > 0 ? (
                    <span
                      aria-hidden
                      className="mx-1 h-3 w-px shrink-0 bg-black/10 sm:mx-1.5 lg:mx-2"
                    />
                  ) : null}
                  <Tooltip>
                    <TooltipTrigger
                      delay={160}
                      closeOnClick
                      className={cn(
                        "relative rounded-md px-2 py-1.5 text-[12px] tracking-wide transition-colors lg:px-2.5 lg:text-[13px]",
                        active
                          ? "font-semibold text-navy"
                          : "font-medium text-navy/60 hover:bg-black/[0.04] hover:text-navy"
                      )}
                      render={<Link href={item.href} />}
                    >
                      {item.label}
                      {active ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-2 -bottom-0.5 h-px bg-navy/80 lg:inset-x-2.5"
                        />
                      ) : null}
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
