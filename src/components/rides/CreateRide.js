import React from 'react'
import M from "materialize-css";
import connect from "react-redux/es/connect/connect";
import {createRide, formRide} from "../../actions/Rides";

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

        if (this.props.ride.source) {
            M.toast({html: 'Ride created successfully', id: 'toast-container', classes: "green darken-3"});
            this.props.history.push('/')

        } else {
            M.toast({html: 'Failed to create ride', classes: "red darken-3"});
        }
    };

    render() {
        return (
            <div className="content">

                <div className="create-ride signup-login">
                    <center><h4>CREATE RIDE OFFER</h4></center>

                    <form onSubmit={this.onSubmit}>

                        <label>Date:</label>
                        <input type="date" id="date" placeholder="mm-dd/yyyy" onChange={this.onChange} name={'date'}
                               pattern="^[0-9]{4}-(0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0|1])-(0[1-9]{1}|1[0-9]{1})$"
                               autoFocus required title="Enter at least 3 characters with no numbers and spaces in it"/><br/>

                        <label>Time:</label>
                        <input type="text" id="time" placeholder=" eg 11:00 AM" name='time'
                               pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s(AM|PM)$" onChange={this.onChange}
                               required title="Input valid time attributes eg 10:30 AM"/><br/>

                        <label>Create Source:</label><br/>
                        <input type="text" id="source" pattern="^[a-zA-Z]{3,25}$" name="source" onChange={this.onChange}
                               required title="Enter at least 3 characters with no numbers and spaces in it"/><br/>

                        <label>Create Destination:</label><br/>
                        <input type="text" id="destination" pattern="^[a-zA-Z]{3,25}$" name="destination" onChange={this.onChange}
                               required title="Enter at least 3 characters with no numbers and spaces in it"/><br/>

                        <label>Price your Ride (UGX):</label><br/>
                        <input type="number" id="price" name={'price'} onChange={this.onChange}
                               required="required" title="Input a correct price eg 50,5000,10000....."/>

                        <input type="submit" value="Create"/>
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
    }
};

export default connect(mapStateToProps, {formRide, createRide})(CreateRide);