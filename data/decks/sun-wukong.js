const SUN_WUKONG = {
  cards: [
    {
      afterText: "Gain 1 action.",
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText:
        "For each other friendly fighter adjacent to the opposing fighter, increase the value of this card by +1.",
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 3,
      slug: "infinite-strikes",
      title: "Infinite Strikes",
      type: "attack",
      value: 2,
    },
    {
      afterText:
        "If your opponent played a defense card, TRICKED YOU.\nTRICKED YOU: 4 ATK",
      basicText: null,
      boost: 3,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 3,
      slug: "riyu-jingo-bang",
      title: "Riyu Jingo Bang",
      type: "attack",
      value: 0,
    },
    {
      afterText: null,
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText:
        "Your opponent may discard 1 card from their hand. If they don't, ignore their card's value.",
      other_decks: [],
      quantity: 3,
      slug: "taunting-laughter",
      title: "Taunting Laughter",
      type: "attack",
      value: 3,
    },
    {
      afterText: null,
      basicText: "This card's effects cannot be canceled.",
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: "If your opponent played a card, they may BOOST it.",
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "ox-form",
      title: "Ox Form",
      type: "attack",
      value: 7,
    },
    {
      afterText:
        "Take an OX FORM, TORTOISE FORM, or PHOENIX FORM from your discard pile and return it to your hand.",
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 3,
      slug: "72-transformations",
      title: "72 Transformations",
      type: "versatile",
      value: 2,
    },
    {
      afterText:
        "If Sun Wukong played this card, summon a Clone in Sun Wukong's space, then place Sun Wukong in a space in his zone.",
      basicText: null,
      boost: 3,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 4,
      slug: "sly-monkey",
      title: "Sly Monkey",
      type: "versatile",
      value: 2,
    },
    {
      afterText:
        "Deal 1 damage to each opposing fighter adjacent to your fighter.",
      basicText: null,
      boost: 1,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText: null,
      other_decks: [
        {
          name: "Robin Hood",
          slug: "robin-hood",
        },
        {
          name: "Achilles",
          slug: "achilles",
        },
      ],
      quantity: 3,
      slug: "wily-fighting",
      title: "Wily Fighting",
      type: "versatile",
      value: 3,
    },
    {
      afterText: "You may place your fighter in any space.",
      basicText: null,
      boost: 2,
      card_notes:
        'The Merlin version of this card says "Merlin" instead of "your fighter".',
      characterName: "ANY",
      deck_card_notes: null,
      duringText: "Prevent all damage",
      image: null,
      immediateText: null,
      other_decks: [
        {
          name: "King Arthur",
          slug: "king-arthur",
        },
      ],
      quantity: 2,
      slug: "bewilderment",
      title: "Bewilderment",
      type: "defense",
      value: 0,
    },
    {
      afterText: null,
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText:
        "Any combat damage you would take is dealt to the opposing fighter instead.",
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "golden-chain-mail",
      title: "Golden Chain Mail",
      type: "defense",
      value: 4,
    },
    {
      afterText: null,
      basicText: null,
      boost: 2,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: "Your opponent may BOOST their attack.",
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "tortoise-form",
      title: "Tortoise Form",
      type: "defense",
      value: 5,
    },
    {
      afterText: null,
      basicText:
        "Look at an opponent's hand and choose a card. Put that card on the bottom of their deck. You each draw 1 card.",
      boost: 1,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 2,
      slug: "fiery-eyes-that-see",
      title: "Fiery Eyes That See",
      type: "scheme",
      value: null,
    },
    {
      afterText: null,
      basicText: "Sun Wukong recovers 1 health for each Clone on the board.",
      boost: 1,
      card_notes: null,
      characterName: "ANY",
      deck_card_notes: null,
      duringText: null,
      image: null,
      immediateText: null,
      other_decks: [],
      quantity: 1,
      slug: "phoenix-form",
      title: "Phoenix Form",
      type: "scheme",
      value: null,
    },
  ],
  heroes: [
    {
      attack_type: "melee",
      hp: 17,
      name: "Sun Wukong",
      quantity: 1,
      slug: "sun-wukong",
    },
  ],
  movement: 2,
  name: "Sun Wukong",
  notes: null,
  quote: null,
  set: "Battle of Legends, Volume Two",
  setSlug: "battle-of-legends-volume-two",
  sidekicks: [
    {
      attack_type: "melee",
      hp: 1,
      name: "Clones",
      quantity: 3,
      slug: "clones",
    },
  ],
  slug: "sun-wukong",
  special:
    "At the start of your turn, you may take 1 damage to summon a Clone in an empty space adjacent to Sun Wukong.\nDo not start with any Clones on the board.",
};

export default SUN_WUKONG;
