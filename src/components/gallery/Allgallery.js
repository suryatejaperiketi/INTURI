import React from "react";

import a1 from "../../essets/a1.png";
import a2 from "../../essets/a2.png";
import a3 from "../../essets/a3.png";
import a4 from "../../essets/a4.png";
import a5 from "../../essets/a5.png";
import a6 from "../../essets/a6.png";
import a7 from "../../essets/a7.png";
import a8 from "../../essets/a8.png";
import a9 from "../../essets/a9.png";
import a10 from "../../essets/a10.png";
import a11 from "../../essets/a11.png";
import a12 from "../../essets/a12.png";
import a13 from "../../essets/ppl1.jpeg";
import a14 from "../../essets/ppl2.jpeg";

const Allgallery = () => {
  const photos = [
    { image: a13, caption: "People Meeting" },
    { image: a14, caption: "Community Event" },
    { image: a1, caption: "Gallery Image 1" },
    { image: a2, caption: "Gallery Image 2" },
    { image: a3, caption: "Gallery Image 3" },
    { image: a4, caption: "Gallery Image 4" },
    { image: a5, caption: "Gallery Image 5" },
    { image: a6, caption: "Gallery Image 6" },
    { image: a7, caption: "Gallery Image 7" },
    { image: a8, caption: "Gallery Image 8" },
    { image: a9, caption: "Gallery Image 9" },
    { image: a10, caption: "Gallery Image 10" },
    { image: a11, caption: "Gallery Image 11" },
    { image: a12, caption: "Gallery Image 12" },
  ];

  return (
    <div className="gallery-container">
      {photos.map((photo, index) => (
        <figure className="gallery-item" key={index}>
          <img
            src={photo.image}
            alt={photo.caption}
            className="gallery-image"
          />
          <figcaption className="fig-cap">{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Allgallery;