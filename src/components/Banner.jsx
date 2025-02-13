import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="homebanner">
      <div className="container-fluid">
        <Slider {...settings}>
          <div>
            <img src="/assets/images/banner/banner1.png" alt="Slide 1" />
          </div>
          <div>
            <img src="/assets/images/banner/banner2.png" alt="Slide 2" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
