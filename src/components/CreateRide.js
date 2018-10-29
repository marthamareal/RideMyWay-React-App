import React from 'react'

class CreateRide extends React.Component {
    render() {
        return (
            <div className="content">

                <div className="create-ride signup-login">
                    <center><h4>CREATE RIDE OFFER</h4></center>

                    <form id="create_ride_form">

                        <label>Date:</label>
                        <input type="date" id="date" placeholder="mm-dd/yyyy"
                               pattern="^[0-9]{4}-(0[1-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0|1])-(0[1-9]{1}|1[0-9]{1})$"
                               autoFocus required title="Enter at least 3 characters with no numbers and spaces in it"/><br/>

                        <label>Time:</label>
                        <input type="text" id="time" placeholder=" eg 11:00 AM"
                               pattern="^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s(AM|PM)$"
                               required title="Input valid time attributes eg 10:30 AM"/><br/>

                        <label>Create Source:</label><br/>
                        <input type="text" id="source" pattern="^[a-zA-Z]{3,25}$"
                               required title="Enter at least 3 characters with no numbers and spaces in it"/><br/>

                        <label>Create Destination:</label><br/>
                        <input type="text" id="destination" pattern="^[a-zA-Z]{3,25}$"
                               required title="Enter at least 3 characters with no numbers and spaces in it"/><br/>

                        <label>Price your Ride (UGX):</label><br/>
                        <input type="number" id="price"
                               required="required" title="Input a correct price eg 50,5000,10000....."/>

                        <div id="loading">
                            <a>please wait </a>
                            <a className="dot1">.</a>
                            <a className="dot2">.</a>
                            <a className="dot3">.</a>
                        </div>

                        <input type="submit" value="Create"/>
                    </form>

                </div>

            </div>

    )
    }
}

export default CreateRide;