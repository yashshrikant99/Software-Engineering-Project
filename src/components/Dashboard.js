import React, { useState } from 'react'
import { Container, Paper, Typography, Box, Grid, Item } from '@mui/material'
import { lightGreen } from '@mui/material/colors'
import { SearchBar } from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import DashboardTable from './DashboardTable'
import Watchlist, { dataForWatchList } from './Watchlist'
import { useLocation } from 'react-router-dom'

// import "react-datepicker/dist/react-datepicker.css";

function Dashboard () {
  const [watchlistData, setWatchListData] = useState([])
  const userSessionData = JSON.parse(sessionStorage.getItem('userSession'))
  const setData = data => {
    setWatchListData([...data])
  }
  console.log(watchlistData, 'JJJJJJ')
  return (
    <Container
      className='main-container'
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '35%',
          p: '0',
          mr: 3
        }}
      >
        <Box className='search-bar' sx={{ height: '5%', mt: 4, mb: 1 }}>
          <SearchBar
            user={userSessionData}
            watchlistData={watchlistData}
            setWatchList={setData}
            dataForWatchList={dataForWatchList}
          />
        </Box>
        <Box>
          <Watchlist
            user={userSessionData}
            dataForWatchList={dataForWatchList}
            watchlistData={watchlistData}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '65%',
          mt: 4
        }}
      >
        <DashboardTable />
      </Box>
    </Container>
  )
}

export default Dashboard
