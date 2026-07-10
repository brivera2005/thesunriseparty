import type { Metadata } from "next";
import { HistoryRebuttalsPage } from "@/components/history/history-rebuttals-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";
import { countHistoricalRebuttals } from "@/lib/data/hidden-history";

export const metadata: Metadata = {
  title: "Historical Rebuttals | Project Sunrise",
  description: `${countHistoricalRebuttals()} plain-language rebuttals to propaganda from every era of American history - sourced and cross-linked.`,
  openGraph: {
    title: "Historical Rebuttals | Project Sunrise",
    description: sectionOg.history.description,
    url: `${SITE_URL}/history/rebuttals`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.history.images,
  },
};

export default function HistoryRebuttals() {
  return <HistoryRebuttalsPage />;
}
