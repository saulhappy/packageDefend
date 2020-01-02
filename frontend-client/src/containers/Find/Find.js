import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Favorite from "../../components/Favorites/Favorite";
import "./style.css";

function Find(props) {
  const [viewport, setViewport] = useState({
    latitude: 30.218655,
    longitude: -97.687399,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });

  const [selectedDefender, setSelectedDefender] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedDefender(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const sendClickedDefenderListing = listing => {
    props.setClickedDefenderListing(listing);
    props.history.push("/order");
  };

  return (
    <Container>
      <Row>
        <div>
          <Link to="/users/home">Return to Your Dashboard</Link>
        </div>
        <br></br>
        <br></br>
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          mapStyle="mapbox://styles/saulhappy/ck4n33nkq0p791cmzwzkkb2xg"
        >
          {props.allListings.map(listing => (
            <Marker
              key={[listing.id]}
              latitude={parseFloat(listing.user.lat)}
              longitude={parseFloat(listing.user.long)}
            >
              <Button
                className="marker"
                onClick={e => {
                  e.preventDefault();
                  setSelectedDefender(listing);
                }}
              ></Button>
            </Marker>
          ))}
          {selectedDefender
            ? console.log("selectedDefender: ", selectedDefender)
            : null}
          {selectedDefender ? (
            <Popup
              latitude={parseFloat(selectedDefender.user.lat)}
              longitude={parseFloat(selectedDefender.user.long)}
              closeOnClick={false}
              onClose={() => {
                setSelectedDefender(null);
              }}
            >
              <div>
                <img src={selectedDefender.user.pic_link} alt=""></img>
                <br></br>

                <Favorite
                  selectedListing={selectedDefender}
                  addFav={props.addFav}
                />
                <h3>{selectedDefender.user.f_name}</h3>
                <h5>Defender Rating: {selectedDefender.user.rating}</h5>
                <p>{selectedDefender.user.address}</p>
                <p>
                  {" "}
                  Price per package defended: {`$${selectedDefender.price}`}
                </p>
                <p>
                  {" "}
                  How long I'll keep your package: {
                    selectedDefender.max_hold
                  }{" "}
                  days
                </p>
                <br></br>
                <Button
                  variant="dark"
                  onClick={listing =>
                    sendClickedDefenderListing(selectedDefender)
                  }
                  id="otherButtons"
                >
                  Defend packages with me!
                </Button>
              </div>
            </Popup>
          ) : null}
        </ReactMapGl>
      </Row>
    </Container>
  );
}

export default withRouter(Find);
