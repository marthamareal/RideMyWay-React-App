import { REGISTER_USER, REGISTER_ERRORS, FORM_USER, LOGIN_USER } from "./Types";
import { axiosInstance } from "../globals";

export const formUser = payload => {
  return {
    type: FORM_USER,
    payload
  };
};

export const createUser = payload => {
  return {
    type: REGISTER_USER,
    payload
  };
};

export const loginForm = payload => {
  return {
    type: LOGIN_USER,
    payload
  };
};

export const createErrors = payload => {
  return {
    type: REGISTER_ERRORS,
    payload
  };
};

export const registerUser = postData => async dispatch => {
  return await axiosInstance
    .post("/auth/signup", postData)
    .then(response => {
      dispatch(createUser(response.data.message));
    })
    .catch(error => {
      try {
        dispatch(createErrors(error.response.data));
      } catch (error) {
        dispatch(createErrors({ error: "Check your internet connection" }));
      }
    });
};

export const loginUser = postData => async dispatch => {
  return await axiosInstance
    .post("/auth/login", postData)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.lname);
    })
    .catch(error => {
      try {
        dispatch(createErrors(error.response.data));
      } catch (error) {
        dispatch(createErrors({ error: "Check your internet connection" }));
      }
    });
};
