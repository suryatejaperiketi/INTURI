import React from "react";
import ps1 from '../../essets/ps1.png';
import ps2 from '../../essets/ps2.png';
import ps3 from '../../essets/ps3.png';
import ps4 from '../../essets/ps4.png';
import ps5 from '../../essets/ps5.png';
import ps6 from '../../essets/ps6.png';
import ps7 from '../../essets/ps7.png';
import ps8 from '../../essets/ps8.png';

const Press = () => {
    const press = [
        ps1,ps2,ps3,ps4,ps5,ps6,ps7,ps8
    ]
    return (
        <>
            <div className='photo-main-section'>
                <h1 className=" text-center" style={{ color: "#FFD129" }}>PRESS</h1>
                <div class="container ">
                    <div class="row g-3">
                        {press.map((press, index) => (
                            <div className="col-lg-3 col-md-4 col-12" key={index}>
                                <div className="image-bord">
                                    <img
                                        src={press}
                                        alt={`gallery-${index}`}
                                        className="img-fluid  image-video"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Press