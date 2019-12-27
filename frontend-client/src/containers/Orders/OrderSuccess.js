import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Success extends Component {
  render() {
    return (
      <div>
        <h2>Request for Package Defense Sent!</h2>
        <br></br>
        <Link to="/users/home">
          <Button bg="dark" variant="dark" type="submit">
            Login
          </Button>
        </Link>
      </div>
    );
  }
}

export default Success;
