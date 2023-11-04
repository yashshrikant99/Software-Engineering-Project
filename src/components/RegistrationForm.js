import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom";

// import DatePicker from "@material-ui/core";
// import { DatePicker } from "@material-ui/core/x-date-pickers";

// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";



export default function SignUp() {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
          ></TextField>
             <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Date of Birth"
          ></TextField>

          <TextField
            name="password"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            autoComplete="current-password"
          ></TextField>
          <Button type="submit" fullWidth variant="contained" color="primary">
                Sign Up
            </Button>
            <Grid container>
                <Grid item xs>
                <Link to="/signin" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
         </Grid>
        </Box>
      </Box>

      
      {/* <Grid container>
        <Grid item xs>
          <Link href="/" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid> */}
    </Container>
  );
}
