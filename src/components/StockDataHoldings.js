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
import { useEffect, useState, useRef } from 'react'
import Popup from 'reactjs-popup'
import Popups from './Popups'
import BuyPopup from './BuyPopup'
import axios from 'axios'
import Dashboard from './Dashboard'
import { SearchBar } from './SearchBar'
import Watchlist, { dataForWatchList } from './Watchlist'

function StockDataHoldings ({
  user: userSessionData,
  stock,
  index,
  currentPriceStocks,
  holdingsdata,
  openprice,
  setRender,
}) {
  console.log('hte', currentPriceStocks)
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  let pc = (
    ((currentPriceStocks[Object.keys(holdingsdata)[index]] - stock.avg_price) /
      stock.avg_price) *
    100
  ).toFixed(2)
  let sc = (
    currentPriceStocks[Object.keys(holdingsdata)[index]] -
    openprice[Object.keys(holdingsdata)[index]] /
      openprice[Object.keys(holdingsdata)[index]]
  ).toFixed(2)

  if (pc < 0) {
    pc = '-' + pc
  } else {
    pc = '+' + pc
  }
  const openModal = () => {
    setOpen(true)
  }
  return stock.quantity !== 0 ? (
    <>
      <Grid item xs={12} key={index}>
        <Paper
          elevation={3}
          sx={{
            p: '1em',
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5em',
            padding: '20px',
            width: '95%',
            backgroundColor: '#FFE8D6'
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ color: 'secondary.main', fontSize: '1.6rem' }}
                >
                  <strong>
                    {Object.keys(holdingsdata)[index].toLowerCase()}
                  </strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography sx={{ fontSize: '1.1rem' }}>
                    Qty.<strong>{stock.quantity}</strong>&nbsp;&nbsp;Avg.
                    <strong>{stock.avg_price.toFixed(2)}</strong>
                  </Typography>
                </Box>
                <Box></Box>
                <Typography sx={{ color: '#03C04A' }}>
                  {pc > 0 ? (
                    <Typography sx={{ color: '#03C04A', fontSize: '1.1rem' }}>
                      {pc}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: isNaN(pc)&&pc<0 ? '#03C04A' : '#FF0000',
                        fontSize: '1.1rem'
                      }}
                    >
                      {pc}
                    </Typography>
                  )}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography sx={{ fontSize: '1.1rem' }}>
                  Invested <strong>{stock.invested_value.toFixed(2)}</strong>
                </Typography>
                <Typography sx={{ fontSize: '1.1rem' }}>
                  LTP{' '}
                  <strong>
                    {currentPriceStocks[Object.keys(holdingsdata)[index]]}&nbsp;
                  </strong>
                  <span style={{ color: 'red' }}>{`(${sc})`}</span>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
                padding: '0.4em'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Popup
                  trigger={
                    <Button
                      sx={{ bgcolor: 'secondary.main', color: 'white' }}
                      onClick={() => setOpen(o => !o)}
                    >
                      <Typography variant='h6'>Add</Typography>
                    </Button>
                  }
                  position='right center'
                  modal
                  nested
                >
                  <div>
                    {
                      <BuyPopup
                        open={open}
                        onClose={closeModal}
                        stockname={Object.keys(holdingsdata)[index]}
                        userid={userSessionData.id}
                        setRender={setRender}
                      />
                    }
                  </div>
                </Popup>
              </Box>
              <Box>
                <Popup
                  trigger={
                    <Button sx={{ bgcolor: 'secondary.main' }}>
                      <Typography
                        variant='h6'
                        sx={{ color: 'white', fontweight: 'bold' }}
                      >
                        Sell
                      </Typography>
                    </Button>
                  }
                  position='right center'
                  modal
                >
                  <div>
                    <Popups
                      open={open}
                      setRender={setRender}
                      openPop={openModal}
                      closeModal={closeModal}
                      stockname={Object.keys(holdingsdata)[index]}
                      userid={userSessionData.id}
                    />
                  </div>
                </Popup>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  ) : (
    <></>
  )
}

export { StockDataHoldings }
