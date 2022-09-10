import { Card, Box, Typography, Stack } from "@mui/material";
import { characterNames } from "../data/characters";
import { stringAvatar, stringToColor } from "../utils/utils";
import UnmatchedType from "./UnmatchedType";

function UnmatchedCard({
  characterName,
  title,
  type,
  value,
  discarted,
  discardCard = () => {},
}) {
  return <Box>Unmatched Card</Box>;
}

export default UnmatchedCard;
