  import React from "react";
  import "../../styles/FreeBus.css";

  import img1 from "../../essets/sthreeshakthi1.jpg";
  import img2 from "../../essets/sthreeshakthi2.jpg";
  import img3 from "../../essets/sthreeshakthi3.jpg";
  import img4 from "../../essets/sthreeshakthi4.jpg";

  import {
  FaFemale,
  FaBus,
  FaCalendarAlt,
  FaTag,
} from "react-icons/fa";

  function FreeBus() {
    const gallery = [img1, img2, img3, img4];

    return (
      <section className="freebus-section">
        <div className="scheme-card-six">

          <div className="scheme-header">
            <div className="scheme-icon">
              <FaFemale />
            </div>

            <div>
              <h2>Sthree Shakthi</h2>
              <p className="subtitle">Free Bus Travel for Women</p>

              <span className="scheme-badge">
                Free APSRTC Travel
              </span>
            </div>
          </div>

          <p className="scheme-description">
            Sthree Shakthi Scheme empowers women by providing free travel in
            APSRTC buses across Andhra Pradesh. The initiative improves access
            to education, healthcare, employment opportunities and enhances
            women's mobility across the state.
          </p>

          <div className="scheme-info">

  <div className="info-item">
    <div className="info-icon beneficiaries">
      <FaFemale />
    </div>
    <div className="small-card">
      <h5>Beneficiaries</h5>
      <p>Women of Andhra Pradesh</p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-icon provider">
      <FaBus />
    </div>
    <div className="small-card">
      <h5>Service Provider</h5>
      <p>APSRTC</p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-icon launch">
      <FaCalendarAlt />
    </div>
    <div className="small-card">
      <h5>Launched On</h5>
      <p>15 Aug 2025</p>
    </div>
  </div>

  <div className="info-item">
    <div className="info-icon category">
      <FaTag />
    </div>
    <div className="small-card">
      <h5>Category</h5>
      <p>Women Empowerment</p>
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

  export default FreeBus;