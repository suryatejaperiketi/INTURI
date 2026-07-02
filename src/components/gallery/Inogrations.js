import React from "react";
import i1 from '../../essets/i1.png';
import i2 from '../../essets/i2.png';
import i3 from '../../essets/i3.png';
import i4 from '../../essets/i4.png';
import i5 from '../../essets/i5.png';
import i6 from '../../essets/i6.png';
import i7 from '../../essets/i7.png';
import i8 from '../../essets/i8.png';
import i9 from '../../essets/i9.png';
import i10 from '../../essets/i10.png';
import i11 from '../../essets/i11.png';
import i12 from '../../essets/i12.png';
import i13 from '../../essets/i13.png';
import i14 from '../../essets/i14.png';
import i15 from '../../essets/i15.png';

const Inogrations = () => {

    const inogration = [
        { image: i1, caption: "Inogrations Event 1" },
        { image: i2, caption: "Inogrations Event 2" },
        { image: i3, caption: "Inogrations Event 3" },
        { image: i4, caption: "Inogrations Event 4" },
        { image: i5, caption: "Inogrations Event 5" },
        { image: i6, caption: "Inogrations Event 6" },
        { image: i7, caption: "Inogrations Event 7" },
        { image: i8, caption: "Inogrations Event 8" },
        { image: i9, caption: "Inogrations Event 9" },
        { image: i10, caption: "Inogrations Event 10" },
        { image: i11, caption: "Inogrations Event 11" },
        { image: i12, caption: "Inogrations Event 12" },
        { image: i13, caption: "Inogrations Event 13" },
        { image: i14, caption: "Inogrations Event 14" },
        { image: i15, caption: "Inogrations Event 15" }
    ]

    return (
        <>
            <div className="gallery-container">

                {inogration.map((inogration, index) => (

         <figure className="gallery-item" key={index}>
          <img
            src={inogration.image}
            alt={inogration.caption}
            className="gallery-image"
          />
          <figcaption className="fig-cap">{inogration.caption}</figcaption>
        </figure>

                ))}

            </div>
        </>
    )
}
export default Inogrations