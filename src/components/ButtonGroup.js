import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/material';
import axios from 'axios';
const moment = require('moment')

export default function BasicButtonGroup({user, watchListData, setWatchList, stockdata, dataForWatchList}) {

    function removeObjectWithId(arr, id) {
        const objWithIdIndex = arr.findIndex((obj) => obj["shortname"] === id);
        arr.splice(objWithIdIndex, 1);
        return arr;
      }
    const addStockData = ()=>{
      addWatchlistDb(stockdata,user);
    }
    const remStockData = () => {
        setWatchList([...removeObjectWithId(watchListData,stockdata[0])]);

    }

     async function addWatchlistDb(stockdata, user ){
      try{
          console.log("StockData",stockdata)
          const insertData = {
            long_name: stockdata[1]
          }
          let to_date = moment(Date.now()).format("YYYY-MM-DD")
          let from_date = moment(Date.now()).subtract(1,'days').format('YYYY-MM-DD')
          const res = await axios.get(`http://localhost:8080/stock-data?symbol=${stockdata[2]}&from=${from_date}&to=${to_date}&period=d`).
                          then(response=>{
                            if(response.data){
                              insertData.close = response.data[0].close
                            }
                          }).catch(e=>{
                            console.error("Axios Error",e.message)
                          })
          await axios.post(`http://localhost:8080/add_watchlist/${user.id}`,insertData).
                        then(response=>{
                          if(response){
                           dataForWatchList([...watchListData])
                            }
                        }).catch(e=>{
                          console.error("Axios error 1", e.message)
                        })
      }catch(e){

      }
    }

  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent:"space-evenly",
      alignItems: 'center',
    }}
  >

      <Button onClick={addStockData} color='error'>Add</Button>
      <Button onClick={addStockData} color='success'>Buy</Button>
        

    </Box>
  );
}