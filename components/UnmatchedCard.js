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
  boost,
  discardCard = () => {},
}) {
  return (
    <Box sx={{ position: "relative", width: "100%", opacity: discarted ? "0.21" : 1, }}>
      <Card
        sx={{  width: "100%" }}
        onClick={(discarted) => discardCard(!discarted)}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "50px auto 5px",
            columnGap: "10px",
          }}
        >
          <UnmatchedType type={type} value={value} characterName={characterName} />
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
      {boost && boost !== 0 && (
        <Box
          onClick={(discarted) => discardCard(!discarted)}
          sx={{
            opacity: "1",
            right: "-12px",
            top: "calc(50% - 12px)",
            position: "absolute",
            width: "24px",
            height: "24px",
            border: `2px solid black`,
            backgroundColor: 'white',
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "#000" }}>
            {boost}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default UnmatchedCard;
