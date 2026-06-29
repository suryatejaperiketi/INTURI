import React from "react";
import Excel from "../essets/pulsepic.webp";
import "../styles/Excllence.css";

const Excllence = () => {
    return (
        <div className="container-fluid excellence-section">
            <div className="container">
                <div className=" card-excellence">
                    <div className="row align-items-center g-4">

                        {/* Content */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="card-body excellence-content">
                                <h1 className="card-title-excellence" style={{ fontSize: '2.5rem' }}>
                                    A Legacy of <br />
                                    <span style={{ color: '#FFD129' }}>Excellence.</span>
                                </h1>

                                <p className="card-text-excellence">
                                    Recognized for humanitarian leadership and
                                    dedication to sustainable development
                                    projects in the region.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6 col-md-6 col-12 text-center">
                            <img
                                src={Excel}
                                className="img-fluid img-excellence"
                                alt="Excellence"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Excllence;