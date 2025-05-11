import React, { useEffect, useState } from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import ProductDetailsOne from "../components/ProductDetailsOne";
import NewArrivalTwo from "../components/NewArrivalTwo";
import ShippingOne from "../components/ShippingOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import BreadcrumbTwo from "./../components/BreadcrumbTwo";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import DeliveryOne from "../components/DeliveryOne";
import GraceCowFullVideo from "../components/GraceCowFullVideo";
import Beauty from "../components/Beauty";
import { fetchProductDetails } from "../api/productAPI";
import { useParams } from "react-router-dom";
import SimilarProduct from "../components/SimilarProduct";
import ProductRatingAndReview from "../components/ProductRatingAndReview";

const ProductDetailsPageOne = () => {

  const { slug } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  
  const getProduct = async () => {
    try {
      const data = await fetchProductDetails(slug);
      if (data.success) {
        setProduct(data.data);
        console.log(product)
        // setRelatedProducts(data.data.relatedProducts);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if(slug){
      getProduct();
    }
  }, [slug]);

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      {/* <BreadcrumbTwo title={"Product Details"} /> */}

      {/* ProductDetailsOne */}
      <ProductDetailsOne product={product}/>
      <hr />
      {/* product ratings */}
      <ProductRatingAndReview product={product} getProduct={getProduct}/>
      <hr />
      <SimilarProduct product={product}/>

      {/* NewArrivalTwo */}
      {/* <NewArrivalTwo /> */}

      <div className="">
        <GraceCowFullVideo />
      </div>

      {/* DeliveryOne */}
      {/* <DeliveryOne /> */}

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductDetailsPageOne;
