import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/material';
import axios from 'axios';

export default function WatchListBasicButtonGroup({user, watchlist, dataForWatchList, watchlistData}){
    const delWatchlistUser = () => {
        delWatchlist(user,watchlist)
    }


    async function delWatchlist(user,watchlist){
        try{

            const values = {
                long_name:watchlist["long_name"]
        }
            const res = await axios.delete(`http://localhost:8080/rem_watchlist/${user.state.id}`,{data:values})
            .then(response=>{   
                console.log(response)
                if(response){
                    dataForWatchList([...watchlistData])
                }
            }).catch(e=>{
                console.error("Axios error",e.message)
            })
        }catch(e){
            console.error("Axios Error",e.message)
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

      <Button  color='success'>Buy</Button>
      <Button  onClick={delWatchlistUser} color='warning'>Remove</Button>
        

    </Box>
    )
}