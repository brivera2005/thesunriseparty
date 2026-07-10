import type { HiddenHistoryEntry, HistoryCategory, HistoryEra } from "@/lib/types";
import { historyCitations as h } from "./history-citations";
export const historyEras: HistoryEra[] = ["Colonial","Revolution","Early Republic","Antebellum","Civil War","Reconstruction","Gilded Age","Progressive","WWI","Roaring 20s","Depression","WWII","Cold War","Civil Rights","Vietnam","Reagan era","911 era","2008","Trump era","Today"];
export const historyCategories: HistoryCategory[] = ["Foreign Policy","Race","Labor","Native","Democracy","Economy","Military","Healthcare","Education"];
export const hiddenHistoryEntries: HiddenHistoryEntry[] = [
  {
    id: "HH-1492-COLUMBUS",
    date: "1492",
    sortYear: 1492,
    era: "Colonial",
    title: "Columbus Discovery",
    textbookVersion: "Columbus discovered America and opened the New World for civilization.",
    actualHistory: "Millions lived here already. Columbus enslaved Taínos and launched colonization that killed up to 90% of Native people.",
    historicalRebuttals: [
      { theySaid: "Columbus was an explorer not a conqueror.", youSay: "You cannot discover land where millions already live.", sources: [h.columbus_loc, h.columbus_zinn] },
    ],
    sources: [h.columbus_loc, h.columbus_zinn],
    categories: ["Native","Race"],
  },
  {
    id: "HH-1619-SLAVERY",
    date: "1619",
    sortYear: 1619,
    era: "Colonial",
    title: "Slavery in Virginia",
    textbookVersion: "Slavery was a natural Southern tradition.",
    actualHistory: "Virginia passed laws making slavery hereditary and race-based within decades of 1619.",
    historicalRebuttals: [
      { theySaid: "Slavery was always normal.", youSay: "Race-based chattel slavery was invented by specific laws.", sources: [h.jamestown_1619] },
    ],
    sources: [h.jamestown_1619],
    categories: ["Race","Labor"],
  },
  {
    id: "HH-1621-THANKSGIVING",
    date: "1621",
    sortYear: 1621,
    era: "Colonial",
    title: "First Thanksgiving",
    textbookVersion: "Pilgrims and Natives shared a friendly harvest feast.",
    actualHistory: "A brief 1621 meeting; within decades colonists waged war on Wampanoag people.",
    historicalRebuttals: [
      { theySaid: "Why politicize Thanksgiving?", youSay: "The story children learn is not what historians document.", sources: [h.thanksgiving_nps, h.thanksgiving_zinn] },
    ],
    sources: [h.thanksgiving_nps, h.thanksgiving_zinn],
    categories: ["Native","Education"],
  },
  {
    id: "HH-1776-DECLARATION",
    date: "1776",
    sortYear: 1776,
    era: "Revolution",
    title: "Declaration of Independence",
    textbookVersion: "Founders built a nation on liberty for all.",
    actualHistory: "Jefferson condemned slavery in draft; Southern delegates removed it.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Jefferson condemned slavery in draft; Southern delegates removed it.", sources: [h.declaration_slavery] },
    ],
    sources: [h.declaration_slavery],
    categories: ["Democracy","Race"],
  },
  {
    id: "HH-1787-THREE-FIFTHS",
    date: "1787",
    sortYear: 1787,
    era: "Early Republic",
    title: "Three-Fifths Compromise",
    textbookVersion: "A fair math compromise on representation.",
    actualHistory: "Enslaved people counted 3/5 for seats but got zero votes.",
    historicalRebuttals: [
      { theySaid: "It was not about humanity.", youSay: "Slave states got extra Congress seats because of people they enslaved.", sources: [h.three_fifths_crs] },
    ],
    sources: [h.three_fifths_crs],
    categories: ["Democracy","Race"],
  },
  {
    id: "HH-1830-REMOVAL",
    date: "1830",
    sortYear: 1830,
    era: "Antebellum",
    title: "Indian Removal",
    textbookVersion: "Pioneers settled empty frontier land.",
    actualHistory: "Federal law forced Native nations off homelands; thousands died.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Federal law forced Native nations off homelands; thousands died.", sources: [h.indian_removal_crs] },
    ],
    sources: [h.indian_removal_crs],
    categories: ["Native","Military"],
  },
  {
    id: "HH-1850-FUGITIVE",
    date: "1850",
    sortYear: 1850,
    era: "Antebellum",
    title: "Fugitive Slave Act",
    textbookVersion: "Slavery was states rights.",
    actualHistory: "Federal law forced free states to capture escaped enslaved people.",
    historicalRebuttals: [
      { theySaid: "Civil War was states rights.", youSay: "Secession papers cite slavery. Feds hunted runaways.", sources: [h.fugitive_slave_act, h.secession_documents] },
    ],
    sources: [h.fugitive_slave_act, h.secession_documents],
    categories: ["Race","Democracy"],
  },
  {
    id: "HH-1857-DRED-SCOTT",
    date: "1857",
    sortYear: 1857,
    era: "Antebellum",
    title: "Dred Scott",
    textbookVersion: "The Court neutrally interpreted the Constitution.",
    actualHistory: "Court denied Black citizenship and protected slavery.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Court denied Black citizenship and protected slavery.", sources: [h.dred_scott] },
    ],
    sources: [h.dred_scott],
    categories: ["Race","Democracy"],
  },
  {
    id: "HH-1861-CIVIL-WAR",
    date: "1861-1865",
    sortYear: 1861,
    era: "Civil War",
    title: "Causes of Civil War",
    textbookVersion: "War was over states rights.",
    actualHistory: "Secession documents say slavery was the cause.",
    historicalRebuttals: [
      { theySaid: "Ancestors fought for states rights.", youSay: "Read the secession documents.", sources: [h.secession_documents, h.lost_cause_zinn] },
      { theySaid: "Heritage not hate.", youSay: "One side fought to keep four million enslaved.", sources: [h.lost_cause_zinn] },
    ],
    sources: [h.secession_documents, h.lost_cause_zinn],
    categories: ["Race","Military"],
  },
  {
    id: "HH-1863-EMANCIPATION",
    date: "1863",
    sortYear: 1863,
    era: "Civil War",
    title: "Emancipation Proclamation",
    textbookVersion: "Lincoln freed all slaves instantly.",
    actualHistory: "Freed people only in Confederate states until 1865.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Freed people only in Confederate states until 1865.", sources: [h.emancipation_limits] },
    ],
    sources: [h.emancipation_limits],
    categories: ["Race","Military"],
  },
  {
    id: "HH-1865-RECONSTRUCTION",
    date: "1865-1877",
    sortYear: 1865,
    era: "Reconstruction",
    title: "Reconstruction Betrayal",
    textbookVersion: "Reconstruction failed naturally.",
    actualHistory: "Terrorism and 1877 Compromise ended Black rights for a century.",
    historicalRebuttals: [
      { theySaid: "Happy slaves myth.", youSay: "People risked death to escape.", sources: [h.fugitive_slave_act, h.lost_cause_zinn] },
    ],
    sources: [h.reconstruction_crs, h.compromise_1877, h.black_codes],
    categories: ["Race","Democracy"],
  },
  {
    id: "HH-1879-BOARDING",
    date: "1879-1970s",
    sortYear: 1879,
    era: "Gilded Age",
    title: "Native Boarding Schools",
    textbookVersion: "Schools helped Native children.",
    actualHistory: "Children were taken, languages banned, thousands died.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Children were taken, languages banned, thousands died.", sources: [h.boarding_schools] },
    ],
    sources: [h.boarding_schools],
    categories: ["Native","Education"],
  },
  {
    id: "HH-1886-HAYMARKET",
    date: "1886",
    sortYear: 1886,
    era: "Gilded Age",
    title: "Haymarket Affair",
    textbookVersion: "Prosperity came from free enterprise.",
    actualHistory: "Workers fought for the eight-hour day; leaders executed in sham trial.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Workers fought for the eight-hour day; leaders executed in sham trial.", sources: [h.haymarket] },
    ],
    sources: [h.haymarket],
    categories: ["Labor","Economy"],
  },
  {
    id: "HH-1890-WOUNDED-KNEE",
    date: "1890",
    sortYear: 1890,
    era: "Gilded Age",
    title: "Wounded Knee",
    textbookVersion: "Indian Wars ended peacefully.",
    actualHistory: "Soldiers killed hundreds of disarmed Lakota families.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Soldiers killed hundreds of disarmed Lakota families.", sources: [h.wounded_knee] },
    ],
    sources: [h.wounded_knee],
    categories: ["Native","Military"],
  },
  {
    id: "HH-1896-PLESSY",
    date: "1896",
    sortYear: 1896,
    era: "Gilded Age",
    title: "Plessy v Ferguson",
    textbookVersion: "Separate but equal was reasonable.",
    actualHistory: "Segregation was apartheid.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Segregation was apartheid.", sources: [h.plessy_ferguson, h.black_codes] },
    ],
    sources: [h.plessy_ferguson, h.black_codes],
    categories: ["Race","Education"],
  },
  {
    id: "HH-1899-PHILIPPINES",
    date: "1899-1902",
    sortYear: 1899,
    era: "Progressive",
    title: "Philippine-American War",
    textbookVersion: "America freed the Philippines.",
    actualHistory: "U.S. fought brutal counterinsurgency after Filipinos declared independence.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "U.S. fought brutal counterinsurgency after Filipinos declared independence.", sources: [h.philippines_war] },
    ],
    sources: [h.philippines_war],
    categories: ["Foreign Policy","Military"],
  },
  {
    id: "HH-1917-ESPIONAGE",
    date: "1917",
    sortYear: 1917,
    era: "WWI",
    title: "Espionage Act",
    textbookVersion: "America fought for democracy.",
    actualHistory: "Anti-war speech was criminalized.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Anti-war speech was criminalized.", sources: [h.espionage_act] },
    ],
    sources: [h.espionage_act],
    categories: ["Democracy","Military"],
  },
  {
    id: "HH-1921-TULSA",
    date: "1921",
    sortYear: 1921,
    era: "Roaring 20s",
    title: "Tulsa Massacre",
    textbookVersion: "The 1920s were prosperous for everyone.",
    actualHistory: "White mobs destroyed Black Wall Street; covered up for decades.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "White mobs destroyed Black Wall Street; covered up for decades.", sources: [h.tulsa_massacre] },
    ],
    sources: [h.tulsa_massacre],
    categories: ["Race","Economy"],
  },
  {
    id: "HH-1923-ROSEWOOD",
    date: "1923",
    sortYear: 1923,
    era: "Roaring 20s",
    title: "Rosewood Massacre",
    textbookVersion: "One bad town.",
    actualHistory: "White mob destroyed a Black town; covered up 70 years.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "White mob destroyed a Black town; covered up 70 years.", sources: [h.rosewood, h.tulsa_massacre] },
    ],
    sources: [h.rosewood, h.tulsa_massacre],
    categories: ["Race"],
  },
  {
    id: "HH-1932-TUSKEGEE",
    date: "1932-1972",
    sortYear: 1932,
    era: "Depression",
    title: "Tuskegee Study",
    textbookVersion: "Medicine always helped people.",
    actualHistory: "U.S. withheld syphilis treatment from Black men for 40 years.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "U.S. withheld syphilis treatment from Black men for 40 years.", sources: [h.tuskegee_study] },
    ],
    sources: [h.tuskegee_study],
    categories: ["Healthcare","Race"],
  },
  {
    id: "HH-1932-BONUS",
    date: "1932",
    sortYear: 1932,
    era: "Depression",
    title: "Bonus Army",
    textbookVersion: "Government honored veterans.",
    actualHistory: "Army attacked veteran protesters; two killed.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Army attacked veteran protesters; two killed.", sources: [h.bonus_army] },
    ],
    sources: [h.bonus_army],
    categories: ["Military","Labor"],
  },
  {
    id: "HH-1934-REDLINING",
    date: "1934-1968",
    sortYear: 1934,
    era: "Depression",
    title: "Federal Redlining",
    textbookVersion: "Anyone could build wealth with hard work.",
    actualHistory: "Federal maps denied Black families mortgages.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Federal maps denied Black families mortgages.", sources: [h.redlining_hud] },
    ],
    sources: [h.redlining_hud],
    categories: ["Race","Economy"],
  },
  {
    id: "HH-1942-INTERNMENT",
    date: "1942",
    sortYear: 1942,
    era: "WWII",
    title: "Japanese Internment",
    textbookVersion: "WWII defended freedom.",
    actualHistory: "120,000 Japanese Americans imprisoned without charges.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "120,000 Japanese Americans imprisoned without charges.", sources: [h.japanese_internment] },
    ],
    sources: [h.japanese_internment],
    categories: ["Race","Military"],
  },
  {
    id: "HH-1945-PAPERCLIP",
    date: "1945-1959",
    sortYear: 1945,
    era: "WWII",
    title: "Operation Paperclip",
    textbookVersion: "America won the space race alone.",
    actualHistory: "U.S. brought 1,600+ Nazi scientists and hid records.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "U.S. brought 1,600+ Nazi scientists and hid records.", sources: [h.operation_paperclip] },
    ],
    sources: [h.operation_paperclip],
    categories: ["Military","Foreign Policy"],
  },
  {
    id: "HH-1950-MCCARTHY",
    date: "1950-1954",
    sortYear: 1950,
    era: "Cold War",
    title: "McCarthyism",
    textbookVersion: "Cold War protected freedom.",
    actualHistory: "Thousands lost careers to false accusations.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Thousands lost careers to false accusations.", sources: [h.mccarthyism, h.cointelpro] },
    ],
    sources: [h.mccarthyism, h.cointelpro],
    categories: ["Democracy","Labor"],
  },
  {
    id: "HH-1953-IRAN",
    date: "1953",
    sortYear: 1953,
    era: "Cold War",
    title: "CIA Coup in Iran",
    textbookVersion: "America spreads democracy.",
    actualHistory: "CIA overthrew elected Mossadegh over oil.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "CIA overthrew elected Mossadegh over oil.", sources: [h.iran_coup] },
    ],
    sources: [h.iran_coup],
    categories: ["Foreign Policy","Military"],
  },
  {
    id: "HH-1954-GUATEMALA",
    date: "1954",
    sortYear: 1954,
    era: "Cold War",
    title: "CIA Coup in Guatemala",
    textbookVersion: "U.S. supports self-determination.",
    actualHistory: "CIA overthrew elected government for United Fruit.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "CIA overthrew elected government for United Fruit.", sources: [h.guatemala_coup] },
    ],
    sources: [h.guatemala_coup],
    categories: ["Foreign Policy","Economy"],
  },
  {
    id: "HH-1954-BROWN",
    date: "1954",
    sortYear: 1954,
    era: "Civil Rights",
    title: "Brown Resistance",
    textbookVersion: "Brown ended segregation peacefully.",
    actualHistory: "Massive resistance closed schools and deployed troops.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Massive resistance closed schools and deployed troops.", sources: [h.brown_v_board, h.plessy_ferguson] },
    ],
    sources: [h.brown_v_board, h.plessy_ferguson],
    categories: ["Race","Education"],
  },
  {
    id: "HH-1956-COINTELPRO",
    date: "1956-1971",
    sortYear: 1956,
    era: "Civil Rights",
    title: "COINTELPRO",
    textbookVersion: "FBI protected civil rights.",
    actualHistory: "FBI illegally disrupted civil rights groups.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "FBI illegally disrupted civil rights groups.", sources: [h.cointelpro] },
    ],
    sources: [h.cointelpro],
    categories: ["Democracy","Race"],
  },
  {
    id: "HH-1953-MKULTRA",
    date: "1953-1973",
    sortYear: 1953,
    era: "Cold War",
    title: "MK-Ultra",
    textbookVersion: "Intelligence follows the law.",
    actualHistory: "CIA ran illegal mind-control experiments.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "CIA ran illegal mind-control experiments.", sources: [h.mkultra] },
    ],
    sources: [h.mkultra],
    categories: ["Healthcare","Military"],
  },
  {
    id: "HH-1964-TONKIN",
    date: "1964",
    sortYear: 1964,
    era: "Vietnam",
    title: "Gulf of Tonkin",
    textbookVersion: "Congress declared war after an attack.",
    actualHistory: "War authorized on exaggerated incidents.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "War authorized on exaggerated incidents.", sources: [h.gulf_of_tonkin] },
    ],
    sources: [h.gulf_of_tonkin],
    categories: ["Foreign Policy","Military"],
  },
  {
    id: "HH-1969-STONEWALL",
    date: "1969",
    sortYear: 1969,
    era: "Civil Rights",
    title: "Stonewall",
    textbookVersion: "Gay rights appeared suddenly.",
    actualHistory: "Trans women of color led the 1969 uprising.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Trans women of color led the 1969 uprising.", sources: [h.stonewall_nps] },
    ],
    sources: [h.stonewall_nps],
    categories: ["Race","Democracy"],
  },
  {
    id: "HH-1973-CHILE",
    date: "1973",
    sortYear: 1973,
    era: "Cold War",
    title: "Chile Coup",
    textbookVersion: "Pinochet stopped communism.",
    actualHistory: "U.S. backed overthrow of elected Allende.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "U.S. backed overthrow of elected Allende.", sources: [h.chile_coup] },
    ],
    sources: [h.chile_coup],
    categories: ["Foreign Policy","Military"],
  },
  {
    id: "HH-1972-WATERGATE",
    date: "1972-1974",
    sortYear: 1972,
    era: "Cold War",
    title: "Watergate",
    textbookVersion: "The system worked.",
    actualHistory: "Nixon ordered crimes then was pardoned.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Nixon ordered crimes then was pardoned.", sources: [h.watergate] },
    ],
    sources: [h.watergate],
    categories: ["Democracy"],
  },
  {
    id: "HH-1986-IRAN-CONTRA",
    date: "1986",
    sortYear: 1986,
    era: "Reagan era",
    title: "Iran-Contra",
    textbookVersion: "Reagan restored leadership.",
    actualHistory: "Officials sold arms to Iran and funded Contras illegally.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Officials sold arms to Iran and funded Contras illegally.", sources: [h.iran_contra] },
    ],
    sources: [h.iran_contra],
    categories: ["Foreign Policy","Democracy"],
  },
  {
    id: "HH-2001-PATRIOT",
    date: "2001",
    sortYear: 2001,
    era: "911 era",
    title: "Patriot Act",
    textbookVersion: "Security and freedom were balanced.",
    actualHistory: "Surveillance expanded with minimal debate.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Surveillance expanded with minimal debate.", sources: [h.patriot_act] },
    ],
    sources: [h.patriot_act],
    categories: ["Democracy","Military"],
  },
  {
    id: "HH-2003-IRAQ",
    date: "2003",
    sortYear: 2003,
    era: "911 era",
    title: "Iraq WMD",
    textbookVersion: "Iraq had WMD.",
    actualHistory: "No active WMD program; war built on bad intelligence.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "No active WMD program; war built on bad intelligence.", sources: [h.iraq_wmd] },
    ],
    sources: [h.iraq_wmd],
    categories: ["Foreign Policy","Military"],
  },
  {
    id: "HH-2008-CRISIS",
    date: "2008",
    sortYear: 2008,
    era: "2008",
    title: "Financial Crisis",
    textbookVersion: "Nobody could predict the crash.",
    actualHistory: "Wall Street fraud caused collapse; few prosecuted.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Wall Street fraud caused collapse; few prosecuted.", sources: [h.financial_crisis_crs] },
    ],
    sources: [h.financial_crisis_crs],
    categories: ["Economy","Democracy"],
  },
  {
    id: "HH-2017-LOST-CAUSE",
    date: "2017-2021",
    sortYear: 2017,
    era: "Trump era",
    title: "Lost Cause Revival",
    textbookVersion: "Confederate statues preserve heritage.",
    actualHistory: "Most monuments went up during Jim Crow.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Most monuments went up during Jim Crow.", sources: [h.lost_cause_zinn, h.secession_documents] },
    ],
    sources: [h.lost_cause_zinn, h.secession_documents],
    categories: ["Race","Education"],
  },
  {
    id: "HH-2021-JAN6",
    date: "2021",
    sortYear: 2021,
    era: "Trump era",
    title: "January 6",
    textbookVersion: "It was a peaceful protest.",
    actualHistory: "Mob attacked the Capitol to overturn an election.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Mob attacked the Capitol to overturn an election.", sources: [h.jan6_archives] },
    ],
    sources: [h.jan6_archives],
    categories: ["Democracy"],
  },
  {
    id: "HH-TODAY-BANS",
    date: "2021-present",
    sortYear: 2024,
    era: "Today",
    title: "Book Bans",
    textbookVersion: "Parents want age-appropriate content.",
    actualHistory: "Thousands of history books removed-organized censorship.",
    historicalRebuttals: [
      { theySaid: "That's the official story.", youSay: "Thousands of history books removed-organized censorship.", sources: [h.book_bans_pen] },
    ],
    sources: [h.book_bans_pen],
    categories: ["Education","Race"],
  },
];

export function getHistoryEntryById(id: string) {
  return hiddenHistoryEntries.find((e) => e.id === id);
}
export function getFeaturedHistoryEntry() {
  return getHistoryEntryById("HH-1861-CIVIL-WAR") ?? hiddenHistoryEntries[0];
}
export function countHistoricalRebuttals() {
  return hiddenHistoryEntries.reduce((s, e) => s + e.historicalRebuttals.length, 0);
}
export function getHistoryStats() {
  return { entries: hiddenHistoryEntries.length, rebuttals: countHistoricalRebuttals(), eras: historyEras.length, categories: historyCategories.length };
}
export function historyDetailPath(id: string) {
  return `/history?event=${encodeURIComponent(id)}`;
}
export function filterHistoryEntries(o: { era?: HistoryEra | "All"; category?: HistoryCategory | "All"; search?: string; yearMin?: number; yearMax?: number }) {
  const q = (o.search ?? "").trim().toLowerCase();
  return hiddenHistoryEntries.filter((e) => {
    if (o.era && o.era !== "All" && e.era !== o.era) return false;
    if (o.category && o.category !== "All" && !e.categories.includes(o.category)) return false;
    if (o.yearMin !== undefined && e.sortYear < o.yearMin) return false;
    if (o.yearMax !== undefined && e.sortYear > o.yearMax) return false;
    if (q) {
      const hay = [e.title, e.textbookVersion, e.actualHistory, e.era, ...e.categories, ...e.historicalRebuttals.flatMap((r) => [r.theySaid, r.youSay])].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}
export function getAllHistoricalRebuttals() {
  const items: Array<{ entryId: string; entryTitle: string; era: HistoryEra; date: string; index: number; rebuttal: HiddenHistoryEntry["historicalRebuttals"][number] }> = [];
  for (const e of hiddenHistoryEntries) {
    e.historicalRebuttals.forEach((rebuttal, index) => items.push({ entryId: e.id, entryTitle: e.title, era: e.era, date: e.date, index, rebuttal }));
  }
  return items;
}
