import React from "react";
import "../../styles/DevelopmentForm.css";
function DevelopmentForm() {
  return (
    <div className="development-form">
      <div className="form-header">
      <div>
        <h2>Add Development Work</h2>
        <p>Enter development details and upload images to display on website</p>
        </div>
        <button className="back-btn" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
     

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Mandal / Area *</label>
            <select>
              <option value="">Select Mandal</option>
              <option value="Kandukur">Kandukur</option>
              <option value="Lingasamudram">Lingasamudram</option>
              <option value="Gudluru">Gudluru</option>
              <option value="Ulavapadu">Ulavapadu</option>
              <option value="Voletivaripalem">Voletivaripalem</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select>
             <option value="">Select Category</option>
              <option value="Road Works">Road Works</option>
              <option value="Water Supply">Water Supply</option>
              <option value="Drainage">Drainage</option>
            </select>
          </div>

          <div className="form-group">
            <label>Development Title *</label>
            <input type="text" placeholder="Enter title of the development work" />
          </div>

          <div className="form-group">
            <label>Estimated Cost</label>
            <input type="text" placeholder="Enter estimated cost" />
          </div>

          <div className="form-group full-width">
            <label>Description *</label>
            <textarea rows="5" placeholder="Enter description of the development work"></textarea>
          </div>
        </div>

        {/* Upload Section */}

        <div className="upload-section">
          <div className="upload-box">
            <h4>Upload Images *</h4>

            <div className="drop-zone">
              <p>Drag & Drop Images Here</p>

              <input type="file" id="images" multiple accept="image/*" hidden />

              <label htmlFor="images" className="choose-btn">
                Choose Files
              </label>

              <small>JPG, PNG, WEBP (Max 5MB each)</small>
            </div>
          </div>

          <div className="preview-box">
            <h4>Uploaded Images</h4>

            <div className="preview-area">No Images Uploaded</div>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>

          <button type="reset" className="reset-btn">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default DevelopmentForm;
