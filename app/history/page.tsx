import type { Metadata } from "next";
import { HistoryPage } from "@/components/history/history-page";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Hidden History | Project Sunrise",
  description:
    "Suppressed history: stories American schools often skip. Sourced accounts of coups, massacres, labor struggles, and state violence.",
  openGraph: {
    title: "Hidden History - What Schools Don't Teach",
    description:
      "Operation Paperclip, Tulsa, COINTELPRO, Iran-Contra, and more - every entry sourced and archived.",
    url: `${SITE_URL}/history`,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
};

export default function Page() {
  return <HistoryPage />;
}
