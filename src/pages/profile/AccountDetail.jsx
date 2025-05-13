// ... existing imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../components/ToastifyNotification";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {
  deactivateUserAccount,
  deleteUserAccount,
  getUserDetails,
  updateUserProfile,
} from "../../api/profileAPI";
import { LOGOUT } from "../../reducers/authReducer";

const AccountDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetctUserDetails = async () => {
      try {
        const response = await getUserDetails();
        if (response.success) {
          setFormData({
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
            gender: response.data.gender,
          });
        } else {
          showToast("error", response?.message || "Failed to fetch user data.");
        }
      } catch (error) {
        showToast("error", "Error fetching user data.");
      }
    };
    fetctUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile(formData);
      if (response.success) {
        showToast("success", response?.message);
      } else {
        showToast(
          "error",
          response?.message || "Failed to update account details."
        );
      }
    } catch (error) {
      showToast("error", `Error updating account details.`);
    }
  };

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  const toggleDeactivateModal = () =>
    setDeactivateModalOpen(!deactivateModalOpen);

  const confirmDeleteAccount = async () => {
    try {
      const response = await deleteUserAccount();
      toggleDeleteModal();
      if (response.success) {
        showToast(
          "success",
          response?.message || "Account deleted successfully."
        );
        dispatch({ type: LOGOUT });
      } else {
        showToast("error", response?.message || "Failed to delete account.");
      }
    } catch (error) {
      showToast("error", "Error deleting account.");
    }
  };

  const confirmDeactivateAccount = async () => {
    try {
      const response = await deactivateUserAccount();
      toggleDeactivateModal();
      if (response.success) {
        showToast(
          "success",
          response?.message || "Account deactivated successfully."
        );
        dispatch({ type: LOGOUT });
      } else {
        showToast(
          "error",
          response?.message || "Failed to deactivate account."
        );
      }
    } catch (error) {
      showToast("error", "Error deactivating account.");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="formHead">
            <h5>Personal Information</h5>
            <div className="col-md-6">
              <FormGroup>
                <Label for="name">
                  Name <span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </div>

            <div className="col-md-6 mt-10">
              <FormGroup>
                <Label>Gender</Label>
                <div className="d-flex gap-4 align-items-center mt-2">
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    <Label check htmlFor="male">
                      Male
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <Label check htmlFor="female">
                      Female
                    </Label>
                  </FormGroup>
                </div>
              </FormGroup>
            </div>
          </div>

          <div className="formHead mt-20">
            <h5>Email Address</h5>
            <div className="col-md-6">
              <FormGroup>
                <Label for="email">
                  Email <span className="text-danger">*</span>
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="formHead mt-20">
            <h5>Mobile Number</h5>
            <div className="col-md-6">
              <FormGroup>
                <Label for="phone">
                  Phone <span className="text-danger">*</span>
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </div>
          </div>
        </div>

        <Button className="btn btn-primary mt-10" type="submit">
          SAVE CHANGES
        </Button>
      </form>

      <div className="faqDetail">
        <h5>FAQ</h5>
        <p>What happens when I update my email address (or mobile number)?</p>
        <span>
          Your login email id (or mobile number) changes, likewise. You'll
          receive all your account related communication on your updated email
          address (or mobile number).
        </span>
        <p>
          When will my Flipkart account be updated with the new email address
          (or mobile number)?
        </p>
        <span>
          It happens as soon as you confirm the verification code sent to your
          email (or mobile) and save the changes.
        </span>
        <p>
          What happens to my existing Flipkart account when I update my email
          address (or mobile number)?
        </p>
        <span>
          Updating your email address (or mobile number) doesn't invalidate your
          account. Your account remains fully functional. You'll continue seeing
          your Order history, saved information and personal details.
        </span>
        <p>
          Does my Seller account get affected when I update my email address?
        </p>
        <span>
          Flipkart has a 'single sign-on' policy. Any changes will reflect in
          your Seller account also.
        </span>
      </div>

      <div className="mt-3">
        <div>
        <Button  className="btn bg-transparent acountdeletebtn mx-0 removeacountBtn" onClick={toggleDeleteModal}>
          Delete Account
        </Button>
        </div>
        <div>
        <Button className=" bg-transparent acountdeletebtns removeacountBtn" onClick={toggleDeactivateModal}>
          Deactivate Account
        </Button>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <Modal isOpen={deleteModalOpen} toggle={toggleDeleteModal} centered>
        <ModalHeader toggle={toggleDeleteModal}>
          Confirm Delete Account
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to permanently delete your account?</p>
          <p className="text-danger">This action cannot be undone.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleDeleteModal}>
            Cancel
          </Button>{" "}
          <Button color="danger" onClick={confirmDeleteAccount}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>

      {/* Deactivate Account Confirmation Modal */}
      <Modal
        isOpen={deactivateModalOpen}
        toggle={toggleDeactivateModal}
        centered
      >
        <ModalHeader toggle={toggleDeactivateModal}>
          Confirm Deactivate Account
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to deactivate your account?</p>
          <p className="text-warning">You can reactivate your account later.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleDeactivateModal}>
            Cancel
          </Button>{" "}
          <Button color="warning" onClick={confirmDeactivateAccount}>
            Deactivate
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AccountDetail;
