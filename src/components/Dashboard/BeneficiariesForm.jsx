import React from "react";
import "../../styles/BeneficiariesForm.css";

const BeneficiariesForm = () => {
  return (
    <div className="scheme-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Add New Scheme</h1>
          <p>
            Fill in the scheme details below. This information will be displayed
            on the website.
          </p>
        </div>

        <button className="back-btn" onClick={() => window.history.back()}>← Back to Schemes</button>
      </div>

      {/* Section 1 */}
      <div className="form-card">
        <h3 className="section-title">1. Basic Information</h3>

        <div className="grid-2">
          <div className="form-group">
            <label>Scheme Name *</label>
            <input type="text" placeholder="Enter scheme name" />
          </div>

          <div className="form-group">
            <label>Short Description *</label>
            <input type="text" placeholder="Enter short description" />
          </div>

          <div className="form-group">
            <label>Badge / Highlight Text *</label>
            <input type="text" placeholder="Enter badge text" />
          </div>

          <div className="form-group">
            <label>Detailed Description *</label>

            <div className="editor">
              <div className="toolbar">
                <button>B</button>
                <button>I</button>
                <button>U</button>
                <button>•</button>
                <button>1.</button>
                <button>🔗</button>
              </div>

              <textarea
                rows="4"
                placeholder="Enter full description about the scheme..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="form-card">
        <h3 className="section-title">2. Scheme Thumbnail</h3>

        <div className="upload-grid">
          <div>
            <label className="upload-label">
              Upload Scheme Thumbnail Image *
            </label>

            <div className="upload-box-ben">
              <div className="upload-content">
                <span>☁</span>
                <p>Drag & Drop Image Here</p>
                <small>or</small>
                <label htmlFor="fileInput" className="choose-btn-ben">
                  Choose File
                </label>

                <input id="fileInput" type="file" hidden />
              </div>
            </div>
          </div>

          <div>
            <label className="upload-label">Preview</label>

            <div className="preview-box-ben">🖼</div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="form-card">
        <h3 className="section-title">3. Scheme Information</h3>

        <div className="grid-4">
          <div className="form-group">
            <label>Beneficiaries *</label>
            <input type="text" placeholder="Women of Andhra Pradesh" />
          </div>

          <div className="form-group">
            <label>Service Provider *</label>
            <input type="text" placeholder="Women & Child Welfare Department" />
          </div>

          <div className="form-group">
            <label>Launch Date *</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select>
              <option value="">Select Category</option>

              <option value="welfare">Welfare & Social Security</option>
              <option value="women">Women Empowerment</option>
              <option value="education">Education</option>
              <option value="health">Health & Medical</option>
              <option value="agriculture">Agriculture & Farmers</option>
              <option value="employment">Employment & Skill Development</option>
              <option value="housing">Housing</option>
              <option value="transport">Transport</option>
              <option value="pension">Pension & Senior Citizens</option>
              <option value="youth">Youth Development</option>
              <option value="scstbc">SC / ST / BC Welfare</option>
              <option value="minority">Minority Welfare</option>
              <option value="finance">Financial Assistance</option>
              <option value="digital">Digital Services</option>
              <option value="infrastructure">Infrastructure Development</option>
              <option value="environment">Environment & Sustainability</option>
              <option value="rural">Rural Development</option>
              <option value="urban">Urban Development</option>
              <option value="women-child">Women & Child Welfare</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="form-card">
        <h3 className="section-title">4. Gallery Images (Multiple)</h3>

        <div className="gallery-box">
          <div className="upload-content">
            <span>☁</span>
            <p>Drag & Drop Images Here</p>
            <small>or</small>
            <label htmlFor="fileInput" className="choose-btn-ben">
              Choose File
            </label>

            <input id="fileInput" type="file"  accept="image/*"  multiple hidden/>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="form-card">
        <h3 className="section-title">5. Status</h3>

        <select className="status-select">
          <option>🟢 Active</option>
          <option>🔴 Inactive</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="action-buttons">
        <button className="save-btn">Submit Scheme</button>

        <button className="reset-btn">Reset</button>
      </div>
    </div>
  );
};

export default BeneficiariesForm;
