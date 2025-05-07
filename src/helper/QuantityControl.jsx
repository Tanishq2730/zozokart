import React from "react";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../actions/cartActions";

const QuantityControl = ({
  productId,
  variation,
  initialQuantity = 1,
  cart_item_id
}) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    const newQuantity = initialQuantity + 1;
    dispatch(
      updateCartQuantity(productId, variation, newQuantity, cart_item_id)
    );
  };

  const decrementQuantity = () => {
    if (initialQuantity > 1) {
      const newQuantity = initialQuantity - 1;
      dispatch(
        updateCartQuantity(productId, variation, newQuantity, cart_item_id)
      );
    }
  };

  return (
    <div className="d-flex rounded-4 overflow-hidden">
      <button
        type="button"
        onClick={decrementQuantity}
        className="quantity__minus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
      >
        <i className="ph ph-minus" />
      </button>
      <input
        type="number"
        className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-4"
        value={initialQuantity}
        min={1}
        readOnly
      />
      <button
        type="button"
        onClick={incrementQuantity}
        className="quantity__plus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
      >
        <i className="ph ph-plus" />
      </button>
    </div>
  );
};

export default QuantityControl;
