import React from 'react'
import logo from '../images/chil.png'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';


export default class NavbarComponent extends React.Component{
    render(){
        return(
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
      <img
        src={logo}
        width="100"
        height="auto"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
    <Navbar.Brand id='logo-title'href="/">Taco Haven</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/home/about-us">About</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/breakfast">Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="lunch">Lunch</NavDropdown.Item>
              <NavDropdown.Item href="/dinner">Dinner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        )
    }
}