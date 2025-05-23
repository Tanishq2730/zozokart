
import React from "react";
import BottomFooter from "../../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../../components/HeaderOne";
import FooterOne from "../../components/FooterOne";
import { Col, Container, Row } from "reactstrap";
import GraceCowFullVideo from "../../components/GraceCowFullVideo";
import { Link } from "react-router-dom";
const A2Milk = () => {
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
                                <h5 className="text-white">Pure A2 Milk</h5>
                                <h3 className="text-white">
                                    India's Most Trusted Brand for Pure A2 Milk – Grace of Cows
                                </h3>
                                <p className="text-white">
                                    Grace of Cows: India's premier choice for pure A2 milk.
                                    Sourced from free-grazing cows and expertly processed, our
                                    A2 milk delivers exceptional purity and taste. Trust Grace
                                    of Cows for the highest quality and nutritional value in
                                    every glass.

                                </p>
                                <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded-pill gap-8 mt-20  btn-text">Taste the Quality of Grace of Cows</button>
                            </div>
                        </Col>
                        <Col md="6" className="text-center">
                            <img src="/zozo_cart_website/assets/images/common/milk-header.png" className="topanimation" alt="" width="60%" />
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
                                    <h6 className="mb-1">Traditional Churning Methods</h6>
                                    <p>
                                        At Grace Of Cows, we use traditional churning methods to
                                        maintain the full nutritional benefits of our A2 milk,
                                        ensuring every bottle is rich in natural vitamins and
                                        minerals.
                                    </p>
                                </div>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-2.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Hygiene and Safety Standards</h6>
                                    <p>
                                        At Grace Of Cows, we adhere to rigorous hygiene protocols
                                        during milking, ensuring that our A2 milk is collected in
                                        the cleanest environment possible.
                                    </p>
                                </div>
                            </Row>
                        </Col>
                        <Col md="4">
                            <Row className="mt-30">
                                <div className="col-3">
                                    <img src="/zozo_cart_website/assets/images/icon/ic-3.png" alt="" width="100%" />
                                </div>
                                <div className="col-9">
                                    <h6 className="mb-1">Rigorous Quality Control</h6>
                                    <p>
                                        At Grace Of Cows, we start with the finest A2 milk from
                                        certified purebred cows, ensuring that each batch meets the
                                        highest standards of quality and purity.
                                    </p>
                                </div>
                            </Row>
                        </Col>
                    </div>
                </div>
            </section>


            <section className="py-60" style={{
                backgroundImage: "url('assets/images/common/bg-milk.jpg')",
                backgroundSize: "cover",  // Ensures the image covers the entire section
                backgroundRepeat: "no-repeat",  // Prevents tiling
                backgroundPosition: "center"  // Centers the image
            }}>
                <div className="container-fluid">
                    <h4 className="text-center mb-60">Premium A2 Milk Delivered Fresh for Optimal Health & Pure Nourishment
                    </h4>
                    <div className="row">
                        <div className="col-md-3">
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">01</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Our Cows Graze Freely on Lush, Natural Pastures.</h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">02</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">We Provide Compassionate and Attentive Care for Each Cow.</h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">03</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Regular Health Assessments Ensure Their Optimal Well-being.</h6>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-3">
                                    <h3 className="text-main-600">04</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">We Maintain Rigorous Cleanliness and Provide Comfortable Housing.
                                    </h6>
                                </div>
                            </Row>
                        </div>
                        <div className="col-md-6">
                            <img src="/zozo_cart_website/assets/images/common/product-milk-1.png" alt="" width="100%" />
                        </div>
                        <div className="col-md-3">
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">05</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Milk is Swiftly Chilled Using State-of-the-art Imcu Technology.
                                    </h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">06</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Our A2 Milk is Carefully Sealed and Preserved.</h6>
                                </div>
                            </Row>
                            <Row className="mb-30">
                                <div className="col-3">
                                    <h3 className="text-main-600">07</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Every Step Follows Strict Hygiene and Sanitation Protocols.</h6>
                                </div>
                            </Row>
                            <Row >
                                <div className="col-3">
                                    <h3 className="text-main-600">08</h3>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black fs-5">Enjoy the Convenience of Fresh Milk Delivered to Your Doorstep by 8 Am.</h6>
                                </div>
                            </Row>
                        </div>
                        <div className="col-12 text-center">
                            <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded-pill gap-8 mt-20 mb-20  btn-text">Shop Pure A2 Milk Now!	</button>
                        </div>
                        {/* <div className="col-12">
                            <h4 className="text-center mb-0">START YOUR JOURNEY WITH PURE A2 DESI GIR COW MILK NOW!!</h4>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="bg-main-two-600 py-40">
                <div className="container-fluid">
                    <div className="text-center">
                        <h4 className="text-white">Request for Sample (ONLY IN PUNE REGION)</h4>
                    </div>
                    <div className="row py-20">
                        <div className="col-md-2">
                            <div className="mb-2">
                                <input className="form-control" type="text" placeholder="Name*" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-2">
                                <input className="form-control" type="number" placeholder="Phone Number*" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-2">
                                <input className="form-control" type="email" placeholder="Email*" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-2">
                                <input className="form-control" type="text" placeholder="Address*" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-2">
                                <input className="form-control" type="text" placeholder="Message*" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-2">
                                <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded  gap-8 w-100 btn-text">Submit</button>
                            </div>
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
                            <img src="/zozo_cart_website/assets/images/common/milk-graphic-1.png" className="rouneded" alt="" width="100%" />
                        </div>
                        <div className="col-md-6">
                            <div className="pt-40">
                                <h3>Pure A2 Milk</h3>
                                <p className="mb-30">
                                    Experience the unrivaled purity of Grace of Cows’ Pure A2 Milk.
                                    Sourced from free-grazing cows and crafted with traditional methods,
                                    our A2 Milk delivers superior quality and flavor. Trust Grace of Cows
                                    for nutrient-rich, naturally fresh A2 Milk that enhances your wellness
                                    and taste. Elevate your daily routine with our premium, wholesome
                                    A2 Milk today.
                                </p>

                                <button style={{ backgroundColor: '#ffda02' }} className="btn align-items-center rounded-pill gap-8 mt-20 mb-20  btn-text">Taste the Quality of Grace of Cows	</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A2 ghee product */}
            <section className="">
                <img src="/zozo_cart_website/assets/images/common/mikl-page-img.jpg" alt="" />
            </section>
            {/* FooterTwo */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>
    );
};

export default A2Milk;
