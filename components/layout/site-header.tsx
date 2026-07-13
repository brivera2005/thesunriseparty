"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, Menu, Search, X } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button, buttonVariants } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

/** Every core destination, always visible (no More dropdown). */
const siteNav: {
  label: string;
  href: string;
  description: string;
  section: SectionId;
}[] = [
  {
    label: "Rebuttal",
    href: "/rebuttal",
    description: "When they say X, you say Y.",
    section: "rebuttal",
  },
  {
    label: "History",
    href: "/history",
    description: "Textbook vs. archives.",
    section: "history",
  },
  {
    label: "Tracker",
    href: "/tracker",
    description: "Admin actions scored by severity.",
    section: "tracker",
  },
  {
    label: "Legislation",
    href: "/legislation",
    description: "Live bills and party votes.",
    section: "legislation",
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
    label: "Mission",
    href: "/mission",
    description: "Why we exist. How we stay honest.",
    section: "mission",
  },
  {
    label: "Accountability",
    href: "/accountability",
    description: "Dark money, courts, power.",
    section: "accountability",
  },
  {
    label: "Methodology",
    href: "/methodology",
    description: "How we score and verify.",
    section: "methodology",
  },
  {
    label: "Donate",
    href: "/donate",
    description: "Fund research and hosting.",
    section: "donate",
  },
  {
    label: "Contribute",
    href: "/contribute",
    description: "Sources, corrections, rebuttals.",
    section: "contribute",
  },
  {
    label: "Start",
    href: "/start",
    description: "A quick product walkthrough.",
    section: "start",
  },
];

function pathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90">
      <div className="page-container flex items-center justify-between gap-2 py-2.5 sm:gap-3 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 items-center py-0.5"
          aria-label="Project Sunrise home"
        >
          <BrandLogo variant="header" priority />
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Tooltip>
            <TooltipTrigger
              delay={180}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "hidden h-9 gap-2 border-border sm:inline-flex"
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
            className="size-11 sm:hidden"
            aria-label="Search the site"
            title="Search the site"
          >
            <Search className="size-4" />
          </Button>

          <Link
            href="/donate"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-9 gap-1.5 sm:inline-flex bg-[color:var(--section-donate)] text-white hover:bg-[color:var(--section-donate)]/90"
            )}
            title="Support Project Sunrise"
          >
            <Heart className="size-3.5" />
            Donate
          </Link>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileOpen(true)}
            className="size-11 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      {/* Desktop / tablet: even wrap grid of every section */}
      <nav
        className="hidden border-t border-border bg-white md:block"
        aria-label="Site sections"
      >
        <div className="page-container py-2">
          <ul className="grid grid-cols-4 gap-1.5 lg:grid-cols-6 xl:grid-cols-12">
            {siteNav.map((item) => {
              const active = pathActive(pathname, item.href);
              const theme = getSectionTheme(item.section);
              return (
                <li key={item.href}>
                  <Tooltip>
                    <TooltipTrigger
                      delay={160}
                      closeOnClick
                      className={cn(
                        "flex h-9 w-full items-center justify-center rounded-lg border px-1 text-center text-[11px] font-semibold tracking-wide transition-colors sm:text-xs",
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
                              borderLeftWidth: 3,
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

      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent
          className="fixed top-0 right-0 left-auto h-full w-[min(100vw-1rem,360px)] max-w-none translate-x-0 translate-y-0 rounded-none border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
          aria-label="Mobile navigation menu"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              All sections
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                className="size-11"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 overflow-y-auto pt-2 pb-6">
            <nav aria-label="Site sections">
              <ul className="grid grid-cols-2 gap-2 px-1">
                {siteNav.map((item) => {
                  const active = pathActive(pathname, item.href);
                  const theme = getSectionTheme(item.section);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex min-h-[4.25rem] flex-col justify-center rounded-xl border px-3 py-2.5 transition-colors",
                          active ? "text-white shadow-sm" : "bg-white text-navy"
                        )}
                        style={
                          active
                            ? {
                                backgroundColor: theme.hex,
                                borderColor: theme.hex,
                              }
                            : {
                                borderColor: `${theme.hex}55`,
                                borderLeftWidth: 4,
                                borderLeftColor: theme.hex,
                                backgroundColor: theme.soft,
                              }
                        }
                      >
                        <span className="text-sm font-semibold leading-tight">
                          {item.label}
                        </span>
                        <span
                          className={cn(
                            "mt-1 line-clamp-2 text-[10px] leading-snug",
                            active ? "text-white/85" : "text-muted-foreground"
                          )}
                        >
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link
              href="/donate"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants(),
                "mx-1 h-11 gap-2 bg-[color:var(--section-donate)] text-white hover:bg-[color:var(--section-donate)]/90"
              )}
            >
              <Heart className="size-4" />
              Donate
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
