import React, { useState, useEffect } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ProductPageSection from "../components/productPageSection";
const ProductPage = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      <div className="categoryPagemain">
      <ProductPageSection />
      </div>

      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductPage;
