import axios from 'axios';
import {serverHost} from "../../../collection";

const getPostsRequest = async ()=>{
    try {
        const response = await axios.get(`${serverHost}/register/shelters`,  {withCredentials: true});
        return response.data; 
    } catch (error) {
        console.error('Error Posts :', error);
        throw error; 
    }
}

export default getPostsRequest