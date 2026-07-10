import { writeFileSync } from "fs";
import { historyCitations as h } from "../lib/data/history-citations.ts";

const key = (c) => Object.entries(h).find(([, v]) => v === c)?.[0];

const entries = [
  ["HH-1492-COLUMBUS", "1492", 1492, "Colonial", "Columbus Discovery", "Columbus discovered America and opened the New World for civilization.", "Millions lived here already. Columbus enslaved Taínos and launched colonization that killed up to 90% of Native people.", [["Columbus was an explorer not a conqueror.", "You cannot discover land where millions already live.", [h.columbus_loc, h.columbus_zinn]]], [h.columbus_loc, h.columbus_zinn], ["Native", "Race"]],
  ["HH-1619-SLAVERY", "1619", 1619, "Colonial", "Slavery in Virginia", "Slavery was a natural Southern tradition.", "Virginia passed laws making slavery hereditary and race-based within decades of 1619.", [["Slavery was always normal.", "Race-based chattel slavery was invented by specific laws.", [h.jamestown_1619]]], [h.jamestown_1619], ["Race", "Labor"]],
  ["HH-1621-THANKSGIVING", "1621", 1621, "Colonial", "First Thanksgiving", "Pilgrims and Natives shared a friendly harvest feast.", "A brief 1621 meeting; within decades colonists waged war on Wampanoag people.", [["Why politicize Thanksgiving?", "The story children learn is not what historians document.", [h.thanksgiving_nps, h.thanksgiving_zinn]]], [h.thanksgiving_nps, h.thanksgiving_zinn], ["Native", "Education"]],
  ["HH-1776-DECLARATION", "1776", 1776, "Revolution", "Declaration of Independence", "Founders built a nation on liberty for all.", "Jefferson condemned slavery in draft; Southern delegates removed it.", [], [h.declaration_slavery], ["Democracy", "Race"]],
  ["HH-1787-THREE-FIFTHS", "1787", 1787, "Early Republic", "Three-Fifths Compromise", "A fair math compromise on representation.", "Enslaved people counted 3/5 for seats but got zero votes.", [["It was not about humanity.", "Slave states got extra Congress seats because of people they enslaved.", [h.three_fifths_crs]]], [h.three_fifths_crs], ["Democracy", "Race"]],
  ["HH-1830-REMOVAL", "1830", 1830, "Antebellum", "Indian Removal", "Pioneers settled empty frontier land.", "Federal law forced Native nations off homelands; thousands died.", [], [h.indian_removal_crs], ["Native", "Military"]],
  ["HH-1850-FUGITIVE", "1850", 1850, "Antebellum", "Fugitive Slave Act", "Slavery was states rights.", "Federal law forced free states to capture escaped enslaved people.", [["Civil War was states rights.", "Secession papers cite slavery. Feds hunted runaways.", [h.fugitive_slave_act, h.secession_documents]]], [h.fugitive_slave_act, h.secession_documents], ["Race", "Democracy"]],
  ["HH-1857-DRED-SCOTT", "1857", 1857, "Antebellum", "Dred Scott", "The Court neutrally interpreted the Constitution.", "Court denied Black citizenship and protected slavery.", [], [h.dred_scott], ["Race", "Democracy"]],
  ["HH-1861-CIVIL-WAR", "1861-1865", 1861, "Civil War", "Causes of Civil War", "War was over states rights.", "Secession documents say slavery was the cause.", [["Ancestors fought for states rights.", "Read the secession documents.", [h.secession_documents, h.lost_cause_zinn]], ["Heritage not hate.", "One side fought to keep four million enslaved.", [h.lost_cause_zinn]]], [h.secession_documents, h.lost_cause_zinn], ["Race", "Military"]],
  ["HH-1863-EMANCIPATION", "1863", 1863, "Civil War", "Emancipation Proclamation", "Lincoln freed all slaves instantly.", "Freed people only in Confederate states until 1865.", [], [h.emancipation_limits], ["Race", "Military"]],
  ["HH-1865-RECONSTRUCTION", "1865-1877", 1865, "Reconstruction", "Reconstruction Betrayal", "Reconstruction failed naturally.", "Terrorism and 1877 Compromise ended Black rights for a century.", [["Happy slaves myth.", "People risked death to escape.", [h.fugitive_slave_act, h.lost_cause_zinn]]], [h.reconstruction_crs, h.compromise_1877, h.black_codes], ["Race", "Democracy"]],
  ["HH-1879-BOARDING", "1879-1970s", 1879, "Gilded Age", "Native Boarding Schools", "Schools helped Native children.", "Children were taken, languages banned, thousands died.", [], [h.boarding_schools], ["Native", "Education"]],
  ["HH-1886-HAYMARKET", "1886", 1886, "Gilded Age", "Haymarket Affair", "Prosperity came from free enterprise.", "Workers fought for the eight-hour day; leaders executed in sham trial.", [], [h.haymarket], ["Labor", "Economy"]],
  ["HH-1890-WOUNDED-KNEE", "1890", 1890, "Gilded Age", "Wounded Knee", "Indian Wars ended peacefully.", "Soldiers killed hundreds of disarmed Lakota families.", [], [h.wounded_knee], ["Native", "Military"]],
  ["HH-1896-PLESSY", "1896", 1896, "Gilded Age", "Plessy v Ferguson", "Separate but equal was reasonable.", "Segregation was apartheid.", [], [h.plessy_ferguson, h.black_codes], ["Race", "Education"]],
  ["HH-1899-PHILIPPINES", "1899-1902", 1899, "Progressive", "Philippine-American War", "America freed the Philippines.", "U.S. fought brutal counterinsurgency after Filipinos declared independence.", [], [h.philippines_war], ["Foreign Policy", "Military"]],
  ["HH-1917-ESPIONAGE", "1917", 1917, "WWI", "Espionage Act", "America fought for democracy.", "Anti-war speech was criminalized.", [], [h.espionage_act], ["Democracy", "Military"]],
  ["HH-1921-TULSA", "1921", 1921, "Roaring 20s", "Tulsa Massacre", "The 1920s were prosperous for everyone.", "White mobs destroyed Black Wall Street; covered up for decades.", [], [h.tulsa_massacre], ["Race", "Economy"]],
  ["HH-1923-ROSEWOOD", "1923", 1923, "Roaring 20s", "Rosewood Massacre", "One bad town.", "White mob destroyed a Black town; covered up 70 years.", [], [h.rosewood, h.tulsa_massacre], ["Race"]],
  ["HH-1932-TUSKEGEE", "1932-1972", 1932, "Depression", "Tuskegee Study", "Medicine always helped people.", "U.S. withheld syphilis treatment from Black men for 40 years.", [], [h.tuskegee_study], ["Healthcare", "Race"]],
  ["HH-1932-BONUS", "1932", 1932, "Depression", "Bonus Army", "Government honored veterans.", "Army attacked veteran protesters; two killed.", [], [h.bonus_army], ["Military", "Labor"]],
  ["HH-1934-REDLINING", "1934-1968", 1934, "Depression", "Federal Redlining", "Anyone could build wealth with hard work.", "Federal maps denied Black families mortgages.", [], [h.redlining_hud], ["Race", "Economy"]],
  ["HH-1942-INTERNMENT", "1942", 1942, "WWII", "Japanese Internment", "WWII defended freedom.", "120,000 Japanese Americans imprisoned without charges.", [], [h.japanese_internment], ["Race", "Military"]],
  ["HH-1945-PAPERCLIP", "1945-1959", 1945, "WWII", "Operation Paperclip", "America won the space race alone.", "U.S. brought 1,600+ Nazi scientists and hid records.", [], [h.operation_paperclip], ["Military", "Foreign Policy"]],
  ["HH-1950-MCCARTHY", "1950-1954", 1950, "Cold War", "McCarthyism", "Cold War protected freedom.", "Thousands lost careers to false accusations.", [], [h.mccarthyism, h.cointelpro], ["Democracy", "Labor"]],
  ["HH-1953-IRAN", "1953", 1953, "Cold War", "CIA Coup in Iran", "America spreads democracy.", "CIA overthrew elected Mossadegh over oil.", [], [h.iran_coup], ["Foreign Policy", "Military"]],
  ["HH-1954-GUATEMALA", "1954", 1954, "Cold War", "CIA Coup in Guatemala", "U.S. supports self-determination.", "CIA overthrew elected government for United Fruit.", [], [h.guatemala_coup], ["Foreign Policy", "Economy"]],
  ["HH-1954-BROWN", "1954", 1954, "Civil Rights", "Brown Resistance", "Brown ended segregation peacefully.", "Massive resistance closed schools and deployed troops.", [], [h.brown_v_board, h.plessy_ferguson], ["Race", "Education"]],
  ["HH-1956-COINTELPRO", "1956-1971", 1956, "Civil Rights", "COINTELPRO", "FBI protected civil rights.", "FBI illegally disrupted civil rights groups.", [], [h.cointelpro], ["Democracy", "Race"]],
  ["HH-1953-MKULTRA", "1953-1973", 1953, "Cold War", "MK-Ultra", "Intelligence follows the law.", "CIA ran illegal mind-control experiments.", [], [h.mkultra], ["Healthcare", "Military"]],
  ["HH-1964-TONKIN", "1964", 1964, "Vietnam", "Gulf of Tonkin", "Congress declared war after an attack.", "War authorized on exaggerated incidents.", [], [h.gulf_of_tonkin], ["Foreign Policy", "Military"]],
  ["HH-1969-STONEWALL", "1969", 1969, "Civil Rights", "Stonewall", "Gay rights appeared suddenly.", "Trans women of color led the 1969 uprising.", [], [h.stonewall_nps], ["Race", "Democracy"]],
  ["HH-1973-CHILE", "1973", 1973, "Cold War", "Chile Coup", "Pinochet stopped communism.", "U.S. backed overthrow of elected Allende.", [], [h.chile_coup], ["Foreign Policy", "Military"]],
  ["HH-1972-WATERGATE", "1972-1974", 1972, "Cold War", "Watergate", "The system worked.", "Nixon ordered crimes then was pardoned.", [], [h.watergate], ["Democracy"]],
  ["HH-1986-IRAN-CONTRA", "1986", 1986, "Reagan era", "Iran-Contra", "Reagan restored leadership.", "Officials sold arms to Iran and funded Contras illegally.", [], [h.iran_contra], ["Foreign Policy", "Democracy"]],
  ["HH-2001-PATRIOT", "2001", 2001, "911 era", "Patriot Act", "Security and freedom were balanced.", "Surveillance expanded with minimal debate.", [], [h.patriot_act], ["Democracy", "Military"]],
  ["HH-2003-IRAQ", "2003", 2003, "911 era", "Iraq WMD", "Iraq had WMD.", "No active WMD program; war built on bad intelligence.", [], [h.iraq_wmd], ["Foreign Policy", "Military"]],
  ["HH-2008-CRISIS", "2008", 2008, "2008", "Financial Crisis", "Nobody could predict the crash.", "Wall Street fraud caused collapse; few prosecuted.", [], [h.financial_crisis_crs], ["Economy", "Democracy"]],
  ["HH-2017-LOST-CAUSE", "2017-2021", 2017, "Trump era", "Lost Cause Revival", "Confederate statues preserve heritage.", "Most monuments went up during Jim Crow.", [], [h.lost_cause_zinn, h.secession_documents], ["Race", "Education"]],
  ["HH-2021-JAN6", "2021", 2021, "Trump era", "January 6", "It was a peaceful protest.", "Mob attacked the Capitol to overturn an election.", [], [h.jan6_archives], ["Democracy"]],
  ["HH-TODAY-BANS", "2021-present", 2024, "Today", "Book Bans", "Parents want age-appropriate content.", "Thousands of history books removed—organized censorship.", [], [h.book_bans_pen], ["Education", "Race"]],
];

const eras = ["Colonial", "Revolution", "Early Republic", "Antebellum", "Civil War", "Reconstruction", "Gilded Age", "Progressive", "WWI", "Roaring 20s", "Depression", "WWII", "Cold War", "Civil Rights", "Vietnam", "Reagan era", "911 era", "2008", "Trump era", "Today"];
const categories = ["Foreign Policy", "Race", "Labor", "Native", "Democracy", "Economy", "Military", "Healthcare", "Education"];

const out = [];
out.push('import type { HiddenHistoryEntry, HistoryCategory, HistoryEra } from "@/lib/types";');
out.push('import { historyCitations as h } from "./history-citations";');
out.push(`export const historyEras: HistoryEra[] = ${JSON.stringify(eras)};`);
out.push(`export const historyCategories: HistoryCategory[] = ${JSON.stringify(categories)};`);
out.push("export const hiddenHistoryEntries: HiddenHistoryEntry[] = [");

for (const [id, date, sortYear, era, title, tb, act, rebuttals, sources, cats] of entries) {
  out.push("  {");
  out.push(`    id: ${JSON.stringify(id)},`);
  out.push(`    date: ${JSON.stringify(date)},`);
  out.push(`    sortYear: ${sortYear},`);
  out.push(`    era: ${JSON.stringify(era)},`);
  out.push(`    title: ${JSON.stringify(title)},`);
  out.push(`    textbookVersion: ${JSON.stringify(tb)},`);
  out.push(`    actualHistory: ${JSON.stringify(act)},`);
  out.push("    historicalRebuttals: [");
  const rebuttalList = rebuttals.length > 0 ? rebuttals : [["That's the official story.", act, sources.slice(0, 2)]];
  for (const [they, you, srcs] of rebuttalList) {
      out.push(`      { theySaid: ${JSON.stringify(they)}, youSay: ${JSON.stringify(you)}, sources: [${srcs.map((s) => `h.${key(s)}`).join(", ")}] },`);
    }
  out.push("    ],");
  out.push(`    sources: [${sources.map((s) => `h.${key(s)}`).join(", ")}],`);
  out.push(`    categories: ${JSON.stringify(cats)},`);
  out.push("  },");
}
out.push("];");
out.push(`
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
  return \`/history?event=\${encodeURIComponent(id)}\`;
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
`);

writeFileSync("lib/data/hidden-history.ts", out.join("\n"));
console.log("Wrote", entries.length, "entries");
