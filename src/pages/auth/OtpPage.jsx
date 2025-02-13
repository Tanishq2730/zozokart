import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../helper/Preloader'
import ScrollToTop from 'react-scroll-to-top'
import ColorInit from '../../helper/ColorInit'
import HeaderOne from '../../components/HeaderOne'
import FooterOne from '../../components/FooterOne'
import BottomFooter from '../../components/BottomFooter'
import Map from '../../components/Map'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const OtpPage = () => {


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
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 p-0'>
                        </div>
                        <div className="col-md-5">
                            <div className="border bg-white shadow border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-20 h-100 w-100">
                                <h4 className="text-xxl mb-0">Enter OTP here </h4>
                                <hr />
                                {/* <div className="social-login  d-flex justify-content-center align-items-center">
                                    <div className="d-flex flex-row gap-16">
                                        <button className="btn btn-info  btn-block d-flex align-items-center justify-content-center px-10" style={{ backgroundColor: '#1773ea' }}>
                                            <FaFacebook size={20} className='me-4' />  Sign In With Facebook
                                        </button>
                                        <button className="btn btn-warning btn-block d-flex align-items-center justify-content-center px-10" style={{ backgroundColor: '#ea4335' }}>
                                            <FaGoogle size={20} className='me-4' /> Sign In With  Gmail
                                        </button>
                                    </div>
                                </div> */}
                                {/* <p className='text-center'>Or</p> */}
                                {/* <Map /> */}
                                <label
                                    htmlFor="otp"
                                    style={{
                                        fontWeight: "500",
                                        marginBottom: "8px",
                                        color: "#212529",
                                    }}
                                >
                                    Enter OTP <span style={{ color: "#dc3545" }}>*</span>{" "}
                                </label>
                                <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                                    <div style={{ display: "flex", gap: "5px", marginTop: "8px" }}>
                                        {[...Array(4)].map((_, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    textAlign: "center",
                                                    fontSize: "18px",
                                                    border: "1px solid #ced4da",
                                                    borderRadius: "5px",
                                                }}
                                                onInput={(e) => {
                                                    const value = e.target.value;
                                                    if (value && value.length === 1 && index < 3) {
                                                        document.getElementById(`otp-${index + 1}`).focus();
                                                    }
                                                }}
                                                id={`otp-${index}`}
                                            />
                                        ))}
                                    </div>
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
                                        <a href="/verify-otp" className="btn btn-main py-18 px-40">
                                            Verify
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
                                {/* <div className="mt-20">
                                    <Link
                                        to="/forgot-pass"
                                        className="me-5 text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                    <Link
                                        to="/sign-up"
                                        className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                    >
                                        Sign Up
                                    </Link>
                                </div> */}
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

    )
}

export default OtpPage