import type { Metadata } from "next";
import { DonatePage } from "@/components/donate/donate-page";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Donate | Project Sunrise",
  description:
    "Support Project Sunrise hosting, research, and transparency tools. Payment options coming soon via Stripe, ActBlue, and Open Collective.",
  openGraph: {
    title: sectionOg.donate.title,
    description: sectionOg.donate.description,
    url: `${SITE_URL}/donate`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.donate.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.donate.title,
    description: sectionOg.donate.description,
    images: [sectionOg.donate.images[0].url],
  },
};

export default function Donate() {
  return <DonatePage />;
}
