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
  { image: l14, caption: "Political Leaders Meeting" },
  { image: l15, caption: "Leadership Gathering" },
  { image: l1, caption: "Meeting with Political Leader" },
  { image: l2, caption: "Public Interaction" },
  { image: l3, caption: "Honoring a Leader" },
  { image: l4, caption: "Community Leaders Event" },
  { image: l5, caption: "Political Discussion" },
  { image: l6, caption: "Leadership Conference" },
  { image: l7, caption: "Special Guest Meeting" },
  { image: l8, caption: "Political Program" },
  { image: l9, caption: "Public Relations Event" },
  { image: l10, caption: "Leadership Recognition" },
  { image: l11, caption: "Political Gathering" },
  { image: l12, caption: "Community Outreach" },
  { image: l13, caption: "Leaders Interaction" },
];
    return (
        <>
            <div className="gallery-container">

                {leaders.map((leader, index) => (

                    <div className="gallery-item" key={index}>

                        <img
                            src={leader.image}
                            alt={`gallery-${index}`}
                            className="gallery-image"
                        />
                         <figcaption className="fig-cap">{leader.caption}</figcaption>

                    </div>

                ))}

            </div>
        </>
    )
}
export default Leaders