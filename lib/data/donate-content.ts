import {
  Heart,
  Mail,
  Server,
  ShieldCheck,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export const donateIntro = {
  title: "Support Project Sunrise",
  subtitle:
    "Help keep this transparency platform free, sourced, and independent. Donations fund hosting, research time, and archival tools so every claim stays linked to primary sources.",
};

export const donateMailto =
  "mailto:hello@thesunriseparty.org?subject=Donate%20to%20Project%20Sunrise&body=I%20want%20to%20support%20Project%20Sunrise.%0A%0APreferred%20amount%20(optional)%3A%20%0AName%20(optional)%3A%20";

export interface DonateSupportItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const donateSupports: DonateSupportItem[] = [
  {
    icon: Server,
    title: "Hosting and uptime",
    description:
      "Cloudflare Pages, domain costs, and bandwidth so the tracker and rebuttal desk stay fast and free for everyone.",
  },
  {
    icon: BookOpen,
    title: "Research and sourcing",
    description:
      "Time to verify executive actions, archive citations, expand Hidden History, and keep rebuttals tied to primary documents.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency tools",
    description:
      "Link validation, Wayback archives, open data exports, and accessibility work that make receipts usable on any device.",
  },
];

export interface DonateChannel {
  id: string;
  label: string;
  status: "coming-soon" | "available";
  description: string;
  href?: string;
}

export const donateChannels: DonateChannel[] = [
  {
    id: "stripe",
    label: "Stripe",
    status: "coming-soon",
    description: "Card and digital wallet donations. Checkout link coming soon.",
  },
  {
    id: "actblue",
    label: "ActBlue",
    status: "coming-soon",
    description: "Democratic fundraising platform option. Coming soon.",
  },
  {
    id: "opencollective",
    label: "Open Collective",
    status: "coming-soon",
    description: "Transparent collective budgeting for open civic projects. Coming soon.",
  },
  {
    id: "email",
    label: "Email us",
    status: "available",
    description: "Reach out to pledge support or ask about sponsorship while payment rails go live.",
    href: donateMailto,
  },
];
