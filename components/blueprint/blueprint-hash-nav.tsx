"use client";

import { useEffect } from "react";
import { isBlueprintAnchorId } from "@/lib/data/policies";

export function BlueprintHashNav({
  onOpenPolicy,
}: {
  onOpenPolicy: (id: string) => void;
}) {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash || !isBlueprintAnchorId(hash)) return;

      if (hash.startsWith("FIX-")) {
        onOpenPolicy(hash);
      }

      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [onOpenPolicy]);

  return null;
}
