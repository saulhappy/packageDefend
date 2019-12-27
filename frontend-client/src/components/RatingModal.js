import React, { Component } from "react";
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class RatingModal extends Component {
  constructor() {
    super();
    this.state = {
      Rating: null,
      showRatingModal: false
    };
  }

  fieldChange = e => {
    this.setState({ Rating: e.target.value });
  };

  updateRating = () => {
    this.props.handleRatingPost(this.state.Rating);
    this.props.toggleShowRatingModal(this.state.showRatingModal);
  };

  render() {
    console.log("rating modal props: ", this.props);
    return (
      <Modal
        isOpen={this.props.showRatingModal}
        toggle={this.props.toggleShowRatingModal}
      >
        <ModalHeader toggle={this.props.toggleModal}>
          Update Order Rating
        </ModalHeader>
        <ModalBody>Select Rating of 1-5 for this Package Defender</ModalBody>
        <ModalFooter>
          <Input type="select" onChange={this.fieldChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
          <Button bg="dark" variant="dark" onClick={this.updateRating}>
            Update Defender Rating
          </Button>{" "}
        </ModalFooter>
      </Modal>
    );
  }
}

export default RatingModal;
