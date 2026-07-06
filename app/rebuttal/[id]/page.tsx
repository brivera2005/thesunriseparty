import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RebuttalDetailPage } from "@/components/rebuttal/rebuttal-detail-page";
import {
  conversationHelpers,
  getConversationHelperById,
  rebuttalDetailPath,
} from "@/lib/data/conversation-helpers";
import { SITE_URL, sectionOg } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return conversationHelpers.map((entry) => ({
    id: entry.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getConversationHelperById(id);
  if (!entry) {
    return { title: "Rebuttal Not Found | Project Sunrise" };
  }

  const title = `Rebuttal: ${entry.theySay.slice(0, 70)}${entry.theySay.length > 70 ? "…" : ""} | Project Sunrise`;
  const description = `${entry.youSay.slice(0, 155)}…`;
  const url = `${SITE_URL}${rebuttalDetailPath(entry.id)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Project Sunrise",
      type: "article",
      images: sectionOg.rebuttal.images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sectionOg.rebuttal.images[0].url],
    },
  };
}

export default async function RebuttalEntryPage({ params }: PageProps) {
  const { id } = await params;
  const entry = getConversationHelperById(id);
  if (!entry) notFound();

  return <RebuttalDetailPage entry={entry} />;
}
