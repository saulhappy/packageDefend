import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      favCheck: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange = event => {
    const target = event.target;
    const checked = target.checked;
    const name = target.name;
    this.setState({
      [name]: checked
    });
    if (!this.state.favCheck) {
      this.props.addFav(this.props.selectedListing);
    }
  };

  render() {
    return (
      <div>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="favCheck"
            label="Favorite"
            onChange={this.handleCheckboxChange}
          />
        </Form.Group>
      </div>
    );
  }
}

export default Favorite;
