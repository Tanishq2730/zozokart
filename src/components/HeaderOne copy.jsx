import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink } from 'react-router-dom';

const HeaderOne = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };

    }, []);

    // Set the default language
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // Set the default currency
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };


    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };

    // category control support
    const [activeCategory, setActiveCategory] = useState(false)
    const handleCategoryToggle = () => {
        setActiveCategory(!activeCategory);
    };
    const [activeIndexCat, setActiveIndexCat] = useState(null);
    const handleCatClick = (index) => {
        setActiveIndexCat(activeIndexCat === index ? null : index);
    };




    return (
        <>
            <div className="overlay" />
            <div className={`side-overlay ${(menuActive || activeCategory) && "show"}`} />
            {/* ==================== Search Box Start Here ==================== */}
            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                            placeholder="Search for a product..."
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}
            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">

                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="assets/images/logo/logo.png" alt="Logo" width="80px" />
                    </Link>
                    <div className="mobile-menu__menu">
                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            <li className="on-hover-item nav-menu__item"><Link to="/" className="nav-menu__link">
                                HOME
                            </Link>
                            </li>
                            <li className="on-hover-item nav-menu__item">
                                <Link to="/about" className="nav-menu__link">
                                    ABOUT US
                                </Link>
                            </li>
                            <li className="on-hover-item nav-menu__item">
                                <Link to="/shop" className="nav-menu__link">
                                    SHOP
                                </Link>
                            </li>
                            {/* <li className="on-hover-item nav-menu__item">
                                <Link to="/subscription" className="nav-menu__link">
                                    SUBSCRIPTION
                                </Link>
                            </li> */}
                            <li className="on-hover-item nav-menu__item">
                                <Link to="/contact" className="nav-menu__link">
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}


            {/* ======================= Middle Header Start ========================= */}

            <div className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <header className="header-middle header-bg border-bottom border-gray-100">
                    <div className="container container-lg">
                        <nav className="header-inner flex-between">
                            {/* Logo Start */}
                            <div className="logo">
                                <Link to="/" className="link">
                                    <img src="assets/images/logo/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            {/* Logo End  */}
                            {/* form location Start */}
                            <form action="#" className="flex-align flex-wrap form-location-wrapper">
                                <div className="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none">
                                    <select defaultValue={1}
                                        className=" st-clr js-example-basic-single border border-gray-200 border-end-0"
                                        name="state"
                                    >
                                        <option value={1} >
                                            All Categories
                                        </option>
                                        <option value={1}>A2 Ghee</option>
                                        <option value={1}>A2 Milk</option>
                                        <option value={1}>Cold Pressed Oils</option>
                                    </select>
                                    <div className="search-form__wrapper position-relative">
                                        <input
                                            type="text"
                                            className=" st-clr search-form__input common-input h-100 ps-16 pe-18 rounded-end-pill pe-44"
                                            placeholder="Search for a product.."
                                        />
                                        <button
                                            type="submit"
                                            className="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                                        >
                                            <i className="ph ph-magnifying-glass" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        to="#"
                                        className="bg-main-two-600 text-16 text-white p-5 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-lg-none"
                                    >
                                        <div className="d-flex text-16">
                                            {/* <i className="ph ph-phone-call" /> */}
                                            <i className="ph ph-wallet" />
                                        </div>
                                        <strong> ₹ 500.00</strong>
                                    </Link>
                                </div>
                                <div className="d-sm-block d-md-none location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100">
                                    <span className="text-gray-900 text-xl d-xs-flex ">
                                        <i className="ph ph-map-pin" />
                                    </span>
                                    <div className="line-height-1">
                                        <span>Punes</span>
                                    </div>
                                </div>
                            </form>
                            {/* form location start */}
                            {/* Header Middle Right start */}
                            <div className="header-right flex-align d-lg-block d-none">
                                <div className="flex-align flex-wrap gap-12">
                                    <div className="location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100">
                                        <span className="text-gray-900 text-xl d-xs-flex d-none">
                                            <i className="ph ph-map-pin" />
                                        </span>
                                        <div className="line-height-1">
                                            <div className="line-height-1">
                                                <span>Pune</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <Link
                                        to="/sign-in"
                                        className="flex-align gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-3 mt-6 item-hover__text">
                                            <i className="ph ph-user-circle" />{" "}
                                        </span>
                                        <span className="text-14 text-gray-500 item-hover__text d-none d-lg-flex">
                                            Login
                                        </span>
                                    </Link>

                                    {/* start div for account show after login */}
                                    <Link className="on-hover-item  border-right-item-md-space has-submenu">
                                        <span className='text-14 text-gray-500'>My Account</span>
                                        <ul className="on-hover-dropdown common-dropdown common-dropdown--md max-h-200 scroll-md px-0 py-8">
                                            <li className="nav-submenu__item">
                                                <Link
                                                    to="/dashboard"
                                                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-sm d-flex">
                                                        <i className="ph ph-speedometer"></i>
                                                    </span>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li className="nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-sm d-flex">
                                                        <i className="ph ph-rows-plus-bottom"></i>
                                                    </span>
                                                    Orders
                                                </Link>
                                            </li>
                                            <li className="nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-sm d-flex">
                                                        <i className="ph ph-download-simple"></i>
                                                    </span>
                                                    Download
                                                </Link>
                                            </li>
                                            <li className="nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-sm d-flex">
                                                        <i className="ph ph-map-pin-area"></i>
                                                    </span>
                                                    Address
                                                </Link>
                                            </li>
                                            <li className="nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-sm d-flex">
                                                        <i className="ph ph-user-circle-plus"></i>
                                                    </span>
                                                    Account Detail
                                                </Link>
                                            </li>
                                            <li className="nav-submenu__item">
                                                <Link
                                                    to="#"
                                                    className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-sm d-flex">
                                                        <i className="ph ph-sign-out"></i>
                                                    </span>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </Link>
                                    {/* close div for account show after login */}

                                    <Link to="/wishlist" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-heart" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                0
                                            </span>
                                        </span>
                                        <span className="text-14 text-gray-500 item-hover__text d-none d-lg-flex">
                                            Wishlist
                                        </span>
                                    </Link>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                0
                                            </span>
                                        </span>
                                        <span className="text-14 text-gray-500 item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            {/* Header Middle Right End  */}
                        </nav>
                    </div>
                </header>
                {/* ======================= Middle Header End ========================= */}
                {/* ==================== Header Start Here ==================== */}
                <header className="header bg-white border-bottom border-gray-100">
                    <div className="container container-lg">
                        <nav className="header-inner d-flex justify-content-between gap-8">
                            <div className="flex-align menu-category-wrapper">
                                {/* Category Dropdown Start */}
                                <div className="category on-hover-item">
                                    <button
                                        onClick={handleCategoryToggle}
                                        type="button"
                                        className="category__button flex-align gap-8 fw-medium p-5 border-end border-start border-gray-100 text-heading"
                                    >
                                        <span className="icon text-2xl d-xs-flex d-none">
                                            <i className="ph ph-dots-nine" />
                                        </span>
                                        <span className="d-sm-flex d-none">All</span> Categories
                                        <span className="arrow-icon text-xl d-flex">
                                            <i className="ph ph-caret-down" />
                                        </span>
                                    </button>
                                    <div className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper ${activeCategory && "active"}`}>
                                        <button
                                            onClick={() => { handleCategoryToggle(); setActiveIndexCat(null) }}
                                            type="button"
                                            className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                                        >
                                            {" "}
                                            <i className="ph ph-x" />{" "}
                                        </button>
                                        {/* Logo Start */}
                                        <div className="logo px-16 d-lg-none d-block">
                                            <Link to="/" className="link">
                                                <img src="assets/images/logo/logo.png" alt="Logo" />
                                            </Link>
                                        </div>
                                        {/* Logo End */}
                                        <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
                                            <li onClick={() => handleCatClick(0)} className={`has-submenus-submenu ${activeIndexCat === 0 ? "active" : ""}`}>
                                                <Link onClick={() => setActiveIndexCat(null)}
                                                    to="#"
                                                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-xl d-flex">
                                                        <i class="ph ph-bowl-food"></i>
                                                    </span>
                                                    <span>A2 Ghee</span>
                                                    <span className="icon text-md d-flex ms-auto">
                                                        <i className="ph ph-caret-right" />
                                                    </span>
                                                </Link>
                                                <div className={`submenus-submenu py-16 ${activeIndexCat === 0 ? "open" : ""}`}>
                                                    <h6 className="text-lg px-16 submenus-submenu__title">
                                                        A2 Ghee
                                                    </h6>
                                                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                        <li>
                                                            <Link to="/">Product 1</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product 2</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Product 3</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li onClick={() => handleCatClick(1)} className={`has-submenus-submenu ${activeIndexCat === 1 ? "active" : ""}`}>
                                                <Link
                                                    to="#"
                                                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-xl d-flex">
                                                        <i className="ph ph-brandy" />
                                                    </span>
                                                    <span>A2 Milk</span>
                                                    <span className="icon text-md d-flex ms-auto">
                                                        <i className="ph ph-caret-right" />
                                                    </span>
                                                </Link>
                                                <div className={`submenus-submenu py-16 ${activeIndexCat === 1 ? "open" : ""}`}>
                                                    <h6 className="text-lg px-16 submenus-submenu__title">
                                                        A2 Milk
                                                    </h6>
                                                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                        <li>
                                                            <Link to="/">Test </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/"> Test</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Test</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li onClick={() => handleCatClick(2)} className={`has-submenus-submenu ${activeIndexCat === 2 ? "active" : ""}`}>
                                                <Link
                                                    to="#"
                                                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                                                >
                                                    <span className="text-xl d-flex">
                                                        <i class="ph ph-hand-soap"></i>
                                                    </span>
                                                    <span>Cold Pressed Oils</span>
                                                    <span className="icon text-md d-flex ms-auto">
                                                        <i className="ph ph-caret-right" />
                                                    </span>
                                                </Link>
                                                <div className={`submenus-submenu py-16 ${activeIndexCat === 2 ? "open" : ""}`}>
                                                    <h6 className="text-lg px-16 submenus-submenu__title">
                                                        Cold Pressed Oils
                                                    </h6>
                                                    <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                                                        <li>
                                                            <Link to="/"> Test </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/"> Test</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Category Dropdown End  */}
                                {/* Menu Start  */}
                                <div className="header-menu d-lg-block d-none">
                                    {/* Nav Menu Start */}
                                    <ul className="nav-menu flex-align ">
                                        <li className="on-hover-item nav-menu__item">
                                            <Link to="/" className="nav-menu__link">
                                                HOME
                                            </Link>
                                        </li>
                                        <li className="on-hover-item nav-menu__item">
                                            <Link to="/about" className="nav-menu__link">
                                                ABOUT US
                                            </Link>
                                        </li>
                                        <li className="on-hover-item nav-menu__item">
                                            <Link to="/shop" className="nav-menu__link">
                                                SHOP
                                            </Link>
                                        </li>
                                        {/* <li className="on-hover-item nav-menu__item">
                                            <Link to="/subscription" className="nav-menu__link">
                                                SUBSCRIPTION
                                            </Link>
                                        </li> */}
                                        {/* <li className="on-hover-item nav-menu__item">
                                        <Link to="#" className="nav-menu__link">
                                           BLOG
                                        </Link>
                                    </li> */}
                                        <li className="on-hover-item nav-menu__item">
                                            <Link to="/contact" className="nav-menu__link">
                                                CONTACT US
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* Nav Menu End */}
                                </div>
                                {/* Menu End  */}
                            </div>
                            {/* Header Right start */}
                            <div className="header-right flex-align">
                                <Link
                                    to="#"
                                    className="bg-main-two-600 text-16 text-white p-5 h-100 hover-bg-main-800 flex-align gap-8 text-lg d-lg-flex d-none"
                                >
                                    <div className="d-flex text-16">
                                        {/* <i className="ph ph-phone-call" /> */}
                                        <i className="ph ph-wallet" />
                                    </div>
                                    <strong> ₹ 500.00</strong>
                                </Link>
                                <div className="me-16 d-lg-none d-block">
                                    <div className="flex-align flex-wrap gap-12">
                                        <button onClick={handleSearchToggle}
                                            type="button"
                                            className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                        >
                                            <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                                <i className="ph ph-magnifying-glass" />
                                            </span>
                                        </button>
                                        {/* <Link
                                        to="/sign-up"
                                        className="flex-align gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-3 mt-6 item-hover__text">
                                            <i className="ph ph-user-circle" />{" "}
                                        </span>
                                        <span className="text-14 text-gray-500 item-hover__text d-none d-lg-flex">
                                            Sign In / Sign Up
                                        </span>
                                    </Link> */}
                                        {/* start mobile div for account show after login */}
                                        <Link
                                            to="#"
                                            className="flex-align gap-4 item-hover on-hover-item  border-right-item-md-space has-submenu"
                                        >
                                            <span className="text-2xl text-gray-700 d-flex position-relative me-3 mt-6 item-hover__text">
                                                <i className="ph ph-user-circle" />{" "}
                                            </span>
                                            <ul style={{ left: '-50px' }} className="on-hover-dropdown common-dropdown common-dropdown--md max-h-200 scroll-md px-0 py-8">
                                                <li className="nav-submenu__item">
                                                    <Link
                                                        to="/dashboard"
                                                        className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-sm d-flex">
                                                            <i className="ph ph-speedometer"></i>
                                                        </span>
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li className="nav-submenu__item">
                                                    <Link
                                                        to="#"
                                                        className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-sm d-flex">
                                                            <i className="ph ph-rows-plus-bottom"></i>
                                                        </span>
                                                        Orders
                                                    </Link>
                                                </li>
                                                <li className="nav-submenu__item">
                                                    <Link
                                                        to="#"
                                                        className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-sm d-flex">
                                                            <i className="ph ph-download-simple"></i>
                                                        </span>
                                                        Download
                                                    </Link>
                                                </li>
                                                <li className="nav-submenu__item">
                                                    <Link
                                                        to="#"
                                                        className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-sm d-flex">
                                                            <i className="ph ph-map-pin-area"></i>
                                                        </span>
                                                        Address
                                                    </Link>
                                                </li>
                                                <li className="nav-submenu__item">
                                                    <Link
                                                        to="#"
                                                        className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-sm d-flex">
                                                            <i className="ph ph-user-circle-plus"></i>
                                                        </span>
                                                        Account Detail
                                                    </Link>
                                                </li>
                                                <li className="nav-submenu__item">
                                                    <Link
                                                        to="#"
                                                        className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                                    >
                                                        <span className="text-sm d-flex">
                                                            <i className="ph ph-sign-out"></i>
                                                        </span>
                                                        Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Link>
                                        {/* close div for account show after login */}

                                        <Link to="/wishlist" className="flex-align gap-4 item-hover">
                                            <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                                <i className="ph ph-heart" />
                                                <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                    0
                                                </span>
                                            </span>
                                            <span className="text-14 text-gray-500 item-hover__text d-none d-lg-flex">
                                                Wishlist
                                            </span>
                                        </Link>
                                        <Link to="/cart" className="flex-align gap-4 item-hover">
                                            <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                                <i className="ph ph-shopping-cart-simple" />
                                                <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                    0
                                                </span>
                                            </span>
                                            <span className="text-14 text-gray-500 item-hover__text d-none d-lg-flex">
                                                Cart
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <button
                                    onClick={handleMenuToggle}
                                    type="button"
                                    className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                                >
                                    {" "}
                                    <i className="ph ph-list" />{" "}
                                </button>
                            </div>
                            {/* Header Right End  */}
                        </nav>
                    </div>
                </header>
            </div>
            {/* ==================== Header End Here ==================== */}
        </>

    )
}

export default HeaderOne