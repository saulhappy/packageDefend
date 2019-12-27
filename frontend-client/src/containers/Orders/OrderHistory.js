import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

export class OrderHistory extends Component {
  render() {
    console.log(this.props);

    if (this.props.userOrders.length > 0) {
      return (
        <div>
          <Link to="/users/home">Return to Your Dashboard</Link>
          <br></br>
          <br></br>
          <h3>Packages Defended</h3>
          <br></br>
          <br></br>
          <h5>Click on any order to view more info and edit</h5>
          <br></br>
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
              {this.props.userOrders.map(order => (
                <tr
                  className="clickable-row"
                  key={order.id}
                  onClick={() => this.props.setClickedOrder(order.id)}
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
    } else {
      return (
        <React.Fragment>
          <div>
            <h6>You have no orders</h6>
            <br></br>
            <Link to="/users/home">Return to Your Dashboard</Link>
            <br></br>
            <p>or</p>
            <Link to="/find">Find Package Defenders!</Link>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default OrderHistory;
