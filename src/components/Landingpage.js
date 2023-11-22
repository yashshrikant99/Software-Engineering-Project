import { Directions } from '@mui/icons-material';
import { Container, Typography,Box, Grid, Button, Paper, Card, CardMedia } from '@mui/material'
import * as React from 'react';

function Landingpage()
{
    return(
    <Grid container sx={{ p: "5em", m:"auto"}} >

    <Grid item xs={6} sx={{bgcolor: "black", color: "white", borderRadius: "20px", padding:"1em"}}>
  
       <Box sx={{display:"flex", flexDirection:"column", gap:"0.5em",width:"100%" }}>

        <Box sx={{display:"flex", width:"100%"}}>
            <Typography variant='h3' sx={{padding: "0.5em", width:"100%"}}>What is TradeTrackr?</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"0.5em", width:"100%"}}>
        <Typography variant='h5' sx={{padding: "0.5em"}}>→ TradeTrackr is an investing simulation game.</Typography>
        <Typography variant='h5' sx={{padding: "0.5em"}}>→ You know have cash in your portfolio account and some intraday trading limit.</Typography>
        <Typography variant='h5' sx={{padding: "0.5em"}}>→ You can start trading right away with this virtual money!</Typography>
        <Button sx={{bgcolor:"white", width:"300px", borderRadius:"30px", border:"1px solid black", alignSelf:"center", fontSize:"1.3rem", padding: "0.7em", margin:"10px", cursor:"pointer"}}>Continue</Button>
        </Box>
            
       </Box>
   </Grid>


   <Grid item xs={6}>
    <img src="src\images\stock-filter-charts.png"></img>
   {/* <Card>
      <CardMedia
        component="img"
        alt="Description of the image"
        image="ssrc\images\stock-filter-charts.png"
      />
    </Card> */}
   </Grid>
    

   </Grid>
    )
}

export default Landingpage