import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UserUpdated extends Component {
  render() {
    return (
      <div>
        <h2>Account information updated!</h2>
        <br></br>
        <Link to="/home">Return to your dashboard</Link>
      </div>
    );
  }
}

export default UserUpdated;
