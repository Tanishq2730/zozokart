import React from "react";

const KartPage = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* LEFT SIDE: CART ITEMS */}
        <div className="col-lg-8">
          {/* PRODUCT 1 */}
          <div className="card mb-3 p-3">
            <div className="d-flex">
              <img
                src="/assets/images/product/p4.png"
                alt="combo"
                className="me-3"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <div className="flex-grow-1">
                <h6>SDM 4 in1 Combo - Transparent Laptop Skin Stickers...</h6>
                <small className="text-muted">Seller: SDM.inovator</small>
                <div className="d-flex align-items-center mt-2">
                  <h5 className="text-danger me-2">₹402</h5>
                  <small className="text-muted text-decoration-line-through me-2">
                    ₹899
                  </small>
                  <small className="text-success me-2">55% Off</small>
                  <small className="text-success">1 coupon applied</small>
                </div>
                <div className="text-muted small mt-1">
                  Delivery by Sun May 18 | ₹30
                </div>

                <div className="d-flex align-items-center mt-3">
                  <button className="btn btn-outline-secondary btn-sm">
                    −
                  </button>
                  <span className="mx-2">1</span>
                  <button className="btn btn-outline-secondary btn-sm">
                    +
                  </button>
                  <button className="btn btn-link btn-sm ms-4">
                    SAVE FOR LATER
                  </button>
                  <button className="btn btn-link btn-sm text-danger">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="card mb-3 p-3">
            <div className="d-flex">
              <img
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/f/h/-original-imagy4hfrbg4hsry.jpeg?q=70"
                alt="phone"
                className="me-3"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <div className="flex-grow-1">
                <h6>POCO C75 5G (Silver Stardust, 64 GB)</h6>
                <small className="text-muted">Seller: Flashtech Retail</small>
                <div className="d-flex align-items-center mt-2">
                  <h5 className="text-danger me-2">₹7,699</h5>
                  <small className="text-muted text-decoration-line-through me-2">
                    ₹10,999
                  </small>
                  <small className="text-success me-2">30% Off</small>
                  <small className="text-success">1 offer available</small>
                </div>
                <div className="text-muted small mt-1">
                  Delivery in 2 days, Thu |{" "}
                  <span className="text-decoration-line-through">₹40</span>{" "}
                  <strong className="text-success">Free</strong>
                </div>
              </div>
            </div>
          </div>

          {/* PROTECTION PLAN */}
          <div className="card mb-3 p-3" style={{ backgroundColor: "#f1f3f6" }}>
            <h6 className="fw-bold mb-2">POCO Screen Protect 1 Year</h6>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-1 fw-semibold">
                  POCO Screen Damage Protection
                </p>
                <small className="text-muted">1 Year</small>
                <div className="d-flex align-items-center mt-1">
                  <h6 className="text-danger me-2">₹499</h6>
                  <small className="text-muted text-decoration-line-through me-2">
                    ₹599
                  </small>
                  <small className="text-success">16% off</small>
                </div>
                <small className="text-muted d-block mt-2">
                  This screen damage protection contract governs the
                  registration and support process for screen damages to POCO
                  Devices sold by Authorized Sales Channels of POCO in India in
                  its original packaging. <a href="#">Know More</a>
                </small>
              </div>
              <button className="btn btn-warning">Add Item</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: PRICE DETAILS */}
        <div className="col-lg-4">
          <div className="card p-3">
            <h6 className="fw-bold mb-3">PRICE DETAILS</h6>
            <div className="d-flex justify-content-between mb-2">
              <span>Price (2 items)</span>
              <span>₹11,898</span>
            </div>
            <div className="d-flex justify-content-between mb-2 text-success">
              <span>Discount</span>
              <span>− ₹3,782</span>
            </div>
            <div className="d-flex justify-content-between mb-2 text-success">
              <span>Coupons for you</span>
              <span>− ₹15</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Secured Packaging Fee</span>
              <span>₹29</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Delivery Charges</span>
              <span>
                <span className="text-muted text-decoration-line-through">
                  ₹70
                </span>{" "}
                ₹30
              </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total Amount</span>
              <span>₹8,160</span>
            </div>
            <p className="text-success mt-2">
              You will save ₹3,738 on this order
            </p>
          </div>
          <div className="text-muted small mt-2 text-center">
            <i className="bi bi-shield-check"></i> Safe and Secure Payments.
            Easy returns. 100% Authentic products.
          </div>
        </div>
      </div>

      {/* PLACE ORDER BUTTON */}
      <div className="text-end mt-4">
        <button className="btn btn-warning btn-lg px-5">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default KartPage;
