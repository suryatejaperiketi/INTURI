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

        { image: s1, caption: "Spiritual Event 1" },
        { image: s2, caption: "Spiritual Event 2" },
        { image: s3, caption: "Spiritual Event 3" },
        { image: s4, caption: "Spiritual Event 4" },
        { image: s5, caption: "Spiritual Event 5" },
        { image: s6, caption: "Spiritual Event 6" },
        { image: s7, caption: "Spiritual Event 7" },
        { image: s8, caption: "Spiritual Event 8" },
        { image: s9, caption: "Spiritual Event 9" },
        { image: s10, caption: "Spiritual Event 10" },
        { image: s11, caption: "Spiritual Event 11" },
        { image: s12, caption: "Spiritual Event 12" },
        { image: s13, caption: "Spiritual Event 13" },
        { image: s14, caption: "Spiritual Event 14" },
        { image: s15, caption: "Spiritual Event 15" }
    ]
    return (
        <>
           <div className="gallery-container">

    {spiritual.map((spirit, index) => (


        <figure className="gallery-item" key={index}>
            <img src={spirit.image} alt={spirit.caption} className="gallery-image" />
            <figcaption className="fig-cap">{spirit.caption}</figcaption>
            
        </figure>

    ))}

</div>
        </>
    )
}
export default Spiritual