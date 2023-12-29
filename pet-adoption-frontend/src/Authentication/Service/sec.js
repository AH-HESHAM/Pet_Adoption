import axios from 'axios';
import {serverHost} from "../../collection";


const sec = async () => {
  try {
    const response = await axios.get(`${serverHost}/security/test`, {
      withCredentials : true
    });
    return response.data; 
  } catch (error) {
    console.error('Error Login :', error);
    throw error; 
  }
};

export default sec;
