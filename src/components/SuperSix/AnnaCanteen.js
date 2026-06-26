import React from "react";
import "../../styles/FreeBus.css";

import img1 from "../../essets/anna.png";
import img2 from "../../essets/annacanteen1.jpg";
import img3 from "../../essets/annacanteen2.jpg";
import img4 from "../../essets/annacanteen3.jpg";

function  AnnaCanteen() {
  const gallery = [img1, img2, img3, img4];

  return (
    <section className="freebus-section">
      <div className="scheme-card">

        <div className="scheme-header">
          <div className="scheme-icon">
            🍱
          </div>

          <div>
              <h2>Anna Canteen</h2>
        <p className="subtitle">Affordable Meals for Everyone</p>


            <span className="scheme-badge">
               ₹5 Per Meal
            </span>
          </div>
        </div>

        <p className="scheme-description">
      Anna Canteen provides hygienic, nutritious, and affordable meals to
      economically weaker sections, daily wage workers, students, senior
      citizens, and the general public. The initiative aims to ensure that
      no one goes hungry while reducing the burden of food expenses.
    </p>

        <div className="scheme-info">

      <div className="info-item">
        <span>👨‍👩‍👧‍👦</span>
        <div className="small-card">
          <h5>Beneficiaries</h5>
          <p>All Eligible Citizens</p>
        </div>
      </div>

      <div className="info-item">
        <span>🥣</span>
        <div className="small-card">
          <h5>Service</h5>
          <p>Affordable Meals</p>
        </div>
      </div>

      <div className="info-item">
        <span>📅</span>
        <div className="small-card">
          <h5>Reintroduced On</h5>
          <p>16 Aug 2024</p>
        </div>
      </div>

      <div className="info-item">
        <span>🏷️</span>
        <div className="small-card">
          <h5>Category</h5>
          <p>Food Security</p>
        </div>
      </div>

    </div>

      </div>

      <div className="gallery-card">

        <div className="gallery-heading">
          <h3>Gallery</h3>
          <p>Moments from Sthree Shakthi scheme implementation</p>
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

export default AnnaCanteen;