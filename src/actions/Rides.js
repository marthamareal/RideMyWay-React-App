import {CREATE_RIDE, FORM_RIDE, FORM_USER, REGISTER_USER, RIDES_LIST} from "./Types";
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
