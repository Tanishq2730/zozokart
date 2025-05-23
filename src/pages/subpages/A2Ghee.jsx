import React from "react";
import BottomFooter from "../../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../../components/HeaderOne";
import FooterOne from "../../components/FooterOne";
import { Col, Container, Row } from "reactstrap";
import GraceCowFullVideo from "../../components/GraceCowFullVideo";
import { Link } from "react-router-dom";
const A2Ghee = () => {
    return (
        <>

            {/* ScrollToTop */}
            <ScrollToTop smooth color="#FA6400" />


            {/* HeaderTwo */}
            <HeaderOne />

            <section className="pt-30" style={{ background: "linear-gradient(266deg, #f5f5f5 2%, #0d763e 100%)" }}>
                <Container fluid>
                    <Row>
                        <Col md="6">
                            <div>
                                <h5 className="text-white">Pure A2 Ghee</h5>
                                <h3 className="text-white">
                                    Your Path to Balanced Living and Holistic Health
                                </h3>
                                <p className="text-white">
                                    Experience the essence of holistic health with Grace of Cows'
                                    Pure A2 Ghee. Our premium A2 Ghee offers unmatched purity,
                                    free from additives and impurities, for a balanced and nourishing
                                    lifestyle. Discover the authentic goodness of our 100% pure A2 Ghee,
                                    delivered straight to your doorstep
                                </p>
                                <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded-pill gap-8 mt-20  btn-text">Shop Pure A2 Ghee Now!</button>
                            </div>
                        </Col>
                        <Col md="6" className="text-center">
                            <img src="assets\images\common/a2-ghee-img.png" className="topanimation" alt="" width="70%" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-30">
                <div className="container">
                    <div className="row">
                        <Col md="4">
                            <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-1.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Natural Moisturizer</h6>
                                    <p>A2 Ghee from Grace of Cows serves as a natural moisturizer, deeply hydrating and nourishing your skin.</p>
                                </div>
                            </Row>
                            {/* <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-2.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Supports Heart Health</h6>
                                    <p>Grace of Cows’ A2 Ghee helps maintain a healthy heart, promoting cardiovascular wellness.</p>
                                </div>
                            </Row>
                            <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-3.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Boosts Wellness and Increases Energy</h6>
                                    <p>A2 Ghee from Grace of Cows serves as a natural moisturizer, deeply hydrating and nourishing your skin.</p>
                                </div>
                            </Row> */}
                        </Col>
                        <Col md="4">
                            <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-2.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Supports Heart Health</h6>
                                    <p>Grace of Cows’ A2 Ghee helps maintain a healthy heart, promoting cardiovascular wellness.</p>
                                </div>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-3.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Boosts Wellness and Increases Energy</h6>
                                    <p>Experience enhanced wellness, elevated energy levels, and effective body detoxification with A2 Ghee from Grace of Cows.</p>
                                </div>
                            </Row>
                        </Col>
                    </div>
                </div>
            </section>


            <section className="py-60">
                <div className="container-fluid">
                    <h4 className="text-center mb-60">Delivering Pure A2 Ghee for Optimal Wellness & Fresh, Safe Nourishment</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">01</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">We naturally graze our cows</h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">02</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Whole milk is expertly crafted into rich, creamy curd.</h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">03</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Curd is meticulously churned counterclockwise to yield rich, velvety makhhan.</h6>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-3">
                                    <h3 className="text-main-600">04</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">We Carefully Separate the Makhan (Butter) From the Buttermilk.</h6>
                                </div>
                            </Row>
                        </div>
                        <div className="col-md-6">
                            <img src="/zozo_cart_website/assets/images/common/circle-a2gee.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-3">
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">05</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">We heat the butter slowly over medium heat.
                                    </h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">06</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">We employ the traditional Bilona method for authentic processing.</h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">07</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Hygienic and sanitized procedures at every step</h6>
                                </div>
                            </Row>
                            <Row >
                                <div className="col-3">
                                    <h3 className="text-main-600">08</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Our Fresh & Pure Ghee is Ready to Deliver at your your Doorstep</h6>
                                </div>
                            </Row>
                        </div>
                        <div className="col-12 text-center">
                            <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded-pill gap-8 mt-20 mb-20  btn-text">Shop Pure A2 Ghee Now!	</button>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <GraceCowFullVideo />
            </section>


            <section className="py-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/zozo_cart_website/assets/images/common/bilona-method-1.jpg" className="rouneded" alt="" width="100%" />
                        </div>
                        <div className="col-md-6">
                            <div className="pt-40">
                                <h3>A2 Bilona Ghee Traditional Method</h3>
                                <p className="mb-30">
                                    Immerse yourself in tradition with Grace Of Cows’ A2 Bilona Ghee, meticulously
                                    crafted using the ancient Bilona technique and pure A2 milk from grass-fed cows.
                                    This ghee is a golden treasure, offering exceptional richness and smoothness,
                                    free from A1 proteins.
                                </p>
                                <p className="mb-30">
                                    Loaded with essential fatty acids and vitamins A, D, E, and K, it enriches
                                    your meals with both flavor and health benefits. Produced with care for both
                                    the environment and our cows, it transforms every dish into a luxurious
                                    experience.
                                </p>
                                <p>
                                    Order now to enjoy the exquisite taste and nourishing goodness
                                    of Grace Of Cows’ A2 Bilona Ghee!
                                </p>
                                <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded-pill gap-8 mt-20 mb-20  btn-text">Shop Pure A2 Ghee Now!	</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A2 ghee product */}
            <section className="py-40">
                <div className="container-fluid">
                    <div className="text-center">
                        <h6 className="mb-0 text-main-600">Grace of Cows</h6>
                        <h3 className="black-text">Our A2 Ghee</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="/zozo_cart_website/assets/images/common/ghee-1.png"
                                        alt=""
                                        className="w-100 max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            A2 Gir Cow Ghee – 250ml
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            ₹650.00
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            ₹525.00 <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="/zozo_cart_website/assets/images/common/ghee-1.png"
                                        alt=""
                                        className="w-100 max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            A2 Gir Cow Ghee – 250ml
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            ₹650.00
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            ₹525.00 <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="/zozo_cart_website/assets/images/common/ghee-1.png"
                                        alt=""
                                        className="w-100 max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            A2 Gir Cow Ghee – 250ml
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            ₹650.00
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            ₹525.00 <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="/zozo_cart_website/assets/images/common/ghee-1.png"
                                        alt=""
                                        className="w-100 max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            A2 Gir Cow Ghee – 250ml
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            ₹650.00
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            ₹525.00 <span className="text-gray-500 fw-normal">/MRP</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FooterTwo */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>
    );
};

export default A2Ghee;
