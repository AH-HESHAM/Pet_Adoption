import axios from 'axios';
import {serverHost} from "../../../collection";

async function getStaffPostsRequest(id) {
    try {
      const response = await axios.post(`${serverHost}/publisherStaff/pets?staffId=${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error Posts :', error);
      throw error;
    }
  }

export default getStaffPostsRequest