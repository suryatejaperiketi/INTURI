import React from "react";
import "../../styles/Mp3Form.css";

function Mp4Form() {
  return (
    <div>
   <div className="d-flex justify-content-between align-items-center mb-3">
      <h2>Add MP4 Video</h2> 
      <button className="back-btn" onClick={() => window.history.back()}>Back</button>   
   </div>
       
      <form className="mp4-form">
        <div className="form-group">
          <label>Video Title</label>
          <input type="text" placeholder="Enter Video Title" />
        </div>

        <div className="form-group">
          <label>YouTube Embed URL</label>
          <input type="url" accept=".mp4,video/*" placeholder="https://www.youtube.com/embed/VIDEO_ID"/>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea rows="4" placeholder="Optional Description"></textarea>
        </div>

        <button className="sub-btn">Submit MP4 Video</button>
      </form>
    </div>
  );
}

export default Mp4Form;
