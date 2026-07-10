"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { missionPillars } from "@/lib/data/mission-content";
import { cn } from "@/lib/utils";

export function MissionSection({ compact = false }: { compact?: boolean }) {
  const scrollToTracker = () => {
    document.getElementById("tracker")?.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = compact ? missionPillars.slice(0, 3) : missionPillars;

  return (
    <section
      id="mission"
      className="scroll-mt-16 border-b border-border bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-primary uppercase">
            Our Mission
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Is Project Sunrise?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Project Sunrise is a{" "}
            <strong className="font-semibold text-foreground">
              transparency-first research platform
            </strong>{" "}
            for Americans who refuse to be propagandized. We track the
            authoritarian playbook - starting with Project 2025 - and we build
            the progressive counter-vision for when democracy prevails.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            This isn&apos;t both-sides theater. The Heritage Foundation wrote a
            922-page plan to dismantle civil rights, gut agencies, and
            consolidate executive power. We document every step with federal
            sources - and we cross-reference independent trackers so nothing slips
            through.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-border bg-white transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <pillar.icon
                  className={cn("mb-4 size-8", pillar.accent)}
                  strokeWidth={1.5}
                />
                <h3 className="mb-2 font-semibold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!compact && (
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" onClick={scrollToTracker} className="gap-2">
              Explore the Tracker
              <ArrowDown className="size-4" />
            </Button>
            <Link
              href="/mission"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              Full Mission Page
              <ArrowRight className="size-4" />
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("blueprint")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Read the Blueprint
            </Button>
          </div>
        )}

        <blockquote className={cn("mx-auto max-w-2xl border-l-4 border-primary/50 pl-6 text-left", compact ? "mt-10" : "mt-16")}>
          <p className="text-base leading-relaxed italic text-muted-foreground sm:text-lg">
            &ldquo;The trillionaire class and their captured institutions want
            you confused, cynical, and checked out. Project Sunrise exists so you
            can see the agenda clearly, fight it with facts, and know exactly
            what to build when we win.&rdquo;
          </p>
          <footer className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-foreground">
            <span>- The Sunrise Transparency Pledge</span>
            <Link
              href="/methodology"
              className="text-primary underline-offset-4 hover:underline"
            >
              How we research →
            </Link>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
