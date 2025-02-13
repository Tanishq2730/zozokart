import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import BlogDetails from "../components/BlogDetails";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
const BlogDetailsPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderOne  />

      {/* BlogDetails */}
      <BlogDetails />

    
      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BlogDetailsPage;
