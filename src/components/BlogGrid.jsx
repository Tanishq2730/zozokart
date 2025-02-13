import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Autoplay } from "swiper/modules";

const BlogGrid = () => {
    const blogdata = [
        {
            id: 1,
            title: "What Makes Grace of Cows' Desi Gir Cow Ghee the Gold Standard in Dairy Products?",
            date: "06 AUG",
            img: "assets/images/common/blog-1.jpg",
            description:
                "When it comes to premium dairy products, Desi Gir Cow Ghee stands out as a top choice for those seeking both exceptional...",
        },
        {
            id: 2,
            title: "How Does Grace of Cow's Pure Desi Cow Milk Differ from Regular Milk?",
            date: "08 AUG",
            img: "assets/images/common/blog-2.jpg",
            description:
                "In recent years, the demand for Pure Desi Cow Milk has surged as more people seek natural and wholesome alternatives to...",
        },
        {
            id: 3,
            title: "How Can Switching to A2 Gir Cow Milk from Grace of Cows Improve Your Daily Nutrition?",
            date: "24 SEP",
            img: "assets/images/common/blog-3.jpg",
            description:
                "In today's fast world, proper health can only be attained through well-balanced nutrition. Milk has been a fundamental pa...",
        },
        {
            id: 4,
            title: "How Can Switching to A2 Gir Cow Milk from Grace of Cows Improve Your Daily Nutrition?",
            date: "24 SEP",
            img: "assets/images/common/blog-2.jpg",
            description:
                "In today's fast world, proper health can only be attained through well-balanced nutrition. Milk has been a fundamental pa...",
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
        Autoplay:true,
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

    return (
        <section className="blog-grid-section py-80">
            <div className="container-fluid">
                <p className="text-center text-main-600"><b>Stories</b></p>
                <h3 className="mb-30 text-center">Recent Articles</h3>
                <div className="row">
                    <Slider {...settings}>
                        {blogdata.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <Link to="/blog-details">
                                <div className="blog-card border p-10 rounded">
                                    <div className="blog-image">
                                        <img src={item.img} alt={item.title} className="rounded" />
                                        <div className="blog-date">
                                            <h5 className="py-10 fs-5 text-main-700"><b>{item.date}</b></h5>
                                        </div>
                                    </div>
                                    <div className="blog-content text-center">
                                        <h4 className="blog-title fs-5">{item.title}</h4>
                                        <p className="blog-description text-dark">
                                            {item.description}
                                        </p>
                                        <a href="#" className="read-more text-main-600">
                                            CONTINUE READING
                                        </a>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
