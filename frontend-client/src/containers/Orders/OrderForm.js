import { withRouter, Link } from "react-router-dom";
import React, { Component } from "react";
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sender: null,
      nameOnPack: null,
      eta: null,
      meeting: null,
      formErrors: {
        sender: "",
        nameOnPack: "",
        eta: "",
        meeting: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Sender":
        formErrors.f_name =
          value.length < 1
            ? "A sender is required (e.g. Amazon, Person's Name)"
            : "";
        break;
      case "nameOnPack":
        formErrors.nameOnPack =
          value.length < 1 ? "Name on Package is required" : "";
        break;
      case "eta":
        formErrors.eta =
          value.length < 1 ? "A delivery estimate is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };
  sendNewOrder = newOrder => {
    this.props.addNewOrderToState(newOrder);
  };

  sendNewUserBalance() {
    let newBalance =
      this.props.appState.userBalance -
      this.props.appState.clickedDefenderListing.price;
    this.props.updateUserBalance(newBalance);
  }

  sendUpdatedUser = updatedUser => {
    this.props.updateUserState(updatedUser);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      let newOrder = {
        sender: this.state.sender,
        nameOnPack: this.state.nameOnPack,
        eta: this.state.eta,
        meeting: this.state.meeting,
        listing_id: this.props.appState.clickedDefenderListing.id,
        user_id: this.props.appState.user.id,
        rating: null
      };

      const configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newOrder)
      };

      fetch("http://localhost:3000/api/orders/new", configObject).then(
        response =>
          response.json().then(data => {
            console.log(data);
            data.status === 200
              ? this.props.history.push("/orders/success")
              : this.props.history.push("/new_order_error");
            this.sendNewOrder(data.order);
            this.sendNewUserBalance();
          })
      );
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render() {
    console.log("from order form", this.props);
    const { formErrors } = this.state;

    return (
      <React.Fragment>
        <Link to="/find">Return to Map</Link>
        <br></br>
        <br></br>
        <Form onSubmit={this.handleSubmit}>
          <h3>
            Ask {`${this.props.appState.clickedDefenderListing.user.f_name}`} To
            Defend Your Package!
          </h3>
          <br></br>
          <br></br>
          <br></br>

          <Container>
            <Row>
              <Col md={1}>
                {" "}
                <img
                  src={this.props.appState.clickedDefenderListing.user.pic_link}
                  alt=""
                ></img>
              </Col>
              <Col md={{ span: 3, offset: 2 }}>
                {" "}
                <h5>
                  {`${this.props.appState.clickedDefenderListing.user.f_name}'s`}{" "}
                  rating:{" "}
                  {`${this.props.appState.clickedDefenderListing.user.rating}`}
                </h5>{" "}
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <strong>Address: </strong>
                {`${this.props.appState.clickedDefenderListing.user.address}`}
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <strong>Price per Package: </strong>
                {`$${this.props.appState.clickedDefenderListing.price}`}
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <strong>
                  No. of days I'll give you to pick up your package:{" "}
                </strong>
                {`${this.props.appState.clickedDefenderListing.max_hold}`}
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md={{ span: 3, offset: 3 }}>
                <strong>Email me at: </strong>
                {`${this.props.appState.clickedDefenderListing.user.email}`}
              </Col>
            </Row>
          </Container>

          <br></br>
          <br></br>
          <br></br>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Sender</Form.Label>
              <Form.Control
                className={
                  formErrors.sender.length > 0
                    ? "signup-create-errorBorder"
                    : null
                }
                isInvalid={formErrors.sender}
                name="sender"
                type="text"
                placeholder="Sender (e.g. Amazon, person's name)"
                onChange={this.handleChange}
              />
              {formErrors.sender.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.sender}
                </span>
              )}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Name on Package</Form.Label>
              <Form.Control
                name="nameOnPack"
                type="text"
                placeholder="Name on Package"
                onChange={this.handleChange}
              />
              {formErrors.nameOnPack.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.nameOnPack}
                </span>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Est. Delivery</Form.Label>
              <Form.Control
                name="eta"
                type="date"
                placeholder="DD/MM/YYYY"
                onChange={this.handleChange}
              />
              {formErrors.eta.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.eta}
                </span>
              )}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Est. Meeting</Form.Label>
              <Form.Control
                name="meeting"
                type="date"
                placeholder="DD/MM/YYYY - guesstimate is fine!"
                onChange={this.handleChange}
              />
              {formErrors.meeting.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.meeting}
                </span>
              )}
            </Form.Group>
          </Form.Row>
          <br></br>
          <Button bg="dark" variant="dark" type="submit" id="otherButtons">
            Defend my package!
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default withRouter(OrderForm);
