import React from "react";
import o1 from '../../essets/o1.png';
import o2 from '../../essets/o2.png';
import o3 from '../../essets/o3.png';
import o4 from '../../essets/o4.png';
import o5 from '../../essets/o5.png';
import o6 from '../../essets/o6.png';
import o7 from '../../essets/o7.png';
import o8 from '../../essets/o8.png';
import o9 from '../../essets/o9.png';
import o10 from '../../essets/o10.png';
import o11 from '../../essets/o11.png';
import o12 from '../../essets/o12.png';
import o13 from '../../essets/o13.png';
import o14 from '../../essets/o14.png';
import o15 from '../../essets/o15.png';
const Others =()=>{
    const other=[
        o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14,o15
    ]
    return(
         <div className="gallery-container">

    {other.map((other, index) => (

        <div className="gallery-item" key={index}>

            <img
                src={other}
                alt={`gallery-${index}`}
                className="gallery-image"
            />

        </div>

    ))}

</div>
    )
}
export default Others