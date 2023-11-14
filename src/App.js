// import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import Holdings from './components/Holdings';
import Funds from './components/Funds';
import Watchlist from './components/Watchlist';
import {
  BrowserRouter as Router,
  Routes,
  Route, useParams,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <NavBar1/>
      <Routes>Home
      <Route path="/signin"  element = {<LoginForm/>}> </Route>
      <Route path ="/registration" element ={<RegistrationForm/>}></Route>
      <Route path ="/dashboard" element ={<Dashboard/>}></Route>
      <Route path ="/holdings" element ={<Holdings/>}></Route>

      <Route path ="/funds" element ={<Funds/>}></Route>
      {/* <Route path ="/watchlist" element ={<Watchlist/>}></Route> */}
      <Route path ="/watchlist" element ={<Watchlist/>}></Route>
      {/* <Route path ="/funds" element ={<Funds/>}></Route> */}

      </Routes>
      <Footer1/>
      </Router>
  );
}

export default App;
