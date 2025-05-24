import React from "react";
import CategoryCard from "../common/categoryCard";

function SectionFourFiveSix({ homePage }) {
  const sectionFourData = homePage?.sectionFour || {title: "", productIds: [] };
  const sectionFiveData = homePage?.sectionFive || {title: "", productIds: [] };
  const sectionSixData = homePage?.sectionSix || {title: "", productIds: [] };

  const sections = [
    sectionFourData,
    sectionFiveData,
    sectionSixData
  ];

  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          {sections.map((section, index) =>
            <div className="col-md-4" key={index}>
              <div className="innerspace">
                <CategoryCard heading={section.title} products={section.productIds} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionFourFiveSix;
