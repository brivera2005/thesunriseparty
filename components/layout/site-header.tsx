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
import {
  blueprintAccent,
  sunriseAccent,
} from "@/lib/sunrise-accent";
import { cn } from "@/lib/utils";

type NavGroup = "live" | "learn" | "fix" | "meta";

type NavItem = {
  label: string;
  href: string;
  description: string;
  group: NavGroup;
  /** Blueprint stays blue THE FIX (not in dawn sequence). */
  highlight?: "blueprint";
  /** Extra path prefixes that count as active (About group). */
  activePrefixes?: string[];
};

/** Primary desktop + hamburger order: LIVE → LEARN → FIX → About. */
const siteNav: NavItem[] = [
  {
    label: "Tracker",
    href: "/tracker",
    description: "Project 2025 Tracker - admin actions scored by severity.",
    group: "live",
  },
  {
    label: "Legislation",
    href: "/legislation",
    description: "Live bills and party votes.",
    group: "live",
    activePrefixes: ["/bills"],
  },
  {
    label: "Rebuttal",
    href: "/rebuttal",
    description: "Rebuttal Desk - when they say X, you say Y.",
    group: "learn",
  },
  {
    label: "Quiz",
    href: "/quiz",
    description: "Political Standing Quiz - find where you actually stand.",
    group: "learn",
  },
  {
    label: "Distracted",
    href: "/distracted",
    description: "Distraction Watch - shiny object vs what it buries.",
    group: "learn",
  },
  {
    label: "History",
    href: "/history",
    description: "Hidden History - textbook vs. archives.",
    group: "learn",
  },
  {
    label: "Scenarios",
    href: "/scenarios",
    description: "Family gets Y. Should get Z.",
    group: "learn",
  },
  {
    label: "Blueprint",
    href: "/blueprint",
    description: "The fix and the gaslight exposed.",
    group: "fix",
    highlight: "blueprint",
  },
  {
    label: "About",
    href: "/mission",
    description: "Mission, accountability, and methodology.",
    group: "meta",
    activePrefixes: ["/accountability", "/methodology"],
  },
];

const GROUP_LABEL: Record<Exclude<NavGroup, "meta">, string> = {
  live: "Live",
  learn: "Learn",
  fix: "Fix",
};

const DESKTOP_GROUPS: {
  id: Exclude<NavGroup, "meta">;
  label: string;
  items: NavItem[];
}[] = [
  {
    id: "live",
    label: "LIVE",
    items: siteNav.filter((n) => n.group === "live"),
  },
  {
    id: "learn",
    label: "LEARN",
    items: siteNav.filter((n) => n.group === "learn"),
  },
  {
    id: "fix",
    label: "FIX",
    items: siteNav.filter((n) => n.group === "fix"),
  },
];

const aboutNav = siteNav.find((n) => n.group === "meta")!;

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

function navAccentFor(item: NavItem, sunriseIndex: number, sunriseTotal: number) {
  if (item.highlight === "blueprint") return blueprintAccent();
  return sunriseAccent(sunriseIndex, sunriseTotal);
}

function sunriseIndexFor(item: NavItem) {
  let idx = 0;
  for (const n of siteNav) {
    if (n.href === item.href) return idx;
    if (n.highlight !== "blueprint") idx += 1;
  }
  return idx;
}

function NavLink({
  item,
  sunriseTotal,
  compact,
}: {
  item: NavItem;
  sunriseTotal: number;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const active = pathActive(pathname, item.href, item.activePrefixes);
  const sunriseIndex = sunriseIndexFor(item);
  const { accent } = navAccentFor(item, sunriseIndex, sunriseTotal);
  const isBlueprint = item.highlight === "blueprint";

  return (
    <Tooltip>
      <TooltipTrigger
        delay={160}
        closeOnClick
        className={cn(
          "relative rounded-md tracking-wide transition-colors",
          compact
            ? "px-1.5 py-1 text-[12px] xl:px-2 xl:text-[13px]"
            : "px-1.5 py-1.5 text-[12px] xl:px-2 xl:text-[13px]",
          active
            ? "font-semibold text-navy"
            : "font-medium text-navy/60 hover:bg-black/[0.04] hover:text-navy",
          isBlueprint && !active && "text-[#1d4ed8]/80 hover:text-[#1d4ed8]",
          isBlueprint && active && "text-[#1d4ed8]"
        )}
        style={
          active ? undefined : { boxShadow: `inset 0 -2px 0 0 ${accent}` }
        }
        render={<Link href={item.href} />}
      >
        {item.label}
        {active ? (
          <span
            aria-hidden
            className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full xl:inset-x-2"
            style={{ backgroundColor: accent }}
          />
        ) : null}
      </TooltipTrigger>
      <TooltipContent side="bottom">{item.description}</TooltipContent>
    </Tooltip>
  );
}

function GroupBracket({ label }: { label: string }) {
  return (
    <div
      className="mt-0.5 flex h-3.5 w-full items-center gap-1.5"
      aria-hidden
    >
      <span className="h-px min-w-[0.5rem] flex-1 bg-navy/18" />
      <span className="shrink-0 text-[9px] font-bold tracking-[0.16em] text-navy/40 uppercase">
        {label}
      </span>
      <span className="h-px min-w-[0.5rem] flex-1 bg-navy/18" />
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const sunriseTotal = siteNav.filter((n) => n.highlight !== "blueprint").length;

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
      {/* Logo | grouped nav (desktop) | hamburger + search (mobile) */}
      <div className="page-container relative flex h-14 items-center gap-3 sm:h-16 sm:gap-4 lg:h-[4.25rem]">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Project Sunrise home"
        >
          <BrandLogo variant="header" priority />
        </Link>

        {/* Desktop: group clusters with LIVE / LEARN / FIX under-brackets */}
        <nav
          className="hidden min-w-0 flex-1 items-end justify-center pb-1 lg:flex"
          aria-label="Site sections"
        >
          <div className="flex flex-wrap items-end justify-center gap-x-2 gap-y-1 xl:gap-x-3">
            {DESKTOP_GROUPS.map((group, gi) => (
              <div key={group.id} className="flex items-end gap-x-2 xl:gap-x-3">
                {gi > 0 ? (
                  <span
                    aria-hidden
                    className="mb-5 h-3.5 w-px shrink-0 bg-black/12"
                  />
                ) : null}
                <div className="flex min-w-0 flex-col items-stretch">
                  <ul className="flex items-center justify-center gap-0">
                    {group.items.map((item, i) => (
                      <li key={item.href} className="flex items-center">
                        {i > 0 ? (
                          <span
                            aria-hidden
                            className="mx-0.5 h-3 w-px shrink-0 bg-black/8 xl:mx-1"
                          />
                        ) : null}
                        <NavLink item={item} sunriseTotal={sunriseTotal} compact />
                      </li>
                    ))}
                  </ul>
                  <GroupBracket label={group.label} />
                </div>
              </div>
            ))}
            {/* About: after FIX, unlabeled */}
            <div className="flex items-end gap-x-2 xl:gap-x-3">
              <span
                aria-hidden
                className="mb-5 h-3.5 w-px shrink-0 bg-black/12"
              />
              <div className="flex flex-col items-stretch">
                <ul className="flex items-center">
                  <li>
                    <NavLink item={aboutNav} sunriseTotal={sunriseTotal} compact />
                  </li>
                </ul>
                <div className="mt-0.5 h-3.5" aria-hidden />
              </div>
            </div>
          </div>
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

          {/* Mobile dropdown: LIVE / LEARN / FIX divider labels */}
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
                {siteNav.map((item, i) => {
                  const active = pathActive(
                    pathname,
                    item.href,
                    item.activePrefixes
                  );
                  const sunriseIndex = sunriseIndexFor(item);
                  const { accent, wash } = navAccentFor(
                    item,
                    sunriseIndex,
                    sunriseTotal
                  );
                  const isBlueprint = item.highlight === "blueprint";
                  const prevGroup = i > 0 ? siteNav[i - 1].group : null;
                  const showGroup =
                    item.group !== "meta" &&
                    (i === 0 || item.group !== prevGroup);

                  return (
                    <li key={item.href}>
                      {showGroup ? (
                        <p
                          className="px-4 pt-2.5 pb-1 text-[10px] font-bold tracking-[0.14em] text-navy/40 uppercase"
                          aria-hidden
                        >
                          {GROUP_LABEL[item.group]}
                        </p>
                      ) : null}
                      <Link
                        href={item.href}
                        className={cn(
                          "flex min-h-11 items-center px-4 text-[14px] tracking-wide transition-colors",
                          active
                            ? "font-semibold text-navy"
                            : "font-medium text-navy/70 hover:text-navy",
                          isBlueprint && !active && "text-[#1d4ed8]/85",
                          isBlueprint && active && "text-[#1d4ed8]"
                        )}
                        style={{
                          backgroundImage: active
                            ? `linear-gradient(90deg, ${wash} 0%, transparent 70%)`
                            : undefined,
                          backgroundColor: active
                            ? undefined
                            : "transparent",
                          boxShadow: `inset 3px 0 0 0 ${accent}`,
                        }}
                        onMouseEnter={(e) => {
                          if (!active) {
                            e.currentTarget.style.backgroundImage = `linear-gradient(90deg, ${wash} 0%, transparent 70%)`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!active) {
                            e.currentTarget.style.backgroundImage = "";
                          }
                        }}
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
