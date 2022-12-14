const SETS = {
  sets: [
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/274637/unmatched-battle-legends-volume-one",
      boards: [
        { name: "Marmoreal", slug: "marmoreal" },
        { name: "Sarpedon", slug: "sarpedon" },
      ],
      decks: [
        { name: "Alice", slug: "alice" },
        { name: "Medusa", slug: "medusa" },
        { name: "Sinbad", slug: "sinbad" },
        { name: "King Arthur", slug: "king-arthur" },
      ],
      image: "",
      name: "Battle of Legends, Volume One",
      notes: "",
      releaseDate: "Wed, 18 Sep 2019 00:00:00 GMT",
      released: true,
      slug: "battle-of-legends-volume-one",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/274638/unmatched-robin-hood-vs-bigfoot",
      boards: [
        { name: "Sherwood Forest", slug: "sherwood-forest" },
        { name: "Yukon", slug: "yukon" },
      ],
      decks: [
        { name: "Bigfoot", slug: "bigfoot" },
        { name: "Robin Hood", slug: "robin-hood" },
      ],
      image: "",
      name: "Robin Hood vs. Bigfoot",
      notes: "",
      releaseDate: "Wed, 16 Oct 2019 00:00:00 GMT",
      released: true,
      slug: "robin-hood-vs-bigfoot",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgameexpansion/279645/unmatched-bruce-lee",
      boards: [],
      decks: [{ name: "Bruce Lee", slug: "bruce-lee" }],
      image: "",
      name: "Bruce Lee",
      notes: "",
      releaseDate: "Sat, 12 Oct 2019 00:00:00 GMT",
      released: true,
      slug: "bruce-lee",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/284777/unmatched-jurassic-park-ingen-vs-raptors",
      boards: [{ name: "Raptor Paddock", slug: "raptor-paddock" }],
      decks: [
        { name: "InGen", slug: "ingen" },
        { name: "Raptors", slug: "raptors" },
      ],
      image: "",
      name: "Jurassic Park - Ingen vs. Raptors",
      notes: "",
      releaseDate: "Wed, 29 Apr 2020 00:00:00 GMT",
      released: true,
      slug: "jurassic-park-ingen-vs-raptors",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/294484/unmatched-cobble-fog",
      boards: [
        { name: "Baskerville Manor", slug: "baskerville-manor" },
        { name: "SoHo", slug: "soho" },
      ],
      decks: [
        { name: "Dracula", slug: "dracula" },
        { name: "Sherlock Holmes", slug: "sherlock-holmes" },
        { name: "Jekyll & Hyde", slug: "jekyll-hyde" },
        { name: "Invisible Man", slug: "invisible-man" },
      ],
      image: "",
      name: "Cobble & Fog",
      notes: "",
      releaseDate: "Wed, 15 Jul 2020 00:00:00 GMT",
      released: true,
      slug: "cobble-and-fog",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/315060/unmatched-buffy-vampire-slayer",
      boards: [
        { name: "Sunnydale High", slug: "sunnydale-high" },
        { name: "The Bronze", slug: "the-bronze" },
      ],
      decks: [
        { name: "Buffy", slug: "buffy" },
        { name: "Angel", slug: "angel" },
        { name: "Spike", slug: "spike" },
        { name: "Willow", slug: "willow" },
      ],
      image: "",
      name: "Buffy the Vampire Slayer",
      notes: "",
      releaseDate: "Thu, 22 Oct 2020 00:00:00 GMT",
      released: true,
      slug: "buffy-the-vampire-slayer",
    },
    {
      bggLink: null,
      boards: [],
      decks: [
        { name: "Ms. Marvel", slug: "ms-marvel" },
        { name: "Squirrel Girl", slug: "squirrel-girl" },
        { name: "Cloak and Dagger", slug: "cloak-and-dagger" },
      ],
      image: null,
      name: "Teen Spirit",
      notes: null,
      releaseDate: null,
      released: false,
      slug: "teen-spirit",
    },
    {
      bggLink: null,
      boards: [],
      decks: [
        { name: "Black Widow", slug: "black-widow" },
        { name: "Black Panther", slug: "black-panther" },
        { name: "Winter Soldier", slug: "winter-soldier" },
      ],
      image: null,
      name: "For King and Country",
      notes: null,
      releaseDate: null,
      released: false,
      slug: "for-king-and-country",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgameexpansion/284779/unmatched-jurassic-park-grant",
      boards: [],
      decks: [{ name: "Dr. Alan Grant", slug: "dr-alan-grant" }],
      image: "",
      name: "Jurassic Park - Grant",
      notes:
        "Justin [wrote on Discord](https://discord.com/channels/722465956265197618/723183332522852382/895415680688603137) on October 10, 2021: \n> Also worth mentioning that the lack of time left in the [Jurassic Park] license means we are almost certainly not going to be release the Dr. Grant deck. Sorry, folks.",
      releaseDate: null,
      released: false,
      slug: "jurassic-park-grant",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/335764/unmatched-battle-legends-volume-two",
      boards: [{ name: "Hanging Gardens", slug: "hanging-gardens" }],
      decks: [
        { name: "Achilles", slug: "achilles" },
        { name: "Bloody Mary", slug: "bloody-mary" },
        { name: "Sun Wukong", slug: "sun-wukong" },
        { name: "Yennenga", slug: "yennenga" },
      ],
      image: "",
      name: "Battle of Legends, Volume Two",
      notes: "",
      releaseDate: "Sat, 01 Jan 2022 00:00:00 GMT",
      released: true,
      slug: "battle-of-legends-volume-two",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/325635/unmatched-little-red-riding-hood-vs-beowulf",
      boards: [{ name: "Heorot", slug: "heorot" }],
      decks: [
        { name: "Beowulf", slug: "beowulf" },
        { name: "Little Red Riding Hood", slug: "little-red" },
      ],
      image: "",
      name: "Little Red Riding Hood vs. Beowulf",
      notes: "",
      releaseDate: "Sat, 19 Dec 2020 00:00:00 GMT",
      released: true,
      slug: "little-red-vs-beowulf",
    },
    {
      bggLink: null,
      boards: [],
      decks: [
        { name: "Rosie the Riveter", slug: "rosie-the-riveter" },
        { name: "William Shakespeare", slug: "william-shakespeare" },
      ],
      image: "",
      name: "Design Contest Sets",
      notes:
        "This is a placeholder for the sets that will contain 10 (!) fan-made decks from Restoration's [Design Contest](https://restorationgames.com/unmatched-design-contest/). From the press release announcing the winners:\r\n\r\n> Restoration Games originally intended to select only four winning decks and had planned to feature\r\nthem in a single set. However, due to the overwhelming response to the contest and high quality of the submissions, eight additional decks were chosen as unofficial \u201crunners-up\u201d and will also appear in future sets. Those additional entrants and their decks will be revealed when the sets are announced.",
      releaseDate: null,
      released: false,
      slug: "design-contest-sets",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgameexpansion/335386/unmatched-deadpool",
      boards: [],
      decks: [{ name: "Deadpool", slug: "deadpool" }],
      image: null,
      name: "Deadpool",
      notes: null,
      releaseDate: "Fri, 30 Jul 2021 00:00:00 GMT",
      released: true,
      slug: "deadpool",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/326933/unmatched-redemption-row",
      boards: [{ name: "The Raft", slug: "the-raft" }],
      decks: [
        { name: "Luke Cage", slug: "luke-cage" },
        { name: "Ghost Rider", slug: "ghost-rider" },
        { name: "Moon Knight", slug: "moon-knight" },
      ],
      image: null,
      name: "Redemption Row",
      notes: null,
      releaseDate: "Fri, 01 Apr 2022 00:00:00 GMT",
      released: true,
      slug: "redemption-row",
    },
    {
      bggLink: null,
      boards: [],
      decks: [
        { name: "Harry Houdini", slug: "harry-houdini" },
        { name: "The Genie", slug: "the-genie" },
      ],
      image: null,
      name: "Houdini vs. The Genie",
      notes:
        "The first of the [Design Contest](https://restorationgames.com/unmatched-design-contest/) sets.",
      releaseDate: "Fri, 01 Jul 2022 00:00:00 GMT",
      released: false,
      slug: "houdini-vs-the-genie",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/284778/unmatched-jurassic-park-sattler-vs-t-rex",
      boards: [],
      decks: [
        { name: "Dr. Ellie Sattler", slug: "dr-ellie-sattler" },
        { name: "T. Rex", slug: "t-rex" },
      ],
      image: "",
      name: "Jurassic Park - Sattler vs. T-Rex",
      notes: "",
      releaseDate: "Sun, 01 May 2022 00:00:00 GMT",
      released: true,
      slug: "jurassic-park-sattler-vs-t-rex",
    },
    {
      bggLink:
        "https://boardgamegeek.com/boardgame/326934/unmatched-hells-kitchen",
      boards: [],
      decks: [
        { name: "Daredevil", slug: "daredevil" },
        { name: "Bullseye", slug: "bullseye" },
        { name: "Elektra", slug: "elektra" },
      ],
      image: null,
      name: "Hell's Kitchen",
      notes: null,
      releaseDate: "Fri, 01 Apr 2022 00:00:00 GMT",
      released: true,
      slug: "hells-kitchen",
    },
  ],
  total: 17,
};

export default SETS;
