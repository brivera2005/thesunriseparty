import type { Metadata } from "next";
import { ContributePage } from "@/components/contribute/contribute-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contribute | Project Sunrise",
  description:
    "Submit tracker events, corrections, and rebuttals to Project Sunrise. GitHub issues, email, and editorial standards for community contributions.",
  openGraph: {
    title: sectionOg.contribute.title,
    description: sectionOg.contribute.description,
    url: `${SITE_URL}/contribute`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.contribute.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.contribute.title,
    description: sectionOg.contribute.description,
    images: [sectionOg.contribute.images[0].url],
  },
};

export default function Contribute() {
  return <ContributePage />;
}
