import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CitationSource, SiteMode } from "@/lib/types";

interface AppState {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
  activeCitation: CitationSource | null;
  openCitation: (citation: CitationSource) => void;
  closeCitation: () => void;
  commandOpen: boolean;
  setCommandOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      mode: "tracker",
      setMode: (mode) => set({ mode }),
      activeCitation: null,
      openCitation: (citation) => set({ activeCitation: citation }),
      closeCitation: () => set({ activeCitation: null }),
      commandOpen: false,
      setCommandOpen: (open) => set({ commandOpen: open }),
    }),
    {
      name: "project-sunrise",
      partialize: (state) => ({ mode: state.mode }),
    }
  )
);
