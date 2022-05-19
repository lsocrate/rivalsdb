type CardId = string;

type CardSet =
  | "Core"
  | "Blood & Alchemy"
  | "Promo"
  | "Wolf & Rat"
  | "Shadows & Shrouds";

type Agenda = {
  stack: "agenda";
  id: CardId;
  name: string;
  text: string;
  illustrator: string;
  set: CardSet;
};

const agendas: Record<CardId, Agenda> = {
  "sas-most-impressive": {
    name: "Most Impressive",
    text: "At the start of your turn, if your [blood-potency] in The Streets is higher than each individual foes' [blood-potency] in The Streets, gain 1 [agenda].\n\nIf you reach 13 [agenda], you win!",
    illustrator: "Mara Miranda Escota",
    set: "Shadows & Shrouds",
    id: "sas-most-impressive",
    stack: "agenda",
  },
  "sas-wake-the-dead": {
    name: "Wake the Dead",
    text: "**Exhaust:** If you control 1+ wraiths, gain 1 [agenda]. If you control 3+ [wraiths], gain 2 [agenda] instead.\n\nIf you reach 13 [agenda], you win!",
    illustrator: "Felipe Gaona",
    set: "Shadows & Shrouds",
    id: "sas-wake-the-dead",
    stack: "agenda",
  },
  "sas-death-is-only-the-beginning": {
    name: "Death is Only the Beginning",
    text: "**Exhaust:** If you have 1+ characters in torpor, gain 1 [agenda]. If you have 3+, gain 2 [agenda] instead. If you reach 13 [agenda], you win!",
    illustrator: "Irene Francisco",
    set: "Shadows & Shrouds",
    id: "sas-death-is-only-the-beginning",
    stack: "agenda",
  },
  "sas-prizefighter": {
    name: "Prizefighter",
    text: "As you attack a character, put 1 [agenda] on your attacker. At the end of your turn, put 1 [agenda] from a character in your coterie on your Agenda card. If you reach 13 [agenda], you win!",
    illustrator: "Felipe Gaona",
    set: "Shadows & Shrouds",
    id: "sas-prizefighter",
    stack: "agenda",
  },
  "core-base-of-power": {
    name: "Base of Power",
    text: "When a character in your coterie attaches a Title, gain 2 Agenda. If you reach 13 Agenda, you win!",
    illustrator: "The Creation Studio",
    set: "Core",
    id: "core-base-of-power",
    stack: "agenda",
  },
  "core-drain-them-slowly": {
    name: "Drain Them Slowly",
    text: "When a character you attack takes 1+ non-Aggravated damage but is not defeated, gain 1 Agenda. If you reach 13 Agenda, you win!",
    illustrator: "Marco Primo",
    set: "Core",
    id: "core-drain-them-slowly",
    stack: "agenda",
  },
  "core-hunt-the-hunters": {
    name: "Hunt the Hunters",
    text: "The first time you defeat a Second Inquisition during each of your turns, gain 1 [influence] and 1 [agenda], then shuffle it and any cards in the City Deck discard pile into the City Deck. If you reach 13 ]agenda], you win!",
    illustrator: "The Creation Studio",
    set: "Core",
    id: "core-hunt-the-hunters",
    stack: "agenda",
  },
  "baa-knowledge-is-power": {
    name: "Knowledge is Power",
    text: "The first time your Leader exhausts in The Streets during each of your turns, if you have 6+ Library cards in your hand, gain 1 Agenda. If exactly 10 Library cards, gain 2 Agenda instead. If you reach 13 Agenda, you win!",
    illustrator: "Darko Stojanovic",
    set: "Blood & Alchemy",
    id: "baa-knowledge-is-power",
    stack: "agenda",
  },
  "core-manipulate-the-masses": {
    name: "Manipulate the Masses",
    text: "WHen a Scheme you play suceeds, gain 1 Agenda. If you reach 13 Agenda, you win!",
    illustrator: "The Creation Studio",
    set: "Core",
    id: "core-manipulate-the-masses",
    stack: "agenda",
  },
  "core-playthings": {
    name: "Playthings",
    text: "When a character in your coterie attaches a Citizen Retainer, gain 1 Agenda. If you reach 13 Agenda, you win!",
    illustrator: "Amy Wilkins",
    set: "Core",
    id: "core-playthings",
    stack: "agenda",
  },
  "baa-recruitment-drive": {
    name: "Recruitment Drive",
    text: "When you recruit a character, gain 1 Agenda.",
    illustrator: "Darko Stojanovic",
    set: "Blood & Alchemy",
    id: "baa-recruitment-drive",
    stack: "agenda",
  },
  "baa-rites-of-the-blood": {
    name: "Rites of the Blood",
    text: "The first time you play a Ritual during each of your turns, gain 1 Agenda. If you put 3+ Blood on that Ritual, gain 2 Agenda instead. If you reach 13 Agenda, you win!",
    illustrator: "Felipe Gaona",
    set: "Blood & Alchemy",
    id: "baa-rites-of-the-blood",
    stack: "agenda",
  },
  "baa-street-brew": {
    name: "Street Brew",
    text: "At the start of your turn, if you have a character with Alchemy in your coterie, gain 1 Agenda. If 3+ characters in your coterie have Alchemy, gain 2 Agenda instead. If you reach 13 Agenda, you win!.",
    illustrator: "",
    set: "Blood & Alchemy",
    id: "baa-street-brew",
    stack: "agenda",
  },
  "core-strength-in-numbers": {
    name: "Strength in Numbers",
    text: "At the start of your turn, if you control 3 characters in The Streets, gain 1 Agenda. If you control 4+ characters each with 2+ Blood in The Streets, gain 2 Agenda instead. If you reach 13 agenda, you win!",
    illustrator: "Felipe Gaona",
    set: "Core",
    id: "core-strength-in-numbers",
    stack: "agenda",
  },
  "core-the-end-is-nigh": {
    name: "The End is Nigh",
    text: "The first time you resolve a Conspiracy during each of your turns, gain 1 Prestige and 2 Agenda. If you reach 13 Agenda, you win!",
    illustrator: "The Creation Studio",
    set: "Core",
    id: "core-the-end-is-nigh",
    stack: "agenda",
  },
  "core-turf-war": {
    name: "Turf War",
    text: "When you defeat a non-Rival character, gain 1 Agenda. When you defeat a character with 5+ Blood, gain 1 Agenda. If you reach 13 agenda, you win!",
    illustrator: "The Creation Studio",
    set: "Core",
    id: "core-turf-war",
    stack: "agenda",
  },
  "war-animal-kingdom": {
    name: "Animal Kingdom",
    text: "At the start of your turn, gain 1 [agenda] if you control 1+ Animals. If you control 3+ different Animals, gain 2 [agenda] instead. If you reach 13 [agenda], you win!",
    illustrator: "Felipe Gaona",
    set: "Wolf & Rat",
    id: "war-animal-kingdom",
    stack: "agenda",
  },
  "war-call-of-the-wild": {
    name: "Call of the Wild",
    text: "When you attach an Animal to a character in your coterie in The Streets who has no Animals attached, gain 1 [agenda]. If you control 3+ different Animals, gain 2 [agenda] instead. If you reach 13 [agenda], you win!",
    illustrator: "Harvey Bunda",
    set: "Wolf & Rat",
    id: "war-call-of-the-wild",
    stack: "agenda",
  },
  "war-hoard-the-herd": {
    name: "Hoard the Herd",
    text: "At the end of your turn, if there are no unattached City Deck Citizens or Vagrants in The Streets, gain 1 [agenda]. If there are no unattached City Deck Mortals, gain 2 [agenda] instead. If you reach 13 [agenda], you win!",
    illustrator: "Mara Miranda-Escota",
    set: "Wolf & Rat",
    id: "war-hoard-the-herd",
    stack: "agenda",
  },
  "war-invisible-army": {
    name: "Invisible Army",
    text: "When a character in your coterie attaches a Vagrant as a Retainer, gain 2 [agenda]. When you defeat a character with an attached Vagrant, gain 1 [agenda]. If you reach 13 [agenda], you win!",
    illustrator: "Harvey Bunda",
    set: "Wolf & Rat",
    id: "war-invisible-army",
    stack: "agenda",
  },
};

type Haven = {
  stack: "haven";
  id: CardId;
  name: string;
  text: string;
  illustrator: string;
  set: CardSet;
};
const havens: Record<CardId, Haven> = {
  "sas-mission-cemetery": {
    stack: "haven",
    id: "sas-mission-cemetery",
    name: "Mission Cemetery",
    text: text(`
    Characters in your Haven have +1 Secrecy.

    **Leader Ability**

    **Burn a Retainer in your coterie:** Create a wraith and attach it to a character in your coterie.
    `),
    illustrator: "Felipe Gaona",
    set: "Shadows & Shrouds",
  },
  "sas-the-big-house": {
    stack: "haven",
    id: "sas-the-big-house",
    name: "The Big House",
    text: text(`
    _Start of Game - Put 1 [prestige] from each foe's general supply on this._

    Characters in your Haven ha Secrecy.

    **Leader Ability**

    Character in your coterie ha [blood-potency].

    **Give a foe 1 [prestige] of their color from this:** Diablerize a vampire in that foe's coterie that your Leader just defeated.
    `),
    illustrator: "Felipe Gaona",
    set: "Shadows & Shrouds",
  },
  "sas-eternal-life-mortuary": {
    stack: "haven",
    id: "sas-eternal-life-mortuary",
    name: "Eternal Life Mortuary",
    text:
      "Characters in your Haven have +1 Secrecy.\n" +
      "\n" +
      "**Leader Ability**\n" +
      "\n" +
      "**Remove 2 [blood] from a character in your coterie (this may reduce them to 0):** Burn target unattached City Deck _Vagrant_ or Citizen in The Streets.",
    illustrator: "Marco Primo",
    set: "Shadows & Shrouds",
  },
  "sas-the-tenderloin": {
    stack: "haven",
    id: "sas-the-tenderloin",
    name: "The Tenderloin",
    text:
      "Characters in your Haven have +1 Secrecy.\n" +
      "\n" +
      "**Leader Ability**\n" +
      "\n" +
      "**Remove 1 [agenda] from X different sources you control:** You pay X less [prestige] to recruit your next character this turn. (Add the remaining [blood] from the general supply.)",
    illustrator: "Marco Primo",
    set: "Shadows & Shrouds",
  },
  "core-artist-lofts": {
    stack: "haven",
    id: "core-artist-lofts",
    name: "Artist Lofts",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - At the end of your turn, if your Leader is exhausted, you may draw 1 card, the discard 1 card.",
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-dragons-roost": {
    stack: "haven",
    id: "core-dragons-roost",
    name: "Dragon's Roost",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - If ready, you may move your Leader to The Streets to Block any attack and gain 1 Prestige.",
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-house-of-pain": {
    stack: "haven",
    id: "core-house-of-pain",
    name: "House of Pain",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Attacker - Discard 1 card: Your Leader deals +1 Damage to the target.",
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-old-post-office": {
    stack: "haven",
    id: "core-old-post-office",
    name: "Old Post Office",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Once during each player's turn, you may place a card fro your hand with 1-3 Blood Potence as an Influence Modifier. When revealed, gain Influence equal to the card's Blood Potence value.",
    illustrator: "Cold Castle Studios",
    set: "Core",
  },
  "core-royal-retreat": {
    stack: "haven",
    id: "core-royal-retreat",
    name: "Royal Retreat",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Characters with a Title in your coterie have +1 Influence. Discard an unattached City Deck Mortal in The Streets: Add a new card to The Streets.",
    illustrator: "Cold Castle Studios",
    set: "Core",
  },
  "baa-the-chantry": {
    stack: "haven",
    id: "baa-the-chantry",
    name: "The Chantry",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - When your Leader plays a Ritual, gain 1 Unhosted Action.",
    illustrator: "Felipe Gaona",
    set: "Blood & Alchemy",
  },
  "core-the-dockyards": {
    stack: "haven",
    id: "core-the-dockyards",
    name: "The Dockyards",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Each time your Leader would take +1 Damage, you may discard 1 card to prevent 1 Damage.",
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-the-madhouse": {
    stack: "haven",
    id: "core-the-madhouse",
    name: "The Madhouse",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Discard 1 card: Add 1 [prestige] from the general supply to a face-down card you control.",
    illustrator: "Cold Castle Studios",
    set: "Core",
  },
  "core-the-penthouse": {
    stack: "haven",
    id: "core-the-penthouse",
    name: "The Penthouse",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - When a character in your coterie attaches a Retainer, that character mends 1 Blood.",
    illustrator: "The Creation Studio",
    set: "Core",
  },
  "baa-the-pit": {
    stack: "haven",
    id: "baa-the-pit",
    name: "The Pit",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - The first time you recruit a character during each of your turns, gain 1 Action.",
    illustrator: "Marco Primo",
    set: "Blood & Alchemy",
  },
  "baa-thrift-store": {
    stack: "haven",
    id: "baa-thrift-store",
    name: "Thrift Store",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Your Library cards have -1 Blood Potence. When your Leader is defeated, put a '-1 Blood Potence' token on target character.",
    illustrator: "Marco Primo",
    set: "Blood & Alchemy",
  },
  "baa-university-library": {
    stack: "haven",
    id: "baa-university-library",
    name: "University Library",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Relentless, pay 1 Blood: Draw 1 card.",
    illustrator: "Marco Primo",
    set: "Blood & Alchemy",
  },
  "war-city-park": {
    stack: "haven",
    id: "war-city-park",
    name: "City Park",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - When your Leader exhausts, reveal the top card of your Library. If it's an Animal, draw it. Otherwise, leave it or discard it.",
    illustrator: "Harvey Bunda",
    set: "Wolf & Rat",
  },
  "war-the-outskirts": {
    stack: "haven",
    id: "war-the-outskirts",
    name: "The Outskirts",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Once during each of your turns, you may Discard an Animal: Mend 2 [blood] on any character in your coterie or in torpor.",
    illustrator: "Adelijah Ocampo",
    set: "Wolf & Rat",
  },
  "war-the-sewers": {
    stack: "haven",
    id: "war-the-sewers",
    name: "The Sewers",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Your Leader may attack City Deck Mortals in The Streets without leaving your Haven.",
    illustrator: "Felipe Gaona",
    set: "Wolf & Rat",
  },
  "war-the-shelter": {
    stack: "haven",
    id: "war-the-shelter",
    name: "The Shelter",
    text: "Characters in your Haven have +1 Secrecy. Leader Ability - Character in your coterie with 1+ Vagrants attached have +1 Secrecy in The Streets.",
    illustrator: "Felipe Gaona",
    set: "Wolf & Rat",
  },
};

function text(str: string): string {
  return str
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
}