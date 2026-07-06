import type { Metadata } from "next";
import { AccountabilityPage } from "@/components/accountability/accountability-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Dark Money & Accountability | Project Sunrise",
  description:
    "Citizens United, dark money, lobbying disclosure, and Blueprint safeguards against elite capture. Sourced overview with OpenSecrets and FEC links.",
  openGraph: {
    title: sectionOg.accountability.title,
    description: sectionOg.accountability.description,
    url: `${SITE_URL}/accountability`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.accountability.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.accountability.title,
    description: sectionOg.accountability.description,
    images: [sectionOg.accountability.images[0].url],
  },
};

export default function Accountability() {
  return <AccountabilityPage />;
}
