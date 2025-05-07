// authApi.js
import { API_CONFIG } from "../utils/api-config";
import axios from "axios";

export const fetchBlogs = async (tag='',page) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.baseURL}/blogs?tag=${tag || ''}&page=${page}`,
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No blog found");
  }
};

export const fetchBlogDetails = async (slug) => {
  try {
    const response = await axios.post(
      `${API_CONFIG.baseURL}/blog-details`,
      {slug},
      { headers: API_CONFIG.headers } // Pass headers correctly
    );
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // throw new Error(error.response?.data?.message || "No blog details found");
  }
};

export const submitBlogComment = async (blog_id, commentData) => {
  try {
    const response = await axios.post(`${API_CONFIG.baseURL}/submit-comment`, {...commentData,blog_id});
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    return error.response?.data;
    // console.error("Error submitting comment:", error);
    // return { success: false, message: "Failed to submit comment" };
  }
};
