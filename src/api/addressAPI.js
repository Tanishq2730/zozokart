import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const getUserAddresses = async () => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/user-address`,'GET'
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};

// 🛒 3️⃣ Add Item to Cart in Database
export const addUserAddress = async data => {
  console.log(data);
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/user-address`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error adding item to cart:", error);
  }
};

// 🛒 4️⃣ Update Cart Quantity in Database
export const updateUserAddress = async (id,data) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/user-address/${id}`,'PATCH',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error updating cart:", error);
  }
};

// 🛒 5️⃣ Remove Item from Database Cart
export const deleteUserAddress = async id => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/user-address/${id}`,'DELETE'
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error removing item from cart:", error);
  }
};
