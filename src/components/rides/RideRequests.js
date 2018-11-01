import React from 'react'
import {approveRequest, getRequests} from "../../actions/Rides";
import {connect} from "react-redux";
import M from "materialize-css";


class RideRequests extends React.Component {

    async componentWillMount() {
        await this.props.getRequests(this.props.match.params.rideId)
    }

    onApproval = (rideId, approval) => async event => {
        event.preventDefault();
        await this.props.approveRequest({rideId,approval});

        if (this.props.status === 201) {
            M.toast({html: 'Approval was successful', id: 'toast-container', classes: "green darken-3"});

        } else {
            M.toast({html: 'Failed to Approval request', classes: "red darken-3"});
        }

    };


    render() {

        return (
            <table>
                <thead>
                <tr>
                    <th data-field="id"></th>
                    <th data-field="id">DATE</th>
                    <th data-field="name">REF NO</th>
                    <th data-field="name">Requester</th>
                    <th data-field="name">Approval</th>
                    <th data-field="name"></th>
                </tr>
                </thead>

                <tbody>
                {this.props.requests.map((request, index) => {

                        return (<tr>
                            <td>{index + 1}</td>
                            <td>{request.date}</td>
                            <td>{request.ride_ref}</td>
                            <td>{request.requestor}</td>
                            <td>{request.status}</td>
                            {request.status === 'Pending' && <td>
                                <a className={'btn-small green left'} onClick={this.onApproval(request.request_id,'Y')}>Accept</a>
                                <a className={'btn-small red right'} onClick={this.onApproval(request.request_id,'N')}>Reject</a><br/>
                            </td>}

                        </tr>)

                    }
                )}

                </tbody>
            </table>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        requests: state.rides.requests,
        status: state.rides.status
    }
};

export default connect(mapStateToProps, {getRequests, approveRequest})(RideRequests);