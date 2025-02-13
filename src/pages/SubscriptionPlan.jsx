import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import Fade from "react-reveal/Fade"; // For animation effects
import { FaCheckCircle } from "react-icons/fa";

const SubscriptionPlan = () => {
    return (
        <>
            {/* ColorInit */}
            <ColorInit color={false} />

            {/* ScrollToTop */}
            <ScrollToTop smooth color="#FA6400" />

            {/* Preloader */}
            <Preloader />

            {/* HeaderOne */}
            <HeaderOne category={true} />

            {/* Breadcrumb */}
            <Breadcrumb title={"Subscription"} />

            {/* Description Section */}
            <section className="grace-of-cows">
                <div className="container text-center">
                    <h3>Our Subscription Plan</h3>
                    <p className="mb-20">
                        Welcome to the "Grace of Cows," where we bring you natural, organic,
                        and wholesome products that are rich in nutrients. From A2 Ghee and
                        A2 Milk to Cold Pressed Oils, we ensure the best quality straight from
                        farms to your doorstep. Our subscription plans are designed to fit your
                        daily health needs.
                    </p>
                </div>
            </section>

            {/* Subscription Plans */}
            <section className="subscription-plans my-5">
                <div className="container">
                    <div className="row">

                        {/* Subscription Plan for A2 Ghee */}
                        <Fade bottom>
                            <div className="col-md-4 mb-4">
                                <div className="subscription-card p-20 text-center" style={{ backgroundColor: '#daf2db', borderRadius: '10px',  borderBottomLeftRadius:'50px',borderTopRightRadius:'50px' }}>
                                    <h4>Weekly Plan</h4>
                                    <p>Subscribe to our Weekly Plan, daily service A2 Ghee, A2 Milk and Fresh Cold Pressed Oils and get fresh, organic every day.</p>
                                    <h2 className="mt-10 mb-10">
                                        ₹300<small style={{ fontSize: '14px' }}>Price</small>
                                    </h2>
                                    <ul>
                                        <li><FaCheckCircle stroke="#0d763e" color="#0d763e" /> Daily Fresh A2 Ghee</li>
                                        <li><FaCheckCircle stroke="#0d763e" color="#0d763e" /> Rich in Omega-3</li>
                                        <li><FaCheckCircle stroke="#0d763e" color="#0d763e" /> Helps in Digestion</li>
                                    </ul>
                                    <button className="btn btn-main rounded-pill gap-8 my-30">Subscribe Now</button>
                                </div>
                            </div>
                        </Fade>

                        {/* Subscription Plan for A2 Milk */}
                        <Fade bottom delay={100}>
                            <div className="col-md-4 mb-4">
                                <div className="subscription-card p-20 text-center" style={{ backgroundColor: '#f8eae4', borderRadius: '10px', borderBottomLeftRadius:'50px',borderTopRightRadius:'50px' }}>
                                    <h4>Monthly Plan</h4>
                                    <p>Subscribe to our Monthly Plan, daily service A2 Ghee, A2 Milk and Fresh Cold Pressed Oils and get fresh, organic every day.</p>
                                    <h2 className="mt-10 mb-10">
                                        ₹600<small style={{ fontSize: '14px' }}>Price</small>
                                    </h2>
                                    <ul>
                                        <li> <FaCheckCircle stroke="#0d763e" color="#0d763e" /> Fresh & Hormone-Free</li>
                                        <li> <FaCheckCircle stroke="#0d763e" color="#0d763e" /> Rich in Protein</li>
                                        <li><FaCheckCircle stroke="#0d763e" color="#0d763e" /> Boosts Immunity</li>
                                    </ul>
                                    <button className="btn btn-main rounded-pill gap-8 my-30">Subscribe Now</button>
                                </div>
                            </div>
                        </Fade>

                        {/* Subscription Plan for Cold Pressed Oils */}
                        <Fade bottom delay={200}>
                            <div className="col-md-4 mb-4">
                                <div className="subscription-card p-20 text-center" style={{ backgroundColor: '#ebf3de', borderRadius: '10px', borderBottomLeftRadius:'50px',borderTopRightRadius:'50px' }}>
                                    <h4>Yearly Plan</h4>
                                    <p>Subscribe to our Yearly Plan, daily service A2 Ghee, A2 Milk and Fresh Cold Pressed Oils and get fresh, organic every day.</p>
                                    <h2 className="mt-10 mb-10">
                                        ₹900<small style={{ fontSize: '14px' }}>Price</small>
                                    </h2>
                                    <ul>
                                        <li> <FaCheckCircle stroke="#0d763e" color="#0d763e" /> Fresh Cold Pressed Oils</li>
                                        <li><FaCheckCircle stroke="#0d763e" color="#0d763e" /> Rich in Nutrients</li>
                                        <li><FaCheckCircle stroke="#0d763e" color="#0d763e" /> Improves Heart Health</li>
                                    </ul>
                                    <button className="btn btn-main rounded-pill gap-8 my-30">Subscribe Now</button>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </section>

            {/* ShippingOne */}
            <ShippingOne />

            {/* FooterOne */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>
    );
};

export default SubscriptionPlan;
