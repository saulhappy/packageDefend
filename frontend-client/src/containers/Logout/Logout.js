import React, { Component } from "react";

export default class Logout extends Component {
  render() {
    return (
      <div>
        <h2>Logged Out!</h2>
        <br></br>
        <a href="/users/login">Log Back In</a>
      </div>
    );
  }
}
