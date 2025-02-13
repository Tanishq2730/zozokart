import React, { useState } from "react";
// import { Button, Card } from "react-bootstrap";

const products = [
  { id: 1, name: "Product 1", category: "Clothing", price: 100 },
  { id: 2, name: "Product 2", category: "Bags", price: 200 },
  { id: 3, name: "Product 3", category: "Clothing", price: 150 },
  { id: 4, name: "Product 4", category: "Bags", price: 250 },
];

const categories = ["Clothing", "Bags"];

export default function CategoryPageSection() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) => selectedCategories.includes(product.category))
    : products;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3 border-end">
          <h2 className="mb-4">Filters</h2>
          {categories.map((category) => (
            <div key={category} className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <label className="form-check-label" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* Product Listing Section */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  {/* <Card.Body> */}
                    <div>{product.name}</div>
                    <div>{product.category}</div>
                    <div className="text-primary fw-bold">
                      ${product.price}
                    </div>
                    <button variant="primary">Add to Cart</button>
                  {/* </Card.Body> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
