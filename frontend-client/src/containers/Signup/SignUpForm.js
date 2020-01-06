import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
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

class SignupForm extends Component {
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
    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      let newUser = {
        f_name: this.state.f_name,
        l_name: this.state.l_name,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address
      };

      const configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newUser)
      };

      fetch("http://localhost:3000/api/users/new", configObject).then(
        response =>
          response.json().then(data => {
            console.log(data);
            data.status === 200
              ? this.props.history.push("/success")
              : this.props.history.push("/signup");
          })
      );
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <h2>Create an Account</h2>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className={
                  formErrors.f_name.length > 0
                    ? "signup-create-errorBorder"
                    : null
                }
                isInvalid={formErrors.f_name}
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
          <br></br>
          <Button bg="dark" variant="dark" type="submit" id="otherButtons">
            Sign Me Up!
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default withRouter(SignupForm);
