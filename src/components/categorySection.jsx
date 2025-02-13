import React from "react";
import CategoryCard from "./common/categoryCard";

function CategorySection() {
  const categories = [
    "Wedding & Gifting Specials",
    "Festive Collection",
    "Casual Wear",
  ];

  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-4" key={index}>
              <div className="innerspace">
                <CategoryCard heading={category} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
