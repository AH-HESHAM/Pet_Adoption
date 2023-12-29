import axios from 'axios';
import {serverHost} from "../../collection";

const SignupRequest = async (user) =>{
    try {
        const response = await axios.post(`${serverHost}/register/signup`, 
        user, 
        {withCredentials: true});
        return response.data; 
    } catch (error) {
        console.error('Error Login :', error);
        throw error; 
    }
};

const GetShelters = async ()=>{
    try {
        const response = await axios.get(`${serverHost}/register/signup`,  
        {withCredentials: true});
        return response.data; 
    } catch (error) {
        console.error('Error Login :', error);
        throw error; 
    }
};

export {SignupRequest, GetShelters};