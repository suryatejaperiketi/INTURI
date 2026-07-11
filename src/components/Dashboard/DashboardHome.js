import React from "react";
import "../../styles/DashboardHome.css";

import {
  FaUsers,
  FaTools,
  FaUserFriends,
  FaHandHoldingHeart,
  FaCalendarAlt,
  FaClipboardList,
  FaArrowUp,
} from "react-icons/fa";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const workData = [
  { name: "Completed", value: 188, color: "#3b82f6" },
  { name: "In Progress", value: 96, color: "#22c55e" },
  { name: "Pending", value: 42, color: "#f59e0b" },
];

const totalWorks = workData.reduce((sum, item) => sum + item.value, 0);

const genderData = [
  { name: "Male", value: 110450, color: "#3b82f6" },
  { name: "Female", value: 108350, color: "#ec4899" },
  { name: "Others", value: 161, color: "#e9ec48" },
];

const totalVoters = genderData.reduce((sum, item) => sum + item.value, 0);

function getPercent(value, total) {
  return ((value / total) * 100).toFixed(1);
}

function DashboardHome() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard Home</h1>

      {/* Top Cards */}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <FaUsers />
          </div>

          <div>
            <span>Total Voters</span>
            <h2>2,26,765</h2>

            <p className="growth">
              <FaArrowUp /> 5.6% this month
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FaTools />
          </div>

          <div>
            <span>Development Works</span>
            <h2>326</h2>

            <p className="growth">
              <FaArrowUp /> 12.4% this month
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <FaUserFriends />
          </div>

          <div>
            <span> Govt Beneficiaries</span>
            <h2>54,280</h2>

            <p className="growth">
              <FaArrowUp /> 7.8% this month
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <FaHandHoldingHeart />
          </div>

          <div>
            <span>CM Relief Fund</span>
            <h2>₹11,07,60,000</h2>

            <p className="growth">
              <FaArrowUp /> 8.3% this month
            </p>
          </div>
        </div>
      </div>

      <div className="main-grid">
        <div className="card">
          <div className="card-header">
            <h3>Development Works Overview</h3>

            <select>
              <option>This Month</option>
            </select>
          </div>

          <div className="chart-layout">
            <div className="chart-box">
              <ResponsiveContainer width={220} height={220}>
                <PieChart>
                  <Pie
                    data={workData}
                    dataKey="value"
                    innerRadius={65}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {workData.map((item, index) => (
                      <Cell key={index} fill={item.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="donut-center">
                <strong>{totalWorks}</strong>
                <span>Total Works</span>
              </div>
            </div>

            <div className="legend-box">
              {workData.map((item, index) => (
                <div className="legend-item" key={index}>
                  <span
                    className="legend-dot"
                    style={{
                      background: item.color,
                    }}
                  ></span>

                  <p>
                    {item.name}{" "}
                    <strong>
                      {item.value} ({getPercent(item.value, totalWorks)}%)
                    </strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a href="/" className="view-link">
            View All Works →
          </a>
        </div>

        {/* Activities */}

        <div className="card">
          <h3>Recent Activities</h3>

          <div className="activity">
            <div className="activity-icon green">
              <FaTools />
            </div>

            <div className="activity-body">
              <h4>New development work added</h4>
              <p>Road construction in Ward 12</p>
            </div>

            <span className="activity-time">10:30 AM</span>
          </div>

          <div className="activity">
            <div className="activity-icon purple">
              <FaUserFriends />
            </div>

            <div className="activity-body">
              <h4>New beneficiary registered</h4>
              <p>Ramesh Kumar</p>
            </div>

            <span className="activity-time">09:45 AM</span>
          </div>

          <div className="activity">
            <div className="activity-icon orange">
              <FaHandHoldingHeart />
            </div>

            <div className="activity-body">
              <h4>CM Relief Fund contribution</h4>
              <p>₹50,000 received</p>
            </div>

            <span className="activity-time">Yesterday</span>
          </div>

          <div className="activity">
            <div className="activity-icon blue">
              <FaUsers />
            </div>

            <div className="activity-body">
              <h4>Voter data updated</h4>
              <p>234 new voters added</p>
            </div>

            <span className="activity-time">Yesterday</span>
          </div>

          <a href="/" className="view-link">
            View All
          </a>
        </div>

        <div className="right-side">
          <div className="card">
            <h3>Voter Gender Distribution</h3>

            <div className="gender-layout">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={genderData}
                    dataKey="value"
                    innerRadius={45}
                    outerRadius={75}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {genderData.map((item, index) => (
                      <Cell key={index} fill={item.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="gender-legend">
                {genderData.map((item, index) => (
                  <div className="legend-item" key={index}>
                    <span
                      className="legend-dot"
                      style={{
                        background: item.color,
                      }}
                    ></span>

                    <p>
                      {item.name}
                      <br />
                      <strong>
                        {item.value.toLocaleString("en-IN")} (
                        {getPercent(item.value, totalVoters)}%)
                      </strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="gender-total">
              Total: {totalVoters.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>

      <div className="ned-fol-carad">
        <div className="card">
          <div className="card-header">
            <h3>Upcoming Events</h3>
          </div>

          <div className="event">
            <div className="date-box">
              AUG
              <strong>20</strong>
            </div>

            <div>
              <h4>Janata Darbar</h4>
              <p>10:00 AM - 01:00 PM</p>
            </div>
          </div>

          <div className="event">
            <div className="date-box">
              AUG
              <strong>28</strong>
            </div>

            <div>
              <h4>Youth Meeting</h4>
              <p>04:00 PM - 06:00 PM</p>
            </div>
          </div>

          <div className="event">
            <div className="date-box">
              OCT
              <strong>30</strong>
            </div>

            <div>
              <h4>Public Gathering</h4>
              <p>11:00 AM - 01:00 PM</p>
            </div>
          </div>
          <a href="/" className="view-link-sm">
            View All
          </a>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Notes & Follow Ups</h3>
            <a href="/" className="view-link-sm">
              View All
            </a>
          </div>

          <div className="note">
            <span className="note-icon yellow">
              <FaClipboardList />
            </span>
            <div>
              <h4>Follow up with Ward 12 regarding road work update</h4>
              <p>20 JULY 2024, 11:00 AM</p>
            </div>
          </div>

          <div className="note">
            <span className="note-icon blue">
              <FaClipboardList />
            </span>
            <div>
              <h4>Check Pending beneficiaries list</h4>
              <p>2 AUG 2024, 09:30 AM</p>
            </div>
          </div>
           <div className="note">
            <span className="note-icon orange">
              <FaClipboardList />
            </span>
            <div>
              <h4>Check Latest Cmrfunds</h4>
              <p>17 AUG 2024, 09:30 AM</p>
            </div>
          </div>
           <div className="note">
            <span className="note-icon green">
              <FaClipboardList />
            </span>
            <div>
              <h4>Check Pending Development</h4>
              <p>7 SEP 2024, 09:30 AM</p>
            </div>
          </div>
        </div>

        <div className="card constituency-card">
          <div className="card-header">
            <h3>Top Constituencies (By Voters)</h3>

            <a href="/" className="view-link-sm">
              View Report
            </a>
          </div>

          <div className="constituency-list">
            <div className="constituency-item">
              <span className="name">Kandukur</span>

              <div className="progress-wrapper">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>

              <span className="count">66,000</span>
            </div>

            <div className="constituency-item">
              <span className="name">Lingasamudram</span>

              <div className="progress-wrapper">
                <div className="progress-bar" style={{ width: "92%" }}></div>
              </div>

              <span className="count">35,000</span>
            </div>

            <div className="constituency-item">
              <span className="name">Gudlur</span>

              <div className="progress-wrapper">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>

              <span className="count">43,000</span>
            </div>

            <div className="constituency-item">
              <span className="name">Ulavapadu</span>

              <div className="progress-wrapper">
                <div className="progress-bar" style={{ width: "72%" }}></div>
              </div>

              <span className="count">51,000</span>
            </div>

            <div className="constituency-item">
              <span className="name">Voletivaripalem</span>

              <div className="progress-wrapper">
                <div className="progress-bar" style={{ width: "58%" }}></div>
              </div>

              <span className="count">31,000</span>
            </div>
          </div>
        </div>
      </div>
      <br />

     <div className="quick-grid">

  <div className="quick-btn">
    <FaUsers className="voter-icon" />
    <span>Add Voter</span>
  </div>

  <div className="quick-btn">
    <FaTools className="work-icon" />
    <span>Add Work</span>
  </div>

  <div className="quick-btn">
    <FaUserFriends className="beneficiary-icon" />
    <span>Add Beneficiary</span>
  </div>

  <div className="quick-btn">
    <FaHandHoldingHeart className="relief-icon" />
    <span>Relief Fund</span>
  </div>

  <div className="quick-btn">
    <FaCalendarAlt className="event-icon" />
    <span>Add Event</span>
  </div>

  <div className="quick-btn">
    <FaClipboardList className="survey-icon" />
    <span>Add Survey</span>
  </div>

</div>
    </div>
  );
}

export default DashboardHome;
