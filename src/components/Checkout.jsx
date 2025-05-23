import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { placeOrder } from "../api/orderAPI";
import {
  getUserAddresses,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from "../api/addressAPI";
import { showToast } from "./ToastifyNotification";
// import { ShoppingCart } from "@phosphor-icons/react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { createRazorpayOrder } from "../api/paymentAPI";
import { CLEAR_CART } from "../actions/cartActions";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("paynow");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(null); // 'add' or 'edit'
  const [currentAddressToEdit, setCurrentAddressToEdit] = useState(null);
  const [modalFormData, setModalFormData] = useState({
    fullName: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    pinCode: "",
    state: "",
    city: "",
    houseNumber: "",
    area: "",
    nearByFamous: "",
    default: false,
    addressType: "Home",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state?.cart.cart);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const user = useSelector((state) => state.auth?.user);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchAddresses = async () => {
      if (isAuthenticated && user?._id) {
        try {
          const response = await getUserAddresses();
          if (response?.success) {
            setAddresses(response.data);
            const defaultAddress = response.data.find(
              (addr) => addr.defaultAddress
            );
            if (defaultAddress) {
              setSelectedAddressId(defaultAddress._id);
            } else if (response.data.length > 0) {
              setSelectedAddressId(response.data[0]._id);
            }
          } else {
            showToast(
              "error",
              response?.message || "Failed to fetch addresses."
            );
          }
        } catch (error) {
          showToast("error", "Error fetching addresses.");
        }
      }
    };

    fetchAddresses();
  }, [isAuthenticated, user?._id]);

  if (!cart?.items) {
    return <p className="text-center py-40">Your cart is empty.</p>;
  }

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.id);
  };

  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const openAddAddressModal = () => {
    setModalMode("add");
    setModalFormData({
      // Initialize form for adding
      fullName: "",
      phoneNumber: "",
      alternatePhoneNumber: "",
      pinCode: "",
      state: "",
      city: "",
      houseNumber: "",
      area: "",
      nearByFamous: "",
      defaultAddress: false,
      addressType: "Home",
    });
    setCurrentAddressToEdit(null);
    setIsModalOpen(true);
  };

  const openEditAddressModal = (address) => {
    setModalMode("edit");
    setModalFormData({ ...address });
    setCurrentAddressToEdit(address);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMode(null);
    setCurrentAddressToEdit(null);
    setModalFormData({
      // Reset form data on close
      fullName: "",
      phoneNumber: "",
      alternatePhoneNumber: "",
      pinCode: "",
      state: "",
      city: "",
      houseNumber: "",
      area: "",
      nearByFamous: "",
      defaultAddress: false,
      addressType: "Home",
    });
  };

  const handleModalInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setModalFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveAddressModal = async () => {
    if (!user?._id) {
      showToast("error", "User not authenticated.");
      return;
    }

    try {
      let response;
      if (modalMode === "add") {
        response = await addUserAddress(modalFormData);
        if (response.success) {
          showToast("success", "New address added successfully.");
          setAddresses([...addresses, response.data]);
          if (response.data.defaultAddress) {
            setSelectedAddressId(response.data._id);
            setAddresses((prevAddresses) =>
              prevAddresses.map((addr) =>
                addr._id === response.data._id
                  ? { ...addr, defaultAddress: true }
                  : { ...addr, default: false }
              )
            );
          } else if (!selectedAddressId && addresses.length === 0) {
            setSelectedAddressId(response.data._id);
          }
          closeModal();
        } else {
          showToast("error", response?.message || "Failed to add new address.");
        }
      } else if (modalMode === "edit" && currentAddressToEdit?._id) {
        response = await updateUserAddress(
          currentAddressToEdit._id,
          modalFormData
        );
        if (response.success) {
          showToast("success", "Address updated successfully.");
          setAddresses((prevAddresses) =>
            prevAddresses.map((addr) =>
              addr._id === currentAddressToEdit._id ? response.data : addr
            )
          );
          if (response.data.defaultAddress) {
            setSelectedAddressId(response.data._id);
            setAddresses((prevAddresses) =>
              prevAddresses.map((addr) =>
                addr._id === response.data._id
                  ? { ...addr, defaultAddress: true }
                  : { ...addr, defaultAddress: false }
              )
            );
          }
          closeModal();
        } else {
          showToast("error", response?.message || "Failed to update address.");
        }
      }
    } catch (error) {
      showToast(
        "error",
        `Error ${modalMode === "add" ? "adding" : "updating"} address.`
      );
    }
  };

  const handleDeleteAddress = async (addressId) => {
    if (!user?._id || !addressId) {
      showToast("error", "Invalid request to delete address.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this address?")) {
      try {
        const response = await deleteUserAddress(addressId);
        if (response?.success) {
          showToast("success", "Address deleted successfully.");
          setAddresses((prevAddresses) =>
            prevAddresses.filter((addr) => addr._id !== addressId)
          );
          if (selectedAddressId === addressId) {
            setSelectedAddressId(
              addresses.length > 1 ? addresses[0]._id : null
            );
          }
        } else {
          showToast("error", response?.message || "Failed to delete address.");
        }
      } catch (error) {
        showToast("error", "Error deleting address.");
      }
    }
  };

  const handlePlaceOrderNow = async () => {
    if (!selectedAddressId) {
      showToast("error", "Please select a delivery address.");
      return;
    }

    try {
      const response = await placeOrder({
        addressId: selectedAddressId,
        paymentId: "",
        orderId: "",
        paymentSignature: "",
        paymentMethod: "COD",
      });
      console.log(response);

      if (response?.success) {
        showToast("success", response.message);
        dispatch({ type: CLEAR_CART });
        navigate("/order-success"); // Redirect upon successful order
      } else {
        showToast("error", response.message || "Failed to place order.");
      }
    } catch (error) {
      showToast("error", "Error placing order.");
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (
        document.querySelector(
          'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
        )
      ) {
        resolve(true); // Already loaded
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const handleInitiatePayment = async () => {
    if (selectedPayment === "paynow") {
      if (!selectedAddressId) {
        showToast("warning", "Please select a delivery address.");
        return;
      }

      const razorpayLoaded = await loadRazorpayScript();
      if (!razorpayLoaded) {
        showToast("error", "Failed to load Razorpay SDK.");
        return;
      }
      dispatch({ type: "loader", loader: true });
      try {
        const orderResponse = await createRazorpayOrder({
          amount: cart.total * 100,
        });

        if (!orderResponse.success) {
          const errorData = orderResponse.message;
          showToast("error", errorData || "Failed to create payment order.");
          return;
        } else {
          dispatch({ type: "loader", loader: false });
        }

        const orderData = orderResponse.data;

        const options = {
          key: "rzp_test_sbbCHuQzenmT45", // Replace with your Razorpay Key ID
          amount: orderData.amount,
          currency: "INR",
          order_id: orderData.id,
          name: "ZozoKart",
          description: "Payment for your order",
          image: "assets/images/logo/logo.png", // Replace with your logo URL
          handler: async (response) => {
            if (response?.razorpay_payment_id) {
              // Payment successful, now place the order
              dispatch({ type: "loader", loader: true });

              const placeOrderResponse = await placeOrder({
                addressId: selectedAddressId,
                paymentId: response.razorpay_payment_id,
                orderId: orderData.id,
                paymentSignature: response.razorpay_signature,
                paymentMethod: "Razorpay",
              });

              if (placeOrderResponse?.success) {
                showToast("success", placeOrderResponse.message);
                dispatch({ type: CLEAR_CART });
                navigate("/order-success"); // Redirect to order confirmation or dashboard
              } else {
                showToast(
                  "error",
                  placeOrderResponse?.message ||
                    "Failed to place order after successful payment."
                );
              }
              dispatch({ type: "loader", loader: false });
            } else {
              showToast("error", "Payment failed or was cancelled.");
              dispatch({ type: "loader", loader: false });
            }
          },
          prefill: {
            name: user?.name || "",
            email: user?.email || "",
            contact:
              addresses.find((addr) => addr._id === selectedAddressId)
                ?.phoneNumber || "",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.error("Error initiating payment:", error);
        showToast("error", "Failed to initiate payment.");
      } finally {
        dispatch({ type: "loader", loader: false });
      }
    } else {
      handlePlaceOrderNow(); // For other payment methods
    }
  };

  return (
    <section className="checkout py-20">
      <div className="container">
        {/* Reactstrap Modal */}
        <Modal
          size="lg"
          isOpen={isModalOpen}
          toggle={closeModal}
          className="address-modal"
        >
          <ModalHeader toggle={closeModal}>
            {modalMode === "add"
              ? "Add New Delivery Address"
              : "Edit Delivery Address"}
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row className="gy-3">
                <Col sm={6}>
                  <FormGroup>
                    <Label for="fullName">Full Name</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Full Name"
                      name="fullName"
                      value={modalFormData.fullName}
                      onChange={handleModalInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={modalFormData.phoneNumber}
                      onChange={handleModalInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <Label for="alternatePhoneNumber">
                      Alternate Phone Number (Optional)
                    </Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Alternate Phone Number (Optional)"
                      name="alternatePhoneNumber"
                      value={modalFormData.alternatePhoneNumber}
                      onChange={handleModalInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="pinCode">Pin Code</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Pin Code"
                      name="pinCode"
                      value={modalFormData.pinCode}
                      onChange={handleModalInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="State"
                      name="state"
                      value={modalFormData.state}
                      onChange={handleModalInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="City"
                      name="city"
                      value={modalFormData.city}
                      onChange={handleModalInputChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6} xs={12}>
                  <FormGroup>
                    <Label for="houseNumber">House Number (Optional)</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="House Number (Optional)"
                      name="houseNumber"
                      value={modalFormData.houseNumber}
                      onChange={handleModalInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <Label for="area">Area (Optional)</Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Area (Optional)"
                      name="area"
                      value={modalFormData.area}
                      onChange={handleModalInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <Label for="nearByFamous">
                      Nearby Famous Place (Optional)
                    </Label>
                    <Input
                      type="text"
                      className="common-input border-gray-100"
                      placeholder="Nearby Famous Place (Optional)"
                      name="nearByFamous"
                      value={modalFormData.nearByFamous}
                      onChange={handleModalInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup className="form-check common-check">
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="isDefaultModal"
                      name="defaultAddress"
                      checked={modalFormData.defaultAddress}
                      onChange={handleModalInputChange}
                    />
                    <Label
                      className="form-check-label fw-normal text-neutral-600"
                      htmlFor="isDefaultModal"
                    >
                      Set as default address
                    </Label>
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup className="form-check common-check">
                    <Input
                      type="radio"
                      className="form-check-input"
                      id="addressTypeHomeModal"
                      name="addressType"
                      value="Home"
                      checked={modalFormData.addressType === "Home"}
                      onChange={handleModalInputChange}
                    />
                    <Label
                      className="form-check-label fw-normal text-neutral-600 me-3"
                      htmlFor="addressTypeHomeModal"
                    >
                      Home
                    </Label>
                    <Input
                      type="radio"
                      className="form-check-input"
                      id="addressTypeWorkModal"
                      name="addressType"
                      value="Work"
                      checked={modalFormData.addressType === "Work"}
                      onChange={handleModalInputChange}
                    />
                    <Label
                      className="form-check-label fw-normal text-neutral-600"
                      htmlFor="addressTypeWorkModal"
                    >
                      Work
                    </Label>
                  </FormGroup>
                </Col>
                <Col xs={12} className="mt-3">
                  <Button
                    color="primary"
                    className="rounded-pill me-2"
                    onClick={handleSaveAddressModal}
                  >
                    {modalMode === "add" ? "Add Address" : "Save Changes"}
                  </Button>
                  <Button
                    color="secondary"
                    className="rounded-pill"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>

        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="mb-40" style={{backgroundColor:"#fff",padding:'20px'}}>
              <h6 className="text-lg mb-24">Select Delivery Address</h6>
              {addresses.length > 0 ? (
                addresses.map((address) => (
                  <div
                    key={address._id}
                    className={`border border-gray-200 rounded-8 p-24 mb-16 ${
                      selectedAddressId === address._id ? "border-main-600" : ""
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-12">
                      <div className="form-check common-check common-radio">
                        <Input
                          className="form-check-input"
                          type="radio"
                          name="deliveryAddress"
                          id={`address-${address._id}`}
                          value={address._id}
                          checked={selectedAddressId === address._id}
                          onChange={() => handleAddressSelect(address._id)}
                        />
                        <Label
                          className="form-check-label fw-semibold text-gray-900"
                          htmlFor={`address-${address._id}`}
                        >
                          {address.fullName} ({address.addressType}){" "}
                          {address.defaultAddress && (
                            <span className="text-sm text-main-600">
                              (Default)
                            </span>
                          )}
                        </Label>
                      </div>
                      <div>
                        <Button
                          color="primary"
                          size="sm"
                          className="me-1"
                          onClick={() => openEditAddressModal(address)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          className="text-danger"
                          onClick={() => handleDeleteAddress(address._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-8">
                      {address.houseNumber && `${address.houseNumber}, `}
                      {address.area},{" "}
                      {address.nearByFamous && `Near ${address.nearByFamous}, `}
                      {address.city}, {address.state} - {address.pinCode}
                    </p>
                    <p className="text-gray-700">
                      Phone: {address.phoneNumber}
                      {address.alternatePhoneNumber &&
                        `, Alt: ${address.alternatePhoneNumber}`}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No delivery addresses found. Please add a new one.
                </p>
              )}
              <Button
                color="secondary"
                className="rounded-pill mt-16"
                onClick={openAddAddressModal}
              >
                Add New Address
              </Button>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
  <div className="checkout-sidebar" style={{ backgroundColor: "#fff", padding: "20px" }}>
    <div className="bg-color-three rounded-8 p-24 text-center">
      <span className="text-gray-900 text-xl fw-semibold">Your Orders</span>
    </div>

    <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
      <div className="d-flex justify-content-between align-items-center mb-32 pb-32 border-bottom border-gray-100 gap-8">
        <span className="text-gray-900 fw-medium text-xl font-heading-two">Product</span>
        <span className="text-gray-900 fw-medium text-xl font-heading-two">Subtotal</span>
      </div>

      {cart.items?.length > 0 ? (
        cart.items.map((item) => {
          const productName = item.productId?.name || "Unnamed Product";
          const quantity = item.quantity;
          const price = item.salePrice ?? item.variationId?.salePrice ?? 0;
          const subtotal = quantity * price;

          return (
            <div
              key={`${item.productId?._id}-${item.variationId?._id || "no-var"}`}
              className="d-flex justify-content-between gap-24 mb-32"
            >
              <div className="d-flex align-items-center gap-12">
                <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                  {productName}
                </span>
                <span className="text-gray-900 fw-normal text-md font-heading-two">
                  <i className="ph-bold ph-x" />
                </span>
                <span className="text-gray-900 fw-semibold text-md font-heading-two">
                  {quantity}
                </span>
              </div>
              <span className="text-gray-900 fw-bold text-md font-heading-two">
                ₹{subtotal}
              </span>
            </div>
          );
        })
      ) : (
        <div className="empty-cart p-10 text-center" style={{ flex: 1 }}>
          <p className="text-black">No products in the cart.</p>
          <Link to="/shop" className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
            Return To Shop
          </Link>
        </div>
      )}

      <div className="d-flex justify-content-between gap-24 py-20 border-top">
        <div className="d-flex align-items-center gap-12">
          <span className="text-gray-900 fw-normal text-md font-heading-two w-144">Subtotal</span>
        </div>
        <span className="text-gray-900 fw-bold text-md font-heading-two">₹{cart.subTotal}</span>
      </div>

      <div className="d-flex justify-content-between gap-24 py-20 border-top">
        <div className="d-flex align-items-center gap-12">
          <span className="text-gray-900 fw-normal text-md font-heading-two w-144">Shipping</span>
        </div>
        <span className="text-gray-900 fw-bold text-md font-heading-two">Free</span>
      </div>

      <div className="d-flex justify-content-between gap-24 py-20 border-top">
        <div className="d-flex align-items-center gap-12">
          <span className="text-gray-900 fw-normal text-md font-heading-two w-144">Discount</span>
        </div>
        <span className="text-gray-900 fw-bold text-md font-heading-two">₹{cart.discount}</span>
      </div>

      <div className="d-flex justify-content-between gap-24 py-20 border-top">
        <div className="d-flex align-items-center gap-12">
          <span className="text-gray-900 fw-normal text-md font-heading-two w-144">Total</span>
        </div>
        <span className="text-gray-900 fw-bold text-md font-heading-two">₹{cart.total}</span>
      </div>
    </div>

    <div className="mt-32">
      <div className="payment-item">
        <div className="form-check common-check common-radio py-16 mb-0">
          <Input
            className="form-check-input"
            type="radio"
            name="payment"
            id="paynow"
            checked={selectedPayment === "paynow"}
            onChange={handlePaymentChange}
          />
          <Label className="form-check-label fw-semibold text-neutral-600" htmlFor="paynow">
            Pay Now
          </Label>
        </div>
        {selectedPayment === "paynow" && (
          <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
            <p className="text-gray-800">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
          </div>
        )}
      </div>

      <div className="payment-item">
        <div className="form-check common-check common-radio py-16 mb-0">
          <Input
            className="form-check-input"
            type="radio"
            name="payment"
            id="cod"
            checked={selectedPayment === "cod"}
            onChange={handlePaymentChange}
          />
          <Label className="form-check-label fw-semibold text-neutral-600" htmlFor="cod">
            Cash on delivery
          </Label>
        </div>
        {selectedPayment === "cod" && (
          <div className="payment-item__content px-16 py-24 rounded-8 bg-main-50 position-relative d-block">
            <p className="text-gray-800">Pay with cash upon delivery.</p>
          </div>
        )}
      </div>
    </div>

    <div className="mt-32 pt-32 border-top border-gray-100">
      <p className="text-gray-500">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
        <Link to="#" className="text-main-600 text-decoration-underline">
          privacy policy
        </Link>
        .
      </p>
    </div>

    <Button
      color="primary"
      className="mt-40 py-18 w-100 rounded-8 mt-56"
      onClick={handleInitiatePayment}
      disabled={!selectedAddressId}
    >
      Place Order
    </Button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Checkout;
