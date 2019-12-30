import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SignUpForm from "../Signup/SignUpForm";
import { Stats } from "../../components/Stats";

export class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <h1 className="center">PORCH PIRACY IS OUT OF CONTROL</h1>
            <br></br>
            <h3>For instance...did you know...</h3>

            <Stats />

            <h3>Defend your packages from porch pirates like this guy...</h3>
            <br></br>
            <br></br>
            <p>
              <img
                className="center"
                src="https://mynorthwest.com/wp-content/uploads/2019/08/package-thieves.jpg"
                alt=""
              ></img>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
              <h2>PackageDefend was created to combat this problem</h2>
              <br></br>
              <p>
                PackageDefend connects people able to receive packages during
                working hours with those who cannot. People in your neighborhood
                signup and commit to receive your packages while you go about
                your day. Then, you schedule a time when it's convenient to you
                both for you to pick up your package. That simple!
              </p>
              <br></br>
              <br></br>
              <h3>How it works</h3>
            </div>
          </div>
          <h5>It's easy to begin defending your packages:</h5>
          <br></br>
          <p>Step 1: Login or Signup to find PackageDefenders</p>
          <p>Step 2: Find a PackageDefender convenient to you</p>
          <p>
            Step 3: Submit an easy order form with the package information and
            pay your defender's low fee. Most start at about $1/package
          </p>
          <p>Step 4: Pickup your package at a convenient time!</p>
          <br></br>
          <br></br>
          <Link to="/users/login">Click Here to Login!</Link>
          <br></br>
          <br></br>
          <h2>or...</h2>
          <br></br>
          <br></br>
          <SignUpForm />
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Landing);
