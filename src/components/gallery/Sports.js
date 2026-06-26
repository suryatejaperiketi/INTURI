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
        sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11, sp12, sp13, sp14, sp15
    ]
    return (
        <div className="gallery-container">

            {Sport.map((sport, index) => (

                <div className="gallery-item" key={index}>

                    <img
                        src={sport}
                        alt={`gallery-${index}`}
                        className="gallery-image"
                    />

                </div>

            ))}

        </div>
    )
}
export default Sports