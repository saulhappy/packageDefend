import React, { Component } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "./style.css";

export class OrdersContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      clickedOrderId: null,
      showOrderDetails: false,
      orderDetailsOrderId: null,
      orderDetailsListingId: null,
      orderDetailsSender: null,
      orderDetailsStatus: null,
      orderDetailsNameOnPack: null,
      orderDetailsEta: null,
      orderDetailsMeeting: null,
      orderDetailsRating: null
    };
  }

  toggeleOrderInfo(order_id) {
    this.setState({
      clickedOrderId: order_id,
      showOrderDetails: !this.state.showOrderDetails
    });
  }

  fetchOrderDetails() {
    fetch(`http://localhost:3000/api/orders/${this.state.clickedOrderId}`)
      .then(response => response.json())
      .then(data => this.setOrderDetails(data));
  }

  setOrderDetails(data) {
    this.setState({
      orderDetailsOrderId: data.order.id,
      orderDetailsListingId: data.order.listing_id,
      orderDetailsSender: data.order.sender,
      orderDetailsStatus: data.order.status,
      orderDetailsNameOnPack: data.order.name_on_pack,
      orderDetailsEta: data.order.eta,
      orderDetailsMeeting: data.order.meeting,
      orderDetailsRating: data.order.rating,
      clickedOrderId: null
    });
  }

  render() {
    console.log("order container state: ", this.state);
    console.log("order container props: ", this.props);
    this.state.clickedOrderId && this.fetchOrderDetails();
    const showOrderDetails = this.state.showOrderDetails;
    if (this.props.userState.userOrders) {
      return (
        <React.Fragment>
          {showOrderDetails === true ? (
            <div>
              <Container>
                <Row className="justify-content-md-center">
                  <strong>
                    <Col md="auto">Order Detials</Col>
                  </strong>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    Listing No:{" "}
                    <a href="/">{this.state.orderDetailsListingId}</a>
                  </Col>
                  <Col xs lg="3">
                    Package From: {this.state.orderDetailsSender}
                  </Col>
                  <Col xs lg="3">
                    Package For: {this.state.orderDetailsNameOnPack}
                  </Col>
                  <Col xs lg="3">
                    Order Status: {this.state.orderDetailsStatus}
                  </Col>
                  <Col xs lg="3">
                    Package ETA: {this.state.orderDetailsEta}
                  </Col>
                  <Col xs lg="3">
                    Order Rating: {this.state.orderDetailsRating}
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col xs lg="4">
                    Package Pickup Date: {this.state.orderDetailsMeeting}
                  </Col>
                </Row>
              </Container>
            </div>
          ) : null}

          <div>
            <br></br>
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
                {this.props.userState.userOrders.map((order, i) => (
                  <tr
                    className="clickable-row"
                    key={i}
                    onClick={() => this.toggeleOrderInfo(order.id)}
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
