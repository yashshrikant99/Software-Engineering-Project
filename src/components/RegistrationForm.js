import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Formik, Form } from "formik";
import "../cssfiles/RegistrationForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const initialValues = {
  username: "",
  email: "",
  phone: "",
  DoB: dayjs(Date.now()),
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 6) {
    errors.username = "Username should be atleast 6 characters";
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
  if (!values.DoB) {
    errors.DoB = "DOB is required";
  } else if (values.DoB.length < 8) {
    errors.DoB = "Invalid DOB";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }
  return errors;
};

function RegistrationForm() {
  const [userData, setUserData] = useState({});
  const history = useNavigate();

  const submitForm = async (values) => {
    console.log(values);
    axios
      .post("http://localhost:8080/users", values)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((err) => {
        console.error("This is error" + err);
      });
  };

  const notify = (data) => {
    if (data === "Created User") {
      toast.success("User Signed Up", { autoClose: 3000, toastId: "success" });
      setTimeout(() => history("/dashboard"), "1500");
    }
    if (!data) toast.error("Error Signing Up", { autoClose: 3000 });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     username: data.get("username"),
  //     email: data.get("email"),
  //     phone: data.get("phone"),
  //     DoB: data.get("DoB"),
  //     password: data.get("password"),
  //   });
  // };
  const defaultTheme = createTheme();
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm} //submit form - for axios
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div>
            <ThemeProvider theme={defaultTheme}>
              <Container
                component="main"
                maxWidth="xs"
                className="registration"
              >
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete="username"
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.username && touched.username
                              ? "input-error"
                              : null
                          }
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
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.email && touched.email ? "input-error" : null
                          }
                        />
                        {errors.email && touched.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="phone"
                          label="Phone Number"
                          name="phone"
                          autoComplete="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.phone && touched.phone ? "input-error" : null
                          }
                        />
                        {errors.phone && touched.phone && (
                          <span className="error">{errors.phone}</span>
                        )}
                      </Grid>
                      <Grid item xs={12} className="date-picker">
                        <LocalizationProvider
                          item
                          xs={12}
                          dateAdapter={AdapterDayjs}
                        >
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="DoB"
                              required
                              fullWidth
                              id="DoB"
                              name="DoB"
                              autoComplete="DoB"
                              value={values.DoB}
                              onChange={(val) => (values.DoB = val)}
                              className={
                                errors.DoB && touched.DoB ? "input-error" : null
                              }
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
                          className={
                            errors.password && touched.password
                              ? "input-error"
                              : null
                          }
                        />
                        {errors.password && touched.password && (
                          <span className="error">{errors.password}</span>
                        )}
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      // className={dirty && isValid ? "" : "disabled-btn"}
                      disabled={!(dirty && isValid)}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={notify(userData)}
                    >
                      Sign Up
                    </Button>
                    <ToastContainer limit={1} />
                    <Grid container justifyContent="flex-center">
                      <Grid item className="already-acct">
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

export default RegistrationForm;
