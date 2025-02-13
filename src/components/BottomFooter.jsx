import React from "react";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className="bottom-footer  py-4">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
          <p
            className="bottom-footer__text text-white"
            style={{ fontSize: "12px" }}
          >
            ZOZO Kart © 2025. All Rights Reserved Developed by{" "}
            <Link className="text-white" to="">
              <b>AZSM Enterprises</b>
            </Link>
          </p>
          <div className="flex-align gap-8 flex-wrap text-white">
            <span className=" text-sm text-white">We Are Acepting</span>
            <img src="assets/images/thumbs/payment-method.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
