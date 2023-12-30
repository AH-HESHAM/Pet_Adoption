import axios from 'axios';
import {serverHost} from "../../../collection";

const getPostsRequest = async (path)=>{
    try {
        const response = await axios.get(`${serverHost}${path}`,  {withCredentials: true});
        return response.data; 
    } catch (error) {
        console.error('Error Posts :', error);
        throw error; 
    }
}

export default getPostsRequest