import axios from 'axios';
import {serverHost} from "../../../collection";
import { Manager } from './managerPost';

async function getManagerPostsRequest(id) {
    try {
        let manager = new Manager();
        manager.managerId = id
      const response = await axios.post(`${serverHost}/manager/pets`,manager, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error Posts :', error);
      throw error;
    }
  }

export default getManagerPostsRequest