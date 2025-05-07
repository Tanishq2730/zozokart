const API_BASE_URL = "http://127.0.0.1:9000/api/v2";
export const IMAGE_URL = "http://localhost:9000";
export const RAZORPAY_KEY_ID = "rzp_test_sbbCHuQzenmT45";

// const API_BASE_URL = "https://admissions-direct.in/graceofcows-backend/api/v2";
// export const IMAGE_URL = "https://admissions-direct.in/graceofcows-backend/storage";

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

export const API_MULTIPART_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
