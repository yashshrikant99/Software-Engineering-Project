
import React, { useState } from "react";
import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material';
import { lightGreen } from "@mui/material/colors";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import DashboardTable from "./DashboardTable";
import Watchlist from "./Watchlist";


// import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {

  return (
    <Container className ="main-container" maxWidth= {false} sx = {{display: "flex", flexDirection: "row",height:"100%"}}>
      <Box sx = {{display:"flex", flexDirection:"column",height:"100%", width:"35%", p:"0", mr:3}}>

      {/* <Box className ="typographyBox" sx={{display:"flex", flexDirection:"row", gap:"2em", pt:"5px", pl:"2px", ml:2}}>
                <Typography sx ={{}}>
                      <strong sx={{ml:1}}>NIFTY 50</strong>
                      <span style={{color:"red", marginLeft:1}}>(19751.05)</span>
                        -42.95(-0.22%)</Typography>
                <Typography sx ={{ p:"2px"}}>
                      <strong>SENSEX</strong>
                      <span style={{color:"red"}}>(66282.74)</span>
                        -42.95(-0.22%)</Typography>
        </Box> */}

      <Box className="search-bar" sx ={{height:"5%", mt:4, mb:1}} >
          <SearchBar/>
      </Box>
      <Box>
      <Watchlist/>
      </Box>
    </Box>
      <Box sx = {{display:"flex", flexDirection:"column",height:"100%", width: "65%", mt:4}}>
         <DashboardTable/>
    </Box>

    </Container>
 
  
  );
}

export default Dashboard
