// src/actions/cartActions.js
import { addToUserCart, fetchUserCart, removeFromUserCart, syncLocalCartToDB, updateUserCart } from "../api/cartAPI";
import { showToast } from "../components/ToastifyNotification";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const SET_CART = "SET_CART";
export const CLEAR_CART = "REMOVE_CART";
export const TOGGLE_CART_SIDEBAR = "TOGGLE_CART_SIDEBAR";
export const APPLY_DISCOUNT = "APPLY_DISCOUNT";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return { items: [] };
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

// Sync Local Cart with Database
export const syncCartWithDatabase = () => async (dispatch, getState) => {
  const state = getState();
  if (!state.auth?.isAuthenticated) return;

  try {
    const { data: databaseCart } = await fetchUserCart();
    const databaseCartItems = databaseCart?.items || []; // ✅ Extract items
    console.log("Database Cart Items:", databaseCartItems);

    const localCart = loadCartFromLocalStorage();
    console.log("Local Cart Items:", localCart);

    // Merge carts
    const mergedCart = {
      ...databaseCart, // Keep DB structure
      items: mergeCarts(databaseCartItems, localCart.items || []),
    };

    console.log("Merged Cart:", mergedCart);

    const { data: updatedCart } = await syncLocalCartToDB(mergedCart);
    dispatch({ type: SET_CART, payload: {updatedCart} });
    saveCartToLocalStorage(updatedCart);
    showToast("success", "Cart synced successfully!");
  } catch (error) {
    console.error("Error syncing cart", error);
    showToast("error", "Failed to sync cart");
  }
};

const mergeCarts = (dbCartItems, localCartItems) => {
  const merged = [...dbCartItems];

  localCartItems.forEach(localItem => {
    const existingItem = merged.find(
      item => item.productId === localItem.productId && item.variationId === localItem.variationId
    );

    if (existingItem) {
      existingItem.quantity = (parseFloat(existingItem.quantity) + parseFloat(localItem.quantity)).toString();
    } else {
      merged.push(localItem);
    }
  });

  return merged;
};


export const addToCart = (product, variation, quantity) => async (dispatch, getState) => {
  console.log(product)
  console.log(variation)
  console.log(quantity)
  if (quantity <= 0) return showToast("error", "Invalid quantity!");
  const state = getState();
  if (state.auth?.isAuthenticated) {
    try {
       const state = getState();
      const cartItems = state.cart.cart.items;

      const existingItem = cartItems.find(
        (item) =>
          item.productId === product._id &&
          item.variationId === variation._id
      );

      var newQuantity = quantity;
      if (existingItem) {
        newQuantity = parseInt(existingItem.quantity) + quantity;
      }
      
      const response = await addToUserCart({ productId: product._id, variationId: variation._id, quantity:newQuantity });
      if (response.success) {
        const updatedCart = response.data;
        dispatch({ type: SET_CART, payload: { updatedCart } });
        showToast("success", `${product.name} added to cart!`);
      }
    } catch (error) {
      showToast("error", "Failed to add to cart");
    }
  } else {
    dispatch({ type: ADD_TO_CART, payload: { product, variation, quantity } });
    showToast("success", `${product.name} added to cart!`);
  }
};

export const removeFromCart = (productId, variation) => async (dispatch, getState) => {
  const state = getState();
  if (state.auth?.isAuthenticated) {
    try {
      const response = await removeFromUserCart({ productId: productId, variationId: variation._id });
      if (response.success) {
        const updatedCart = response.data;
        dispatch({ type: SET_CART, payload: { updatedCart } });
        showToast("success", "Item removed from cart!");
      }
    } catch (error) {
      showToast("error", "Failed to remove item");
    }
  } else {
    dispatch({ type: REMOVE_FROM_CART, payload: { productId, variation } });
    showToast("success", "Item removed from cart!");
  }
};

export const updateCartQuantity = (productId, variation, quantity,cart_item_id) => async (dispatch, getState) => {
  console.log('quantity',quantity);
  
  if (quantity <= 0) return showToast("error", "Quantity must be at least 1!");
  const state = getState();
  if (state.auth?.isAuthenticated) {
    try {
      const response = await updateUserCart({ productId: productId, variationId: variation._id, quantity,cart_item_id });
      if (response.success) {
        const updatedCart = response.data;
        dispatch({ type: SET_CART, payload: { updatedCart } });
        showToast("success", "Cart updated!");
      }
    } catch (error) {
      showToast("error", "Failed to update cart");
    }
  } else {
    dispatch({ type: UPDATE_CART_QUANTITY, payload: { productId, variation, quantity } });
    showToast("success", "Cart updated!");
  }
};

export const toggleCartSidebar = (isSidebarOpen) => dispatch => {
  dispatch({ type: TOGGLE_CART_SIDEBAR, payload: { isSidebarOpen } });
};

export const applyDiscount = (discount, coupon_code) => ({
  type: APPLY_DISCOUNT,
  payload: { discount, coupon_code }
});