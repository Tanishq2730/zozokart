import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Verify couponss from Database
export const verifyCoupon = async (data) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/verify-coupon`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};