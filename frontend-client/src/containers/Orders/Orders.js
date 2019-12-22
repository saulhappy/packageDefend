import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Orders extends Component {
  render() {
    console.log("from orders component: ", this.props);
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">Order Details</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col md="auto">Variable width content</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
}

export default Orders;
