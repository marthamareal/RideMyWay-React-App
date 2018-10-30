import { combineReducers } from 'redux';
import Signup from "./Signup";
import Rides from "./Rides";

export default combineReducers({
  register_user: Signup,
  rides: Rides,
});
