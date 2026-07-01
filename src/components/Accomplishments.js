import React from "react";
import accomp from "../essets/accomp.png";
import "../styles/Accomplishments.css";
import im1 from "../essets/sch1.png";
import im2 from "../essets/sc2.png";
import im3 from "../essets/sc3.png";
import im4 from "../essets/sc4.png";
import im5 from "../essets/sc5.png";
import im6 from "../essets/sc6.png";
import Footer from "./Footer";


const Accomplishments = () => {
    const data = [
        {
            image: im1,
            text: "Provides ₹1, 500 per month as financial assistance to eligible women.Empowers women by supporting their household and personal expenses."
        },
        {
            image: im2,
            text: "Provides ₹3,000 per month as financial support to eligible unemployed youth. Helps young job seekers meet expenses while pursuing employment opportunities."
        },
        {
            image: im3,
            text: "Provides ₹15,000 per year to support the education of every eligible school-going child. Helps families meet educational expenses and encourages continued learning."
        },
        {
            image: im4,
            text: "Provides ₹20,000 annual financial assistance to eligible farmers for agricultural investment and support.Enhances farm productivity and strengthens the livelihoods of farming families."
        },
        {
            image: im5,
            text: "Provides three free LPG gas cylinders every year to eligible households.Reduces the financial burden on families and promotes clean cooking fuel usage."
        },
        {
            image: im6,
            text: "Provides free bus travel for women across Andhra Pradesh in APSRTC buses. Enhances mobility, reduces travel expenses, and supports women's empowerment."
        },

    ]
    return (
        <>
            <div className="main-cont-accomp">
                <div class="card text-bg-dark">
                    <img src={accomp} class="card-img" alt="Accomplishment" />
                    <div class="card-img-overlay">
                        <h3 class="card-title text-center acc-heading" style={{ color: "black" }}>ACCOMPLISHMENT</h3>
                    </div>
                </div>
                <div className="row p-4">
                    {data.map((item, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-12 mb-4"
                            key={index}
                        >
                            <div className="card card-accomp-container">
                                <img
                                    src={item.image}
                                    className="card-img-top mx-auto d-block"
                                    alt={item.text}
                                />

                                <div className="card-body">
                                    <p className="card-text">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Accomplishments;