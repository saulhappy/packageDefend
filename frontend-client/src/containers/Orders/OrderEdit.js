import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Form, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router";

export class OrderEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: null,
      nameOnPack: null,
      status: null,
      eta: null,
      meeting: null,
      rating: null
    };
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sendUpdatedOrder = updatedOrder => {
    this.props.updateUserOrdersState(updatedOrder);
  };

  handleSubmit = e => {
    e.preventDefault();

    let orderEdit = {
      listing_id: this.props.appState.orderBeingEditListingID,
      user_id: this.props.appState.user.id,
      sender: this.state.sender
        ? this.state.sender
        : this.props.appState.orderBeingEdit.sender,
      name_on_pack: this.state.nameOnPack
        ? this.state.nameOnPack
        : this.props.appState.orderBeingEdit.name_on_pack,
      status: this.state.status
        ? this.state.status
        : this.props.appState.orderBeingEdit.status,
      eta: this.state.eta
        ? this.state.eta
        : this.props.appState.orderBeingEdit.eta,
      meeting: this.state.meeting
        ? this.state.meeting
        : this.props.appState.orderBeingEdit.meeting,
      rating: this.state.rating
        ? this.state.rating
        : this.props.appState.orderBeingEdit.rating
    };
    console.log(orderEdit);

    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(orderEdit)
    };

    fetch(
      `http://localhost:3000/api/orders/update/${this.props.appState.orderBeingEdit.id}`,
      configObject
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.status === 204 && this.props.history.push("/order/updated");
        this.sendUpdatedOrder(data.order);
      })
      .catch(error => console.log("api errors:", error));
  };

  render() {
    console.log("from order edit props", this.props);
    const {
      id,
      sender,
      name_on_pack: nameOnPack,
      eta,
      status,
      meeting,
      rating,
      created_at
    } = this.props.appState.orderBeingEdit;
    const {
      f_name,
      l_name,
      rating: listing_rating,
      email,
      pic_link
    } = this.props.appState.orderBeingEditListing.user;
    return (
      <div>
        <Link to="/orders/history">Return to all your packages defended</Link>
        <br></br>
        <br></br>
        <h3>Update This Package Defend Order</h3>
        <br></br>
        <br></br>
        <h5>This Pacakge is being defended by {`${f_name} ${l_name}`} </h5>
        <img src={pic_link} alt=""></img>
        <br></br>
        <span>
          {" "}
          <strong>Rating: </strong> {`${listing_rating}`}
        </span>
        <p>
          <span>
            {" "}
            <strong>Contact: </strong> {`${email}`}
          </span>
        </p>
        <br></br>
        <br></br>
        <h5>Current Order Information:</h5>

        <Table bordered responsive>
          <thead>
            <tr>
              <th>Defend Order Date</th>
              <th>Sender</th>
              <th>Name on Package</th>
              <th>Status</th>
              <th>Package ETA</th>
              <th>Meeting Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr key={id}>
              <td>{created_at.substr(0, 10)}</td>
              <td>{sender}</td>
              <td>{nameOnPack}</td>
              <td>{status}</td>
              <td>{eta}</td>
              <td>{meeting}</td>
              <td>{rating ? rating : "Unrated"}</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <h3>Update this order below</h3>
        <br></br>

        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Sender</Form.Label>
              <Form.Control
                name="sender"
                type="text"
                placeholder={sender}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Name on Package</Form.Label>
              <Form.Control
                name="nameOnPack"
                type="text"
                placeholder={nameOnPack}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Estimated Delivery Date</Form.Label>
              <Form.Control
                name="eta"
                type="date"
                placeholder={eta}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                Package Pickup Date - guesstimate is fine!
              </Form.Label>
              <Form.Control
                name="meeting"
                type="date"
                placeholder={meeting}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="status"
                as="select"
                onChange={this.handleChange}
              >
                <option>Order Sent to Defender</option>
                <option>Confirmed</option>
                <option>Package In Transit</option>
                <option>Package Arrived</option>
                <option>Complete</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                name="rating"
                as="select"
                onChange={this.handleChange}
              >
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button variant="dark" type="submit" id="otherButtons">
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

export default withRouter(OrderEdit);
