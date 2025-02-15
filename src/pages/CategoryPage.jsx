import React, { useState, useEffect } from "react";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import CategoryPageSection from "../components/categoryPageSection";
const CategoryPage = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

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
