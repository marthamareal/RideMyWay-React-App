import React from 'react'
import logo from '../static/images/logo.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className="index-content">

                <div className="signup-login login-index">

                    <div id="form-head">
                        <img src={logo} id="logo" alt={'...'}/>
                        <h3>Ride-My-Way</h3>
                    </div>

                    <form id="login_form">
                        <center><h4>Login</h4></center>
                        <label>Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" autoFocus required />
                            <label>Password:</label>
                            <input type="password" id="password" name="password" placeholder="Create Password"
                                   minLength="8"
                                   required title="password length must be 8 ore more" />
                                <div id="loading">
                                    <a>please wait </a>
                                    <a className="dot1">.</a>
                                    <a className="dot2">.</a>
                                    <a className="dot3">.</a>
                                </div>
                                <input type="submit" id="login" value="Login" />

                    </form>
                    <center>Don't have an account? <a href="signup.html">SignUp</a></center>
                    <br/>

                </div>

            </div>
    )
    }
}

export default Home;