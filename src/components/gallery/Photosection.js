import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Photosection.css"




const   Photosection = () => {
    return (
        <>
            <div className='photo-main-section'>
                <h1 className=" text-center" style={{ color: "#FFD129" }}>PHOTO GALLERY</h1>
                <div>
                    <div className="category-navbar justify-content-between">
                        <NavLink to="/Photoslanding/" end className="category-btn sec-photo">
                            All
                        </NavLink>

                        <NavLink to="/Photoslanding/leaders" className="category-btn sec-photo">
                            With political leaders
                        </NavLink>

                        <NavLink to="/Photoslanding/events" className="category-btn sec-photo">
                            Government Events
                        </NavLink>

                       <NavLink to="/Photoslanding/spiritual" className="category-btn sec-photo">
                            Spiritual Side
                        </NavLink>

                        <NavLink to="/Photoslanding/inaugurations" className="category-btn sec-photo">
                            Inaugurations
                        </NavLink>
                        <NavLink to="/Photoslanding/sports" className="category-btn sec-photo">
                            Sports
                        </NavLink>

                        <NavLink to="/Photoslanding/others" className="category-btn">
                            Others
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Photosection