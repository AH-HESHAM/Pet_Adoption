import axios from 'axios';
import {serverHost} from "../../collection";

const SignupRequest = async (user) =>{
    try {
        console.log(user)
        const response = await axios.post(`${serverHost}/register/signup`, 
        user, 
        {withCredentials: true});
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error('Error Login :', error);
        throw error; 
    }
};

const GetShelters = async ()=>{
    try {
        const response = await axios.get(`${serverHost}/register/shelters`,  {withCredentials: true});
        console.log("shelters")
        console.log(response)
        return response.data; 
    } catch (error) {
        console.error('Error Login :', error);
        throw error; 
    }
};

export {SignupRequest, GetShelters};