const RAPTORS = {
  cards: [
    {
      afterText:
        "Choose an empty space in this fighter's zone. Place this fighter in that space.",
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/disengage.png",
      immediateText: null,
      other_decks: [
        {
          name: "Bigfoot",
          slug: "bigfoot",
        },
        {
          name: "Angel",
          slug: "angel",
        },
      ],
      quantity: 2,
      slug: "disengage",
      title: "Disengage",
      type: "attack",
      value: 4,
    },
    {
      afterText:
        "If one or more of your Raptors is adjacent to the opposing fighter, gain 1 action.",
      basicText: null,
      boost: 3,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/clever-girl.png",
      immediateText: null,
      other_decks: [],
      quantity: 3,
      slug: "clever-girl",
      title: "Clever Girl",
      type: "attack",
      value: 3,
    },
    {
      afterText: null,
      basicText:
        "Choose one of your Raptors. You may place each of your other Raptors in any space in the chosen Raptor's zone.",
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/coordinated-attack-pattern.png",
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "coordinated-attack-pattern",
      title: "Coordinated Attack Pattern",
      type: "scheme",
      value: 2,
    },
    {
      afterText:
        "If you won the combat, deal 1 damage to the opposing fighter for each of your Raptors adjacent to them.",
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/pack-hunters.png",
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "pack-hunters",
      title: "Pack Hunters",
      type: "attack",
      value: 4,
    },
    {
      afterText:
        "If you won the combat, deal 1 damage to one adjacent opposing fighter.",
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/eaten-alive.png",
      immediateText: null,
      other_decks: [],
      quantity: 3,
      slug: "eaten-alive",
      title: "Eaten Alive",
      type: "versatile",
      value: 4,
    },
    {
      afterText: null,
      basicText:
        "Move each of your Raptors up to 3 spaces. You may move them through spaces containing opposing fighters. Gain 1 action.",
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/working-things-out.png",
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "working-things-out",
      title: "Working Things Out",
      type: "scheme",
      value: 2,
    },
    {
      afterText: null,
      basicText: null,
      boost: 1,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/decoy.png",
      immediateText:
        "Choose one of your other undefeated Raptors. You may place her adjacent to the opposing fighter.",
      other_decks: [],
      quantity: 4,
      slug: "decoy",
      title: "Decoy",
      type: "defense",
      value: 3,
    },
    {
      afterText: "Gain 1 action.",
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/they-remember.png",
      immediateText: null,
      other_decks: [],
      quantity: 4,
      slug: "they-remember",
      title: "They Remember",
      type: "attack",
      value: 2,
    },
    {
      afterText: null,
      basicText: null,
      boost: 3,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/eviscerate.png",
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "eviscerate",
      title: "Eviscerate",
      type: "attack",
      value: 5,
    },
    {
      afterText: null,
      basicText: null,
      boost: 3,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText:
        "Your opponent discards 1 random card. Add its BOOST value to this card's attack value.",
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/ambush.png",
      immediateText: null,
      other_decks: [
        {
          name: "Dracula",
          slug: "dracula",
        },
        {
          name: "Robin Hood",
          slug: "robin-hood",
        },
      ],
      quantity: 3,
      slug: "ambush",
      title: "Ambush",
      type: "attack",
      value: 2,
    },
    {
      afterText: null,
      basicText: null,
      boost: 1,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image:
        "https://static.unmatched.cards/images/umdb/decks/raptors/feint.png",
      immediateText: "Cancel all effects on your opponent's card.",
      other_decks: [
        {
          name: "Alice",
          slug: "alice",
        },
        {
          name: "Bigfoot",
          slug: "bigfoot",
        },
        {
          name: "Dracula",
          slug: "dracula",
        },
        {
          name: "Bruce Lee",
          slug: "bruce-lee",
        },
        {
          name: "Jekyll & Hyde",
          slug: "jekyll-hyde",
        },
        {
          name: "King Arthur",
          slug: "king-arthur",
        },
        {
          name: "Medusa",
          slug: "medusa",
        },
        {
          name: "Robin Hood",
          slug: "robin-hood",
        },
        {
          name: "Moon Knight",
          slug: "moon-knight",
        },
        {
          name: "Bloody Mary",
          slug: "bloody-mary",
        },
        {
          name: "Ghost Rider",
          slug: "ghost-rider",
        },
        {
          name: "Deadpool",
          slug: "deadpool",
        },
        {
          name: "Dr. Ellie Sattler",
          slug: "dr-ellie-sattler",
        },
        {
          name: "Achilles",
          slug: "achilles",
        },
        {
          name: "Daredevil",
          slug: "daredevil",
        },
        {
          name: "Bullseye",
          slug: "bullseye",
        },
        {
          name: "Sherlock Holmes",
          slug: "sherlock-holmes",
        },
        {
          name: "Sinbad",
          slug: "sinbad",
        },
        {
          name: "InGen",
          slug: "ingen",
        },
        {
          name: "Willow",
          slug: "willow",
        },
        {
          name: "Angel",
          slug: "angel",
        },
        {
          name: "Spike",
          slug: "spike",
        },
        {
          name: "Buffy",
          slug: "buffy",
        },
        {
          name: "Beowulf",
          slug: "beowulf",
        },
      ],
      quantity: 3,
      slug: "feint",
      title: "Feint",
      type: "versatile",
      value: 2,
    },
  ],
  heroes: [
    {
      attack_type: "melee",
      hp: 7,
      name: "Raptors",
      quantity: 3,
      slug: "raptors",
    },
  ],
  movement: 3,
  name: "Raptors",
  notes: null,
  quote:
    '"They\'re lethal at 8 months, and I do mean lethal." - Robert Muldoon',
  set: "Jurassic Park - Ingen vs. Raptors",
  setSlug: "jurassic-park-ingen-vs-raptors",
  sidekicks: [],
  slug: "raptors",
  special:
    "Raptors add 1 to the value of their attack cards for each of your other Raptors adjacent to the \r\ndefender.",
};
export default RAPTORS;
