import { Container,Paper, Typography,Box, Grid,Item } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'


function Holdings() {
  return (
   <Container >
<Typography variant="h3" 
     sx={{my:4, textAlign:'center', color:"secondary.main" }}
     >Holdings
     </Typography>

<Box sx={{marginBottom:10}}>
    <Paper elevation={2} sx={{p:"2em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390, border: 0.3,}}>
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

  <Container sx={{bgcolor:"black", height: "100vh" ,}}>
   
  <Grid container spacing={2}>
  <Grid item xs={12}>
  <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390, marginBottom:2}} >
    <Box sx={{display:"flex", justifyContent: "space-between", }}>
      <Box>
         <Typography>Qty.<strong>1000</strong>&nbsp;&nbsp;Avg.<strong>320.00</strong></Typography>
      </Box>
      <Box>
         <Typography sx={{color:"#03C04A"}}> 
          +5.09%
         </Typography>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h4'>Stock 1</Typography>
         <Typography sx={{color:"#03C04A"}}>
          +17,293.92
         </Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography >Invested  <strong>3,92,023,02</strong></Typography>
         <Typography>
          LTP <strong>342.22&nbsp;</strong> 
          <span style={{color:"red"}}>(-1.34%)</span>
          
         </Typography>
    </Box>
  </Paper>

  <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390}} >
    <Box sx={{display:"flex", justifyContent: "space-between", }}>
      <Box>
         <Typography>Qty.<strong>1000</strong>&nbsp;&nbsp;Avg.<strong>320.00</strong></Typography>
      </Box>
      <Box>
         <Typography sx={{color:"#03C04A"}}>
          +5.09%
         </Typography>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography variant='h4'>Stock 2</Typography>
         <Typography sx={{color:"#03C04A"}}>
          +17,293.92
         </Typography>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
         <Typography >Invested  <strong>3,92,023,02</strong></Typography>
         <Typography>
          LTP <strong>342.22&nbsp;</strong> 
          <span style={{color:"red"}}>(-1.34%)</span>
          
         </Typography>
    </Box>
  </Paper>
  </Grid>
  
  </Grid>
  
  </Container>
  </Container>
  )
}

export default Holdings
