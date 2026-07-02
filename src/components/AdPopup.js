import { useState, useEffect } from 'react';
import '../styles/AdPopup.css';
import candidateVideo from "../essets/mla-bday.mp4.mp4";
 
const AdPopup = ({ onClose }) => {
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);
 
  useEffect(() => {
    if (countdown === 0) {
      setCanClose(true);
      return;
    }
    const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);
 
  return (
    <div className="popup-overlay" onClick={canClose ? onClose : undefined}>
      <div className="popup-box" onClick={e => e.stopPropagation()}>
 
        {/* Close / Countdown button */}
        <button
          className={`popup-close ${canClose ? 'active' : 'disabled'}`}
          onClick={canClose ? onClose : undefined}
          title={canClose ? 'Close' : `Wait ${countdown}s`}
        >
          {canClose ? '✕' : countdown}
        </button>
 
        {/* ── TOP BANNER ── */}
        <div className="popup-banner">
          <div className="popup-banner-lights">
            {[...Array(14)].map((_, i) => (
              <span key={i} className="bulb" style={{ '--i': i }} />
            ))}
          </div>
          <p className="popup-banner-text"> Happy Birthday </p>
          <div className="popup-banner-lights">
            {[...Array(14)].map((_, i) => (
              <span key={i} className="bulb" style={{ '--i': i + 2 }} />
            ))}
          </div>
        </div>
 
        {/* ── CANDIDATE IMAGE ── */}
        <div className="popup-image-wrap">
      

   <video
  className="popup-candidate-img"
  controls
  playsInline
>
  <source src={candidateVideo} type="video/mp4" />
</video>
        </div>
 
        {/* ── NAME & DESIGNATION ── */}
        <div className="popup-content">
          <h2 className="popup-title">Sri. Inturi Nageswara Rao Garu</h2>
          <p className="popup-subtitle">MLA &nbsp;·&nbsp; Kandukuru Constituency</p>
          <div className="popup-divider">
            <span>✦</span><span>✦</span><span>✦</span>
          </div>
        </div>
 
      </div>
    </div>
  );
};
 
export default AdPopup;