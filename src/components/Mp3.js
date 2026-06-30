import React, { useRef } from "react";
import "../styles/Mp3.css";
import audio1 from "../essets/Kadali-Randi-Telugu-Desa-Karyakarthalara.mp3";
import audio2 from "../essets/పానకాల-నారసింహుడే-సాంగ్.mp3";
import audio3 from "../essets/Nayakudaa-Nayakudaa-Mallee-Nuvve-Raavaali.mp3";

function Mp3() {
  const audioRefs = useRef([]);
  const songs = [
    {
      id: 1,
      title: "Campaign Song 1",
      audio: audio1,
    },
    {
      id: 2,
      title: "Campaign Song 2",
      audio: audio2,
    },
    {
      id: 3,
      title: "Campaign Song 3",
      audio: audio3,
    },
  ];
  const handlePlay = (currentIndex) => {
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== currentIndex) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  return (
    <section className="mp3-page">
      <div className="container">
        <h2 className="page-title">MP3 Songs</h2>

        <div className="song-grid">
          {songs.map((song, index) => (
            <div className="song-card" key={song.id}>
              <h4>{song.title}</h4>

              <audio
                controls
                ref={(el) => (audioRefs.current[index] = el)}
                onPlay={() => handlePlay(index)}
              >
                <source src={song.audio} type="audio/mpeg" />
              </audio>

              <a href={song.audio} download className="download-btn">
                Download MP3
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mp3;
