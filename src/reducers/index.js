import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import loaderReducer from "./loaderReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  loader: loaderReducer
});

export default rootReducer;
