import React from "react";
import banner1img from "../essets/pic1.png";
import banner2img from "../essets/pic2.png";
import banner3img  from "../essets/pic3.png";
import "../styles/Home.css";


const Home = () => {
    return (
        <section className="hero-section">
  
   <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1img} className="d-block w-100" alt="Banner Img1"/>
    </div>
    <div className="carousel-item">
      <img src={banner2img} className="d-block w-100" alt="Banner Img2"/>
    </div>
    <div className="carousel-item">
      <img src={banner3img} className="d-block w-100" alt="Banner Img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className='overlay'></div>
   
    </section>
    );
};

export default Home;