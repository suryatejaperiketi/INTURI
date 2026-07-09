import React from "react";
import "../../styles/Mp3Form.css";

function Mp3Form() {
  return (
    <div>
   <div className="d-flex justify-content-between align-items-center mb-3">
      <h2>Add MP3 Song</h2> 
      <button className="back-btn-mp3" onClick={() => window.history.back()}>Back</button>   
   </div>
       
      <form className="mp3-form">
        <div className="form-group">
          <label>Song Title</label>
          <input type="text" placeholder="Enter Song Title" />
        </div>

        <div className="form-group">
          <label>Upload MP3</label>
          <input type="file" accept=".mp3,audio/*" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea rows="4" placeholder="Optional Description"></textarea>
        </div>

        <button className="sub-btn">Submit MP3 Song</button>
      </form>
    </div>
  );
}

export default Mp3Form;
