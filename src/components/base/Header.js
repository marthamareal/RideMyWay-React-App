import React from 'react'
import logo from '../../static/images/logo.jpg'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Header extends React.Component {

    logout = event =>{
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.props.history.push('/')
    };

    render() {
        return (
            <div className={'menu'}>
                <div className={'app-profile'}>
                    <img src={logo} id="menu-logo" alt={'...'}/>
                        <h4>Ride-My-Way</h4>
                </div>
        <div className="menu-list">
            <ul>
                <Link to={'/'}><li>HOME</li></Link>
                {localStorage.getItem('token')&&<Link to={'/create-ride'}><li>DRIVE</li></Link>}
                <Link to={'/contact-us'}><li>CONTACT US</li></Link>
                <Link to={ '/about-us' }><li>ABOUT US</li></Link>
                {localStorage.getItem('token')&&
                <li onClick={this.logout} >LOGOUT</li>
                }
            </ul>

        </div>
        <div className={'clear'}/>
    </div>
    )
    }
}
Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(Header);