import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, Button, Row, Col } from "reactstrap";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import PromotionalOne from "../components/PromotionalOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import GraceCowFullVideo from "../components/GraceCowFullVideo";
import Banner from "../components/Banner";
import Beauty from "../components/Beauty";
import Adscatgory from "../components/adscatgory";
import CategorySection from "../components/categorySection";
import HomeCategoryHeader from "../components/homeCategoryHeader";
import { fetchWebsiteHomePageContent } from "../api/homeAPI";
import SectionOne from "../components/homePageSections/SectionOne";
import SectionTwo from "../components/homePageSections/SectionTwo";
import SectionThree from "../components/homePageSections/SectionThree";
import SectionFourFiveSix from "../components/homePageSections/sectionFourFiveSix";
import SectionSeven from "../components/homePageSections/SectionSeven";
import SectionEight from "../components/homePageSections/SectionEight";
import SectionNine from "../components/homePageSections/sectionNine";

const HomePageOne = () => {
  // State to control the popup visibility
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [homePage, setHomePage] = useState();

  // Function to toggle the modal
  const toggleModal = () => setModalOpen(!modalOpen);

  const getHomePageContent = async () => {
    try {
      const data = await fetchWebsiteHomePageContent();
      if (data.success) {
        setHomePage(data.data);
      }
    } catch (error) {
      console.error("Error fetching home page content:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHomePageContent();
  }, []);

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

      {/* <CommonCategoryHeader/> */}

      {/* banner  */}
      <Banner/>

      {/* BannerOne */}
      {/* <BannerOne /> */}

      {/* PromotionalOne */}
      {/* <PromotionalOne /> */}
      <SectionOne homePage={homePage}/>
      <SectionTwo homePage={homePage}/>
      <SectionThree homePage={homePage}/>
      <SectionFourFiveSix homePage={homePage}/>
      <SectionSeven homePage={homePage}/>
      <SectionEight homePage={homePage}/>
      <SectionNine homePage={homePage}/>

      {/* beauty  */}
      {/* <Beauty/> */}

      {/* ads */}
      {/* <Adscatgory/> */}

      {/* <CategorySection/> */}

      {/* beauty  */}
      {/* <Beauty/> */}
      {/* ads */}
      {/* <Adscatgory/> */}

      {/* fullvedeo */}
      {/* <GraceCowFullVideo /> */}

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
              <img src="/zozo_cart_website/assets/images/product/p1.png" alt="Logo" width="100%" />
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
