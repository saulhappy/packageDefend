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
      logged_in: true,
      user: null,
      userOrders: null,
      userListings: null
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus() {}

  setUserState = newUser => {
    this.setState({
      logged_in: true,
      user: newUser
    });
  };

  logOutUser = user => {
    console.log("logging out user");
    localStorage.removeItem("user_id");
  };

  render() {
    console.log(this.state);
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
                {" "}
                <LogInForm setUserState={this.setUserState} />{" "}
              </Route>
              {this.state.logged_in ? (
                <Route exact path="/users/home" component={Home} />
              ) : (
                <Route component={NotFound} />
              )}

              {/* <Route exact path="/users/home" component={Home} /> */}
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
