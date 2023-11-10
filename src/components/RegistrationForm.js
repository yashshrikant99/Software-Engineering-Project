// import React from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Form } from 'formik';
import '../cssfiles/RegistrationForm.css';
import axios from 'axios';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 import dayjs, { Dayjs } from 'dayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const initialValues ={
  username: "",
  email: "",
  phonenumber: "",
  dob:dayjs(Date.now()),
  password: ""
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if(!values.username){
    errors.username ="Username is required";
  }else if (values.username.length < 6){
      errors.username ="Username should be atleast 6 characters";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (values.phone.length < 10) {
    errors.phone = "Invalid Phone Number";
  }
  if (!values.dob) {
    errors.dob = "DOB is required";
  } else if (values.dob.length < 8) {
    errors.dob = "Invalid DOB";
  }


  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }


  return errors;
};
const submitForm = async(values) => {
  // console.log(values);
  axios.post("http://localhost:8081/users", values).then((response) => {
    console.log("Hi there" + response);
  })
  .catch(err => {
    console.error("This is error" + err);
  })  
};

function RegistrationForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      email: data.get('email'),
      phonenumber: data.get('phonenumber'),
      dob: data.get('dob'),
      password: data.get('password'),
    });
  };
  const defaultTheme = createTheme();
  return (
  <Formik initialValues={initialValues}
  validate={validate}
  onSubmit={submitForm}
  >
    {(formik)=>{
      const {
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleBlur,
        isValid,
        dirty
      } = formik;
      return (
        <div>
          <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs" className='registration'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      value= {values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.username && touched.username?
                      "input-error" : null}
                    />
                    {errors.username && touched.username && (
                    <span className="error">{errors.username}</span>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value= {values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email ?
                      "input-error" : null}
                    />
                    {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="phonenumber"
                      label="Phone Number"
                      name="phonenumber"
                      autoComplete="phonenumber"
                      value={values.phonenumber}
                      onChange={handleChange}
                      onBlur = {handleBlur}
                      className={errors.phonenumber && touched.phonenumber?
                      "input-error" : null}
                    />
                      {errors.phonenumber && touched.phonenumber && (
                        <span className='error'>{errors.phonenumber}</span>
                      )}
                  </Grid>
                  <Grid item xs = {12}className='date-picker' >
                  <LocalizationProvider item xs = {12}dateAdapter={AdapterDayjs} >
                      <DemoContainer components={['DatePicker']} >
                      <DatePicker label="DOB"
                      required
                      fullWidth
                      id ="dob"
                      name="dob"
                      autoComplete="dob"
                      value={values.dob}
                      onChange={(val)=>values.dob=val}
                      className={errors.dob && touched.dob?
                        "input-error" : null}
                      />
                      </DemoContainer>
                  </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password ?
                       "input-error" : null}
                    />
                       {errors.password && touched.password && (
                       <span className="error">{errors.password}</span>
                  )}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  // className={dirty && isValid ? "" : "disabled-btn"}
                  // disabled={!(dirty && isValid)}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-center">
                  <Grid item className='already-acct'>
                    <Link to="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
       </div>
      );
    }}
    </Formik>
    );
}

export default RegistrationForm
