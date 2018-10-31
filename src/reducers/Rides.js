import {CREATE_RIDE, EDIT_RIDE, FORM_RIDE, RIDES_LIST, SHOW_RIDE, STATUS_CODE} from "../actions/Types";

const initialState = {
    form_ride:{
			"date": "",
            "time": "",
            "source": "",
            "destination": "",
            "price": 0
},
    ride:{},
    showRide:false,
    onEdit:false,
    status:0,
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
                ride: action.payload, status: action.payload.status
            };


        case STATUS_CODE:
            return {
                ...state,
                 status: action.payload
            };

        case RIDES_LIST:

            return {
                ...state,
                ridesList: action.payload
            };

        case SHOW_RIDE:

            return {
                ...state,
                showRide: action.payload
            };

        case EDIT_RIDE:

            return {
                ...state,
                onEdit: action.payload
            };

        default:
            return state;
    }
};

export default RideReducer;
