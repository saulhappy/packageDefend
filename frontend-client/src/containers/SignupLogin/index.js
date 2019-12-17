import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./style.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      f_name: null,
      l_name: null,
      email: null,
      password: null,
      address: null,
      formErrors: {
        f_name: "",
        l_name: "",
        email: "",
        password: "",
        address: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "f_name":
        formErrors.f_name = value.length < 1 ? "First Name is required" : "";
        break;
      case "l_name":
        formErrors.l_name = value.length < 1 ? "Last Name is required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "That doesn't look like a valid email address. Please try again.";
        break;
      case "password":
        formErrors.password = value.length < 1 ? "A password is required" : "";
        break;
      case "address":
        formErrors.address = value.length < 1 ? "An address is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.f_name}
        Last Name: ${this.state.l_name}
        Email: ${this.state.email}
        Password: ${this.state.password}
        Address: ${this.state.address}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render() {
    const { formErrors } = this.state;

    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className={
                  formErrors.f_name.length > 0
                    ? "signup-create-errorBorder"
                    : null
                }
                name="f_name"
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
              />
              {formErrors.f_name.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.f_name}
                </span>
              )}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="l_name"
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
              {formErrors.l_name.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.l_name}
                </span>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.email}
                </span>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.password}
                </span>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword1">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                name="passwordConf"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              type="text"
              placeholder="1234 Main Street Your City, Your St Zip Code"
              onChange={this.handleChange}
            />
            {formErrors.address.length > 0 && (
              <span className="signup-create-errorMessage">
                {formErrors.address}
              </span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up!
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
        {/* <Form>
          <h2>Login</h2>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Login!
          </Button>
        </Form> */}
      </React.Fragment>
    );
  }
}

export default Signup;
