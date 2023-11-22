import { Directions } from '@mui/icons-material';
import { Container, Typography,Box, Grid, Button } from '@mui/material'
import * as React from 'react';

function Landingpage()
{
    return(
   <Container sx={{bgcolor: "black", color: "white"}}>
       <Box sx={{display:"flex", flexDirection:"column", gap:"0.5em" }}>
        <Box>
            <Typography variant='h1'>What is TradeTrackr?</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", gap:"0.5em" }}>
        <Typography variant='h4'>TradeTrackr is an investing simulation game</Typography>
        <Typography variant='h4'>You know have cash in your portfolio account and some intraday trading limit</Typography>
        <Typography variant='h4'>You can start trading right away with this virtual money!</Typography>
        </Box>
            
            <Button sx={{bgcolor:""}}>Continue</Button>
       </Box>
   </Container>
    )
}

export default Landingpage