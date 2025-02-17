import { Trash2 } from "lucide-react";
import React, { useState } from "react";

const Addresses = () => {
  const [show, setShow] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    address: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setAddresses([...addresses, formData]);
    setFormData({
      fullName: "",
      mobile: "",
      pincode: "",
      address: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
    });
    setShow(false);
  };

  const deleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  return (
    <div>
      <div className="mainheader d-flex justify-content-between align-items-center">
        <h4>Addresses</h4>
        <button className="btn btn-main" onClick={handleShow}>
          + Add New Address
        </button>
      </div>
      <hr />

      {addresses.length === 0 ? (
        <p className="text-center text-muted">Please add your address here.</p>
      ) : (
        <div className="row">
          {addresses.map((addr, index) => (
            <div className="col-md-6" key={index}>
              <div className="border p-10 mb-10 position-relative">
                <button
                  className="btn btn-danger btn-sm position-absolute"
                  style={{ top: "10px", right: "10px" }}
                  onClick={() => deleteAddress(index)}
                >
                  <Trash2 />
                </button>
                <h4 className="text-18">{addr.fullName}</h4>
                <p className="text-14">
                  {addr.address}, {addr.area}
                </p>
                <p className="text-14">
                  {addr.city}, {addr.state} - {addr.pincode}
                </p>
                <p className="text-14">Mobile: {addr.mobile}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {show && (
        <div className="addressmodal modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Address</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      className="form-control"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="6 digits [0-9] PIN code"
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Flat, House no., Building"
                    />
                  </div>
                  <div className="form-group">
                    <label>Area</label>
                    <input
                      type="text"
                      name="area"
                      className="form-control"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="Area, Street, Sector, Village"
                    />
                  </div>
                  <div className="form-group">
                    <label>Landmark</label>
                    <input
                      type="text"
                      name="landmark"
                      className="form-control"
                      value={formData.landmark}
                      onChange={handleChange}
                      placeholder="E.g. near Apollo hospital"
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city name"
                    />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <select
                      name="state"
                      className="form-control"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="">Choose a state</option>
                      <option value="State 1">State 1</option>
                      <option value="State 2">State 2</option>
                      <option value="State 3">State 3</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save Address
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addresses;
