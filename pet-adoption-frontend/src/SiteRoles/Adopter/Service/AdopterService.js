/*
 * any call to the backend should be done here
 * */
import axios from "axios";
import { serverHost } from "../../../collection";

const submitAdoptionApplication = async (petID,adopterID,adopterName, contactInformation  ) => {
  try {
    console.log("adopter id = " +adopterID)
    console.log("pet id = " + petID)
    const response = await axios.post(
      `${serverHost}/adoption/submit-application`,
      {
        petId: petID,
        adopterId: adopterID,
        adopterName,
        contactInformation,
        applicationStatus: "PENDING",
      },
      {
        withCredentials: true,
      }
    );
 
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting adoption application:", error);
    throw error;
  }
};
const AdoptionApplicationService = {
  submitAdoptionApplication,
};

export default AdoptionApplicationService;
