import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div>
    <h2>nothing to see here friend ¯\_(ツ)_/¯ </h2>
    <br></br>
    <Link to="/">
      <Button bg="dark" variant="dark" type="submit" id="otherButtons">
        Go Home
      </Button>
    </Link>
    <br></br>
    <br></br>
    <p>or</p>
    <a href="/users/login">Log In</a>
  </div>
);
