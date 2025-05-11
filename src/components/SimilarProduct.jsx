import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";

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

  const settings = {
    dots: false,
    infinite: products.length > 6,
    speed: 800,
    slidesToShow: Math.min(products.length, 6),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: products.length > 1
  };

  return (
    <div className="commonspacing">
      <div className="container-fluid my-5">
        <div className="bestseller">
          <div className="row">
            <div className="col-md-12">
              <div className="bestsellerslider">
                <div className="mainhead">
                  <h5>Beauty, Food, Toys & more</h5>
                </div>
                {products.length > 1
                  ? <Slider {...settings}>
                      {products.map(product =>
                        <Card key={product._id} product={product} />
                      )}
                    </Slider>
                  : products.map(product =>
                      <Card key={product._id} product={product} />
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
