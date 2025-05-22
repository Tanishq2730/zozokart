import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import { GiCow } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { Fade } from "react-reveal";
import ReactPlayer from "react-player";
import CommonCategoryHeader from "../components/commonCategoryHeader";
const AboutPage = () => {
    return (
        <>
            {/* ColorInit */}
            <ColorInit color={false} />

            {/* ScrollToTop */}
            <ScrollToTop smooth color="#FA6400" />

            {/* Preloader */}
            <Preloader />

            {/* HeaderTwo */}
            <HeaderOne category={true} />
            <CommonCategoryHeader/>

            {/* Breadcrumb */}
            <Breadcrumb title={"About Us"} />

            {/* section 1 start */}

            <section className="mb-60 mt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Fade left>
                                <div className="">
                                    <h3>Who We Are?</h3>
                                    <p>
                                        Grace Of Cows, established in 2014 in Pune, is committed to offering pure,
                                        organic products directly from our certified farm. We specialize in 100%
                                        natural, unprocessed goods and focus on sustainable farming practices that
                                        benefit both the environment and your health. Our dedication to supporting
                                        local communities ensures that every product you receive is fresh and authentic.
                                        Experience the true essence of organic quality with Grace Of Cows
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 mt-10">
                                            <GiCow size={60} />
                                            <h2 className="mb-0" style={{ color: '#0d763e' }}>300+</h2>
                                            <h6 className="mb-0">Gir Cows</h6>
                                        </div>
                                        <div className="col-md-6 mt-10">
                                            <PiFarm size={60} />
                                            <h2 className="mb-0" style={{ color: '#0d763e' }}>100+</h2>
                                            <h6 className="mb-0">Acres Organic Farm</h6>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6">
                            <Fade right>
                                <div className="mb-10 mt-20">
                                    <img src="assets/images/common/who-we-are-img.jpg" alt="" className="rounded" width="100%" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            <section className="abt-bg pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6 pt-80">
                            <Fade left>
                                <h3 className="text-white">Our Commitment</h3>
                                <p className="text-white">
                                    At Grace Of Cows, we pledge unwavering dedication to purity and
                                    sustainability. Our product is crafted with the finest organic
                                    ingredients, honouring traditional methods. We are committed to
                                    promoting holistic wellness and supporting eco-friendly practices,
                                    ensuring that every product reflects our values of quality and care.
                                    Join us in our mission to nurture health and the planet, one drop
                                    at a time.
                                </p>
                            </Fade>
                        </div>
                        <div class="col-md-6 py-30">
                            <Fade right>
                                <div className="p-10  mt-20 rounded" style={{ border: '1px dashed#fff' }}>
                                    <div className="row">
                                        <dic className="col-2 text-center">
                                            <div className="">
                                                <img src="assets/images/common/comm-icon-1-72x72.png" alt="" />
                                            </div>
                                        </dic>
                                        <dic className="col-10">
                                            <h4 className="mb-0 text-white">Vision</h4>
                                            <p className="text-white">
                                                Transforming dairy with pure, organic goodness for
                                                healthier lives and a thriving planet.
                                            </p>
                                        </dic>
                                    </div>
                                </div>
                                <div className="p-10  mt-20 rounded" style={{ border: '1px dashed#fff' }}>
                                    <div className="row">
                                        <dic className="col-2 text-center">
                                            <div className="">
                                                <img src="assets/images/common/comm-icon-2-72x72.png" alt="" />
                                            </div>
                                        </dic>
                                        <dic className="col-10">
                                            <h4 className="mb-0 text-white">Mission</h4>
                                            <p className="text-white">
                                                Crafting pure, organic dairy with care, nurturing
                                                health and sustainability in every drop.
                                            </p>
                                        </dic>
                                    </div>
                                </div>
                                <div className="p-10  mt-20 rounded" style={{ border: '1px dashed#fff' }}>
                                    <div className="row">
                                        <dic className="col-2 text-center">
                                            <div className="">
                                                <img src="assets/images/common/comm-icon-3-72x72.png" alt="" />
                                            </div>
                                        </dic>
                                        <dic className="col-10">
                                            <h4 className="mb-0 text-white">Value</h4>
                                            <p className="text-white">
                                                Values rooted in purity, tradition, and sustainability
                                                for a healthier world and community
                                            </p>
                                        </dic>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-60 mb-60">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Fade left>
                                <div className="mx-20">
                                    <h3>Our Aim</h3>
                                    <div className="row">
                                        <div className="col-md-6 mb-10">
                                            <div className="p-10 shadow"> 
                                                <img src="assets/images/common/aim-icon.png" alt=""  width="50px" />
                                                <h6>Express Deliver Pure Quality</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-10">
                                            <div className="p-10 shadow">
                                                <img src="assets/images/common/aim-icon-2.png" alt="" width="50px" />
                                                <h6>Promote Sustainable Farming</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-10">
                                            <div className="p-10 shadow">
                                                <img src="assets/images/common/aim-icon-3.png" alt="" width="50px" />
                                                <h6>Enhance Nutritional Benefits</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-10">
                                            <div className="p-10 shadow">
                                                <img src="assets/images/common/aim-icon-4.png" alt="" width="50px"/>
                                                <h6>Educate on A2 Milk & A2 Ghee</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-10">
                                            <div className="p-10 shadow">
                                                <img src="assets/images/common/aim-icon-5.png" alt="" width="50px"/>
                                                <h6>Uphold Traditional Practices</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-md-6">
                            <Fade right>
                                <ReactPlayer
                                    url='https://www.youtube.com/embed/yvgO0zgWRDo?feature=oembed&loop=0&mute=0&controls=1'
                                    playing
                                    light='https://i.ytimg.com/vi_webp/yvgO0zgWRDo/maxresdefault.webp'
                                    width="100%"
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 1 close */}

            {/* ShippingOne */}
            {/* <ShippingOne /> */}

            {/* FooterTwo */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>
    );
};

export default AboutPage;
