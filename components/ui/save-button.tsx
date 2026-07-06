"use client";

import { useCallback, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import {
  isSaved,
  toggleSaved,
  SAVED_ITEMS_CHANGED,
  type SavedItemType,
} from "@/lib/saved-items";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SaveButtonProps {
  type: SavedItemType;
  id: string;
  title: string;
  href: string;
  size?: "sm" | "default" | "icon-sm";
  variant?: "outline" | "ghost";
  className?: string;
  showLabel?: boolean;
}

export function SaveButton({
  type,
  id,
  title,
  href,
  size = "sm",
  variant = "outline",
  className,
  showLabel = true,
}: SaveButtonProps) {
  const [saved, setSaved] = useState(false);

  const refresh = useCallback(() => {
    setSaved(isSaved(type, id));
  }, [type, id]);

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener(SAVED_ITEMS_CHANGED, handler);
    return () => window.removeEventListener(SAVED_ITEMS_CHANGED, handler);
  }, [refresh]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleSaved({ type, id, title, href });
    refresh();
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleToggle}
      className={cn("gap-1.5", className)}
      aria-label={saved ? "Remove from saved" : "Save to My saved"}
      aria-pressed={saved}
    >
      <Heart
        className={cn("size-3.5 transition-colors", saved && "fill-destructive text-destructive")}
      />
      {showLabel && (saved ? "Saved" : "Save")}
    </Button>
  );
}
