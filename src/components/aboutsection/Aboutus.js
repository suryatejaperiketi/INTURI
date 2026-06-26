import React from "react";
import "../../styles/About.css";
import Aboutimpact from "./Aboutimpact";
import aboutus from "../../essets/aboutus.png";
import about1 from "../../essets/inturi.png";
import aboutcard1 from "../../essets/aboutcard1.png";
import aboutcard2 from "../../essets/aboutcard2.png";
import aboutcard3 from "../../essets/aboutcard3.png";
import Footer from "../Footer";

import { FaRoad, FaHeartbeat } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";

const Aboutus = () => {
  return (
    <>
      <div className="about-section about-main-container">

        {/* Banner Section */}
        <div className="card text-bg-dark border-0">
          <img
            src={aboutus}
            className="card-img about-image"
            alt="About Banner"
          />

          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
            <p className="about-para">Biography Archive</p>

            <h1 className="about-title">
              A Journey of Leadership.
            </h1>

            <p className="about-paragraph">
              "Public service is a sacred commitment to ensure every citizen of
              Kandukuru walks on the path of progress."
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="card mb-3 about-content">
          <div className="row g-4 align-items-center">

            <div className="col-lg-5 col-md-12 col-12">
              <img
                src={about1}
                className="img-fluid rounded-start abou1-pic"
                alt="Inturi Nageswara Rao"
              />
            </div>

            <div className="col-lg-7 col-md-12 col-12">
              <div className="card-body about1-content">

                <h2 className="about1-title">
                  A Vision for the{" "}
                  <strong style={{ color: "#FFD129" }}>
                    People.
                  </strong>
                </h2>

                <p className="about1-para">
                  We focus on people-centric governance, ensuring every
                  initiative directly benefits the community. My commitment is
                  to build a modern, transparent, and welfare-driven Kandukuru
                  that serves as a benchmark for regional development.
                </p>

                <div className="container text-center mt-4">
                  <div className="row g-4">

                    <div className="col-lg-4 col-md-4 col-12 achievement-item">
                      <IoWaterOutline className="ache-icons" />
                      <h5>Water & Irrigation</h5>
                      <p>
                        Championing projects that brought water, hope and
                        prosperity to farmers.
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12 achievement-item">
                      <FaRoad className="ache-icons" />
                      <h5>Infrastructure</h5>
                      <p>
                        Building roads, bridges and connectivity for a stronger
                        Kandukuru.
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                      <FaHeartbeat className="ache-icons" />
                      <h5>Healthcare</h5>
                      <p>
                        Improving healthcare facilities and ensuring better
                        lives for all.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Statistics Cards */}
        <div className="container text-center">
          <div className="row g-4">

            <div className="col-lg-4 col-md-4 col-12">
              <div className="card text-bg-dark about-card1">
                <img
                  src={aboutcard1}
                  className="card-img about-card-image"
                  alt="Families Served"
                />

                <div className="card-img-overlay about-card-content">
                  <h5 className="about-card-title">
                    50,000+
                  </h5>

                  <p className="about-card-para">
                    Families Served
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="card text-bg-dark about-card1">
                <img
                  src={aboutcard2}
                  className="card-img about-card-image"
                  alt="Community Projects"
                />

                <div className="card-img-overlay about-card-content">
                  <h5 className="about-card-title">
                    25+
                  </h5>

                  <p className="about-card-para">
                    Community Projects
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="card text-bg-dark about-card1">
                <img
                  src={aboutcard3}
                  className="card-img about-card-image"
                  alt="Welfare Schemes"
                />

                <div className="card-img-overlay about-card-content">
                  <h5 className="about-card-title">
                    100+
                  </h5>

                  <p className="about-card-para">
                    Welfare Schemes
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Aboutimpact />
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;