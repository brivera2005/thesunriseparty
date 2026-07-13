import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BillDetailPage } from "@/components/legislation/bill-detail-page";
import {
  getLegislationBillById,
  legislationBills,
  legislationDetailPath,
} from "@/lib/data/legislation";
import { SITE_URL } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return legislationBills.map((bill) => ({
    id: bill.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const bill = getLegislationBillById(id);
  if (!bill) {
    return { title: "Bill Not Found | Project Sunrise" };
  }

  const title = `${bill.billNumber}: ${bill.title} | Project Sunrise`;
  const description = `${bill.summary} Status: ${bill.status}. Progressive analysis with Congress.gov receipts.`;
  const url = `${SITE_URL}${legislationDetailPath(bill.id)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Project Sunrise",
      type: "article",
      images: [
        {
          url: `${SITE_URL}/og/sunrise-default.svg`,
          width: 1200,
          height: 630,
          alt: `Legislation - ${bill.billNumber}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og/sunrise-default.svg`],
    },
  };
}

export default async function LegislationBillPage({ params }: PageProps) {
  const { id } = await params;
  const bill = getLegislationBillById(id);
  if (!bill) notFound();

  return <BillDetailPage bill={bill} />;
}
