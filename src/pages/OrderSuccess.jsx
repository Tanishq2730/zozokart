import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../helper/Preloader'
import ScrollToTop from 'react-scroll-to-top'
import ColorInit from '../helper/ColorInit'
import HeaderOne from '../components/HeaderOne'
import FooterOne from '../components/FooterOne'
import BottomFooter from '../components/BottomFooter'
import { FaCheckCircle } from 'react-icons/fa' // Success Icon
import CommonCategoryHeader from '../components/commonCategoryHeader'
const OrderSuccess = () => {

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
            <CommonCategoryHeader/>
            <section className="py-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="text-center p-20 shadow ">
                                <div className="mb-4">
                                    <FaCheckCircle size={80} color="#299E60" />
                                </div>
                                {/* Success Message */}
                                <h4 className="my-20">Order Placed Successfully</h4>
                                <p className="mb-30">
                                    Your order has been successfully.
                                </p>
                                {/* Back to Home Button */}
                                <Link to="/" className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8">
                                    Back to Home
                                </Link>
                                   
                            </div>
                        </div>
                        <div className="col-md-3"></div>
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

export default OrderSuccess
