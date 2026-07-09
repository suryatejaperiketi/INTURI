import React from "react";
import "../../styles/CMRFTable.css";
import { useNavigate } from "react-router-dom";

const CMRFTable = () => {
    const navigate = useNavigate();
  const cmrfData = [
    {
      id: 1,
      name: "Vallam Reddy Ramanamma Garu",
      relation: "W/O Brahma Reddy",
      amount: "₹3,06,500",
      village: "Gudluru",
      mandal: "Gudluru",
      date: "15-04-2026",
      status: "Approved",
    },
    {
      id: 2,
      name: "Abburi Pullaya",
      relation: "S/O Venkata Rao",
      amount: "₹10,00,000",
      village: "Kalavalla",
      mandal: "Kandukur",
      date: "11-02-2026",
      status: "Approved",
    },
    {
      id: 3,
      name: "Srinivas",
      relation: "S/O Srinivas",
      amount: "₹58,000",
      village: "Kandukur",
      mandal: "Gudluru",
      date: "05-11-2025",
      status: "Pending",
    },
  ];

  return (
    <div className="cmrf-container">
      <div className="cmrf-header">
        <h2>CMRF Beneficiaries</h2>

        <button className="add-btn" onClick={()=>navigate("/dashboard/cmrf-form")}>
          + Add New Beneficiary
        </button>
      </div>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search Beneficiary..."
        />

        <select>
          <option>All Mandals</option>
          <option>Kandukur</option>
          <option>Gudluru</option>
          <option>Ulavapadu</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
        </select>
      </div>

      <table className="cmrf-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Relation</th>
            <th>Amount</th>
            <th>Village</th>
            <th>Mandal</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cmrfData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.relation}</td>
              <td className="amount">
                {item.amount}
              </td>
              <td>{item.village}</td>
              <td>{item.mandal}</td>
              <td>{item.date}</td>

              <td>
                <span
                  className={`status ${
                    item.status === "Approved"
                      ? "approved"
                      : "pending"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="d-flex space-between">
                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CMRFTable;