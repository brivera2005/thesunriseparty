"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useAppStore((s) => s.mode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("mode-tracker", "mode-blueprint");
    root.classList.add(`mode-${mode}`);
    if (mode === "tracker") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  return <>{children}</>;
}
