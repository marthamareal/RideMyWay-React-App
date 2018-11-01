import React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="signup-login about-us">
          <h5>ABOUT US</h5>
          <br />
          <br />
          <p>
            Ride My Way is a product assignment given to Andela paticipants in
            Kampala cycle 9
          </p>
          <p>
            This assignment is meant to help us practice what we were reading in
            home study tests given at an earlier stage of application.{" "}
          </p>
          <br />
          <p>
            It is an application where you can sign in and start riding with
            your friends
          </p>
          <p>
            During the ride you can be a rider or a driver. The choice is yours
          </p>
          <p>
            When you are a driver, you can <a href="/create-ride">create</a> a
            ride and friend can join you.
          </p>
          <p>
            When you are a rider, you can <a href="/">request to join </a> a
            ride from a list of ride offers created by your friends.
          </p>
          <br />
          <center>
            <a href="/signup">
              <button id="about">Signup to get started</button>
            </a>
          </center>
          <br />
        </div>
      </div>
    );
  }
}

export default AboutUs;
