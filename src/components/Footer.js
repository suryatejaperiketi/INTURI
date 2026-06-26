import React from "react";
import "../styles/Footer.css";
import footercbn from "../essets/footercbn.png";
import footerlogo from "../essets/footerlogo.png";

import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  
  return (
    <div className="main-cont">
      
      {/* Left Side */}
      <div className="footer-left">
        <img className="cbnpic" src={footercbn} alt="FooterPicture" />
        <img className="foot-logo" src={footerlogo} alt="FooterLogo" />
      </div>

      {/* Right Side */}
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/iNRKandukuru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook className="f-icon" />
        </a>

        <a
          href="https://x.com/inrKandukuru?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareTwitter className="f-icon" />
        </a>

        <a
          href="https://www.instagram.com/inturi_nageswararao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="f-icon" />
        </a>

        <a
          href="https://www.youtube.com/@INTURINAGESWARARAO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoYoutube className="f-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;