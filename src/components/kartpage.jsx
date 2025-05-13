import React, { useState } from "react";

const KartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* LEFT SIDE */}
        <div className="col-lg-8">
          {/* Product 1 */}
          <div className="card p-3">
            <div className="d-flex">
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard-skin/u/b/l/transparent-keyboard-cover-for-15-6-inch-universal-laptop-keyboard-original-imagzwby2yujfqgp.jpeg?q=70"
                alt="combo"
                style={{ width: "112px", height: "112px", objectFit: "contain" }}
                className="me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">SDM 4 in1 Combo - Transparent Laptop Skin Stickers, S...</h6>
                <small className="text-muted">Seller: SDM.inovator</small>
                <div className="d-flex align-items-center mt-2">
                  <span className="fw-bold fs-5 me-2 text-danger">₹402</span>
                  <span className="text-muted text-decoration-line-through me-2">₹899</span>
                  <span className="text-success me-2">55% Off</span>
                  <span className="text-success">1 coupon applied</span>
                </div>
                <div className="text-muted small mt-1">Delivery by Sun May 18 | ₹30</div>

                <div className="d-flex align-items-center mt-3">
                  <button className="btn btn-outline-secondary btn-sm" onClick={decrement}>−</button>
                  <span className="mx-3">{quantity}</span>
                  <button className="btn btn-outline-secondary btn-sm" onClick={increment}>+</button>
                  <button className="btn btn-link btn-sm ms-4">SAVE FOR LATER</button>
                  <button className="btn btn-link btn-sm text-danger">REMOVE</button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="card mt-3 p-3">
            <div className="d-flex">
              <img
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/f/h/-original-imagy4hfrbg4hsry.jpeg?q=70"
                alt="POCO phone"
                style={{ width: "112px", height: "112px", objectFit: "contain" }}
                className="me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">POCO C75 5G (Silver Stardust, 64 GB)</h6>
                <small className="text-muted">Seller: Flashtech Retail</small>
                <div className="d-flex align-items-center mt-2">
                  <span className="fw-bold fs-5 me-2 text-danger">₹7,699</span>
                  <span className="text-muted text-decoration-line-through me-2">₹10,999</span>
                  <span className="text-success me-2">30% Off</span>
                  <span className="text-success">1 offer available</span>
                </div>
                <div className="text-muted small mt-1">
                  Delivery in 2 days, Thu | <span className="text-decoration-line-through">₹40</span>{" "}
                  <span className="fw-bold text-success">Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screen Protection */}
          <div className="card mt-3 p-3" style={{ backgroundColor: "#f1f3f6" }}>
            <h6 className="fw-bold">POCO Screen Protect 1 Year</h6>
            <div className="d-flex justify-content-between">
              <div style={{ maxWidth: "75%" }}>
                <div className="fw-semibold">POCO Screen Damage Protection</div>
                <div className="text-muted small mb-1">1 Year</div>
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-danger me-2">₹499</span>
                  <span className="text-muted text-decoration-line-through me-2">₹599</span>
                  <span className="text-success">16% off</span>
                </div>
                <small className="text-muted d-block mt-2">
                  This screen damage protection contract governs the registration and support
                  process for screen damages to POCO Devices sold by Authorized Sales Channels
                  of POCO in India in its original packaging.{" "}
                  <a href="#">Know More</a>
                </small>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-warning fw-bold">Add Item</button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
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
                <span className="text-decoration-line-through text-muted me-1">₹70</span>₹30
              </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total Amount</span>
              <span>₹8,160</span>
            </div>
            <p className="text-success mt-2 mb-0">
              You will save ₹3,738 on this order
            </p>
          </div>

          <div className="text-muted text-center small mt-2">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </div>
        </div>
      </div>

      {/* Place Order */}
      <div className="text-end mt-4">
        <button className="btn btn-warning btn-lg px-5">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default KartPage;
