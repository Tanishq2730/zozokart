import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { IMAGE_URL } from "../utils/api-config";
import { FaLocationDot } from "react-icons/fa6";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton, // Import EmailShareButton
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon, // Import EmailIcon
} from "react-share";

const ProductDetailsOne = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(getCountdown());
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const sliderRef = useRef(null);

  const { slug } = useParams();
  const [productImages, setProductImages] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [attributeOptions, setAttributeOptions] = useState({});
  const currentUrl = window.location.href;
  const emailSubject = `Check out this product: ${product.name}`; // Default email subject
  const emailBody = `I found this interesting product and thought you might like it: ${currentUrl}`; // Default email body

  useEffect(() => {
    if (product?.images) {
      const imagesArray = [
        product.images.mainImage,
        ...(product.images.galleryImages || []),
      ].filter(Boolean);
      setProductImages(imagesArray.map((img) => `${IMAGE_URL}/${img}`));
    }

    // Set the default variation to the first one if variations exist
    if (product?.variations?.length > 0) {
      setSelectedVariation(product.variations[0]);
    }
  }, [product?.images, product?.variations]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update attribute options based on the selected variation (if any)
    if (selectedVariation) {
      const newOptions = {};
      selectedVariation.attributes.forEach((attr) => {
        newOptions[attr.id.name] = attr.value;
      });
      setAttributeOptions(newOptions);

      // Update images based on the selected variation (if the variation has specific images)
      if (selectedVariation.images?.length > 0) {
        setProductImages(
          selectedVariation.images.map((img) => `${IMAGE_URL}/${img}`)
        );
      } else if (product?.images) {
        const imagesArray = [
          product.images.mainImage,
          ...(product.images.galleryImages || []),
        ].filter(Boolean);
        setProductImages(imagesArray.map((img) => `${IMAGE_URL}/${img}`));
      }
    } else if (product?.images) {
      const imagesArray = [
        product.images.mainImage,
        ...(product.images.galleryImages || []),
      ].filter(Boolean);
      setProductImages(imagesArray.map((img) => `${IMAGE_URL}/${img}`));
    }
  }, [selectedVariation, product?.images]);

  const incrementQuantity = () => setSelectedQuantity(selectedQuantity + 1);
  const decrementQuantity = () =>
    setSelectedQuantity(selectedQuantity > 1 ? selectedQuantity - 1 : 1);

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, productImages.length),
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow-left"
      aria-label="Previous Slide"
    >
      &lt;
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow-right"
      aria-label="Next Slide"
    >
      &gt;
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setPhotoIndex(next),
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(photoIndex);
    }
  }, [photoIndex]);

  const handleAddToCartClick = () => {
    if (selectedVariation && onAddToCart) {
      onAddToCart(selectedVariation._id, selectedQuantity); // Use variation ID for cart
    }
  };

  const handleAttributeChange = (attributeName, value) => {
    const newOptions = { ...attributeOptions, [attributeName]: value };
    setAttributeOptions(newOptions);

    // Find the matching variation
    const foundVariation = product.variations.find((variation) => {
      return variation.attributes.every((attr) => {
        return newOptions[attr.id.name] === attr.value;
      });
    });

    if (foundVariation) {
      setSelectedVariation(foundVariation);
    }
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const parsedDetails = product.productDetails
    ? JSON.parse(product.productDetails)
    : [];
  const parsedSpecifications = product.specifications
    ? JSON.parse(product.specifications)
    : [];

  // Get unique attribute names and values for dropdowns
  const uniqueAttributes = {};
  product.attributes?.forEach((attr) => {
    uniqueAttributes[attr.id.name] = attr.values;
  });

  return (
    <section className="product-details py-0 mt-30">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="row gy-4">
              <div className="col-xl-5">
                <div className="row">
                  {productImages.length > 1 && (
                    <div className="col-2">
                      <ul>
                        {productImages.map((image, index) => (
                          <li
                            style={{ cursor: "pointer" }}
                            className={`mb-10 center max-w-120 max-h-120 h-100 flex-center border rounded-16 p-8 ${
                              photoIndex === index
                                ? "border-primary"
                                : "border-gray-100"
                            }`}
                            key={index}
                            onClick={() => setPhotoIndex(index)}
                            // onMouseMove={() => setPhotoIndex(index)}
                          >
                            <img
                              className="thum"
                              src={image}
                              alt={`Thumbnail ${index}`}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div
                    className={productImages.length > 1 ? "col-10" : "col-12"}
                  >
                    <div className="product-details__left">
                      <div
                        className="product-details__thumb-slider border border-gray-100 p-5 rounded-16"
                        style={{
                          display: "block!important",
                          position: "relative",
                        }}
                      >
                        {selectedVariation ? selectedVariation?.salePrice <
                          selectedVariation?.regularPrice && (
                          <span
                            style={{ zIndex: "9999999" }}
                            className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                          >
                            {Math.round(selectedVariation.discountPercentage)}
                            % OFF
                          </span>
                        ):<span
                          style={{ zIndex: "9999999" }}
                          className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                        >
                          {Math.round(
                            product.discountPercentage) 
                          }
                          % OFF
                        </span>
                        }
                        <Slider {...settings} ref={sliderRef}>
                          {productImages.map((image, index) => (
                            <div
                              key={index}
                              className="product-details__thumb flex-center h-100"
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={image}
                                alt={`Main Thumbnail ${index}`}
                                style={{
                                  width: "100%",
                                  margin: "0 auto",
                                  cursor: "pointer",
                                  height:'490px',
                                  objectFit:'contain'
                                }}
                                onClick={() => setIsOpen(true)}
                              />
                            </div>
                          ))}
                        </Slider>
                        {isOpen && (
                          <Lightbox
                            mainSrc={productImages[photoIndex]}
                            nextSrc={
                              productImages[
                                (photoIndex + 1) % productImages.length
                              ]
                            }
                            prevSrc={
                              productImages[
                                (photoIndex + productImages.length - 1) %
                                  productImages.length
                              ]
                            }
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                              setPhotoIndex(
                                (photoIndex + productImages.length - 1) %
                                  productImages.length
                              )
                            }
                            onMoveNextRequest={() =>
                              setPhotoIndex(
                                (photoIndex + 1) % productImages.length
                              )
                            }
                          />
                        )}
                      </div>
                      {productImages.length > 1 && (
                        <div className="mt-24 d-none">
                          <div className="product-details__images-slider">
                            <Slider {...settingsThumbs}>
                              {productImages.map((image, index) => (
                                <div
                                  className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                                  key={index}
                                  onClick={() => setPhotoIndex(index)}
                                >
                                  <img
                                    className="thum"
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                  />
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="product-details__content">
                  <h5 className="mb-12">{product.name}</h5>
                  <div className="flex-align flex-wrap gap-12">
                    <div className="flex-align gap-12 flex-wrap">
                      <div className="flex-align gap-8">
                        {Array.from({
                          length: Math.round(product.overallRating),
                        }).map((_, index) => (
                          <span
                            key={`star-${index}`}
                            className="text-15 fw-medium text-warning-600 d-flex"
                          >
                            <i className="ph-fill ph-star" />
                          </span>
                        ))}
                        {Array.from({
                          length: 5 - Math.round(product.overallRating),
                        }).map((_, index) => (
                          <span
                            key={`empty-star-${index}`}
                            className="text-15 fw-medium text-warning-300 d-flex"
                          >
                            <i className="ph-fill ph-star" />
                          </span>
                        ))}
                      </div>
                      <span className="text-sm fw-medium text-neutral-600">
                        {product.overallRating} Star Rating
                      </span>
                      <span className="text-sm fw-medium text-gray-500">
                        (
                        {product.ratingAndReviews
                          ? product.ratingAndReviews.length
                          : 0}
                        )
                      </span>
                    </div>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      {" "}
                      <span className="text-gray-400">SKU:</span>{" "}
                      {selectedVariation?.sku || "N/A"}{" "}
                    </span>
                  </div>

                  <div className="mt-10 flex-align flex-wrap gap-32">
                    <div className="flex-align gap-8">
                      <h4 className="mb-0">
                        &#8377;
                        {selectedVariation?.salePrice || product.salePrice}
                      </h4>
                      {selectedVariation ? selectedVariation?.salePrice <
                        selectedVariation?.regularPrice && (
                        <span className="text-md text-gray-500">
                          <del style={{ color: "#000" }}>
                            &#8377;
                            {selectedVariation?.regularPrice ||
                              product.regularPrice}
                          </del>
                        </span>
                      )
                      :<span className="text-md text-gray-500">
                      <del style={{ color: "#000" }}>
                        &#8377;
                        {product.regularPrice}
                      </del>
                    </span>
                    }
                    </div>
                  </div>

                  {/* Variation Attributes */}
                  {Object.keys(uniqueAttributes).map((attrName) => (
                    <div key={attrName} className="mt-10">
                      <label className="block text-sm font-medium text-gray-700">
                        {attrName}:
                      </label>
                      <select
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={attributeOptions[attrName] || ""}
                        onChange={(e) =>
                          handleAttributeChange(attrName, e.target.value)
                        }
                      >
                        <option value="">Select {attrName}</option>
                        {uniqueAttributes[attrName]?.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}

                  <span className="mt-10 pt-10 text-gray-700 border-top border-gray-100 d-block" />
                  <div className="productdetaillist">
                    <h5>Product Detail</h5>
                    <ul className="list-inside ms-12 mt-10">
                      {parsedDetails.map((detail, index) => (
                        <li className="text-gray-900 text-sm mb-0" key={index}>
                          {detail.key}: {detail.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="productdetaillist">
                    <h5>Description</h5>
                    <p className="text-gray-700 mt-10 text-14">
                      {product.description}
                    </p>
                  </div>
                  <hr />
                  <div className="productdetaillist">
                    <h5>Specifications</h5>
                    <ul className="list-inside ms-12 mt-10">
                      {parsedSpecifications.map((detail, index) => (
                        <li className="text-gray-900 text-sm mb-0" key={index}>
                          {detail.key}: {detail.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr />

                  <div className="productdetaillist">
                    <h5>More</h5>
                    <p className="text-gray-700 mt-10 text-14">
                      {product.more}
                    </p>
                  </div>

                  <span className="mt-32 pt-10 text-gray-700 border-top border-gray-100 d-block" />
                </div>
              </div>
              <div className="col-xl-3">
                <div className="productsidecard">
                  <div className="">
                    <h2 className="text-2xl font-semibold">
                      &#8377;{selectedVariation?.salePrice || product.salePrice}
                      {selectedVariation ? selectedVariation?.salePrice <
                        selectedVariation?.regularPrice && (
                        <sup>
                          <span className="text-sm text-gray-500">
                            <del>
                              &#8377;
                              {selectedVariation?.regularPrice ||
                                product.regularPrice}
                            </del>
                          </span>
                        </sup>
                      ):<sup>
                      <span className="text-sm text-gray-500">
                        <del>
                          &#8377;
                          {product.regularPrice}
                        </del>
                      </span>
                    </sup>}
                    </h2>
                    <p className="text-sm text-blue-600 font-medium">
                      FREE delivery{" "}
                      {new Date().toLocaleDateString("en-IN", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                      . <span className="underline">Details</span>
                    </p>
                    <p className="text-sm text-gray-600 flex items-center location">
                      <span className="mr-1">
                        <FaLocationDot />
                      </span>{" "}
                      Deliver to Jaipur, Rajasthan
                    </p>
                    <div className="instock">
                      <p className="text-green-600 font-bold mt-2">
                        In stock (
                        {selectedVariation?.stockQty !== undefined
                          ? selectedVariation.stockQty
                          : product.stockQty}
                        )
                      </p>
                      <p className="text-gray-700 text-sm">
                        Payment{" "}
                        <span className="text-blue-600 underline">
                          Secure transaction
                        </span>
                      </p>
                      {product.brandId?.name && (
                        <p className="text-sm text-gray-700">
                          Brand: <strong>{product.brandId.name}</strong>
                        </p>
                      )}
                    </div>

                    <div className="mt-3 mb-20">
                      <label className="block text-sm font-medium">
                        Quantity:
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          className="border rounded p-4 productincreBtn"
                          onClick={decrementQuantity}
                          disabled={selectedQuantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-10">{selectedQuantity}</span>
                        <button
                          className="border rounded p-4 productincreBtn"
                          onClick={incrementQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <button
                        className="btn btn-main w-100 text-center rounded-pill flex-align justify-content-center gap-8 px-20 my-4"
                        // onClick={handleAddToCartClick}
                        onClick={() =>
                          dispatch(
                            addToCart(
                              product,
                              selectedVariation,
                              selectedQuantity
                            )
                          )
                        }
                        disabled={
                          (selectedVariation?.stockQty !== undefined
                            ? selectedVariation.stockQty
                            : product.stockQty) <= 0
                        }
                      >
                        {(selectedVariation?.stockQty !== undefined
                          ? selectedVariation.stockQty
                          : product.stockQty) <= 0
                          ? "Out of Stock"
                          : "Add to cart"}
                      </button>
                    </div>
                    <div>
                      <Link
                        to="/cart"
                        className="btn btn-main w-100 text-center rounded-pill flex-align justify-content-center gap-8 px-20 my-10"
                      >
                        Buy Now
                      </Link>
                    </div>
                    {/* Social Sharing Options */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium">
                        Share:
                      </label>
                      <div className="flex mt-2 socailiconProduct">
                        <FacebookShareButton url={currentUrl}>
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={currentUrl}
                          title={product.name}
                        >
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton
                          url={currentUrl}
                          title={product.name}
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        {/* Email Share Button */}
                        <EmailShareButton
                          subject={emailSubject}
                          body={emailBody}
                          url={currentUrl}
                        >
                          <EmailIcon size={32} round />
                        </EmailShareButton>
                        {/* You can add more social media sharing options here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsOne;
