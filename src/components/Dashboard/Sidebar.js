import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaTools,
  FaHandHoldingHeart,
  FaMoneyBillWave,
  FaClipboardList,
  FaCalendarAlt,
  FaChartBar,
  FaStickyNote,
  FaDatabase,
  FaCog,
} from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";

import profile from "../../essets/intpic1.png";

import "../../styles/Sidebar.css";

function Sidebar() {

  return (
    <div className="sidebar">
  
      <div className="sidebar-profile">
        <img
          src={profile}
          alt="profile"
          className="profile-img"
        />
        <h4>Hon. MLA</h4>
        <p>Welcome Back!</p>
      </div>

      {/* Menu */}
      <ul className="menu">

        <li>
          <NavLink to="/dashboard/dashboard-home" className="menu-link">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/voters" className="menu-link">
            <FaUsers />
            <span>Voters</span>
          </NavLink>
        </li>

        {/* Development Works */}
        
         <li>
          <NavLink to="/dashboard/development" className="menu-link">
            <FaTools />
            <span>Development Works</span>
          </NavLink>
        </li>


        <li>
          <NavLink to="/dashboard/beneficiaries" className="menu-link">
            <FaHandHoldingHeart />
            <span>Beneficiaries</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/cmrf-table" className="menu-link">
            <FaMoneyBillWave />
            <span>CM Relief Fund</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/grievances" className="menu-link">
            <MdAudiotrack />
            <span>Mp3</span>
          </NavLink>
        </li>

         <li>
          <NavLink to="/dashboard/communication" className="menu-link">
            <IoVideocam/>
            <span>Mp4 / Videos</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/surveys" className="menu-link">
            <FaClipboardList />
            <span>Surveys & Feedback</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/events" className="menu-link">
            <FaCalendarAlt />
            <span>Events</span>
          </NavLink>
        </li>

       

        <li>
          <NavLink to="/dashboard/reports" className="menu-link">
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/notes" className="menu-link">
            <FaStickyNote />
            <span>Notes & Follow Ups</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/database" className="menu-link">
            <FaDatabase />
            <span>Janata Darbar</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/settings" className="menu-link">
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;