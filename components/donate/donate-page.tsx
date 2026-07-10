"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Heart, Mail } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/layout/command-palette";
import { CitationModal } from "@/components/citation";
import { BrandLogo } from "@/components/brand-logo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  donateChannels,
  donateIntro,
  donateMailto,
  donateSupports,
} from "@/lib/data/donate-content";
import { cn } from "@/lib/utils";

export function DonatePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SkipLink />
      <SiteHeader />
      <CommandPalette />
      <CitationModal />

      <main id="main-content">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-white">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "mb-5 min-h-11 gap-2 text-muted-foreground"
              )}
            >
              <ArrowLeft className="size-3.5" />
              Back to Project Sunrise
            </Link>
            <div className="mb-5">
              <BrandLogo variant="footer" />
            </div>
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase sm:text-sm">
              Keep the lights on
            </p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
              {donateIntro.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {donateIntro.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={donateMailto}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 min-h-11 gap-2"
                )}
              >
                <Heart className="size-4" />
                Email to donate
              </a>
              <Link
                href="/mission"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 min-h-11"
                )}
              >
                Read our mission
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
          <h2 className="text-lg font-bold tracking-tight sm:text-xl">
            What donations support
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Every dollar goes toward keeping receipts public and usable.
          </p>
          <div className="mt-6 grid gap-3 sm:gap-4">
            {donateSupports.map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="flex gap-3 p-4 sm:gap-4 sm:p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">
              Payment options
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Online checkout is coming soon. Until then, email us to pledge
              support or ask about sponsorship.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {donateChannels.map((channel) => (
                <Card key={channel.id} className="border-border bg-white">
                  <CardContent className="flex h-full flex-col p-4 sm:p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="font-semibold">{channel.label}</h3>
                      <Badge
                        variant={
                          channel.status === "available" ? "default" : "outline"
                        }
                        className="text-[10px]"
                      >
                        {channel.status === "available"
                          ? "Available"
                          : "Coming soon"}
                      </Badge>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {channel.description}
                    </p>
                    {channel.href && (
                      <a
                        href={channel.href}
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "mt-4 h-11 min-h-11 w-full gap-2 sm:w-auto"
                        )}
                      >
                        {channel.id === "email" ? (
                          <Mail className="size-3.5" />
                        ) : (
                          <ExternalLink className="size-3.5" />
                        )}
                        Contact
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground sm:text-sm">
              Project Sunrise is a civic transparency project. We do not sell
              your data. We publish open exports so anyone can verify our work.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
