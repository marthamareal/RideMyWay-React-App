import React from 'react'
import logo from '../static/images/logo.jpg'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {formUser, registerUser} from "../actions/Signup";
import M from "materialize-css";

class Signup extends React.Component {

    onChange = event => {
        switch (event.target.name) {
            case "fname":
                this.props.formUser({'first name': event.target.value});
                break;
            case "lname":
                this.props.formUser({'last name': event.target.value});
                break;
            case "email":
                this.props.formUser({email: event.target.value});
                break;
            case "phone":
                this.props.formUser({phone_no: event.target.value});
                break;
            case "city":
                this.props.formUser({city: event.target.value});
                break;
            case "password":
                this.props.formUser({password: event.target.value});
                break;
            default:
                break;
        }

    };

    onSubmit = async event => {
        event.preventDefault();
        await this.props.registerUser(this.props.form_user);

        if (this.props.user.email) {
            M.toast({html: 'Account created successfully', id: 'toast-container', classes: "green darken-3"});
            this.props.history.push('/')

        } else {
            M.toast({html: 'Registration failed', classes: "red darken-3"});
        }
    };

    render() {

        return (
            <div className=" container index-content">

                <div className="signup-login">

                    <div id="form-head">
                        <img src={logo} id="logo" alt={'...'}/>
                    </div>

                    <form id="signup_form" onSubmit={this.onSubmit}>
                        <center><h6>Sign-Up To start Your Way!!</h6></center>

                        <br/>

                        <input type="text" id="fname" name="fname" placeholder="First Name"
                               pattern="^[a-zA-Z]{3,25}$"
                               autoFocus required
                               onChange={this.onChange}
                               title="Enter at least 3 characters with no numbers and spaces in it"/>

                        <input type="text" id="lname" name="lname" placeholder="Last Name"
                               pattern="^[a-zA-Z]{3,25}$"
                               onChange={this.onChange}
                               autoFocus required
                               title="Enter at least 3 characters with no numbers and spaces in it"/>

                        <input type="email" id="email" name="email"
                               onChange={this.onChange}
                               placeholder="Email Address" autoFocus
                               required/>

                        <input type="text" id="phone" name="phone" placeholder="Phone Number"
                               pattern="^\+[0-9]{3}\s[0-9]{9,15}$"
                               onChange={this.onChange}
                               autoFocus required title="Enter a valid phone number eg +256 777777886"/>

                        <input type="text" id="city" name="city" placeholder="City"
                               pattern="^[a-zA-Z0-9,-s]{3,45}"
                               onChange={this.onChange}
                               required title="Enter at least 3 characters"/>

                        <input type="password" id="password" name="password"
                               placeholder="Create Password" minLength="8"
                               onChange={this.onChange}
                               required title="password length must be 8 ore more"/>

                        <input type="submit" value="Sign Up"/>

                    </form>

                    <center>Already have an account? <Link to={'/'}>Login</Link></center>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        form_user: state.register_user.form_user,
        user: state.register_user.user,
    }
};

export default connect(mapStateToProps, {formUser, registerUser})(Signup);