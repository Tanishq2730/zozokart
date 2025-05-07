import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  SET_CART,
  CLEAR_CART,
  APPLY_DISCOUNT
} from "../actions/cartActions";
import { LOGOUT } from "./authReducer";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart)
      : {
          items: [],
          subTotal: 0.0,
          tax: 0.0,
          discount: 0.0,
          total: 0.0,
          couponCode: "",
          status: "active",
          _id: "",
          userId: ""
        };
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return {
      items: [],
      subTotal: 0.0,
      tax: 0.0,
      discount: 0.0,
      total: 0.0,
      couponCode: "",
      status: "active",
      _id: "",
      userId: ""
    };
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = cart => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const initialState = {
  cart: loadCartFromLocalStorage()
};

const calculateTotalWithDiscount = (subTotal, discount) => {
  return parseFloat(subTotal) - parseFloat(discount);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, variation, quantity } = action.payload;

      let updatedItems = [...state.cart.items];

      const existingItemIndex = updatedItems.findIndex(
        item =>
          item.productId._id === product._id &&
          item.variationId._id === variation._id
      );

      if (existingItemIndex !== -1) {
        updatedItems = updatedItems.map(
          (item, index) =>
            index === existingItemIndex
              ? {
                  ...item,
                  quantity: parseFloat(item.quantity) + quantity,
                  subTotal:
                    parseFloat(item.salePrice) * parseFloat(item.quantity) +
                    parseFloat(item.salePrice) * quantity,
                  total:
                    parseFloat(item.salePrice) *
                    (parseFloat(item.quantity) + quantity)
                }
              : item
        );
      } else {
        updatedItems.push({
          productId: product,
          variationId: variation,
          quantity: quantity,
          regularPrice: variation.regularPrice,
          salePrice: variation.salePrice,
          subTotal: parseFloat(variation.salePrice) * quantity,
          tax: 0.0,
          total: parseFloat(variation.salePrice) * quantity
        });
      }

      const newSubTotal = updatedItems.reduce(
        (total, item) => total + parseFloat(item.subTotal),
        0
      );
      const newTotal = calculateTotalWithDiscount(
        newSubTotal,
        state.cart.discount
      );

      const updatedCart = {
        ...state.cart,
        items: updatedItems,
        subTotal: newSubTotal,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case REMOVE_FROM_CART: {
      const updatedItems = state.cart.items.filter(
        item =>
          !(
            item.productId._id === action.payload.productId &&
            item.variationId._id === action.payload.variation._id
          )
      );

      const newSubTotal = updatedItems.reduce(
        (total, item) => total + parseFloat(item.subTotal),
        0
      );
      const newTax = updatedItems.reduce(
        (total, item) => total + parseFloat(item.tax),
        0
      );
      const newTotal = calculateTotalWithDiscount(
        newSubTotal,
        state.cart.discount
      );

      const updatedCart = {
        ...state.cart,
        items: updatedItems,
        subTotal: newSubTotal,
        tax: newTax,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case UPDATE_CART_QUANTITY: {
      const updatedItems = state.cart.items.map(
        item =>
          item.productId._id === action.payload.productId &&
          item.variationId._id === action.payload.variation._id
            ? {
                ...item,
                quantity: action.payload.quantity,
                subTotal: parseFloat(item.salePrice) * action.payload.quantity,
                total: parseFloat(item.salePrice) * action.payload.quantity
              }
            : item
      );

      const newSubTotal = updatedItems.reduce(
        (total, item) => total + parseFloat(item.subTotal),
        0
      );
      const newTotal = calculateTotalWithDiscount(
        newSubTotal,
        state.cart.discount
      );

      const updatedCart = {
        ...state.cart,
        items: updatedItems,
        subTotal: newSubTotal,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case APPLY_DISCOUNT: {
      const { discount, couponCode } = action.payload;
      const newTotal = calculateTotalWithDiscount(
        state.cart.subTotal,
        discount
      );

      const updatedCart = {
        ...state.cart,
        discount: discount,
        couponCode,
        total: newTotal
      };

      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case SET_CART: {
      const updatedCart = action.payload.updatedCart;
      saveCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case LOGOUT: {
      const emptyCart = {
        items: [],
        subTotal: 0.0,
        tax: 0.0,
        discount: 0.0,
        total: 0.0,
        coupon_code: "",
        _id: "",
        userId: ""
      };
      localStorage.removeItem("cart");
      return { ...state, cart: emptyCart };
    }

    case CLEAR_CART: {
      const emptyCart = {
        items: [],
        subTotal: 0.0,
        tax: 0.0,
        discount: 0.0,
        total: 0.0,
        coupon_code: "",
        status: "active",
        _id: "",
        userId: ""
      };
      localStorage.removeItem("cart");
      return { ...state, cart: emptyCart };
    }

    default:
      return state;
  }
};

export default cartReducer;
