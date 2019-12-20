import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { OrdersContainer } from "../Orders/OrdersContainer";

export class Home extends Component {
  render() {
    console.log("from home: ", this.props.userState);
    return (
      <React.Fragment>
        <div>
          <h3>{`${this.props.userState.user.f_name}'s`} activity</h3>
          <p>Your balance: {`${this.props.userState.user.balance}`}</p>
          <br></br>
          <Container>
            <Row>
              <Col>
                <Button variant="secondary" size="lg">
                  {" "}
                  Find Package Defenders
                </Button>
              </Col>

              <Col>
                {" "}
                <Button variant="secondary" size="lg">
                  {" "}
                  Your <span>❤</span> Defenders
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
        <OrdersContainer userOrders={this.props.userState.userOrders} />
      </React.Fragment>
    );
  }
}

export default Home;
