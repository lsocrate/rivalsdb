import { CardId, CardSet, md } from "./common.js";

export type Haven = {
  stack: "haven";
  name: string;
  text: string;
  illustrator: string;
  set: CardSet;
};

export const havens: Record<CardId, Haven> = {
  "baa-the-chantry": {
    stack: "haven",
    name: "The Chantry",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      When your Leader plays a Ritual, gain 1 Unhosted Action.
    `,
    illustrator: "Felipe Gaona",
    set: "Blood & Alchemy",
  },
  "baa-the-pit": {
    stack: "haven",
    name: "The Pit",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      The first time you recruit a character during each of your turns, gain 1 Action.
    `,
    illustrator: "Marco Primo",
    set: "Blood & Alchemy",
  },
  "baa-thrift-store": {
    stack: "haven",
    name: "Thrift Store",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Your Library cards have -1 Blood Potence. When your Leader is defeated, put a '-1 Blood Potence' token on target character.
    `,
    illustrator: "Marco Primo",
    set: "Blood & Alchemy",
  },
  "baa-university-library": {
    stack: "haven",
    name: "University Library",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Relentless, pay 1 Blood: Draw 1 card.
    `,
    illustrator: "Marco Primo",
    set: "Blood & Alchemy",
  },
  "core-artist-lofts": {
    stack: "haven",
    name: "Artist Lofts",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      At the end of your turn, if your Leader is exhausted, you may draw 1 card, the discard 1 card.
    `,
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-dragons-roost": {
    stack: "haven",
    name: "Dragon's Roost",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      If ready, you may move your Leader to The Streets to Block any attack and gain 1 [prestige].
    `,
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-house-of-pain": {
    stack: "haven",
    name: "House of Pain",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Attacker - Discard 1 card: Your Leader deals +1 Damage to the target.
    `,
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-old-post-office": {
    stack: "haven",
    name: "Old Post Office",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Once during each player's turn, you may place a card fro your hand with 1-3 Blood Potence as an Influence Modifier. When revealed, gain Influence equal to the card's Blood Potence value.
    `,
    illustrator: "Cold Castle Studios",
    set: "Core",
  },
  "core-royal-retreat": {
    stack: "haven",
    name: "Royal Retreat",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Characters with a Title in your coterie have +1 Influence. Discard an unattached City Deck Mortal in The Streets: Add a new card to The Streets.
    `,
    illustrator: "Cold Castle Studios",
    set: "Core",
  },
  "core-the-dockyards": {
    stack: "haven",
    name: "The Dockyards",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Each time your Leader would take +1 Damage, you may discard 1 card to prevent 1 Damage.
    `,
    illustrator: "Felipe Gaona",
    set: "Core",
  },
  "core-the-madhouse": {
    stack: "haven",
    name: "The Madhouse",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Discard 1 card: Add 1 [prestige] from the general supply to a face-down card you control.
    `,
    illustrator: "Cold Castle Studios",
    set: "Core",
  },
  "core-the-penthouse": {
    stack: "haven",
    name: "The Penthouse",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      When a character in your coterie attaches a Retainer, that character mends 1 Blood.
    `,
    illustrator: "The Creation Studio",
    set: "Core",
  },
  "hoe-guard-tower": {
    stack: "haven",
    name: "The Guard Tower",
    text: md`
      Guards in your coterie have +1 [Shield] while Blocking.

      **Leader Ability**

      Guards in your coterie deal +1 [damage] to Blockers. At the end of your turn, ready 1 character in your coterie.
    `,
    illustrator: "Marco Primo",
    set: "Heart of Europe",
  },
  "hoe-old-rail-station": {
    stack: "haven",
    name: "Old Rail Station",
    text: md`
      Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Characters attacking your coterie deal -1 [damage] for each '-1 [Blood Potency]' token on them.
    `,
    illustrator: "Marco Primo",
    set: "Heart of Europe",
  },
  "sas-eternal-life-mortuary": {
    stack: "haven",
    name: "Eternal Life Mortuary",
    text: md`
      Characters in your Haven have +1 Secrecy.

           **Leader Ability**

           **Remove 2 [blood] from a character in your coterie (this may reduce them to 0):** Burn target unattached City Deck Vagrant or Citizen in The Streets.
    `,
    illustrator: "Marco Primo",
    set: "Shadows & Shrouds",
  },
  "sas-mission-cemetery": {
    stack: "haven",
    name: "Mission Cemetery",
    text: md`
      Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      **Burn a Retainer in your coterie:** Create a wraith and attach it to a character in your coterie.
    `,
    illustrator: "Felipe Gaona",
    set: "Shadows & Shrouds",
  },
  "sas-the-big-house": {
    stack: "haven",
    name: "The Big House",
    text: md`
      _Start of Game - Put 1 [prestige] from each foe's general supply on this._

      Characters in your Haven ha Secrecy.

      **Leader Ability**

      Character in your coterie ha [blood-potency].

      **Give a foe 1 [prestige] of their color from this:** Diablerize a vampire in that foe's coterie that your Leader just defeated.
    `,
    illustrator: "Felipe Gaona",
    set: "Shadows & Shrouds",
  },
  "sas-the-tenderloin": {
    stack: "haven",
    name: "The Tenderloin",
    text: md`
      Characters in your Haven have +1 Secrecy.

           **Leader Ability**

           **Remove 1 [agenda] from X different sources you control:** You pay X less [prestige] to recruit your next character this turn. (Add the remaining [blood] from the general supply.)
    `,
    illustrator: "Marco Primo",
    set: "Shadows & Shrouds",
  },
  "war-city-park": {
    stack: "haven",
    name: "City Park",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      When your Leader exhausts, reveal the top card of your Library. If it's an Animal, draw it. Otherwise, leave it or discard it.
    `,
    illustrator: "Harvey Bunda",
    set: "Wolf & Rat",
  },
  "war-the-outskirts": {
    stack: "haven",
    name: "The Outskirts",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Once during each of your turns, you may Discard an Animal: Mend 2 [blood] on any character in your coterie or in torpor.
    `,
    illustrator: "Adelijah Ocampo",
    set: "Wolf & Rat",
  },
  "war-the-sewers": {
    stack: "haven",
    name: "The Sewers",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Your Leader may attack City Deck Mortals in The Streets without leaving your Haven.
    `,
    illustrator: "Felipe Gaona",
    set: "Wolf & Rat",
  },
  "war-the-shelter": {
    stack: "haven",
    name: "The Shelter",
    text: md`
Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      Character in your coterie with 1+ Vagrants attached have +1 Secrecy in The Streets.
    `,
    illustrator: "Felipe Gaona",
    set: "Wolf & Rat",
  },
  "xxx-tent-city": {
    stack: "haven",
    name: "Tent City",
    text: md`
      Characters in your Haven have +1 Secrecy.

      **Leader Ability**

      While your coterie has characters from 3+ different clans, characters in your coterie have +1 Secrecy.
    `,
    illustrator: "Felipe Gaona",
    set: "Promo",
  },
};
