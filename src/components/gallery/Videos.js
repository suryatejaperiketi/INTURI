import React from "react";
import "../../styles/Mp4.css";
const Videos = () => {
  const video = [
    {
      link: "https://www.youtube.com/embed/i3n4uTxi8Sk?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
    {
      
      link: "https://www.youtube.com/embed/G0axauFJmVc?si=23l81cc4ETnpioFm",
      title: "Kandukur Development Works",
    },
    {
    
      link: "https://www.youtube.com/embed/R2N787ZPGBY?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
    {
      
      link: "https://www.youtube.com/embed/LG9dJq9NOW0?si=23l81cc4ETnpioFm",
      title: "Kandukur Development Works",
    },
    {
     
      link: "https://www.youtube.com/embed/ZmrCMyZTpgo?si=UkxGhQ1SZnRrMEeO",
      title: "Development Works in Kandukur",
    },
    {
     
      link: "https://www.youtube.com/embed/KiaLrGXdOB8?si=23l81cc4ETnpioFm",
      title: "Kandukur Development Works",
    },
    {
     
      link: "https://www.youtube.com/embed/HNKYTcgphfc?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
    {
    
      link: "https://www.youtube.com/embed/02dj6OYPbcA?si=3orEuIFlVYjcejsE",
      title: "Kandukur Development Works",
    },
    {
    
      link: "https://www.youtube.com/embed/ZyHHd5UgGgk?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
    {
    
      link: "https://www.youtube.com/embed/u9hRbU8r4D8?si=23l81cc4ETnpioFm",
      title: "Kandukur Development Works",
    },
    {
     
      link: "https://www.youtube.com/embed/qu2b_wkSP2M?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
    {
   
      link: "https://www.youtube.com/embed/h9L61GfWpUk?si=23l81cc4ETnpioFm",
      title: "Kandukur Development Works",
    },
    {
     
      link: "https://www.youtube.com/embed/bINdrsTtWo0?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
    {
      
      link: "https://www.youtube.com/embed/i5brPz8vUPA?si=23l81cc4ETnpioFm",
      title: "Kandukur Development Works",
    },
    {
     
      link: "https://www.youtube.com/embed/ONHOYkAM4v4?si=23l81cc4ETnpioFm",
      title: "Development Works in Kandukur",
    },
  ];
  return (
    <>
      <section className="video-gallery-section">
        <div className="video-container">
          <h1 className=" text-center" style={{ color: "#FFD129" }}>
            VIDEO GALLERY
          </h1>

          <div className="vedios-grid">
            {video.map((video, index) => (
              <div className="video-card" key={index}>
                <div className="videos">
                  <iframe
                    src={video.link}
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
    </>
  );
};
export default Videos;
