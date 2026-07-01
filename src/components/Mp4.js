import React from "react";
import "../styles/Mp4.css";
import { FaYoutube } from "react-icons/fa";

import thumb1 from "../essets/crowdpic.webp"
import thumb2 from "../essets/pulsepic.webp";
import thumb3 from "../essets/about2.png";
import thumb4 from "../essets/pic2.png";
import thumb5 from "../essets/issuepic 2.png";
import thumb6 from "../essets/crowdpic.png";

function Mp4() {
  const allVideos = [
    {
      youtube: "https://www.youtube.com/watch?v=hZRp4_IXkcg",
      thumbnail: thumb1,
      title: "Video 1",
    },
    {
      youtube: "https://www.youtube.com/watch?v=JJGD1ABTLHE",
      thumbnail: thumb2,
      title: "Video 2",
    },
    {
      youtube: "https://www.youtube.com/watch?v=vMg-c3U2HSo",
      thumbnail: thumb3,
      title: "Video 3",
    },
    {
      youtube: "https://www.youtube.com/watch?v=3f0x8aC9ayA",
      thumbnail: thumb4,
      title: "Video 4",
    },
    {
      youtube: "https://www.youtube.com/watch?v=Q7Tkdro3Bg4",
      thumbnail: thumb5,
      title: "Video 5",
    },
    {
      youtube: "https://www.youtube.com/watch?v=xaXd-Z9op14",
      thumbnail: thumb6,
      title: "Video 6",
    },
  ];

  return (
    <section className="video-gallery-section">
      <div className="video-container">
        <h2 className="vedio-gall-heading">Video Gallery</h2>

        <div className="vedios-grid">
          {allVideos.map((video, index) => (
            <a
              key={index}
              href={video.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
            >
              <div className="thumbnail-wrapper">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="video-thumbnail"
                />

                <div className="play-button">
                  <FaYoutube />
                </div>
              </div>

              <h4>{video.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mp4;