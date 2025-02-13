import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Col, Row } from "reactstrap";
import Slider from "react-slick";
import { FcGoogle } from "react-icons/fc";

const TestimonialsFeed = () => {
    const reviews = [
        {
            id: 1,
            name: "Anuradha Rohit",
            date: "2024-07-31",
            rating: 5,
            img: 'assets/images/icon/unnamed.png',
            comment:
                "Excellent milk quality! I've been taking cow milk from them since two years and it's hands down the best quality milk after trying so many options!",
        },
        {
            id: 2,
            name: "Sonali Somani",
            date: "2024-07-30",
            rating: 5,
            img: 'assets/images/icon/unnamed.png',
            comment: "Very nice milk and even service, 👍",
        },
        {
            id: 3,
            name: "Spinach",
            date: "2024-07-16",
            rating: 5,
            img: 'assets/images/icon/unnamed.png',
            comment:
                "I have been consuming Grace of Cows A2 Milk and A2 Ghee from last 1 year. They ensure the customer satisfaction and commitment to deliver exceptional quality.",
        },
    ];

    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="custom-arrow custom-arrow-left"
            aria-label="Previous Slide"
        >
            &lt;
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="custom-arrow custom-arrow-right"
            aria-label="Next Slide"
        >
            &gt;
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <section
            className="py-40"
            style={{
                backgroundImage: "url('assets/images/common/vector-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container-fluid">
                <p className="text-center text-main-600">
                    <b>Testimonials</b>
                </p>
                <h3 className="mb-30 text-center">Customers Love</h3>

                <Row>
                    <Col md="3">
                        <div className="text-center py-40">
                            <h4 className="mb-0">EXCELLENT</h4>
                            <div className="">
                                <FaStar color="#f6bb06" size="25" />
                                <FaStar color="#f6bb06" size="25" />
                                <FaStar color="#f6bb06" size="25" />
                                <FaStar color="#f6bb06" size="25" />
                                <FaStar color="#f6bb06" size="25" />
                            </div>
                            <p>Based on <b>302 reviews</b></p>
                            <img src="assets/images/icon/logo-google.png" alt="" width="100px" />
                        </div>
                    </Col>
                    <Col md="9">
                        <div className="">
                            <Slider {...settings}>
                                {reviews.map((review) => {
                                    const isExpanded = expanded[review.id] || false;
                                    const truncatedComment = review.comment.slice(0, 100) + "...";

                                    return (
                                        <div key={review.id} className="review-card shadow rounded p-20 bg-white">
                                            <div className="d-flex align-items-center mb-2">
                                                <img
                                                    src={review.img}
                                                    alt=""
                                                    className="rounded-circle"
                                                    width="40"
                                                    height="40"
                                                />
                                                <div className="ms-3">
                                                    <h5 className="mb-0 fs-5">{review.name}</h5>
                                                    <small>{review.date}</small>
                                                </div>
                                                <div className="" style={{ marginLeft: 'auto' }}>
                                                    <FcGoogle size={22} />
                                                </div>
                                            </div>
                                            <div className="rating mb-2">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <FaStar key={i} color="#f6bb06" size="20" />
                                                ))}
                                            </div>
                                            <p className="text-muted fs-6">
                                                {isExpanded ? review.comment : truncatedComment}
                                                <span
                                                    onClick={() => toggleReadMore(review.id)}
                                                    style={{
                                                        color: "blue",
                                                        cursor: "pointer",
                                                        marginLeft: "5px",
                                                    }}
                                                >
                                                    {isExpanded ? "Read Less" : "Read More"}
                                                </span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default TestimonialsFeed;
