import {RIDES_LIST} from "./Types";
import { axiosInstance } from "../globals";

export const ridesList = payload =>{
    return{
        type: RIDES_LIST,
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
