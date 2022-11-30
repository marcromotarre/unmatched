import { Card, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { CHARACTER_CARDS_IMAGES } from "../data/characters";
import DECKS from "../data/decks";
import { MEDUSA_BACK_IMAGE, SIMBAD_BACK_IMAGE } from "../data/images";
import SETS from "../data/sets";

function Set({ set }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "calc(50% - 10px) calc(50% - 10px)",
        columnGap: "20px",
        rowGap: "20px",
      }}
    >
      {set.decks.map((deck) => (
        <Link key={deck.slug} href={`/characters/${deck.slug}`}>
          <Box
            component="img"
            width="100%"
            src={CHARACTER_CARDS_IMAGES[deck.slug]?.src}
          />
        </Link>
      ))}
    </Box>
  );
}

function Charcaters() {
  console.log(SETS.sets);
  return (
    <Box>
      {[
        SETS.sets.find(({ slug }) => slug === "battle-of-legends-volume-one"),
        SETS.sets.find(({ slug }) => slug === "robin-hood-vs-bigfoot"),
        SETS.sets.find(({ slug }) => slug === "little-red-vs-beowulf"),
        SETS.sets.find(({ slug }) => slug === "houdini-vs-the-genie"),
        
        
        SETS.sets.find(({ slug }) => slug === "cobble-and-fog"),
        SETS.sets.find(({ slug }) => slug === "battle-of-legends-volume-two"),
        SETS.sets.find(({ slug }) => slug === "jurassic-park-ingen-vs-raptors"),
        SETS.sets.find(({ slug }) => slug === "jurassic-park-sattler-vs-t-rex"),
        SETS.sets.find(({ slug }) => slug === "redemption-row"),
        SETS.sets.find(({ slug }) => slug === "hells-kitchen"),
        
        //SETS.sets.find(({ slug }) => slug === "for-king-and-country"), 
        //SETS.sets.find(({ slug }) => slug === "teen-spirit"), 

        SETS.sets.find(({ slug }) => slug === "deadpool"),
        SETS.sets.find(({ slug }) => slug === "bruce-lee"),
        
        
      ].map((set) => (
        <Set key={set.slug} set={set}></Set>
      ))}
    </Box>
  );
}

export default Charcaters;
