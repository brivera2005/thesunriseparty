import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Project Sunrise | Track Project 2025, Build the Progressive Blueprint",
  description:
    "Transparency-first platform tracking Project 2025 with 75 verified events, progressive policy blueprint, and 140+ sourced rebuttals.",
  openGraph: {
    title: "Project Sunrise — Democracy Needs Receipts",
    description:
      "Evidence-based Project 2025 tracking, progressive policy blueprint, and sourced rebuttals.",
    url: SITE_URL,
    siteName: defaultOg.siteName,
    type: "website",
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOg.images[0].url],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <HomePage />
    </>
  );
}