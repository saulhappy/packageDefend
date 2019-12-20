import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./containers/Landing";
import { About } from "./containers/About";
import SignUpForm from "./containers/Signup/SignUpForm";
import Success from "./containers/Signup/success";
import LogInForm from "./containers/Login/LogInForm";
import { Home } from "./containers/Home/home";
import Logout from "./containers/Logout";
import { NotFound } from "./containers/NotFound";
import { Layout } from "./components/Layout";
import { TopNavbar } from "./components/TopNavbar";
import { Jumbotron } from "./components/Jumbotron";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      logged_in: false,
      user: null,
      userOrders: null,
      userListings: null
    };
  }
  setUserState = newUser => {
    this.setState({
      logged_in: true,
      user: newUser
    });
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/users/${localStorage.getItem("user_id")}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userOrders: data.orders,
          userListings: data.listings
        });
      });
  }

  logOutUser = user => {
    localStorage.removeItem("user_id");
  };

  render() {
    console.log("app's state: ", this.state);
    return (
      <React.Fragment>
        <Router>
          <TopNavbar user={this.state.user} logOutUser={this.logOutUser} />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/users/new" component={SignUpForm} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/users/login">
                <LogInForm setUserState={this.setUserState} />
              </Route>
              {this.state.logged_in && (
                <Route exact path="/users/home">
                  <Home userState={this.state} />
                </Route>
              )}
              <Route exact path="/logout" component={Logout} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
