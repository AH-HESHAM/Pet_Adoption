/*
* any call to the backend should be done here
* */

import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your actual backend API URL

const submitAdoptionApplication = async (adopterName, contactInformation) => {
  try {
    const response = await axios.post(`${BASE_URL}/adoption/submit-application`, {
      adopterName,
      contactInformation,
      applicationStatus: 'PENDING'
    });
    console.log('API Response:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error submitting adoption application:', error);
    throw error; 
  }
};
const AdoptionApplicationService = {
    submitAdoptionApplication,
  };
  
export default AdoptionApplicationService;
