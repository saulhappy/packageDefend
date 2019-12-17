import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import { About } from "./containers/About";
import SignupLogin from "./containers/SignupLogin/index";
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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/signuplogin" component={SignupLogin} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
