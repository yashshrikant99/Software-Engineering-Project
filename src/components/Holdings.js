import { Container,Paper, Typography,Box, Grid,TextField, RadioGroup, FormControl,FormLabel,FormControlLabel,Radio, Button, Switch,FormGroup } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function handleClick()
{   
  alert("hellooo");
  console.log('Box clicked!');
  <Container sx={{bgcolor:"black" , padding: "20px" }}>
   
  <Grid container spacing={2}>
  <Grid item xs={12}>
  <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"2em",  minWidth: 390, marginBottom:2, padding:"20px"}} >
    <Box sx={{display:"flex", justifyContent: "space-between",  }}>
      <Box sx={{display:"flex" }}>
         <Typography><strong>Buy</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>RELIANCE</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>x</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>1</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>Qty</strong>&nbsp;&nbsp;</Typography>
      </Box>
      <Box>
      <FormGroup>
  <FormControlLabel sx={{color: "white"}} control={<Switch defaultChecked />} label="Label" />
</FormGroup>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between" }}>
    <Box >
         <Typography variant='h6'>Qty</Typography>
         <TextField
                      
                      id="quantity"
                      label="1"
                      name="quantity"
                      
          >1</TextField>
    </Box>
    <Box >
         <Typography variant='h6'>Price</Typography>
         <TextField
                      
                      id="price"
                      label="0"
                      name="price"
                      
          >1</TextField>
          <FormControl>
 
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="market"
    name="radio-buttons-group"
  >
    <FormControlLabel value="market" control={<Radio />} label="Market" />
  </RadioGroup>
</FormControl>
    </Box>
    </Box>
    
    <Box sx={{display:"flex", alignItems:"center",justifyContent: "space-between"  }}>
      <Box sx={{display:"flex", alignItems:"center"  }}>
      <Box>
        <Typography variant='h6'>Margin&nbsp;&nbsp;</Typography>
        </Box>
        <Box>
         <Typography sx={{color:"white"}}>
          Rs 2,000.00
         </Typography>
         </Box>
      </Box>
   
         
         <Box>
         <Button sx={{color:"white", bgcolor:"blue"}}>Buy</Button>&nbsp;&nbsp;
         <Button sx={{color:"white", border: "0.5px solid white"}}>Cancel</Button>
         </Box>
         
    </Box>
  
  
  </Paper>

 
  
  </Grid>
  
  </Grid>
  
  </Container>
}

function Holdings() {
  return (
   <Container maxWidth={false} sx={{bgcolor:"lightblue", height: "100vh"  }}>
<Typography variant="h3" 
     sx={{my:4, textAlign:'center', color:"secondary.main" }}
     >Holdings
     </Typography>

<Box sx={{marginBottom:10,}}>
    <Paper elevation={2} sx={{p:"2em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390, border: 0.3, width: "80%" , margin: "0 auto"}}>
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

<Container sx={{bgcolor:"black" , padding: "20px" }}>
   
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
    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center"}} onClick={handleClick} >
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

  <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"0.3em",  minWidth: 390,}} >
    <Box sx={{display:"flex", justifyContent: "space-between" }}>
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
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>
{/* <Container sx={{bgcolor: "blue ",  padding:"10px"}}>
<Grid container spacing={12} sx={{bgcolor: "yellow", padding:"10px"}}>
  <Grid xs={12} sx={{bgcolor: "red"}}>
   

    <Typography>cakjdck</Typography>


  </Grid>
</Grid>

</Container> */}



  <Container sx={{bgcolor:"orange" , padding: "20px" }}>
   
  <Grid container spacing={2}>
  <Grid item xs={12}>
  <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"2em",  minWidth: 390, marginBottom:2, padding:"20px"}} >
    <Box sx={{display:"flex", justifyContent: "space-between",  }}>
      <Box sx={{display:"flex" }}>
         <Typography><strong>Sell</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>RELIANCE</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>x</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>1</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>Qty</strong>&nbsp;&nbsp;</Typography>
      </Box>
      <Box>
      <FormGroup>
  <FormControlLabel sx={{color: "white"}} control={<Switch defaultChecked />}  />
</FormGroup>
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent: "space-between" }}>
    <Box >
         <Typography variant='h6'>Qty</Typography>
         <TextField
                      
                      id="quantity"
                      label="1"
                      name="quantity"
                      
          >1</TextField>
    </Box>
    <Box >
         <Typography variant='h6'>Price</Typography>
         <TextField
                      
                      id="price"
                      label="0"
                      name="price"
                      
          >1</TextField>
          <FormControl>
 
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="market"
    name="radio-buttons-group"
  >
    <FormControlLabel value="market" control={<Radio />} label="Market" />
  </RadioGroup>
</FormControl>
    </Box>
    </Box>
    
    <Box sx={{display:"flex", alignItems:"center",justifyContent: "space-between"  }}>
      <Box sx={{display:"flex", alignItems:"center"  }}>
      <Box>
        <Typography variant='h6'>Margin&nbsp;&nbsp;</Typography>
        </Box>
        <Box>
         <Typography sx={{color:"white"}}>
          Rs 2,000.00
         </Typography>
         </Box>
      </Box>
   
         
         <Box>
         <Button sx={{color:"white", bgcolor:"blue"}}>Buy</Button>&nbsp;&nbsp;
         <Button sx={{color:"white", border: "0.5px solid white"}}>Cancel</Button>
         </Box>
         
    </Box>
  
  
  </Paper>

 
  
  </Grid>
  
  </Grid>
  
  </Container>
  </Container>
  )
}

export default Holdings
