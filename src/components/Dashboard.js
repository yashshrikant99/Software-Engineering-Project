
import React, { useState } from "react";
import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material';
import { lightGreen } from "@mui/material/colors";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";


// import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {

  return (
    <Container  maxWidth= {false} sx = {{display: "flex", flexDirection: "row", border: 1, height:"100%"}}>
      <Box sx = {{display:"flex", flexDirection:"column",height:"100%", width:"35%", p:"0"}}>
          <Box className ="stockname-box" sx ={{height:"5%",width:"100%"}} >
            <Box className ="typographyBox" sx={{display:"flex", flexDirection:"row", gap:"2em", pt:"5px", pl:"2px"}}>
                <Typography sx ={{}}> 
                      <strong sx={{ml:1}}>NIFTY 50</strong>
                      <span style={{color:"red", marginLeft:1}}>(19751.05)</span>
                        -42.95(-0.22%)</Typography>
                <Typography sx ={{ p:"2px"}}>
                      <strong>SENSEX</strong> 
                      <span style={{color:"red"}}>(66282.74)</span>
                        -42.95(-0.22%)</Typography>
            </Box>
          {/* <Typography>SENSEX 50 19751.05 -42.95(-0.22%)</Typography> */}
          </Box>
          <Box sx ={{height:"5%",width:"100%"}} >
            <SearchBar/>
          </Box>
          <Box sx ={{border:1, height:"90%",width:"100%"}} >
            <Paper elevation={2} className="watchlist-entry" sx={{ display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"2em", border:1,p:2}}>
              <Box className="stock-name-box" sx={{}}>
                <Typography className ="stock-name" sx={{ml:1}}> NIFTY 50</Typography>
              </Box>
              <Box className ="numbers" sx={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Typography className ="num1"> -42.95 </Typography>
                <Typography className ="num2"> -0.22% </Typography>
                <Typography className ="num3"> <FontAwesomeIcon  icon={faCaretDown}/> &nbsp;19751.05 </Typography>
              </Box>
            </Paper>

            <Paper elevation={2} className="watchlist-entry" sx={{ display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"2em", border:1,p:2}}>
              <Box className="stock-name-box" sx={{}}>
                <Typography className ="stock-name" sx={{ml:1}}> NIFTY BANK</Typography>
              </Box>
              <Box className ="numbers" sx={{display:"flex", flexDirection:"row", gap:"2em"}}>
                <Typography className ="num1"> -311.25 </Typography>
                <Typography className ="num2"> -0.70% </Typography>
                <Typography className ="num3"> <FontAwesomeIcon  icon={faCaretUp}/> &nbsp;44287.95</Typography>
              </Box>
            </Paper>
            <Paper elevation={2} className="watchlist-entry" sx={{ display:"flex", flexDirection:"row",justifyContent:"space-between", gap:"2em", border:1,p:2}}>
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


    </Box>
      <Box sx = {{display:"flex", flexDirection:"column", border:1, height:"100%", width: "65%", bgcolor:"lightyellow"}}>
         
    </Box>

    </Container>
 
  
  );
}

export default Dashboard
