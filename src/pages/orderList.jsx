import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, Button, Row, Col } from "reactstrap";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import PromotionalOne from "../components/PromotionalOne";
import RecommendedOne from "../components/RecommendedOne";
import DeliveryOne from "../components/DeliveryOne";
import ShippingOne from "../components/ShippingOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import GraceCowFullVideo from "../components/GraceCowFullVideo";
import WhyUs from "../components/WhyUs";
import VideoGrid from "../components/VideoGrid";
import InstagramFeed from "../components/InstagramFeed";
import TestimonialsFeed from "../components/TestimonialsFeed";
import BlogGrid from "../components/BlogGrid";
import Banner from "../components/Banner";
import Beauty from "../components/Beauty";
import Adscatgory from "../components/adscatgory";
import CategorySection from "../components/categorySection";
import OrderData from "../components/orderData";
const OrderList = () => {
  // State to control the popup visibility
  
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      <OrderData/>

      {/* banner  */}
      
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />

      
    </>
  );
};

export default OrderList;
