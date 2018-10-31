import React from 'react'

class ContactUs extends React.Component {
    render() {
        return (
            <div className="content">

                <div className="signup-login contact-us">
                    <center><h4>CONTACT US</h4></center>
                    <form >
                        <label>Your Email</label>
                        <input type="email" placeholder="youremail@gmail.com"/>
                        <label>Message:</label><br/>
                        <textarea title="Message" /><br/>
                        <input type="submit" value="SUBMIT"/>
                    </form>
                </div>

            </div>
    )
    }
}

export default ContactUs;