/**
 * Pass 28 - Hidden History 154 -> 180+
 * Run: node scripts/pass28/apply-history.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

const historyCitations = `
  // Pass 28 expansions
  pequot_war: c("pequot_war", "Pequot War", "National Park Service", "https://en.wikipedia.org/wiki/Pequot_War", "1636-38 war ended with the Mystic massacre and enslavement of Pequot survivors.", "1637-05-26"),
  proclamation_1763: c("proclamation_1763", "Royal Proclamation of 1763", "Library of Congress", "https://www.loc.gov/rr/program/bib/ourdocs/indian.html", "Britain barred colonial settlement west of the Appalachians; settlers ignored it.", "1763-10-07"),
  northwest_ordinance: c("northwest_ordinance", "Northwest Ordinance", "National Archives", "https://www.archives.gov/milestone-documents/northwest-ordinance", "1787 ordinance banned slavery in the Northwest Territory while structuring settler expansion onto Native lands.", "1787-07-13"),
  whiskey_rebellion: c("whiskey_rebellion", "Whiskey Rebellion", "National Park Service", "https://en.wikipedia.org/wiki/Whiskey_Rebellion", "Federal troops suppressed western Pennsylvania tax resistance in 1794, asserting federal power.", "1794-01-01"),
  haitian_revolution: c("haitian_revolution", "Haitian Revolution", "Library of Congress", "https://www.loc.gov/item/today-in-history/january-01/", "Enslaved people in Saint-Domingue overthrew French rule; U.S. elites feared the example.", "1804-01-01"),
  war_of_1812: c("war_of_1812", "War of 1812", "National Park Service", "https://www.nps.gov/subjects/warof1812/index.htm", "War with Britain included Native alliances, the burning of Washington, and contested U.S. expansion.", "1812-06-18"),
  seminole_wars: c("seminole_wars", "Seminole Wars", "National Park Service", "https://en.wikipedia.org/wiki/Seminole_Wars", "U.S. wars against Seminole people in Florida were among the longest and costliest Indian wars.", "1817-01-01"),
  seneca_falls: c("seneca_falls", "Seneca Falls Convention", "National Park Service", "https://www.nps.gov/wori/learn/historyculture/the-first-womens-rights-convention.htm", "1848 convention demanded women's suffrage and equal rights while often sidelining Black women.", "1848-07-19"),
  harpers_ferry: c("harpers_ferry", "John Brown's Raid on Harpers Ferry", "National Park Service", "https://www.nps.gov/hafe/learn/historyculture/john-brown.htm", "Brown's 1859 raid aimed to spark a slave uprising; Southern leaders treated abolition as existential threat.", "1859-10-16"),
  memphis_massacre: c("memphis_massacre", "Memphis Massacre of 1866", "National Park Service", "https://en.wikipedia.org/wiki/Memphis_massacre_of_1866", "White mobs and police killed Black residents and burned schools and churches after the Civil War.", "1866-05-01"),
  new_orleans_1866: c("new_orleans_1866", "New Orleans Massacre of 1866", "National Park Service", "https://en.wikipedia.org/wiki/New_Orleans_massacre_of_1866", "Police and white mobs attacked a Black suffrage convention, killing dozens.", "1866-07-30"),
  great_railroad_strike: c("great_railroad_strike", "Great Railroad Strike of 1877", "Library of Congress", "https://www.loc.gov/item/today-in-history/july-16/", "Nationwide railroad strike met federal troops and state militias; scores of workers died.", "1877-07-16"),
  fourteenth_amendment: c("fourteenth_amendment", "14th Amendment", "National Archives", "https://www.archives.gov/milestone-documents/14th-amendment", "1868 amendment defined birthright citizenship and equal protection after the Civil War.", "1868-07-09"),
  spanish_american: c("spanish_american", "Spanish-American War", "U.S. Department of State", "https://history.state.gov/milestones/1866-1898/spanish-american-war", "1898 war launched overseas empire in Cuba, Puerto Rico, Guam, and the Philippines.", "1898-04-25"),
  east_st_louis: c("east_st_louis", "East St. Louis Massacre", "National Park Service", "https://en.wikipedia.org/wiki/East_St._Louis_massacre", "White mobs killed scores of Black residents in 1917 amid labor and migration tensions.", "1917-07-02"),
  nineteenth_amendment: c("nineteenth_amendment", "19th Amendment", "National Archives", "https://www.archives.gov/milestone-documents/19th-amendment", "Women won the constitutional right to vote in 1920 while many Black and Native women remained blocked by Jim Crow and other barriers.", "1920-08-18"),
  detroit_1943: c("detroit_1943", "Detroit Race Riot of 1943", "National Park Service", "https://en.wikipedia.org/wiki/1943_Detroit_race_riot", "Wartime housing and job competition exploded into racial violence killing 34 people.", "1943-06-20"),
  eo_9981: c("eo_9981", "Executive Order 9981", "Harry S. Truman Library", "https://www.trumanlibrary.gov/library/executive-orders/9981", "Truman ordered desegregation of the U.S. armed forces in 1948.", "1948-07-26"),
  montgomery_bus: c("montgomery_bus", "Montgomery Bus Boycott", "National Park Service", "https://www.nps.gov/articles/montgomery-bus-boycott.htm", "A year-long boycott after Rosa Parks's arrest forced bus desegregation and elevated mass nonviolent protest.", "1955-12-05"),
  march_on_washington: c("march_on_washington", "March on Washington", "National Park Service", "https://www.nps.gov/articles/march-on-washington.htm", "1963 march demanded jobs and freedom; organizers faced FBI surveillance even as the speech entered textbooks.", "1963-08-28"),
  watts_1965: c("watts_1965", "Watts Rebellion", "National Park Service", "https://en.wikipedia.org/wiki/Watts_riots", "Police stop of a Black motorist ignited days of uprising against poverty and policing in Los Angeles.", "1965-08-11"),
  mlk_assassination: c("mlk_assassination", "Assassination of Martin Luther King Jr.", "National Park Service", "https://www.nps.gov/malu/index.htm", "King's 1968 assassination triggered nationwide unrest and exposed unfinished civil-rights work.", "1968-04-04"),
  hard_hat_riot: c("hard_hat_riot", "Hard Hat Riot", "Wikipedia", "https://en.wikipedia.org/wiki/Hard_Hat_Riot", "Construction workers attacked antiwar demonstrators in New York in 1970 with police tolerance.", "1970-05-08"),
  roe_v_wade: c("roe_v_wade", "Roe v. Wade", "Oyez", "https://www.oyez.org/cases/1971/70-18", "1973 ruling recognized a constitutional right to abortion later overturned by Dobbs.", "1973-01-22"),
  panama_1989: c("panama_1989", "United States Invasion of Panama", "U.S. Department of State", "https://en.wikipedia.org/wiki/United_States_invasion_of_Panama", "1989 invasion ousted Noriega; civilian casualties and legality remain contested.", "1989-12-20"),
  wto_seattle: c("wto_seattle", "1999 Seattle WTO protests", "Wikipedia", "https://en.wikipedia.org/wiki/1999_Seattle_WTO_protests", "Mass protests disrupted WTO meetings and spotlighted corporate globalization rules.", "1999-11-30"),
  patriot_act_deep: c("patriot_act_deep", "USA PATRIOT Act", "Congress.gov", "https://www.congress.gov/bill/107th-congress/house-bill/3162", "Post-9/11 law expanded surveillance and detention powers with limited initial debate.", "2001-10-26"),
  scopes_trial: c("scopes_trial", "Scopes Trial", "National Park Service", "https://en.wikipedia.org/wiki/Scopes_trial", "The 1925 Dayton trial put evolution teaching on trial and exposed culture-war politics in public schools.", "1925-07-21"),
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
  entry("HH-1637-PEQUOT", "1637", 1637, "Colonial", "Pequot War",
    "A necessary colonial defense against hostile tribes.",
    "English allies burned Mystic and enslaved survivors; the war opened southern New England to settler expansion.",
    [["It was just frontier warfare.", "Massacring a fortified village and selling survivors is conquest, not self-defense.", ["pequot_war"]]],
    ["pequot_war"], ["Native", "Military"]),
  entry("HH-1763-PROCLAMATION", "1763", 1763, "Colonial", "Proclamation of 1763",
    "A minor British map line that settlers reasonably ignored.",
    "Britain barred settlement west of the Appalachians to reduce Native wars; colonists treated Native land as theirs anyway.",
    [["Freedom means settling anywhere.", "Freedom to seize treaty lands is still land theft with a pioneering brand.", ["proclamation_1763"]]],
    ["proclamation_1763"], ["Native", "Democracy"]),
  entry("HH-1787-NORTHWEST", "1787", 1787, "Early Republic", "Northwest Ordinance",
    "A pure liberty charter that banned slavery and founded the Midwest.",
    "It banned slavery in the territory while organizing settler government over Native nations without their consent.",
    [["It proves the Founders hated slavery.", "They banned slavery where cotton was weak and still counted enslaved people for Southern power.", ["northwest_ordinance"]]],
    ["northwest_ordinance"], ["Race", "Native"]),
  entry("HH-1794-WHISKEY", "1794", 1794, "Early Republic", "Whiskey Rebellion",
    "Patriotic farmers vs. distant taxes; Washington gently restored order.",
    "Federalized militia crushed western tax resistance, proving the new government would use force for revenue.",
    [["It was about liberty from tyranny.", "It was about who pays for the state. The army answered with bayonets, not debate.", ["whiskey_rebellion"]]],
    ["whiskey_rebellion"], ["Economy", "Democracy"]),
  entry("HH-1804-HAITI", "1804", 1804, "Early Republic", "Haitian Revolution Shockwave",
    "A distant Caribbean revolt with little U.S. relevance.",
    "Successful slave revolution terrified U.S. slaveholders and shaped immigration, trade, and repression policies.",
    [["Americans cheered Black freedom everywhere.", "Slaveholding elites feared Haiti as a contagious example and acted accordingly.", ["haitian_revolution"]]],
    ["haitian_revolution"], ["Race", "Foreign Policy"]),
  entry("HH-1812-WAR", "1812-1815", 1812, "Early Republic", "War of 1812",
    "A second war of independence with clear American glory.",
    "The war included Native alliances, the burning of Washington, and contested expansion that Native nations paid for.",
    [["We won clean and free.", "Indigenous nations lost land and autonomy while textbooks sold a navy song.", ["war_of_1812"]]],
    ["war_of_1812"], ["Military", "Native"]),
  entry("HH-1817-SEMINOLE", "1817-1858", 1817, "Antebellum", "Seminole Wars",
    "Brief campaigns to pacify Florida bandits.",
    "Decades of war against Seminole communities were among the longest and costliest U.S. Indian wars.",
    [["Florida needed law and order.", "Law and order meant removal and endless counterinsurgency against a people defending home.", ["seminole_wars"]]],
    ["seminole_wars"], ["Native", "Military"]),
  entry("HH-1848-SENECA", "1848", 1848, "Antebellum", "Seneca Falls",
    "Women suddenly won equality in one convention weekend.",
    "The convention launched organized suffrage demands while often excluding or sidelining Black women activists.",
    [["Feminism solved equality in 1848.", "The vote took until 1920, and Jim Crow still blocked many women of color.", ["seneca_falls", "nineteenth_amendment"]]],
    ["seneca_falls"], ["Democracy", "Race"]),
  entry("HH-1859-HARPERS", "1859", 1859, "Antebellum", "Harpers Ferry",
    "A madman's raid that Southerners rightly feared as terrorism.",
    "Brown tried to arm an enslaved uprising; Southern leaders treated abolition itself as an existential threat.",
    [["Only violence caused the Civil War.", "Slavery caused the Civil War. Brown forced the country to stop pretending otherwise.", ["harpers_ferry", "secession_documents"]]],
    ["harpers_ferry"], ["Race", "Democracy"]),
  entry("HH-1866-MEMPHIS", "1866", 1866, "Reconstruction", "Memphis Massacre",
    "A local riot after the Civil War with no wider meaning.",
    "White mobs and police killed Black residents and burned schools and churches, proving Reconstruction needed federal muscle.",
    [["Reconstruction was already too harsh.", "Massacres of Black citizens show the problem was white terror, not federal overreach.", ["memphis_massacre"]]],
    ["memphis_massacre"], ["Race", "Democracy"]),
  entry("HH-1866-NEW-ORLEANS", "1866", 1866, "Reconstruction", "New Orleans Massacre",
    "A chaotic convention fight, not a political massacre.",
    "Police and white mobs attacked a Black suffrage convention, killing dozens and shocking Congress into stronger Reconstruction acts.",
    [["Both sides rioted.", "Armed police attacking a suffrage meeting is a massacre with a badge.", ["new_orleans_1866"]]],
    ["new_orleans_1866"], ["Race", "Democracy"]),
  entry("HH-1877-RAIL-STRIKE", "1877", 1877, "Gilded Age", "Great Railroad Strike",
    "Isolated troublemakers blocking commerce.",
    "A nationwide strike met federal troops and militias; scores of workers died as capital called in the army.",
    [["The market handled labor disputes.", "The market called the cavalry. That is industrial policy with rifles.", ["great_railroad_strike"]]],
    ["great_railroad_strike"], ["Labor", "Economy"]),
  entry("HH-1868-14TH", "1868", 1868, "Reconstruction", "14th Amendment",
    "A technical citizenship clause with little modern relevance.",
    "The amendment defined birthright citizenship and equal protection; later courts and politics kept fighting over its reach.",
    [["Birthright citizenship was never intended.", "The text and ratification debates targeted citizenship after slavery. An EO does not erase an amendment.", ["fourteenth_amendment"]]],
    ["fourteenth_amendment"], ["Democracy", "Race"]),
  entry("HH-1898-SPANISH-AM", "1898", 1898, "Gilded Age", "Spanish-American War",
    "A short liberation war that freed Cuba and ended there.",
    "Victory launched overseas empire: Puerto Rico, Guam, and a brutal Philippine war followed the Spanish collapse.",
    [["America does not do empire.", "Holding colonies and fighting counterinsurgency is empire with an exceptionalism sticker.", ["spanish_american", "philippines_war"]]],
    ["spanish_american"], ["Foreign Policy", "Military"]),
  entry("HH-1917-EAST-ST-LOUIS", "1917", 1917, "WWI", "East St. Louis Massacre",
    "A spontaneous labor quarrel that got out of hand.",
    "White mobs murdered Black residents during the Great Migration as employers and politicians stoked racial fear.",
    [["Migration caused the violence.", "Mobs caused the violence. Migration was people seeking wages and safety.", ["east_st_louis"]]],
    ["east_st_louis"], ["Race", "Labor"]),
  entry("HH-1920-19TH", "1920", 1920, "Roaring 20s", "19th Amendment",
    "All American women could finally vote equally.",
    "The amendment barred sex-based denial of the vote while Jim Crow, poll taxes, and Native barriers still blocked many women.",
    [["Suffrage meant universal democracy.", "A constitutional win can coexist with racist vote suppression. Both are true.", ["nineteenth_amendment"]]],
    ["nineteenth_amendment"], ["Democracy", "Race"]),
  entry("HH-1943-DETROIT", "1943", 1943, "WWII", "Detroit Race Riot",
    "Wartime tempers flared equally on both sides.",
    "Housing shortages and workplace discrimination exploded; 34 died and federal troops occupied the city.",
    [["Everyone was to blame equally.", "Police and white mobs drove disproportionate Black deaths. Symmetry is a comfort myth.", ["detroit_1943"]]],
    ["detroit_1943"], ["Race", "Labor"]),
  entry("HH-1948-EO9981", "1948", 1948, "Cold War", "Desegregation of the Armed Forces",
    "The military was already fair; Truman just made it official.",
    "Executive Order 9981 ordered desegregation against entrenched resistance inside the services.",
    [["Merit already decided everything.", "If merit ruled, you would not need an order to stop segregating the barracks.", ["eo_9981"]]],
    ["eo_9981"], ["Race", "Military"]),
  entry("HH-1955-MONTGOMERY", "1955-1956", 1955, "Civil Rights", "Montgomery Bus Boycott",
    "One tired seamstress spontaneously changed America.",
    "Organized networks, carpools, and legal strategy sustained a year-long boycott that forced bus desegregation.",
    [["It was just Rosa Parks alone.", "Parks was trained and backed by organizers. Movements are infrastructure, not magic.", ["montgomery_bus"]]],
    ["montgomery_bus"], ["Race", "Democracy"]),
  entry("HH-1963-MARCH", "1963", 1963, "Civil Rights", "March on Washington",
    "A feel-good picnic that instantly healed race relations.",
    "A massive jobs-and-freedom march demanded legislation while the FBI surveilled organizers as threats.",
    [["Everyone loved it at the time.", "Surveillance files show the state feared the coalition even as textbooks later sold the speech.", ["march_on_washington", "cointelpro"]]],
    ["march_on_washington"], ["Race", "Democracy"]),
  entry("HH-1965-WATTS", "1965", 1965, "Civil Rights", "Watts Rebellion",
    "Senseless rioting with no political cause.",
    "A police stop ignited uprising against poverty, overcrowding, and abusive policing in Los Angeles.",
    [["They burned their own neighborhood for fun.", "People do not invent grievances out of boredom. Policing and poverty were documented beforehand.", ["watts_1965"]]],
    ["watts_1965"], ["Race", "Economy"]),
  entry("HH-1968-MLK", "1968", 1968, "Civil Rights", "Assassination of Martin Luther King Jr.",
    "A lone act that somehow ended the civil rights story.",
    "King's murder triggered nationwide unrest and came as he organized a Poor People's Campaign beyond Southern lunch counters.",
    [["Civil rights was finished by 1965.", "King was killed while fighting poverty and war. The unfinished agenda was the point.", ["mlk_assassination"]]],
    ["mlk_assassination"], ["Race", "Democracy"]),
  entry("HH-1970-HARDHAT", "1970", 1970, "Vietnam", "Hard Hat Riot",
    "Patriotic workers politely disagreed with hippies.",
    "Construction workers beat antiwar demonstrators in Manhattan while police largely stood aside.",
    [["Silent majority just wanted respect.", "Assault is not a debate club. State tolerance of street violence is a political choice.", ["hard_hat_riot"]]],
    ["hard_hat_riot"], ["Labor", "Democracy"]),
  entry("HH-1973-ROE", "1973", 1973, "Cold War", "Roe v. Wade",
    "Judges invented a right from nowhere and ended the debate.",
    "The Court recognized abortion rights that states later dismantled after Dobbs; the debate never ended.",
    [["It settled the issue forever.", "Dobbs proved constitutional holdings can be reversed. Settlement was a political myth.", ["roe_v_wade"]]],
    ["roe_v_wade"], ["Healthcare", "Democracy"]),
  entry("HH-1989-PANAMA", "1989", 1989, "Reagan era", "Invasion of Panama",
    "A clean arrest of a drug dictator with minimal cost.",
    "The invasion ousted Noriega amid civilian deaths and contested legal justifications.",
    [["It was a police action abroad.", "Bombing a capital to seize a former client is war, not a warrant service.", ["panama_1989"]]],
    ["panama_1989"], ["Foreign Policy", "Military"]),
  entry("HH-1999-WTO", "1999", 1999, "911 era", "Seattle WTO Protests",
    "A fringe carnival against free trade.",
    "Mass protests disrupted WTO meetings and forced globalization rules into public view.",
    [["Only anarchists cared.", "Unions, environmentalists, and Global South critics built a coalition. Fringe is a dismissive label.", ["wto_seattle"]]],
    ["wto_seattle"], ["Economy", "Foreign Policy"]),
  entry("HH-2001-PATRIOT-DEEP", "2001", 2001, "911 era", "PATRIOT Act Surveillance Expansion",
    "Temporary tools that only targeted terrorists.",
    "The Act expanded surveillance and detention powers with limited debate and lasting civil-liberties costs.",
    [["If you have nothing to hide, you have nothing to fear.", "Secret dragnets hide from you, not the other way around.", ["patriot_act_deep"]]],
    ["patriot_act_deep"], ["Democracy", "Foreign Policy"], ["HH-2001-PATRIOT"]),
  entry("HH-1925-SCOPES", "1925", 1925, "Roaring 20s", "Scopes Trial",
    "A quirky Tennessee sideshow about monkeys.",
    "The trial put public-school science under religious statute and previewed lasting culture-war fights over curriculum.",
    [["It was just entertainment.", "Banning evolution from classrooms is education policy by panic. The fight never left school boards.", ["scopes_trial"]]],
    ["scopes_trial"], ["Education", "Democracy"]),
];

{
  const file = data("history-citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 28 expansions")) {
    src = src.replace(/\n};\s*$/, "\n" + historyCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("history citations patched");
  } else console.log("history citations already patched");
}

{
  const file = data("hidden-history.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("HH-1637-PEQUOT")) {
    const block = historyEntries.join("\n");
    src = src.replace(/\n\];\s*\n\nexport function getHistoryEntryById/, "\n" + block + "\n];\n\nexport function getHistoryEntryById");
    writeFileSync(file, src);
    console.log("added", historyEntries.length, "history entries");
  } else console.log("history entries already present");
}
