import { Card, Box, Typography, Stack, Button, Avatar } from "@mui/material";
import { useState } from "react";
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
  onClickFilter = () => {},
}) {
  const [applied, setApplied] = useState(value);

  const clickOnFilter = () => {
    onClickFilter(!applied);
    setApplied(!applied);
  };

 

  return (
    <Box>
      {name && (
        <Box
          onClick={clickOnFilter}
          sx={{
            width: "30px",
            height: "30px",
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

      {!name && (
        <Box
          onClick={clickOnFilter}
          sx={{
            width: "30px",
            height: "30px",
            border: `1px solid ${color}`,
            backgroundColor: applied ? `${color}` : "#FFFFFF",
            borderRadius: "2px",
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
      <Typography>{cardsLeft} / {totalCards}</Typography>
    </Box>
  );
}

export default UnmatchedFilter;
