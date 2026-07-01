import React from "react";
import card1 from "../essets/swatch.png";
import card2 from "../essets/freebus.png";
import card3 from "../essets/anna.png";
import issuepic from "../essets/issuepic 2.png";
import { useNavigate } from "react-router-dom";
import "../styles/Content.css";

const Content = () => {
  const navigate = useNavigate();

  const campaigns = [
    {
      title: "Swachh Andhra",
      description:
        "A visionary initiative by the Telugu Desam Party to make Andhra Pradesh clean, green, and pollution-free through public participation and better waste management.",
      image: card1,
    },
    {
      title: "Free Bus for Women",
      description:
        "The Telugu Desam Party aims to empower women in Andhra Pradesh by introducing free bus travel facilities, helping women travel safely and reduce daily transportation expenses.",
      image: card2,
    },
    {
      title: "Anna Canteen",
      description:
        "Telugu Desam Party introduced Anna Canteens to provide hygienic and affordable meals for poor and middle-class people across Andhra Pradesh.",
      image: card3,
    },
  ];

  return (
    <div className="container-content">
      <div className="container">
        <h1 className="content-heading">
          Campaigns that{" "}
          <strong style={{ color: "#FFD129" }}>Drive Change.</strong>
        </h1>

        <p className="content-subheading">
          Join our mission to transform Kandukur through focused initiatives
          that address the most pressing needs of our community.
        </p>

        <div className="row g-4 mt-3">
          {campaigns.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex">
              <div className="card card1 h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  loading="lazy"
                />

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>

                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="issue">
          <img src={issuepic} alt="issue-pic" />

          <div className="issue-content">
            <h4 className="issue-title">Have an issue in your ward?</h4>

            <p className="issue-text">
              Reporting issues helps us prioritize our campaign efforts and
              serve you better.
            </p>
          </div>

          <button
            className="issue-btn"
onClick={() => {
  window.scrollTo(0, 0);
  navigate("/contact");
}}
          >
            Report An Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
