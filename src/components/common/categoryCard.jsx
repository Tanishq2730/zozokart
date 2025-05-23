import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ heading }) {
  const navigate = useNavigate();

  const categories = [
    {
      img: "/zozo_cart_website/assets/images/product/p6.png",
      name: "Topwear",
      offer: "Special offer",
      path: "/product-details"
    },
    {
      img: "/zozo_cart_website/assets/images/product/p2.png",
      name: "Bottomwear",
      offer: "Limited Deal",
      path: "/product-details"
    },
    {
      img: "/zozo_cart_website/assets/images/product/p4.png",
      name: "Footwear",
      offer: "Exclusive Discount",
      path: "/product-details"
    },
    {
      img: "/zozo_cart_website/assets/images/product/p1.png",
      name: "Accessories",
      offer: "Hot Sale",
      path: "/product-details"
    }
  ];

  return (
    <div className="catcardSection">
      <div className="cardHead">
        <h5>
          {heading}
        </h5>
        <button className="btn btn-primary">›</button>
      </div>
      <div className="row">
        {categories.map((category, index) =>
          <div className="col-md-6" key={index}>
            <div
              className="categorycard"
              onClick={() => navigate(category.path)}
              style={{ cursor: "pointer" }}
            >
              <img src={category.img} alt={category.name} />
              <span>
                {category.name}
              </span>
              <h5>
                {category.offer}
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryCard;
