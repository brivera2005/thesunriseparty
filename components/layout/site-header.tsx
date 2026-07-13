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

const navItems: {
  label: string;
  href: string;
  description: string;
}[] = [
  {
    label: "Rebuttal Desk",
    href: "/rebuttal",
    description: "Copy-ready counters to common claims, every response sourced.",
  },
  {
    label: "The Tracker",
    href: "/tracker",
    description: "Executive actions scored by severity with primary-source receipts.",
  },
  {
    label: "The Blueprint",
    href: "/blueprint",
    description: "Progressive policy pillars with timelines and irreversible safeguards.",
  },
  {
    label: "Hidden History",
    href: "/history",
    description: "Textbook narrative vs. what the archives actually document.",
  },
  {
    label: "Mission",
    href: "/mission",
    description: "Why we exist, how we cite, and how we stay accountable.",
  },
  {
    label: "Donate",
    href: "/donate",
    description: "Keep the receipts public. Fund research and verification.",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-border bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90">
      <div className="page-container flex items-center justify-between gap-2 py-2.5 sm:gap-3 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center py-0.5" aria-label="Project Sunrise home">
          <BrandLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger
                delay={180}
                closeOnClick
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "h-9 border-0 px-2.5 text-[0.8rem]",
                  pathname === item.href && "text-primary"
                )}
                render={
                  <Link href={item.href} />
                }
              >
                {item.label}
              </TooltipTrigger>
              <TooltipContent side="bottom">{item.description}</TooltipContent>
            </Tooltip>
          ))}
        </nav>

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
              Search rebuttals, tracker events, history, and blueprint policies.
            </TooltipContent>
          </Tooltip>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCommandOpen(true)}
            className="size-11 sm:hidden"
            aria-label="Search the site"
            title="Search rebuttals, tracker, history, and blueprint"
          >
            <Search className="size-4" />
          </Button>

          <Link
            href="/donate"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden h-9 gap-1.5 sm:inline-flex"
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
            className="size-11 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent
          className="fixed top-0 right-0 left-auto h-full w-[min(100vw-1.5rem,300px)] max-w-none translate-x-0 translate-y-0 rounded-none border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
          aria-label="Mobile navigation menu"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Menu
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
          <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex min-h-11 flex-col justify-center rounded-lg px-4 py-2.5 transition-colors hover:bg-accent",
                  pathname === item.href && "bg-accent text-primary"
                )}
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                  {item.description}
                </span>
              </Link>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </header>
  );
}
