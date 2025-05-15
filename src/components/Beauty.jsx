import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";

const Beauty = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: Math.min(3, products.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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

                {loading ? (
                  <p>Loading...</p>
                ) : products.length >= 3 ? (
                  <Slider {...settings}>
                    {products.map((product) => (
                      <Card key={product._id} product={product} />
                    ))}
                  </Slider>
                ) : (
                  <div className="row">
                    {products.map((product) => (
                      <div className="col-md-4" key={product._id}>
                        <Card product={product} />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
