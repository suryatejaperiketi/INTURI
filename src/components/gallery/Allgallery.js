import React from "react";
import a1 from '../../essets/a1.png';
import a2 from '../../essets/a2.png';
import a3 from '../../essets/a3.png';
import a4 from '../../essets/a4.png';
import a5 from '../../essets/a5.png';
import a6 from '../../essets/a6.png';
import a7 from '../../essets/a7.png';
import a8 from '../../essets/a8.png';
import a9 from '../../essets/a9.png';
import a10 from '../../essets/a10.png';
import a11 from '../../essets/a11.png';
import a12 from '../../essets/a12.png';
import a13 from "../../essets/ppl1.jpeg";
import a14 from "../../essets/ppl2.jpeg";

const Allgallery = () => {

    const photos = [
        a13,
        a14,
        a1,
        a2,
        a3,
        a4,
        a5,
        a6,
        a7,
        a8,
        a9,
        a10,
        a11,
        a12,
    ]

    return (
        <>
            <div className="gallery-container">

                {photos.map((photo, index) => (

                    <div className="gallery-item" key={index}>

                        <img
                            src={photo}
                            alt={`gallery-${index}`}
                            className="gallery-image"
                        />

                    </div>

                ))}

            </div>
        </>
    )
}
export default Allgallery