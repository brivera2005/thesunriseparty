"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Unified white + sunrise palette across every route.
  // Mode store values remain for navigation prefs but no longer recolor the UI.
  return <TooltipProvider delay={280}>{children}</TooltipProvider>;
}
