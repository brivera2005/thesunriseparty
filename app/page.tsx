import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Project Sunrise | A New Beginning. Restoring Democracy.",
  description:
    "Showcase landing for Project Sunrise: Rebuttal Desk, Hidden History, Project 2025 Tracker, Progressive Blueprint, and sourced accountability tools.",
  openGraph: {
    title: "Project Sunrise. Democracy Needs Receipts.",
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