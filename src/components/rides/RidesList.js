import React from "react";
import { withRouter } from "react-router-dom";

class RidesList extends React.Component {
  getRide = rideId => event => {
    event.preventDefault();
    this.props.history.push(`/show-ride/${rideId}`);
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th data-field="id" />
            <th data-field="id">DATE</th>
            <th data-field="name">REF NO</th>
            <th data-field="name">Source</th>
            <th data-field="name">Destination</th>
            <th data-field="price">PRICE</th>
            <th data-field="action">Time</th>
          </tr>
        </thead>

        <tbody>
          {this.props.rides ? (
            this.props.rides.map((ride, index) => {
              return (
                <tr id={"ride"} key={index} onClick={this.getRide(index + 1)}>
                  <td>{index + 1}</td>
                  <td>{ride.date}</td>
                  <td>{ride.ref_no}</td>
                  <td>{ride.source}</td>
                  <td>{ride.destination}</td>
                  <td>{ride.price}</td>
                  <td>{ride.time}</td>
                </tr>
              );
            })
          ) : (
            <div>NO RIDES FOUND</div>
          )}
        </tbody>
      </table>
    );
  }
}

export default withRouter(RidesList);
