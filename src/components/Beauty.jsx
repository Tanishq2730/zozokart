import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";
import HomeCategoryCard from "./common/homeCategoryCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Beauty.css";

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

  // Pad with placeholders so we always have at least 6 items
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
              <div className="bestsellerslider beauty-slider">
                <div className="mainhead  px-20 pt-20 pb-0">
                  <h5>Beauty, Food, Toys &amp; more</h5>
                </div>

                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <Slider {...settings}>
                    {slides.map((item) =>
                      item.placeholder ? (
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
