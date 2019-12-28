import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

export class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: null,
      l_name: null,
      address: null,
      email: null
    };
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let userEdit = {
      f_name: this.state.f_name ? this.state.f_name : this.props.user.f_name,
      l_name: this.state.l_name ? this.state.l_name : this.props.user.l_name,
      address: this.state.address
        ? this.state.address
        : this.props.user.address,
      email: this.state.email ? this.state.email : this.props.user.email
    };
    console.log(userEdit);

    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userEdit)
    };

    fetch(
      `http://localhost:3000/api/users/update/${this.props.user.id}`,
      configObject
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.status === 204 && this.props.history.push("/user/updated");
      })
      .catch(error => console.log("api errors:", error));
  };

  render() {
    const { f_name, l_name, address, email } = this.props.user;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="f_name"
                type="text"
                placeholder={f_name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="l_name"
                type="text"
                placeholder={l_name}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder={address}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder={email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default UserEdit;
