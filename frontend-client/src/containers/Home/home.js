import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>{`${this.props.userState.user.f_name}'s`} Dashboard </h3>
          <p>Your balance: {`${this.props.userState.user.balance}`}</p>
          <br></br>
          <Container>
            <Row>
              <Col>
                <Link to="/find">
                  <Button variant="secondary" size="lg">
                    {" "}
                    Find Package Defenders
                  </Button>
                </Link>
              </Col>

              <Col>
                {" "}
                <Button variant="secondary" size="lg">
                  {" "}
                  Your{" "}
                  <span role="img" aria-label="heart">
                    ❤
                  </span>{" "}
                  Defenders
                </Button>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Link to="/orders/history">
                  <Button variant="secondary" size="lg">
                    {" "}
                    Packages Defended{" "}
                    <span role="img" aria-label="package">
                      📦
                    </span>
                  </Button>
                </Link>
              </Col>
              <Col>
                {" "}
                <Link to="/user/account">
                  <Button variant="secondary" size="lg">
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
