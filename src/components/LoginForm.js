import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Formik, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../cssfiles/LoginForm.css'

function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        TradeTrackr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function notifyContainer () {
  return <ToastContainer />
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

const initialValues = {
  email: '',
  password: ''
}

const validate = values => {
  let errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!regex.test(values.email)) {
    errors.email = 'Invalid Email'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 4) {
    errors.password = 'Password too short'
  }

  return errors
}

export default function LoginForm () {
  const [userData, setUserData] = useState({})
  const history = useNavigate()
  const submitForm = values => {
    console.log(values)
    axios
      .post('http://localhost:8080/users/login', values, {})
      .then(response => {
        console.log(response.data)
        if (response.data) {
          setUserData(response.data)
          sessionStorage.setItem('userSession', JSON.stringify(response.data))
        }
      })
  }
  const notify = data => {
    if (data.allowLogin) {
      toast.success('User Logged in', { autoClose: 3000, toastId: 'success' })
      setTimeout(() => history('/dashboard', { state: data }), '1500')
    }
    if (!data) toast.error('Wrong Credentials', { autoClose: 3000 })
  }
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {formik => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik

        return (
          <div>
            <ThemeProvider theme={defaultTheme}>
              <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh'
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component='h1' variant='h5'>
                    Sign in
                  </Typography>
                  <Box
                    component='form'
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    {/* <Formik> */}

                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete='email'
                      autoFocus
                      className={
                        errors.email && touched.email ? 'imput-error' : null
                      }
                    />
                    {errors.email && touched.email && (
                      <span className='error'>{errors.email}</span>
                    )}
                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete='current-password'
                      className={
                        errors.password && touched.password
                          ? 'input-error'
                          : null
                      }
                    />
                    {errors.password && touched.password && (
                      <span className='error'>{errors.password}</span>
                    )}
                    {/* <FormControlLabel
                          control={<Checkbox value="remember" color="primary" />}
                          label="Remember me"
                        /> */}
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                      className={!(dirty && dirty) ? 'disabled-btn' : ''}
                      //disabled={!(dirty && isValid)}
                      onClick={notify(userData)}
                    >
                      Sign In
                    </Button>
                    <ToastContainer limit={1} />
                    {/* </Formik> */}
                    <Grid container>
                      <Grid item xs>
                        <Link href='#' variant='body2'>
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item className='link'>
                        <Link to='/registration' variant='body2'>
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
              </Container>
            </ThemeProvider>
          </div>
        )
      }}
    </Formik>
  )
}
