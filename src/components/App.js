import React, { Component } from 'react';
import '../static/App.css';
import {Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CreateRide from "./CreateRide";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
           <Route exact path={ '/' } component={Home}/>
            <Route path={ '/create-ride' } component={CreateRide}/>
            <Route path={ '/contact-us' } component={ContactUs}/>
            <Route path={ '/about-us' } component={AboutUs}/>

      </div>
    );
  }
}

export default App;
