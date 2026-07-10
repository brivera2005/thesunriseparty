"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  Compass,
  History,
  MessageSquareQuote,
  Shield,
  Pin,
  PinOff,
  Clock,
  X,
  Heart,
} from "lucide-react";
import { useAppStore } from "@/lib/store";
import {
  searchContent,
  highlightMatches,
  searchTypeBadgeStyles,
  type SearchResultType,
  type SearchResult,
} from "@/lib/search";
import {
  addRecentSearch,
  clearRecentSearches,
  getPinnedItems,
  getRecentSearches,
  isPinned,
  removePin,
  togglePin,
  type PalettePin,
} from "@/lib/command-palette-prefs";
import {
  getSavedItems,
  SAVED_ITEMS_CHANGED,
  type SavedItem,
} from "@/lib/saved-items";
import { Badge } from "@/components/ui/badge";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const typeIcons: Record<SearchResultType, React.ReactNode> = {
  Tracker: <AlertTriangle className="size-4 text-destructive" />,
  Blueprint: <Compass className="size-4 text-primary" />,
  Rebuttal: <MessageSquareQuote className="size-4 text-sunrise" />,
  Safeguard: <Shield className="size-4 text-primary" />,
  History: <History className="size-4 text-amber-600" />,
};

function toSearchResult(pin: PalettePin): SearchResult {
  return {
    id: pin.id,
    type: pin.type,
    title: pin.title,
    body: "",
    score: 1,
    href: pin.href,
    anchor: pin.anchor,
  };
}

export function CommandPalette() {
  const open = useAppStore((s) => s.commandOpen);
  const setOpen = useAppStore((s) => s.setCommandOpen);
  const setMode = useAppStore((s) => s.setMode);
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [pinnedItems, setPinnedItems] = useState<PalettePin[]>([]);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const refreshPrefs = useCallback(() => {
    setRecentSearches(getRecentSearches());
    setPinnedItems(getPinnedItems());
    setSavedItems(getSavedItems());
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) setQuery("");
    else refreshPrefs();
  }, [open, refreshPrefs]);

  useEffect(() => {
    const handler = () => refreshPrefs();
    window.addEventListener(SAVED_ITEMS_CHANGED, handler);
    return () => window.removeEventListener(SAVED_ITEMS_CHANGED, handler);
  }, [refreshPrefs]);

  const results = useMemo(
    () => (query.trim() ? searchContent(query, 30) : []),
    [query]
  );

  const grouped = useMemo(() => {
    const groups: Record<SearchResultType, typeof results> = {
      Tracker: [],
      Blueprint: [],
      Rebuttal: [],
      Safeguard: [],
      History: [],
    };
    for (const r of results) {
      groups[r.type].push(r);
    }
    return groups;
  }, [results]);

  const navigateTo = (item: SearchResult, searchQuery?: string) => {
    if (searchQuery?.trim()) addRecentSearch(searchQuery);
    refreshPrefs();
    setOpen(false);
    if (item.type === "Tracker") setMode("tracker");
    if (item.type === "Blueprint" || item.type === "Safeguard") setMode("blueprint");

    const go = () => {
      const el = item.anchor ? document.getElementById(item.anchor) : null;
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (item.href === "/" && pathname !== "/") {
      router.push(`/${item.anchor ? `#${item.anchor}` : ""}`);
      setTimeout(go, 400);
    } else if (item.href !== "/" && pathname !== item.href) {
      router.push(`${item.href}${item.anchor ? `#${item.anchor}` : ""}`);
      setTimeout(go, 400);
    } else {
      setTimeout(go, 100);
    }
  };

  const handlePinToggle = (
    e: React.MouseEvent,
    item: SearchResult
  ) => {
    e.stopPropagation();
    e.preventDefault();
    togglePin({
      id: item.id,
      type: item.type,
      title: item.title,
      href: item.href,
      anchor: item.anchor,
    });
    refreshPrefs();
  };

  const hasResults = results.length > 0;
  const showPrefs = !query.trim();

  const renderResultItem = (item: SearchResult) => (
    <CommandItem
      key={`${item.type}-${item.id}`}
      value={`${item.type}-${item.id}-${item.title}`}
      onSelect={() => navigateTo(item, query)}
      className="flex-col items-start gap-1 py-2.5"
    >
      <div className="flex w-full items-start gap-2">
        {typeIcons[item.type]}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge
              variant="outline"
              className={cn("text-[9px] uppercase", searchTypeBadgeStyles[item.type])}
            >
              {item.type}
            </Badge>
            {item.subtitle && (
              <span className="text-[10px] text-muted-foreground">
                {item.subtitle}
              </span>
            )}
          </div>
          <p className="mt-0.5 line-clamp-2 text-sm leading-snug">
            {highlightMatches(item.title, query)}
          </p>
        </div>
        <button
          type="button"
          onClick={(e) => handlePinToggle(e, item)}
          className="shrink-0 rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label={isPinned(item.id) ? "Unpin" : "Pin"}
        >
          {isPinned(item.id) ? (
            <PinOff className="size-3.5" />
          ) : (
            <Pin className="size-3.5" />
          )}
        </button>
      </div>
    </CommandItem>
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search events, policies, rebuttals, safeguards…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        {!hasResults && query.trim() && (
          <CommandEmpty>No results found. Try a different keyword.</CommandEmpty>
        )}
        {(["Tracker", "Blueprint", "Rebuttal", "Safeguard"] as SearchResultType[]).map(
          (type) => {
            const items = grouped[type];
            if (items.length === 0) return null;
            return (
              <CommandGroup key={type} heading={type}>
                {items.map(renderResultItem)}
              </CommandGroup>
            );
          }
        )}
        {showPrefs && savedItems.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup
              heading={
                <span className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5">
                    <Heart className="size-3" />
                    My saved
                  </span>
                  <Link
                    href="/saved"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] font-normal text-muted-foreground hover:text-foreground"
                  >
                    View all
                  </Link>
                </span>
              }
            >
              {savedItems.slice(0, 6).map((item) => (
                <CommandItem
                  key={`saved-${item.type}-${item.id}`}
                  value={`saved-${item.type}-${item.id}-${item.title}`}
                  onSelect={() => {
                    setOpen(false);
                    router.push(item.href);
                  }}
                  className="gap-2"
                >
                  {item.type === "event" ? (
                    <AlertTriangle className="size-4 text-destructive" />
                  ) : (
                    <MessageSquareQuote className="size-4 text-sunrise" />
                  )}
                  <span className="line-clamp-1 flex-1 text-sm">{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        {showPrefs && pinnedItems.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Pinned">
              {pinnedItems.map((pin) => {
                const item = toSearchResult(pin);
                return (
                  <CommandItem
                    key={`pin-${pin.id}`}
                    value={`pinned-${pin.id}-${pin.title}`}
                    onSelect={() => navigateTo(item)}
                    className="gap-2"
                  >
                    {typeIcons[pin.type]}
                    <span className="line-clamp-1 flex-1 text-sm">{pin.title}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        removePin(pin.id);
                        refreshPrefs();
                      }}
                      className="shrink-0 rounded p-1 text-muted-foreground hover:bg-muted"
                      aria-label="Unpin"
                    >
                      <PinOff className="size-3.5" />
                    </button>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </>
        )}
        {showPrefs && recentSearches.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup
              heading={
                <span className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3" />
                    Recent searches
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearRecentSearches();
                      refreshPrefs();
                    }}
                    className="inline-flex items-center gap-0.5 text-[10px] font-normal text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-2.5" />
                    Clear
                  </button>
                </span>
              }
            >
              {recentSearches.map((term) => (
                <CommandItem
                  key={term}
                  value={`recent-${term}`}
                  onSelect={() => setQuery(term)}
                  className="gap-2"
                >
                  <Clock className="size-3.5 text-muted-foreground" />
                  <span className="text-sm">{term}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
        {showPrefs && (
          <CommandGroup heading="Quick Navigate">
            <CommandItem onSelect={() => navigateTo({ id: "nav-tracker", type: "Tracker", title: "", body: "", score: 1, href: "/tracker" })}>
              <AlertTriangle className="size-4 text-destructive" />
              The Tracker
            </CommandItem>
            <CommandItem onSelect={() => navigateTo({ id: "nav-blueprint", type: "Blueprint", title: "", body: "", score: 1, href: "/blueprint" })}>
              <Compass className="size-4 text-primary" />
              The Blueprint
            </CommandItem>
            <CommandItem onSelect={() => navigateTo({ id: "nav-safeguards", type: "Safeguard", title: "", body: "", score: 1, href: "/blueprint", anchor: "safeguards" })}>
              <Shield className="size-4 text-primary" />
              Irreversible Safeguards
            </CommandItem>
            <CommandItem onSelect={() => navigateTo({ id: "nav-rebuttal", type: "Rebuttal", title: "", body: "", score: 1, href: "/rebuttal", anchor: "rebuttal-desk" })}>
              <MessageSquareQuote className="size-4 text-sunrise" />
              Rebuttal Desk
            </CommandItem>
            <CommandItem onSelect={() => { setOpen(false); router.push("/saved"); }}>
              <Heart className="size-4 text-destructive" />
              My Saved
            </CommandItem>
            <CommandItem onSelect={() => { setOpen(false); router.push("/accountability"); }}>
              <Shield className="size-4 text-primary" />
              Dark Money & Accountability
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
