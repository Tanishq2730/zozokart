import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../components/ToastifyNotification";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText } from 'reactstrap';
import { deactivateUserAccount, deleteUserAccount, getUserDetails, updateUserProfile } from "../../api/profileAPI";
import { LOGOUT } from "../../reducers/authReducer";

const AccountDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: ""
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetctUserDetails = async () => {
        try {
            // Assuming you have a 'deleteUserAccount' API call
            const response = await getUserDetails();
            if (response.success) {
                // showToast("success", response?.message);
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    gender: response.data.gender
                });
            // Optionally, redirect the user or clear authentication state
            } else {
                showToast("error", response?.message || "Failed to delete account.");
            }
        } catch (error) {
            showToast("error", "Error deleting account.");
        }
    };
    fetctUserDetails();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Assuming you have an 'updateUser' API call
        const response = await updateUserProfile(formData);
        if (response.success) {
        showToast("success", response?.message);
        } else {
        showToast("error", response?.message || "Failed to update account details.");
        }
    } catch (error) {
        showToast("error", `Error updating account details.`);
    }
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const toggleDeactivateModal = () => {
    setDeactivateModalOpen(!deactivateModalOpen);
  };

  const confirmDeleteAccount = async () => {
    try {
        // Assuming you have a 'deleteUserAccount' API call
        const response = await deleteUserAccount();
        toggleDeleteModal();
        if (response.success) {
            showToast("success", response?.message || "Account deleted successfully.");
            dispatch({ type: LOGOUT });
        // Optionally, redirect the user or clear authentication state
        } else {
            showToast("error", response?.message || "Failed to delete account.");
        }
    } catch (error) {
        showToast("error", "Error deleting account.");
    }
  };

  const confirmDeactivateAccount = async () => {
    try {
        // Assuming you have a 'deactivateUserAccount' API call
        const response = await deactivateUserAccount();
        toggleDeactivateModal();
        if (response.success) {
            showToast("success", response?.message || "Account deactivated successfully.");
            dispatch({ type: LOGOUT });
        // Optionally, update UI or authentication state
        } else {
            showToast("error", response?.message || "Failed to deactivate account.");
        }
    } catch (error) {
        showToast("error", "Error deactivating account.");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
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
        <div className="row mb-3">
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
          <div className="col-md-6">
            <FormGroup>
              <Label for="gender">
                Gender
              </Label>
              <Input
                type="select"
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Input>
            </FormGroup>
          </div>
        </div>

        <Button color="success" type="submit">
          SAVE CHANGES
        </Button>
      </form>

      <hr className="my-4" />

      <div className="mt-3">
        <h6>Account Actions</h6>
        <Button color="danger" className="me-2" onClick={toggleDeleteModal}>
          Delete Account
        </Button>
        <Button color="warning" onClick={toggleDeactivateModal}>
          Deactivate Account
        </Button>
      </div>

      {/* Delete Account Confirmation Modal */}
      <Modal isOpen={deleteModalOpen} toggle={toggleDeleteModal} centered>
        <ModalHeader toggle={toggleDeleteModal}>Confirm Delete Account</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to permanently delete your account?</p>
          <p className="text-danger">This action cannot be undone.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleDeleteModal}>
            Cancel
          </Button>{' '}
          <Button color="danger" onClick={confirmDeleteAccount}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>

      {/* Deactivate Account Confirmation Modal */}
      <Modal isOpen={deactivateModalOpen} toggle={toggleDeactivateModal} centered>
        <ModalHeader toggle={toggleDeactivateModal}>Confirm Deactivate Account</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to deactivate your account?</p>
          <p className="text-warning">You can reactivate your account later.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleDeactivateModal}>
            Cancel
          </Button>{' '}
          <Button color="warning" onClick={confirmDeactivateAccount}>
            Deactivate
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AccountDetail;