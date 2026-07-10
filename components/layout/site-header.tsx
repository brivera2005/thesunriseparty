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
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Rebuttal Desk", href: "/rebuttal", accent: "text-sunrise" },
  { label: "The Tracker", href: "/tracker" },
  { label: "The Blueprint", href: "/blueprint" },
  { label: "Hidden History", href: "/history", accent: "text-amber-600" },
  { label: "Mission", href: "/mission" },
  { label: "Donate", href: "/donate", accent: "text-primary" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-border bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center py-0.5" aria-label="Project Sunrise home">
          <BrandLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "h-9 px-2.5 text-[0.8rem]",
                pathname === item.href && (item.accent ?? "text-primary")
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCommandOpen(true)}
            className="hidden h-9 gap-2 sm:inline-flex"
            aria-label="Search"
          >
            <Search className="size-3.5" />
            <span className="text-muted-foreground">Search</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCommandOpen(true)}
            className="size-11 sm:hidden"
            aria-label="Search"
          >
            <Search className="size-4" />
          </Button>

          <Link
            href="/donate"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden h-9 gap-1.5 sm:inline-flex"
            )}
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
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === item.href && "bg-accent text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </header>
  );
}
