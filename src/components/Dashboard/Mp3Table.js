import React from "react";
import "../../styles/Mp3Table.css";
import { useNavigate } from "react-router-dom";

function Mp3Table() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mp3-table-container">
        <div className="table-header">
          <h2>MP3 Songs</h2>

          <button className="add-btn" onClick={()=>navigate("/dashboard/mp3-form")}>+ Add MP3 Song</button>
        </div>

        <table className="mp3-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Song Title</th>
              <th>File Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Campaign Song 1</td>
              <td>song1.mp3</td>
              <td>20-07-2026</td>

              <td>
                <button className="edit-btn">Edit</button>

                <button className="delete-btn">Delete</button>
              </td>
            </tr>
             <tr>
              <td>2</td>
              <td>Campaign Song 2</td>
              <td>song2.mp3</td>
              <td>22-05-2026</td>

              <td>
                <button className="edit-btn">Edit</button>

                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>

          
        </table>
      </div>
    </div>
  );
}

export default Mp3Table;
