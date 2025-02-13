import React from "react";
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

const ProductDetailsPageOne = () => {
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
      <ProductDetailsOne />

      <Beauty/>

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
