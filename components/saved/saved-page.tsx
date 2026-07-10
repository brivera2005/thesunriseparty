"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  AlertTriangle,
  Heart,
  MessageSquareQuote,
  Trash2,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  clearSaved,
  getSavedItems,
  removeSaved,
  SAVED_ITEMS_CHANGED,
  type SavedItem,
} from "@/lib/saved-items";
import { cn } from "@/lib/utils";

function SavedItemRow({ item, onRemove }: { item: SavedItem; onRemove: () => void }) {
  return (
    <Card className="border-border">
      <CardContent className="flex items-start gap-3 p-4">
        {item.type === "event" ? (
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" />
        ) : (
          <MessageSquareQuote className="mt-0.5 size-4 shrink-0 text-sunrise" />
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-[9px] uppercase">
              {item.type === "event" ? "Tracker" : "Rebuttal"}
            </Badge>
            <span className="text-[10px] text-muted-foreground">
              Saved {new Date(item.savedAt).toLocaleDateString()}
            </span>
          </div>
          <Link
            href={item.href}
            className="line-clamp-2 text-sm font-medium leading-snug hover:text-primary hover:underline"
          >
            {item.title}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => {
            removeSaved(item.type, item.id);
            onRemove();
          }}
          className="shrink-0 rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-destructive"
          aria-label="Remove from saved"
        >
          <Trash2 className="size-3.5" />
        </button>
      </CardContent>
    </Card>
  );
}

export function SavedPage() {
  const [items, setItems] = useState<SavedItem[]>([]);

  const refresh = useCallback(() => {
    setItems(getSavedItems());
  }, []);

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener(SAVED_ITEMS_CHANGED, handler);
    return () => window.removeEventListener(SAVED_ITEMS_CHANGED, handler);
  }, [refresh]);

  const events = items.filter((i) => i.type === "event");
  const rebuttals = items.filter((i) => i.type === "rebuttal");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-destructive/5 to-background">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-6 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Sunrise
            </Link>
            <div className="flex items-start gap-3">
              <Heart className="size-8 shrink-0 fill-destructive/20 text-destructive" />
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">My Saved</h1>
                <p className="mt-2 text-muted-foreground">
                  Events and rebuttals you bookmarked - stored locally in your browser.
                </p>
              </div>
            </div>
            {items.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="mt-6 gap-2"
                onClick={() => {
                  clearSaved();
                  refresh();
                }}
              >
                <Trash2 className="size-3.5" />
                Clear all
              </Button>
            )}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
            {items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border py-16 text-center">
                <Heart className="mx-auto mb-4 size-10 text-muted-foreground/40" />
                <p className="font-medium">Nothing saved yet</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tap the heart icon on any tracker event or rebuttal to save it here.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link href="/tracker" className={buttonVariants({ size: "sm" })}>
                    Browse Tracker
                  </Link>
                  <Link
                    href="/rebuttal"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    Rebuttal Desk
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {events.length > 0 && (
                  <div>
                    <h2 className="mb-4 text-lg font-semibold">
                      Tracker Events ({events.length})
                    </h2>
                    <div className="space-y-2">
                      {events.map((item) => (
                        <SavedItemRow key={`${item.type}-${item.id}`} item={item} onRemove={refresh} />
                      ))}
                    </div>
                  </div>
                )}
                {rebuttals.length > 0 && (
                  <div>
                    <h2 className="mb-4 text-lg font-semibold">
                      Rebuttals ({rebuttals.length})
                    </h2>
                    <div className="space-y-2">
                      {rebuttals.map((item) => (
                        <SavedItemRow key={`${item.type}-${item.id}`} item={item} onRemove={refresh} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
