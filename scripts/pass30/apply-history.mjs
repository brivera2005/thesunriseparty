/**
 * Pass 30 - Hidden History 210 -> 240+
 * Run: node scripts/pass30/apply-history.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

const historyCitations = `
  // Pass 30 expansions
  lexington_concord: c("lexington_concord", "Battles of Lexington and Concord", "Wikipedia", "https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord", "1775 battles opened the Revolutionary War after British troops marched to seize colonial arms.", "1775-04-19"),
  yorktown: c("yorktown", "Siege of Yorktown", "National Park Service", "https://www.nps.gov/york/index.htm", "1781 Franco-American victory forced British surrender and effectively ended major Revolutionary fighting.", "1781-10-19"),
  election_1800: c("election_1800", "Election of 1800", "U.S. House History", "https://history.house.gov/Institution/Origins-Development/Electoral-College/", "Contested election resolved in the House; peaceful transfer between parties set a fragile precedent.", "1801-02-17"),
  burning_washington: c("burning_washington", "Burning of Washington", "Wikipedia", "https://en.wikipedia.org/wiki/Burning_of_Washington", "British forces burned public buildings in Washington in 1814 during the War of 1812.", "1814-08-24"),
  dorr_rebellion: c("dorr_rebellion", "Dorr Rebellion", "Wikipedia", "https://en.wikipedia.org/wiki/Dorr_Rebellion", "1841-42 Rhode Island uprising over voting rights exposed how limited the franchise remained for white working men.", "1842-05-18"),
  caning_sumner: c("caning_sumner", "Caning of Charles Sumner", "U.S. Senate", "https://www.senate.gov/artandhistory/history/minute/The_Caning_of_Senator_Charles_Sumner.htm", "A House member beat Senator Sumner nearly to death on the Senate floor after an antislavery speech.", "1856-05-22"),
  gettysburg: c("gettysburg", "Battle of Gettysburg", "National Park Service", "https://www.nps.gov/gett/index.htm", "1863 battle halted Lee's invasion; the cemetery dedication produced Lincoln's Gettysburg Address.", "1863-07-03"),
  appomattox: c("appomattox", "Appomattox Court House", "National Park Service", "https://www.nps.gov/apco/index.htm", "Lee's 1865 surrender ended major Confederate field armies while Reconstruction struggles remained ahead.", "1865-04-09"),
  little_bighorn: c("little_bighorn", "Battle of the Little Bighorn", "National Park Service", "https://www.nps.gov/libi/index.htm", "Lakota, Northern Cheyenne, and Arapaho forces defeated Custer's command in 1876; the U.S. responded with intensified campaigns.", "1876-06-25"),
  compromise_1877_deep: c("compromise_1877_deep", "Compromise of 1877", "U.S. House History", "https://history.house.gov/Historical-Highlights/1851-1900/The-election-of-1876/", "Disputed 1876 election deal withdrew federal protection and helped end Reconstruction.", "1877-03-02"),
  naacp_founding: c("naacp_founding", "NAACP", "Wikipedia", "https://en.wikipedia.org/wiki/NAACP", "Founded in 1909 after Springfield race riot organizing, the NAACP litigated against Jim Crow for decades.", "1909-02-12"),
  federal_reserve_act: c("federal_reserve_act", "Federal Reserve Act", "Federal Reserve History", "https://www.federalreservehistory.org/essays/federal-reserve-act-signed", "1913 act created the Federal Reserve System after recurring panics; debates over money and power never ended.", "1913-12-23"),
  sacco_vanzetti: c("sacco_vanzetti", "Sacco and Vanzetti", "Wikipedia", "https://en.wikipedia.org/wiki/Sacco_and_Vanzetti", "Italian anarchists executed in 1927 after a contested trial that exposed nativism and Red Scare justice.", "1927-08-23"),
  social_security_act: c("social_security_act", "Social Security Act", "National Archives", "https://www.archives.gov/milestone-documents/social-security-act", "1935 act created old-age insurance and related programs while initially excluding many Black and domestic workers.", "1935-08-14"),
  hiroshima_nagasaki: c("hiroshima_nagasaki", "Atomic bombings of Hiroshima and Nagasaki", "Wikipedia", "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki", "U.S. atomic bombs killed tens of thousands instantly in 1945 and opened the nuclear age.", "1945-08-06"),
  marshall_plan: c("marshall_plan", "Marshall Plan", "U.S. Department of State", "https://history.state.gov/milestones/1945-1952/marshall-plan", "Postwar European aid rebuilt allies and contained communism while deepening U.S. global economic leadership.", "1948-04-03"),
  korean_war: c("korean_war", "Korean War", "National Archives", "https://www.archives.gov/research/military/korean-war", "1950-53 war devastated Korea and locked in Cold War militarization without a formal peace treaty.", "1950-06-25"),
  civil_rights_1964: c("civil_rights_1964", "Civil Rights Act of 1964", "National Archives", "https://www.archives.gov/milestone-documents/civil-rights-act", "Landmark statute banned segregation in public accommodations and employment discrimination.", "1964-07-02"),
  chicago_1968: c("chicago_1968", "1968 Democratic National Convention protests", "Wikipedia", "https://en.wikipedia.org/wiki/1968_Democratic_National_Convention_protests", "Police violence against antiwar protesters in Chicago shocked TV audiences and split the Democratic Party.", "1968-08-28"),
  iran_hostage: c("iran_hostage", "Iran hostage crisis", "Wikipedia", "https://en.wikipedia.org/wiki/Iran_hostage_crisis", "52 Americans held 444 days after the 1979 embassy seizure; the crisis reshaped U.S.-Iran relations.", "1979-11-04"),
  oil_crisis_1973: c("oil_crisis_1973", "1973 oil crisis", "Federal Reserve History", "https://www.federalreservehistory.org/essays/oil-shock-of-1973-74", "OPEC embargo and price shock produced stagflation politics and lasting energy-security rhetoric.", "1973-10-17"),
  sandl_crisis: c("sandl_crisis", "Savings and loan crisis", "Federal Reserve History", "https://www.federalreservehistory.org/essays/savings-and-loan-crisis", "1980s deregulation and fraud collapsed thrifts; taxpayers covered a massive cleanup.", "1989-08-09"),
  bush_v_gore: c("bush_v_gore", "Bush v. Gore", "Oyez", "https://www.oyez.org/cases/2000/00-949", "2000 ruling halted Florida recounts and effectively decided the presidential election.", "2000-12-12"),
  gitmo: c("gitmo", "Guantanamo Bay detention camp", "Wikipedia", "https://en.wikipedia.org/wiki/Guantanamo_Bay_detention_camp", "Post-9/11 detention site became a global symbol of indefinite detention and contested due process.", "2002-01-11"),
  hurricane_maria: c("hurricane_maria", "Hurricane Maria", "Wikipedia", "https://en.wikipedia.org/wiki/Hurricane_Maria", "2017 storm devastated Puerto Rico; delayed federal response and death-toll disputes exposed colonial neglect.", "2017-09-20"),
  mariel_boatlift: c("mariel_boatlift", "Mariel boatlift", "Wikipedia", "https://en.wikipedia.org/wiki/Mariel_boatlift", "1980 exodus from Cuba reshaped Miami politics and fueled immigration panic narratives.", "1980-04-15"),
  three_fifths_deep: c("three_fifths_deep", "Three-Fifths Compromise", "Congressional Research Service", "https://constitution.congress.gov/browse/essay/artI-S2-C3-3/ALDE_00001082/", "Enslaved people counted as three-fifths for representation but had no votes.", "1787-09-17"),
  trail_tears_deep: c("trail_tears_deep", "Trail of Tears", "National Park Service", "https://www.nps.gov/trte/index.htm", "Forced Cherokee removal killed thousands on the march west after the Indian Removal Act.", "1838-01-01"),
  tulsa_deep: c("tulsa_deep", "Tulsa Race Massacre", "Wikipedia", "https://en.wikipedia.org/wiki/Tulsa_race_massacre", "White mobs destroyed Greenwood in 1921; official silence lasted generations.", "1921-05-31"),
  stonewall_deep: c("stonewall_deep", "Stonewall Riots", "National Park Service", "https://www.nps.gov/places/stonewall.htm", "1969 uprising against police raids sparked modern LGBTQ organizing.", "1969-06-28"),
  shelby_deep: c("shelby_deep", "Shelby County v. Holder", "Oyez", "https://www.oyez.org/cases/2012/12-96", "2013 ruling gutted Voting Rights Act preclearance and enabled a wave of restrictive voting laws.", "2013-06-25"),
  citizens_united_deep: c("citizens_united_deep", "Citizens United v. FEC", "Oyez", "https://www.oyez.org/cases/2008/08-205", "2010 ruling opened unlimited independent political spending by corporations and unions.", "2010-01-21"),
`;

function entry(id, date, sortYear, era, title, textbook, actual, rebuttals, sources, categories, related) {
  const reb = rebuttals
    .map(
      ([they, you, srcs]) =>
        `      { theySaid: ${JSON.stringify(they)}, youSay: ${JSON.stringify(you)}, sources: [${srcs.map((s) => `h.${s}`).join(", ")}] },`
    )
    .join("\n");
  return `  {
    id: ${JSON.stringify(id)},
    date: ${JSON.stringify(date)},
    sortYear: ${sortYear},
    era: ${JSON.stringify(era)},
    title: ${JSON.stringify(title)},
    textbookVersion: ${JSON.stringify(textbook)},
    actualHistory: ${JSON.stringify(actual)},
    historicalRebuttals: [
${reb}
    ],
    sources: [${sources.map((s) => `h.${s}`).join(", ")}],
    categories: [${categories.map((c) => JSON.stringify(c)).join(",")}],${
    related ? `\n    relatedEvents: [${related.map((r) => JSON.stringify(r)).join(", ")}],` : ""
  }
  },`;
}

const historyEntries = [
  entry("HH-1775-LEXINGTON", "1775", 1775, "Revolution", "Lexington and Concord",
    "A clean start to a war for liberty that everyone agreed on.",
    "British troops marched to seize arms; colonial militia fought back and opened a revolution still unfinished on slavery and Native land.",
    [["It was only about taxes.", "It was about power, arms, and who counted as the people. Enslaved and Native nations were not in the liberty brochure.", ["lexington_concord"]]],
    ["lexington_concord"], ["Military", "Democracy"]),
  entry("HH-1781-YORKTOWN", "1781", 1781, "Revolution", "Yorktown Victory",
    "Americans alone defeated Britain and instantly built a free republic.",
    "French fleet and troops were decisive; independence still left slavery and Indigenous dispossession intact.",
    [["We won without help.", "French guns and ships made Yorktown possible. Myths of solitary genius erase alliances.", ["yorktown"]]],
    ["yorktown"], ["Military", "Foreign Policy"]),
  entry("HH-1800-ELECTION", "1800", 1800, "Early Republic", "Election of 1800",
    "Proof the system always transfers power smoothly.",
    "A deadlocked House fight nearly broke the republic; peaceful transfer was improvisation under pressure, not destiny.",
    [["The founders designed perfect succession.", "They designed a crisis machine that almost failed in year four of party politics.", ["election_1800"]]],
    ["election_1800"], ["Democracy"]),
  entry("HH-1814-WASHINGTON", "1814", 1814, "Early Republic", "Burning of Washington",
    "A minor embarrassment with no lasting lesson.",
    "British forces burned public buildings after U.S. invasions of Canada; Native allies and contested borders framed the war.",
    [["It was just fog of war.", "Empire projects rebound. The capital burned because expansion politics met a peer military.", ["burning_washington", "war_of_1812"]]],
    ["burning_washington"], ["Military", "Foreign Policy"]),
  entry("HH-1842-DORR", "1842", 1842, "Antebellum", "Dorr Rebellion",
    "Rhode Island trivia about ballots.",
    "Armed conflict over who could vote showed how narrow white male suffrage still was decades after independence.",
    [["America always had universal democracy.", "Even white working men had to rebel for the ballot. That is not a finished product.", ["dorr_rebellion"]]],
    ["dorr_rebellion"], ["Democracy"]),
  entry("HH-1856-SUMNER", "1856", 1856, "Antebellum", "Caning of Charles Sumner",
    "A personal spat between hotheaded politicians.",
    "A House member beat an antislavery senator nearly to death on the Senate floor; slavery's defenders treated speech as violence.",
    [["Both sides were extreme.", "One side used a cane to stop debate about human bondage. That is not symmetry.", ["caning_sumner"]]],
    ["caning_sumner"], ["Race", "Democracy"]),
  entry("HH-1863-GETTYSBURG", "1863", 1863, "Civil War", "Gettysburg",
    "A glorious turning point that healed the nation overnight.",
    "The battle stopped Lee's invasion; Lincoln's address reframed the war as a test of equality the country still failed to meet.",
    [["The speech settled everything.", "A two-minute speech cannot bury slavery's unfinished business. Reconstruction had to try.", ["gettysburg", "emancipation_limits"]]],
    ["gettysburg"], ["Military", "Race"]),
  entry("HH-1865-APPOMATTOX", "1865", 1865, "Civil War", "Appomattox Surrender",
    "The war ended and everyone reconciled as equals.",
    "Lee surrendered a field army; Black freedom still faced Black Codes, terror, and a political betrayal within twelve years.",
    [["Appomattox closed the book.", "Surrender ended a campaign. Citizenship fights filled the next century.", ["appomattox", "black_codes"]]],
    ["appomattox"], ["Military", "Race"]),
  entry("HH-1876-LITTLE-BIGHORN", "1876", 1876, "Gilded Age", "Little Bighorn",
    "Custer's last stand as noble tragedy.",
    "Indigenous coalition victory was followed by intensified U.S. campaigns, reservation confinement, and mythmaking that erased Native strategy.",
    [["Savages ambushed heroes.", "A wartime defeat became propaganda. Native nations were defending land under broken treaties.", ["little_bighorn"]]],
    ["little_bighorn"], ["Native", "Military"]),
  entry("HH-1877-COMPROMISE-DEEP", "1877", 1877, "Reconstruction", "Compromise of 1877",
    "A technical election fix with no racial meaning.",
    "Disputed-election bargaining withdrew federal protection from the South and helped bury Reconstruction.",
    [["It was just politics.", "Trading Black citizenship for a presidency is the definition of racial politics.", ["compromise_1877_deep", "compromise_1877"]]],
    ["compromise_1877_deep"], ["Race", "Democracy"], ["HH-1865-RECONSTRUCTION"]),
  entry("HH-1909-NAACP", "1909", 1909, "Progressive", "NAACP Founding",
    "Race relations naturally improved without organized pressure.",
    "After Springfield violence, organizers built a lasting legal and protest infrastructure against Jim Crow.",
    [["Courts alone fixed racism.", "Courts moved when movements sued, marched, and refused silence.", ["naacp_founding"]]],
    ["naacp_founding"], ["Race", "Democracy"]),
  entry("HH-1913-FED", "1913", 1913, "Progressive", "Federal Reserve Act",
    "A neutral technocratic fix with no politics.",
    "Panic-driven reform created a central bank; money, credit, and accountability fights never left American politics.",
    [["The Fed is above democracy.", "Congress created it after crises. Power without oversight is a political choice.", ["federal_reserve_act"]]],
    ["federal_reserve_act"], ["Economy", "Democracy"]),
  entry("HH-1927-SACCO", "1927", 1927, "Roaring 20s", "Sacco and Vanzetti",
    "Two criminals fairly tried and punished.",
    "Nativism and Red Scare politics tainted the case; the executions became a global symbol of biased justice.",
    [["The evidence was open-and-shut.", "Open-and-shut cases do not haunt generations of historians and jurists.", ["sacco_vanzetti"]]],
    ["sacco_vanzetti"], ["Democracy", "Race"]),
  entry("HH-1935-SSA", "1935", 1935, "Depression", "Social Security Act",
    "A color-blind safety net for everyone immediately.",
    "The act built a landmark safety net while occupational exclusions left many Black and domestic workers outside at launch.",
    [["New Deal programs treated all workers equally.", "Exclusions tracked Jim Crow labor markets. Design choices can encode racism without saying race.", ["social_security_act"]]],
    ["social_security_act"], ["Economy", "Race"]),
  entry("HH-1945-HIROSHIMA", "1945", 1945, "WWII", "Hiroshima and Nagasaki",
    "The only possible way to end the war with no moral remainder.",
    "Atomic bombings killed civilians at industrial scale and opened nuclear brinkmanship that still structures global politics.",
    [["It saved more lives, end of debate.", "Even if you accept that argument, civilians incinerated deserve honest reckoning, not cheerleading.", ["hiroshima_nagasaki"]]],
    ["hiroshima_nagasaki"], ["Military", "Foreign Policy"]),
  entry("HH-1948-MARSHALL", "1948", 1948, "Cold War", "Marshall Plan",
    "Pure charity with no strategic motive.",
    "Aid rebuilt Western Europe and contained Soviet influence while cementing U.S. economic leadership.",
    [["We only help out of kindness.", "Strategy and solidarity can coexist. Denying strategy is propaganda.", ["marshall_plan"]]],
    ["marshall_plan"], ["Foreign Policy", "Economy"]),
  entry("HH-1950-KOREAN", "1950-1953", 1950, "Cold War", "Korean War",
    "A quick police action with tidy results.",
    "Millions died; the peninsula remains divided without a peace treaty, and U.S. militarization deepened.",
    [["It was a limited footnote war.", "Footnotes do not kill millions or freeze a nuclear frontier for 70 years.", ["korean_war"]]],
    ["korean_war"], ["Military", "Foreign Policy"]),
  entry("HH-1964-CRA", "1964", 1964, "Civil Rights", "Civil Rights Act of 1964",
    "The nation spontaneously became fair overnight.",
    "Statute banned Jim Crow public accommodations and job discrimination after decades of organizing and bloodshed.",
    [["The law ended racism.", "The law banned legal segregation. Enforcement and backlash never stopped.", ["civil_rights_1964", "voting_rights_1965"]]],
    ["civil_rights_1964"], ["Race", "Democracy"]),
  entry("HH-1968-CHICAGO", "1968", 1968, "Vietnam", "Chicago DNC Police Riot",
    "Hippies attacked cops and got what they deserved.",
    "Televised police violence against antiwar protesters split the party and showed dissent policing in real time.",
    [["Law and order was under siege.", "Clubs on camera against demonstrators is state violence, not a debate club.", ["chicago_1968"]]],
    ["chicago_1968"], ["Democracy", "Military"]),
  entry("HH-1973-OIL", "1973", 1973, "Vietnam", "Oil Embargo Shock",
    "Arab greed alone explains everything.",
    "Embargo and price shock hit an oil-dependent economy; U.S. Middle East policy and domestic inequality shaped the pain.",
    [["Just drill and ignore geopolitics.", "Energy shocks are policy outcomes. Gas lines were not a morality play.", ["oil_crisis_1973"]]],
    ["oil_crisis_1973"], ["Economy", "Foreign Policy"]),
  entry("HH-1979-HOSTAGE", "1979-1981", 1979, "Reagan era", "Iran Hostage Crisis",
    "Iran went mad for no reason.",
    "Embassy seizure followed a CIA-backed 1953 coup memory and the Shah's U.S. medical haven; 444 days remade U.S. politics.",
    [["History started in 1979.", "1953 is part of 1979. Amnesia is not foreign-policy analysis.", ["iran_hostage", "iran_coup"]]],
    ["iran_hostage"], ["Foreign Policy", "Democracy"]),
  entry("HH-1980-MARIEL", "1980", 1980, "Reagan era", "Mariel Boatlift",
    "Proof open borders always destroy cities.",
    "A sudden Cuban exodus strained Miami and fueled panic politics while most arrivals rebuilt lives under Cold War refugee framing.",
    [["Immigrants arrived as criminals en masse.", "Regime releases and refugee flows are not the same as a crime wave franchise.", ["mariel_boatlift"]]],
    ["mariel_boatlift"], ["Foreign Policy", "Race"]),
  entry("HH-1989-SANDL", "1989", 1989, "Reagan era", "Savings and Loan Crisis",
    "A few bad apples, no deregulation story.",
    "Thrift deregulation plus fraud produced a taxpayer-funded cleanup and a preview of too-big-to-fail politics.",
    [["Markets self-corrected.", "Taxpayers corrected it. That is a bailout with a different logo.", ["sandl_crisis"]]],
    ["sandl_crisis"], ["Economy"]),
  entry("HH-2000-BUSH-GORE", "2000", 2000, "911 era", "Bush v. Gore",
    "The Court neutrally followed the law and everyone moved on.",
    "A 5-4 ruling halted recounts and decided the presidency; equal-protection logic was limited to that case.",
    [["Courts never do politics.", "When nine justices pick a president, calling it pure law is fan fiction.", ["bush_v_gore"]]],
    ["bush_v_gore"], ["Democracy"]),
  entry("HH-2002-GITMO", "2002", 2002, "911 era", "Guantanamo Detention",
    "Only terrorists held briefly with full rights.",
    "Indefinite detention without normal trials made Guantanamo a global due-process crisis still unresolved for some prisoners.",
    [["They do not deserve courts.", "If rights only cover the popular, they are privileges. That is the whole point of due process.", ["gitmo", "patriot_act"]]],
    ["gitmo"], ["Democracy", "Foreign Policy"]),
  entry("HH-2017-MARIA", "2017", 2017, "Trump era", "Hurricane Maria",
    "A tough storm handled as well as possible.",
    "Puerto Rico's colonial status, delayed aid, and death-toll disputes exposed unequal disaster citizenship.",
    [["Paper towels were enough.", "Paper towels are not a FEMA plan. Death counts are not a branding exercise.", ["hurricane_maria"]]],
    ["hurricane_maria"], ["Healthcare", "Democracy"]),
  entry("HH-1787-THREE-FIFTHS-DEEP", "1787", 1787, "Early Republic", "Three-Fifths Power Grab",
    "A compromise that limited slavery's power.",
    "Counting enslaved people for seats without votes boosted slaveholder power in Congress and the Electoral College.",
    [["It was an antislavery bargain.", "Extra seats for men who held humans in bondage is not abolition math.", ["three_fifths_deep", "three_fifths_crs"]]],
    ["three_fifths_deep"], ["Democracy", "Race"], ["HH-1787-THREE-FIFTHS"]),
  entry("HH-1838-TRAIL-DEEP", "1838-1839", 1838, "Antebellum", "Trail of Tears Forced March",
    "A sad but orderly relocation for everyone's good.",
    "Soldiers forced Cherokee removal; thousands died on the march after the Indian Removal Act.",
    [["They signed treaties freely.", "Treaties signed under coercion and fraud do not erase a death march.", ["trail_tears_deep", "indian_removal_crs"]]],
    ["trail_tears_deep"], ["Native", "Race"], ["HH-1838-TRAIL-TEARS"]),
  entry("HH-1921-TULSA-DEEP", "1921", 1921, "Roaring 20s", "Greenwood Destroyed",
    "A riot with blame on both sides.",
    "White mobs burned Black Wall Street and killed residents; officials buried the story for decades.",
    [["Property damage goes both ways.", "Aerial attack and mass graves are not a mutual scuffle.", ["tulsa_deep", "tulsa_massacre"]]],
    ["tulsa_deep"], ["Race", "Economy"], ["HH-1921-TULSA"]),
  entry("HH-1969-STONEWALL-DEEP", "1969", 1969, "Civil Rights", "Stonewall Uprising",
    "A bar fight that activists later exaggerated.",
    "Patrons fought a police raid and sparked lasting LGBTQ organizing against criminalization.",
    [["Nobody cared until recently.", "People cared enough to risk arrest. Erasure is the old policy.", ["stonewall_deep", "stonewall_nps"]]],
    ["stonewall_deep"], ["LGBTQ", "Democracy"], ["HH-1969-STONEWALL"]),
  entry("HH-2010-CITIZENS-DEEP", "2010", 2010, "2008", "Citizens United Money Flood",
    "Free speech for everyone, equally.",
    "The ruling unlocked unlimited independent spending and accelerated dark-money politics.",
    [["Corporations are just people speaking.", "Treasury-sized megaphones are not the same as a neighbor's yard sign.", ["citizens_united_deep"]]],
    ["citizens_united_deep"], ["Democracy", "Economy"], ["HH-2010-CITIZENS-UNITED"]),
  entry("HH-2013-SHELBY-DEEP", "2013", 2013, "Today", "Shelby County Gut Punch",
    "A technical update to an outdated map.",
    "Striking preclearance invited a wave of voting restrictions in places with long discrimination records.",
    [["Racism in voting is over.", "If it were over, states would not have raced to pass barriers the moment preclearance died.", ["shelby_deep", "voting_rights_1965"]]],
    ["shelby_deep"], ["Democracy", "Race"], ["HH-2013-SHELBY"]),
];

{
  const file = data("history-citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 30 expansions")) {
    src = src.replace(/\n};\s*$/, "\n" + historyCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("history citations patched");
  } else console.log("history citations already patched");
}

{
  const file = data("hidden-history.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("HH-1775-LEXINGTON")) {
    const block = historyEntries.join("\n");
    src = src.replace(/\n\];\s*\n\nexport function getHistoryEntryById/, "\n" + block + "\n];\n\nexport function getHistoryEntryById");
    writeFileSync(file, src);
    console.log("added", historyEntries.length, "history entries");
  } else console.log("history entries already present");
}
