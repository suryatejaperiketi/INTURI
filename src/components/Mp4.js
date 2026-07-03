import React from "react";
import "../styles/Mp4.css";

function Mp4() {
  const allVideos = [
    {
      youtube: "https://www.youtube.com/embed/hZRp4_IXkcg?si=4poNLpsDmQT7Bpd1",
      title: "Video 1",
    },
    {
      youtube: "https://www.youtube.com/embed/JJGD1ABTLHE?si=kHldOj6I30Dn3gLa",
      title: "Video 2",
    },
    {
      youtube: "https://www.youtube.com/embed/vMg-c3U2HSo?si=X8yZJZJZJZJZJZJZ",
      title: "Video 3",
    },
    {
      youtube: "https://www.youtube.com/embed/3f0x8aC9ayA?si=...",
      title: "Video 4",
    },
    {
      youtube: "https://www.youtube.com/embed/Q7Tkdro3Bg4?si=...",
      title: "Video 5",
    },
    {
      youtube: "https://www.youtube.com/embed/xaXd-Z9op14?si=...",
      title: "Video 6",
    },
  ];

  return (
    <section className="video-gallery-section">
      <div className="video-container">
        <h2 className="vedio-gall-heading">Video Gallery</h2>

        <div className="vedios-grid">
          {allVideos.map((video, index) => (
            <div className="video-card" key={index}>
              <div className="videos">
                <iframe
                  src={video.youtube}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="ved-cap">{video.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mp4;
