import {CREATE_RIDE, FORM_RIDE, RIDES_LIST} from "../actions/Types";

const initialState = {
    form_ride:{
			"date": "",
            "time": "",
            "source": "",
            "destination": "",
            "price": 0
},
    ride:{},
    ridesList:[]
};

const RideReducer = (state = initialState, action) => {

    switch (action.type) {

        case FORM_RIDE:
            const payload = action.payload;
            const payload2 = { ...state.form_ride, ...payload };
            return {
                ...state, form_ride: payload2
            };

        case CREATE_RIDE:
            return {
                ...state,
                ride: action.payload,
            };

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
