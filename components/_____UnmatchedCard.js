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
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Card sx={{ opacity: discarted ? "0.2" : 1, width: "100%" }}>
        <Stack spacing={1} direction={"row"}>
          <UnmatchedType type={type} value={value} />
          {characterName !== "ANY" && (
            <Box
              sx={{
                width: "30px",
                height: "30px",
                border: `1px solid ${stringToColor(
                  characterNames[characterName]?.name
                )}`,
                backgroundColor: `${stringToColor(
                  characterNames[characterName]?.name
                )}`,
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#FFFFFF" }}>
                {stringAvatar(characterNames[characterName]?.name)}
              </Typography>
            </Box>
          )}
          <Typography>{title}</Typography>
        </Stack>
      </Card>
      <Box
        onClick={(discarted) => discardCard(!discarted)}
        sx={{
          opacity: "1",
          right: "-10px",
          top: "calc(50% - 10px)",
          position: "absolute",
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "20px",
        }}
      ></Box>
    </Box>
  );
}
export default UnmatchedCard;
