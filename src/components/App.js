import React, { Component } from 'react';
import '../static/App.css';
import {Route} from "react-router-dom";
import Header from "./base/Header";
import Home from "./Home";
import CreateRide from "./rides/CreateRide";
import ContactUs from "./base/ContactUs";
import AboutUs from "./base/AboutUs";
import Signup from "./auth/Signup";
import Profile from "./auth/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">

            <Header />
            <Route exact path={ '/' } component={localStorage.getItem('token')? Profile: Home}/>
            <Route path={ '/create-ride' } component={CreateRide}/>
            <Route path={ '/contact-us' } component={ContactUs}/>
            <Route path={ '/about-us' } component={AboutUs}/>
            <Route path={ '/signup' } component={Signup}/>

      </div>
    );
  }
}

export default App;
