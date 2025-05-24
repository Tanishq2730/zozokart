import React from "react";
import CategoryCard from "../common/categoryCard";
import { IMAGE_URL } from "../../utils/api-config";

function SectionThree({ homePage }) {
  const sectionThreeData = homePage?.sectionThree || {title: "", productIds: [] };
  console.log(sectionThreeData)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <CategoryCard heading={sectionThreeData?.title} products={sectionThreeData.productIds} />
        </div>
        <div className="col-md-8">
          <div className="adsbanner">
            <img src={`${IMAGE_URL}/${sectionThreeData?.adsImage}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
