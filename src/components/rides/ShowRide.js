import React from 'react'
import {getRide, showRide, deleteRide, requestRide, editRide, formRide} from "../../actions/Rides";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import M from "materialize-css";

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

    onDelete= async event =>{
        event.preventDefault();
       await this.props.deleteRide(this.props.match.params.rideId);

         if (this.props.ride.message) {
            M.toast({html: 'Ride deleted successfully', id: 'toast-container', classes: "green darken-3"});
        this.props.history.goBack()

        } else {
            M.toast({html: 'Failed to delete ride', classes: "red darken-3"});
            this.props.history.goBack()
        }

    };

    onEdit=  event =>{
        event.preventDefault();
        this.props.editRide(true);
        this.props.formRide(this.props.ride);
        this.props.history.push(`/edit-ride/${this.props.match.params.rideId}`)

    };

    request=  async event => {
        event.preventDefault();
        await this.props.requestRide(this.props.match.params.rideId);
        if (this.props.status === 201) {
            M.toast({html: 'Request made successfully', id: 'toast-container', classes: "green darken-3"});
            this.props.history.goBack()

        } else {
            M.toast({html: 'Failed to request ride', classes: "red darken-3"});
            this.props.history.goBack()
        }

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
                                <a className={'btn light-green center'} onClick={this.request}>REQUEST</a>

                                <a className={'btn light-green left'} onClick={this.onEdit}>EDIT</a>
                                <a className={'btn red right'} onClick={this.onDelete} >DELETE</a><br/>
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
        showRide: state.rides.showRide,
        status: state.rides.status
    }
};

export default withRouter(connect(mapStateToProps, {getRide, showRide, deleteRide, requestRide, editRide,formRide})(ShowRide));
