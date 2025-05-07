// src/actions/cartActions.js

import { showToast } from "../components/ToastifyNotification";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY"; // ✅ Add this

export const addToCart = (product, variation, quantity) => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: { product, variation, quantity } });

  showToast("success", `${product.name} added to cart!`);
};

export const removeFromCart = (productId, variation) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { productId, variation }
  });

  showToast("success", "Item removed from cart!");
};

export const updateCartQuantity = (
  productId,
  variation,
  quantity
) => dispatch => {
  dispatch({
    type: UPDATE_CART_QUANTITY,
    payload: { productId, variation, quantity }
  });

  showToast("success", "Cart updated!");
};
