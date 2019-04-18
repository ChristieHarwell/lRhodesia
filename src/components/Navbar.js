import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
// import { buttonContainer } from './Button';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="the-nav">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link href="#home">Products</Nav.Link>
            <NavDropdown title="Notes" variant="light" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Sandalwood" target="blank">Sandalwood</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Vanilla" target="blank">Vanilla</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Amber" target="blank">Amber</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Patchouli" target="blank">Patchouli</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Musk" target="blank">Musk</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Sale</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>

          <Nav className="mr-sm-2 mr-auto">
            <NavDropdown title="Sign in" variant="light" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Your Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wish List</NavDropdown.Item>
            </NavDropdown>   

            <buttonContainer>
              <Button variant="light" href="#" alt="cart button">
                <i class="fas fa-shopping-bag fa-lg"></i>
              </Button>
            </buttonContainer>              
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--lightGrey);
  .nav-link{
    color: var(--red)!important;
  }
  .the-nav{
    text-transform: capitalize;
  }
`;