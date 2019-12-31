import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserEdit from "./UserEdit";

export class User extends Component {
  state = {
    showEdit: false
  };
  render() {
    const {
      f_name,
      l_name,
      address,
      email,
      rating,
      pic_link,
      created_at: memberSince
    } = this.props.appState.user;
    return (
      <div>
        <Link to="/users/home">Return to Your Dashboard</Link>
        <br></br>
        <br></br>
        <h3>Your Account Information</h3>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <img src={pic_link} alt=""></img>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <p>Member Since: {memberSince.substr(0, 10)}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>First Name: {f_name}</h5>
            </Col>
            <Col>
              <h5>Last Name: {l_name}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Address: {address}</h5>
            </Col>
            <Col>
              <h5>Email: {email}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Balance: {`$${this.props.appState.userBalance}`}</h5>
            </Col>
            <Col>
              <h5>Rating: {rating}</h5>
            </Col>
          </Row>
        </Container>

        <br></br>
        <br></br>
        <br></br>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => this.setState({ showEdit: !this.state.showEdit })}
        >
          Edit Your Account Information
        </Button>
        <br></br>
        <br></br>
        <br></br>
        {this.state.showEdit ? (
          <UserEdit
            user={this.props.appState.user}
            appState={this.props.appState}
            updateUserState={this.props.updateUserState}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(User);
