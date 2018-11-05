import {
    CREATE_RIDE,
    EDIT_RIDE, FETCH_STATUS,
    FORM_RIDE, REGISTER_ERRORS, RIDE_OWNERSHIP,
    RIDE_REQUESTS,
    RIDES_LIST,
    SHOW_RIDE,
    STATUS_CODE
} from "../actions/Types";

const initialState = {
  form_ride: {
    date: "",
    time: "",
    source: "",
    destination: "",
    price: 0
  },
  ride: {},
  showRide: false,
  onEdit: false,
  status: 0,
  message:'',
  isFetching: false,
  isOwner: false,
  ridesList: [],
  requests: []
};

const RideReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_RIDE:
      const payload = action.payload;
      const payload2 = { ...state.form_ride, ...payload };
      return {
        ...state,
        form_ride: payload2
      };

    case CREATE_RIDE:
      return {
        ...state,
        ride: action.payload,
        status: action.payload.status
      };

     case REGISTER_ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    case STATUS_CODE:
      return {
        ...state,
        status: action.payload
      };

    case FETCH_STATUS:
      return {
        ...state,
        isFetching: action.payload
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

    case RIDE_REQUESTS:
      return {
        ...state,
        requests: action.payload
      };

    case RIDE_OWNERSHIP:
      return {
        ...state,
        isOwner: action.payload
      };

    default:
      return state;
  }
};

export default RideReducer;
