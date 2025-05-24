import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../utils/api-config";

function CategoryCard({ heading, products }) {
  const navigate = useNavigate();

  return (
    <div className="catcardSection">
      <div className="cardHead">
        <h5>
          {heading}
        </h5>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/product")}
        >
          ›
        </button>
      </div>
      <div className="row">
        {products &&
          products.map(product =>
            <div className="col-md-6" key={product._id}>
              <div
                className="productcard"
                onClick={() =>
                  navigate("/product", {
                    state: {
                      categoryId: product.categoryId
                    }
                  })}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`${IMAGE_URL}/${product.images.mainImage}`}
                  alt={product.name}
                />
                <span>
                  {product.name.slice(0, 18) + "..."}
                </span>
                <span className="text-success text-center">
                  {product.discountPercentage}% OFF
                </span>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default CategoryCard;
