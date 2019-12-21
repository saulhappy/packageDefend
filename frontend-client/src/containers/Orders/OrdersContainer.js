import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./style.css";

export class OrdersContainer extends Component {
  render() {
    if (this.props.userState.userOrders) {
      return (
        <React.Fragment>
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
                {this.props.userState.userOrders.map((order, i) => (
                  <tr
                    className="clickable-row"
                    key={i}
                    onClick={() => this.props.clickedOrderId(order.id)}
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
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div>
            <h6>You have no orders</h6>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default OrdersContainer;
