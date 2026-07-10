import type { Metadata } from "next";
import { SavedPage } from "@/components/saved/saved-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "My Saved | Project Sunrise",
  description:
    "Your bookmarked tracker events and rebuttals - saved locally in your browser.",
  openGraph: {
    title: sectionOg.saved.title,
    description: sectionOg.saved.description,
    url: `${SITE_URL}/saved`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.saved.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.saved.title,
    description: sectionOg.saved.description,
    images: [sectionOg.saved.images[0].url],
  },
};

export default function Saved() {
  return <SavedPage />;
}
