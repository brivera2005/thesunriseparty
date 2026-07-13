export type SiteMode = "tracker" | "blueprint";

export type TimelineCategory =
  | "Environment"
  | "Civil Rights"
  | "Economy"
  | "Healthcare"
  | "Democracy"
  | "Immigration"
  | "Education";

export interface CitationSource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  waybackUrl: string;
  excerpt: string;
  date: string;
}

export interface ExternalTrackerRef {
  name: string;
  url: string;
  label?: string;
}

export interface TrackerSource {
  id: string;
  name: string;
  url: string;
  description: string;
  publisher: string;
  type: "community" | "watchdog" | "source-document" | "legal";
}

export interface UpcomingThreat {
  id: string;
  title: string;
  description: string;
  severity: number;
  status: "proposed" | "in-progress" | "litigation";
  /** Expected decision date, hearing, or implementation milestone when known */
  expectedDate?: string;
  /** Short status note (e.g. court docket, committee stage) */
  statusNote?: string;
  sources: CitationSource[];
  externalTrackers: ExternalTrackerRef[];
}

export interface TimelineEvent {
  Event_ID: string;
  Date: string;
  Action_Type: string;
  Description: string;
  Severity_Score: number;
  Impacted_Sectors: TimelineCategory[];
  Sources: CitationSource[];
  Linked_Fix_ID: string | null;
  category: TimelineCategory;
  p2025Pillar?: string;
  externalTrackers?: ExternalTrackerRef[];
}

export interface PolicyBillReference {
  number: string;
  title: string;
  url: string;
  status?: string;
}

export interface ImplementationPhase {
  phase: string;
  timeframe: string;
  description: string;
}

export interface PolicyFix {
  id: string;
  category: string;
  title: string;
  problem: string;
  proposedFix: string;
  economicImpact: string;
  /** Sourced consequences if this policy is not enacted */
  costOfInaction: string;
  costOfInactionCitations: CitationSource[];
  safeguards: string[];
  citations: CitationSource[];
  billReferences?: PolicyBillReference[];
  implementationTimeline?: ImplementationPhase[];
  /** Propaganda framing that paints a basic reform as radical */
  whyPeopleCallItExtreme?: string;
  /** Evidence path: outcomes, mechanism, peer comparisons */
  whyItWorks?: string;
  /** Projection/fear claims vs what the evidence actually shows */
  theGaslight?: string;
  /** Peer nations / U.S. states already running a version of this */
  alreadyWorksWhere?: string;
}

export interface SafeguardItem {
  id: string;
  title: string;
  description: string;
  mechanisms: string[];
  citations: CitationSource[];
  whyPeopleCallItExtreme?: string;
  whyItWorks?: string;
  theGaslight?: string;
  alreadyWorksWhere?: string;
}

export type RebuttalDifficulty = "easy" | "medium" | "hard";

export type RebuttalCategory =
  | "Economy"
  | "Immigration"
  | "But Obama!"
  | "Courts"
  | "Jan 6"
  | "Healthcare"
  | "Crime"
  | "Elections"
  | "Climate"
  | "Culture Wars"
  | "Media"
  | "Democracy"
  | "Whataboutism"
  | "Foreign Policy"
  | "Education";

export interface ConversationHelper {
  id: string;
  category: RebuttalCategory[];
  theySay: string;
  youSay: string;
  stab?: string;
  sources: CitationSource[];
  difficulty?: RebuttalDifficulty;
  relatedClaims?: string[];
  /** Extra phrases that should surface this rebuttal in search */
  searchAliases?: string[];
}

export type HistoryEra =
  | "Colonial"
  | "Revolution"
  | "Early Republic"
  | "Antebellum"
  | "Civil War"
  | "Reconstruction"
  | "Gilded Age"
  | "Progressive"
  | "WWI"
  | "Roaring 20s"
  | "Depression"
  | "WWII"
  | "Cold War"
  | "Civil Rights"
  | "Vietnam"
  | "Reagan era"
  | "911 era"
  | "2008"
  | "Trump era"
  | "Today";

export type HistoryCategory =
  | "Foreign Policy"
  | "Race"
  | "Labor"
  | "Native"
  | "Democracy"
  | "Economy"
  | "Military"
  | "Healthcare"
  | "Education"
  | "LGBTQ";

export interface HistoricalRebuttal {
  theySaid: string;
  youSay: string;
  stab?: string;
  sources: CitationSource[];
}

export interface HiddenHistoryEntry {
  id: string;
  date: string;
  sortYear: number;
  era: HistoryEra;
  title: string;
  textbookVersion: string;
  actualHistory: string;
  historicalRebuttals: HistoricalRebuttal[];
  sources: CitationSource[];
  categories: HistoryCategory[];
  relatedEvents?: string[];
  relatedRebuttalIds?: string[];
}

export type BillChamber = "house" | "senate" | "both";
export type PartyCode = "D" | "R" | "I";
export type BillStatus =
  | "introduced"
  | "committee"
  | "floor"
  | "passed"
  | "failed"
  | "enacted"
  | "vetoed";

export interface PartyVoteBreakdown {
  yea: number;
  nay: number;
}

export interface BillVote {
  chamber: "house" | "senate";
  date: string;
  question: string;
  yeas: number;
  nays: number;
  present: number;
  notVoting: number;
  byParty: {
    D: PartyVoteBreakdown;
    R: PartyVoteBreakdown;
    I: PartyVoteBreakdown;
  };
}

export interface BillSponsor {
  name: string;
  party: PartyCode;
  state: string;
}

export interface LegislationBill {
  id: string;
  chamber: BillChamber;
  billNumber: string;
  title: string;
  status: BillStatus;
  lastAction: string;
  lastActionDate: string;
  sponsor: BillSponsor;
  cosponsorsSummary?: { D: number; R: number; I: number };
  votes?: BillVote[];
  summary: string;
  whyItMatters: string;
  progressiveTake: string;
  impactSeverity?: number;
  topics: string[];
  congressGovUrl: string;
  sources: CitationSource[];
}

/** Causal-chain actors in Impact Scenarios */
export type ScenarioActor =
  | "Trump admin"
  | "Congress"
  | "Senate"
  | "House"
  | "Courts"
  | "Corporations"
  | "State gov"
  | "Propaganda"
  | (string & {});

export interface ScenarioCausalStep {
  actor: ScenarioActor;
  action: string;
  effect: string;
  linkedEventId?: string;
  linkedBillId?: string;
  linkedFixId?: string;
  sources: CitationSource[];
}

export interface ImpactScenario {
  id: string;
  title: string;
  persona: {
    who: string;
    location?: string;
    situation: string;
  };
  getsY: string;
  shouldGetZ: string;
  whyNotZ: {
    steps: ScenarioCausalStep[];
  };
  bottomLine: string;
  topics: string[];
  severity: number;
}
