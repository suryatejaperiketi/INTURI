import React from "react";
import '../../styles/Leaders.css';
import e1 from '../../essets/e1.png';
import e2 from '../../essets/e2.png';
import e3 from '../../essets/e3.png';
import e4 from '../../essets/e4.png';
import e5 from '../../essets/e5.png';
import e6 from '../../essets/e6.png';
import e7 from '../../essets/e7.png';
import e8 from '../../essets/e8.png';
import e9 from '../../essets/e9.png';
import e10 from '../../essets/e10.png';
import e11 from '../../essets/e11.png';
import e12 from '../../essets/e12.png';
import e13 from '../../essets/e13.png';
import e14 from '../../essets/e14.png';
import e15 from '../../essets/e15.png';

const Events=()=>{
    const events=[
        e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15
    ]
    return(
       <>
       <div className="gallery-container">

    {events.map((event, index) => (

        <div className="gallery-item" key={index}>

            <img
                src={event}
                alt={`gallery-${index}`}
                className="gallery-image"
            />

        </div>

    ))}

</div>
       </>
    )
}
export default Events