import { Container,Paper, Typography,Box, Grid,TextField, RadioGroup, FormControl,FormLabel,FormControlLabel,Radio, Button, Switch,FormGroup } from '@mui/material'
import React from 'react';
import { useEffect, useState, useRef } from "react";
import Popup from 'reactjs-popup';
import Popups from './Popups';
import BuyPopup from './BuyPopup';
import axios from 'axios';
import Dashboard from './Dashboard';
import {SearchBar} from './SearchBar';
import Watchlist, { dataForWatchList } from './Watchlist';

function StockDataHoldings({user:userSessionData,stock,index, currentPriceStocks, holdingsdata}){
    console.log("hte",currentPriceStocks)
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    
    return (
        <>
      <Grid item xs={12} key={index}>
    
    <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390, marginBottom:2, padding:"20px"}} >
    <Box sx={{display:"flex", justifyContent: "space-between", }}>
      <Box>
         <Typography variant='h6'>Qty.<strong>{stock.quantity}</strong>&nbsp;&nbsp;Avg.<strong>{stock.avg_price}</strong></Typography>
      </Box>
      <Box>
         <Typography variant='h6' sx={{color:"#03C04A"}}> 
         {stock.changePercentage}
         </Typography>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between",}}>
         <Typography variant='h3' sx={{color:"secondary.main",}}>{Object.keys(holdingsdata)[index]}</Typography>
         {/* {getPrice(Object.keys(holdingsdata)[index])} */}
         <Typography variant='h6' sx={{color:"#03C04A"}}>
         {currentPriceStocks[Object.keys(holdingsdata)[index]]}
         </Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h6'>Invested  <strong>{stock.invested_value}</strong></Typography>
         <Typography variant='h6'>
          LTP <strong>{currentPriceStocks[Object.keys(holdingsdata)[index]]}&nbsp;</strong> 
        
          <span style={{color:"red"}}>({stock.ltpChange})</span>
          
         </Typography>
    </Box>
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"10px", padding: "0.7em"}}>
        <Box>
          <Popup trigger={<Button sx={{bgcolor:"secondary.main", color:"white"}}  onClick={()=>setOpen(o=>!o)} ><Typography variant='h5' 
          >Add</Typography></Button>} position="right center" modal nested>
          <div>{<BuyPopup  open={open} onClose={closeModal} stockname={Object.keys(holdingsdata)[index]} userid={userSessionData.id} />}</div>
          </Popup>
        </Box>
        <Box>
          <Popup trigger={ <Button sx={{bgcolor:"secondary.main",}} ><Typography variant='h5' sx={{color:"white", fontweight:"bold"}}>Sell</Typography></Button>} position="right center" modal>
          <div><Popups stockname={Object.keys(holdingsdata)[index]} userid={userSessionData.id}/></div>
          </Popup>
        </Box>
      </Box>
    
  </Paper>

  </Grid>
    </>
    )
}

export {
    StockDataHoldings,
}
