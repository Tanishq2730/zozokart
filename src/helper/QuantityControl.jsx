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
    <div className="d-flex align-items-center mt-3 increasedecreaseBtn">
      <button
        type="button"
        onClick={decrementQuantity}
        className="btn btn-secondary btn-sm increa"
      >
        <i className="ph ph-minus" />
      </button>
      <input
        type="number"
        className="mx-3 count w-25"
        value={initialQuantity}
        min={1}
        readOnly
      />
      <button
        type="button"
        onClick={incrementQuantity}
        className="btn btn-secondary btn-sm increa"
      >
        <i className="ph ph-plus" />
      </button>
    </div>
  );
};

export default QuantityControl;
