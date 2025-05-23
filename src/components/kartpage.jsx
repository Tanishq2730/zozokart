import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyCoupon } from "../api/couponAPI";
import { showToast } from "./ToastifyNotification";
import { APPLY_DISCOUNT, removeFromCart } from "../actions/cartActions";
import { IMAGE_URL } from "../utils/api-config";
import QuantityControl from "../helper/QuantityControl";
import "../styles/extraa.scss";

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
  const tax = 0;
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
        const { discountType, discountAmount } = coupon;
        let discount = 0;
        
        if (discountType === "Fixed") {
          discount = discountAmount;
        } else if (discountType === "Percentage") {
          discount = (subtotal * discountAmount) / 100;
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

  return cart.items?.length > 0 ? (
    <section className="cartSection">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card">
              {cart.items?.map((item) => (
                <div className="product-card" key={item.id}>
                  <div className="d-flex">
                    <img
                      src={`${IMAGE_URL}/${item.variationId.image}`}
                      alt={item.title}
                      className="product-image"
                    />
                    <div className="product-details">
                      <h6 className="product-title">{item.productId.name}</h6>
                      <div className="seller-name">
                        Seller: {item?.vendorId?.name}
                      </div>
                      <div className="price-container">
                        <span className="current-price">
                          ₹{item.variationId.salePrice}
                        </span>
                        <span className="original-price">
                          ₹{item.variationId.regularPrice}
                        </span>
                        <span className="discount">
                          {Math.round(
                            ((item.variationId.regularPrice - item.variationId.salePrice) /
                              item.variationId.regularPrice) *
                              100
                          )}
                          % off
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="quantity-control">
                          <QuantityControl
                            productId={item.productId._id}
                            variation={item.variationId}
                            initialQuantity={parseInt(item.quantity)}
                            cart_item_id={item.id}
                          />
                        </div>
                        <div className="action-buttons">
                          <button
                            onClick={() =>
                              dispatch(
                                removeFromCart(item.productId._id, item.variationId)
                              )
                            }
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-3">
                <button className="checkout-button" onClick={handleCheckout}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="price-details p-3">
                <h6 className="price-header">PRICE DETAILS</h6>
                <div className="price-row">
                  <span>Price ({cart.items.length} items)</span>
                  <span>₹{subtotal}</span>
                </div>
                {isCouponApplied && (
                  <div className="price-row">
                    <span>Discount</span>
                    <span className="text-success">-₹{discount}</span>
                  </div>
                )}
                <div className="price-row">
                  <span>Delivery Charges</span>
                  <span className="text-success">FREE</span>
                </div>
                <div className="price-row total">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
                {discount > 0 && (
                  <div className="savings">
                    You will save ₹{discount} on this order
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="empty-cart">
      <h3>Your cart is empty!</h3>
      <Link to="/" className="btn btn-primary">
        Continue Shopping
      </Link>
    </section>
  );
};

export default KartPage;
