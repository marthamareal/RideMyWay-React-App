import React from 'react'
import {connect} from "react-redux";
import logo from '../static/images/logo.jpg'
import RidesList from "./RidesList";

class Profile extends React.Component {


    render() {
        return (

            <div className="col">
                <div className={'row'}>
                    <div className=" user-profile">
                    <h5>Welcome Martha Mareal</h5><br/>
                    <img className={'responsive-img circle small'} src={logo}/>
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
                </div>

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