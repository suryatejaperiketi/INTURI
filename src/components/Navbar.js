import React, { useState, useEffect } from "react";
import logo from "../essets/logo.png";
import "../styles/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [navShow, setNavShow] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setShowDropdown(false);
        setShowDropdown2(false);
        setNavShow(false);
    }, [location.pathname]);

    const toggleMultimedia = () => {
        setShowDropdown(!showDropdown);
        setShowDropdown2(false);
    };

    const toggleAchievements = () => {
        setShowDropdown2(!showDropdown2);
        setShowDropdown(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">

                <div className="container-fluid bg-color">

                    <img
                        src={logo}
                        alt="logo"
                        className="navbar-brand logo"
                    />

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setNavShow(!navShow)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={`collapse navbar-collapse nav-text ${navShow ? "show" : ""
                            }`}
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                    HOME
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/about"
                                >
                                    ABOUT US
                                </NavLink>
                            </li>

                            {/* ACHIEVEMENTS */}

                            <li className="nav-item dropdown">
                                <button
                                    type="button"
                                    className="nav-link dropdown-toggle border-0 bg-transparent"
                                    onClick={toggleAchievements}
                                >
                                    ACHIEVEMENTS
                                </button>

                                <ul
                                    className={`dropdown-menu multy-drop ${showDropdown2 ? "show" : ""
                                        }`}
                                >
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/achievements"
                                        >
                                            DEVELOPMENT
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/cmrf"
                                        >
                                            CMR FUNDS
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            {/* MULTIMEDIA */}

                            <li className="nav-item dropdown">
                                <button
                                    type="button"
                                    className="nav-link dropdown-toggle border-0 bg-transparent"
                                    onClick={toggleMultimedia}
                                >
                                    MULTIMEDIA
                                </button>

                                <ul
                                    className={`dropdown-menu multy-drop ${showDropdown ? "show" : ""
                                        }`}
                                >
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/Photoslanding"
                                        >
                                            GALLERY
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/videos"
                                        >
                                            VIDEOS
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/press"
                                        >
                                            PRESS
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/accomplishments"
                                >
                                    ACCOMPLISHMENT
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/contact"
                                >
                                    CONTACT US
                                </NavLink>
                            </li>

                            <li className="nav-item d-flex align-items-center">
                                <button
                                    className="btn btn-warning appoint-btn"
                                    type="button"
                                >
                                    Login
                                </button>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </>
    );
};

export default Navbar;