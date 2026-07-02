import React from "react";
import "../../styles/Mp4.css";
import vd1 from "../../essets/vdn1.png";
import vd2 from "../../essets/vdnn2.png";
import vd3 from "../../essets/vdnn3.png";
import vd4 from "../../essets/vdn4.png";
import vd5 from "../../essets/vdn5.png";
import vd6 from "../../essets/vdnn6.png";
import vd7 from "../../essets/vdn7.png";
import vd8 from "../../essets/vdn8.png";
import vd9 from "../../essets/vd9.png";
import vdn9 from "../../essets/vdn9.png";
import vd11 from "../../essets/vdn11.png";
import vd12 from "../../essets/vdn12.png";
import vd13 from "../../essets/vdn13.png";
import vd14 from "../../essets/vdn14.png";
import vd15 from "../../essets/vdn15.png";
const Videos = () => {
  const video = [
    { img: vd1, link: "https://www.youtube.com/watch?v=i3n4uTxi8Sk",  title: "Development Works in Kandukur" },
    { img: vd2, link: "https://www.youtube.com/watch?v=G0axauFJmVc", title: "Kandukur Development Works" },
    { img: vd3, link: "https://www.youtube.com/watch?v=R2N787ZPGBY", title: "Development Works in Kandukur" },
    { img: vd4, link: "https://www.youtube.com/watch?v=LG9dJq9NOW0", title: "Kandukur Development Works" },
    { img: vd5, link: "https://www.youtube.com/watch?v=ZmrCMyZTpgo", title: "Development Works in Kandukur" },
    { img: vd6, link: "https://www.youtube.com/watch?v=KiaLrGXdOB8", title: "Kandukur Development Works" },
    { img: vd7, link: "https://www.youtube.com/watch?v=HNKYTcgphfc", title: "Development Works in Kandukur" },
    { img: vd8, link: "https://www.youtube.com/watch?v=02dj6OYPbcA", title: "Kandukur Development Works" },
    { img: vd9, link: "https://www.youtube.com/watch?v=ZyHHd5UgGgk", title: "Development Works in Kandukur" },
    { img: vdn9, link: "https://www.youtube.com/watch?v=u9hRbU8r4D8", title: "Kandukur Development Works" },
    { img: vd11, link: "https://www.youtube.com/watch?v=qu2b_wkSP2M", title: "Development Works in Kandukur" },
    { img: vd12, link: "https://www.youtube.com/watch?v=h9L61GfWpUk", title: "Kandukur Development Works" },
    { img: vd13, link: "https://www.youtube.com/watch?v=bINdrsTtWo0", title: "Development Works in Kandukur" },
    { img: vd14, link: "https://www.youtube.com/watch?v=i5brPz8vUPA", title: "Kandukur Development Works" },
    { img: vd15, link: "https://www.youtube.com/watch?v=ONHOYkAM4v4", title: "Development Works in Kandukur" },
  ];
  return (
    <>
      <div className="photo-main-section">
        <h1 className=" text-center" style={{ color: "#FFD129" }}>
          VIDEO GALLERY
        </h1>
        <div class="container ">
          <div class="row g-3">
            {video.map((video, index) => (
              <div className="col-lg-3 col-md-4 col-12" key={index}>
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  <figure className="video-card">
                    <div className="image-bord">
                      <img
                        src={video.img}
                        alt={`gallery-${index}`}
                        className="img-fluid image-video"
                      />
                    </div>

                    <figcaption className="video-caption">
                      {video.title}
                    </figcaption>
                  </figure>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Videos;
