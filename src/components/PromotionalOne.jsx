import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";
import HomeCategoryCard from "./common/homeCategoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./PromotionalOne.css";

const PromotionalOne = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
    infinite: products.length > 5,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: products.length > 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const slides = useMemo(
    () => {
      const arr = [...products];
      while (arr.length < 5) {
        arr.push({ _id: `placeholder-${arr.length}`, placeholder: true });
      }
      return arr;
    },
    [products]
  );

  return (
    <div className="container-fluid">
      <div className="bestseller">
        <div className="row">
          <div className="col-md-10">
            <div className="bestsellerslider promotional-slider">
              <div className="mainhead px-20 pt-20 pb-0">
                <h5>Beauty, Food, Toys &amp; more</h5>
              </div>

              {loading
                ? <p>Loading...</p>
                : <Slider {...settings}>
                    {slides.map(
                      item =>
                        item.placeholder
                          ? <div key={item._id} style={{ padding: "0 8px" }} />
                          : <HomeCategoryCard key={item._id} product={item} />
                    )}
                  </Slider>}
            </div>
          </div>
          <div className="col-md-2">
            <div className="adsimg">
              <img
                src="/zozo_cart_website/assets/images/ads/ads.png"
                alt="promo ad"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalOne;
