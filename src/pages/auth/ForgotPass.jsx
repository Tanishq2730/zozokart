import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../helper/Preloader'
import ScrollToTop from 'react-scroll-to-top'
import ColorInit from '../../helper/ColorInit'
import HeaderOne from '../../components/HeaderOne'
import FooterOne from '../../components/FooterOne'
import BottomFooter from '../../components/BottomFooter'

const ForgotPass = () => {


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
            <section className="py-60 auth-bg">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 p-0'>
                        </div>
                        <div className="col-md-5">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100 w-100 bg-white">
                                <h4 className="text-xxl mb-0">Forgot Password </h4>
                                <hr/>
                                <div className="mb-24">
                                    <label
                                        htmlFor="username"
                                        className="text-neutral-900 mb-8 fw-medium"
                                    >
                                        Email address <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="username"
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                {/* <div className="mb-24">
                                    <label
                                        htmlFor="password"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
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
                                <div className="mb-24 mt-48">
                                    <div className="flex-align gap-48 flex-wrap">
                                        <button type="submit" className="btn btn-main py-18 px-40">
                                            Submit
                                        </button>
                                        <div className="form-check common-check">
                                            {/* <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="remember"
                                            /> */}
                                            {/* <label
                                                className="form-check-label flex-grow-1"
                                                htmlFor="remember"
                                            >
                                                Remember me
                                            </label> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="mt-48">
                                    <Link
                                        to="/sign-in"
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

export default ForgotPass