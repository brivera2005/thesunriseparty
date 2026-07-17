import type { Metadata } from "next";
import { QuizPage } from "@/components/quiz/quiz-page";
import { QUIZ_QUESTION_COUNT } from "@/lib/data/quiz-questions";
import { sectionOg, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Political Standing Quiz | Project Sunrise",
  description: `${QUIZ_QUESTION_COUNT} clear questions. Find your compass quadrant, camp alignment, novel policy ideas, and whether your answers match MAGA / hard-right politics. About 3 minutes.`,
  openGraph: {
    title: sectionOg.quiz.title,
    description: sectionOg.quiz.description,
    url: `${SITE_URL}/quiz`,
    siteName: "Project Sunrise",
    type: "website",
    images: sectionOg.quiz.images,
  },
  twitter: {
    card: "summary_large_image",
    title: sectionOg.quiz.title,
    description: sectionOg.quiz.description,
    images: [sectionOg.quiz.images[0].url],
  },
};

export default function QuizRoute() {
  return <QuizPage />;
}
