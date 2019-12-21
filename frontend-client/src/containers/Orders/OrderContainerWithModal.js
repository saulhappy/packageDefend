import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import "./style.css";

export function OrdersContainer(props) {
  console.log("from Orders Container: ", props);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  if (props.userState.userOrders) {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <React.Fragment>
          <div>
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>Defend Order Date</th>
                  <th>Sender</th>
                  <th>Status</th>
                  <th>Package ETA</th>
                  <th>Meeting Date</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {props.userState.userOrders.map((order, i) => (
                  <tr
                    className="clickable-row"
                    key={i}
                    onClick={() => handleShow()}
                  >
                    <td>{order.created_at.substr(0, 10)}</td>
                    <td>{order.sender}</td>
                    <td>{order.status}</td>
                    <td>{order.eta}</td>
                    <td>{order.meeting}</td>
                    <td>{order.rating ? order.rating : "Unrated"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </React.Fragment>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          <h6>You have no orders</h6>
        </div>
      </React.Fragment>
    );
  }
}

export default OrdersContainer;
