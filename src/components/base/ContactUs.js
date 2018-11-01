import React from "react";

class ContactUs extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="signup-login contact-us">
          <h6>CONTACT US</h6>
          <br />
          <form>
            <div className={"row"}>
              <label>Your Email</label>
              <input type="email" placeholder="youremail@gmail.com" />
            </div>
            <div className={"row"}>
              <label>Message:</label>
              <br />
              <textarea title="Message" />
              <br />
            </div>

            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
