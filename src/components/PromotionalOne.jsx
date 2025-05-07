import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Card from "./common/card";
import { fetchProducts } from "../api/homeAPI";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  // const products = [
  //   {
  //     id: 1,
  //     image: "assets/images/product/p1.png",
  //     name: "Wireless Bluetooth",
  //     price: "From ₹999"
  //   },
  //   {
  //     id: 2,
  //     image: "assets/images/product/p2.png",
  //     name: "Wireless Bluetooth",
  //     price: "From ₹999"
  //   },
  //   {
  //     id: 3,
  //     image: "assets/images/product/p3.png",
  //     name: "Wireless Bluetooth",
  //     price: "From ₹999"
  //   },
  //   {
  //     id: 4,
  //     image: "assets/images/product/p4.png",
  //     name: "Wireless Bluetooth",
  //     price: "From ₹999"
  //   },
  //   {
  //     id: 5,
  //     image: "assets/images/product/p5.png",
  //     name: "Wireless Bluetooth",
  //     price: "From ₹999"
  //   },
  //   {
  //     id: 6,
  //     image: "assets/images/product/p6.png",
  //     name: "Wireless Bluetooth",
  //     price: "From ₹999"
  //   }
  // ];

  return (
    <div className="container-fluid">
      <div className="bestseller">
        <div className="row">
          <div className="col-md-10">
            <div className="bestsellerslider">
              <div className="mainhead">
                <h5>Best Seller</h5>
              </div>
              <Slider {...settings}>
                {products.map(product =>
                  <Card key={product._id} product={product} />
                )}
              </Slider>
            </div>
          </div>
          <div className="col-md-2">
            <div className="adsimg">
              <img src="assets/images/ads/ads.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalOne;
