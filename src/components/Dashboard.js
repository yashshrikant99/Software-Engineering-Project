import React, { useState } from 'react'
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Item,
  IconButton
} from '@mui/material'
import { lightGreen } from '@mui/material/colors'
import { SearchBar } from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import DashboardTable from './DashboardTable'
import Watchlist, { dataForWatchList } from './Watchlist'
import { useLocation } from 'react-router-dom'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import WatchlistPopup from './WatchlistPopup'
import Popup from 'reactjs-popup'
import InfoIcon from '@mui/icons-material/Info'
// import { Button } from "bootstrap";
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'

function Dashboard () {
  const [watchlistData, setWatchListData] = useState([])
  const userSessionData = JSON.parse(sessionStorage.getItem('userSession'))
  const setData = data => {
    setWatchListData(data)
  }
  // console.log(watchlistData, "JJJJJJ");

  // const [open, setOpen] = useState(false);
  const handleClick = () => {
    // setOpen(!open);
    console.log('here popup')
  }
  return (
    <Container
      className='main-container'
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'row',

        height: '100vh'
      }}
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
        <Box sx={{ display: 'flex' }}>
          <Watchlist
            user={userSessionData}
            dataForWatchList={dataForWatchList}
            watchlistData={watchlistData}
            setWatchList={setData}
          />

          {/* <Popup
            // open={open}
            // onClose={handleClick}
            // <InfoIcon fontSize="medium" onClick={handleClick}/>

            trigger={
              <Button onClick={() => alert("yoyo")}>
                <InfoIcon fontSize="medium"> </InfoIcon>
              </Button>
            }
            modal
            nested
          >
            {<WatchlistPopup />}
          </Popup> */}
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
