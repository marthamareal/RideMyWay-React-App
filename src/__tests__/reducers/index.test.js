import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { initialState } from "../../reducers/Signup";
import reducer from "../../reducers";
import {
  CREATE_RIDE,
  EDIT_RIDE,
  FORM_RIDE,
  FORM_USER,
  LOGIN_USER,
  REGISTER_ERRORS,
  REGISTER_USER,
  RIDE_REQUESTS,
  RIDES_LIST,
  SHOW_RIDE,
  STATUS_CODE
} from "../../actions/Types";

Enzyme.configure({ adapter: new Adapter() });

describe("test reducers", () => {
  let intialState;
  let afterState;
  let sampleRideResponse = {
    form_ride: {
      date: "",
      time: "",
      source: "",
      destination: "",
      price: 0
    },
    ride: {
      date: "2017-10-12",
      time: "10:00 PM",
      source: "source",
      destination: "Destination",
      price: 900
    },
    showRide: false,
    onEdit: false,
    status: 0,
    ridesList: [],
    requests: []
  };

  let sampleResponse = {
    form_user: {
      "first name": "mareal",
      "last name": "martha",
      email: "martha@gmail.com",
      city: "town",
      phone_no: "+2556 778776677",
      password: "H67788qi"
    },
    login_user: {
      email: "",
      password: ""
    },
    isFetching: false,
    user: {
      id: 1,
      "first name": "mareal",
      "last name": "martha",
      email: "martha@gmail.com",
      city: "town",
      phone_no: "+2556 778776677",
      password: "H67788qi"
    }
  };
  beforeEach(() => {
    intialState = initialState;
  });

  // Signup reducer
  it("should return initial state ", () => {
    reduceAction("UNKNOWN", "");
    expect(afterState.register_user).toEqual(intialState);
  });

  it("should update state on form register", () => {
    reduceAction(FORM_USER, sampleResponse.form_user);
    expect(afterState.register_user.form_user).toEqual(
      sampleResponse.form_user
    );
  });

  it("should update state on successful  register", () => {
    reduceAction(REGISTER_USER, sampleResponse.user);
    expect(afterState.register_user.user).toEqual(sampleResponse.user);
  });

  it("should update state on successful  login", () => {
    reduceAction(LOGIN_USER, sampleResponse.login_user);
    expect(afterState.register_user.login_user).toEqual(
      sampleResponse.login_user
    );
  });

  it("should update state on register errors", () => {
    reduceAction(REGISTER_ERRORS, { message: "sorry error" });
    expect(afterState.register_user.errors).toEqual({ message: "sorry error" });
  });

  // Rides Reducer

  it("should update state on ride create", () => {
    reduceAction(CREATE_RIDE, sampleRideResponse.ride);
    expect(afterState.rides.ride).toEqual(sampleRideResponse.ride);
  });

  it("should update state on getting rides", () => {
    reduceAction(RIDES_LIST, sampleRideResponse.ridesList);
    expect(afterState.rides.ridesList).toEqual(sampleRideResponse.ridesList);
  });
  it("should update state on getting a ride", () => {
    reduceAction(SHOW_RIDE, true);
    expect(afterState.rides.showRide).toEqual(true);
  });
  it("should update state on editing a ride", () => {
    reduceAction(EDIT_RIDE, true);
    expect(afterState.rides.onEdit).toEqual(true);
  });
  it("should update state on ride request", () => {
    reduceAction(RIDE_REQUESTS, sampleRideResponse.requests);
    expect(afterState.rides.requests).toEqual(sampleRideResponse.requests);
  });
  it("should update status code", () => {
    reduceAction(STATUS_CODE, 200);
    expect(afterState.rides.status).toEqual(200);
  });
  it("should update status on form chane", () => {
    reduceAction(FORM_RIDE, sampleRideResponse.form_ride);
    expect(afterState.rides.form_ride).toEqual(sampleRideResponse.form_ride);
  });

  const reduceAction = (actionType, payload) => {
    const action = { type: actionType, payload };
    afterState = reducer(intialState, action);
  };
});
