import {
    CREATE_RIDE,
    EDIT_RIDE,
    FORM_RIDE, RIDE_OWNERSHIP,
    RIDE_REQUESTS,
    RIDES_LIST,
    SHOW_RIDE,
    STATUS_CODE
} from "./Types";
import { axiosInstance } from "../globals";
import { createErrors } from "./Signup";
import {fetching} from "./index";

export const ridesList = payload => {
  return {
    type: RIDES_LIST,
    payload
  };
};

export const formRide = payload => {
  return {
    type: FORM_RIDE,
    payload
  };
};

const _createRide = payload => {
  return {
    type: CREATE_RIDE,
    payload
  };
};
const rideOwnership = payload => {
  return {
    type: RIDE_OWNERSHIP,
    payload
  };
};

export const showRide = payload => {
  return {
    type: SHOW_RIDE,
    payload
  };
};

export const statusCode = payload => {
  return {
    type: STATUS_CODE,
    payload
  };
};

export const editRide = payload => {
  return {
    type: EDIT_RIDE,
    payload
  };
};
export const getRideRequests = payload => {
  return {
    type: RIDE_REQUESTS,
    payload
  };
};

export const getRides = get => async dispatch => {
  return await axiosInstance
    .get("/rides")
    .then(response => {
      dispatch(ridesList(response.data["Ride offers"]));
    })
    .catch(error => {
      try {
        dispatch(createErrors(error.response.data));
      } catch (error) {
        dispatch(createErrors({ error: "Check your internet connection" }));
      }
    });
};

export const createRide = postData => async dispatch => {
  dispatch(fetching(true));
  return await axiosInstance
    .post("/rides/create", postData)
    .then(response => {
      dispatch(_createRide(response.data.ride));
      dispatch(fetching(false));
    })
    .catch(error => {
      try {
        dispatch(createErrors(error.response.data.message));
        dispatch(fetching(false));
      } catch (error) {
        dispatch(createErrors({ error: "Check your internet connection" }));
        dispatch(fetching(false));
      }
    });
};

export const getRide = rideId => async dispatch => {
  return await axiosInstance
    .get(`/rides/${rideId}`)
    .then(response => {
      dispatch(_createRide(response.data.ride));
      if (localStorage.getItem('user_id') === (response.data.ride.creator_id).toString()){
          dispatch(rideOwnership(true))
      }
      else {
        dispatch(rideOwnership(false))
      }

    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteRide = rideId => async dispatch => {
  return await axiosInstance
    .delete(`/rides/delete/${rideId}`)
    .then(response => {
      dispatch(createErrors(response.data.message));
    })
    .catch(error => {
        dispatch(createErrors(error.response.data?error.response.data.message:''));
    });
};

export const updateRide = (rideId, postData) => async dispatch => {
    dispatch(fetching(true));
  return await axiosInstance
    .put(`/rides/update/${rideId}`, postData)
    .then(response => {
      dispatch(editRide(false));
      dispatch(_createRide(response.data['updated ride']));
      dispatch(fetching(false));
    })
    .catch(error => {
      try{
        dispatch(createErrors(error.response? error.response.data.message: ''));
        dispatch(editRide(false));
        dispatch(fetching(false));
      }catch (e) {
         console.log(e)
          dispatch(editRide(false));
          dispatch(fetching(false));
      }

    });
};

export const requestRide = rideId => async dispatch => {
    dispatch(fetching(true));
  return await axiosInstance
    .post(`/rides/requests/create/${rideId}`)
    .then(response => {
      dispatch(statusCode(response.status));
      dispatch(fetching(false));
    })
    .catch(error => {
      try {
        dispatch(createErrors(error.response.data?error.response.data.message:''));
        dispatch(fetching(false));
      } catch (error) {
        dispatch(createErrors({ error: "Check your internet connection" }));
        dispatch(fetching(false));
      }
    });
};

export const getRequests = rideId => async dispatch => {
  return await axiosInstance
    .get(`/rides/requests/${rideId}`)
    .then(response => {
      dispatch(getRideRequests(response.data.requests));
    })
    .catch(error => {
      dispatch(createErrors(error.response.data?error.response.data.message:''));
    });
};

export const approveRequest = postData => async dispatch => {
    dispatch(fetching(true));
  return await axiosInstance
    .post(`/rides/requests/approve/${postData.rideId}`, {
      approval: postData.approval
    })
    .then(response => {
      dispatch(statusCode(response.status));
      dispatch(fetching(false));
    })
    .catch(error => {
      try {
        dispatch(createErrors(error.response.data.message));
        dispatch(fetching(false));
      } catch (error) {
        dispatch(createErrors({ error: "Check your internet connection" }));
      }
    });
};
