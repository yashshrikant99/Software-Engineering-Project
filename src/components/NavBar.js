import React from "react";
import { Container, Paper, Typography, Box, Grid, Item } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../cssfiles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Container
      maxWidth={false}
      // maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        border: 1,
        height: "100px",
        width: "100%",
        pt: 4.55,
        gap: "30em",
      }}
      className="bg-dark"
    >
      <Typography sx={{ color: "white", fontSize: "20px", mb: 3 }}>
        TradeMinds Playground
      </Typography>

      <Box
        className="header"
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
      >
        <Link to="/dashboard" className="text-light fs-4 px-3 dashboard">
          Dashboard
        </Link>
        <Link to="/holdings" className="text-light fs-4 px-3 holdings">
          Holdings
        </Link>
        <Link to="/funds" className="text-light fs-4 px-3 funds">
          Funds
        </Link>
      </Box>
      <Box className="userprofile">
        <Link to="/profile" className="text-light fs-4 px-3 profile">
          Profile
        </Link>
      </Box>
    </Container>
  );
}

export default NavBar;
