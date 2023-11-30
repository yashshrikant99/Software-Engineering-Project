import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { useEffect, useState, useParams } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InputAdornment from "@mui/material/InputAdornment";
import { green } from "@mui/material/colors";
import BasicButtonGroup from "./ButtonGroup";
import Box from "@mui/material/Box";
import { debounce } from "@mui/material/utils";
import { _ } from "lodash";

function SearchBar({ user, watchlistData, setWatchList, dataForWatchList }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [inValue, setInputValue] = useState("");
  // const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const loading = open && searchResults.length === 0;

  function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

  let watchListData = watchlistData;
  // const options = ['Option 1', 'Option 2'];
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => {
    // Assuming this effect is triggered when the component mounts or when query changes
    // Make Axios GET request
    let active = true;
    if (!loading) {
      return undefined;
    }

    if (inValue === "") {
      setSearchResults(query ? [query] : []);
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        const res = axios
          .get(`http://localhost:8080/stock-name/${query}`)
          .then((response) => {
            console.log("axios response", response);
            setSearchResults([...response.data]);
            console.log("mapping response data", response.data);
            return response;
          })
          .catch((error) => {
            console.error("axios error", error);
          });
      }
    })();
    // if (!loading) {
    //   setSuccess(false);
    //   setLoading(true);
    // }
    const res = axios
      .get(`http://localhost:8080/stock-name/${query}`)
      .then((response) => {
        console.log("axios response", response);
        setSearchResults(response.data);
        console.log("mapping response data", response.data);
        return response;
      })
      .catch((error) => {
        console.error("axios error", error);
      });
    // if(res){
    //     setSuccess(true)
    //     setLoading(false)
    // }
    return () => {
      active = false;
    };
  }, [query, loading, inValue]);

  useEffect(() => {
    if (!open) {
      setSearchResults([]);
    }
  }, [open]);

  const handleInputChange = (e) => {
    // Update the query state when input changes
    alert(e.target.value);
    setQuery(e.target.value);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "lightgrey",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 1,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "100%",
      // width: 'auto',
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      {/* <Search> */}
      {/* { <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> } */}
      <Autocomplete
        loading={loading}
        freeSolo
        autoComplete
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        filterOptions={(x) => x}
        //  placeholder="Search eg: infy bse"
        //  inputProps={{ 'aria-label': 'search' }}
        value={query}
        //  options= {searchResults.map((option) => (Object.values(option)).slice(0,2))}
        // options = {searchResults.map(option=>option["shortname"])}
        options={searchResults.map((option) => [
          option["shortname"],
          ,
          option["symbol"],
        ])}
        //getOptionLabel={searchResults.map(option=>`${option["shortname"]} - ${option["symbol"]}}`)}
        noOptionsText={"No Available Stocks"}
        onInputCapture={(event, newInputValue) => {
          setQuery(newInputValue);
          setInputValue(newInputValue);
        }}
        onInputChange={(event, newInputValue) => {
          debounce(
            axios
              .get(`http://localhost:8080/stock-name/${newInputValue}`)
              .then((response) => {
                console.log("axios response", response);
                setSearchResults(response.data);
                console.log("mapping response data", response.data);
                return response;
              })
              .catch((error) => {
                console.error("axios error", error);
              }),
            3000
          );
        }}
        autoHighlight
        filterSelectedOptions
        onChange={(event, newValue) => setQuery(newValue)}
        // onChange= {handleInputChange}
        sx={{ width: 500, ml: 1 }}
        renderOption={(props, option) => (
          <li {...props}>
            {loading && !success ? (
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
            ) : (
              <div style={{ display: "flex" }}>
                {
                  <div style={{ display: "inline-block" }}>
                    {`${option[0]} - ${option[2]}`}{" "}
                  </div>
                }
                <BasicButtonGroup
                  user={user}
                  watchListData={watchListData}
                  stockdata={option}
                  setWatchList={setWatchList}
                  dataForWatchList={dataForWatchList}
                />
              </div>
            )}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Watchlist"
            placeholder="Search Infy, BSE etc"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />
                  </InputAdornment>
                </>
              ),
            }}
          />
        )}
      />
      {/* {<StyledInputBase
              placeholder="Search eg: infy bse"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange= {handleInputChange}
            />} */}

      {/* </Search> */}
    </div>
  );
}

export { SearchBar };
