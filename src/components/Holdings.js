import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  Switch,
  FormGroup,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import Popups from "./Popups";
import BuyPopup from "./BuyPopup";
import axios from "axios";
import Dashboard from "./Dashboard";
import { SearchBar } from "./SearchBar";
import Watchlist, { dataForWatchList } from "./Watchlist";
import { StockDataHoldings } from "./StockDataHoldings";

function Holdings() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const userSessionData = JSON.parse(sessionStorage.getItem("userSession"));
  const [watchlistData, setWatchListData] = useState([]);
  let [holdingsdata, setHoldings] = useState([]);
  const [close, setClose] = useState(0);
  let [stock, setStock] = useState({});
  var [currentPriceStocks, setCurrentPrice] = useState({});
  var [openprice,setopenprice] = useState({})

  const abc = (a) => {
    return;
  };

  const totalInvested = Object.values(holdingsdata).reduce(
    (p, stock) => p + stock.invested_value,
    0
  );
  const totalQuantity = Object.values(holdingsdata).reduce(
    (p, stock) => p + stock.quantity,
    0
  );
  const initialValue = 0;
  const sumWithInitial = Object.values(currentPriceStocks).reduce(
    (accumulator, currentValue) => {
      if (currentValue === undefined) currentValue = 0;
      return accumulator + Number(currentValue);
    },
    initialValue
  );

  const currentval1 =(sumWithInitial);
  const currentval = (currentval1 * totalQuantity).toFixed(2);
  let pl = (currentval - totalInvested).toFixed(2)

  if (pl < 0) {
    pl = "-" + pl;
  } else {
    pl = "+" + pl;
  }
  // const totalMarketprice = Object.values(holdingsdata).reduce((p,stock) => p+stock.invested_value, 0);
  const setData = (data) =>{
    setWatchListData(data)
  }


 const a = (stock,index) =>{
  if(!holdingsdata&&!currentPriceStocks)
  return <></>
  return (
    <StockDataHoldings abc={abc} user={userSessionData} stock={stock} index={index} currentPriceStocks={currentPriceStocks} holdingsdata={holdingsdata} openprice={openprice}/>
  )
 }

 
const sendAxiosRequest = async (name) => {
  try{
    console.log("i am called",name)
    await axios.get(`http://localhost:8080/stock-data?symbol=${name}&from=2023-11-21&to=2023-11-22&period=d`).
     then((response)=>{
         if(response.data){
           stock={...response.data[0]}
           currentPriceStocks[`${name}`]=stock.close
           openprice[`${name}`]=stock.open
           setCurrentPrice((Prev)=>({...Prev,...currentPriceStocks}))
           setopenprice((Prev)=>({...Prev,...openprice}))
           console.log(stock,"hi")
           console.log(currentPriceStocks,"hiw")
           console.log(openprice,"hiw")
         }
     }).catch(e=>{
       console.error("Axios Error",e.message)
     })
  }catch(e){
    console.log(e.message)
  }

}


  useEffect( ()=>{
    const res =  axios.get(`http://localhost:8080/holdings/${userSessionData.id}/formatted`).
    then((response)=>{
        if(response){
          setHoldings({...response.data})
        }
      })
      .catch((e) => {
        console.error("Axios Error", e.message);
      });
  }, [holdingsdata]);

  useEffect(() => {
    for (let data of Object.keys(holdingsdata)) {
      console.log("2");
      sendAxiosRequest(data);
    }
  },[])

  return (
    <Container maxWidth={false} sx={{ display: "flex", height: "100%" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          padding: "15px",
          alignItems: "flex-start",
          color: "secondary.main",
        }}
      >
        <SearchBar  user={userSessionData} watchlistData={watchlistData} setWatchList={setData} dataForWatchList={dataForWatchList}/>
        <Watchlist user={userSessionData} dataForWatchList={dataForWatchList} watchlistData={watchlistData} setWatchList={setData} /> 
      </Container>
      <Container
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ my: 4, textAlign: "center", color: "secondary.main" }}
        >
          Holdings
        </Typography>

        <Box sx={{ marginBottom: 7, width: "100%" }}>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "black",
              p: "2em",
              display: "flex",
              flexDirection: "column",
              gap: "0.3em",
              minWidth: 390,
              border: 0.3,
              width: "80%",
              margin: "0 auto",
              color: "white",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h5">Invested</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Current</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">{totalInvested.toFixed(2)}</Typography>
              {<Typography variant="h4">{currentval}</Typography>}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">P&L</Typography>
              <Typography sx={{ color: "#03C04A" }} variant="h5">
                {pl}
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/*------- stocklist -----*/}
        <Box
          sx={{
            padding: "20px",
            width: "80%",
            height: "100%",
            marginBottom: "3em",
          }}
        >
          <Grid container spacing={2}>
            {Object.values(holdingsdata).map((stock, index) => a(stock, index))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}

export default Holdings;
