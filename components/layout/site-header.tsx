"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button, buttonVariants } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/** Primary desktop nav. Tour lives in the hamburger (and footer) so tabs stay for power users. */
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
    label: "Quiz",
    href: "/quiz",
    description: "Political Standing Quiz - find where you actually stand.",
  },
  {
    label: "Distracted",
    href: "/distracted",
    description: "Distraction Watch - shiny object vs what it buries.",
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    function onPointer(e: MouseEvent | TouchEvent) {
      const el = menuRef.current;
      if (el && !el.contains(e.target as Node)) setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      {/* Single top bar: logo | nav (desktop) | hamburger + search (mobile) */}
      <div className="page-container relative flex h-14 items-center gap-3 sm:h-16 sm:gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Project Sunrise home"
        >
          <BrandLogo variant="header" priority />
        </Link>

        {/* Desktop: inline section links on the same row */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
          aria-label="Site sections"
        >
          <ul className="flex flex-wrap items-center justify-center gap-0">
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
                      className="mx-1 h-3 w-px shrink-0 bg-black/10 lg:mx-1.5"
                    />
                  ) : null}
                  <Tooltip>
                    <TooltipTrigger
                      delay={160}
                      closeOnClick
                      className={cn(
                        "relative rounded-md px-1.5 py-1.5 text-[12px] tracking-wide transition-colors xl:px-2 xl:text-[13px]",
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
                          className="absolute inset-x-1.5 -bottom-0.5 h-px bg-navy/80 xl:inset-x-2"
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
        </nav>

        {/* Spacer on mobile so actions sit far right */}
        <div className="min-w-0 flex-1 lg:hidden" aria-hidden />

        <div className="relative flex shrink-0 items-center gap-0.5" ref={menuRef}>
          {/* Mobile/tablet: hamburger LEFT of search */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((o) => !o)}
            className="size-9 text-navy/70 hover:bg-black/[0.04] hover:text-navy lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-site-nav"
          >
            {mobileOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </Button>

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
              <span className="hidden lg:inline">Search</span>
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

          {/* Mobile dropdown: all primary nav items, only when open */}
          {mobileOpen ? (
            <nav
              id="mobile-site-nav"
              className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-[min(100vw-2rem,16rem)] rounded-xl border border-black/[0.08] bg-white py-1.5 shadow-lg lg:hidden"
              aria-label="Site sections"
            >
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/start"
                    className={cn(
                      "flex min-h-11 items-center px-4 text-[14px] tracking-wide transition-colors",
                      pathActive(pathname, "/start")
                        ? "bg-navy/[0.06] font-semibold text-navy"
                        : "font-medium text-navy/70 hover:bg-black/[0.03] hover:text-navy"
                    )}
                  >
                    Tour
                  </Link>
                </li>
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
                          "flex min-h-11 items-center px-4 text-[14px] tracking-wide transition-colors",
                          active
                            ? "bg-navy/[0.06] font-semibold text-navy"
                            : "font-medium text-navy/70 hover:bg-black/[0.03] hover:text-navy"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
