import React from "react";
import sp1 from '../../essets/sp1.png';
import sp2 from '../../essets/sp2.png';
import sp3 from '../../essets/sp3.png';
import sp4 from '../../essets/sp4.png';
import sp5 from '../../essets/sp5.png';
import sp6 from '../../essets/sp6.png';
import sp7 from '../../essets/sp7.png';
import sp8 from '../../essets/sp8.png';
import sp9 from '../../essets/sp9.png';
import sp10 from '../../essets/sp10.png';
import sp11 from '../../essets/sp11.png';
import sp12 from '../../essets/sp12.png';
import sp13 from '../../essets/sp13.png';
import sp14 from '../../essets/sp14.png';
import sp15 from '../../essets/sp15.png';
const Sports = () => {
    const Sport = [
        { image: sp1, caption: "Sports Event 1" },
        { image: sp2, caption: "Sports Event 2" },
        { image: sp3, caption: "Sports Event 3" },
        { image: sp4, caption: "Sports Event 4" },
        { image: sp5, caption: "Sports Event 5" },
        { image: sp6, caption: "Sports Event 6" },
        { image: sp7, caption: "Sports Event 7" },
        { image: sp8, caption: "Sports Event 8" },
        { image: sp9, caption: "Sports Event 9" },
        { image: sp10, caption: "Sports Event 10" },
        { image: sp11, caption: "Sports Event 11" },
        { image: sp12, caption: "Sports Event 12" },
        { image: sp13, caption: "Sports Event 13" },
        { image: sp14, caption: "Sports Event 14" },
        { image: sp15, caption: "Sports Event 15" }
    ];
    return (
        <div className="gallery-container">

            {Sport.map((sport, index) => (
       <figure className="gallery-item" key={index}>
          <img
            src={sport.image}
            alt={sport.caption}
            className="gallery-image"
          />
          <figcaption className="fig-cap">{sport.caption}</figcaption>
        </figure>
                

            ))}

        </div>
    )
}
export default Sports