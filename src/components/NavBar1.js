import React from 'react'
import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom"; 
import '../cssfiles/NavBar.css';

import 'bootstrap/dist/css/bootstrap.min.css'


function NavBar1() {
  return (
     <Container  maxWidth= {false} sx={{display:"flex", flexDirection: "row",border:1, height:"100px", pt:4.55, gap:60}} className="bg-dark">
            <Typography sx={{color:"white",fontSize: "20px", mr:5}}>TradeTrackr</Typography>

            <Box className="header" sx={{display:"flex", flexDirection:"row", gap:2}}>
            <Link to ='/dashboard'className ="text-light fs-4 px-3 dashboard" >Dashboard</Link>
            <Link to='/holdings' className ="text-light fs-4 px-3 holdings">Holdings</Link>
            <Link to = '/funds'className ="text-light fs-4 px-3 funds">Funds</Link>
            <Link to ='/watchlist' className ="text-light fs-4 px-3 watchlist">Watchlist</Link>

            </Box>
            <Box className="userprofile">
              <Link className=" text-light fs-4 px-3 profile"> Profile</Link>
            </Box>



    </Container>
  );
}

export default NavBar1
