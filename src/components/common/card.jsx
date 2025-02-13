import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="bestcard"
      onClick={() => navigate(`/product-details`)}
      style={{ cursor: "pointer" }}
    >
      <img src={product.image} alt={product.name} />
      <span>{product.name}</span>
      <h5>{product.price}</h5>
    </div>
  );
}

export default Card;
