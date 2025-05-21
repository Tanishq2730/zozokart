import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";
import HomeCategoryCard from "./common/homeCategoryCard";

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
      console.error("Error fetching banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Always show 5 slides; infinite only if more than 5 real items
  const settings = {
    dots: false,
    infinite: products.length > 5,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: products.length > 1,
  };

  // Pad the products array up to 5 items with placeholders
  const slides = useMemo(() => {
    const arr = [...products];
    while (arr.length < 5) {
      arr.push({ _id: `placeholder-${arr.length}`, placeholder: true });
    }
    return arr;
  }, [products]);

  return (
    <div className="container-fluid">
      <div className="bestseller">
        <div className="row">
          <div className="col-md-10">
            <div className="bestsellerslider">
              <div className="mainhead">
                <h5>Beauty, Food, Toys &amp; more</h5>
              </div>

              {loading ? (
                <p>Loading...</p>
              ) : (
                <Slider {...settings}>
                  {slides.map(item =>
                    item.placeholder ? (
                      // blank slide
                      <div key={item._id} style={{ padding: "0 8px" }} />
                    ) : (
                      <HomeCategoryCard key={item._id} product={item} />
                    )
                  )}
                </Slider>
              )}

            </div>
          </div>
          <div className="col-md-2">
            <div className="adsimg">
              <img src="assets/images/ads/ads.png" alt="promo ad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalOne;
