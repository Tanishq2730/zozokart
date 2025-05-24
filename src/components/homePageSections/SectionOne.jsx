import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProducts } from "../../api/homeAPI";
import HomeCategoryCard from "../common/homeCategoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "../PromotionalOne.css";
import { IMAGE_URL } from "../../utils/api-config";

const SectionOne = ({ homePage }) => {
  console.log(homePage);
  const sectionOneData = homePage?.sectionOne || { productIds: [] };

  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const NextArrow = props => {
    const { onClick } = props;
    return (
      <button className="slick-next slick-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  };

  const PrevArrow = props => {
    const { onClick } = props;
    return (
      <button className="slick-prev slick-arrow" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  };

  const settings = { dots: false, infinite: sectionOneData?.productIds.length > 5, speed: 800, slidesToShow: 5, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, arrows: sectionOneData?.productIds.length > 1, nextArrow: <NextArrow />, prevArrow: <PrevArrow />, pauseOnHover: true, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false } }] };

  const slides = useMemo(
    () => {
      const arr = [...sectionOneData.productIds];
      while (arr.length < 5) {
        arr.push({ _id: `placeholder-${arr.length}`, placeholder: true });
      }
      return arr;
    },
    [sectionOneData.productIds]
  );

  return (
    <div className="container-fluid">
      <div className="bestseller">
        <div className="row">
          <div className="col-md-10">
            <div className="bestsellerslider promotional-slider">
              <div className="mainhead px-20 pt-20 pb-0">
                <h5>{sectionOneData?.title}</h5>
              </div>

              <Slider {...settings}>
                {slides.map(item =>
                  item.placeholder ? (
                    <div key={item._id} style={{ padding: "0 8px" }} />
                  ) : (
                    <HomeCategoryCard key={item._id} product={item} />
                  )
                )}
              </Slider>
            </div>
          </div>
          <div className="col-md-2">
            <div className="adsimg">
              {homePage?.sectionOne?.adsImage ? (
                <img
                  src={`${IMAGE_URL}/${homePage.sectionOne.adsImage}`}
                  alt="promo ad"
                  className="img-fluid"
                />
              ) : (
                <img
                  src="/zozo_cart_website/assets/images/ads/ads.png"
                  alt="promo ad"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
