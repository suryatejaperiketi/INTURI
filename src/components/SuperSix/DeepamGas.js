import React from "react";
import "../../styles/FreeBus.css";
import { Cylinder } from "lucide-react";

import { FaUsers, FaFire, FaCalendarAlt, FaTag } from "react-icons/fa";


import img1 from "../../essets/deepam1.webp";
import img2 from "../../essets/deepam.png";
import img3 from "../../essets/deepam2.jpg";
import img4 from "../../essets/deepam3.jpg";

function DeepamGas() {
  const gallery = [img1, img2, img3, img4];

  return (
    <section className="freebus-section">
      <div className="scheme-card">
        <div className="scheme-header">
          <div className="scheme-icon">
            <Cylinder size={34} color="#ff9800" />
          </div>

          <div>
            <h2>Deepam 2.0</h2>

            <p className="subtitle">Free LPG Cylinders for Eligible Families</p>

            <span className="scheme-badge">3 Free LPG Cylinders / Year</span>
          </div>
        </div>

        <p className="scheme-description">
          Deepam 2.0 is a flagship welfare initiative of the Government of
          Andhra Pradesh that provides three free LPG gas cylinders every year
          to eligible households. The scheme aims to reduce the financial burden
          on families, encourage the use of clean cooking fuel, improve women's
          health, and promote a smoke-free kitchen environment across the state.
        </p>

        <div className="scheme-info">
          <div className="info-item">
            <div className="info-icon beneficiaries">
              <FaUsers />
            </div>
            <div>
              <h5>Beneficiaries</h5>
              <p>Eligible Families of Andhra Pradesh</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon benefit-fire">
              <FaFire />
            </div>
            <div>
              <h5>Benefit</h5>
              <p>3 Free LPG Cylinders / Year</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon launch">
              <FaCalendarAlt />
            </div>
            <div>
              <h5>Launched On</h5>
              <p>31 Oct 2024</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon category">
              <FaTag />
            </div>
            <div>
              <h5>Category</h5>
              <p>Household Welfare Scheme</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-card">
        <div className="gallery-heading">
          <h3>Gallery</h3>
          <p>Moments from Deepam 2.0 scheme implementation</p>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeepamGas;
