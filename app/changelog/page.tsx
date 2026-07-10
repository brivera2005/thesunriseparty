import type { Metadata } from "next";
import { ChangelogPage } from "@/components/changelog/changelog-page";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Changelog | Project Sunrise",
  description:
    "Version history of Project Sunrise site iterations - transparency about what shipped in each pass.",
  openGraph: {
    title: "Changelog | Project Sunrise",
    description:
      "Version history of Project Sunrise site iterations - transparency about what shipped in each pass.",
    url: `${SITE_URL}/changelog`,
    siteName: "Project Sunrise",
    type: "website",
  },
};

export default function Changelog() {
  return <ChangelogPage />;
}
