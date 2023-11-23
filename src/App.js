// import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import Holdings from './components/Holdings';
import Funds from './components/Funds';
import Watchlist from './components/Watchlist';
import ProfilePg from './components/ProfilePg';
// import Profile from './components/Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route, useParams,
} from "react-router-dom"
import Landingpage from './components/Landingpage';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>Home
      {/* {/* <Route path="/signin"  element = {<LoginForm/>}> </Route> */}
      {/* <Route path ="/registration" element ={<RegistrationForm/>}></Route> */}
      <Route path ="/welcome" element ={<Landingpage/>}></Route> 
      {/* <Route path ="/popup" element ={<Popup/>}></Route>  */}
      <Route path="/signin"  element = {<LoginForm/>}> </Route>
      <Route path ="/registration" element ={<RegistrationForm/>}></Route>
      <Route path ="/dashboard" element ={<Dashboard/>}></Route>
      <Route path ="/holdings" element ={<Holdings/>}></Route>
      <Route path ="/profile" element ={<ProfilePg/>}></Route>


      <Route path ="/funds" element ={<Funds/>}></Route>
      {/* <Route path ="/watchlist" element ={<Watchlist/>}></Route> */}
      <Route path ="/watchlist" element ={<Watchlist/>}></Route>
      {/* <Route path ="/funds" element ={<Funds/>}></Route> */}

      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
