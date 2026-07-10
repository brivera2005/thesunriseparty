import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PwaRegister } from "@/components/pwa-register";
import { defaultOg, SITE_URL } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Sunrise | Track Project 2025, Build the Progressive Blueprint",
  description:
    "Transparency-first platform tracking the authoritarian agenda - Project 2025 and beyond - with primary sources, archived citations, and a progressive legislative vision for when democracy wins.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: "Project Sunrise - Democracy Needs Receipts",
    description:
      "Evidence-based Project 2025 tracking, progressive policy blueprint, and sourced rebuttals. For the people - not billionaires or propagandists.",
    url: SITE_URL,
    siteName: defaultOg.siteName,
    type: defaultOg.type,
    images: defaultOg.images,
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Sunrise - Democracy Needs Receipts",
    description:
      "Track Project 2025 with receipts. Build the progressive blueprint for when democracy wins.",
    images: [defaultOg.images[0].url],
  },
  keywords: [
    "Project 2025",
    "Project Sunrise",
    "democracy",
    "authoritarianism",
    "progressive policy",
    "transparency",
    "tracker",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sunrise",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Project Sunrise Tracker RSS"
          href={`${SITE_URL}/feed.xml`}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <PwaRegister />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
