import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaBell,
  FaUser,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";

import "../../styles/AdminNav.css";

import profilePic from "../../essets/logo.png";

function AdminNav() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Open/Close dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  // Logout
  const handleLogout = () => {

    localStorage.clear();

    navigate("/");

    setDropdownOpen(false);

  };

  return (

    <nav className="adminnav-container">

      {/* LEFT */}

      <div className="adminnav-left">

        <Link
          to="/dashboard"
          className="adminnav-title-link"
        >

          <span className="adminnav-title">

            ADMIN

          </span>

        </Link>

      </div>

      {/* CENTER */}

      <div className="adminnav-center">

        <span className="adminnav-center-text">

        </span>

      </div>

      {/* RIGHT */}

      <div className="adminnav-right">

        <FaBell className="adminnav-right-icon" />

        <div
          className="adminnav-profile"
          ref={dropdownRef}
        >

          <img
            src={profilePic}
            alt="Profile"
            className="adminnav-profile-img"
            onClick={toggleDropdown}
          />

          {dropdownOpen && (

            <div className="adminnav-dropdown">

              {/* MY PROFILE */}

              <button

                className="adminnav-dropdown-item"

                onClick={() => {

                  navigate("/dashboard/CandidateProfile");

                  setDropdownOpen(false);

                }}

              >

                <FaUser className="adminnav-dropdown-icon" />

                My Profile

              </button>

              {/* CHANGE PASSWORD */}

              <button className="adminnav-dropdown-item">

                <FaLock className="adminnav-dropdown-icon" />

                Change Password

              </button>

              {/* LOGOUT */}

              <button

                className="adminnav-dropdown-item adminnav-logout"

                onClick={handleLogout}

              >

                <FaSignOutAlt className="adminnav-dropdown-icon" />

                Log Out

              </button>

            </div>

          )}

        </div>

      </div>

    </nav>

  );
}

export default AdminNav;