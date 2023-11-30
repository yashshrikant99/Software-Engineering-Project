import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Paper, Typography, Box, Grid, Item } from "@mui/material";

function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        border: 1,
        height: "150px",
        alignItems: "center",
        md: 2,
        gap: 1.5,
      }}
      className="bg-dark"
    >
      <Typography sx={{ fontSize: 20, color: "white", mt: 1 }}>
        TradeMinds Playground
      </Typography>
      <Typography sx={{ fontSize: 20, color: "white", md: 2 }}>
        © 2023 Copyright TradeMinds Playground
      </Typography>
      <Box
        className="social-media-icons"
        sx={{ display: "flex", flexDirection: "row", gap: 5.5, m: 2 }}
      >
        <FontAwesomeIcon
          icon={faFacebook}
          fontSize={30}
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          fontSize={30}
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          fontSize={30}
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          fontSize={30}
          style={{ color: "#ffffff" }}
        />
      </Box>
    </Container>
  );
}

export default Footer;
