import React from "react";
import CategoryCard from "./common/categoryCard";

function Adscatgory() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <CategoryCard heading="Wedding & Gifting Specials" />
        </div>
        <div className="col-md-8">
          <div className="adsbanner">
            <img src="/zozo_cart_website/assets/images/ads/adsbanner.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adscatgory;
