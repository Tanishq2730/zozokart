// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/auth/login`,
      data,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    // console.log(response);
    
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    // console.log(error);
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "Login failed");
  }
};
export const verifyLoginOTP = async (data) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/auth/verify-login-otp`,
      data,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    // console.log(response);
    
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    // console.log(error);
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${API_CONFIG.baseURL}/logout`, {
      headers: API_CONFIG.headers
    });
    return response.data;
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "Logout failed");
  }
};
