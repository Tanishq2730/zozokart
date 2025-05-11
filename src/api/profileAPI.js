import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 4️⃣ Update Cart Quantity in Database
export const getUserDetails = async (data) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/get-user-details`
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error updating cart:", error);
  }
};
// 🛒 4️⃣ Update Cart Quantity in Database
export const updateUserProfile = async (data) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/update-user-profile`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error updating cart:", error);
  }
};

export const deactivateUserAccount = async (data) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/deactivate-user-account`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error updating cart:", error);
  }
};

// 🛒 5️⃣ Remove Item from Database Cart
export const deleteUserAccount = async id => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/delete-user-account`,'POST'
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error removing item from cart:", error);
  }
};
