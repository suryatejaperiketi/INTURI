import React from "react";

import e1 from "../../essets/e1.png";
import e2 from "../../essets/e2.png";
import e3 from "../../essets/e3.png";
import e4 from "../../essets/e4.png";
import e5 from "../../essets/e5.png";
import e6 from "../../essets/e6.png";
import e7 from "../../essets/e7.png";
import e8 from "../../essets/e8.png";
import e9 from "../../essets/e9.png";
import e10 from "../../essets/e10.png";
import e11 from "../../essets/e11.png";
import e12 from "../../essets/e12.png";
import e13 from "../../essets/e13.png";
import e14 from "../../essets/e14.png";
import e15 from "../../essets/e15.png";

const Events = () => {
  const events = [
    { image: e1, caption: "Event 1" },
    { image: e2, caption: "Event 2" },
    { image: e3, caption: "Event 3" },
    { image: e4, caption: "Event 4" },
    { image: e5, caption: "Event 5" },
    { image: e6, caption: "Event 6" },
    { image: e7, caption: "Event 7" },
    { image: e8, caption: "Event 8" },
    { image: e9, caption: "Event 9" },
    { image: e10, caption: "Event 10" },
    { image: e11, caption: "Event 11" },
    { image: e12, caption: "Event 12" },
    { image: e13, caption: "Event 13" },
    { image: e14, caption: "Event 14" },
    { image: e15, caption: "Event 15" },
  ];

  return (
    <div className="gallery-container">
      {events.map((event, index) => (
        <figure className="gallery-item" key={index}>
          <img
            src={event.image}
            alt={event.caption}
            className="gallery-image"
          />
          <figcaption className="fig-cap">{event.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Events;