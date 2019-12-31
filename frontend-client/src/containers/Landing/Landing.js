import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SignUpForm from "../Signup/SignUpForm";
import { Stats } from "../../components/Stats";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

export class Landing extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1>PORCH PIRACY IS OUT OF CONTROL!</h1>
          </Col>
        </Row>
        <br></br>

        <Stats />
        <br></br>
        <br></br>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h3>Defend your packages from porch pirates like this guy...</h3>
          </Col>
        </Row>

        <br></br>
        <br></br>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <img
              className="center"
              src="https://mynorthwest.com/wp-content/uploads/2019/08/package-thieves.jpg"
              alt=""
            ></img>
          </Col>
        </Row>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h2>PackageDefend was created to combat this problem</h2>
        <br></br>
        <p>
          PackageDefend connects people able to receive packages during working
          hours with those who cannot. People in your neighborhood signup and
          commit to receive your packages while you go about your day. Then, you
          schedule a time when it's convenient to you both for you to pick up
          your package. That simple!
        </p>
        <br></br>
        <br></br>
        <h3>How it works</h3>

        <h5>It's easy to begin defending your packages:</h5>
        <br></br>
        <p>Step 1: Login or Signup to find PackageDefenders</p>
        <p>Step 2: Find a PackageDefender convenient to you</p>
        <p>
          Step 3: Submit an easy order form with the package information and pay
          your defender's low fee. Most start at about $1/package
        </p>
        <p>Step 4: Pickup your package at a convenient time!</p>
        <br></br>
        <br></br>
        <Link to="/users/login">Click Here to Login!</Link>
        <br></br>
        <br></br>
        <h2>or...</h2>
        <br></br>
        <br></br>
        <SignUpForm />
      </Container>
    );
  }
}
export default withRouter(Landing);
