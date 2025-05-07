import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import QuantityControl from "../helper/QuantityControl";
import { APPLY_DISCOUNT, removeFromCart } from "../actions/cartActions";
import { IoIosClose } from "react-icons/io";
import { showToast } from "./ToastifyNotification";
import { verifyCoupon } from "../api/couponAPI";
import { IMAGE_URL } from "../utils/api-config";

const CartSection = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const isAuthenticated = useSelector(state => state.auth?.isAuthenticated);
    const navigate = useNavigate();

    const [couponCode, setCouponCode] = useState(cart.couponCode || "");    
    const [discount, setDiscount] = useState(cart.discount || 0);
    const [isCouponApplied, setIsCouponApplied] = useState(cart.couponCode ? true : false);

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
                console.log(coupon)
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
                    payload: { discount: discount, couponCode: couponCode }
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
            navigate('/checkout');
        } else {
            showToast('error', 'Please login to continue');
            navigate('/sign-in');
        }
    };

    return cart.items?.length > 0 ? (
        <section className="cart py-0">
            <div className="container">
                <div className="row gy-4">
                    {/* Cart Table */}
                    <div className="col-xl-9 col-lg-8">
                        <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                            <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                                <table className="table style-three">
                                    <thead>
                                        <tr>
                                            <th className="h6 mb-0 text-lg fw-bold">Delete</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Product Name</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Price</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Quantity</th>
                                            <th className="h6 mb-0 text-lg fw-bold">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.items?.map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                                                        onClick={() => dispatch(removeFromCart(item.productId._id, item.variationId))}
                                                    >
                                                        <IoIosClose className="text-2xl d-flex" />
                                                        Remove
                                                    </button>
                                                </td>
                                                <td style={{ whiteSpace: "nowrap" }}>
                                                    <div className="table-product d-flex align-items-center gap-24">
                                                        <Link
                                                            to={`/product-details/${item.productId.slug}`}
                                                            className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                                                        >
                                                            <img src={`${IMAGE_URL}/${item.variationId.image}`} alt={item.name} />
                                                        </Link>
                                                        <div className="table-product__content text-start">
                                                            <h6 className="title text-lg fw-semibold mb-8">
                                                                <Link to={`/product-details/${item.slug}`} className="link text-line-2">
                                                                    {item.name}
                                                                </Link>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="text-lg h6 mb-0 fw-semibold">₹{item.variationId.salePrice}</span></td>
                                                <td><QuantityControl productId={item.productId._id} variation={item.variationId} initialQuantity={parseInt(item.quantity)} cart_item_id={item.id} /></td>
                                                <td><span className="text-lg h6 mb-0 fw-semibold">₹{item.variationId.salePrice * item.quantity}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Coupon Code Section */}
                        <div className="coupon-box border border-gray-100 rounded-8 px-40 py-20 mt-20">
                            <h6 className="text-lg fw-semibold mb-12">Apply Coupon</h6>
                            <div className="d-flex gap-12">
                                <input
                                    type="text"
                                    className="form-control rounded-8"
                                    placeholder="Enter Coupon Code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                    disabled={isCouponApplied}
                                    style={{ width: "50%" }}
                                />
                                <button
                                    className="btn btn-main rounded-8"
                                    onClick={applyCoupon}
                                    disabled={isCouponApplied}
                                    style={{ width: "50%" }}
                                >
                                    Apply
                                </button>
                            </div>
                            {isCouponApplied && (
                                <p className="text-success mt-2">Coupon Applied! You saved ₹{discount}.</p>
                            )}
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="col-xl-3 col-lg-4">
                        <div className="cart-sidebar border border-gray-100 rounded-8 px-10 py-40">
                            <h6 className="text-xl mb-32">Cart Totals</h6>
                            <div className="bg-color-three rounded-8 p-24">
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Subtotal</span>
                                    <span className="text-gray-900 fw-semibold">₹{subtotal}</span>
                                </div>
                                {isCouponApplied && (
                                    <div className="mb-32 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two">Discount</span>
                                        <span className="text-gray-900 fw-semibold text-danger">-₹{discount}</span>
                                    </div>
                                )}
                                <div className="mb-32 flex-between gap-8">
                                    <span className="text-gray-900 font-heading-two">Estimated Tax</span>
                                    <span className="text-gray-900 fw-semibold">₹{tax}</span>
                                </div>
                            </div>
                            <div className="bg-color-three rounded-8 p-24 mt-24">
                                <div className="flex-between gap-8">
                                    <span className="text-gray-900 text-xl fw-semibold">Total</span>
                                    <span className="text-gray-900 text-xl fw-semibold">₹{total}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="btn btn-main mt-40 py-18 w-100 rounded-8"
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <section className="empty-cart text-center py-40">
            <h3>Your cart is empty!</h3>
            <Link to="/" className="btn btn-main px-24 py-12 rounded-8">Continue Shopping</Link>
        </section>
    );
};

export default CartSection;
