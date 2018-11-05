import {
    FETCH_STATUS,
    FORM_USER,
    LOGIN_USER,
    REGISTER_ERRORS,
    REGISTER_USER
} from "../actions/Types";

export const initialState = {
  form_user: {
    "first name": "",
    "last name": "",
    email: "",
    city: "",
    phone_no: "",
    password: ""
  },
  login_user: {
    email: "",
    password: ""
  },
  isFetching: false,
  user: {}
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_USER:
      const payload = action.payload;
      const payload2 = { ...state.form_user, ...payload };
      return {
        ...state,
        form_user: payload2
      };

    case REGISTER_USER:
      return {
        ...state,
        user: action.payload
      };

    case REGISTER_ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    case FETCH_STATUS:
      return {
        ...state,
        isFetching: action.payload
      };

    case LOGIN_USER:
      const loginPayload = action.payload;
      const loginPayload2 = { ...state.login_user, ...loginPayload };
      return {
        ...state,
        login_user: loginPayload2
      };

    default:
      return state;
  }
};

export default signUpReducer;
