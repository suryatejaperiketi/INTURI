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
        { image: o1, caption: "Other Event 1" },
        { image: o2, caption: "Other Event 2" },
        { image: o3, caption: "Other Event 3" },
        { image: o4, caption: "Other Event 4" },
        { image: o5, caption: "Other Event 5" },
        { image: o6, caption: "Other Event 6" },
        { image: o7, caption: "Other Event 7" },
        { image: o8, caption: "Other Event 8" },
        { image: o9, caption: "Other Event 9" },
        { image: o10, caption: "Other Event 10" },
        { image: o11, caption: "Other Event 11" },
        { image: o12, caption: "Other Event 12" },
        { image: o13, caption: "Other Event 13" },
        { image: o14, caption: "Other Event 14" },
        { image: o15, caption: "Other Event 15" }
    ]
    return(
         <div className="gallery-container">

    {other.map((other, index) => (

       <figure className="gallery-item" key={index}>
          <img
            src={other.image}
            alt={other.caption}
            className="gallery-image"
          />
          <figcaption className="fig-cap">{other.caption}</figcaption>
        </figure>

    ))}

</div>
    )
}
export default Others