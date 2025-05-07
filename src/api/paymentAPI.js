import axios from "axios";
import { API_CONFIG, API_CONFIG_AUTH } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const createRazorpayOrder = async (data) => {
  try {
    const response = await fetchWithAuth(
            `${API_CONFIG.baseURL}/web/create-razorpay-order`,'POST',data
          );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};