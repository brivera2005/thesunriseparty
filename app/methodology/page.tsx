import type { Metadata } from "next";
import { MethodologyPage } from "@/components/methodology/methodology-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Methodology | Project Sunrise",
  description:
    "How Project Sunrise sources, verifies, archives, and scores severity - plus transparency standards and source tier definitions.",
  openGraph: {
    title: sectionOg.methodology.title,
    description: sectionOg.methodology.description,
    url: `${SITE_URL}/methodology`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.methodology.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.methodology.title,
    description: sectionOg.methodology.description,
    images: [sectionOg.methodology.images[0].url],
  },
};

export default function Methodology() {
  return <MethodologyPage />;
}
