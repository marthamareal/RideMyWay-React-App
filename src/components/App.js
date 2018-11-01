import React, { Component } from "react";
import "../static/App.css";
import { Route } from "react-router-dom";
import Header from "./base/Header";
import Home from "./Home";
import CreateRide from "./rides/CreateRide";
import ContactUs from "./base/ContactUs";
import AboutUs from "./base/AboutUs";
import Signup from "./auth/Signup";
import Profile from "./auth/Profile";
import ShowRide from "./rides/ShowRide";
import RideRequests from "./rides/RideRequests";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path={"/"}
          component={localStorage.getItem("token") ? Profile : Home}
        />
        <Route path={"/create-ride"} component={CreateRide} />
        <Route path={"/contact-us"} component={ContactUs} />
        <Route path={"/about-us"} component={AboutUs} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/show-ride/:rideId"} component={ShowRide} />
        <Route path={"/edit-ride/:rideId"} component={CreateRide} />
        <Route path={"/requests/:rideId"} component={RideRequests} />
      </div>
    );
  }
}

export default App;
