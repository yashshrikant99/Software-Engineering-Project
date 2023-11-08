import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../cssfiles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"; 

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button,Container} from 'react-bootstrap';

export default function NavBar(){
//   render() {
    return (
      <div>
        {/* <img src = '/images/tt-logo.png'alt="logo"> </img> */}
        <Navbar bg = "dark">
      <Container  maxWidth= {false} style={{height:'120%'}}>
        <Navbar.Brand className ="text-light"href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 mx-auto"
            style={{ maxHeight:'100%'}}
            navbarScroll
          >
          <div className ="links">
            <Link to ='/dashboard'className ="text-light fs-4 px-3 dashboard" >Dashboard</Link>
            <Link to='/holdings' className ="text-light fs-4 px-3 holdings">Holdings</Link>
            <Link to = '/funds'className ="text-light fs-4 px-3 funds">Funds</Link>
            <Link to ='/watchlist' className ="text-light fs-4 px-3 watchlist">Watchlist</Link>

           </div>
            <NavDropdown
                 title= {
                    <span className='text-light fs-4 px-auto'><FontAwesomeIcon icon={faUser} fontSize={30}/>
                    </span>

                 } className = 'drop-name ms-auto' id="navbarScrollingDropdown" style={{"--bs-caret-display":"none"}}>
              <NavDropdown.Item  href="#action3">My Account</NavDropdown.Item>
              <NavDropdown.Item   href="#action4">
                Log In
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
  }
// }
