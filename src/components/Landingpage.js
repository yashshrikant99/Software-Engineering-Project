import { Directions } from '@mui/icons-material';
import { Container, Typography,Box, Grid, Button, Paper, Card, CardMedia } from '@mui/material'
import * as React from 'react';

function Landingpage()
{
    return(
    <Grid container sx={{ p: "5em", m:"auto", height:"100vh"}} >

    <Grid item xs={6} sx={{bgcolor: "black", color: "white", borderRadius: "20px", padding:"1em", height:"50em"}}>
  
       <Box sx={{display:"flex", flexDirection:"column", gap:"0.5em",width:"100%" }}>

        <Box sx={{display:"flex", width:"100%"}}>
            <Typography variant='h3' sx={{padding: "0.5em", width:"100%"}}>What is TradeTrackr?</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"0.5em", width:"100%"}}>
        <Typography variant='h5' sx={{padding: "0.5em"}}>→ TradeTrackr is an investing simulation game.</Typography>
        <Typography variant='h5' sx={{padding: "0.5em"}}>→ You know have cash in your portfolio account and some intraday trading limit.</Typography>
        <Typography variant='h5' sx={{padding: "0.5em"}}>→ You can start trading right away with this virtual money!</Typography>
        <Button sx={{bgcolor:"white", width:"200px", borderRadius:"30px", border:"1px solid black", alignSelf:"center", fontSize:"1.3rem", padding: "0.7em", margin:"10px", cursor:"pointer"}}>SIGN IN</Button>
        <Button sx={{bgcolor:"white", width:"200px", borderRadius:"30px", border:"1px solid black", alignSelf:"center", fontSize:"1.3rem", padding: "0.7em", margin:"10px", cursor:"pointer"}}>REGISTER</Button>
        </Box>
            
       </Box>
   </Grid>


   <Grid item xs={6}>
   <img
          src={require("../images/stock-filter-charts.png")}
          style={{ textAlign: "center", width: "100%" }}
        />
   </Grid>
    

   </Grid>
    )
}

export default Landingpage