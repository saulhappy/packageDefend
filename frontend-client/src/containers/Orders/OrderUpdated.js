import React, { Component } from "react";
import { Link } from "react-router-dom";

export class OrderUpdated extends Component {
  render() {
    return (
      <div>
        <h2>Order updated!</h2>
        <br></br>
        <Link to="/orders/history">Return to all your packages defended</Link>
      </div>
    );
  }
}

export default OrderUpdated;
