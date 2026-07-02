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
        { image: ps1, caption: "Press Event 1" },
        { image: ps2, caption: "Press Event 2" },
        { image: ps3, caption: "Press Event 3" },
        { image: ps4, caption: "Press Event 4" },
        { image: ps5, caption: "Press Event 5" },
        { image: ps6, caption: "Press Event 6" },
        { image: ps7, caption: "Press Event 7" },
        { image: ps8, caption: "Press Event 8" }
    ];
    
    return (
        <>
            <div className='photo-main-section'>
                <h1 className=" text-center" style={{ color: "#FFD129" }}>PRESS</h1>
                <div class="container ">
                    <div class="row g-3">
                        {press.map((press, index) => (
                            <div className="col-lg-3 col-md-4 col-12" key={index}>
                                <div className="image-bord">
                                    {/* <img
                                        src={press}
                                        alt={`gallery-${index}`}
                                        className="img-fluid  image-video"
                                    /> */}

          <figure key={index}>
          <img
            src={press.image}
            alt={press.caption}
            className="gallery-image"
          />
          <figcaption className="fig-cap">{press.caption}</figcaption>
        </figure>
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