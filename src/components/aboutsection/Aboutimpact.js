import React from "react";
import "../../styles/Aboutimpact.css";
import about2 from "../../essets/intpic.png";

import { PiBuildingsBold } from "react-icons/pi";
import { AiOutlineSecurityScan, AiOutlineBulb } from "react-icons/ai";
import { LuHandshake } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";

const Aboutimpact = () => {
    return (
        <>
            {/* Journey of Impact */}
            <div className="card mb-3 about-content">
                <div className="row g-0 align-items-center">

                    <div className="col-lg-7 col-md-12">
                        <div className="card-body">

                            <h2 className="about2-title">
                                The Journey of{" "}
                                <span style={{ color: "#FFD129" }}>
                                    Impact.
                                </span>
                            </h2>

                            <p className="about2-para">
                                Born into a family with deep roots in
                                Kandhukuru, Inturi Nageswara Rao has always
                                held a profound sense of responsibility toward
                                his hometown and its residents.
                            </p>

                            <div className="d-flex about-feature">
                                <div className="location-icon-container">
                                    <PiBuildingsBold className="location-icon" />
                                </div>

                                <div>
                                    <h4>Development Vision</h4>

                                    <p>
                                        Since being elected as MLA in 2024,
                                        he has championed high-impact projects
                                        including flyovers, modernized
                                        riverfronts, and the establishment of
                                        essential healthcare institutions.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex about-feature">
                                <div className="location-icon-container">
                                    <AiOutlineSecurityScan className="location-icon" />
                                </div>

                                <div>
                                    <h4>State Representation</h4>

                                    <p>
                                        His tenure as MLA represents the
                                        growing influence of the state's
                                        developmental agenda on the state
                                        platform.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 text-center">
                        <img
                            src={about2}
                            className="img-fluid about2-image"
                            alt="About Impact"
                        />
                    </div>

                </div>
            </div>

            {/* Charter of Leadership */}

            <div className="container text-center">
                <h2 className="about3-title">
                    Charter of{" "}
                    <span style={{ color: "#FFD129" }}>
                        Leadership.
                    </span>
                </h2>

                <div className="row about3-main-container">

                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div
                            className="card about3-card h-100"
                            style={{
                                backgroundColor: "#c5b885",
                                color: "#000"
                            }}
                        >
                            <div className="handshake-icon-container">
                                <LuHandshake className="handshake-icon" />
                            </div>

                            <div className="card-body">
                                <h5 className="about3-card-title">
                                    Welfare First
                                </h5>

                                <p className="about3-card-para">
                                    Prioritizing social security and
                                    grassroots schemes that touch every
                                    family.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div
                            className="card about3-card h-100"
                            style={{
                                backgroundColor: "#c5b885",
                                color: "#000"
                            }}
                        >
                            <div className="handshake-icon-container">
                                <BsGraphUpArrow className="handshake-icon" />
                            </div>

                            <div className="card-body">
                                <h5 className="about3-card-title">
                                    Modern Growth
                                </h5>

                                <p className="about3-card-para">
                                    Building high-tech infrastructure
                                    that connects our region to the
                                    global economy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <div
                            className="card about3-card h-100"
                            style={{
                                backgroundColor: "#c5b885",
                                color: "#000"
                            }}
                        >
                            <div className="handshake-icon-container">
                                <AiOutlineBulb className="handshake-icon" />
                            </div>

                            <div className="card-body">
                                <h5 className="about3-card-title">
                                    Legacy of Vision
                                </h5>

                                <p className="about3-card-para">
                                    Preparing Kandhukuru for the future
                                    through healthcare and educational
                                    mastery.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Aboutimpact;