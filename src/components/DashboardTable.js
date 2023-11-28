import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "@emotion/styled";
import {  Typography } from '@mui/material';

// import { makeStyles } from '@material-ui/core';


function createData(name, high, low, lastprice, prevclose, change, gain) {
    return { name, high, low, lastprice, prevclose, change, gain};
  }
  const rows = [
    createData('Tata Motors', 669.00, 633.00, 667.10, 636.95, 30.15,4.73),
    createData('Induslnd Bank', 669.00, 633.00, 667.10, 636.95, 30.15,4.73),
    createData('HCL Tech', 669.00, 633.00, 667.10, 636.95, 30.15,4.73),
    createData('TATA Cons. Prod', 669.00, 633.00, 667.10, 636.95, 30.15,4.73),
    createData('Nestle', 669.00, 633.00, 667.10, 636.95, 30.15,4.73),
  ];

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
//   const StyledTableRow = makeStyles ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: "white",
//       },
//       '&:nth-of-type(even)': {
//         backgroundColor: "grey",
//       },
//     },
//   })
function DashboardTable() {
  return (
    <>
    <Typography variant="h2" level="h2" component="h2">Top Gainers</Typography>
    <TableContainer component={Paper} sx={{bgcolor:"lightgrey"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:"darkgray"}}>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Low</TableCell>
            <TableCell align="right">Last Price</TableCell>
            <TableCell align="right">Prev Close</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">% Gain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((row) => (
            <TableRowStyled
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.name}</TableCell> */}
              <TableCell align="right" sx={{color:"black"}}>{row.high}</TableCell>
              <TableCell align="right">{row.low}</TableCell>
              <TableCell align="right">{row.lastprice}</TableCell>
              <TableCell align="right">{row.prevclose}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
              <TableCell align="right">{row.gain}</TableCell>
            </TableRowStyled>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
  
}

export default DashboardTable
