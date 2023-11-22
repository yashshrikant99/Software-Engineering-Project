
import React, { useState } from "react";
import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material';
import { lightGreen } from "@mui/material/colors";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import DashboardTable from "./DashboardTable";


// import "react-datepicker/dist/react-datepicker.css";

function Watchlist() {

  return (
    // <Container  maxWidth= {false} sx = {{display: "flex", flexDirection: "row",height:"100%"}}>
      // <Box sx = {{display:"flex", flexDirection:"column",height:"100%", width:"35%", p:"0", mr:3}}>
     
        <Box sx ={{height:"90%",width:"100%", ml:1, mt:2}} >

            <Paper elevation={2} className="watchlist-entry" sx={{ display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"2em",p:2,bgcolor:"lightgray"}}>
              <Box className="stock-name-box" sx={{}}>
                <Typography className ="stock-name" sx={{ml:1}}> NIFTY 50</Typography>
              </Box>
              <Box className ="numbers" sx={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Typography className ="num1"> -42.95 </Typography>
                <Typography className ="num2"> -0.22% </Typography>
                <Typography className ="num3"> <FontAwesomeIcon  icon={faCaretDown}/> &nbsp;19751.05 </Typography>
              </Box>
            </Paper>

            <Paper elevation={2} className="watchlist-entry" sx={{ display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"2em",p:2}}>
               <Box className="stock-name-box" sx={{}}>
                <Typography className ="stock-name" sx={{ml:1}}> NIFTY BANK</Typography>
               </Box>
               <Box className ="numbers" sx={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Typography className ="num1"> -311.25 </Typography>
                <Typography className ="num2"> -0.70% </Typography>
                <Typography className ="num3"> <FontAwesomeIcon  icon={faCaretUp}/> &nbsp;44287.95</Typography>
               </Box>
            </Paper>
            <Paper elevation={2} className="watchlist-entry" sx={{ display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"2em",p:2, bgcolor:"lightgray"}}>
              <Box className="stock-name-box" sx={{}}>
                <Typography className ="stock-name" sx={{ml:1}}> RELIANCE</Typography>
              </Box>
              <Box className ="numbers" sx={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Typography className ="num1"> 1.85 </Typography>
                <Typography className ="num2">0.08% </Typography>
                <Typography className ="num3"> <FontAwesomeIcon  icon={faCaretUp}/> &nbsp;2350.70</Typography>
              </Box>
            </Paper>
        </Box>


    // </Box>

    // </Container>
 
  
  );
}

export default Watchlist
