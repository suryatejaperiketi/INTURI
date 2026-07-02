import React from "react";
import "../styles/Achievemts.css";
import Footer from "./Footer";

import ac1 from "../essets/ccroad1.png";
import ac2 from "../essets/ccroad2.png";
import ac3 from "../essets/passbook.png";
import ac4 from "../essets/ccroad4.png";

import ag1 from "../essets/ccroad5.png";
import ag2 from "../essets/ag2.png";
import ag3 from "../essets/ag3.png";
import ag4 from "../essets/thar1.png";

import acc1 from "../essets/auto.png";
import acc2 from "../essets/canal.jpeg";
import acc3 from "../essets/ccroad3.png";
import acc4 from "../essets/tank.png";

import port from "../essets/port1.png";
import cargo from "../essets/port2.png";
import rail from "../essets/port3.png";
import cargo2 from "../essets/port4.png";

import park1 from "../essets/park1.png";
import park2 from "../essets/park2.png";
import park3 from "../essets/park3.png";
import park4 from "../essets/park4.png";

const ImageGallery = ({ images }) => (
    <div className="achievement-gallery">
        {images.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`achievement-${index}`}
                className="achievement-img"
            />
        ))}
    </div>
);

const Achievements = () => {
    const achievements = [
        {
            images: [ac1, ac2, ac3, ac4],
            reverse: false,
            points: [
                "The construction of CC roads in several areas of Ekalavya Nagar in Kandukur town.",
                "Rs. 30 lakhs CC road construction in NTR Nagar.",
                "458 farmers received new pattadar passbooks.",
                "Development works started in several wards of Kandukur Municipality.",
                "Around ₹1.91 crore NUDA funds utilized.",
                "CC roads constructed in divisions 3, 16, 20, 22, 24, 25, 26 and 30."
            ]
        },
        {
            images: [ag1, ag2, ag3, ag4],
            reverse: true,
            points: [
                "Tar road from Kothur to NH-167B after 30 years.",
                "₹1.5 crore road development immediately after election.",
                "₹18 lakh CC roads in Ward No. 9.",
                "₹30 lakh sanctioned for Ward No. 25.",
                "Road development from CTRI to Mahadevapuram Junction."
            ]
        },
        {
            images: [acc1, acc2, acc3, acc4],
            reverse: false,
            points: [
                "State-of-the-art bus shelters at a cost of ₹2.5 lakh.",
                "North Canal culvert constructed with ₹5 lakh personal funds.",
                "Kandukur–Venkatadripalem road developed with ₹20 lakh.",
                "BT road works started with ₹1.2 crore.",
                "Potluru–Pajarla road completed with ₹60 lakh.",
                "₹1,50,60,000 benefit received by 1004 auto drivers."
            ]
        }
    ];

    return (
        <div className="achievemts-main-container">
            <div className="container py-2">
                <h1
                    className="text-center mb-3"
                    style={{ color: "#FFD129" }}
                >
                    ACHIEVEMENTS
                </h1>
                <div className="d-flex justify-content-center mb-4 align-items-center">
                <input
                    type="text"
                    placeholder="Search by Mandal...."
                    className="form-control mb-3"
                />
                <button className="btn btn-primary mb-4 ms-2">
                    Search
                </button>
                </div>
                {achievements.map((item, index) => (

                    <div
                        key={index}
                        className="card mb-4 achievemts-section"
                    >
                        <div className="row g-0 align-items-center">

                            {!item.reverse && (
                                <div className="col-md-6 col-12">
                                    <ImageGallery images={item.images} />
                                </div>
                            )}

                            <div className="col-md-6 col-12">
                                <div className="card-body">
                                    <ul>
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {item.reverse && (
                                <div className="col-md-6 col-12">
                                    <ImageGallery images={item.images} />
                                </div>
                            )}

                        </div>
                    </div>
                ))}

                <h3 className="ramayapatnam-title">
                    Ramayapatnam
                </h3>

                <div className="card mb-4 achievemts-section">
                    <div className="row g-0 align-items-center">

                        <div className="col-md-6 col-12">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        Ramayapatnam Chenthana Heavy Cargo Rail Terminal
                                    </li>
                                    <li>
                                        ₹1,615 crore mega project.
                                    </li>
                                    <li>
                                        Employment for 1,300 unemployed youth.
                                    </li>
                                    <li>
                                        Expansion across 429 acres.
                                    </li>
                                    <li>
                                        Bulk handling, cold chain and logistics yards.
                                    </li>
                                    <li>
                                        Growth through rail-road connectivity.
                                    </li>
                                    <li>
                                        Continuous progress in Kandukur constituency.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-12">
                            <ImageGallery
                                images={[port, cargo, cargo2, rail]}
                            />
                        </div>

                    </div>
                </div>

                <h3 className="ramayapatnam-title">
                    MSME Park
                </h3>

                <div className="card mb-4 achievemts-section">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-6 col-12">
                            <ImageGallery
                                images={[park1, park2, park3, park4]}
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        100-acre MSME Park at Ayyavaripalle.
                                    </li>
                                    <li>
                                        Boosting industrial growth in Kandukur region.
                                    </li>
                                    <li>
                                        Part of the “One Family, One Entrepreneur” initiative.
                                    </li>
                                    <li>
                                        Encouraging local entrepreneurship and startups.
                                    </li>
                                    <li>
                                        Creating thousands of jobs for youth.
                                    </li>
                                    <li>
                                        Attracting new investments and industries.
                                    </li>
                                    <li>
                                        Strengthening the region's economic development.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Achievements;