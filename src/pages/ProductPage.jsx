import React, { useState, useEffect } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ProductPageSection from "../components/productPageSection";
import CommonCategoryHeader from "../components/commonCategoryHeader";
const ProductPage = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />
      <CommonCategoryHeader/>

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
