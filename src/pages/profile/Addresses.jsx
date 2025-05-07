// import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { addUserAddress, deleteUserAddress, getUserAddresses, updateUserAddress } from "../../api/addressAPI";
import { showToast } from "../../components/ToastifyNotification";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
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
    addressType: "Home"
  });
  const isAuthenticated = useSelector(state => state.auth?.isAuthenticated);
  const user = useSelector(state => state.auth?.user);

  useEffect(() => {
          const fetchAddresses = async () => {
              if (isAuthenticated && user?._id) {
                  try {
                      const response = await getUserAddresses();
                      if (response?.success) {
                          setAddresses(response.data);
                      } else {
                          showToast("error", response?.message || "Failed to fetch addresses.");
                      }
                  } catch (error) {
                      showToast("error", "Error fetching addresses.");
                  }
              }
          };
  
          fetchAddresses();
      }, [isAuthenticated, user?._id]);
  
      const openAddAddressModal = () => {
          setModalMode('add');
          setModalFormData({ // Initialize form for adding
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
          setModalMode('edit');
          setModalFormData({ ...address });
          setCurrentAddressToEdit(address);
          setIsModalOpen(true);
      };
  
      const closeModal = () => {
          setIsModalOpen(false);
          setModalMode(null);
          setCurrentAddressToEdit(null);
          setModalFormData({ // Reset form data on close
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
          setModalFormData(prevState => ({
              ...prevState,
              [name]: type === 'checkbox' ? checked : value,
          }));
      };
  
      const handleSaveAddressModal = async () => {
          if (!user?._id) {
              showToast("error", "User not authenticated.");
              return;
          }
  
          try {
              let response;
              if (modalMode === 'add') {
                  response = await addUserAddress(modalFormData);
                  if (response.success) {
                      showToast("success", "New address added successfully.");
                      setAddresses([...addresses, response.data]);
                      
                      closeModal();
                  } else {
                      showToast("error", response?.message || "Failed to add new address.");
                  }
              } else if (modalMode === 'edit' && currentAddressToEdit?._id) {
                  response = await updateUserAddress(currentAddressToEdit._id, modalFormData);
                  if (response.success) {
                      showToast("success", "Address updated successfully.");
                      setAddresses(prevAddresses =>
                          prevAddresses.map(addr =>
                              addr._id === currentAddressToEdit._id ? response.data : addr
                          )
                      );
                      closeModal();
                  } else {
                      showToast("error", response?.message || "Failed to update address.");
                  }
              }
          } catch (error) {
              showToast("error", `Error ${modalMode === 'add' ? 'adding' : 'updating'} address.`);
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
                      setAddresses(prevAddresses => prevAddresses.filter(addr => addr._id !== addressId));
                     
                  } else {
                      showToast("error", response?.message || "Failed to delete address.");
                  }
              } catch (error) {
                  showToast("error", "Error deleting address.");
              }
          }
      };

  return (
    <div>
      <div className="mainheader d-flex justify-content-between align-items-center">
        <h4>Addresses</h4>
        <button className="btn btn-main" onClick={openAddAddressModal}>
          + Add New Address
        </button>
      </div>
      <hr />

      {addresses.length === 0
        ? <p className="text-center text-muted">
            Please add your address here.
          </p>
        : <div className="row">
            {addresses.map((address, index) =>
              <div className="col-md-6" key={index}>
                <div className="border p-10 mb-10 position-relative">
                  
                  <h4 className="text-18">
                    {address.fullName}  ({address.addressType}) {address.defaultAddress && <span className="text-sm text-main-600">(Default)</span>}
                  </h4>
                  <p className="text-14">
                    {address.address}
                  </p>
                  <p className="text-14">
                    {address.houseNumber && `${address.houseNumber}, `}{address.area}, {address.nearByFamous && `Near ${address.nearByFamous}, `}{address.city}, {address.state} - {address.pinCode}
                  </p>
                  <p className="text-14">
                    Phone: {address.phoneNumber}{address.alternatePhoneNumber && `, Alt: ${address.alternatePhoneNumber}`}
                  </p>
                  <Button color="primary" size="sm" className="me-1" onClick={() => openEditAddressModal(address)}>Edit</Button>
                  <Button color="danger" size="sm" className="text-danger" onClick={() => handleDeleteAddress(address._id)}>Delete</Button>
                </div>
              </div>
            )}
          </div>}

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
    </div>
  );
};

export default Addresses;
