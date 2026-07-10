"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AlertTriangle,
  Compass,
  History,
  Menu,
  MessageSquareQuote,
  Search,
  X,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Rebuttal Desk", href: "/rebuttal", isPage: true, accent: "text-sunrise" },
  { label: "The Tracker", href: "/tracker", isPage: true, mode: "tracker" as const },
  { label: "The Blueprint", href: "/blueprint", isPage: true, mode: "blueprint" as const },
  { label: "Hidden History", href: "/history", isPage: true, accent: "text-amber-600 dark:text-amber-400" },
  { label: "Mission", href: "/mission", isPage: true },
];

export function SiteHeader() {
  const pathname = usePathname();
  const mode = useAppStore((s) => s.mode);
  const setMode = useAppStore((s) => s.setMode);
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-left">
          <Image
            src="/logo.png"
            alt="The Sunrise Party — A New Beginning. Restoring Democracy."
            width={44}
            height={44}
            className="size-10 shrink-0 rounded-lg object-contain sm:size-11"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-sm leading-none font-semibold">Project Sunrise</p>
            <p className="text-[10px] text-muted-foreground">
              A New Beginning. Restoring Democracy.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => item.mode && setMode(item.mode)}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                pathname === item.href &&
                  (item.mode === "tracker"
                    ? "text-destructive"
                    : item.mode === "blueprint"
                      ? "text-primary"
                      : (item.accent ?? "text-primary"))
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCommandOpen(true)}
            className="hidden gap-2 sm:inline-flex"
          >
            <Search className="size-3.5" />
            <span className="text-muted-foreground">Search</span>
            <kbd className="pointer-events-none hidden rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium lg:inline-block">
              Ctrl+K
            </kbd>
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setCommandOpen(true)}
            className="sm:hidden"
          >
            <Search className="size-4" />
          </Button>

          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </Button>

          <div className="hidden rounded-lg border border-border bg-muted/30 p-0.5 sm:flex">
            <button
              type="button"
              onClick={() => setMode("tracker")}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all duration-200",
                mode === "tracker"
                  ? "bg-destructive text-destructive-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <AlertTriangle className="size-3" />
              <span className="hidden sm:inline">Tracker</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("blueprint")}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all duration-200",
                mode === "blueprint"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Compass className="size-3" />
              <span className="hidden sm:inline">Blueprint</span>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent
          className="fixed top-0 right-0 left-auto h-full w-[min(100vw-2rem,320px)] max-w-none translate-x-0 translate-y-0 rounded-none border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
          aria-label="Mobile navigation menu"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Menu
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <nav className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (item.mode) setMode(item.mode);
                  setMobileOpen(false);
                }}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === item.href &&
                    (item.mode === "tracker"
                      ? "text-destructive"
                      : item.mode === "blueprint"
                        ? "text-primary"
                        : "bg-accent text-primary")
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              <Button
                size="sm"
                variant={mode === "tracker" ? "default" : "outline"}
                className={cn("flex-1", mode === "tracker" && "bg-destructive hover:bg-destructive/90")}
                onClick={() => {
                  setMode("tracker");
                  setMobileOpen(false);
                }}
              >
                <AlertTriangle className="size-3.5" />
                Tracker
              </Button>
              <Button
                size="sm"
                variant={mode === "blueprint" ? "default" : "outline"}
                className="flex-1"
                onClick={() => {
                  setMode("blueprint");
                  setMobileOpen(false);
                }}
              >
                <Compass className="size-3.5" />
                Blueprint
              </Button>
            </div>
          </nav>
        </DialogContent>
      </Dialog>
    </header>
  );
}
