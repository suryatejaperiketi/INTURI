import React from "react";
import "../../styles/BeneficiariesTable.css";
import { useNavigate } from "react-router-dom";

function BeneficiariesTable() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="scheme-table-wrapper">
  <div className="table-header">
    <h3>Scheme List</h3>

    <button className="add-btn" onClick={()=>navigate("/dashboard/beneficiaries-form")}>
      + Add Scheme
    </button>
  </div>

  <table className="scheme-table">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Scheme Name</th>
        <th>Description</th>
        <th>Launch Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>1</td>
        <td>Three Shakthi</td>
        <td>Free Bus Travel For Women</td>
        <td>15-08-2025</td>

        <td>
          <span className="status-active">
            Active
          </span>
        </td>

        <td>
          <button className="edit-btn">
            Edit
          </button>

          <button className="delete-btn">
            Delete
          </button>
        </td>
      </tr>

      <tr>
        <td>2</td>
        <td>Deepam 2.0</td>
        <td>Free LPG Gas Cylinders</td>
        <td>10-07-2025</td>

        <td>
          <span className="status-active">
            Active
          </span>
        </td>

        <td>
          <button className="edit-btn">
            Edit
          </button>

          <button className="delete-btn">
            Delete
          </button>
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td>Aadabidda Nedhi</td>
        <td>Ladies Financial Support</td>
        <td>-----------</td>

        <td>
          <span className="status-upcoming">
            Upcoming
          </span>
        </td>

        <td>
          <button className="edit-btn">
            Edit
          </button>

          <button className="delete-btn">
            Delete
          </button>
        </td>
      </tr>

    </tbody>
  </table>
</div>
    </div>
  );
}

export default BeneficiariesTable;
