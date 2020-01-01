import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favListings: null
    };
  }

  //   componentDidMount() {
  //     let favListings = [];
  //     if (this.props.appState.userFavs) {
  //       favListings.push(this.props.appState.userFavs.listing_id);
  //     }
  //     this.setState({
  //       favListings: favListings
  //     });
  //   }

  render() {
    console.log("from favorites props: ", this.props);
    console.log("from favorites state: ", this.state);
    return this.state.favListings ? (
      <Container>
        <div>
          <Link to="/users/home">Return to Your Dashboard</Link>
        </div>
        <br></br>
        <br></br>
        <h2>Your Favorite Package Defenders</h2>
        <br></br>
        <br></br>
      </Container>
    ) : (
      <Container>
        <div>
          <Link to="/users/home">Return to Your Dashboard</Link>
        </div>
        <br></br>
        <br></br>
        <h2>You have no saved favorites</h2>
        <br></br>
        <br></br>
      </Container>
    );
  }
}

export default withRouter(Favorites);
