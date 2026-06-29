import React from "react";
import '../styles/Contact.css';
import tdplogo from '../essets/tdplogo.png';
import Footer from "./Footer";
import { useState } from 'react';
const Contact = () => {

    const data = {
        Lingasamudram: ["Anneboinapalle", "Cheemalapenta", "Chinapavani", "Gangapalem", "Jagamreddi Khandrika", "Lingasamudram", "Mala Konda Rayunipalem", "Mogilicherla", "Mukteswaram", "Mutyalapadu", "Narasimhapuram", "Pentrala", "Racheruvurajupalem", "Rallapadu", "Thimmareddy Palem", "Thunugunta", "Thurpurajupalem", "Veera Raghavuni Kota", "Vengalapuram", "Viswanadhapuram"],
        Ulavapadu: ["Chinakothapalle", "Chinnapavani", "Gundlapalle", "Kamepalle", "Karedu", "Kothapeta", "Maddulapadu", "Pothukandla", "Rajupalem", "Ramayapatnam", "Singarayakonda Agraharam", "Ulavapadu"],
        Voletivaripalem: ["Ayyavaripalle", "Chundi", "East Polineni Palem", "Kakutur", "Kalavalla", "Kondareddipalem", "Kondasamudram", "Naladalapur", "Nawabpalem", "Nekunam Puram K. Kandrika", "Nekunampuram @ Pokur", "Nukavaram", "Polineni Cheruvu", "Ramachandrapuram", "Ramalingapuram", "Sakhavaram", "Sameerapalem", "Singamnenipalle", "Veeranna Palem", "Voletivaripalem", "Z. Uppalapadu"],
        Gudluru: ["Ammavari Palem", "Basireddy Palem", "Chevuru", "Chinala Trapi", "Dappalampadu", "Darakanipadu", "Gudluru", "Gundlapalem", "Kothapeta", "Mocherla", "Nayudupalem", "Parakonda Paduagraharam", "Parakondapadu", "Potluru", "Puretipalle", "Ravur", "Swarnajipuram", "Venkam Peta"],
        Kandukur: ["Chejarla", "Chintalapalem", "Devarampadu", "Gottipadia", "Gudluru", "Kandukur (Rural)", "Konakanchi", "Mopadu", "Musunuru", "Ranganayakulu", "Vengannapalem"]
    }

    const [selectedmandal, setSelectedMandal] = useState("");
    const [selectedVillage, setSelectedVillage] = useState("");
    const [villages, setVillages] = useState([]);
    const handleMandalChange = (e) => {

        const mandal = e.target.value;

        setSelectedMandal(mandal);

        setVillages(data[mandal] || []);
    };

    const handleVillageChange = (e) => {
        setSelectedVillage(e.target.value);
    };

    return (
        <>
            <div className="contact-section">
                <img src={tdplogo} alt="tdplogo" className="bg-image" />
                <h1 className="text-center">Contact Us</h1>
                <form class="row g-3">
                    <div class="col-md-6">
                        <div class="card-body">
                            <h3 class="card-title">OUR CAMP OFFICE</h3>
                            <p class="card-text"><strong>Address:- </strong> INR camp office Pamuru Road Santhosh Nagar</p>
                            <p class="card-text"><strong>OPP:- </strong> Lakshmi Tirumala Kalyana Mandapam</p>
                            <p class="card-text"><strong>MANDAL:- </strong> KANDUKUR</p>
                            <p class="card-text"><strong>DISTRICT:- </strong> PRAKASAM </p>
                            <p class="card-text"><strong>STATE:-  </strong> ANDHRA PRADESH</p>
                            <p class="card-text"><strong>PIN CODE:-  </strong> 523105</p>
                            <p class="card-text"><strong>E-MAIL:-  </strong> inrforkandukuru@gmail.com</p>
                            <p class="card-text"><strong>PHONE NUMBER:-  </strong> 9849999999</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-6">
                                <label for="inputvoterid" class="form-label">Voter-ID</label>
                                <input type="text" class="form-control" id="inputvoterid" placeholder="Enter your voter ID" />
                            </div>
                            <h4>OR</h4>
                        <div className="row g-3">
                            <div class="  col-md-6">
                                <label for="inputname" class="form-label" >Name <strong className="text-danger">  *</strong></label>
                                <input type="text" class="form-control" id="inputname" placeholder="Enter your name" />
                            </div>
                            <div class="  col-md-6">
                                <label for="inputname" class="form-label" >Photo <strong className="text-danger">  *</strong></label>
                                <input type="file" class="form-control" id="inputname" placeholder="Upload your photo" />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div class="col-md-6">
                                <label for="inputnumber" class="form-label">Phone Number<strong className="text-danger">  *</strong></label>
                                <input type="tel" class="form-control" id="inputnumber" placeholder="Enter your phone number" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputmandal" class="form-label">Mandal<strong className="text-danger">  *</strong></label>
                                <select className="form-select" aria-label="Default select example" value={selectedmandal} onChange={handleMandalChange}>
                                    <option defaultValue>choose mandal</option>
                                    {Object.keys(data).map((mandal, index) => (
                                        <option key={index} value={mandal}>
                                            {mandal}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div class="col-md-6">
                                <label for="inputvillage" class="form-label">Village<strong className="text-danger">  *</strong></label>
                                <select className="form-select mb-3" aria-label="Default select example" value={selectedVillage} onChange={handleVillageChange} required>
                                    <option defaultValue>choose village</option>
                                    {villages.map((village, index) => (
                                        <option key={index} value={village}>
                                            {village}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputsubject" class="form-label">Subject<strong className="text-danger">  *</strong></label>
                                <input type="text" class="form-control" id="inputsubject" placeholder="Enter the subject" />
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="inputmessage" class="form-label">Message<strong className="text-danger">  *</strong></label>
                            <textarea class="form-control" id="inputmessage" rows="3" placeholder="Enter your message"></textarea>
                        </div>
                        <div className="button-center">
                            <button className="sub-button" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
                <hr className="custom-line" />

                <div class="card mb-3 mt-3" style={{ background: 'none', border: 'none' }} >
                    <div class="row g-0">
                        <div class="col-md-12">
                            <h3 class="card-title">GOOGLE MAP</h3>
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=INR%20TDP%20OFFICE%20KANDUKUR&t=k&z=20&output=embed"
                                style={{ width: "100%", height: "70vh", border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact