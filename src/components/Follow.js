import React from "react";
import youtube from "../essets/fyou.png"
import twitter from "../essets/fotwtt.png"
import facebook from "../essets/fface.png"
import instagram from "../essets/finsta.png"
import "../styles/Follow.css"
import { Link } from "react-router-dom";
const Follow = () => {
    return (
        <>
            <h1 className="hed-flow">Follow <strong style={{color:"#FFD129"}}> INTURI.</strong></h1>
            <div className="d-flex justify-content-around  flex-wrap follow-main">
                <div className=" follow-container">
                    <h5 className="text-center ">YOUTUBE</h5>
                    <Link to="https://www.youtube.com/@INTURINAGESWARARAO" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} className="card-img-top follow-image" alt="YouTube" /></Link>
                    
                </div>
                <div className=" follow-container">
                    <h5 className="text-center">TWITTER</h5>
                    <Link to="https://x.com/inrKandukuru?lang=en" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} className="card-img-top follow-image" alt="Twitter" /></Link>
                    
                </div>
                <div className=" follow-container">
                    <h5 className="text-center">FACEBOOK</h5>
                    <Link to="https://www.facebook.com/iNRKandukuru/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} className="card-img-top follow-image" alt="Facebook" /></Link>
                    
                </div>
                <div className=" follow-container">
                    <h5 className="text-center">INSTAGRAM</h5>
                    <Link to="https://www.instagram.com/inturi_nageswararao/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className="card-img-top follow-image" alt="Instagram" /></Link>
                    
                </div>
            </div>
            
        </>
    )
}
export default Follow




