import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, Box, Grid, Item } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import DashboardTable from "./DashboardTable";
import CircularProgress from "@mui/material/CircularProgress";
import WatchListBasicButtonGroup from "./WatchListButtonGroup";
import { green } from "@mui/material/colors";
import InfoIcon from "@mui/icons-material/Info";
import Popup from "reactjs-popup";
import Button from "@mui/material/Button";
import WatchlistPopup from "./WatchlistPopup";
import axios from "axios";
import BuyPopup from "./BuyPopup";

// import "react-datepicker/dist/react-datepicker.css";
let dataForWatchList = () => {};
function Watchlist({ user, dataForWatchList, watchlistData, setWatchList }) {
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // const flag = false;
  const [data, setData] = useState([]);
  // const closeModal = () => setOpen(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    // alert(open);
    setOpen(!open);
  };

    const userSessionData  = JSON.parse(sessionStorage.getItem("userSession"));
  const renderLoading = () => {
    <>
      <CircularProgress
        size={68}
        sx={{
          color: green[500],
          position: "absolute",
          top: -6,
          left: -6,
          zIndex: 1,
        }}
      />
    </>;
  };
  useEffect(() => {
    console.log(user.id);
    axios
      .get(`http://localhost:8080/user_watchlist/${user.id}`)
      .then((response) => {
        if (loading && !success) renderLoading();
        if (response) {
          setData(response.data);
          setLoading(false);
          setSuccess(true);
        }
                })
      .catch((e) => {
        console.error("Axios Error", e.message);
      });
  }, [watchlistData]);

  const a = (data) => {
    setData(data)
  }

  dataForWatchList = setData;
  const func = () => {
    return data.map((obj) => {
      return (
        <>
          <div>
            <Paper
              elevation={2}
              className="watchlist-entry"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "10%",
                p: 1,
                bgcolor: "lightgray",
              }}
            >
              <Box className="stock-name-box" sx={{}}>
                <Typography className="stock-name" sx={{ ml: 2 }}>
                  {" "}
                  {obj.long_name}
                </Typography>
              </Box>
              <Box
                className="numbers"
                sx={{ display: "flex", flexDirection: "row", gap: "2em" }}
              >
                <Typography className="num1"> {obj.price} </Typography>
                {/* <Typography className ="num2"> -0.22% </Typography>
          <Typography className ="num3"> <FontAwesomeIcon  icon={faCaretDown}/> &nbsp;19751.05 </Typography> */}
        </Box>
        <WatchListBasicButtonGroup watchlist={obj} user={user} dataForWatchList={dataForWatchList} watchlistData={watchlistData} price={obj.price} setWatchList={setWatchList}/>
      </Paper>
          </div>
        </>
      );
    });
  };
  return (
    // <Container  maxWidth= {false} sx = {{display: "flex", flexDirection: "row",height:"100%"}}>
    // <Box sx = {{display:"flex", flexDirection:"column",height:"100%", width:"35%", p:"0", mr:3}}>

    <Box sx={{ height: "90%", width: "100%", mt: 2 }}>
      <Box className="popup-watchlist" sx={{ display: "flex" }}>
        <Typography variant="h2" level="h2" component="h2">
          Watchlist
        </Typography>

        <Button onClick={handleClick}>
          <InfoIcon fontSize="medium"> </InfoIcon>
        </Button>

        {open ? (
          <Box sx={{ mt: 1 }}>
            <WatchlistPopup></WatchlistPopup>
          </Box>
        ) : null}
      </Box>
      {func()}
    </Box>

    // </Box>

    // </Container>
  );
}
export default Watchlist;
export { dataForWatchList };
