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

const SectionTwo = ({ homePage }) => {
  console.log(homePage);
  const sectionTwoData = homePage?.sectionTwo || { productIds: [] };

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

  const settings = {
    dots: false,
    infinite: sectionTwoData?.productIds.length > 6,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slides = useMemo(
    () => {
      const arr = [...sectionTwoData.productIds];
      while (arr.length < 6) {
        arr.push({ _id: `placeholder-${arr.length}`, placeholder: true });
      }
      return arr;
    },
    [sectionTwoData.productIds]
  );

  return (
    <div className="container-fluid">
      <div className="bestseller">
        <div className="row">
          <div className="col-md-12">
            <div className="bestsellerslider promotional-slider">
              <div className="mainhead px-20 pt-20 pb-0">
                <h5>{sectionTwoData?.title}</h5>
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
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
