import type { CitationSource } from "@/lib/types";

function wayback(url: string): string {
  return `https://web.archive.org/web/*/${url}`;
}

function c(id: string, title: string, publisher: string, url: string, excerpt: string, date: string): CitationSource {
  return { id, title, publisher, url, waybackUrl: wayback(url), excerpt, date };
}

export const historyCitations: Record<string, CitationSource> = {
  columbus_loc: c("columbus_loc", "1492: An Ongoing Voyage", "Library of Congress", "https://www.loc.gov/exhibits/1492/columbus.html", "Columbus's voyages opened sustained European contact with devastating consequences for Indigenous peoples.", "1492-10-12"),
  columbus_zinn: c("columbus_zinn", "Columbus in America", "Zinn Education Project", "https://www.zinnedproject.org/materials/columbus-in-america/", "Teaching materials document enslavement and population collapse after 1492.", "1492-10-12"),
  thanksgiving_nps: c("thanksgiving_nps", "Thanksgiving (United States)", "Wikipedia", "https://en.wikipedia.org/wiki/Thanksgiving_(United_States)", "The 1621 gathering was a brief diplomatic meeting-not a founding national holiday.", "1621-11-01"),
  thanksgiving_zinn: c("thanksgiving_zinn", "If We Knew Our History", "Zinn Education Project", "https://www.zinnedproject.org/if-we-knew-our-history/", "For many Native people, Thanksgiving marks land theft and violence-not harmony.", "1621-11-01"),
  jamestown_1619: c("jamestown_1619", "Africans at Jamestown", "National Park Service", "https://www.nps.gov/jame/learn/historyculture/african-americans-at-jamestown.htm", "First recorded Africans arrived in 1619; Virginia later codified hereditary slavery.", "1619-08-01"),
  three_fifths_crs: c("three_fifths_crs", "Three-Fifths Compromise", "Congressional Research Service", "https://constitution.congress.gov/browse/essay/artI-S2-C3-3/ALDE_00001082/", "Enslaved people counted as three-fifths for representation but had no rights.", "1787-09-17"),
  declaration_slavery: c("declaration_slavery", "Declaration of Independence", "National Archives", "https://www.archives.gov/founding-docs/declaration-transcript", "Jefferson's slavery condemnation was removed to keep slave colonies in the revolution.", "1776-07-04"),
  indian_removal_crs: c("indian_removal_crs", "Indian Removal Act", "Congressional Research Service", "https://www.congress.gov/crs-product/R43823", "The 1830 act authorized forced removal of Native nations east of the Mississippi.", "1830-05-28"),
  dred_scott: c("dred_scott", "Dred Scott v. Sandford", "U.S. Supreme Court", "https://www.supremecourt.gov/opinions/slipopinion/19", "The Court denied Black citizenship and protected slavery in territories.", "1857-03-06"),
  secession_documents: c("secession_documents", "Texas Secession Declaration", "Library of Congress", "https://www.loc.gov/resource/rbpe.0570100b/", "Texas's 1861 document cites maintaining slavery as a primary cause of secession.", "1861-02-01"),
  emancipation_limits: c("emancipation_limits", "Emancipation Proclamation", "National Archives", "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation", "The Proclamation freed enslaved people only in Confederate states.", "1863-01-01"),
  reconstruction_crs: c("reconstruction_crs", "Reconstruction Overview", "Congressional Research Service", "https://www.congress.gov/crs-product/R45992", "Reconstruction brought civil rights laws until white supremacist violence ended federal protection.", "1865-01-01"),
  compromise_1877: c("compromise_1877", "Compromise of 1877", "U.S. House History", "https://history.house.gov/Historical-Highlights/1851-1900/The-election-of-1876/", "Federal troops withdrew from the South in exchange for Hayes winning the presidency.", "1877-03-02"),
  black_codes: c("black_codes", "Black Codes (United States)", "Wikipedia", "https://en.wikipedia.org/wiki/Black_Codes_(United_States)", "Southern states passed Black Codes to restrict freed people's rights after the Civil War.", "1865-11-01"),
  boarding_schools: c("boarding_schools", "Federal Indian Boarding School Initiative", "Bureau of Indian Affairs", "https://www.bia.gov/service/federal-indian-boarding-school-initiative", "Federal boarding schools forcibly separated Native children from families and banned languages.", "1879-01-01"),
  haymarket: c("haymarket", "Haymarket Affair", "Library of Congress", "https://www.loc.gov/item/today-in-history/may-04/", "The 1886 labor protest and trial shaped the fight for the eight-hour workday.", "1886-05-04"),
  wounded_knee: c("wounded_knee", "Wounded Knee Massacre", "Wikipedia", "https://en.wikipedia.org/wiki/Wounded_Knee_Massacre", "U.S. soldiers killed hundreds of Lakota men, women, and children in 1890.", "1890-12-29"),
  plessy_ferguson: c("plessy_ferguson", "Plessy v. Ferguson", "U.S. Supreme Court", "https://www.supremecourt.gov/opinions/slipopinion/19", "The Court upheld 'separate but equal' segregation for 58 years.", "1896-05-18"),
  philippines_war: c("philippines_war", "Philippine-American War", "Library of Congress", "https://history.state.gov/milestones/1899-1913/war", "After defeating Spain, the U.S. fought a brutal counterinsurgency in the Philippines.", "1899-02-04"),
  espionage_act: c("espionage_act", "Espionage Act of 1917", "Congress.gov", "https://www.congress.gov/bill/65th-congress/house-bill/291", "WWI-era law criminalized anti-war dissent and speech.", "1917-06-15"),
  tulsa_massacre: c("tulsa_massacre", "Tulsa Race Massacre", "Wikipedia", "https://en.wikipedia.org/wiki/Tulsa_race_massacre", "White mobs destroyed Greenwood and killed hundreds in 1921.", "1921-05-31"),
  rosewood: c("rosewood", "Rosewood Massacre", "Wikipedia", "https://en.wikipedia.org/wiki/Rosewood_massacre", "A white mob destroyed Rosewood, Florida in 1923; the state covered it up for decades.", "1923-01-01"),
  tuskegee_study: c("tuskegee_study", "Tuskegee Syphilis Study", "Centers for Disease Control and Prevention", "https://www.cdc.gov/tuskegee/about/index.html", "Researchers withheld treatment from Black men with syphilis for 40 years without consent.", "1932-01-01"),
  bonus_army: c("bonus_army", "Bonus Army", "Federal Reserve History", "https://www.federalreservehistory.org/essays/bonus-army", "The U.S. Army violently dispersed WWI veteran protesters in Washington in 1932.", "1932-07-28"),
  redlining_hud: c("redlining_hud", "Redlining", "Wikipedia", "https://en.wikipedia.org/wiki/Redlining", "Federal HOLC maps denied mortgages to Black families and created lasting wealth gaps.", "1934-01-01"),
  japanese_internment: c("japanese_internment", "Japanese American Internment", "National Archives", "https://www.archives.gov/education/lessons/japanese-relocation", "120,000 Japanese Americans were imprisoned without charges based on ancestry.", "1942-02-19"),
  operation_paperclip: c("operation_paperclip", "Operation Paperclip", "Wikipedia", "https://en.wikipedia.org/wiki/Operation_Paperclip", "The U.S. secretly brought 1,600+ German scientists including Nazi weapons researchers.", "1945-01-01"),
  mccarthyism: c("mccarthyism", "McCarthyism", "Wikipedia", "https://en.wikipedia.org/wiki/McCarthyism", "Thousands lost careers to unfounded accusations of communist sympathy.", "1950-02-09"),
  iran_coup: c("iran_coup", "1953 Iranian Coup", "Wikipedia", "https://en.wikipedia.org/wiki/1953_Iranian_coup_d%27%C3%A9tat", "The CIA and MI6 overthrew Prime Minister Mossadegh after oil nationalization.", "1953-08-19"),
  guatemala_coup: c("guatemala_coup", "1954 Guatemalan Coup", "Wikipedia", "https://en.wikipedia.org/wiki/1954_Guatemalan_coup_d%27%C3%A9tat", "The CIA overthrew Guatemala's elected government to protect United Fruit interests.", "1954-06-27"),
  brown_v_board: c("brown_v_board", "Brown v. Board of Education", "National Archives", "https://www.archives.gov/milestone-documents/brown-v-board-of-education", "The Court ruled school segregation unconstitutional in 1954.", "1954-05-17"),
  cointelpro: c("cointelpro", "COINTELPRO", "Wikipedia", "https://en.wikipedia.org/wiki/COINTELPRO", "The FBI illegally surveilled and disrupted civil rights and anti-war groups.", "1956-01-01"),
  mkultra: c("mkultra", "Project MKUltra", "Wikipedia", "https://en.wikipedia.org/wiki/Project_MKUltra", "The CIA conducted illegal mind-control experiments without informed consent.", "1953-01-01"),
  gulf_of_tonkin: c("gulf_of_tonkin", "Gulf of Tonkin Resolution", "Congress.gov", "https://www.congress.gov/bill/88th-congress/house-joint-resolution/1145", "Congress authorized war in Vietnam based on reported attacks later shown to be exaggerated.", "1964-08-07"),
  stonewall_nps: c("stonewall_nps", "Stonewall Riots", "National Park Service", "https://www.nps.gov/places/stonewall.htm", "The 1969 Stonewall uprising sparked the modern LGBTQ+ rights movement.", "1969-06-28"),
  chile_coup: c("chile_coup", "1973 Chilean Coup", "Wikipedia", "https://en.wikipedia.org/wiki/1973_Chilean_coup_d%27%C3%A9tat", "The U.S. backed the overthrow of elected president Salvador Allende.", "1973-09-11"),
  watergate: c("watergate", "Watergate Scandal", "Wikipedia", "https://en.wikipedia.org/wiki/Watergate_scandal", "Nixon's administration covered up crimes leading to the only presidential resignation.", "1972-06-17"),
  iran_contra: c("iran_contra", "Iran-Contra Affair", "Congress.gov", "https://www.congress.gov/crs-product/R43823", "Reagan officials secretly sold arms to Iran and funded Nicaraguan Contras illegally.", "1986-11-01"),
  patriot_act: c("patriot_act", "USA PATRIOT Act", "Congress.gov", "https://www.congress.gov/bill/107th-congress/house-bill/3162", "Post-9/11 law expanded surveillance and detention powers.", "2001-10-26"),
  iraq_wmd: c("iraq_wmd", "Iraq War Intelligence", "Congressional Research Service", "https://www.congress.gov/crs-product/R42699", "Pre-war intelligence claiming active WMD programs did not hold up.", "2003-03-20"),
  financial_crisis_crs: c("financial_crisis_crs", "2007-2009 Financial Crisis", "Congressional Research Service", "https://www.congress.gov/crs-product/R42699", "Deregulated mortgage markets and Wall Street risk-taking caused the Great Recession.", "2008-09-15"),
  lost_cause_zinn: c("lost_cause_zinn", "Lost Cause of the Confederacy", "Wikipedia", "https://en.wikipedia.org/wiki/Lost_Cause_of_the_Confederacy", "The Lost Cause myth reframed the Civil War as about heritage-not slavery.", "1865-01-01"),
  jan6_archives: c("jan6_archives", "January 6 Investigation", "U.S. House of Representatives", "https://www.congress.gov/impeachment/Donald-J-Trump-45th-President", "Congress documented a violent attempt to overturn the 2020 election.", "2021-01-06"),
  book_bans_pen: c("book_bans_pen", "Banned in the USA", "PEN America", "https://pen.org/report/banned-in-the-usa/", "Coordinated campaigns removed thousands of books about race and history from schools.", "2021-01-01"),
  fugitive_slave_act: c("fugitive_slave_act", "Fugitive Slave Act of 1850", "Library of Congress", "https://www.loc.gov/rr/program/bib/ourdocs/fugitive.html", "The act required Northern citizens to help capture escaped enslaved people.", "1850-09-18"),
};
