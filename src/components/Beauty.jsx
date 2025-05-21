import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";
import HomeCategoryCard from "./common/homeCategoryCard";

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

  // Always show 3 slides
  const settings = {
    dots: false,
    infinite: products.length > 4,     // disable infinite if less than 4 slides
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // Pad with placeholders so we always have at least 3 items
  const slides = React.useMemo(() => {
    const base = [...products];
    while (base.length < 6) {
      base.push({ _id: `placeholder-${base.length}`, placeholder: true });
    }
    return base;
  }, [products]);

  return (
    <div className="commonspacing">
      <div className="container-fluid my-5">
        <div className="bestseller">
          <div className="row">
            <div className="col-md-12">
              <div className="bestsellerslider">
                <div className="mainhead">
                  <h5>Beauty, Food, Toys &amp; more</h5>
                </div>

                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Slider {...settings}>
                    {slides.map((item) =>
                      item.placeholder ? (
                        // render an empty slide
                        <div key={item._id} style={{ padding: "0 15px" }}>
                          {/* nothing here */}
                        </div>
                      ) : (
                        <HomeCategoryCard key={item._id} product={item} />
                      )
                    )}
                  </Slider>
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
