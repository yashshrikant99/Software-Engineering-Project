import React, { useEffect } from "react";
import { Container, Button, Typography, Box, Grid, Item } from "@mui/material";
import { SearchBar } from "./SearchBar";
import Watchlist, { dataForWatchList } from "./Watchlist";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import BuyPopup from "./BuyPopup";
import AddFundPopup from "./AddFundPopup";
import axios from "axios";

function Funds(user) {
  const [watchlistData, setWatchListData] = useState([]);
  const userSessionData = JSON.parse(sessionStorage.getItem("userSession"));
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(false);
  const [fundsdata, setFunds] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  const setData = (data) => {
    setWatchListData(data);
  };

  useEffect(() => {
    const userid = user.id;
    console.log(user.id);
    axios
      .get(`http://localhost:8080/users/${userSessionData.id}`)
      .then((response) => {
        if (response) {
          setFunds(response.data);
        }
      })
      .catch((e) => {
        console.error("Axios Error", e.message);
      });
  }, [fundsdata]);

  // const a = () => alert("Sahil");

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", flexDirection: "row", height: "100vh", }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "35%",
          p: "0",
          marginRight: 2,
        }}
      >
        <Box className="search-bar" sx={{ height: "5%", mt: 4, mb: 1 }}>
          <SearchBar
            user={userSessionData}
            watchlistData={watchlistData}
            setWatchList={setData}
            dataForWatchList={dataForWatchList}
          />
        </Box>
        <Box sx={{ height: "90%", width: "100%" }}>
          <Watchlist
            user={userSessionData}
            dataForWatchList={dataForWatchList}
            watchlistData={watchlistData}
            setWatchList={setData}
          />
        </Box>
      </Box>

      {/* second half of funds ka start  */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "65%",
        }}
      >
        <Box
          className="funds-box"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ mt: 6, mb: 6, color: "secondary.main" }}
          >
            {" "}
            FUNDS{" "}
          </Typography>
        </Box>

        <Box
          className="outer-box"
          sx={{ borderRadius: 8, padding: 6, border: "2px solid lightgray" }}
        >
          <Box className="inner-box" sx={{ borderRadius: 8, padding: 11 }}>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "secondary.main",
              }}
            >
              <div sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Available Cash
              </div>
              <div
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faDollarSign}
                  sx={{ fontSize: "1.5em", marginRight: 1 }}
                />
                {fundsdata.funds_available < 0 ? (
                  <span style={{ color: "red" }}>Error: Negative Value</span>
                ) : (
                  fundsdata.funds_available
                )}
              </div>
            </Typography>
          </Box>
        </Box>
        <br></br>
        {/* <Box className="add-funds-box" sx={{ display: "flex", flexDirection: "row", gap: "1em", justifyContent: "center", alignItems: 'center', mt:2 ,mr:19 }}>
      <Button variant="contained" sx={{ width: '50%', height: 50,backgroundColor: '#2196f3', color: '#fff',borderRadius: '8px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {backgroundColor: '#4caf50', // Change to a slightly darker shade on hover
         },
        }}>
      <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} /> Add Funds</Button>
    </Box> */}

        <Box>
          <Popup
            trigger={
              <Button
                variant="contained"
                sx={{
                  width: "50%",
                  height: 50,
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  "&:hover": { backgroundColor: "#4caf50" },
                }}
              >
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: "8px" }} />{" "}
                Add Funds
              </Button>
            }
            position="right center"
            modal
            nested
          >
            {(closeModal) => (
              <div>
                <AddFundPopup
                  open={open}
                  openPop={openModal}
                  close={closeModal}
                  user={userSessionData}
                />
              </div>
            )}
          </Popup>
        </Box>
      </Box>
    </Container>
  );
}

export default Funds;
