import React from "react";
import "../../styles/FreeBus.css";
import img1 from "../../essets/annadhata1.jpg";
import img2 from "../../essets/annadhata3.jpg";
import img3 from "../../essets/annadhata4.jpg";
import img4 from "../../essets/annadhata2.jpg";

import {
  FaUserTie,
  FaMoneyBillWave,
  FaCalendarAlt
} from "react-icons/fa";

import { GiWheat } from "react-icons/gi";

function AnnadathaSukhibhava() {
  const gallery = [img1, img2, img3, img4];

  return (
    <section className="freebus-section">
      <div className="scheme-card-six">

        <div className="scheme-header">
          <div className="scheme-icon">
            <GiWheat />
          </div>

          <div>
            <h2>Annadata Sukhibhava</h2>
            <p className="subtitle">Financial Assistance for Farmers</p>

            <span className="scheme-badge">
               ₹20,000 Financial Assistance / Year
            </span>
          </div>
        </div>

        <p className="scheme-description">
    Annadata Sukhibhava is a flagship welfare initiative of the Government of Andhra Pradesh
    that provides annual financial assistance of ₹20,000 to eligible farmers. The scheme aims
    to reduce cultivation costs, support agricultural activities, improve farm productivity,
    and enhance the economic well-being of farming families across the state.
</p>

       <div className="scheme-info">

  <div className="info-item">
    <div className="info-icon ann-farmer">
      <FaUserTie />
    </div>

    <div>
      <h5>Beneficiaries</h5>
      <p>Eligible Farmers of Andhra Pradesh</p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-icon ann-money">
      <FaMoneyBillWave />
    </div>

    <div>
      <h5>Benefit</h5>
      <p>₹20,000 Financial Assistance / Year</p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-icon ann-date">
      <FaCalendarAlt />
    </div>

    <div>
      <h5>Launched On</h5>
      <p>20 June 2025</p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-icon ann-cat">
      <GiWheat />
    </div>

    <div>
      <h5>Category</h5>
      <p>Farmer Welfare Scheme</p>
    </div>
  </div>

</div>

      </div>

      <div className="gallery-card">

        <div className="gallery-heading">
          <h3>Gallery</h3>
           <p>Distribution and implementation of Annadata Sukhibhava across Andhra Pradesh.</p>
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

export default AnnadathaSukhibhava;