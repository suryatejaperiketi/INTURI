import React from "react";
import vd1 from '../../essets/vdn1.png';
import vd2 from '../../essets/vdnn2.png';
import vd3 from '../../essets/vdnn3.png';
import vd4 from '../../essets/vdn4.png';
import vd5 from '../../essets/vdn5.png';
import vd6 from '../../essets/vdnn6.png';
import vd7 from '../../essets/vdn7.png';
import vd8 from '../../essets/vdn8.png';
import vd9 from '../../essets/vd9.png';
import vdn9 from '../../essets/vdn9.png';
import vd11 from '../../essets/vdn11.png';
import vd12 from '../../essets/vdn12.png';
import vd13 from '../../essets/vdn13.png';
import vd14 from '../../essets/vdn14.png';
import vd15 from '../../essets/vdn15.png';
const Videos = () => {
    const video = [
        { img: vd1, link: 'https://www.youtube.com/watch?v=i3n4uTxi8Sk' },
        { img: vd2, link: 'https://www.youtube.com/watch?v=G0axauFJmVc' },
        { img: vd3, link: 'https://www.youtube.com/watch?v=R2N787ZPGBY' },
        { img: vd4, link: 'https://www.youtube.com/watch?v=LG9dJq9NOW0' },
        { img: vd5, link: 'https://www.youtube.com/watch?v=ZmrCMyZTpgo' },
        { img: vd6, link: 'https://www.youtube.com/watch?v=KiaLrGXdOB8' },
        { img: vd7, link: 'https://www.youtube.com/watch?v=HNKYTcgphfc' },
        { img: vd8, link: 'https://www.youtube.com/watch?v=02dj6OYPbcA' },
        { img: vd9, link: 'https://www.youtube.com/watch?v=ZyHHd5UgGgk' },
        { img: vdn9, link: 'https://www.youtube.com/watch?v=u9hRbU8r4D8' },
        { img: vd11, link: 'https://www.youtube.com/watch?v=qu2b_wkSP2M' },
        { img: vd12, link: 'https://www.youtube.com/watch?v=h9L61GfWpUk' },
        { img: vd13, link: 'https://www.youtube.com/watch?v=bINdrsTtWo0' },
        { img: vd14, link: 'https://www.youtube.com/watch?v=i5brPz8vUPA' },
        { img: vd15, link: 'https://www.youtube.com/watch?v=ONHOYkAM4v4' }
    ]
    return (
        <>
            <div className='photo-main-section'>
                <h1 className=" text-center" style={{ color: "#FFD129" }}>VIDEO GALLERY</h1>
                <div class="container ">
                    <div class="row g-3">
                        {video.map((video, index) => (
                            <div className="col-lg-3 col-md-4 col-12" key={index}>
                                <a href={video.link} target="_blank" rel="noopener noreferrer">
                                    <div className="image-bord">
                                        <img
                                            src={video.img}
                                            alt={`gallery-${index}`}
                                            className="img-fluid image-video"
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Videos