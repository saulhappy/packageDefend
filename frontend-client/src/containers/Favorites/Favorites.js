import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import FavoriteCard from "../../components/Favorites/FavoriteCard";

export class Favorites extends Component {
  render() {
    console.log("from favorites props: ", this.props);
    let favCards = this.props.appState.userFavs;
    return this.props.appState.userFavs.length > 0 ? (
      <Container>
        <div>
          <Link to="/users/home">Return to Your Dashboard</Link>
        </div>
        <br></br>
        <br></br>
        <h2>Your Favorite Package Defenders</h2>
        <br></br>
        <br></br>

        <CardDeck>
          {favCards.map(fav => (
            <FavoriteCard
              key={fav.id}
              fav={fav}
              removeFav={this.props.removeFav}
            />
          ))}
        </CardDeck>
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
