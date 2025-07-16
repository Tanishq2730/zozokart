import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";
import HomeCategoryCard from "./common/homeCategoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const SimilarProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const data = await fetchProducts();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching banners:", error);
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
    infinite: products.length > 6,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  };

  const slides = useMemo(
    () => {
      const arr = [...products];
      while (arr.length < 6) {
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
          <div className="col-md-12">
            <div className="bestsellerslider promotional-slider">
              <div className="mainhead px-20 pt-20 pb-0">
                <h5>Similar Products</h5>
              </div>

              <Slider {...settings}>
                {slides.map(
                  product =>
                    product.placeholder
                      ? <div key={product._id} style={{ padding: "0 8px" }} />
                      : <HomeCategoryCard key={product._id} product={product} />
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
