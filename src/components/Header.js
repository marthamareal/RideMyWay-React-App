import React from 'react'
import logo from '../static/images/logo.jpg'
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className={'menu'}>
            <a>
                <div className={'app-profile'}>
                    <img src={logo} id="menu-logo" alt={'...'}/>
                        <h2>Ride-My-Way</h2>
                </div>
            </a>
        <div className="menu-list">
            <ul>
                <Link to={'/'}><li><a >HOME</a></li></Link>
                <Link to={'/'}><li><a >RIDE</a></li></Link>
                <Link to={'/create-ride'}><li><a >DRIVE</a></li></Link>
                <Link to={'/contact-us'}><li><a >CONTACT US</a></li></Link>
                <Link to={ '/about-us' }><li><a >ABOUT US</a></li></Link>
            </ul>

        </div>
        <div className={'clear'}/>
    </div>
    )
    }
}

export default Header;