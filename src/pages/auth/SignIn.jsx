import React from "react";
import { Link } from "react-router-dom";
import Preloader from "../../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../../helper/ColorInit";
import HeaderOne from "../../components/HeaderOne";
import FooterOne from "../../components/FooterOne";
import BottomFooter from "../../components/BottomFooter";
import Map from "../../components/Map";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />
      <section className="py-80 auth-bg ">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-7 p-0"></div> */}
            <div className="col-md-5 m-auto">
              <div className="border bg-white shadow border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-20 h-100 w-100">
                <h4 className="text-xxl mb-0">Sign In </h4>
                <hr />
                
                {/* <Map /> */}
                <div className="mb-24">
                  <label
                    htmlFor="username"
                    className="text-neutral-900  mb-8 fw-medium"
                  >
                    Please Enter Your Register Mobile No. or Email{" "}
                    <span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="common-input"
                    id="username"
                    placeholder="Email or mobile no."
                  />
                </div>
                {/* <div className="mb-24">
                                    <label
                                        htmlFor="password"
                                        className="text-neutral-900  mb-8 fw-medium"
                                    >
                                        Password
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="password"
                                            className="common-input"
                                            id="password"
                                            placeholder="Enter Password"
                                            defaultValue="password"
                                        />
                                        <span
                                            className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                                            id="#password"
                                        />
                                    </div>
                                </div> */}
                <div className="mb-10 mt-20">
                  <div className="flex-align gap-48 flex-wrap">
                    <a href="/otp-page" className="btn btn-main py-18 px-40">
                      Submit
                    </a>
                    {/* <button type="submit" >
                                          
                                        </button> */}
                    {/* <div className="form-check common-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="remember"
                                            />
                                            <label
                                                className="form-check-label flex-grow-1"
                                                htmlFor="remember"
                                            >
                                                Remember me
                                            </label>
                                        </div> */}
                  </div>
                </div>
                <div className="mt-20">
                  {/* <Link
                                        to="/forgot-pass"
                                        className="me-5 text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                    >
                                        Forgot your password?
                                    </Link> */}
                  <Link
                    to="/sign-up"
                    className="me-1 text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                  >
                    Sign Up
                  </Link>
                  <span style={{ fontSize: "12px" }}>
                    (If you not Register please clink on Sign Up)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default SignIn;
