import React from "react";
import '../../styles/Leaders.css';
import l1 from '../../essets/lokesh.png';
import l2 from '../../essets/l2.png';
import l3 from '../../essets/l3.png';
import l4 from '../../essets/l4.png';
import l5 from '../../essets/l5.png';
import l6 from '../../essets/l6.png';
import l7 from '../../essets/l7.png';
import l8 from '../../essets/l8.png';
import l9 from '../../essets/l9.png';
import l10 from '../../essets/l10.png';
import l11 from '../../essets/l11.png';
import l12 from '../../essets/l12.png';
import l13 from '../../essets/l13.png';
import l14 from '../../essets/ppl3.jpeg';
import l15 from '../../essets/ppl4.jpeg';

const Leaders = () => {
    const leaders = [
        l14, l15, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13
    ]
    return (
        <>
            <div className="gallery-container">

                {leaders.map((leader, index) => (

                    <div className="gallery-item" key={index}>

                        <img
                            src={leader}
                            alt={`gallery-${index}`}
                            className="gallery-image"
                        />

                    </div>

                ))}

            </div>
        </>
    )
}
export default Leaders