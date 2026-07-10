import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailPage } from "@/components/tracker/event-detail-page";
import {
  timelineEvents,
  getTimelineEventById,
  eventDetailPath,
} from "@/lib/data/timeline-events";
import { SITE_URL } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

function eventTitle(event: { Action_Type: string; Description: string }) {
  const snippet = event.Description.slice(0, 90).trim();
  const suffix = event.Description.length > 90 ? "…" : "";
  return `${event.Action_Type}: ${snippet}${suffix}`;
}

export function generateStaticParams() {
  return timelineEvents.map((event) => ({
    id: event.Event_ID,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getTimelineEventById(id);
  if (!event) {
    return { title: "Event Not Found | Project Sunrise" };
  }

  const title = `${eventTitle(event)} | Project Sunrise`;
  const description = `${event.Description} Severity ${event.Severity_Score}/10. Primary sources and cross-references.`;
  const url = `${SITE_URL}${eventDetailPath(event.Event_ID)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Project Sunrise",
      type: "article",
      publishedTime: event.Date,
      images: [
        {
          url: `${SITE_URL}/og/sunrise-tracker.svg`,
          width: 1200,
          height: 630,
          alt: `Project 2025 Tracker - ${event.Action_Type}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og/sunrise-tracker.svg`],
    },
  };
}

export default async function TrackerEventPage({ params }: PageProps) {
  const { id } = await params;
  const event = getTimelineEventById(id);
  if (!event) notFound();

  return <EventDetailPage event={event} />;
}
