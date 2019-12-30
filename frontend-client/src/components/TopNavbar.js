import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const TopNavbar = props => (
  <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
    {console.log("from Navbar: ", props)}
    <Navbar.Brand href="/">PackageDefend</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {props.appState.logged_in ? (
          <Nav.Link href="/users/home">Your Dashboard</Nav.Link>
        ) : (
          <Nav.Link href="/users/new">Sign Up</Nav.Link>
        )}
        {props.appState.logged_in ? (
          <Nav.Link onClick={props.logOutUser} href="/logout">
            Logout
          </Nav.Link>
        ) : (
          <Nav.Link href="/users/login">Login</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
