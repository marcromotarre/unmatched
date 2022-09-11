import { Card, Box, Typography, Stack, Button, Avatar } from "@mui/material";
import { useState } from "react";
import { CHARACTER_ICONS } from "../data/characters";
import { stringAvatar, stringToColor } from "../utils/utils";
import UnmatchedType from "./UnmatchedType";

function UnmatchedFilter({
  name,
  image,
  color,
  unselectedImage,
  totalCards,
  cardsLeft,
  value,
  slug,
  onClickFilter = () => {},
}) {
  const [applied, setApplied] = useState(value);

  const clickOnFilter = () => {
    onClickFilter(!applied);
    setApplied(!applied);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={clickOnFilter}
    >
      {name && !CHARACTER_ICONS[slug] && (
        <Box
          sx={{
            width: "40px",
            height: "40px",
            border: `1px solid ${stringToColor(name)}`,
            backgroundColor: applied ? `${stringToColor(name)}` : "#FFFFFF",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ color: applied ? "#FFFFFF" : `${stringToColor(name)}` }}
          >
            {stringAvatar(name)}
          </Typography>
        </Box>
      )}
      {name && CHARACTER_ICONS[slug] && (
        <Box
          sx={{
            width: "40px",
            height: "40px",
            border: `1px solid ${stringToColor(name)}`,
            backgroundColor: applied ? `${stringToColor(name)}` : "#FFFFFF",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ borderRadius: "30px" }}
            component="img"
            width="30px"
            height="30px"
            src={CHARACTER_ICONS[slug].src}
          />
        </Box>
      )}

      {!name && (
        <Box
          sx={{
            width: "40px",
            height: "40px",
            border: `1px solid ${color}`,
            backgroundColor: applied ? `${color}` : "#FFFFFF",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            width="25px"
            height="25px"
            src={applied ? image : unselectedImage}
          />
        </Box>
      )}
      <Typography sx={{ fontSize: "10px" }}>
        {cardsLeft} / {totalCards}
      </Typography>
    </Box>
  );
}

export default UnmatchedFilter;
