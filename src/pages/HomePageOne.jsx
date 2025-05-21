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
import HomeCategoryHeader from "../components/homeCategoryHeader";
const HomePageOne = () => {
  // State to control the popup visibility
  const [modalOpen, setModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => setModalOpen(!modalOpen);

  // Open the modal on page load
  useEffect(() => {
    setModalOpen(true);
  }, []);

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

      <HomeCategoryHeader/>

      {/* banner  */}
      <Banner/>

      {/* BannerOne */}
      {/* <BannerOne /> */}

      {/* PromotionalOne */}
      <PromotionalOne />

      {/* beauty  */}
      <Beauty/>

      {/* ads */}
      <Adscatgory/>

      <CategorySection/>

      {/* beauty  */}
      <Beauty/>
      {/* ads */}
      <Adscatgory/>

      {/* fullvedeo */}
      <GraceCowFullVideo />

      {/* <WhyUs/> */}

      {/* DeliveryOne */}
      {/* <DeliveryOne /> */}

      {/* video grid */}
      {/* <VideoGrid/> */}

      {/* Insta */}
      {/* <InstagramFeed/> */}

      {/* testmoinail */}
      {/* <TestimonialsFeed/> */}

      {/* blog grid */}
      {/* <BlogGrid/> */}

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />

      {/* Notification Popup */}
      <Modal isOpen={modalOpen} toggle={toggleModal} centered size="">
        <ModalHeader toggle={toggleModal}>Welcome to <span className="text-main-600">zozo Kart</span></ModalHeader>
        <ModalBody className="py-5">
          <Row>
            <Col md="5">
              <h2 className="mb-0">FLAT</h2>
              <h1 className="mb-0 text-danger"><b>5%</b></h1>
              <h2 className="mb-0">OFF</h2>
              <p>On Your First Order</p>
              <a className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-20 mb-20" href="/product">Shop Now<span class="icon text-xl d-flex"><i class="ph ph-arrow-right"></i></span></a>
            </Col>
            <Col md="7">
              <img src="assets/images/product/p1.png" alt="Logo" width="100%" />
            </Col>
          </Row>
          {/* <Button color="primary" onClick={toggleModal}>
            Close
          </Button> */}
        </ModalBody>
      </Modal>
    </>
  );
};

export default HomePageOne;
