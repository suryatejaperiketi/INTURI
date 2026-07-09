import React, { useState } from "react";
import "../../styles/CmrFundsForm.css";

const CmrFundsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    amount: "",
    village: "",
    mandal: "",
    date: "",
    mobile: "",
    aadhaar: "",
    status: "",
    remarks: "",
    image: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="beneficiary-form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Add New CMRF Beneficiary</h2>
          <button className="back-btn" onClick={() => window.history.back()}>
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label>Beneficiary Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Beneficiary Name"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Relation *</label>
              <input
                type="text"
                name="relation"
                placeholder="Ex: S/O, W/O, D/O"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Amount (₹) *</label>
              <input
                type="number"
                name="amount"
                placeholder="Enter Amount"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Village *</label>
              <input
                type="text"
                name="village"
                placeholder="Enter Village"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mandal *</label>
              <select
                name="mandal"
                onChange={handleChange}
              >
                <option>Select Mandal</option>
                <option>Kandukur</option>
                <option>Gudluru</option>
                <option>Ulavapadu</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date *</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Status *</label>
              <select
                name="status"
                onChange={handleChange}
              >
                <option>Select Status</option>
                <option>Approved</option>
                <option>Pending</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload Video *</label>
              <input
                type="file"
                name="video"
                accept="video/*"
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-group full-width">
            <label>Remarks</label>
            <textarea
              rows="4"
              name="remarks"
              placeholder="Enter Remarks"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="btn-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>

            <button
              type="reset"
              className="reset-btn"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CmrFundsForm;