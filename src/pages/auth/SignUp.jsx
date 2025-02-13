import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../helper/Preloader'
import ScrollToTop from 'react-scroll-to-top'
import ColorInit from '../../helper/ColorInit'
import HeaderOne from '../../components/HeaderOne'
import FooterOne from '../../components/FooterOne'
import BottomFooter from '../../components/BottomFooter'

const SignUp = () => {


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
            <section className=" py-20 auth-bg">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 p-0'>
                        </div>
                        <div className="col-md-5">
                           <div className="border shadow border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 bg-white">
                                <h4 className="text-xxl mb-0">Sign Up </h4>
                                <hr/>
                                <div className="mb-24">
                                    <label
                                        htmlFor="usernameTwo"
                                        className="text-neutral-900 mb-8 fw-medium"
                                    >
                                        Fullname <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="usernameTwo"
                                        placeholder="Write a username"
                                    />
                                </div>
                                <div className="mb-24">
                                    <label
                                        htmlFor="mobile"
                                        className="text-neutral-900 mb-8 fw-medium"
                                    >
                                        Mobile No.
                                        <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="number"
                                        className="common-input"
                                        id="mobile"
                                        placeholder="Enter Mobile No."
                                    />
                                </div>
                                <div className="mb-24">
                                    <label
                                        htmlFor="emailTwo"
                                        className="text-neutral-900 mb-8 fw-medium"
                                    >
                                        Email address (optional)
                                        <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="email"
                                        className="common-input"
                                        id="emailTwo"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                                <div className="my-20">
                                    <p className="text-gray-500">
                                        <Link to="/sign-in" className="ms-4 text-main-600 text-decoration-underline">
                                           Sign In
                                        </Link>
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <Link to="/sign-in"  type="submit" className="btn btn-main py-18 px-40">
                                        Submit
                                    </Link>
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

    )
}

export default SignUp