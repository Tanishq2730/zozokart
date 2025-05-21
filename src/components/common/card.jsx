import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../utils/api-config";

function Card({ product }) {
  const navigate = useNavigate();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const discount = Math.round(
    ((product.mrp - product.salePrice) / product.mrp) * 100
  );

  const colors = product.colors || [
    "#000000",
    "#4B5E6A",
    "#3D3F75",
    "#7E8284",
    "#2E2E3A",
  ];

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
  };

  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/product-details/${product.slug}`)}
    >
      {/* Product Image */}
      <img
        src={`${IMAGE_URL}/${product?.images?.mainImage}`}
        className="card-img-top mx-auto d-block"
        alt={product.name}
        style={{ width: "100%", objectFit: "contain" }}
      />

      {/* Color Swatches */}
      {/* <div className="d-flex justify-content-start align-items-center mt-2 mb-2 p-10">
        {colors.map((color, index) => (
          <span
            key={index}
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              handleColorClick(index);
            }}
            className={`rounded-circle me-2`}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: color,
              border:
                selectedColorIndex === index
                  ? "2px solid black"
                  : "1px solid #ccc",
              boxShadow:
                selectedColorIndex === index ? "0 0 0 2px white" : "none",
              cursor: "pointer",
              display: "inline-block",
            }}
          ></span>
        ))}
      </div> */}

      {/* Product Info */}
      <div className="card-body p-10">
        <h6 className="card-title mb-1 fw-bold">{product.brandId.name}</h6>
        <p className="card-text text-muted mb-1" style={{ fontSize: "0.9rem" }}>
          {product.name || "Men's Slim Fit Mid Rise Jeans"}
        </p>

        {/* Ratings */}
        <div
          className="d-flex align-items-center mb-1"
          style={{ fontSize: "0.85rem" }}
        >
          <span className="text-warning me-1">★</span>
          <span className="me-1">4.0</span>
          <span className="text-muted me-1">•</span>
          <span className="text-primary">(11)</span>
        </div>

        {/* Price Section */}
        <div className="mb-1">
          <span className="fw-bold me-1">₹{product.salePrice}</span>
          <span className="text-muted text-decoration-line-through me-1">
            ₹{product.regularPrice}
          </span>
          <span className="text-success" style={{ fontSize: "0.9rem" }}>
            ({product.discountPercentage}% off)
          </span>
        </div>

        {/* Delivery */}
        <p className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
          FREE delivery <strong>Sun, 18 May</strong>
        </p>

        {/* Add to Cart Button */}
        <button
          className="btn btn-warning w-100 fw-semibold"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
