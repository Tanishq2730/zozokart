import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api/homeAPI";
import "./FooterOne.scss";

const FooterOne = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const data = await fetchCategories();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-column">
              <div className="footer-logo">
                <Link to="/">
                  <img
                    src="/zozo_cart_website/assets/images/logo/logo.png"
                    alt="Zozo Kart Logo"
                  />
                </Link>
              </div>
              <div className="footer-about">
                <p className="text-white">
                  At Zozo Kart, we bring you a curated collection of stylish
                  clothing and premium bags, designed to elevate your fashion
                  statement. Explore our trendy and high-quality products,
                  crafted for elegance and comfort.
                </p>
              </div>
              <div className="footer-social">
                <a href="#" className="facebook" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="twitter" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="instagram" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="linkedin" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="youtube" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-column">
              <h3>Categories</h3>
              <div className="footer-links">
                <ul>
                  {categories.map((category, index) =>
                    <li key={index}>
                      <Link to={`/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-column">
              <h3>Customer Service</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/returns-policy">Returns & Exchange</Link>
                  </li>
                  <li>
                    <Link to="/shipping-policy">Shipping Information</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/size-guide">Size Guide</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-column">
              <h3>Contact Us</h3>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <div className="icon">
                    <MdLocationOn />
                  </div>
                  <span className="text">
                    123 Fashion Street, Style Avenue,
                    <br />
                    Mumbai, Maharashtra 400001
                  </span>
                </div>
                <div className="footer-contact-item">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <a href="mailto:support@zozokart.in">support@zozokart.in</a>
                </div>
                <div className="footer-contact-item">
                  <div className="icon">
                    <MdLocalPhone />
                  </div>
                  <a href="tel:+919371290000">+91 93712 90000</a>
                </div>
              </div>
              <div className="footer-apps">
                <h4>Download Our App</h4>
                <div className="footer-apps-container">
                  <a href="#" className="me-2">
                    <img
                      src="/zozo_cart_website/assets/images/thumbs/store-img1.png"
                      alt="App Store"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/zozo_cart_website/assets/images/thumbs/store-img2.png"
                      alt="Play Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-bottom-copyright">
              © {new Date().getFullYear()} Zozo Kart. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <a
          href="https://api.whatsapp.com/send/?phone=919371299955&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </footer>
  );
};

export default FooterOne;
