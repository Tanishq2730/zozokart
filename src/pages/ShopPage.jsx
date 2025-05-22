import React from "react";
import Preloader from "../helper/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../components/HeaderOne";
import ShippingOne from "../components/ShippingOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import CommonCategoryHeader from "../components/commonCategoryHeader";
const ShopPage = () => {

  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />
      <CommonCategoryHeader/>
      {/* Breadcrumb */}
      {/* <Breadcrumb title={"Shop"} /> */}

      {/* ShopSection */}
      <ShopSection />

      {/* ShippingTwo */}
      {/* <ShippingOne /> */}

      {/* FooterTwo */}
      <FooterOne />

      {/* FooterBottom */}
      <BottomFooter />


    </>
  );
};

export default ShopPage;
