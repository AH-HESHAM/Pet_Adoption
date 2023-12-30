/*
 * any call to the backend should be done here
 * */
import axios from "axios";
import { serverHost } from "../../../collection";

const submitAdoptionApplication = async (
  petID,
  adopterID,
  adopterName,
  contactInformation
) => {
  try {
    console.log("adopter id = " + adopterID);
    console.log("pet id = " + petID);
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

const searchService = async (selectedFilter, searchQuery) => {
  try {
    const response = await axios.post(
      `${serverHost}/search/apply`,
      {
        selectedFilter,
        searchQuery,
      },
      {
        withCredentials: true,
      }
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error performing search:", error);
  }
};

const filterService = async (
  vaccinationFilter
) => {
    const dummy = "dummy"
  try {
    const response = await axios.post(
      `${serverHost}/filter/apply`,
      {
        vaccinationFilter
      },
      {
        withCredentials: true,
      }
    );
    console.log("API Response:", response.data);
    return response.data;
  } catch {
    console.error("Error performing filter:");
  }
};

export { submitAdoptionApplication, searchService, filterService };
