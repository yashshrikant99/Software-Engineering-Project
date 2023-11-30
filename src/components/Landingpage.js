import { Directions } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  Card,
  CardMedia,
} from "@mui/material";
import * as React from "react";

function Landingpage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        // backgroundColor: "yellow",
        display: "flex",
        m: 10,
        gap: "5em",
        // height: "100%",
      }}
    >
      <Box
        item
        // xs={6}
        sx={{
          // bgcolor: "black",
          color: "white",
          borderRadius: "20px",
          padding: "1em",
          marginRight: "10px",
          height: "100%",
          // mt: 5,
          // p: 4,
          // m: 4,
        }}
      >
        <Paper
          className="text"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            width: "100%",
            spaceBetween: "justify-content",
            // border: "solid",
            backgroundColor: "beige",
          }}
        >
          <Box sx={{ display: "flex", width: "100%" }} className="typo-box">
            <Typography
              // variant="h3"
              sx={{
                padding: "0.5em",
                width: "100%",
                color: "black",
                fontSize: 45,
              }}
            >
              Welcome to TradeMinds Playground?
            </Typography>
          </Box>
          <Box
            className="sentence-box"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
              width: "100%",
            }}
          >
            <Typography variant="h5" sx={{ padding: "0.5em" }}>
              TradeMinds Playground is a risk-free investing simulation website.
            </Typography>
            <Typography variant="h5" sx={{ padding: "0.5em" }}>
              We simplfy the complexities of stock trading assisting you to
              confidently reach your financial goals.
            </Typography>
            <Typography variant="h5" sx={{ padding: "0.5em" }}>
              You can start trading right away with your virtual currency!
            </Typography>
            <Box
              className="buttons"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box className="registration-button">
                <Link to="/registration">
                  <Button
                    sx={{
                      bgcolor: "white",
                      width: "175px",
                      borderRadius: "30px",
                      border: "1px solid black",
                      alignSelf: "center",
                      fontSize: "1.3rem",
                      padding: "0.7em",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </Box>
              <Box className="login-button">
                <Link to="/signin">
                  <Button
                    sx={{
                      bgcolor: "white",
                      width: "175px",
                      borderRadius: "30px",
                      border: "1px solid black",
                      alignSelf: "center",
                      fontSize: "1.3rem",
                      padding: "0.7em",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ mt: 9 }}>
        <img
          src={require("../images/stockimage.jpg")}
          style={{ width: "75%", height: "65%" }}
        />
      </Box>
    </Container>
  );
}

export default Landingpage;
