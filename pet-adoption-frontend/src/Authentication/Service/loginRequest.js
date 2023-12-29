import axios from 'axios';
import {serverHost} from "../../collection";

const LoginRequest = async (email, password, selectedOption) => {
  try {
    const response = await axios.post(`${serverHost}/register/signin`, {
      email, password, selectedOption
    }, {withCredentials: true});
    return response.data; 
  } catch (error) {
    console.error('Error Login :', error);
    throw error; 
  }
};

export default LoginRequest;
