import React from "react";
import { connect } from "react-redux";
import RidesList from "../rides/RidesList";
import { getRides } from "../../actions/Rides";

class Profile extends React.Component {

  async componentDidMount() {
    await this.props.getRides(true);
  }

  render() {
    return <RidesList rides={this.props.rides} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.register_user.user,
    rides: state.rides.ridesList
  };
};

export default connect(
  mapStateToProps,
  { getRides }
)(Profile);
