import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer // Pass the root reducer
});

export default store;
