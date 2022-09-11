import { Card, Box, Typography, Stack } from "@mui/material";
import { characterNames, CHARACTER_ICONS } from "../data/characters";
import {
  ATTACK_IMAGE,
  DEFENSE_IMAGE,
  SCHEME_IMAGE,
  VERSATILE_IMAGE,
} from "../data/images";

const typeColor = (type) => {
  if (type === "attack") return "#F8372F";
  if (type === "defense") return "#0684DB";
  if (type === "versatile") return "#9941BB";
  if (type === "scheme") return "#FABC67";
  return ATTACK_IMAGE;
};

const typeImage = (type) => {
  if (type === "attack") return ATTACK_IMAGE;
  if (type === "defense") return DEFENSE_IMAGE;
  if (type === "versatile") return VERSATILE_IMAGE;
  if (type === "scheme") return SCHEME_IMAGE;
  return ATTACK_IMAGE;
};

function UnmatchedType({ characterName, type, value }) {
  const characterNameSlug = characterNames[characterName].slug;
  return (
    <Stack
      spacing={1}
      direction={"column"}
      sx={{
        display: "flex",
        justofyContent: "center",
        alignItems: "center",
        backgroundColor: typeColor(type),
        width: "fit-content",
        width: "100%",
        padding: 1,
      }}
    >
      {CHARACTER_ICONS[characterNameSlug] && (
        <Card
          component="img"
          width="30px"
          height="30px"
          sx={{ borderRadius: "25px", boxShadow: 3  }}
          src={CHARACTER_ICONS[characterNameSlug].src}
        />
      )}
      <Stack
        spacing={1}
        direction={"row"}
        sx={{
          display: "flex",
          justofyContent: "center",
          alignItems: "center",
          backgroundColor: typeColor(type),
          width: "fit-content",
          width: "100%",
        }}
      >
        <Box component="img" width="50%" src={typeImage(type).src} />
        {type !== "scheme" && (
          <Typography sx={{ color: "white" }}>{value}</Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default UnmatchedType;
