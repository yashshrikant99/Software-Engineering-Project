import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: "#071630",
    },

    secondary: {
      main: "#008080",
    },
  },

  // styleOverrides: {
  //   body: {
  //     backgroundColor: '#000000', // Set background color to black
  //   },
  // },

  typography: {
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
