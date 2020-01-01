import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>{`${this.props.userState.user.f_name}'s`} Dashboard </h3>
          <p>Your balance: {`$${this.props.userState.userBalance}`}</p>
          <br></br>
          <Container>
            <Row>
              <Col>
                <Link to="/find">
                  <Button variant="secondary" size="lg" id="myButton">
                    {" "}
                    Find Package Defenders
                  </Button>
                </Link>
              </Col>

              <Col>
                <Link to="/users/favorites">
                  <Button variant="secondary" size="lg" id="myButton">
                    {" "}
                    Your{" "}
                    <span role="img" aria-label="heart">
                      💕
                    </span>{" "}
                    Defenders
                  </Button>
                </Link>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Link to="/orders/history">
                  <Button variant="secondary" size="lg" id="myButton">
                    {" "}
                    Packages Defended{" "}
                    <span role="img" aria-label="package">
                      {" "}
                      📦
                    </span>
                  </Button>
                </Link>
              </Col>
              <Col>
                {" "}
                <Link to="/user/account">
                  <Button variant="secondary" size="lg" id="myButton">
                    {" "}
                    Your Account{" "}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
