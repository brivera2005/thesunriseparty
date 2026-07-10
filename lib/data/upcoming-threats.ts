import type { UpcomingThreat } from "@/lib/types";
import { citations } from "./citations";
import { observerBase, cprTrackerBase } from "./tracker-sources";

export const upcomingThreats: UpcomingThreat[] = [
  {
    id: "schedule-f-expansion",
    title: "Schedule F Expansion to 50,000+ Positions",
    description:
      "OPM guidance and agency reclassifications could move tens of thousands of civil servants into at-will 'policy-influencing' roles, enabling mass firings without cause.",
    severity: 9,
    status: "in-progress",
    expectedDate: "2025-06-01",
    statusNote: "OPM implementing guidance issued Jan 29, 2025; agency reclassifications ongoing",
    sources: [citations.schedule_f_eo, citations.opm_schedule_f],
    externalTrackers: [
      { name: "project2025.observer", url: observerBase },
      { name: "CPR Tracker", url: cprTrackerBase },
    ],
  },
  {
    id: "agency-dismantling",
    title: "Statutory Agency Dismantling via Executive Action",
    description:
      "Proposals to wind down USAID, ED, and CFPB functions through executive orders and RIFs - testing constitutional limits on congressional appropriations and agency mandates.",
    severity: 10,
    status: "in-progress",
    expectedDate: "2025-09-30",
    statusNote: "USAID merged into State (Mar 2025); ED wind-down EO signed Mar 20, 2025",
    sources: [citations.usaid_rif, citations.ed_restructuring],
    externalTrackers: [
      { name: "project2025.observer", url: observerBase },
      { name: "ACLU", url: "https://www.aclu.org/project-2025-explained" },
    ],
  },
  {
    id: "voting-restrictions",
    title: "Federal Voting Law Preemption",
    description:
      "DOJ Civil Rights Division policy shifts and proposed SAVE Act-style federal ID requirements could disenfranchise millions of eligible voters.",
    severity: 9,
    status: "proposed",
    expectedDate: "2025-03-01",
    statusNote: "H.R. 22 (SAVE Act) reintroduced Jan 3, 2025 - committee referral pending",
    sources: [citations.brennan_voting, citations.save_act_2025],
    externalTrackers: [
      { name: "Brennan Center", url: "https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review" },
      { name: "project2025.observer", url: observerBase },
    ],
  },
  {
    id: "climate-rollbacks",
    title: "EPA Clean Air & Climate Rule Repeals",
    description:
      "Pending rescissions of greenhouse gas standards, methane rules, and vehicle emissions targets align with Project 2025's energy deregulation chapter.",
    severity: 8,
    status: "in-progress",
    expectedDate: "2025-08-01",
    statusNote: "EPA methane rule stay initiated Feb 25, 2025; vehicle standards review underway",
    sources: [citations.epa_methane_rollback, citations.energy_emergency_eo],
    externalTrackers: [
      { name: "CPR Tracker", url: cprTrackerBase },
      { name: "project2025.observer", url: observerBase },
    ],
  },
  {
    id: "birthright-litigation",
    title: "Birthright Citizenship Executive Order",
    description:
      "EO attempting to end birthright citizenship faces multi-state litigation; outcome could redefine 14th Amendment interpretation by executive fiat.",
    severity: 10,
    status: "litigation",
    expectedDate: "2025-06-15",
    statusNote: "TRO issued Jan 23, 2025; multi-state challenge proceeding in federal court",
    sources: [citations.birthright_eo, citations.birthright_litigation],
    externalTrackers: [
      { name: "ACLU", url: "https://www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order" },
      { name: "project2025.observer", url: observerBase },
    ],
  },
  {
    id: "civil-service-purge",
    title: "Federal Workforce Reductions & Buyouts",
    description:
      "Deferred resignation programs, probationary employee terminations, and DOGE-led agency audits threaten institutional knowledge and regulatory capacity.",
    severity: 8,
    status: "in-progress",
    expectedDate: "2025-04-30",
    statusNote: "Deferred resignation deadline Jan 28, 2025; probationary RIFs began Feb 14, 2025",
    sources: [citations.federal_hiring_freeze, citations.doge_eo, citations.probationary_terminations],
    externalTrackers: [
      { name: "CPR Tracker", url: cprTrackerBase },
      { name: "watch2025.org", url: "https://watch2025.org/" },
    ],
  },
];
