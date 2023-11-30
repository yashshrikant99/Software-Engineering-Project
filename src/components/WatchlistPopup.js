import { Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

function WatchlistPopup() {
  return (
    <Paper>
      <Typography sx={{ backgroundColor: "beige", mb: 1 }}>
        List of stocks shortlisted from the entire stock universe that the user
        wants to keep a close eye on.
      </Typography>
    </Paper>
  );
}

export default WatchlistPopup;
