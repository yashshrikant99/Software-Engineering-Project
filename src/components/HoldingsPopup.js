import { Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

function HoldingsPopup() {
  return (
    <Paper>
      <Typography sx={{ backgroundColor: "beige", mb: 1 }}>
        List of all the stocks bought by the investor.
      </Typography>
    </Paper>
  );
}

export default HoldingsPopup;
