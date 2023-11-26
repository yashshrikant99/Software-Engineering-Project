import { Container,Paper, Typography,Box, Grid,TextField, RadioGroup, FormControl,FormLabel,FormControlLabel,Radio, Button, Switch,FormGroup } from '@mui/material'
import React from 'react'


function AddFundPopup({open, closeModal})
{
   
    return(
        // <div className="modal">
    
        <Container sx={{bgcolor:"black" , padding: "20px" }}>
   
  <Grid container spacing={2}>
  <Grid item xs={12}>
  <Paper elevation={3} sx={{p:"1em" , display:"flex", flexDirection:"column", gap:"2em",  minWidth: 390, marginBottom:2, padding:"20px"}} >
    <Box sx={{display:"flex", justifyContent: "center", alignItems:"center"  }}>
      <Box sx={{display:"flex" }}>
         <Typography><strong>ADDING AMOUNT TO YOUR ACCOUNT</strong>&nbsp;&nbsp;</Typography>
         {/* <Typography><strong>RELIANCE</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>x</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>1</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>Qty</strong>&nbsp;&nbsp;</Typography> */}
      </Box>
      <Box>
      {/* <FormGroup>
  <FormControlLabel sx={{color: "white"}} control={<Switch defaultChecked />} label="Label" />
</FormGroup> */}
      </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent:"center", alignItems:'center' ,gap:"10px"}}>
    
    <Box >
         <Typography variant='h6'>Enter the amount</Typography>
         <TextField
                      
                      id="id"
                      label="0"
                      name="amt"
                      
          >1</TextField>
          <FormControl>
 <br></br>
 <br></br>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="market"
    name="radio-buttons-group"
  >
    {/* <FormControlLabel value="account" control={<Radio />} label="Adding to your account" /> */}
  </RadioGroup>
</FormControl>
    </Box>
    </Box>
    
    <Box sx={{display:"flex", alignItems:"center",justifyContent: "space-between"  }}>
      <Box sx={{display:"flex", alignItems:"center"  }}>
        <Box>
         <Typography sx={{color:"white"}}>
          Rs 2,000.00
         </Typography>
         </Box>
      </Box>
   
         
         <Box>
         <Button sx={{color:"black", bgcolor:"blue"}}>Add Fund</Button>&nbsp;&nbsp;
         <Button sx={{color:"black", border: "0.5px solid white"}} onClick={closeModal}>Cancel</Button>
         </Box>
         
    </Box>
  
  
  </Paper>

 
  
  </Grid>
  
  </Grid>
  
  </Container>
  /* </div> */
    )
}


export default AddFundPopup