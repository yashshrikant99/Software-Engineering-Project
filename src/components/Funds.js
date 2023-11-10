import React from 'react';
import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material';
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { grey, red } from '@mui/material/colors';
import { CenterFocusStrong } from '@mui/icons-material';
import Button from '@mui/material/Button';



function Funds() {
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
    <Box sx = {{display:"flex", flexDirection:"column", border:2, height:"100%", width: "65%", bgcolor:"lightyellow"}}>
      <Box className="funds-box" sx={{display:"flex", flexDirection:"column", gap:"1em", justifyContent:'center'}}>
      <Box className="equity-box" sx={{display:"flex", flexDirection:"row", gap:"1em", justifyContent:'center'}}>
      <Typography variant="h3" sx={{mt:2, color:"secondary.main" }} >Equity</Typography>
      {/* <Typography className="equity"sx={{ml:5, p:5, mx: 'auto', justifyContent: 'center'}} >Equity</Typography> */}
      </Box>
      <Box className="margin-box" sx={{display:"flex", flexDirection:"row", gap:"1em"}}>
      <Paper className ="margin" sx={{m:1, pt:5, pb:5, pl: 64, pr:64}}>
      <div>Available margin</div>
      <div>Cash+Collateral</div>
      <div>$ 49,239</div>
      </Paper>
      </Box>
      <Box className="add-funds-box" sx={{display:"flex", flexDirection:"row", gap:"1em", justifyContent: "center",alignItems:'center', gap:31 }} >
      <Button variant="contained" sx={{ width:290, height:66}}><FontAwesomeIcon icon={faPlus} />Add Funds</Button>
      <Button variant="contained" sx={{width:290, height:66}}><FontAwesomeIcon icon={faRotateRight} />Withdraw</Button>
      {/* <Paper className ="add-funds" sx={{mx:3,my:1, pt:5, pb:5, pl: 25, pr:25  }}><FontAwesomeIcon icon={faPlus} />   Add Funds </Paper> */}
      {/* <Paper className ="withdraw" sx={{mx:3,my:1, pt:5, pb:5, pl: 25, pr:25  }}><FontAwesomeIcon icon={faRotateRight} />   Withdraw </Paper> */}
      </Box>
      <Box className="cash-box" sx={{display:"flex", flexDirection:"row", gap:"1em",justifyContent: "space-between"}} >
      <Paper className ="cash" sx={{mx:3, my:1, pt:5, pb:5, pl: 25, pr:25 }}> 
      <div> Available Cash</div>
      <div> -38.49</div> </Paper>
      <Paper className ="margin" sx={{mx:3, my:1, pt:5, pb:5, pl: 25, pr:25 }}> 
      <div> Used Margin</div>
      <div> 00.00</div> </Paper>
      </Box>
      <Box className="table-box" sx={{display:"flex" ,flexDirection:"column", gap:"1em", justifyContent: "space-between"}} >
      <Box className="table" sx={{display:"flex", flexDirection:"row", gap:"1em",bgcolor: "grey", justifyContent: "space-between", }}>
      <Typography className ="table-data" sx={{m:1,p:2}}> Opening Balance</Typography>
      <Typography className ="table-data" sx={{m:1,p:2 }}> 00.00</Typography>
      </Box>
      <Box className="table" sx={{display:"flex", flexDirection:"row", gap:"1em", bgcolor: "grey" ,justifyContent: "space-between", }}>
      <Typography className ="table-data" sx={{m:1,p:2}}> Collateral</Typography>
      <Typography className ="table-data" sx={{m:1,p:2}}> 3ru483</Typography>
      </Box>
      <Box className="table" sx={{display:"flex", flexDirection:"row", gap:"1em", bgcolor: "grey" ,justifyContent: "space-between", }}>
      <Typography className ="table-data" sx={{m:1,p:2}}> Total Collateral</Typography>
      <Typography className ="table-data" sx={{m:1,p:2 }}> 46.2395</Typography>
      </Box>
     
      </Box>

      </Box>
  </Box>
  </Container>
  );
}

export default Funds
