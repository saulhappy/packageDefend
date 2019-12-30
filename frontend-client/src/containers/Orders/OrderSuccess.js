import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Success extends Component {
  render() {
    return (
      <div>
        <h2>Request for Package Defense Sent!</h2>
        <br></br>
        <Link to="/users/home">Return to your dashboard</Link>
      </div>
    );
  }
}

export default Success;
