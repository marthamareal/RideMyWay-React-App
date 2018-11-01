import React from 'react'
import M from "materialize-css";
import {connect} from "react-redux";
import {createRide, formRide, updateRide} from "../../actions/Rides";

class CreateRide extends React.Component {

    onChange = event => {
        switch (event.target.name) {
            case "date":
                this.props.formRide({date: event.target.value});
                break;
            case "time":
                this.props.formRide({time: event.target.value});
                break;
            case "source":
                this.props.formRide({source: event.target.value});
                break;
            case "destination":
                this.props.formRide({destination: event.target.value});
                break;
            case "price":
                this.props.formRide({price: event.target.value});
                break;
            default:
                break;
        }

    };

    onSubmit = async event => {
        event.preventDefault();

        await this.props.createRide(this.props.form_ride);

        if (this.props.ride.id) {
            M.toast({html: 'Ride created successfully', id: 'toast-container', classes: "green darken-3"});
            this.props.history.push(`/show-ride/${this.props.ride.id}`)

        } else {
            M.toast({html: 'Failed to create ride', classes: "red darken-3"});
        }
    };

    onUpdate = async event => {
        event.preventDefault();

        await this.props.updateRide(this.props.match.params.rideId, this.props.form_ride);

        if (this.props.ride.id) {
            M.toast({html: 'Ride updated successfully', id: 'toast-container', classes: "green darken-3"});

        } else {
            M.toast({html: 'Failed to Update ride', classes: "red darken-3"});
        }
        this.props.history.push(`/show-ride/${this.props.match.params.rideId}`);
        this.props.formRide({date: '', source: '', destination: '', price: 0, time: ''})
    };

    render() {
        return (
            <div className="content">
                <div className="create-ride signup-login">
                    <h5>CREATE RIDE OFFER</h5><br/>

                    <form id={"create-ride"}>
                        <div className={'row col s12 m6'}>
                            <div className={'col s6 m6'}>
                                <label>Date:</label>
                                <input type="date" id="date" placeholder="mm-dd/yyyy" onChange={this.onChange}
                                       name={'date'}
                                       pattern="^[0-9]{4}-(0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0|1])-(0[1-9]{1}|1[0-9]{1})$"
                                       value={this.props.form_ride.date}
                                       autoFocus required
                                       title="Enter at least 3 characters with no numbers and spaces in it"/>
                            </div>
                            <div className={'col s6 m6'}>
                                <label>Time:</label>
                                <input type="text" id="time" placeholder=" eg 11:00 AM" name='time'
                                       value={this.props.form_ride.time}
                                       pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s(AM|PM)$" onChange={this.onChange}
                                       required title="Input valid time attributes eg 10:30 AM"/>
                            </div>
                        </div>

                            <div className={'row col s12 m6'}>
                                <div className={'col s6 m6'}>
                                    <label>Source:</label><br/>
                                    <input type="text" id="source" pattern="^[a-zA-Z]{3,25}$" name="source"
                                           onChange={this.onChange}
                                           value={this.props.form_ride.source}
                                           required
                                           title="Enter at least 3 characters with no numbers and spaces in it"/>
                                </div>
                                <div className={'col s6 m6'}>
                                    <label>Destination:</label><br/>
                                    <input type="text" id="destination" pattern="^[a-zA-Z]{3,25}$" name="destination"
                                           onChange={this.onChange}
                                           value={this.props.form_ride.destination} required
                                           title="Enter at least 3 characters with no numbers and spaces in it"/>
                                </div>
                            </div>

                            <div className={'row'}>
                                <label>Price your Ride (UGX):</label><br/>
                                <input type="number" id="price" name={'price'} onChange={this.onChange}
                                       value={this.props.form_ride.price}
                                       required="required" title="Input a correct price eg 50,5000,10000....."/>

                            </div>
                            <div className={'row'}>
                                {this.props.onEdit ? <input type="submit" onClick={this.onUpdate} value="Save"/> :
                                    <input onClick={this.onSubmit} type="submit" value="Create"/>}
                            </div>


                    </form>

                </div>

            </div>

    )
    }
    }

    const mapStateToProps = (state) => {
        return {
        form_ride: state.rides.form_ride,
        ride: state.rides.ride,
        onEdit: state.rides.onEdit,
    }
    };

    export default connect(mapStateToProps, {formRide, createRide, updateRide})(CreateRide);