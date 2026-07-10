import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RebuttalCategoryPage } from "@/components/rebuttal/rebuttal-category-page";
import {
  rebuttalCategoryFromSlug,
  rebuttalCategorySlugs,
  rebuttalCategoryPath,
  getRebuttalsByCategory,
} from "@/lib/data/conversation-helpers";
import { SITE_URL, sectionOg } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rebuttalCategorySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = rebuttalCategoryFromSlug(slug);
  if (!category) {
    return { title: "Category Not Found | Project Sunrise" };
  }

  const count = getRebuttalsByCategory(category).length;
  const title = `${category} Rebuttals | Project Sunrise`;
  const description = `${count} sourced talking points for countering ${category.toLowerCase()} claims - ready for real conversations.`;
  const url = `${SITE_URL}${rebuttalCategoryPath(category)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Project Sunrise",
      type: "website",
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

export default async function RebuttalCategoryRoute({ params }: PageProps) {
  const { slug } = await params;
  const category = rebuttalCategoryFromSlug(slug);
  if (!category) notFound();

  return <RebuttalCategoryPage category={category} />;
}
