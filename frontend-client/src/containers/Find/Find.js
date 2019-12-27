import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { Button } from "react-bootstrap";
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

  console.log("from find: ", props);
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic2F1bGhhcHB5IiwiYSI6ImNrNG15OGV4YzA0MzMzanBiOHJsMWJ6N24ifQ.nTUuXzPsstEFrfWtH7XnaA"
        }
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
        {selectedDefender ? (
          <Popup
            latitude={parseFloat(selectedDefender.user.lat)}
            longitude={parseFloat(selectedDefender.user.long)}
            // POP UP LINK/BUTTONS DONT WORK IF THIS IS ACTIVE
            // onClose={() => {
            //   setSelectedDefender(null);
            // }}
          >
            <div>
              <img src={selectedDefender.user.pic_link} alt=""></img>
              <h3>{selectedDefender.user.f_name}</h3>
              <h5>Defender Rating: {selectedDefender.user.rating}</h5>
              <p>{selectedDefender.user.address}</p>
              <p> Price per package: {`$${selectedDefender.price}`}</p>
              <p> Max Hold Time: {selectedDefender.max_hold}</p>
              <Button
                variant="secondary"
                onClick={listing =>
                  sendClickedDefenderListing(selectedDefender)
                }
              >
                Defend packages with me!
              </Button>
            </div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}

export default withRouter(Find);
