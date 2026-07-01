import React from "react";
import "../styles/Pulse.css";
import Pulseimg from "../essets/crowdpic.webp";

const Pulse = () => {
    return (
        <>
            <h1 className="head-pulse">
                Political <strong style={{ color: "#FFD129" }}>Pulse.</strong>
            </h1>

            <div className="container-fluid px-5 mb-5">
        
                {/* First Row */}
                <div className="row align-items-stretch">

                    {/* Image Section */}
                    <div className="col-12 col-lg-6 mb-4">
                        <img
                            src={Pulseimg}
                            className="img-fluid rounded img-pulse"
                            alt="Pulse"
                        />
                    </div>

                    {/* Right Cards */}
                    <div className="col-12 col-lg-6">

                        <div className="card card-pulse mb-4 ">
                            <div className="card-body">
                                <h4 className="pulse-title">Press Release</h4>

                                <p className="text-card-para">
                                    TDP supports farmers with financial aid,
                                    irrigation projects, and better crop
                                    development schemes.
                                </p>
                            </div>
                        </div>

                        <div className="card card-pulse">
                            <div className="card-body">
                                <h4 className="pulse-title">Events</h4>

                                <p className="text-card-para">
                                    MLA Inturi Nageswara Rao has been actively
                                    participating in local events, including
                                    weddings and community gatherings.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card card-pulse-bottom ">
                            <div className="card-body">
                                <h4 className="pulse-title">Healthcare</h4>

                                <p className="text-card-para">
                                    TDP focuses on better healthcare services
                                    with improved hospitals and affordable
                                    treatment for people.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="card card-pulse-bottom ">
                            <div className="card-body">
                                <h4 className="pulse-title">Jobs</h4>

                                <p className="text-card-para">
                                    TDP focuses on creating jobs for youth
                                    through industries, IT growth, and skill
                                    development programs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card card-pulse-bottom ">
                            <div className="card-body">
                                <h4 className="pulse-title">Local Reviews</h4>

                                <p className="text-card-para">
                                    Kandukur MLA Inturi Nageswara Rao has been
                                    actively conducting local reviews and
                                    resolving maintenance issues.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Pulse;