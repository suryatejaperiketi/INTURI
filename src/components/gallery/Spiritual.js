import React from "react";
import s1 from '../../essets/s1.png';
import s2 from '../../essets/s2.png';
import s3 from '../../essets/s3.png';
import s4 from '../../essets/s4.png';
import s5 from '../../essets/s5.png';
import s6 from '../../essets/s6.png';
import s7 from '../../essets/s7.png';
import s8 from '../../essets/s8.png';
import s9 from '../../essets/s9.png';
import s10 from '../../essets/s10.png';
import s11 from '../../essets/s11.png';
import s12 from '../../essets/s12.png';
import s13 from '../../essets/s13.png';
import s14 from '../../essets/s14.png';
import s15 from '../../essets/s15.png';
const Spiritual = () => {
    const spiritual = [
        s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15
    ]
    return (
        <>
           <div className="gallery-container">

    {spiritual.map((spirit, index) => (

        <div className="gallery-item" key={index}>

            <img
                src={spirit}
                alt={`gallery-${index}`}
                className="gallery-image"
            />

        </div>

    ))}

</div>
        </>
    )
}
export default Spiritual