import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  Switch,
  FormGroup
} from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function AddFundPopup ({ open, openPop, close, user }) {
  const [fundsdata, setFunds] = useState([])
  const [error, setError] = useState('')

  const addfunds = () => {
    openPop()
    console.log(user, 'user')
    if (Number(fundsdata) < 0) {
      setError('Error: Amount cannot be negative')
      console.error('error: amount cannot be negative')
      return
    } else {
      axios
        .post(`http://localhost:8080/users/${user.id}/modify-funds`, {
          amount: Number(fundsdata)
        })
        .then(response => {
          if (response) {
          }
        })
        .catch(e => {
          console.error('Axios Error', e.message)
        })
    }
  }

  // useEffect(addfunds,[]);

  return (
    // <div className="modal">
    <Container sx={{ bgcolor: 'black', padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: '1em',
              display: 'flex',
              flexDirection: 'column',
              gap: '2em',
              minWidth: 390,
              marginBottom: 2,
              padding: '20px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {/* <Box sx={{display:"flex" }}>
         <Typography><strong>ADDING AMOUNT TO YOUR ACCOUNT</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>RELIANCE</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>x</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>1</strong>&nbsp;&nbsp;</Typography>
         <Typography><strong>Qty</strong>&nbsp;&nbsp;</Typography>
      </Box> */}
              <Box>
                {/* <FormGroup>
                  <FormControlLabel
                    sx={{ color: "white" }}
                    control={<Switch defaultChecked />}
                    label="Label"
                  />
                </FormGroup> */}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Box>
                <Typography variant='h6'>Enter the amount</Typography>
                <TextField
                  id='id'
                  name='amt'
                  value={fundsdata}
                  onChange={event => setFunds(event.target.value)}
                >
                  1
                </TextField>
                <FormControl>
                  <br></br>
                  <br></br>
                  {/* <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="market"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="account" control={<Radio />} label="Adding to your account" />
                  </RadioGroup> */}
                </FormControl>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  <Typography sx={{ color: 'white' }}>Rs 2,000.00</Typography>
                </Box>
              </Box>

              <Box>
                {error && (
                  <Typography sx={{ color: 'red' }}>{error}</Typography>
                )}
                <Button
                  sx={{ color: 'black', bgcolor: 'pink' }}
                  onClick={addfunds}
                >
                  Add Fund
                </Button>
                &nbsp;&nbsp;
                <Button
                  sx={{ color: 'black', border: '0.5px solid white' }}
                  onClick={() => close()}
                >
                  Cancel
                </Button>
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
