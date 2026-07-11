/**
 * Pass 27 - Hidden History 122 -> 152+
 * Run: node scripts/pass27/apply-history.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const data = (f) => join(ROOT, "lib/data", f);

const historyCitations = `
  // Pass 27 expansions
  pueblo_revolt: c("pueblo_revolt", "Pueblo Revolt", "National Park Service", "https://www.nps.gov/articles/000/pueblo-revolt.htm", "In 1680 Pueblo peoples expelled Spanish colonizers from New Mexico for over a decade.", "1680-08-10"),
  louisiana_purchase: c("louisiana_purchase", "Louisiana Purchase", "National Archives", "https://www.archives.gov/milestone-documents/louisiana-purchase", "The 1803 purchase doubled U.S. territory and accelerated dispossession of Native nations.", "1803-04-30"),
  missouri_compromise: c("missouri_compromise", "Missouri Compromise", "Library of Congress", "https://www.loc.gov/rr/program/bib/ourdocs/missouri.html", "The 1820 deal admitted Missouri as a slave state and drew a slavery line across the Louisiana Purchase.", "1820-03-06"),
  gag_rule: c("gag_rule", "Gag Rules", "U.S. House History", "https://history.house.gov/Historical-Highlights/1800-1850/The-House-of-Representatives-instituted-the-gag-rule/", "House gag rules from 1836 blocked antislavery petitions from being debated.", "1836-05-26"),
  amistad: c("amistad", "Amistad Case", "National Archives", "https://www.archives.gov/education/lessons/amistad", "Africans who seized the schooner Amistad won freedom in U.S. courts after a landmark case.", "1841-03-09"),
  bleeding_kansas: c("bleeding_kansas", "Bleeding Kansas", "National Park Service", "https://www.nps.gov/articles/bleeding-kansas.htm", "Pro- and anti-slavery settlers fought a proxy civil war over Kansas territorial status.", "1856-05-21"),
  homestead_act: c("homestead_act", "Homestead Act", "National Archives", "https://www.archives.gov/milestone-documents/homestead-act", "Homesteading transferred public domain land to settlers while dispossessing Native nations.", "1862-05-20"),
  draft_riots: c("draft_riots", "New York Draft Riots", "National Park Service", "https://www.nps.gov/articles/000/new-york-city-draft-riots.htm", "1863 draft riots killed scores, with white mobs targeting Black New Yorkers.", "1863-07-13"),
  colfax: c("colfax", "Colfax Massacre", "National Park Service", "https://www.nps.gov/articles/000/colfax-massacre.htm", "White supremacists massacred Black Reconstruction officials and voters in Colfax, Louisiana in 1873.", "1873-04-13"),
  cruikshank: c("cruikshank", "United States v. Cruikshank", "Oyez", "https://www.oyez.org/cases/1850-1900/92us542", "The Court gutted federal protection of Black voting and assembly rights after Colfax.", "1876-03-27"),
  rock_springs: c("rock_springs", "Rock Springs massacre", "Wikipedia", "https://en.wikipedia.org/wiki/Rock_Springs_massacre", "A white mob murdered Chinese miners and burned Chinatown in Rock Springs, Wyoming in 1885.", "1885-09-02"),
  elaine: c("elaine", "Elaine Massacre", "National Archives", "https://www.archives.gov/research/african-americans/wwi/elaine", "White posses and troops killed scores of Black sharecroppers organizing in Elaine, Arkansas in 1919.", "1919-09-30"),
  birth_of_nation: c("birth_of_nation", "The Birth of a Nation", "Library of Congress", "https://www.loc.gov/item/2017600665/", "Griffith's 1915 film glorified the Klan and helped fuel its national revival.", "1915-02-08"),
  brownsville: c("brownsville", "Brownsville Affair", "National Archives", "https://www.archives.gov/publications/prologue/1997/spring/brownsville-affair", "Teddy Roosevelt dishonorably discharged 167 Black soldiers after a disputed 1906 shooting.", "1906-08-13"),
  wagner_act: c("wagner_act", "National Labor Relations Act", "National Archives", "https://www.archives.gov/milestone-documents/national-labor-relations-act", "The 1935 Wagner Act protected private-sector collective bargaining rights.", "1935-07-05"),
  flsa_1938: c("flsa_1938", "Fair Labor Standards Act", "National Archives", "https://www.archives.gov/milestone-documents/fair-labor-standards-act", "FLSA set federal minimum wage, overtime, and child labor limits in 1938.", "1938-06-25"),
  smith_act: c("smith_act", "Smith Act", "Congress.gov", "https://www.congress.gov/bill/76th-congress/house-bill/5138", "The 1940 Smith Act criminalized advocating overthrow of the government and was used against radicals.", "1940-06-28"),
  hollywood_ten: c("hollywood_ten", "Hollywood Ten", "National Archives", "https://www.archives.gov/exhibits/documentary-films/hollywood-ten.html", "HUAC contempt convictions and blacklists destroyed careers of alleged communist writers and directors.", "1947-11-24"),
  little_rock: c("little_rock", "Little Rock Nine", "National Park Service", "https://www.nps.gov/chsc/learn/historyculture/index.htm", "Federal troops enforced school desegregation after Arkansas blocked Black students in 1957.", "1957-09-25"),
  freedom_rides: c("freedom_rides", "Freedom Rides", "National Park Service", "https://www.nps.gov/subjects/civilrights/freedom-rides.htm", "Interracial riders challenged segregated interstate travel and faced mob violence in 1961.", "1961-05-04"),
  birmingham_1963: c("birmingham_1963", "Birmingham Campaign", "National Park Service", "https://www.nps.gov/subjects/civilrights/birmingham-campaign.htm", "Police dogs and fire hoses against child marchers shocked the nation and forced federal action.", "1963-05-02"),
  selma: c("selma", "Selma to Montgomery March", "National Park Service", "https://www.nps.gov/semo/index.htm", "Bloody Sunday police attack on voting-rights marchers helped pass the Voting Rights Act.", "1965-03-07"),
  fred_hampton: c("fred_hampton", "Fred Hampton", "National Archives", "https://www.archives.gov/research/african-americans/black-power/hampton", "Chicago police killed Black Panther leader Fred Hampton in a raid coordinated with the FBI.", "1969-12-04"),
  phoenix_program: c("phoenix_program", "Phoenix Program", "National Archives", "https://www.archives.gov/research/military/vietnam-war", "U.S.-backed Phoenix Program targeted Vietnamese civilians suspected of Viet Cong ties.", "1968-01-01"),
  crime_bill_1994: c("crime_bill_1994", "Violent Crime Control and Law Enforcement Act", "Congress.gov", "https://www.congress.gov/bill/103rd-congress/house-bill/3355", "The 1994 crime bill expanded policing and prisons during the peak of mass incarceration growth.", "1994-09-13"),
  doma_1996: c("doma_1996", "Defense of Marriage Act", "Congress.gov", "https://www.congress.gov/bill/104th-congress/house-bill/3396", "DOMA denied federal recognition of same-sex marriages until courts and Congress dismantled it.", "1996-09-21"),
  abu_ghraib: c("abu_ghraib", "Abu Ghraib torture and prisoner abuse", "Wikipedia", "https://en.wikipedia.org/wiki/Abu_Ghraib_torture_and_prisoner_abuse", "Photos exposed U.S. torture and humiliation of Iraqi prisoners in 2004.", "2004-04-28"),
  muslim_ban: c("muslim_ban", "Executive Order 13769", "Federal Register", "https://www.federalregister.gov/documents/2017/02/01/2017-02281/protecting-the-nation-from-foreign-terrorist-entry-into-the-united-states", "The 2017 travel ban blocked entry from several Muslim-majority countries.", "2017-01-27"),
  sffa_2023: c("sffa_2023", "Students for Fair Admissions v. Harvard", "Oyez", "https://www.oyez.org/cases/2022/20-1199", "The Court ended race-conscious college admissions in 2023.", "2023-06-29"),
  thibodaux: c("thibodaux", "Thibodaux massacre", "Wikipedia", "https://en.wikipedia.org/wiki/Thibodaux_massacre", "White paramilitaries killed Black sugar workers striking in Louisiana in 1887.", "1887-11-23"),
  greenwood_after: c("greenwood_after", "Tulsa Race Massacre", "National Archives", "https://www.archives.gov/research/african-americans/tulsa-massacre", "White mobs destroyed Tulsa's Greenwood district in 1921; survivors fought decades for recognition.", "1921-05-31"),
  agent_orange: c("agent_orange", "Agent Orange", "Department of Veterans Affairs", "https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/", "U.S. herbicides in Vietnam poisoned veterans and Vietnamese civilians for generations.", "1962-01-01"),
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
  entry(
    "HH-1680-PUEBLO",
    "1680",
    1680,
    "Colonial",
    "Pueblo Revolt",
    "Spanish settlement peacefully Christianized the Southwest.",
    "Pueblo nations rose in 1680, killed colonists and missionaries, and expelled Spanish rule from New Mexico for 12 years.",
    [
      [
        "Natives attacked peaceful missionaries.",
        "Forced labor, land seizure, and religious suppression preceded the revolt. Resistance was political, not random violence.",
        ["pueblo_revolt"],
      ],
    ],
    ["pueblo_revolt"],
    ["Native", "Military"]
  ),
  entry(
    "HH-1803-LOUISIANA",
    "1803",
    1803,
    "Early Republic",
    "Louisiana Purchase",
    "America bought empty land and opened opportunity for pioneers.",
    "The purchase transferred imperial claims over Native nations who were not parties to the deal, accelerating removal and settlement.",
    [
      [
        "Napoleon sold unused wilderness.",
        "Indigenous nations lived there. The U.S. bought a European claim, then enforced it with troops and treaties.",
        ["louisiana_purchase"],
      ],
    ],
    ["louisiana_purchase"],
    ["Native", "Economy"]
  ),
  entry(
    "HH-1820-MISSOURI",
    "1820",
    1820,
    "Antebellum",
    "Missouri Compromise",
    "A balanced deal kept the Union peaceful over slavery.",
    "Congress traded Missouri slavery for a geographic line that postponed conflict while expanding enslaved labor westward.",
    [
      [
        "Compromise prevented war.",
        "It preserved and mapped slavery's growth. Delay is not justice when people remain property.",
        ["missouri_compromise"],
      ],
    ],
    ["missouri_compromise"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1836-GAG",
    "1836-1844",
    1836,
    "Antebellum",
    "House Gag Rule",
    "Congress always debated free speech issues openly.",
    "House rules tabled antislavery petitions without discussion, silencing petitioning as a constitutional right.",
    [
      [
        "They avoided pointless agitation.",
        "They banned hearing petitions about human bondage. That is censorship in the people's House.",
        ["gag_rule"],
      ],
    ],
    ["gag_rule"],
    ["Democracy", "Race"]
  ),
  entry(
    "HH-1839-AMISTAD",
    "1839-1841",
    1839,
    "Antebellum",
    "Amistad Rebellion",
    "A curious court case about property at sea.",
    "Africans who seized their slave ship won freedom in U.S. courts, exposing the illegal Atlantic trade's survivors.",
    [
      [
        "It was just maritime law.",
        "It was a freedom suit by people kidnapped into slavery. Courts had to admit the trade's illegality.",
        ["amistad"],
      ],
    ],
    ["amistad"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1854-KANSAS",
    "1854-1861",
    1854,
    "Antebellum",
    "Bleeding Kansas",
    "Settlers disagreed politely over territorial status.",
    "Armed proslavery and free-state forces terrorized each other; elections were stolen and towns burned.",
    [
      [
        "Both sides were extremists.",
        "Popular sovereignty without fair elections meant ballot stuffing and murder to expand slavery.",
        ["bleeding_kansas"],
      ],
    ],
    ["bleeding_kansas"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1862-HOMESTEAD",
    "1862",
    1862,
    "Civil War",
    "Homestead Act",
    "Free land built the American middle class fairly.",
    "Homesteads carved Indigenous land into settler farms while Black and immigrant access remained unequal.",
    [
      [
        "Anyone could claim 160 acres.",
        "Native title was ignored, and discrimination limited who could keep claims. Free land was not free for everyone.",
        ["homestead_act"],
      ],
    ],
    ["homestead_act"],
    ["Native", "Economy"]
  ),
  entry(
    "HH-1863-DRAFT-RIOTS",
    "1863",
    1863,
    "Civil War",
    "New York Draft Riots",
    "Working men protested an unfair Civil War draft.",
    "Mobs lynched Black residents and burned an orphan asylum while attacking the draft and class inequality.",
    [
      [
        "It was about the rich buying substitutes.",
        "Class rage turned into anti-Black massacre. Both the draft injustice and the racial terror are the history.",
        ["draft_riots"],
      ],
    ],
    ["draft_riots"],
    ["Race", "Labor"]
  ),
  entry(
    "HH-1873-COLFAX",
    "1873",
    1873,
    "Reconstruction",
    "Colfax Massacre",
    "A local election dispute got out of hand.",
    "White leagues massacred Black officeholders and voters after a disputed Louisiana election.",
    [
      [
        "Reconstruction violence went both ways.",
        "Colfax was a planned massacre of Black citizens defending a lawful government.",
        ["colfax"],
      ],
    ],
    ["colfax"],
    ["Race", "Democracy"],
    ["HH-1865-RECONSTRUCTION"]
  ),
  entry(
    "HH-1876-CRUIKSHANK",
    "1876",
    1876,
    "Reconstruction",
    "United States v. Cruikshank",
    "The Court protected federalism after Reconstruction excess.",
    "After Colfax, the Court stripped federal power to punish private white-terror conspiracies against Black voters.",
    [
      [
        "States should handle local crime.",
        "When states refuse to protect Black citizens, federal abdication licenses massacre.",
        ["cruikshank", "colfax"],
      ],
    ],
    ["cruikshank"],
    ["Race", "Democracy"],
    ["HH-1873-COLFAX"]
  ),
  entry(
    "HH-1885-ROCK-SPRINGS",
    "1885",
    1885,
    "Gilded Age",
    "Rock Springs Massacre",
    "Labor tension caused a regrettable Western riot.",
    "White miners murdered Chinese workers and burned Chinatown with near-total impunity.",
    [
      [
        "It was about jobs, not race.",
        "They killed people and burned a neighborhood. Job competition does not excuse ethnic cleansing.",
        ["rock_springs"],
      ],
    ],
    ["rock_springs"],
    ["Race", "Labor"]
  ),
  entry(
    "HH-1887-THIBODAUX",
    "1887",
    1887,
    "Gilded Age",
    "Thibodaux Massacre",
    "A sugar strike ended after wages were settled.",
    "White paramilitaries killed Black striking sugar workers in Louisiana after harvest-season organizing.",
    [
      [
        "Strikers threatened planters.",
        "Armed whites executed workers to break a wage strike. That is class war with a racial body count.",
        ["thibodaux"],
      ],
    ],
    ["thibodaux"],
    ["Labor", "Race"]
  ),
  entry(
    "HH-1906-BROWNSVILLE",
    "1906",
    1906,
    "Progressive",
    "Brownsville Affair",
    "Soldiers who shot up a town faced fair discipline.",
    "Without a trial, Roosevelt dishonorably discharged an entire Black battalion on thin evidence.",
    [
      [
        "Discipline maintains order.",
        "Collective punishment of 167 Black soldiers without due process is racial purge, not justice.",
        ["brownsville"],
      ],
    ],
    ["brownsville"],
    ["Race", "Military"]
  ),
  entry(
    "HH-1915-BIRTH",
    "1915",
    1915,
    "Progressive",
    "Birth of a Nation",
    "A groundbreaking silent film about Reconstruction.",
    "The film cast the Klan as heroes, screened at the White House, and helped spark a national Klan revival.",
    [
      [
        "It is just art and cinema history.",
        "Art that recruits for a terrorist revival is propaganda. Membership surged after its release.",
        ["birth_of_nation"],
      ],
    ],
    ["birth_of_nation"],
    ["Race", "Education"]
  ),
  entry(
    "HH-1919-ELAINE",
    "1919",
    1919,
    "Roaring 20s",
    "Elaine Massacre",
    "Sharecroppers rioted and authorities restored order.",
    "Black farmers organizing against debt peonage were hunted by posses and troops; estimates of dead run into the hundreds.",
    [
      [
        "They planned an uprising.",
        "Organizing a union is not a capital offense. The massacre crushed Black economic independence.",
        ["elaine", "red_summer"],
      ],
    ],
    ["elaine"],
    ["Race", "Labor"],
    ["HH-1919-RED-SUMMER"]
  ),
  entry(
    "HH-1935-WAGNER",
    "1935",
    1935,
    "Depression",
    "Wagner Act",
    "Unions always had the right to organize in America.",
    "The NLRA finally protected private-sector collective bargaining after decades of injunctions and company violence.",
    [
      [
        "Unions were already free.",
        "Courts and bosses crushed organizing until federal law recognized bargaining rights.",
        ["wagner_act"],
      ],
    ],
    ["wagner_act"],
    ["Labor", "Democracy"]
  ),
  entry(
    "HH-1938-FLSA",
    "1938",
    1938,
    "Depression",
    "Fair Labor Standards Act",
    "Markets naturally ended child labor and raised wages.",
    "FLSA imposed federal minimum wage, overtime, and child labor bans after reform campaigns and Depression politics.",
    [
      [
        "Business would have fixed it.",
        "Children worked factories until law forbade it. Markets alone did not retire child labor.",
        ["flsa_1938"],
      ],
    ],
    ["flsa_1938"],
    ["Labor", "Economy"]
  ),
  entry(
    "HH-1940-SMITH",
    "1940",
    1940,
    "WWII",
    "Smith Act",
    "America banned only true violent plots.",
    "The Smith Act criminalized advocacy and was used to prosecute communists and radicals for speech and association.",
    [
      [
        "National security required it.",
        "Criminalizing ideas is how democracies slide into loyalty purges. Later courts narrowed its reach for a reason.",
        ["smith_act"],
      ],
    ],
    ["smith_act"],
    ["Democracy", "Education"]
  ),
  entry(
    "HH-1947-HOLLYWOOD",
    "1947",
    1947,
    "Cold War",
    "Hollywood Ten Blacklist",
    "Studios freely chose not to hire communists.",
    "HUAC contempt citations and industry blacklists destroyed careers based on politics and refusal to name names.",
    [
      [
        "Private studios can hire whom they want.",
        "When Congress and studios collude to purge dissent, it is state-backed censorship with pink slips.",
        ["hollywood_ten", "mccarthyism"],
      ],
    ],
    ["hollywood_ten"],
    ["Democracy", "Labor"]
  ),
  entry(
    "HH-1957-LITTLE-ROCK",
    "1957",
    1957,
    "Civil Rights",
    "Little Rock Nine",
    "Southern schools gradually accepted Brown v. Board.",
    "Arkansas blocked Black students until Eisenhower sent the 101st Airborne to enforce desegregation.",
    [
      [
        "Local control of schools matters.",
        "Local control that means mobs blocking classrooms is segregation with a civic slogan.",
        ["little_rock"],
      ],
    ],
    ["little_rock"],
    ["Race", "Education"],
    ["HH-1954-BROWN"]
  ),
  entry(
    "HH-1961-FREEDOM-RIDES",
    "1961",
    1961,
    "Civil Rights",
    "Freedom Rides",
    "Interstate buses were already integrated by law.",
    "Riders testing Supreme Court rulings faced beatings and firebombing until federal intervention forced compliance.",
    [
      [
        "The law already settled it.",
        "Paper rights mean nothing when mobs and police enforce Jim Crow on buses.",
        ["freedom_rides"],
      ],
    ],
    ["freedom_rides"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1963-BIRMINGHAM",
    "1963",
    1963,
    "Civil Rights",
    "Birmingham Campaign",
    "Protesters sought publicity with children.",
    "Bull Connor's dogs and fire hoses against child marchers exposed segregation's violence to a national audience.",
    [
      [
        "Using kids was reckless.",
        "Children lived under segregation daily. The recklessness was the police state that attacked them.",
        ["birmingham_1963"],
      ],
    ],
    ["birmingham_1963"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1965-SELMA",
    "1965",
    1965,
    "Civil Rights",
    "Selma Bloody Sunday",
    "Voting was already protected after Reconstruction amendments.",
    "State troopers beat voting-rights marchers on the Edmund Pettus Bridge; the images helped pass the VRA.",
    [
      [
        "They should have waited for legislation.",
        "Legislation came because blood on a bridge made denial impossible to ignore.",
        ["selma", "voting_rights_1965"],
      ],
    ],
    ["selma"],
    ["Race", "Democracy"],
    ["HH-1965-VRA"]
  ),
  entry(
    "HH-1968-PHOENIX",
    "1967-1972",
    1968,
    "Vietnam",
    "Phoenix Program",
    "Counterinsurgency targeted only enemy combatants.",
    "Phoenix used informants, detention, and assassination against suspected civilian Viet Cong infrastructure.",
    [
      [
        "War requires hard choices.",
        "Targeting civilians by suspicion is a death-squad model, not a rules-of-engagement footnote.",
        ["phoenix_program"],
      ],
    ],
    ["phoenix_program"],
    ["Foreign Policy", "Military"]
  ),
  entry(
    "HH-1969-HAMPTON",
    "1969",
    1969,
    "Civil Rights",
    "Assassination of Fred Hampton",
    "A police shootout with dangerous radicals.",
    "FBI informants helped Chicago police kill sleeping Panther leader Fred Hampton in a predawn raid.",
    [
      [
        "Panthers were violent.",
        "Drugging and shooting a sleeping organizer is assassination. COINTELPRO files later confirmed the campaign.",
        ["fred_hampton", "church_committee"],
      ],
    ],
    ["fred_hampton"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1962-AGENT-ORANGE",
    "1962-1971",
    1962,
    "Vietnam",
    "Agent Orange",
    "Defoliants were safe tactical herbicides.",
    "Dioxin-contaminated herbicides poisoned veterans and Vietnamese communities with multigenerational harm.",
    [
      [
        "It was just plant killer.",
        "VA recognition of Agent Orange diseases exists because the chemical was not harmless.",
        ["agent_orange"],
      ],
    ],
    ["agent_orange"],
    ["Military", "Healthcare"]
  ),
  entry(
    "HH-1994-CRIME-BILL",
    "1994",
    1994,
    "911 era",
    "1994 Crime Bill",
    "Bipartisan toughness that cut crime for everyone.",
    "The bill poured money into prisons and policing during a sentencing boom that hit Black communities hardest.",
    [
      [
        "Crime fell afterward.",
        "Crime was already falling for multiple reasons. Mass incarceration was still a political choice with racial impact.",
        ["crime_bill_1994", "mass_incarceration_bjs"],
      ],
    ],
    ["crime_bill_1994"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-1996-DOMA",
    "1996",
    1996,
    "911 era",
    "Defense of Marriage Act",
    "Federal law simply defined traditional marriage.",
    "DOMA denied federal benefits to same-sex couples until Windsor and Obergefell dismantled the regime.",
    [
      [
        "States still decided marriage.",
        "Federal law stripped equal benefits nationwide. That is discrimination with a dictionary excuse.",
        ["doma_1996", "obergefell"],
      ],
    ],
    ["doma_1996"],
    ["LGBTQ", "Democracy"]
  ),
  entry(
    "HH-2004-ABU-GHRAIB",
    "2004",
    2004,
    "911 era",
    "Abu Ghraib",
    "A few bad apples took unauthorized photos.",
    "Systematic detainee abuse and torture were photographed; investigations showed command climate failures beyond a few soldiers.",
    [
      [
        "War is ugly; these were outliers.",
        "When torture becomes souvenir photography, the system failed. Outliers do not write SOPs.",
        ["abu_ghraib"],
      ],
    ],
    ["abu_ghraib"],
    ["Foreign Policy", "Military"]
  ),
  entry(
    "HH-2017-MUSLIM-BAN",
    "2017",
    2017,
    "Trump era",
    "Muslim Travel Ban",
    "A neutral national-security vetting pause.",
    "Executive Order 13769 blocked travelers from several Muslim-majority countries; courts documented religious animus in the record.",
    [
      [
        "It was about countries, not religion.",
        "Campaign promises of a Muslim ban and the country list matched. Courts saw the pretext.",
        ["muslim_ban"],
      ],
    ],
    ["muslim_ban"],
    ["Race", "Democracy"]
  ),
  entry(
    "HH-2023-SFFA",
    "2023",
    2023,
    "Today",
    "End of Affirmative Action",
    "The Court restored colorblind fairness in college admissions.",
    "Students for Fair Admissions barred race-conscious admissions while legacy and donor preferences remained largely untouched.",
    [
      [
        "Race should never matter.",
        "If race never mattered, legacy admissions would be on the chopping block too. Selective colorblindness protects hierarchy.",
        ["sffa_2023"],
      ],
    ],
    ["sffa_2023"],
    ["Race", "Education"]
  ),
  entry(
    "HH-1921-GREENWOOD-ARCH",
    "1921",
    1921,
    "Roaring 20s",
    "Greenwood Aftermath",
    "Tulsa recovered quickly after a tragic riot.",
    "National Archives and survivor testimony document massacre, aerial attack claims, and decades of official silence on Greenwood's destruction.",
    [
      [
        "It was already covered as Tulsa.",
        "Coverage without reparations or archives-level honesty is erasure. Survivors fought for recognition into the 21st century.",
        ["greenwood_after", "tulsa_massacre"],
      ],
    ],
    ["greenwood_after"],
    ["Race", "Economy"],
    ["HH-1921-TULSA"]
  ),
];

// citations
{
  const file = data("history-citations.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("Pass 27 expansions")) {
    src = src.replace(/\n};\s*$/, "\n" + historyCitations + "\n};\n");
    writeFileSync(file, src);
    console.log("history citations patched", historyCitations.match(/^\s+\w+:/gm)?.length ?? 0);
  } else console.log("history citations already patched");
}

// entries
{
  const file = data("hidden-history.ts");
  let src = readFileSync(file, "utf8");
  if (!src.includes("HH-1680-PUEBLO")) {
    const block = historyEntries.join("\n");
    src = src.replace(/\n\];\s*\n\nexport function getHistoryEntryById/, "\n" + block + "\n];\n\nexport function getHistoryEntryById");
    writeFileSync(file, src);
    console.log("added", historyEntries.length, "history entries");
  } else console.log("history entries already present");
}
