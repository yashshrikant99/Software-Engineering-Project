import React from 'react'
import { Container, Paper, Typography, Box, Grid, Item } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import '../cssfiles/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar () {
  const userSessionData = JSON.parse(sessionStorage.getItem('userSession'))
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        border: 1,
        height: '130px',
        width: '100%',
        // pt: 4.55
        p: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      className='bg-dark'
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0em' }}>
        <Link to="/welcome">
          <img
          src={require('../images/tt-logo.png')}
          style={{ width: '50%', height: '100%' }}
        />
        </Link>
        <Typography
          sx={{ color: 'white', fontSize: '20px', ml: -11, marginTop: '2em' }}
        >
          TradeMinds Playground
        </Typography>
        
      </Box>

      <Box
        className='header'
        sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
      >
        {userSessionData && (
          <Link to='/dashboard' className='text-light fs-4 px-3 dashboard'>
            Dashboard
          </Link>
        )}
        {userSessionData && (
          <Link to='/holdings' className='text-light fs-4 px-3 holdings'>
            Holdings
          </Link>
        )}
        {userSessionData && (
          <Link to='/funds' className='text-light fs-4 px-3 funds'>
            Funds
          </Link>
        )}
        {userSessionData && (
          <Link to='/profile' className='text-light fs-4 px-3 profile'>
            Profile
          </Link>
        )}
      </Box>
      {/* <Box className="userprofile">
        <Link to="/profile" className="text-light fs-4 px-3 profile">
          Profile
        </Link>
      </Box> */}
    </Container>
  )
}

export default NavBar
