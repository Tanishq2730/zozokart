import {
  addToUserCart,
  fetchUserCart,
  removeFromUserCart,
  syncLocalCartToDB,
  updateUserCart
} from "../api/cartAPI";
import { showToast } from "../components/ToastifyNotification";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const SET_CART = "SET_CART";
export const CLEAR_CART = "REMOVE_CART";
export const TOGGLE_CART_SIDEBAR = "TOGGLE_CART_SIDEBAR";
export const APPLY_DISCOUNT = "APPLY_DISCOUNT";

// Load from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : { items: [] };
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return { items: [] };
  }
};

// Save to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

// Merge local and DB carts
const mergeCarts = (dbCartItems, localCartItems) => {
  const merged = [...dbCartItems];

  localCartItems.forEach(localItem => {
    const existingItem = merged.find(item =>
      item.productId === localItem.productId &&
      (item.variationId || null) === (localItem.variationId || null)
    );

    if (existingItem) {
      existingItem.quantity = (
        parseFloat(existingItem.quantity) + parseFloat(localItem.quantity)
      ).toString();
    } else {
      merged.push(localItem);
    }
  });

  return merged;
};

// Sync with DB
export const syncCartWithDatabase = () => async (dispatch, getState) => {
  const state = getState();
  if (!state.auth?.isAuthenticated) return;

  try {
    const { data: databaseCart } = await fetchUserCart();
    const databaseCartItems = databaseCart?.items || [];

    const localCart = loadCartFromLocalStorage();

    const mergedCart = {
      ...databaseCart,
      items: mergeCarts(databaseCartItems, localCart.items || []),
    };

    const { data: updatedCart } = await syncLocalCartToDB(mergedCart);
    dispatch({ type: SET_CART, payload: { updatedCart } });
    saveCartToLocalStorage(updatedCart);
    showToast("success", "Cart synced successfully!");
  } catch (error) {
    console.error("Error syncing cart", error);
    showToast("error", "Failed to sync cart");
  }
};

// Add item
export const addToCart = (product, variation, quantity) => async (dispatch, getState) => {
  if (quantity <= 0) return showToast("error", "Invalid quantity!");

  const state = getState();
  const variationId = variation?._id || null;

  if (state.auth?.isAuthenticated) {
    try {
      const cartItems = state.cart.cart.items;

      const existingItem = cartItems.find(
        item => item.productId === product._id && (item.variationId || null) === variationId
      );

      const newQuantity = existingItem
        ? parseInt(existingItem.quantity) + quantity
        : quantity;

      const response = await addToUserCart({
        productId: product._id,
        variationId,
        quantity: newQuantity
      });

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

// Remove item
export const removeFromCart = (productId, variation) => async (dispatch, getState) => {
  const variationId = variation?._id || null;
  const state = getState();

  if (state.auth?.isAuthenticated) {
    try {
      const response = await removeFromUserCart({ productId, variationId });
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

// Update quantity
export const updateCartQuantity = (productId, variation, quantity, cart_item_id) => async (dispatch, getState) => {
  if (quantity <= 0) return showToast("error", "Quantity must be at least 1!");
  const state = getState();
  const variationId = variation?._id || null;

  if (state.auth?.isAuthenticated) {
    try {
      const response = await updateUserCart({
        productId,
        variationId,
        quantity,
        cart_item_id
      });

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

// Toggle cart sidebar
export const toggleCartSidebar = (isSidebarOpen) => dispatch => {
  dispatch({ type: TOGGLE_CART_SIDEBAR, payload: { isSidebarOpen } });
};

// Apply discount
export const applyDiscount = (discount, coupon_code) => ({
  type: APPLY_DISCOUNT,
  payload: { discount, coupon_code }
});
