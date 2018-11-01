import React from 'react'
import logo from '../static/images/logo.jpg'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser, loginForm} from "../actions/Signup";
import M from "materialize-css";

class Home extends React.Component {

    onChange = event => {
        event.preventDefault();
        switch (event.target.name) {

            case "email":
                this.props.loginForm({email: event.target.value});
                break;
            case "password":
                this.props.loginForm({password: event.target.value});
                break;
            default:
                break;
        }

    };

    onSubmit = async event => {
        event.preventDefault();
        await this.props.loginUser(this.props.login_user);

        if (localStorage.getItem('token')) {
            this.props.history.push('/')

        } else {
            M.toast({html: 'Login failed', classes: "red darken-3 center"});
        }
    };

    render() {
        return (

            <div className="index-content">

                <div className="signup-login login-index">

                    <div id="form-head">
                        <img src={logo} id="logo" alt={'...'}/>
                        <h5>Ride-My-Way</h5>
                    </div>

                    <form id="login_form" onSubmit={this.onSubmit}>
                        <center><h6>Login</h6></center>
                        <label>Email Address:</label>
                        <input type="email" id="email" name="email" onChange={this.onChange} placeholder="Email Address" autoFocus required/>
                        <label>Password:</label>
                        <input type="password" id="password" name="password" onChange={this.onChange} placeholder="Create Password"
                               minLength="8"
                               required title="password length must be 8 ore more"/>

                        <input type="submit" id="login" value="Login"/>

                    </form>
                    <center>Don't have an account? <Link to={'/signup'}>SignUp</Link></center>
                    <br/>

                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        login_user: state.register_user.login_user,
        user: state.register_user.user,
    }
};

export default connect(mapStateToProps, {loginForm, loginUser})(Home);