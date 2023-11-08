import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material';


function Footer1() {
  return (

    <Container maxWidth= {false} sx={{display:"flex", flexDirection: "column",border:1, height:"100px", alignItems:"center", backgroundColor:"darkcyan", md:2}} >

        <Typography  sx={{fontSize:20, color:"white"}}>
          TradeTrackr
        </Typography>
        <Typography sx={{fontSize:20, color:"white", md:2}}>
                © 2023 Copyright Trade Trackr
        </Typography>
            <Box className="social-media-icons" sx={{ display:"flex", flexDirection:"row", gap:2}}>
            <FontAwesomeIcon icon={faFacebook} fontSize={30}/>
            <FontAwesomeIcon icon={faXTwitter} fontSize={30}/>
            <FontAwesomeIcon icon={faInstagram} fontSize={30}/>
            <FontAwesomeIcon icon={faLinkedin} fontSize={30}/>
            </Box>

    </Container>
  );
}

export default Footer1
