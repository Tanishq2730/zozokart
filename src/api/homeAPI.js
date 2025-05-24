// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const fetchBanners = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/banners`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No banner found");
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/categories`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No category found");
  }
};

export const fetchSubCategoriesOne = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/sub-categories-one`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No category found");
  }
};

export const fetchSubCategoriesTwo = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/sub-categories-two`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No category found");
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/web/products`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No best seller found");
  }
};

export const fetchBestSellers = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/products`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No best seller found");
  }
};

export const fetchNewArrivals = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/products`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No new arrivals found");
  }
};

export const fetchWebsiteHomePageContent = async () => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/web/get-website-home-page-content`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No new arrivals found");
  }
};

