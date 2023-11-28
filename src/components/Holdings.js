import { Container,Paper, Typography,Box, Grid,TextField, RadioGroup, FormControl,FormLabel,FormControlLabel,Radio, Button, Switch,FormGroup } from '@mui/material'
import React from 'react';
import { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import Popups from './Popups';
import BuyPopup from './BuyPopup';
import axios from 'axios';
import Dashboard from './Dashboard';
import {SearchBar} from './SearchBar';
import Watchlist, { dataForWatchList } from './Watchlist';

function Holdings() {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const userSessionData  = JSON.parse(sessionStorage.getItem("userSession"));
  const [watchlistData, setWatchListData] = useState([]);
  const [holdingsdata, setHoldings] = useState([]);
  const [close,setClose]=useState(0);
  let [stock,setStock]= useState({});

  const totalInvested = Object.values(holdingsdata).reduce((p,stock) => p+stock.invested_value, 0);
  const totalQuantity = Object.values(holdingsdata).reduce((p,stock) => p+stock.quantity, 0);
  const currentval=Math.round(close*totalQuantity);
 let pl=currentval-totalInvested;
  if (pl<0)
  {
    pl="-"+pl;
  }
  else{
    pl="+"+pl;
  
  }
  // const totalMarketprice = Object.values(holdingsdata).reduce((p,stock) => p+stock.invested_value, 0);
  const setData = (data) =>{
    setWatchListData([...data])
  }

const sendAxiosRequest = (name) => {
  axios.get(`http://localhost:8080/stock-data?symbol=${name}&from=2023-11-21&to=2023-11-22&period=d`).
    then((response)=>{
        if(response){
          // console.log(response,"siddhi")
          stock={...response.data[0]}
          setClose(stock.close)
          // console.log(close,"yoyoyo");
          // alert(JSON.stringify(stock))
          console.log(stock)
        }
    }).catch(e=>{
      console.error("Axios Error",e.message)
    })
}


  useEffect(()=>{
    axios.get(`http://localhost:8080/holdings/${userSessionData.id}/formatted`).
    then((response)=>{
        if(response){
          setHoldings(response.data)
          sendAxiosRequest(holdingsdata)
        }

    }).catch(e=>{
      console.error("Axios Error",e.message)
    })
  },[])

  return (
 <Container maxWidth={false} sx={{ display:"flex"}}>
 <Container sx={{  display:"flex", flexDirection:"column", width:"40%", padding:"15px", alignItems:"flex-start", color:"secondary.main" }}>
  {/* <SearchBar  user={userSessionData} watchlistData={watchlistData} setWatchList={setData} dataForWatchList={dataForWatchList}/> */}
  {/* <Watchlist user={userSessionData} dataForWatchList={dataForWatchList} watchlistData={watchlistData} />  */}
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
         <Typography variant='h4'>{totalInvested}</Typography>
         <Typography variant='h4'>{currentval}</Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h5'>P&L</Typography>
         <Typography sx={{color:"#03C04A"}} variant='h5'>{pl}</Typography>
    </Box>
    </Paper>
</Box>

{/*------- stocklist -----*/}
<Box sx={{backgroundColor:"black" , padding: "20px", width:"90%", }}>
   
  <Grid container spacing={2}>
   { Object.values(holdingsdata).map((stock,index)=>(
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
         {sendAxiosRequest(Object.keys(holdingsdata)[index])}
         <Typography variant='h6' sx={{color:"#03C04A"}}>
         {close*stock.quantity}
         </Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h6'>Invested  <strong>{stock.invested_value}</strong></Typography>
         <Typography variant='h6'>
          LTP <strong>{close}&nbsp;</strong> 
        
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

  </Grid>))}
  
  </Grid>
  
  </Box>

  </Container>
   </Container>
   
  
  )
}

export default Holdings
