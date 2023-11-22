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
import Watchlist from './Watchlist';



function Funds() {
  return (
    <Container  maxWidth= {false} sx = {{display: "flex", flexDirection: "row", height:"100%"}}>
    <Box sx = {{display:"flex", flexDirection:"column",height:"100%", width:"35%", p:"0", marginRight:2}}>
  
    <Box className="search-bar" sx ={{height:"5%", mt:4, mb:1}} >
          <SearchBar/>
      </Box>
        <Box sx ={{ height:"90%",width:"100%"}} >
          <Watchlist/>
          </Box>
  </Box>
    <Box sx = {{display:"flex", flexDirection:"column", height:"100%", width: "65%"}}>
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
