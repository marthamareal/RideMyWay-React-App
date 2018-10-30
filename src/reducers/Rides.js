import {RIDES_LIST} from "../actions/Types";

const initialState = {
    ridesList:[]
};

const RideReducer = (state = initialState, action) => {

    switch (action.type) {

        case RIDES_LIST:

            return {
                ...state,
                ridesList: action.payload
            };

        default:
            return state;
    }
};

export default RideReducer;
