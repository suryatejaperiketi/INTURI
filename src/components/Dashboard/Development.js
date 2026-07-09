import React from "react";
import "../../styles/Development.css";
import {useNavigate} from "react-router-dom";

const Development = () => {
  const navigate = useNavigate();
  const developments = [
    {
      id: 1,
      title: "CC Road Construction",
      mandal: "Kandukur",
      category: "Road Works",
      status: "Completed",
      date: "20-05-2024",
    },
    {
      id: 2,
      title: "Drainage Work",
      mandal: "Gudluru",
      category: "Drainage",
      status: "Ongoing",
      date: "15-06-2024",
    },
    {
      id: 3,
      title: "Water Tank Construction",
      mandal: "Ulavapadu",
      category: "Water Project",
      status: "Completed",
      date: "10-07-2024",
    },
  ];

  return (
    <div className="development-list-page"> 

      <div className="page-header">
        <h2>Development Works</h2>

        <button className="add-btn" onClick={() => navigate("/dashboard/development-form")}>
        
          + Add Development Work
        </button>
      </div>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Development Work..."
        />

        <select>
          <option>All Categories</option>
          <option>Road Works</option>
          <option>Drainage</option>
          <option>Water Project</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Completed</option>
          <option>Ongoing</option>
          <option>Proposed</option>
        </select>

      </div>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Mandal</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {developments.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.mandal}</td>
                <td>{item.category}</td>

                <td>
                  <span
                    className={`status-badge ${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>{item.date}</td>

                <td>

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

    </div>
  );
};

export default Development;