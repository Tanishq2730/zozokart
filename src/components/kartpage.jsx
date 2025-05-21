import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyCoupon } from "../api/couponAPI";
import { showToast } from "./ToastifyNotification";
import { APPLY_DISCOUNT, removeFromCart } from "../actions/cartActions";
import { IMAGE_URL } from "../utils/api-config";
import QuantityControl from "../helper/QuantityControl";

const KartPage = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState(cart.couponCode || "");
  const [discount, setDiscount] = useState(cart.discount || 0);
  const [isCouponApplied, setIsCouponApplied] = useState(
    cart.couponCode ? true : false
  );

  const subtotal = cart.items?.reduce(
    (total, item) => total + item.variationId.salePrice * item.quantity,
    0
  );
  const tax = 0; // Example static tax
  const total = subtotal - discount + tax;

  const applyCoupon = async () => {
    if (!couponCode) {
      showToast("error", "Please enter a coupon code");
      return;
    }

    try {
      const response = await verifyCoupon({ couponCode: couponCode });

      if (response.success) {
        const coupon = response.data;
        console.log(coupon);
        const { discountType, discountAmount } = coupon;

        // if (min_purchase !== null && subtotal < min_purchase) {
        //     showToast("error", `Minimum purchase of ₹${min_purchase} required.`);
        //     return;
        // }
        let discount = 0;
        if (discountType === "Fixed") {
          discount = discountAmount;
        } else if (discountType === "Percentage") {
          discount = (subtotal * discountAmount) / 100;
          // if (max_discount !== null) {
          //     discountAmount = Math.min(discountAmount, max_discount);
          // }
        }

        discount = Math.min(discount, subtotal);

        showToast("success", `Coupon applied! You saved ₹${discount}.`);
        setDiscount(discount);
        setIsCouponApplied(true);

        dispatch({
          type: APPLY_DISCOUNT,
          payload: { discount: discount, couponCode: couponCode },
        });
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      showToast("error", "Failed to apply coupon. Please try again.");
    }
  };

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/checkout");
    } else {
      showToast("error", "Please login to continue");
      navigate("/sign-in");
    }
  };

  const [quantities, setQuantities] = useState({
    0: 1,
    1: 1,
  });

  const products = [
    {
      id: 0,
      image: "assets/images/product/p4.png",
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
      image: "assets/images/product/p2.png",
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

  return cart.items?.length > 0 ? (
    <section>
      <div className="cartSection">
        <div className="container my-4">
          <div className="row g-4">
            {/* LEFT SIDE */}
            <div className="col-lg-8">
              <div className="card p-3 mb-30">
                {cart.items?.map((item) => (
                  <>
                    <div className="d-flex" key={item.id}>
                      <img
                        src={`${IMAGE_URL}/${item.variationId.image}`}
                        alt={item.title}
                        style={{
                          width: "112px",
                          height: "112px",
                          objectFit: "contain",
                          marginRight:'1em !important'
                        }}
                        className="me-3"
                      />
                      <div className="flex-grow-1 mx-20">
                        <h6 className="mb-1">{item.productId.name}</h6>
                        <small className="text-muted">
                          Seller: {item?.vendorId?.name}
                        </small>
                        <div className="d-flex align-items-center mt-2">
                          <span className="fw-bold fs-5 me-2 text-danger">
                            ₹{item.salePrice}
                          </span>
                          <span className="text-muted text-decoration-line-through me-2">
                            ₹{item.regularPrice}
                          </span>
                          <span className="text-success me-2">
                            {item.discountAmount}
                          </span>
                          <span className="text-success">{item.offer}</span>
                        </div>
                        <div className="text-muted small mt-1">
                          {item.delivery}
                        </div>

                        <div className="d-flex align-items-center mt-3 increasedecreaseBtn">
                          {/* <button
                            className="btn btn-secondary btn-sm increa"
                            onClick={() => decrement(item.id)}
                          >
                            −
                          </button>
                          <span className="mx-3 count">
                            {quantities[item.id] || 1}
                          </span>
                          <button
                            className="btn btn-secondary btn-sm increa"
                            onClick={() => increment(item.id)}
                          >
                            +
                          </button> */}
                          <QuantityControl
                              productId={item.productId._id}
                              variation={item.variationId}
                              initialQuantity={parseInt(item.quantity)}
                              cart_item_id={item.id}
                            />
                          {/* <button className="btn btn-primary btn-sm mx-20">
                            SAVE FOR LATER
                          </button> */}
                          <button className="btn btn-primary btn-sm text-danger mx-20"
                          onClick={() =>
                                    dispatch(
                                      removeFromCart(
                                        item.productId._id,
                                        item.variationId
                                      )
                                    )
                                  }
                            >
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
                    <button className="btn btn-warning btn-lg px-20" style={{fontSize:'14px'}} onClick={handleCheckout}>
                      Proceed to checkout
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
                  <span>₹{subtotal}</span>
                </div>
                {isCouponApplied && (
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                 )}
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
                  <span>₹{total}</span>
                </div>
                <p className="text-success mt-2 mb-0">
                  You will save ₹{discount} on this order
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
  ): (
      <section className="empty-cart text-center py-40">
        <h3>Your cart is empty!</h3>
        <Link to="/" className="btn btn-main px-24 py-12 rounded-8">
          Continue Shopping
        </Link>
      </section>
    );
};

export default KartPage;
