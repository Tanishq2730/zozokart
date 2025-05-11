import axios from "axios";
import { API_CONFIG, API_CONFIG_AUTH } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const getTransactions = async (data) => {
  try {
    const response = await fetchWithAuth(
      `${API_CONFIG.baseURL}/web/transactions`
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};