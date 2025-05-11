import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../utils/api-config";

function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="bestcard"
      onClick={() => navigate(`/product-details/${product.slug}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`${IMAGE_URL}/${product?.images?.mainImage}`}
        alt={product.name} style={{ width: "150px", height: "150px" }}
      />
      <span>
        {product.name}
      </span>
      <h5>
        {product.salePrice}
      </h5>
    </div>
  );
}

export default Card;
