import { Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

function TopGainersPopup() {
  return (
    <Paper>
      <Typography sx={{ backgroundColor: "beige" }}>
        List of stocks shortlisted from the entire stock universe that an
        investor wants to keep a close eye on.
      </Typography>
    </Paper>
  );
}

export default TopGainersPopup;
