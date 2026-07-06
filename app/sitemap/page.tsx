import type { Metadata } from "next";
import { SitemapPage } from "@/components/sitemap/sitemap-page";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Site Map | Project Sunrise",
  description:
    "Human-readable hub for every Project Sunrise section — tracker, rebuttals, blueprint, accountability, exports, and tools with live counts.",
  openGraph: {
    title: "Site Map | Project Sunrise",
    description:
      "Navigate 125 events, 240 rebuttals, and every section of the democracy transparency platform.",
    url: `${SITE_URL}/sitemap`,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map | Project Sunrise",
    description:
      "Human-readable navigation hub with live counts and quick links.",
    images: [defaultOg.images[0].url],
  },
};

export default function Sitemap() {
  return <SitemapPage />;
}
