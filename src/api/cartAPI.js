import axios from "axios";
import { API_CONFIG } from "../utils/api-config";
import fetchWithAuth from "../utils/apiAthurization";

// 🛒 1️⃣ Fetch User Cart from Database
export const fetchUserCart = async () => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/get-cart`,'GET'
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error fetching user cart:", error);
    // return [];
  }
};

// 🛒 2️⃣ Sync Local Cart with Database (On Login)
export const syncLocalCartToDB = async (cart) => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/cart-sync`,'POST',cart
      );
    return response.data; // Return success message
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error syncing cart:", error);
    // return { message: "Failed to sync cart" };
  }
};

// 🛒 3️⃣ Add Item to Cart in Database
export const addToUserCart = async data => {
  console.log(data);
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/add-item-to-cart`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error adding item to cart:", error);
  }
};

// 🛒 4️⃣ Update Cart Quantity in Database
export const updateUserCart = async data => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/update-cart-item-quantity`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error updating cart:", error);
  }
};

// 🛒 5️⃣ Remove Item from Database Cart
export const removeFromUserCart = async data => {
  try {
    const response = await fetchWithAuth(
        `${API_CONFIG.baseURL}/web/remove-cart-item`,'POST',data
      );
    return response.data;
  } catch (error) {
    return error.response?.data;
    // console.error("❌ Error removing item from cart:", error);
  }
};
