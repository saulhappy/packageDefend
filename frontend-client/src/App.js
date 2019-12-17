import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./containers/Landing";
import { About } from "./containers/About";
import Signup from "./containers/Signup/index";
import Success from "./containers/Signup/success";
import Login from "./containers/Login/index";
import Home from "./containers/Home/index";
import { NotFound } from "./containers/NotFound";
import { Layout } from "./components/Layout";
import { TopNavbar } from "./components/TopNavbar";
import { Jumbotron } from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <TopNavbar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Home" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
