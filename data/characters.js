import ALICE_CHARACTER_CARD_IMAGE from "../images/charcater-cards/alice-character-card.webp";
import ALICE_CHARACTER_ICON from "../images/character-icons/alice-character-icon.png";
import THE_JABBERWOCK_CHARACTER_ICON from "../images/character-icons/the-jabberwork-character-icon.jpg";
import SINBAD_CHARACTER_CARD_IMAGE from "../images/charcater-cards/sinbad-character-card.webp";
import SINBAD_CHARACTER_ICON from "../images/character-icons/sinbad-character-icon.jpg";
import THE_PORTER_CHARACTER_ICON from "../images/character-icons/the-porter-character-icon.jpg";
import MEDUSA_CHARACTER_CARD_IMAGE from "../images/charcater-cards/medusa-character-card.webp";
import MEDUSA_CHARACTER_ICON from "../images/character-icons/medusa-character-icon.webp";
import HARPY_CHARACTER_ICON from "../images/character-icons/harpy-character-icon.jpg";
import KING_ARTHUR_CHARACTER_CARD_IMAGE from "../images/charcater-cards/king-arthur-character-card.webp";
import KING_ARTHUR_CHARACTER_ICON from "../images/character-icons/king-arthur-character-icon.jpg";
import MERLIN_CHARACTER_ICON from "../images/character-icons/merlin-character-icon.webp";

import BIGFOOT_CHARACTER_CARD_IMAGE from "../images/charcater-cards/bigfoot-character-card.webp";
import BIGFOOT_CHARACTER_ICON from "../images/character-icons/big-foot-character-icon.jpg";
import THE_JACKALOPE_CHARACTER_ICON from "../images/character-icons/the-jackalope-character-icon.jpg";
import ROBIN_HOOD_CHARACTER_CARD_IMAGE from "../images/charcater-cards/robin-hood-character-card.webp";
import ROBIN_HOOD_CHARACTER_ICON from "../images/character-icons/robin-hood-character-icon.jpg";
import OUTLAWS_CHARACTER_ICON from "../images/character-icons/outlaws-character-icon.jpg";

import LITTLE_RED_CHARACTER_CARD_IMAGE from "../images/charcater-cards/little-red-unmatched-card.webp";
import LITTLE_RED_CHARACTER_ICON from "../images/character-icons/little-red-character-icon.jpg";
import THE_HUNTER_CHARACTER_ICON from "../images/character-icons/the-hunter-character-icon.jpg";
import BEOWULF_CHARACTER_CARD_IMAGE from "../images/charcater-cards/beowulf-character-card.webp";

import DRACULA_CHARACTER_CARD_IMAGE from "../images/charcater-cards/dracula-character-card.webp";
import DRACULA_CHARACTER_ICON from "../images/character-icons/dracula-character-icon.jpg";
import THE_SISTERS_CHARACTER_ICON from "../images/character-icons/the-sisters-character-icon.jpg";
import SHERLOCK_HOLMES_CHARACTER_CARD_IMAGE from "../images/charcater-cards/sherlock-holmes-character-card.webp";
import INVISIBLE_MAN_CHARACTER_CARD_IMAGE from "../images/charcater-cards/invisible-man-character-card.webp";
import JEKYLL_HYDE_CHARACTER_CARD_IMAGE from "../images/charcater-cards/jekyll-hyde-character-card.webp";

import ACHILLES_CHARACTER_CARD_IMAGE from "../images/charcater-cards/achilles-character-card.webp";
import ACHILLES_CHARACTER_ICON from "../images/character-icons/achiles-character-icon.jpg";
import PATROCLUS_CHARACTER_ICON from "../images/character-icons/patroclus-character-icon.jpg";
import BLOODY_MARY_CHARACTER_CARD_IMAGE from "../images/charcater-cards/bloody-mary-character-card.webp";
import SUN_WUKONG_CHARACTER_CARD_IMAGE from "../images/charcater-cards/sun-wukong-character-card.webp";
import YENNENGA_CHARACTER_CARD_IMAGE from "../images/charcater-cards/yennenga-character-card.jpeg";
import YENNENGA_CHARACTER_ICON from "../images/character-icons/yennenga-character-icon.webp";
import THE_ARCHERS_CHARACTER_ICON from "../images/character-icons/archers-character-icon.jpg";

import GHOST_RIDER_CHARACTER_CARD_IMAGE from "../images/charcater-cards/ghost-rider-character-card.webp";
import LUKE_CAGE_CHARACTER_CARD_IMAGE from "../images/charcater-cards/luke-cage-character-card.webp";
import MOON_KNIGHT_CHARACTER_CARD_IMAGE from "../images/charcater-cards/moon-knight-character-card.webp";

import DAREDEVIL_CHARACTER_CARD_IMAGE from "../images/charcater-cards/daredevil-character-card.webp";
import ELEKTRA_CHARACTER_CARD_IMAGE from "../images/charcater-cards/elektra-character-card.webp";
import BULLSEYE_CHARACTER_CARD_IMAGE from "../images/charcater-cards/bullseye-character-card.webp";

import T_REX_CHARACTER_CARD_IMAGE from "../images/charcater-cards/t-rex-character-card.webp";
import DR_SATTLER_CHARACTER_CARD_IMAGE from "../images/charcater-cards/dr-sattler-character-card.webp";

import INGEN_CHARACTER_CARD_IMAGE from "../images/charcater-cards/robert-muldoon-character-card.webp";
import RAPTORS_CHARACTER_CARD_IMAGE from "../images/charcater-cards/raptors-character-card.webp";

import BRUCE_LEE_CHARACTER_CARD_IMAGE from "../images/charcater-cards/bruce-lee-character-card.webp";
import DEADPOOL_CHARACTER_CARD_IMAGE from "../images/charcater-cards/deadpool-character-card.webp";

import HOUDINI_CHARACTER_CARD_IMAGE from "../images/charcater-cards/houdini-character-card.webp";
import GENIE_CHARACTER_CARD_IMAGE from "../images/charcater-cards/genie-character-card.webp";

export const CHARACTER_ICONS = {
  alice: ALICE_CHARACTER_ICON,
  "the-jabberwock": THE_JABBERWOCK_CHARACTER_ICON,
  medusa: MEDUSA_CHARACTER_ICON,
  harpies: HARPY_CHARACTER_ICON,
  "king-arthur": KING_ARTHUR_CHARACTER_ICON,
  merlin: MERLIN_CHARACTER_ICON,
  sinbad: SINBAD_CHARACTER_ICON,
  "the-porter": THE_PORTER_CHARACTER_ICON,
  dracula: DRACULA_CHARACTER_ICON,
  "the-sisters": THE_SISTERS_CHARACTER_ICON,
  yennenga: YENNENGA_CHARACTER_ICON,
  archers: THE_ARCHERS_CHARACTER_ICON,
  achilles: ACHILLES_CHARACTER_ICON,
  patroclus: PATROCLUS_CHARACTER_ICON,
  "little-red": LITTLE_RED_CHARACTER_ICON,
  "huntsman-red": LITTLE_RED_CHARACTER_ICON,
  huntsman: THE_HUNTER_CHARACTER_ICON,
  bigfoot: BIGFOOT_CHARACTER_ICON,
  jackalope: THE_JACKALOPE_CHARACTER_ICON,
  "the-jackalope": THE_JACKALOPE_CHARACTER_ICON,
  "robin-hood": ROBIN_HOOD_CHARACTER_ICON,
  outlaws: OUTLAWS_CHARACTER_ICON,
};

export const CHARACTER_FUNCTIONS = {
  "sun-wukong": {
    beforeDeck: (deck) => {
      return { ...deck, sidekicks: [] };
    },
  },
  "moon-knight": {
    beforeDeck: (deck) => {
      return { ...deck, heroes: [deck.heroes[0]] };
    },
  },
  "jekyll-hyde": {
    beforeDeck: (deck) => {
      return {
        ...deck,
        heroes: [
          {
            attack_type: "melee",
            hp: 16,
            name: "Dr. Jekyll",
            quantity: 1,
            slug: "jekyll",
          },
          {
            attack_type: "melee",
            hp: 16,
            name: "Mr. Hyde",
            quantity: 1,
            slug: "hyde",
          },
        ],
      };
    },
  },
};

export const CHARACTER_CARDS_IMAGES = {
  alice: ALICE_CHARACTER_CARD_IMAGE,
  sinbad: SINBAD_CHARACTER_CARD_IMAGE,
  medusa: MEDUSA_CHARACTER_CARD_IMAGE,
  "king-arthur": KING_ARTHUR_CHARACTER_CARD_IMAGE,

  bigfoot: BIGFOOT_CHARACTER_CARD_IMAGE,
  "robin-hood": ROBIN_HOOD_CHARACTER_CARD_IMAGE,

  beowulf: BEOWULF_CHARACTER_CARD_IMAGE,
  "little-red": LITTLE_RED_CHARACTER_CARD_IMAGE,

  dracula: DRACULA_CHARACTER_CARD_IMAGE,
  "sherlock-holmes": SHERLOCK_HOLMES_CHARACTER_CARD_IMAGE,
  "invisible-man": INVISIBLE_MAN_CHARACTER_CARD_IMAGE,
  "jekyll-hyde": JEKYLL_HYDE_CHARACTER_CARD_IMAGE,

  achilles: ACHILLES_CHARACTER_CARD_IMAGE,
  "bloody-mary": BLOODY_MARY_CHARACTER_CARD_IMAGE,
  "sun-wukong": SUN_WUKONG_CHARACTER_CARD_IMAGE,
  yennenga: YENNENGA_CHARACTER_CARD_IMAGE,

  "ghost-rider": GHOST_RIDER_CHARACTER_CARD_IMAGE,
  "luke-cage": LUKE_CAGE_CHARACTER_CARD_IMAGE,
  "moon-knight": MOON_KNIGHT_CHARACTER_CARD_IMAGE,

  daredevil: DAREDEVIL_CHARACTER_CARD_IMAGE,
  elektra: ELEKTRA_CHARACTER_CARD_IMAGE,
  bullseye: BULLSEYE_CHARACTER_CARD_IMAGE,

  "t-rex": T_REX_CHARACTER_CARD_IMAGE,
  "dr-ellie-sattler": DR_SATTLER_CHARACTER_CARD_IMAGE,

  ingen: INGEN_CHARACTER_CARD_IMAGE,
  raptors: RAPTORS_CHARACTER_CARD_IMAGE,

  "bruce-lee": BRUCE_LEE_CHARACTER_CARD_IMAGE,
  deadpool: DEADPOOL_CHARACTER_CARD_IMAGE,

  "harry-houdini": HOUDINI_CHARACTER_CARD_IMAGE,
  "the-genie": GENIE_CHARACTER_CARD_IMAGE,
};

export const characterNames = {
  ANY: { name: "any", slug: "any" },

  // unmatched volumen 1
  ALICE: { name: "Alice", slug: "alice" },
  JABBERWOCK: { name: "The Jabberwock", slug: "the-jabberwock" },

  MEDUSA: { name: "Medusa", slug: "medusa" },
  HARPY: { name: "Harpies", slug: "harpies" },

  SINBAD: { name: "Sinbad", slug: "sinbad" },
  PORTER: { name: "The Porter", slug: "the-porter" },

  ARTHUR: { name: "King Arthur", slug: "king-arthur" },
  MERLIN: { name: "Merlin", slug: "merlin" },

  // Cobble & Fog
  DRACULA: { name: "Dracula", slug: "dracula" },
  SISTER: { name: "The Sisters", slug: "the-sisters" },

  HOLMES: { name: "Sherlock Holmes", slug: "sherlock-holmes" },
  "DR. WATSON": { name: "Dr. Watson", slug: "dr-watson" },

  "MR. HYDE": { name: "Mr. Hyde", slug: "jekyll" },
  "DR. JEKYLL": { name: "Dr. Jekyll", slug: "hyde" },

  "INVISIBLE MAN": { name: "Invisible Man", slug: "invisible-man" },

  // unmatched volumen 2
  ACHILLES: { name: "Achilles", slug: "achilles" },
  PATROCLUS: { name: "Patroclus", slug: "patroclus" },

  "BLOODY MARY": { name: "Bloody Mary", slug: "bloody-mary" },

  "SUN WUKONG": { name: "Sun Wukong", slug: "sun-wukong" },

  YENNENGA: { name: "Yennenga", slug: "yennenga" },
  ARCHER: { name: "Archers", slug: "archers" },

  //Robin hood vs Big Foot
  BIGFOOT: { name: "Bigfoot", slug: "bigfoot" },
  JACKALOPE: { name: "Jackalope", slug: "jackalope" },

  ROBIN: { name: "Robin Hood", slug: "robin-hood" },
  OUTLAW: { name: "Outlaws", slug: "outlaws" },

  //Little Red vs Beowulf
  BEOWULF: { name: "Beowulf", slug: "Beowulf" },
  WIGLAF: { name: "Wiglaf", slug: "wiglaf" },

  "LITTLE RED": { name: "Little Red", slug: "little-red" },
  HUNTSMAN: { name: "Huntsman", slug: "huntsman" },

  //Bruce Lee
  BRUCELEE: { name: "Bruce Lee", slug: "bruce-lee" },

  //Hells kitchen
  DAREDEVIL: { name: "Daredevil", slug: "daredevil" },
  ELEKTRA: { name: "Elektra", slug: "elektra" },
  "THE HAND": { name: "The Hand", slug: "the-hand" },
  BULLSEYE: { name: "Bullseye", slug: "bullseye" },

  //Redemption Row
  "GHOST RIDER": { name: "Ghost Rider", slug: "ghost-rider" },

  "MOON KNIGHT": { name: "Moon Knight", slug: "moon-knight" },

  "LUKE CAGE": { name: "Luke Cage", slug: "luke-cage" },
  "MISTY KNIGHT": { name: "Misty Knight", slug: "misty-knight" },

  MULDOON: { name: "Robert Muldoon", slug: "robert-muldoon" },
  "INGEN WORKER": { name: "Ingen Workers", slug: "ingen-workers" },
  RAPTORS: { name: "Raptors", slug: "raptors" },

  "T-REX": { name: "T. Rex", slug: "t-rex" },
  "DR. SATTLER": { name: "Dr. Ellie Sattler", slug: "dr-ellie-sattler" },
  "DR. MALCOLM": { name: "Dr. Malcolm", slug: "dr-malcolm" },

  "BRUCE LEE": { name: "Bruce Lee", slug: "bruce-lee" },

  Deadp$$l: { name: "Deadpool", slug: "deadpool" },
  Deadpool: { name: "Deadpool", slug: "deadpool" },

  HOUDINI: {
    name: "Harry Houdini",
    slug: "harry-houdini",
  },
  BESS: {
    name: "Bess",
    slug: "bess",
  },
  "THE GENIE": {
    name: "The Genie",
    slug: "the-genie",
  },
};
