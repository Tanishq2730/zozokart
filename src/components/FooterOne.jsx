import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api/homeAPI";

const FooterOne = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      if (data.success) {
        console.log(data.data);
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <footer className="footer py-60">
      {/* <img
        src="assets/images/bg/body-bottom-bg.png"
        alt="BG"
        className="body-bottom-bg"
      /> */}
      <div className="container container-lg">
        <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
          <div className="footer-item">
            <div className="footer-item__logo">
              <Link to="/">
                {" "}<img src="assets/images/logo/logo.png" alt="" />
              </Link>
            </div>
            <p className="mb-24">
              At Zozo Kart, we bring you a curated <br />
              collection of stylish clothing and premium bags, <br />
              designed to elevate your fashion statement. <br />
              Explore our trendy and high-quality products, <br />
              crafted for elegance and comfort.
            </p>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Useful Links</h6>
            <ul className="footer-menu">
              <li className="mb-5">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Home
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/about" className="text-gray-600 hover-text-main-600">
                  About Us
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Shop
                </Link>
              </li>
              {/* <li className="mb-5">
                                <Link to="/" className="text-gray-600 hover-text-main-600">
                                    SUBSCRIPTION
                                </Link>
                            </li> */}
              <li className="mb-5">
                <Link
                  to="/contact"
                  className="text-gray-600 hover-text-main-600"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Categories</h6>
            <ul className="footer-menu">
              {categories &&
                categories.map(category =>
                  <li className="mb-5">
                    <Link to="/" className="text-gray-600 hover-text-main-600">
                      {category.name}
                    </Link>
                  </li>
                )}
              {/* <li className="mb-5">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Shirts
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Jeans
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Bag
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Shopping In</h6>
            <ul className="footer-menu">
              <li className="mb-5">
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover-text-main-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/returns-policy"
                  className="text-gray-600 hover-text-main-600"
                >
                  Returns Policy
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/terms-conditions"
                  className="text-gray-600 hover-text-main-600"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/shipping-policy"
                  className="text-gray-600 hover-text-main-600"
                >
                  Shipping & Delivery Policy
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/refund-policy"
                  className="text-gray-600 hover-text-main-600"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Contact Us</h6>
            <div className="">
              <ul>
                <li>
                  <p className="text-dark">
                    It is a long established fact that a reader
                    <br /> will be distracted by the readable content <br />
                    of a page when looking at its layout.
                  </p>
                </li>
                <li className="text-dark">
                  <Link to="/" className="text-dark">
                    +91 93712900000
                  </Link>
                </li>
                <li className="text-dark">
                  <Link to="/" className="text-dark">
                    support@zozokart.in
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-align gap-8 my-10">
              <Link to="/https://www.apple.com/store" className="">
                <img src="assets/images/thumbs/store-img1.png" alt="" />
              </Link>
              <Link to="/https://play.google.com/store/apps?hl=en" className="">
                <img src="assets/images/thumbs/store-img2.png" alt="" />
              </Link>
            </div>
            <ul className="flex-align gap-16">
              <li>
                <Link
                  to="/https://www.facebook.com"
                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                >
                  <i className="ph-fill ph-facebook-logo" />
                </Link>
              </li>
              <li>
                <Link
                  to="/https://www.twitter.com"
                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                >
                  <i className="ph-fill ph-twitter-logo" />
                </Link>
              </li>
              <li>
                <Link
                  to="/https://www.linkedin.com"
                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                >
                  <i className="ph-fill ph-instagram-logo" />
                </Link>
              </li>
              <li>
                <Link
                  to="/https://www.pinterest.com"
                  className="w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white"
                >
                  <i className="ph-fill ph-linkedin-logo" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="wh-icon">
        <a href=" https://api.whatsapp.com/send/?phone=919371299955&text&type=phone_number&app_absent=0">
          <FaWhatsapp className="wh-i" />
        </a>
      </div> */}
    </footer>
  );
};

export default FooterOne;
