import React from "react";
import "../../styles/About.css";
import Aboutimpact from "./Aboutimpact";
import about1 from "../../essets/inturi.jpg";
import Footer from "../Footer";
import waterirrigationimg from "../../essets/waterirrigation.png";
import road from "../../essets/road.png";
import port  from "../../essets/port1.png";
import msmepark from "../../essets/msmepark.png";
import hospital from "../../essets/hospital.png";
import railway from "../../essets/port2.png";

import {
  FaTint,
  FaRoad,
  FaShip,
  FaIndustry,
  FaHospital,
  FaTrain
} from "react-icons/fa";

const Aboutus = () => {

  const developmentData = [
  {
    id: 1,
    title: "WATER & IRRIGATION",
    image: waterirrigationimg,
    icon: <FaTint />,
    color: "#0d6efd",
    desc: "Championing projects that brought water, hope and prosperity to farmers.",
  },
  {
    id: 2,
    title: "INFRASTRUCTURE",
    image: road,
    color: "#28a745",
    icon:  <FaRoad />,
    desc: "Building roads, bridges and connectivity for a stronger Kandukur.",
  },
  {
    id: 3,
    title: "RAMAYAPATNAM PORT",
    image: port,
    icon: <FaShip />,
    color: "rgb(59 179 194)",
    desc: `₹1,615 crore Heavy Cargo Rail Terminal spread across 429 acres,
    Boosting logistics, rail connectivity, and 1,300 employment opportunities.`,
  },
  {
    id: 4,
    title: "MSME PARK",
    image: msmepark,
    icon:<FaIndustry />,
    color: "#481b5c",
    desc: "Creating jobs and encouraging entrepreneurship through MSME Park.",
  },
  {
    id: 5,
    title: "HEALTHCARE",
    image: hospital,
    icon: <FaHospital />,
    color: "#f44336",
    desc: "Improving healthcare facilities and ensuring better lives for all.",
  },

  {
    id: 6,
    title: "RAILWAY",
    image: railway,
    icon: <FaTrain />,
    color: "#4b5563",
    desc: "Enhancing rail-road connectivity to support trade, logistics, and economic growth while improving transportation access for Kandukur residents.",
  },
  
];

  return (
    <>
    
      <div className="about-section about-main-container">

        {/* About Content */}
        <div className="card mb-3 about-content">
          <div className="row g-4 align-items-center p-3">

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

              </div>
            </div>

          </div>
        </div>


 <section className="development-section">

      {/* First Row */}
      <div className="row-one">
        {developmentData.slice(0, 3).map((item) => (
          <div className="card-about" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="icon-circle"
             style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

  
      <div className="row-two">
        {developmentData.slice(3).map((item) => (
          <div className="card-about" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="icon-circle"
            style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>




      
        <Aboutimpact />
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;