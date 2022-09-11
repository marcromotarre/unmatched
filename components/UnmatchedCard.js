import { Card, Box, Typography, Stack, Grid } from "@mui/material";
import { characterNames } from "../data/characters";
import { TRANSLATIONS } from "../data/translations";
import { stringAvatar, stringToColor } from "../utils/utils";
import UnmatchedType from "./UnmatchedType";

function UnmatchedCard({
  characterName,
  title,
  type,
  value,
  discarted,
  basicText,
  immediateText,
  duringText,
  afterText,
  discardCard = () => {},
}) {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Card
        sx={{ opacity: discarted ? "0.21" : 1, width: "100%" }}
        onClick={(discarted) => discardCard(!discarted)}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "50px auto 2px",
            columnGap: "10px",
          }}
        >
          <UnmatchedType type={type} value={value} />
          <Stack
            spacing={0.3}
            direction={"column"}
            sx={{ paddingBottom: "5px" }}
          >
            <Stack
              spacing={1}
              direction={"row"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography>
                {TRANSLATIONS[title]
                  ? TRANSLATIONS[title].es.toUpperCase()
                  : title}
              </Typography>
            </Stack>

            {basicText && (
              <Typography sx={{ fontSize: "12px" }}>{basicText}</Typography>
            )}
            {immediateText && (
              <Typography sx={{ fontSize: "12px" }} component="div">
                <Box fontWeight="bold" display="inline">
                  ANTES DEL COMBATE:{" "}
                </Box>
                {immediateText}
              </Typography>
            )}
            {duringText && (
              <Typography sx={{ fontSize: "12px" }} component="div">
                <Box fontWeight="bold" display="inline">
                  DURANTE EL COMBATE:{" "}
                </Box>
                {duringText}
              </Typography>
            )}
            {afterText && (
              <Typography sx={{ fontSize: "12px" }} component="div">
                <Box fontWeight="bold" display="inline">
                  DESPUES DEL COMBATE:{" "}
                </Box>
                {afterText}
              </Typography>
            )}
          </Stack>
        </Box>
      </Card>
      {characterName !== "ANY" && (
        <Box
          onClick={(discarted) => discardCard(!discarted)}
          sx={{
            opacity: "1",
            right: "-15px",
            top: "calc(50% - 15px)",
            position: "absolute",
            width: "30px",
            height: "30px",
            border: `1px solid ${stringToColor(
              characterNames[characterName]?.name
            )}`,
            backgroundColor: `${stringToColor(
              characterNames[characterName]?.name
            )}`,
            borderRadius: "20px",
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
    </Box>
  );
}

export default UnmatchedCard;
