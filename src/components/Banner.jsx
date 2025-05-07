import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchBanners } from "../api/homeAPI";
import { IMAGE_URL } from "../utils/api-config";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  return (
    <div className="homebanner">
      <div className="container-fluid">
        <Slider {...settings}>
          {banners &&
            banners.map(banner =>
              <div key={banner.id}>
                <img src={`${IMAGE_URL}/${banner.image}`} alt="Slide 1" />
              </div>
            )}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
