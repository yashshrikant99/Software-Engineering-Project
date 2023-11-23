import { Container,Paper, Typography,Box, Grid,TextField, RadioGroup, FormControl,FormLabel,FormControlLabel,Radio, Button, Switch,FormGroup } from '@mui/material'
import React from 'react'
import Popup from 'reactjs-popup';
import Popups from './Popups';
import BuyPopup from './BuyPopup';
import { useState } from 'react';
import Dashboard from './Dashboard';
import SearchBar from './SearchBar';
import Watchlist from './Watchlist';

function Holdings() {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  const dummyStocks = [
    {
      id: 1,
      qty: 1000,
      avgPrice: 320.0,
      changePercentage: 5.09,
      stockName: 'Stock 1',
      pnl: 17293.92,
      invested: 392023.02,
      ltp: 342.22,
      ltpChange: -1.34,
    },
    {
      id: 2,
      qty: 500,
      avgPrice: 150.0,
      changePercentage: 2.5,
      stockName: 'Stock 2',
      pnl: 5000.0,
      invested: 75000.0,
      ltp: 154.5,
      ltpChange: 1.2,
    },
  
  ];

  return (
 <Container maxWidth={false} sx={{ display:"flex"}}>
 <Container sx={{  display:"flex", flexDirection:"column", width:"40%", padding:"15px", alignItems:"flex-start"}}>
  <SearchBar sx={{ width:"100%", marginTop:"32px" }}/>
  <Watchlist  /> 
  </Container>
<Container sx={{ height: "100vh",width:"60%", display:"flex", flexDirection:"column", alignItems:"center" }}>
  
   <Typography variant="h3" 
     sx={{my:4, textAlign:'center', color:"secondary.main" }}
     >Holdings
     </Typography>

<Box sx={{marginBottom:7, width:"100%",}}>
    <Paper elevation={2} sx={{bgcolor:"black", p:"2em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390, border: 0.3, width: "80%" , margin: "0 auto", color:"white"}}>
    <Box sx={{display:"flex", justifyContent: "space-between", }}>
      <Box>
         <Typography variant='h5'>Invested</Typography>
      </Box>
      <Box>
         <Typography variant='h5'>Current</Typography>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h4'>14,28,927.33</Typography>
         <Typography variant='h4'>14,82,927.33</Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h5'>P&L</Typography>
         <Typography sx={{color:"#03C04A"}} variant='h5'>+18,272.20</Typography>
    </Box>
    </Paper>
</Box>

{/*------- stocklist -----*/}
<Box sx={{backgroundColor:"black" , padding: "20px", width:"90%", }}>
   
  <Grid container spacing={2}>
   { dummyStocks.map((stock)=>(
  <Grid item xs={12} key={stock.id}>
    
    <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390, marginBottom:2, padding:"20px"}} >
    <Box sx={{display:"flex", justifyContent: "space-between", }}>
      <Box>
         <Typography variant='h6'>Qty.<strong>{stock.qty}</strong>&nbsp;&nbsp;Avg.<strong>{stock.avgPrice}</strong></Typography>
      </Box>
      <Box>
         <Typography variant='h6' sx={{color:"#03C04A"}}> 
         {stock.changePercentage}
         </Typography>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between",}}>
         <Typography variant='h3' sx={{color:"secondary.main",}}>{stock.stockName}</Typography>
         <Typography variant='h6' sx={{color:"#03C04A"}}>
          {stock.pnl}
         </Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h6'>Invested  <strong>{stock.invested}</strong></Typography>
         <Typography variant='h6'>
          LTP <strong>{stock.ltp}&nbsp;</strong> 
        
          <span style={{color:"red"}}>({stock.ltpChange})</span>
          
         </Typography>
    </Box>
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"10px", padding: "0.7em"}}>
        <Box>
          <Popup trigger={<Button sx={{bgcolor:"secondary.main", color:"white"}}  onClick={()=>setOpen(o=>!o)} ><Typography variant='h5' 
          >Add</Typography></Button>} position="right center" modal nested>
          <div>{<BuyPopup  open={open} onClose={closeModal}/>}</div>
          </Popup>
        </Box>
        <Box>
          <Popup trigger={ <Button sx={{bgcolor:"secondary.main",}} ><Typography variant='h5' sx={{color:"white", fontweight:"bold"}}>Sell</Typography></Button>} position="right center" modal>
          <div><Popups/></div>
          </Popup>
        </Box>
      </Box>
    
  </Paper>

  </Grid>))}
  
  </Grid>
  
  </Box>

  </Container>
   </Container>
   
  
  )
}

export default Holdings
