import React, { useState } from "react";
import '../styles/Cmrf.css';
import { IoPlayCircle } from "react-icons/io5";

import cmrf1 from "../essets/cmrf1.png";
import cmrf2 from "../essets/cmrf2.png";
import cmrf3 from "../essets/cmrf3.png";
import cmrf4 from "../essets/cmrf4.png";
import cmrf5 from "../essets/cmrf5.png";
import cmrf6 from "../essets/cmrf6.png";
import cmrf7 from "../essets/cmrf7.png";
import cmrf8 from "../essets/cmrf8.png";

import video1 from "../essets/cmrfv1.mp4";
import video2 from "../essets/cmrfv2.mp4";
import video3 from "../essets/cmrfv3.mp4";
import video4 from "../essets/cmrfv4.mp4";
import video5 from "../essets/cmrfv5.mp4";
import video6 from "../essets/cmrfv6.mp4";
import video7 from "../essets/cmrfv7.mp4";
import video8 from "../essets/cmrfv8.mp4";
import "../styles/Cmrf.css";


const Cmrf = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");
    const [selectedMandal, setSelectedMandal] = useState("");
    const [selectedVillage, setSelectedVillage] = useState("");
    const [filteredData, setFilteredData] = useState(null);

    const mandalVillages = {
        Lingasamudram: [
            "Anneboinapalle",
            "Cheemalapenta",
            "Chinapavani",
            "Gangapalem",
            "Jagamreddi Khandrika",
            "Lingasamudram",
            "Mala Konda Rayunipalem",
            "Mogilicherla",
            "Mukteswaram",
            "Mutyalapadu",
            "Narasimhapuram",
            "Pentrala",
            "Racheruvurajupalem",
            "Rallapadu",
            "Thimmareddy Palem",
            "Thunugunta",
            "Thurpurajupalem",
            "Veera Raghavuni Kota",
            "Vengalapuram",
            "Viswanadhapuram"
        ],

        Ulavapadu: [
            "Chinakothapalle",
            "Chinnapavani",
            "Gundlapalle",
            "Kamepalle",
            "Karedu",
            "Kothapeta",
            "Maddulapadu",
            "Pothukandla",
            "Rajupalem",
            "Ramayapatnam",
            "Singarayakonda Agraharam",
            "Ulavapadu"
        ],

        Voletivaripalem: [
            "Ayyavaripalle",
            "Chundi",
            "East Polineni Palem",
            "Kakutur",
            "Kalavalla",
            "Kondareddipalem",
            "Kondasamudram",
            "Naladalapur",
            "Nawabpalem",
            "Nekunam Puram K. Kandrika",
            "Nekunampuram @ Pokur",
            "Nukavaram",
            "Polineni Cheruvu",
            "Ramachandrapuram",
            "Ramalingapuram",
            "Sakhavaram",
            "Sameerapalem",
            "Singamnenipalle",
            "Veeranna Palem",
            "Voletivaripalem",
            "Z. Uppalapadu"
        ],

        Gudluru: [
            "Ammavari Palem",
            "Basireddy Palem",
            "Chevuru",
            "Chinala Trapi",
            "Dappalampadu",
            "Darakanipadu",
            "Gudluru",
            "Gundlapalem",
            "Kothapeta",
            "Mocherla",
            "Nayudupalem",
            "Parakonda Paduagraharam",
            "Parakondapadu",
            "Potluru",
            "Puretipalle",
            "Ravur",
            "Swarnajipuram",
            "Venkam Peta"
        ],

        Kandukur: [
            "Chejarla",
            "Chintalapalem",
            "Devarampadu",
            "Gottipadia",
            "Gudluru",
            "Kandukur",
            "Konakanchi",
            "Mopadu",
            "Musunuru",
            "Ranganayakulu",
            "Vengannapalem"
        ]
    };

    const openVideo = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const closeVideo = () => {
        setShowModal(false);
        setSelectedVideo("");
    };

    const handleSearch = () => {

        if (!selectedVillage) {
            alert("Please select a Village");
            return;
        }

        const result = beneficiaryDetails.filter(
            item =>
                item.village.toLowerCase() ===
                selectedVillage.toLowerCase()
        );

        setFilteredData(result);
    };

    const handleReset = () => {
        setSelectedMandal("");
        setSelectedVillage("");
        setFilteredData(null);
    };


    const beneficiaryDetails = [
        {
            imgSrc: cmrf1,
            videoSrc: video1,
            name: "Vallam Reddy Ramanamma Garu",
            relation: "W/O Brahma Reddy",
            amount: "₹3,06,500/-",
            village: "Gudluru",
        },
        {
            imgSrc: cmrf2,
            videoSrc: video2,
            name: "Abburi Pullaya",
            relation: "S/O Abburi Venkata Rao",
            amount: "₹10,00,000/-",
            village: "Kalavalla",
        },
        {
            imgSrc: cmrf3,
            videoSrc: video3,
            name: "Srinivas",
            relation: "S/O Srinivas",
            amount: "₹58,000/-",
            village: "Kandukur",
        },
        {
            imgSrc: cmrf4,
            videoSrc: video4,
            name: "Srinivas",
            relation: "S/O Komali",
            amount: "₹1,38,000/-",
            village: "Kandukur",
        },
        {
            imgSrc: cmrf5,
            videoSrc: video5,
            name: "Knaparthi Narayanamma",
            relation: "W/O Srinivas",
            amount: "₹28,500/-",
            village: "Muthyalapadu",
        },
        {
            imgSrc: cmrf6,
            videoSrc: video6,
            name: "Venkateswarlu",
            relation: "S/O Venkateswarlu",
            amount: "₹1,07,000/-",
            village: "Gudluru",
        },
        {
            imgSrc: cmrf7,
            videoSrc: video7,
            name: "Adhi Narayana",
            relation: "S/O Abburi Venkata Rao",
            amount: "₹1,18,000/-",
            village: "Sakhavaram",
        },
        {
            imgSrc: cmrf8,
            videoSrc: video8,
            name: "Neelisetty Nagendraaamma",
            relation: "W/O Neelisetty Venkata Rao",
            amount: "₹8,00,000/-",
            village: "Takkellapadu",
        },
    ];

    const displayData =
        filteredData === null
            ? beneficiaryDetails
            : filteredData;

    return (
        <div className="main-container-cmrf">
            <div className="container py-2">

                <h2 className="cmrf-heading ">
                    CMRF Beneficiary Details
                </h2>

                <h4 className="cmrf-subhed">
                    Beyond politics, eligibility is standard till now 1313 people
                    in Kandukuru constituency. 10.42 crores CMRF funds have been provided.
                </h4>
                <div className="row mb-4">

                    <div className="col-md-4 mb-2">
                        <select
                            className="form-select"
                            value={selectedMandal}
                            onChange={(e) => {
                                setSelectedMandal(e.target.value);
                                setSelectedVillage("");
                            }}
                        >
                            <option value="">Choose Mandal</option>

                            {Object.keys(mandalVillages).map((mandal) => (
                                <option key={mandal} value={mandal}>
                                    {mandal}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4 mb-2">
                        <select
                            className="form-select"
                            value={selectedVillage}
                            onChange={(e) =>
                                setSelectedVillage(e.target.value)
                            }
                        >
                            <option value="">
                                Choose Village
                            </option>

                            {selectedMandal &&
                                mandalVillages[selectedMandal].map(
                                    (village) => (
                                        <option
                                            key={village}
                                            value={village}
                                        >
                                            {village}
                                        </option>
                                    )
                                )}
                        </select>
                    </div>

                    <div className="col-md-4 mb-2 d-flex gap-2">

                        <button
                            className="btn btn-primary w-100"
                            onClick={handleSearch}
                        >
                            Search
                        </button>

                        <button
                            className="btn btn-secondary w-100"
                            onClick={handleReset}
                        >
                            Show All
                        </button>

                    </div>

                </div>

                <div className="row">

                    {(displayData && displayData.length > 0) ? (

                        displayData.map((beneficiary, index) => (
                            <div
                                key={index}
                                className="col-lg-6 col-md-6 col-12 mb-4"
                            >
                                <div className="card cmrf-card h-100">
                                    <div className="row g-0 align-items-center h-100">

                                        {/* Image Section */}
                                        <div className="col-4">
                                            <div
                                                className="cmrf-img-wrapper"
                                                onClick={() => openVideo(beneficiary.videoSrc)}
                                            >
                                                <img
                                                    src={beneficiary.imgSrc}
                                                    alt={beneficiary.name}
                                                    className="cmrf-img"
                                                />

                                                <div className="play-icon-overlay">
                                                    <IoPlayCircle />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="col-8">
                                            <div className="cmrf-content">

                                                <h5 className="cmrf-name">
                                                    {beneficiary.name}
                                                </h5>

                                                <p>
                                                    <strong>Relation :</strong>{" "}
                                                    {beneficiary.relation}
                                                </p>

                                                <p>
                                                    <strong>Amount :</strong>
                                                    <span className="cmrf-amount">
                                                        {" "}
                                                        {beneficiary.amount}
                                                    </span>
                                                </p>

                                                <p>
                                                    <strong>Village :</strong>{" "}
                                                    {beneficiary.village}
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))

                    ) : (

                        <div className="col-12 text-center py-5">
                            <h2 className="text-danger fw-bold">
                                No Data Found
                            </h2>
                        </div>

                    )}

                </div>

                {showModal && (
                    <div
                        className="video-modal-overlay"
                        onClick={closeVideo}
                    >
                        <div
                            className="video-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="video-close-btn"
                                onClick={closeVideo}
                            >
                                ✕
                            </button>

                            <video
                                controls
                                autoPlay
                                playsInline
                                width="100%"
                            >
                                <source
                                    src={selectedVideo}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Cmrf;