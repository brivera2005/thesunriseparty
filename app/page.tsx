import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Project Sunrise | A New Beginning. Restoring Democracy.",
  description:
    "Track the agenda. Counter the lies. Build the fix. Live bills, sourced rebuttals, impact scenarios.",
  openGraph: {
    title: "Project Sunrise. Democracy Needs Receipts.",
    description:
      "Track the agenda. Counter the lies. Build the fix.",
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