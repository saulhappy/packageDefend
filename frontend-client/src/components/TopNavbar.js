import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #aaaaaa;
    &:hover {
      color: #fcf8f7;
    }
  }
  ,
  .sticky-nav {
    position: sticky;
    top: 0;
  }
`;

export const TopNavbar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <Nav.Link>
          <Link to="/">PackageDefend</Link>
        </Nav.Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/signup">Signup</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
