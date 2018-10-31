import React from 'react'


class RidesList extends React.Component {

    render() {
        return (
                <table>
                    <thead>
                    <tr>
                        <th data-field="id"></th>
                        <th data-field="id">DATE</th>
                        <th data-field="name">REF NO</th>
                        <th data-field="name">Source</th>
                        <th data-field="name">Destination</th>
                        <th data-field="price">PRICE</th>
                        <th data-field="action">Time</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.rides.map((ride,index) => {

                        return( <tr>
                            <td>{index+1}</td>
                            <td>{ride.date}</td>
                            <td>{ride.ref_no}</td>
                            <td>{ride.source}</td>
                            <td>{ride.destination}</td>
                            <td>{ride.price}</td>
                            <td>{ride.time}</td>
                        </tr>)

                    })}

                    </tbody>
                </table>

        )
    }
}

export default RidesList;