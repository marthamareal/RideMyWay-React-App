import React from 'react'
import {getRide,showRide} from "../../actions/Rides";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ShowRide extends React.Component {

    async componentWillMount() {
        await this.props.getRide(this.props.match.params.rideId);
        this.props.showRide(true);

    }

    onClose =  event =>{
        event.preventDefault();
        this.props.showRide(false);
        this.props.history.goBack()
    };

    render() {
        return (

            <div
                id="modal1"
                className={this.props.showRide? "modal modal-open" : "modal"}
            >
                <div className="modal-content">
                    <i className={'material-icons'} style={{cursor: 'pointer'}} onClick={this.onClose} > close</i>
                    <div className="card ">
                        <div className="card-content ">
                            <span className="card-title"><h5> {this.props.ride.ref_no} by {this.props.ride.creator}</h5></span>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Date</td>
                                    <td>{this.props.ride.date}</td>
                                </tr>
                                <tr>
                                    <td>Time</td>
                                    <td>{this.props.ride.time}</td>
                                </tr>
                                <tr>
                                    <td>Source</td>
                                    <td>{this.props.ride.source}</td>
                                </tr>
                                <tr>
                                    <td>Destination</td>
                                    <td>{this.props.ride.destination}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{this.props.ride.price}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="card-action">
                                <a className={'btn light-green left'} href="#">EDIT</a>
                                <a className={'btn red right'}href="#">DELETE</a><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        ride: state.rides.ride,
        showRide: state.rides.showRide
    }
};

export default withRouter(connect(mapStateToProps, {getRide, showRide})(ShowRide));

