import React from "react";
import CategoryCard from "../common/categoryCard";
import { IMAGE_URL } from "../../utils/api-config";

function SectionEight({ homePage }) {
  const sectionEightData = homePage?.sectionEight || {title: "", productIds: [] };
  console.log(sectionEightData)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <CategoryCard heading={sectionEightData?.title} products={sectionEightData.productIds} />
        </div>
        <div className="col-md-8">
          <div className="adsbanner">
            <img src={`${IMAGE_URL}/${sectionEightData?.adsImage}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
