import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { useState } from "react";
import Popup from "reactjs-popup";
import { Typography, Box, Button } from "@mui/material";
import BuyComponent from "./BuyComponent";
const userSessionData = JSON.parse(sessionStorage.getItem("userSession"));

export default function WatchListBasicButtonGroup({
  user,
  watchlist,
  dataForWatchList,
  watchlistData,
  setWatchList,
  price,
}) {
  // alert(price)
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [close, setClose] = useState(0);
  const userSessionData = JSON.parse(sessionStorage.getItem("userSession"));

  const delWatchlistUser = () => {
    delWatchlist(user, watchlist);
  };

  async function delWatchlist(user, watchlist) {
    try {
      const values = {
        short_name: watchlist["long_name"],
      };
      console.log(values);
      const res = await axios
        .delete(`http://localhost:8080/rem_watchlist/${user.id}`, {
          data: values,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            dataForWatchList([...watchlistData]);
            setWatchList((prev)=>[...prev])
          }
        })
        .catch((e) => {
          console.error("Axios error", e.message);
        });
    } catch (e) {
      console.error("Axios Error", e.message);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Popup
        trigger={
          <Button
            sx={{ bgcolor: "secondary.main", color: "white" }}
            color="success"
            onClick={() => setOpen((o) => !o)}
          >
            <Typography variant="h5">Buy</Typography>
          </Button>
        }
        position=""
        modal
        nested
      >
        <div>
          {
            <BuyComponent
              open={open}
              onClose={closeModal}
              userid={userSessionData.id}
              price={price}
              stockname={watchlist["long_name"]}
            />
          }
        </div>
      </Popup>
      <Button onClick={delWatchlistUser} color="warning">
        Remove
      </Button>
    </Box>
  );
}
