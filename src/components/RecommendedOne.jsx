import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", name: "All" },
  { id: "shirt", name: "Shirts" },
  { id: "jeans", name: "Jeans" },
  { id: "bag", name: "Bag" },
];

const products = [
  {
    id: 1,
    category: "shirt",
    name: "A2 Gir Cow Ghee – 250ml",
    image: "assets/images/common/ghee-1.png",
    brand: "By Grace of Cows.",
    price: 525,
    oldPrice: 650,
    rating: 4.8,
    reviews: "17k",
    sale: false,
  },
  {
    id: 2,
    category: "jeans",
    name: "A2 Gir Cow Ghee – 500ml",
    image: "assets/images/common/ghee-2.png",
    brand: "By Grace of Cows.",
    price: 900,
    oldPrice: 1250,
    rating: 4.8,
    reviews: "17k",
    sale: true,
  },
  {
    id: 3,
    category: "bag",
    name: "A2 Desi Cow Milk – 1L",
    image: "assets/images/common/oil-2.jpg",
    brand: "By Grace of Cows.",
    price: 90,
    oldPrice: 120,
    rating: 4.7,
    reviews: "10k",
    sale: false,
  },
  {
    id: 4,
    category: "bag",
    name: "Cold Pressed Coconut Oil – 500ml",
    image: "assets/images/common/oil-1.jpg",
    brand: "By Grace of Cows.",
    price: 300,
    oldPrice: 400,
    rating: 4.6,
    reviews: "8k",
    sale: false,
  },
];

const RecommendedOne = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section className="recommended mt-40 mb-40">
      <div className="container">
        <div className="section-heading flex-between flex-wrap gap-16">
          <h5 className="mb-0">Best Seller</h5>
          <ul className="nav common-tab nav-pills">
            {categories.map((cat) => (
              <li className="nav-item" key={cat.id}>
                <button
                  className={`nav-link ${activeTab === cat.id ? "active" : ""}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content">
          <div className="row g-12">
            {filteredProducts.map((product) => (
              <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={product.id}>
                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                  {product.sale && (
                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
                      Sale 50%
                    </span>
                  )}
                  <Link to="/shop" className="product-card__thumb flex-center">
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className="product-card__content p-sm-2">
                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                      <Link to="/shop" className="link text-line-2">
                        {product.name}
                      </Link>
                    </h6>
                    <div className="flex-align gap-4">
                      <span className="text-main-600 text-md d-flex">
                        <i className="ph-fill ph-storefront" />
                      </span>
                      <span className="text-gray-500 text-xs">{product.brand}</span>
                    </div>
                    <div className="product-card__content mt-12">
                      <div className="product-card__price mb-8">
                        <span className="text-heading text-md fw-semibold">
                          ₹{product.price}
                          <span className="text-gray-500 fw-normal"> /MRP </span>
                        </span>
                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                          ₹{product.oldPrice}
                        </span>
                      </div>
                      <div className="flex-align gap-6">
                        <span className="text-xs fw-bold text-gray-600">{product.rating}</span>
                        <span className="text-15 fw-bold text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-xs fw-bold text-gray-600">({product.reviews})</span>
                      </div>
                      <Link
                        to="/cart"
                        className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
                      >
                        Add To Cart <i className="ph ph-shopping-cart" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 w-100">No products available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedOne;
