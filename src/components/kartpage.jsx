import React, { useState } from "react";

const KartPage = () => {
  const [quantities, setQuantities] = useState({
    0: 1,
    1: 1,
  });

  const products = [
    {
      id: 0,
      image: "/assets/images/product/p4.png",
      title: "SDM 4 in1 Combo - Transparent Laptop Skin Stickers, S...",
      seller: "SDM.inovator",
      price: 402,
      originalPrice: 899,
      discount: "55% Off",
      offer: "1 coupon applied",
      delivery: "Delivery by Sun May 18 | ₹30",
    },
    {
      id: 1,
      image: "/assets/images/product/p2.png",
      title: "POCO C75 5G (Silver Stardust, 64 GB)",
      seller: "Flashtech Retail",
      price: 7699,
      originalPrice: 10999,
      discount: "30% Off",
      offer: "1 offer available",
      delivery: (
        <>
          Delivery in 2 days, Thu | <s>₹40</s>{" "}
          <span className="fw-bold text-success">Free</span>
        </>
      ),
    },
  ];

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  return (
    <section>
      <div className="cartSection">
        <div className="container my-4">
          <div className="row g-4">
            {/* LEFT SIDE */}
            <div className="col-lg-8">
              <div className="card p-3 mb-30">
                {products.map((product) => (
                  <>
                    <div className="d-flex" key={product.id}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "112px",
                          height: "112px",
                          objectFit: "contain",
                          marginRight:'1em !important'
                        }}
                        className="me-3"
                      />
                      <div className="flex-grow-1 mx-20">
                        <h6 className="mb-1">{product.title}</h6>
                        <small className="text-muted">
                          Seller: {product.seller}
                        </small>
                        <div className="d-flex align-items-center mt-2">
                          <span className="fw-bold fs-5 me-2 text-danger">
                            ₹{product.price}
                          </span>
                          <span className="text-muted text-decoration-line-through me-2">
                            ₹{product.originalPrice}
                          </span>
                          <span className="text-success me-2">
                            {product.discount}
                          </span>
                          <span className="text-success">{product.offer}</span>
                        </div>
                        <div className="text-muted small mt-1">
                          {product.delivery}
                        </div>

                        <div className="d-flex align-items-center mt-3 increasedecreaseBtn">
                          <button
                            className="btn btn-secondary btn-sm increa"
                            onClick={() => decrement(product.id)}
                          >
                            −
                          </button>
                          <span className="mx-3 count">
                            {quantities[product.id] || 1}
                          </span>
                          <button
                            className="btn btn-secondary btn-sm increa"
                            onClick={() => increment(product.id)}
                          >
                            +
                          </button>
                          {/* <button className="btn btn-primary btn-sm mx-20">
                            SAVE FOR LATER
                          </button> */}
                          <button className="btn btn-primary btn-sm text-danger mx-20">
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
                <div className="cards">
                  <div className="text-end mt-4">
                    <button className="btn btn-warning btn-lg px-20" style={{fontSize:'14px'}}>
                      PLACE ORDER
                    </button>
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
                    <span className="text-decoration-line-through text-muted me-1">
                      ₹70
                    </span>
                    ₹30
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
        </div>
      </div>
    </section>
  );
};

export default KartPage;
