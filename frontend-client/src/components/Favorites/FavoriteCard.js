import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export class FavoriteCard extends Component {
  render() {
    const {
      lst_f_name,
      lst_email,
      lst_address,
      lst_rating,
      lst_pic_link,
      created_at
    } = this.props.fav;
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={lst_pic_link} />
          <Card.Body>
            <Card.Title>{lst_f_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Rating: {lst_rating}
            </Card.Subtitle>
            <Card.Text>{lst_address}</Card.Text>
            <Card.Text>{lst_email}</Card.Text>
            <Card.Footer>
              <small className="text-muted">
                Added: {created_at.substr(0, 10)}
              </small>
            </Card.Footer>
            <br></br>
            <br></br>
            <Button
              variant="danger"
              id="otherButtons"
              onClick={fav => this.props.removeFav(this.props.fav)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default FavoriteCard;
