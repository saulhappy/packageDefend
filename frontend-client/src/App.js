import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./containers/Landing/Landing";
import SignUpForm from "./containers/Signup/SignUpForm";
import Success from "./containers/Signup/success";
import OrderSuccess from "./containers/Orders/OrderSuccess";
import LogInForm from "./containers/Login/LogInForm";
import { Home } from "./containers/Home/home";
import Logout from "./containers/Logout/Logout";
import { NotFound } from "./containers/NotFound/NotFound";
import { Layout } from "./components/Layout";
import { TopNavbar } from "./components/TopNavbar";
import { Jumbotron } from "./components/Jumbotron";
import Find from "./containers/Find/Find";
import OrderForm from "./containers/Orders/OrderForm";
import OrderHistory from "./containers/Orders/OrderHistory";
import OrderEdit from "./containers/Orders/OrderEdit";
import OrderUpdated from "./containers/Orders/OrderUpdated";
import UserUpdated from "./containers/Users/UserUpdated";
import User from "./containers/Users/User";
import UserEdit from "./containers/Users/UserEdit";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      logged_in: false,
      user: null,
      userOrders: null,
      userListings: null,
      userFavs: null,
      allListings: null,
      clickedDefenderListing: null,
      clickedOrder: null,
      orderBeingEdit: null,
      orderBeingEditListingID: null,
      orderBeingEditListing: null
    };
  }
  setUserState = newUser => {
    this.setState({
      logged_in: true,
      user: newUser
    });
  };
  setUserOrderState = newUserOrders => {
    this.setState({
      userOrders: newUserOrders
    });
  };
  setUserListingState = newUserListings => {
    this.setState({
      userListings: newUserListings
    });
  };
  setUserFavsState = newUserFavs => {
    this.setState({
      userFavs: newUserFavs
    });
  };

  logOutUser = user => {
    localStorage.removeItem("user_id");
  };

  setClickedDefenderListing = listing => {
    this.setState({
      clickedDefenderListing: listing
    });
  };

  setClickedOrder = order_id => {
    this.setState({
      clickedOrder: order_id
    });
    this.setOrderBeingEdit(order_id);
  };

  setAllListings = data => {
    this.setState({
      allListings: data
    });
  };

  setOrderBeingEdit(order_id) {
    this.state.userOrders.forEach(order => {
      if (order.id === order_id) {
        this.setState({
          orderBeingEdit: order,
          orderBeingEditListingID: order.listing_id
        });
        this.setOrderBeingEditListing(order.listing_id);
      }
    });
  }

  setOrderBeingEditListing(listing_id) {
    this.state.allListings.forEach(listing => {
      if (listing.id === listing_id) {
        this.setState({
          orderBeingEditListing: listing
        });
      }
    });
  }

  updateUserOrdersState = updatedOrder => {
    this.state.userOrders.forEach(order => {
      if (order.id === updatedOrder.id) {
        this.setState({
          userOrders: this.state.userOrders.filter(
            order => order.id !== updatedOrder.id
          )
        });
        this.setState({
          userOrders: [...this.state.userOrders, updatedOrder]
        });
      }
    });
  };

  updateUserState = updatedUser => {
    this.setState({
      user: updatedUser
    });
  };

  render() {
    console.log("app's state: ", this.state);
    return (
      <React.Fragment>
        <Router>
          <TopNavbar appState={this.state} logOutUser={this.logOutUser} />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/users/new" component={SignUpForm} />
              <Route exact path="/order/updated" component={OrderUpdated} />
              <Route exact path="/user/updated" component={UserUpdated} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orders/success" component={OrderSuccess} />
              <Route exact path="/users/login">
                <LogInForm
                  setUserState={this.setUserState}
                  setUserOrderState={this.setUserOrderState}
                  setUserListingState={this.setUserListingState}
                  setUserFavsState={this.setUserFavsState}
                  setAllListings={this.setAllListings}
                />
              </Route>
              {this.state.logged_in && (
                <Route exact path="/users/home">
                  <Home userState={this.state} />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/orders/history">
                  <OrderHistory
                    userOrders={this.state.userOrders}
                    setClickedOrder={this.setClickedOrder}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/order/edit">
                  <OrderEdit
                    appState={this.state}
                    updateUserOrdersState={this.updateUserOrdersState}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/user/account/edit">
                  <UserEdit />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/find">
                  <Find
                    allListings={this.state.allListings}
                    setClickedDefenderListing={this.setClickedDefenderListing}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/user/account">
                  <User
                    appState={this.state}
                    updateUserState={this.updateUserState}
                  />
                </Route>
              )}

              <Route exact path="/order">
                <OrderForm appState={this.state} />
              </Route>

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
