import React from "react";
import "../../styles/Mp3Table.css";
import { useNavigate } from "react-router-dom";

function Mp4Table() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mp3-table-container">
        <div className="table-header">
          <h2>Video Gallery</h2>

          <button
            className="add-btn"
            onClick={() => navigate("/dashboard/mp4-form")}
          >
            + Add Video
          </button>
        </div>

        <table className="mp3-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Video Title</th>
              <th>YouTube Link</th>
              <th>Status</th>
              <th>Date</th>
              <th width="180">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="p-3">
              <td>1</td>
              <td>Development Works in Kandukur</td>

              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/embed/abc123",
                      "_blank",
                    )
                  }
                >
                  View Video
                </button>
              </td>

              <td>
                <span className="badge bg-success">Active</span>
              </td>

              <td>20-07-2026</td>

              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-success btn-sm">Edit</button>

                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Kandukur Development Works</td>

              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/embed/xyz456",
                      "_blank",
                    )
                  }
                >
                  View Video
                </button>
              </td>

              <td>
                <span className="badge bg-success">Active</span>
              </td>

              <td>22-07-2026</td>

              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-success btn-sm">Edit</button>

                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mp4Table;
