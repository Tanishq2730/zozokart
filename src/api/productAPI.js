// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const fetchProducts = async (page) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/products`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No blog details found");
  }
};

export const fetchProductDetails = async (slug) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/product-details/${slug}`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No blog details found");
  }
};



