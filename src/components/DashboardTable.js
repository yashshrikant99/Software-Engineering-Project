import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import WatchlistPopup from "./WatchlistPopup";
import Popup from "reactjs-popup";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import TopGainersPopup from "./TopGainersPopup";

// import { makeStyles } from '@material-ui/core';

function createData(
  symbol,
  shortName,
  regularMarketPrice,
  regularMarketChangePercent,
  regularMarketChange,
  marketCap,
  regularMarketVolume
) {
  return {
    symbol,
    shortName,
    regularMarketPrice,
    regularMarketChangePercent,
    regularMarketChange,
    marketCap,
    regularMarketVolume,
  };
}

let symbol = "";
let shortName = "";
let regularMarketPrice = "";
let regularMarketChangePercent = "";
let regularMarketChange = "";
let marketCap = "";
let regularMarketVolume = "";

let rows = [];

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: lightgray;
  }
  &:nth-of-type(even) {
    background-color: #999999;
  }
  & > td {
    color: black;
  }
`;

function DashboardTable() {
  const [topGainers, setTopGainers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/top-gainers`)
      .then((response) => {
        setTopGainers(response.data);
      })
      .catch((error) => {
        console.error("axios error", error);
      });
  }, []);
  const rows = topGainers.map((element) => {
    symbol = element.symbol;
    shortName = element.shortName;
    regularMarketPrice = element.regularMarketPrice["fmt"];
    regularMarketChangePercent = element.regularMarketChangePercent["fmt"];
    regularMarketChange = element.regularMarketChange["fmt"];
    marketCap = element.marketCap["fmt"];
    regularMarketVolume = element.regularMarketVolume["fmt"];

    return createData(
      symbol,
      shortName,
      regularMarketPrice,
      regularMarketChangePercent,
      regularMarketChange,
      marketCap,
      regularMarketVolume
    );
  });

  const displayRows = rows.slice(0, 5);

  return (
    <>
      <Box className="popup-watchlist" sx={{ display: "flex" }}>
        <Typography variant="h2" level="h2" component="h2">
          Top Gainers
        </Typography>

        <Button onClick={handleClick}>
          <InfoIcon fontSize="medium"> </InfoIcon>
        </Button>

        {open ? (
          <Box sx={{ mt: 3 }}>
            <TopGainersPopup></TopGainersPopup>
          </Box>
        ) : null}
      </Box>
      <TableContainer component={Paper} sx={{ bgcolor: "lightgrey" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "darkgray" }}>
            <TableRow>
              <TableCell>Company Symbol</TableCell>
              <TableCell align="right">Short Name</TableCell>
              <TableCell align="right">Regular Market Price</TableCell>
              <TableCell align="right">Regular Market Change%</TableCell>
              <TableCell align="right">Regular Market Change</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Regular Market Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayRows.map((info) => (
              <TableRowStyled
                key={info.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ color: "black", ml: 1 }}>
                  {info.symbol}
                </TableCell>
                <TableCell align="right">{info.shortName}</TableCell>
                <TableCell align="right">{info.regularMarketPrice}</TableCell>
                <TableCell align="right">
                  {info.regularMarketChangePercent}
                </TableCell>
                <TableCell align="right">{info.regularMarketChange}</TableCell>
                <TableCell align="right">{info.marketCap}</TableCell>
                <TableCell align="right">{info.regularMarketVolume}</TableCell>
              </TableRowStyled>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DashboardTable;
