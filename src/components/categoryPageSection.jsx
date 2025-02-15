import React, { useState } from "react";
import Card from "./common/card";

const products = [
  {
    id: 1,
    image: "assets/images/product/p1.png",
    name: "Wireless Bluetooth",
    price: "From ₹999",
    category: "Bags",
  },
  {
    id: 2,
    image: "assets/images/product/p2.png",
    name: "Wireless Bluetooth",
    price: "From ₹999",
    category: "Clothing",
  },
  {
    id: 3,
    image: "assets/images/product/p3.png",
    name: "Wireless Bluetooth",
    price: "From ₹999",
    category: "Bags",
  },
  {
    id: 4,
    image: "assets/images/product/p4.png",
    name: "Wireless Bluetooth",
    price: "From ₹999",
    category: "Clothing",
  },
  {
    id: 5,
    image: "assets/images/product/p5.png",
    name: "Wireless Bluetooth",
    price: "From ₹999",
    category: "Bags",
  },
  {
    id: 6,
    image: "assets/images/product/p6.png",
    name: "Wireless Bluetooth",
    price: "From ₹999",
    category: "Clothing",
  },
];

const filters = [
  { title: "Category", options: ["Clothing", "Bags"] },
  { title: "Brand", options: ["Nike", "Adidas", "Puma"] },
  { title: "Price Range", options: ["Under ₹500", "₹500 - ₹1000", "Above ₹1000"] },
];

export default function CategoryPageSection() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleFilter = (filterType, option) => {
    setSelectedFilters((prev) => {
      const prevOptions = prev[filterType] || [];
      return {
        ...prev,
        [filterType]: prevOptions.includes(option)
          ? prevOptions.filter((item) => item !== option)
          : [...prevOptions, option],
      };
    });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedFilters["Category"] && selectedFilters["Category"].length) {
      return selectedFilters["Category"].includes(product.category);
    }
    return true;
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3 border-end">
          <h5 className="mb-4">Filters</h5>
          {filters.map((filter) => (
            <div key={filter.title} className="filtercard">
              <div className="headfilter">
                <h4>{filter.title}</h4>
              </div>
              {filter.options.map((option) => (
                <div key={option} className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={option}
                    checked={selectedFilters[filter.title]?.includes(option) || false}
                    onChange={() => toggleFilter(filter.title, option)}
                  />
                  <label className="form-check-label" htmlFor={option}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Product Listing Section */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-3">
                <div className="catCard">
                  <Card product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
