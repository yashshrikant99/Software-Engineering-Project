import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button,Container} from 'react-bootstrap';

export default function NavBar(){
//   render() {
    return (
      <div>
        <Navbar bg = "dark" expand="lg">
      <Container fluid style={ {height:'120%'}}>
        <Navbar.Brand className ="text-light"href="#">TradeTrackr</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 mx-auto"
            style={{ maxHeight:'100%'}}
            navbarScroll
          >
            {/* <ul className="mx-auto"> */}
            <Nav.Link className ="text-light fs-4 px-3" href="#action1">Dashboard</Nav.Link>
            <Nav.Link className ="text-light fs-4 px-3" href="#action2">Holdings</Nav.Link>
            <Nav.Link className ="text-light fs-4 px-3" href="#action3">Funds</Nav.Link>
            <Nav.Link className ="text-light fs-4 px-3" href="#action4">Watchlist</Nav.Link>
            {/* </ul> */}
           
            <NavDropdown  
                 title= {
                    <span className='text-light fs-4 px-4'>Profile</span>

                 }  className = 'ms-auto' id="navbarScrollingDropdown">
             
              <NavDropdown.Item  href="#action3">My Account</NavDropdown.Item>
              <NavDropdown.Item   href="#action4">
                Log In
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
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
