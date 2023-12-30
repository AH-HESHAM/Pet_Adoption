import axios from 'axios';
import {serverHost} from "../../../collection";
import { Manager } from '../../Manager/Service/managerPost';

async function getStaffPostsRequest(id) {
    try {
      let manager = new Manager();
        manager.managerId = id
      const response = await axios.post(`${serverHost}/publisherStaff/pets`, manager, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error Posts :', error);
      throw error;
    }
  }

export default getStaffPostsRequest