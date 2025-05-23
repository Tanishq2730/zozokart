import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import SubscriptionPlan from './SubscriptionCalendar';
import SubscriptionCalendar from './SubscriptionCalendar';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
// import InnerImageZoom from 'react-inner-image-zoom'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const packs = [
    { size: "1 Ltr", price: "Rs. 349.00", packname: "Pack of 1", originalprice: "Rs. 400.00", savings: 'Save: 13%', packtag:'' },
    { size: "2 Ltr", price: "Rs. 549.00", packname: "Pack of 2", originalprice: "Rs. 700.00", savings: 'Save: 13%', packtag:'Most Bought' },
    { size: "3 Ltr", price: "Rs. 649.00", packname: "Pack of 3", originalprice: "Rs. 900.00", savings: 'Save: 13%', packtag:'Most savings' }
];

const ProductDetailsOne = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [selectedPack, setSelectedPack] = useState(null);
    const [discountedPrice, setDiscountedPrice] = useState(null);
    const [isSubscriptionVisible, setIsSubscriptionVisible] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const productImages = [
        "assets/images/common/ghee-1.png",
        "assets/images/common/ghee-2.png",
        "assets/images/common/ghee-3.png",
        "assets/images/common/ghee-4.png",
    ];

    // increment & decrement
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


    const [mainImage, setMainImage] = useState(productImages[0]);

    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
    };


    // Handle pack selection
    const handlePackSelection = (pack) => {
        setSelectedPack(pack);
        setDiscountedPrice(pack.price - 100); // Example discount
    };

    // Clear the selected pack
    const handleClearSelection = () => {
        setSelectedPack(null);
        setDiscountedPrice(null);
    };

    const toggleSubscriptionVisibility = () => {
        setIsSubscriptionVisible(!isSubscriptionVisible);
    };

    return (
        <section className="product-details py-0 mt-30">
            <div className="container-fluid">
                <div className="row gy-4">
                    <div className="col-lg-12">
                        <div className="row gy-4">
                            <div className="col-xl-6">
                                <div className='row'>
                                    <div className="col-2">
                                        <ul>
                                            {productImages.map((image, index) => (
                                                <li style={{ cursor: 'pointer' }} className=" mb-10 center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                                                    key={index}
                                                    onClick={() => setPhotoIndex(index)}>
                                                    <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <div className="product-details__images-slider">
                                            <Slider {...settingsThumbs}>
                                                {productImages.map((image, index) => (
                                                    <div
                                                        className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                                                        key={index}
                                                        onClick={() => setPhotoIndex(index)}
                                                    >
                                                        <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div> */}
                                    </div>
                                    <div className="col-10">
                                        <div className="product-details__left">
                                            <div className="product-details__thumb-slider border border-gray-100 p-5 rounded-16">
                                                <div className="product-details__thumb flex-center h-100">
                                                    <img
                                                        src={productImages[photoIndex]}
                                                        onClick={() => setIsOpen(true)}
                                                        style={{ cursor: 'pointer', width: '400px',height:"490px",objectFit:"contain" }}
                                                        alt="Main Thumbnail"

                                                    />
                                                    {isOpen && (
                                                        <Lightbox
                                                            mainSrc={productImages[photoIndex]}
                                                            nextSrc={productImages[(photoIndex + 1) % productImages.length]}
                                                            prevSrc={productImages[(photoIndex + productImages.length - 1) % productImages.length]}
                                                            onCloseRequest={() => setIsOpen(false)}
                                                            onMovePrevRequest={() =>
                                                                setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length)
                                                            }
                                                            onMoveNextRequest={() =>
                                                                setPhotoIndex((photoIndex + 1) % productImages.length)
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* horizental for mobile  start*/}
                                <div className='d-none'>
                                    <div className="product-details__left">
                                        <div className="product-details__thumb-slider border border-gray-100 p-5 rounded-16">
                                            <div className="product-details__thumb flex-center h-100">
                                                <img
                                                    src={productImages[photoIndex]}
                                                    onClick={() => setIsOpen(true)}
                                                    style={{ cursor: 'pointer', width: '400px' }}
                                                    alt="Main Thumbnail"
                                                />
                                                {isOpen && (
                                                    <Lightbox
                                                        mainSrc={productImages[photoIndex]}
                                                        nextSrc={productImages[(photoIndex + 1) % productImages.length]}
                                                        prevSrc={productImages[(photoIndex + productImages.length - 1) % productImages.length]}
                                                        onCloseRequest={() => setIsOpen(false)}
                                                        onMovePrevRequest={() =>
                                                            setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length)
                                                        }
                                                        onMoveNextRequest={() =>
                                                            setPhotoIndex((photoIndex + 1) % productImages.length)
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-24">
                                        <div className="product-details__images-slider">
                                            <Slider {...settingsThumbs}>
                                                {productImages.map((image, index) => (
                                                    <div
                                                        className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                                                        key={index}
                                                        onClick={() => setPhotoIndex(index)}
                                                    >
                                                        <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                {/* horizental for mobile  close*/}
                            </div>
                            <div className="col-xl-6">
                                <div className="product-details__content">
                                    <h5 className="mb-12">A2 Gir Cow Ghee – 250ml</h5>
                                    <div className="flex-align flex-wrap gap-12">
                                        <div className="flex-align gap-12 flex-wrap">
                                            <div className="flex-align gap-8">
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                            </div>
                                            <span className="text-sm fw-medium text-neutral-600">
                                                4.7 Star Rating
                                            </span>
                                            <span className="text-sm fw-medium text-gray-500">
                                                (21,671)
                                            </span>
                                        </div>
                                        <span className="text-sm fw-medium text-gray-500">|</span>
                                        <span className="text-gray-900">
                                            {" "}
                                            <span className="text-gray-400">SKU:</span>EB4DRP{" "}
                                        </span>
                                    </div>
                                    <div className="mt-10 flex-align flex-wrap gap-32">
                                        <div className="flex-align gap-8">
                                            <h4 className="mb-0">₹25.00</h4>
                                            <span className="text-md text-gray-500"><del style={{ color: '#000' }}>₹38.00</del></span>
                                        </div>
                                    </div>
                                    <span className="mt-10 pt-10 text-gray-700 border-top border-gray-100 d-block" />
                                    <ul className="list-inside ms-12 mt-10">
                                        <li className="text-gray-900 text-sm mb-0">
                                            Made from the milk of Gir cows
                                        </li>
                                        <li className="text-gray-900 text-sm mb-0">
                                            Crafted using the traditional Bilona process
                                        </li>
                                        <li className="text-gray-900 text-sm mb-0">
                                            A2 ghee, known for its superior quality and health benefits
                                        </li>
                                        <li className="text-gray-900 text-sm mb-0">
                                            Rich in essential vitamins, minerals, and antioxidants
                                        </li>
                                    </ul>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-md-4 text-center'>
                                            <img src='assets/images/common/Ghee-pro-comp.svg' alt='' width="60px" />
                                            <h5 className='text-16'>Completely Natural</h5>
                                        </div>
                                        <div className='col-md-4 text-center'>
                                            <img src='assets/images/common/Ghee-pro-icon-2.svg' alt='' width="60px" />
                                            <h5 className='text-16'>Free from Preservatives</h5>

                                        </div>
                                        <div className='col-md-4 text-center'>
                                            <img src='assets/images/common/Ghee-pro-icon-3.svg' alt='' width="60px" />
                                            <h5 className='text-16'>Ideal Granular Texture</h5>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mt-10 text-14">
                                        Indulge in the rich, golden goodness of Grace of Cows A2 Gir Cow Ghee,
                                        crafted from Gir cow milk for a heart-healthy, nutrient-packed boost to
                                        your meals. Available in 1 Ltr, 500 ML, and 250 ML packs, it brings nature’s
                                        pure essence to your kitchen.
                                    </p>
                                    <div className="product-selection py-10">
                                        <div className="pack-options w-100" style={{ display: 'inline-block' }}>
                                            <h5 className='fs-6 mb-1'>Pack:</h5>
                                            <div className='row'>
                                                {packs.map((pack) => (
                                                    <div style={{position:'relative'}} className={`col-md-3 rounded pack-button ${selectedPack?.size === pack.size ? "selected" : ""}`} key={pack.size} onClick={() => handlePackSelection(pack)}>
                                                        <span className='bg-main-two-700 text-white px-1' style={{position:'absolute',top:'-8px', right:'10px',fontSize:'12px'}}>{pack.packtag}</span>
                                                        <h5 className='fs-6 mb-2'>{pack.packname}</h5>
                                                        <p className="price"><b>{pack.price}</b></p>
                                                        <p className="original-price fs-8 text-danger">{pack.originalprice}</p>
                                                        <p style={{fontSize:'12px'}}className="savings text-main-700">{pack.savings}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* <label>Pack:</label>
                                        
                                            {packs.map((pack) => (
                                                <div
                                                    key={pack.size}
                                                    className={`pack-button ${selectedPack?.size === pack.size ? "selected" : ""}`}
                                                    onClick={() => handlePackSelection(pack)}
                                                >
                                                    {pack.size}
                                                </div>
                                            ))} */}
                                            {/* <button className="clear-btn" onClick={handleClearSelection}>
                                                &times; Clear
                                            </button> */}
                                        </div>

                                        {/* Display price */}
                                        {/* {selectedPack && (
                                            <div className="price-details">
                                                <span className="original-price">₹{selectedPack.price}.00</span>
                                                <span className="discounted-price">₹{discountedPrice}.00</span>
                                            </div>
                                        )} */}
                                    </div>
                                    <span className="mt-32 pt-10 text-gray-700 border-top border-gray-100 d-block" />
                                    <span className="text-gray-900 d-block mb-8">Quantity:</span>
                                    <div className="flex-between gap-16 flex-wrap">
                                        <div className="flex-align flex-wrap gap-16">
                                            <div className="border border-gray-100 rounded-pill py-9 px-16 flex-align">
                                                <button onClick={decrementQuantity}
                                                    type="button"
                                                    className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                >
                                                    <i className="ph ph-minus" />
                                                </button>
                                                <input
                                                    type="number"
                                                    className="quantity__input border-0 text-center w-32"
                                                    value={quantity} readOnly
                                                />
                                                <button onClick={incrementQuantity}
                                                    type="button"
                                                    className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                                                >
                                                    <i className="ph ph-plus" />
                                                </button>
                                            </div>
                                            <Link
                                                to="#"
                                                className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-20"
                                            >
                                                {" "}
                                                <i className="ph ph-shopping-cart" /> Add To Cart
                                            </Link>
                                            <button
                                                onClick={toggleSubscriptionVisibility}
                                                className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-20"
                                            >

                                                Subscription
                                            </button>
                                        </div>
                                        <div className="flex-align gap-12">
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-heart" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-shuffle" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="w-52 h-52 bg-main-50 text-main-600 text-xl hover-bg-main-600 hover-text-white flex-center rounded-circle"
                                            >
                                                <i className="ph ph-share-network" />
                                            </Link>
                                        </div>
                                    </div>
                                    <span className="mt-10 pt-20 text-gray-700 border-top border-gray-100 d-block" />
                                    <div className="mb-10">
                                        {/* subscription plan start */}
                                        {isSubscriptionVisible && <SubscriptionCalendar />}
                                        {/* subscription plan close */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div className="product-dContent border rounded-24">
                        <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
                            <ul
                                className="nav common-tab nav-pills mb-3 ms-auto me-auto"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active fs-6"
                                        id="pills-description-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-description"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-description"
                                        aria-selected="true"
                                    >
                                        Description
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link  fs-6"
                                        id="pills-benefits-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-benefits"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-benefits"
                                        aria-selected="true"
                                    >
                                        Benefits
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link  fs-6"
                                        id="pills-process-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-process"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-process"
                                        aria-selected="true"
                                    >
                                        Process
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link  fs-6"
                                        id="pills-howtouse-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-howtouse"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-howtouse"
                                        aria-selected="true"
                                    >
                                        How to Use
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link  fs-6"
                                        id="pills-reviews-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-reviews"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-reviews"
                                        aria-selected="false"
                                    >
                                        Reviews
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="product-dContent__box">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-description"
                                    role="tabpanel"
                                    aria-labelledby="pills-description-tab"
                                    tabIndex={0}
                                >
                                    <div className="mb-40">
                                        <h6 className="mb-10">Grace of Cows A2 Gir Cow Ghee: Elevating Every Meal with Nature’s Nourishment</h6>
                                        <p>
                                            At Grace of Cows, we understand that true wellness begins with what you put on your plate.
                                            Our A2 Gir Cow Ghee is not just a product; it’s a celebration of nature’s finest offering,
                                            crafted to enrich your meals with purity and goodness. Sourced from the milk of indigenous
                                            Gir cows, known for their superior A2 protein, our ghee is a powerhouse of nutrients designed
                                            to support your overall health.
                                        </p>
                                        <h6 className="mb-10 mt-20">Why Choose Grace of Cows A2 Gir Cow Ghee?</h6>
                                        <div className='row'>
                                            <div className='col-md-6 p-20  border'>
                                                <div className='row '>
                                                    <div className='col-3'>
                                                        <img src='assets/images/common/Ghee-dec-icon-1.svg' alt='' />
                                                    </div>
                                                    <div className='col-9'>
                                                        <h5 className='text-18'>Pure and Authentic​</h5>
                                                        <p>
                                                            Our ghee is made from 100% A2 milk, ensuring the highest quality and
                                                            authenticity in every drop.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 p-20  border'>
                                                <div className='row '>
                                                    <div className='col-3'>
                                                        <img src='assets/images/common/Ghee-dec-icon-2.svg' alt='' />
                                                    </div>
                                                    <div className='col-9'>
                                                        <h5 className='text-18'>Health-Boosting Nutrients​​</h5>
                                                        <p>
                                                            Packed with Omega-3 fatty acids and rich in vitamins, this ghee
                                                            supports heart health, boosts immunity, and aids digestion.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 p-20  border'>
                                                <div className='row '>
                                                    <div className='col-3'>
                                                        <img src='assets/images/common/Ghee-dec-icon-3.svg' alt='' />
                                                    </div>
                                                    <div className='col-9'>
                                                        <h5 className='text-18'>Versatile Ingredient
                                                        </h5>
                                                        <p>
                                                            Perfect for cooking, drizzling, or even as a dietary supplement, our
                                                            ghee adds richness and nourishment to every meal.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 p-20  border'>
                                                <div className='row '>
                                                    <div className='col-3'>
                                                        <img src='assets/images/common/Ghee-dec-icon-4.svg' alt='' />
                                                    </div>
                                                    <div className='col-9'>
                                                        <h5 className='text-18'>Traditionally Crafted​</h5>
                                                        <p>
                                                            We follow age-old methods, slow-cooking the ghee to preserve
                                                            its natural flavor, aroma, and nutritional properties.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <ul className="list-inside mt-32 ms-16">
                                            <li className="text-gray-400 mb-4">
                                                Made from the milk of Gir cows
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                Crafted using the traditional Bilona process
                                            </li>
                                            <li className="text-gray-400 mb-4">
                                                A2 ghee, known for its superior quality and health benefits
                                            </li>
                                            <li className="text-gray-400 mb-4">Rich in essential vitamins, minerals, and antioxidants</li>
                                        </ul>
                                        <ul className="mt-32">
                                            <li className="text-gray-400 mb-4">Made in India</li>
                                            <li className="text-gray-400 mb-4">Ready To Deliver.</li>
                                        </ul> */}
                                    </div>
                                    <p>
                                        Join us in our mission to elevate everyday meals into moments of nourishment and joy.
                                        With Grace of Cows A2 Gir Cow Ghee, you’re not just cooking; you’re embracing a healthier,
                                        more vibrant lifestyle.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-benefits"
                                    role="tabpanel"
                                    aria-labelledby="pills-benefits-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <h6 className="mb-3">Benefit</h6>
                                        <p className='py-0 mt-4 mb-2'>Grace of Cows A2 Gir Cow Ghee offers a multitude of health benefits, making it a nourishing and versatile addition to your daily diet.</p>
                                        <ol className='mt-2' style={{ listStyle: 'block' }}>
                                            <li>
                                                Aids Digestion: Our ghee is known for its ability to improve digestive health by
                                                stimulating the secretion of stomach acids, making it easier for your body to break
                                                down food and absorb nutrients effectively.
                                            </li>
                                            <li>
                                                Boosts Immunity: Rich in antioxidants and essential nutrients, this ghee helps
                                                strengthen the immune system, protecting the body from infections and promoting
                                                overall wellness.
                                            </li>
                                            <li>
                                                Rich in Healthy Fats and Vitamins: Grace of Cows A2 Gir Cow Ghee imparts healthy
                                                fats that help in the absorption of fat-soluble vitamins such as A, D, E, and K,
                                                essential for maintaining good health and vitality.
                                            </li>
                                            <li>
                                                Nourishing for Pregnant Women and Babies: A reliable source of nourishment,
                                                this ghee provides energy and supports growth, making it highly beneficial
                                                for pregnant women and young babies.
                                            </li>
                                            <li>
                                                Supports Joint Health: Acting as a natural lubricant, our ghee promotes joint
                                                flexibility and mobility, helping to ease discomfort and maintain healthy joints.
                                            </li>
                                            <li>
                                                Helps Maintain Cholesterol Levels: Consuming ghee in moderation can help balance
                                                cholesterol levels, contributing to better heart health.
                                            </li>
                                        </ol>
                                        <p>
                                            By incorporating Grace of Cows A2 Gir Cow Ghee into your daily routine, you are not only
                                            enhancing the taste of your meals but also reaping long-lasting health benefits for you and
                                            your family.

                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-process"
                                    role="tabpanel"
                                    aria-labelledby="pills-process-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <h6 className="mb-2">Process</h6>
                                        <p className='mb-3 mt-2'>Grace of Cows A2 Gir Cow Ghee offers a multitude of health benefits, making it a nourishing and versatile addition to your daily diet.</p>
                                        <ol className='mt-2' style={{ listStyle: 'block' }}>
                                            <li>
                                                Aids Digestion: Our ghee is known for its ability to improve digestive health by
                                                stimulating the secretion of stomach acids, making it easier for your body to break
                                                down food and absorb nutrients effectively.
                                            </li>
                                            <li>
                                                Boosts Immunity: Rich in antioxidants and essential nutrients, this ghee helps
                                                strengthen the immune system, protecting the body from infections and promoting
                                                overall wellness.
                                            </li>
                                            <li>
                                                Rich in Healthy Fats and Vitamins: Grace of Cows A2 Gir Cow Ghee imparts healthy
                                                fats that help in the absorption of fat-soluble vitamins such as A, D, E, and K,
                                                essential for maintaining good health and vitality.
                                            </li>
                                            <li>
                                                Nourishing for Pregnant Women and Babies: A reliable source of nourishment,
                                                this ghee provides energy and supports growth, making it highly beneficial
                                                for pregnant women and young babies.
                                            </li>
                                            <li>
                                                Supports Joint Health: Acting as a natural lubricant, our ghee promotes joint
                                                flexibility and mobility, helping to ease discomfort and maintain healthy joints.
                                            </li>
                                            <li>
                                                Helps Maintain Cholesterol Levels: Consuming ghee in moderation can help balance
                                                cholesterol levels, contributing to better heart health.
                                            </li>
                                        </ol>
                                        <p>
                                            By incorporating Grace of Cows A2 Gir Cow Ghee into your daily routine, you are not only
                                            enhancing the taste of your meals but also reaping long-lasting health benefits for you and
                                            your family.

                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-howtouse"
                                    role="tabpanel"
                                    aria-labelledby="pills-howtouse-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <h6 className="mb-2">How to Use</h6>
                                        <p className='mb-3 mt-2'>Grace of Cows A2 Gir Cow Ghee offers a multitude of health benefits, making it a nourishing and versatile addition to your daily diet.</p>
                                        <ol className='mt-2' style={{ listStyle: 'block' }}>
                                            <li>
                                                Aids Digestion: Our ghee is known for its ability to improve digestive health by
                                                stimulating the secretion of stomach acids, making it easier for your body to break
                                                down food and absorb nutrients effectively.
                                            </li>
                                            <li>
                                                Boosts Immunity: Rich in antioxidants and essential nutrients, this ghee helps
                                                strengthen the immune system, protecting the body from infections and promoting
                                                overall wellness.
                                            </li>
                                            <li>
                                                Rich in Healthy Fats and Vitamins: Grace of Cows A2 Gir Cow Ghee imparts healthy
                                                fats that help in the absorption of fat-soluble vitamins such as A, D, E, and K,
                                                essential for maintaining good health and vitality.
                                            </li>
                                            <li>
                                                Nourishing for Pregnant Women and Babies: A reliable source of nourishment,
                                                this ghee provides energy and supports growth, making it highly beneficial
                                                for pregnant women and young babies.
                                            </li>
                                            <li>
                                                Supports Joint Health: Acting as a natural lubricant, our ghee promotes joint
                                                flexibility and mobility, helping to ease discomfort and maintain healthy joints.
                                            </li>
                                            <li>
                                                Helps Maintain Cholesterol Levels: Consuming ghee in moderation can help balance
                                                cholesterol levels, contributing to better heart health.
                                            </li>
                                        </ol>
                                        <p>
                                            By incorporating Grace of Cows A2 Gir Cow Ghee into your daily routine, you are not only
                                            enhancing the taste of your meals but also reaping long-lasting health benefits for you and
                                            your family.

                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-reviews"
                                    role="tabpanel"
                                    aria-labelledby="pills-reviews-tab"
                                    tabIndex={0}
                                >
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <h6 className="mb-24">Product Description</h6>
                                            <div className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44">
                                                <img
                                                    src="/zozo_cart_website/assets/images/thumbs/comment-img1.png"
                                                    alt=""
                                                    className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                                                />
                                                <div className="flex-grow-1">
                                                    <div className="flex-between align-items-start gap-8 ">
                                                        <div className="">
                                                            <h6 className="mb-12 text-md">Nicolas cage</h6>
                                                            <div className="flex-align gap-8">
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-800 text-xs">
                                                            3 Days ago
                                                        </span>
                                                    </div>
                                                    <h6 className="mb-14 text-md mt-24">Greate Product</h6>
                                                    <p className="text-gray-700">
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form, by injected humour
                                                    </p>
                                                    <div className="flex-align gap-20 mt-44">
                                                        <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                            <i className="ph-bold ph-thumbs-up" />
                                                            Like
                                                        </button>
                                                        <Link
                                                            to="#comment-form"
                                                            className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                        >
                                                            <i className="ph-bold ph-arrow-bend-up-left" />
                                                            Replay
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-start gap-24">
                                                <img
                                                    src="/zozo_cart_website/assets/images/thumbs/comment-img1.png"
                                                    alt=""
                                                    className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                                                />
                                                <div className="flex-grow-1">
                                                    <div className="flex-between align-items-start gap-8 ">
                                                        <div className="">
                                                            <h6 className="mb-12 text-md">Nicolas cage</h6>
                                                            <div className="flex-align gap-8">
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-800 text-xs">
                                                            3 Days ago
                                                        </span>
                                                    </div>
                                                    <h6 className="mb-14 text-md mt-24">Greate Product</h6>
                                                    <p className="text-gray-700">
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form, by injected humour
                                                    </p>
                                                    <div className="flex-align gap-20 mt-44">
                                                        <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                                                            <i className="ph-bold ph-thumbs-up" />
                                                            Like
                                                        </button>
                                                        <Link
                                                            to="#comment-form"
                                                            className="flex-align gap-12 text-gray-700 hover-text-main-600"
                                                        >
                                                            <i className="ph-bold ph-arrow-bend-up-left" />
                                                            Replay
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-56">
                                                <div className="">
                                                    <h6 className="mb-24">Write a Review</h6>
                                                    <span className="text-heading mb-8">
                                                        What is it like to Product?
                                                    </span>
                                                    <div className="flex-align gap-8">
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                                            <i className="ph-fill ph-star" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-32">
                                                    <form action="#">
                                                        <div className="mb-32">
                                                            <label
                                                                htmlFor="title"
                                                                className="text-neutral-600 mb-8"
                                                            >
                                                                Review Title
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="common-input rounded-8"
                                                                id="title"
                                                                placeholder="Great Products"
                                                            />
                                                        </div>
                                                        <div className="mb-32">
                                                            <label
                                                                htmlFor="desc"
                                                                className="text-neutral-600 mb-8"
                                                            >
                                                                Review Content
                                                            </label>
                                                            <textarea
                                                                className="common-input rounded-8"
                                                                id="desc"
                                                                defaultValue={
                                                                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                                                }
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-main rounded-pill mt-48"
                                                        >
                                                            Submit Review
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ms-xxl-5">
                                                <h6 className="mb-24">Customers Feedback</h6>
                                                <div className="d-flex flex-wrap gap-44">
                                                    <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                                                        <h2 className="mb-6 text-main-600">4.8</h2>
                                                        <div className="flex-center gap-8">
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                            <span className="text-15 fw-medium text-warning-600 d-flex">
                                                                <i className="ph-fill ph-star" />
                                                            </span>
                                                        </div>
                                                        <span className="mt-16 text-gray-500">
                                                            Average Product Rating
                                                        </span>
                                                    </div>
                                                    <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">5</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={70}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "70%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                124
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">4</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "50%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                52
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">3</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={35}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "35%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">
                                                                12
                                                            </span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-20">
                                                            <span className="text-gray-900 flex-shrink-0">2</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={20}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "20%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">5</span>
                                                        </div>
                                                        <div className="flex-align gap-8 mb-0">
                                                            <span className="text-gray-900 flex-shrink-0">1</span>
                                                            <div
                                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={5}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            >
                                                                <div
                                                                    className="progress-bar bg-main-600 rounded-pill"
                                                                    style={{ width: "5%" }}
                                                                />
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                                                    <i className="ph-fill ph-star" />
                                                                </span>
                                                            </div>
                                                            <span className="text-gray-900 flex-shrink-0">2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default ProductDetailsOne