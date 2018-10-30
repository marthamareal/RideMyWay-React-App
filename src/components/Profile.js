import React from 'react'
import {connect} from "react-redux";
import logo from '../static/images/logo.jpg'

class Profile extends React.Component {


    render() {
        return (

            <div className="container">
                <div className=" user-profile">
                    <h5>Welcome Martha Mareal</h5><br/>
                    <img className={'responsive-img circle small'} src={logo}/>
                    <strong>Total Rides</strong>
                    <table>
                    <thead>
                    <tr>
                        <th data-field="id">Taken</th>
                        <th data-field="name">Given</th>
                        <th data-field="price">All</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>4</td>
                        <td>10</td>
                        <td>15</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th data-field="id">Name</th>
                        <th data-field="id">DATE</th>
                        <th data-field="name">REF NO</th>
                        <th data-field="price">ACTION</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.register_user.user,
    }
};

export default connect(mapStateToProps)(Profile);