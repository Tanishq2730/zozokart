import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "select2/dist/js/select2.min.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import store from "./store";
import { Provider } from "react-redux";
import ToastifyNotification from "./components/ToastifyNotification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastifyNotification />
    <App />
  </Provider>
);

reportWebVitals();
