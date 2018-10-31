import {CREATE_RIDE, FORM_RIDE, FORM_USER, REGISTER_USER, RIDES_LIST, SHOW_RIDE, STATUS_CODE} from "./Types";
import { axiosInstance } from "../globals";

export const ridesList = payload =>{
    return{
        type: RIDES_LIST,
        payload }
};


export const formRide = payload =>{
    return{
        type: FORM_RIDE,
        payload }
};

const _createRide = payload =>{
    return{
        type: CREATE_RIDE,
        payload }
};

export const showRide = payload =>{
    return{
        type: SHOW_RIDE,
        payload }
};

export const statusCode = payload =>{
    return{
        type: STATUS_CODE,
        payload }
};


export const getRides = get =>  async (dispatch) => {

        return await axiosInstance
                .get('/rides')
                .then((response) => {
                    dispatch(ridesList(response.data['Ride offers']));
                } )
                .catch(error => {
                    try {
                        let errors= error.response;
                        console.log(errors)

                    } catch(error) {
                         console.log(error)
                    }
                })

};

export const createRide = postData =>  async (dispatch) => {
        return await axiosInstance
                .post('/rides/create', postData)
                .then((response) => {
                    dispatch(_createRide(response.data.ride));
                } )
                .catch(error => {
                    try {
                        let errors= error.response;
                        console.log(errors)

                    } catch(error) {
                         console.log(error)
                    }
                })

};



export const getRide = rideId =>  async (dispatch) => {
        return await axiosInstance
                .get(`/rides/${rideId}`)
                .then((response) => {
                    dispatch(_createRide(response.data.ride));
                } )
                .catch(error => {
                    try {
                        let errors= error.response;
                        console.log(errors)

                    } catch(error) {
                         console.log(error)
                    }
                })

};
export const deleteRide = rideId =>  async (dispatch) => {
        return await axiosInstance
                .delete(`/rides/delete/${rideId}`)
                .then((response) => {
                    console.log(response);
                    dispatch(_createRide(response.data));
                } )
                .catch(error => {
                    try {
                        let errors= error.response;
                        console.log(errors)

                    } catch(error) {
                         console.log(error)
                    }
                })

};
export const requestRide = rideId =>  async (dispatch) => {
        return await axiosInstance
                .post(`/rides/requests/create/${rideId}`)
                .then((response) => {
                    dispatch(statusCode(response.status));
                } )
                .catch(error => {
                    try {
                        let errors= error.response;
                        console.log(errors)

                    } catch(error) {
                         console.log(error)
                    }
                })

};