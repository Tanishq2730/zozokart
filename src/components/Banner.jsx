import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import { fetchBanners } from "../api/homeAPI";
import { IMAGE_URL } from "../utils/api-config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBanners = async () => {
    try {
      const data = await fetchBanners();
      if (data.success) {
        setBanners(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-next custom-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-prev custom-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="homebanner">
      <div className="container-fluid p-0">
        <Slider {...settings}>
          {banners &&
            banners.map(banner =>
              <div key={banner.id}>
                <img 
                  src={`${IMAGE_URL}/${banner.image}`} 
                  alt="Banner" 
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            )}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
