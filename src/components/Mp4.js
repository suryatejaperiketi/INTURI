import React from 'react'
import "../styles/Mp4.css";


function Mp4() {
     const allVideos = [
    "https://www.youtube.com/embed/hZRp4_IXkcg?si=g7aEalWXEuNYitn2",
    "https://www.youtube.com/embed/JJGD1ABTLHE?si=lWBRnm1_YMKKcgc3",
    "https://www.youtube.com/embed/vMg-c3U2HSo?si=Ejax2KUCEnMjKAoT",
    "https://www.youtube.com/embed/3f0x8aC9ayA?si=s0uuWsMs5hBsAmgf",
    "https://www.youtube.com/embed/Q7Tkdro3Bg4?si=GVY5KZ4QKVEnxMR7",
    "https://www.youtube.com/embed/xaXd-Z9op14?si=oshBqatFEXOaYC2P"
  ];


  return (
    <section className='video-gallery-section'>
         <div className="vedio-gall-heading">Video Gallery</div>
        
  <div className='video-container'>
        <div className='vedios-grid'>

          {allVideos.map((video, index) => (
            <div className='videos' key={index}>
             <iframe
                src={video}
                title={`Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}

        </div>
      </div>
      <br/>
    </section>
  )
}

export default Mp4