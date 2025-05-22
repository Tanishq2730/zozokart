import React, { useState, useEffect } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import CategoryPageSection from "../components/categoryPageSection";
import CommonCategoryHeader from "../components/commonCategoryHeader";
const CategoryPage = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />
      <CommonCategoryHeader/>

      <div className="categoryPagemain">
      <CategoryPageSection />
      </div>

      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default CategoryPage;
