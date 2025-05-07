import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const registration = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/auth/register`,
      data, // Send data in request body
      { headers: API_CONFIG.headers } // Ensure headers are included
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const verifyRegistrationOTP = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/auth/verify-registration-otp`,
      data, // Send data in request body
      { headers: API_CONFIG.headers } // Ensure headers are included
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "Registration failed");
  }
};
