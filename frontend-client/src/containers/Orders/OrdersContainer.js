import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./style.css";
// import { Orders } from "../Orders/OrdersContainer";

export class OrdersContainer extends Component {
  render() {
    console.log("from order's container: ", this.props);
    return (
      <div>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Defend Order Date</th>
              <th>Sender</th>
              <th>Status</th>
              <th>Package ETA</th>
              <th>Meeting Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userOrders.map((order, i) => (
              <tr
                className="clickable-row"
                key={i}
                onClick={() => (window.location = "#")}
              >
                <td>{order.created_at.substr(0, 10)}</td>
                <td>{order.sender}</td>
                <td>{order.status}</td>
                <td>{order.eta}</td>
                <td>{order.meeting}</td>
                <td>{order.rating ? order.rating : "Unrated"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default OrdersContainer;
