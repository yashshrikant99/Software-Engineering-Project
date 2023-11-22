import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import {useEffect, useState, useParams} from "react";
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';




function SearchBar() {

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [inValue, setInputValue] = useState("")
  // const options = ['Option 1', 'Option 2'];


  useEffect(() => {
    // Assuming this effect is triggered when the component mounts or when query changes
    // Make Axios GET request
    axios.get(`http://localhost:8081/stock-name/${query}`)
      .then((response) => {
        console.log("axios response", response);
        setSearchResults(response.data);
        console.log("mapping response data", response.data);
      })
      .catch((error) => {
        console.error("axios error", error);
      });
  }, [query]);


  const handleInputChange = (e) => {
    // Update the query state when input changes
    alert(e.target.value)
    setQuery(e.target.value);
  };



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'lightgrey',
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight:1,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: '100%',
          // width: 'auto',

        },
      }));
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
  return (
    <div>
      {/* <Search> */}
      {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
            {/* <StyledInputBase
              placeholder="Search eg: infy bse"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange= {handleInputChange}
            /> */}

            <Autocomplete
            freeSolo
            //  placeholder="Search eg: infy bse"
            //  inputProps={{ 'aria-label': 'search' }}
             value={query}
            //  options= {searchResults.map((option) => (Object.values(option)).slice(0,2))}
             options = {searchResults.map(option=>option["shortname"])}
            onInputCapture={(event,newInputValue)=>{
              setInputValue(newInputValue)
            }}
            onChange={(event, newValue) => setQuery(newValue)}
            // onChange= {handleInputChange}
             sx={{width:610, ml:1}}
             renderInput={(params) => <TextField {...params}
             /> }
            />

          {/* </Search> */}
    </div>
  )
}

export default SearchBar
