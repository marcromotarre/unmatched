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
  console.log(DECKS.decks);
  return (
    <Box>
      {[
        SETS.sets[0],
        SETS.sets[4],
        SETS.sets[9],
        SETS.sets[1],
        SETS.sets[10],
        SETS.sets[13],
        SETS.sets[16],
        SETS.sets[3],
        SETS.sets[15],
        SETS.sets[2],
        SETS.sets[12],

      ].map((set) => (
        <Set key={set.slug} set={set}></Set>
      ))}
    </Box>
  );
}

export default Charcaters;
