import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import AdPopup from "../components/AdPopup";

function PublicLayout() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <AdPopup onClose={() => setShowPopup(false)} />
      )}

      <div className="navbar-main">
        <Navbar />
      </div>

      <div className="land-section">
        <Outlet />
      </div>

      {/* Footer Component Here Later */}
    </>
  );
}

export default PublicLayout;