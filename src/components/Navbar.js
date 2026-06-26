import React, { useState, useEffect, useRef, useCallback } from "react";
import logo from "../essets/logo.png";
import "../styles/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const tdpWings = [
  "Telugu Yuvatha",
  "Telugu Mahila",
  "Telugu Rythu",
  "TNTUC",
  "BC Cell",
  "SC Cell",
  "ST Cell",
  "Minority Cell",
  "Christian Cell",
  "Legal Cell",
  "TNSF",
  "Trader Cell",
  "Cultural Cell",
  "Doctors Cell",
  "Vibhinna Prathibavantulu",
  "TPW",
  "ITDP",
  "Anganwadi",
];

const schemes = [
  {
    icon: "👩‍🎓",
    name: "Aadabidda Nidhi",
    path: "/aadabidda-nidhi",
    sub: "Women's Financial Aid",
    badge: "₹1,500 / month",
    cls: "sc1",
  },
  {
    icon: "🚌",
    name: "Sthree Shakthi",
    path: "/free-bus",
    sub: "Free Bus Travel for Women",
    badge: "Free APSRTC Travel",
    cls: "sc2",
  },
  {
    icon: "🏫",
    name: "Thalliki Vandanam",
    path: "/talliki-vandhanam",
    sub: "Mother's Salutation",
    badge: "₹15,000 / year",
    cls: "sc3",
  },
  {
    icon: "🪵",
    name: "Deepam 2.0",
    path: "/deepam-gas",
    sub: "Free LPG Gas Cylinders",
    badge: "3 Cylinders / year",
    cls: "sc4",
  },
  {
    icon: "🚜",
    name: "Annadata Sukhibhava",
    path: "/annadata-sukhi-bhava",
    sub: "Farmers' Financial Support",
    badge: "₹20,000 / year",
    cls: "sc5",
  },
  {
    icon: "💼",
    name: "Yuva Galam",
    path: "/unemployement-allowance",
    sub: "Youth Empowerment Fund",
    badge: "₹3,000 / month",
    cls: "sc6",
  },
];

const Navbar = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [showBeneficiary, setShowBeneficiary] = useState(false);
  const [showMultimedia, setShowMultimedia] = useState(false);
  const [showWings, setShowWings] = useState(false);
  const [navShow, setNavShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navBottom, setNavBottom] = useState(64);

  const location = useLocation();
  const navRef = useRef(null);
  const schemesRef = useRef(null);
  const closeTimer = useRef(null);

  const clearClose = () => clearTimeout(closeTimer.current);

  const scheduleCloseAll = useCallback((delay = 200) => {
    clearClose();
    closeTimer.current = setTimeout(() => {
      setShowAchievements(false);
      setShowBeneficiary(false);
      setShowMultimedia(false);
      setShowWings(false);
    }, delay);
  }, []);

  /* ── measure navbar bottom for fixed panel ── */
  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        setNavBottom(navRef.current.getBoundingClientRect().bottom);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

useEffect(() => {
  scheduleCloseAll(0);
  setNavShow(false);
}, [location.pathname, scheduleCloseAll]);

  /* ── outside click closes everything ── */
  useEffect(() => {
    const handler = (e) => {
      const inNav = navRef.current?.contains(e.target);
      const inSchemes = schemesRef.current?.contains(e.target);
      if (!inNav && !inSchemes) {
        scheduleCloseAll(0);
        setNavShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [scheduleCloseAll]);

  /* ── DESKTOP HOVER HANDLERS ── */
  const onAchEnter = () => {
    if (isMobile) return;
    clearClose();
    setShowMultimedia(false);
    setShowWings(false);
    setShowAchievements(true);
  };
  const onAchLeave = () => {
    if (isMobile) return;
    scheduleCloseAll(250);
  };

  const onDropEnter = () => {
    if (isMobile) return;
    clearClose();
  };
  const onDropLeave = () => {
    if (isMobile) return;
    scheduleCloseAll(250);
  };

  const onBenEnter = () => {
    if (isMobile) return;
    clearClose();
    setShowBeneficiary(true);
  };
  const onBenLeave = () => {
    if (isMobile) return;
    scheduleCloseAll(250);
  };

  const onSchemesEnter = () => {
    if (isMobile) return;
    clearClose();
    setShowAchievements(true);
    setShowBeneficiary(true);
  };
  const onSchemesLeave = () => {
    if (isMobile) return;
    scheduleCloseAll(200);
  };

  const onMmEnter = () => {
    if (isMobile) return;
    clearClose();
    setShowAchievements(false);
    setShowBeneficiary(false);
    setShowWings(false);
    setShowMultimedia(true);
  };
  const onMmLeave = () => {
    if (isMobile) return;
    scheduleCloseAll(200);
  };

  const onWingsEnter = () => {
    if (isMobile) return;
    clearClose();
    setShowAchievements(false);
    setShowBeneficiary(false);
    setShowMultimedia(false);
    setShowWings(true);
  };
  const onWingsLeave = () => {
    if (isMobile) return;
    scheduleCloseAll(200);
  };

  /* ── MOBILE TOGGLE — FIXED: no scheduleCloseAll before setting state ── */
  const handleAchievementsClick = () => {
    if (!isMobile) return;
    const next = !showAchievements;
    // Close other menus first
    setShowMultimedia(false);
    setShowWings(false);
    if (!next) {
      setShowBeneficiary(false);
    }
    setShowAchievements(next);
  };

  const handleBeneficiaryClick = () => {
    if (!isMobile) return;
    setShowBeneficiary(!showBeneficiary);
  };

  const handleMultimediaClick = () => {
    if (!isMobile) return;
    const next = !showMultimedia;
    setShowAchievements(false);
    setShowBeneficiary(false);
    setShowWings(false);
    setShowMultimedia(next);
  };

  const handleWingsClick = () => {
    if (!isMobile) return;
    const next = !showWings;
    setShowAchievements(false);
    setShowBeneficiary(false);
    setShowMultimedia(false);
    setShowWings(next);
  };

  const closeAll = () => scheduleCloseAll(0);

  const SchemeCards = () => (
  <>
    <p className="schemes-mega-title">Super Six Guarantee Schemes</p>

    <div className="schemes-grid">
      {schemes.map((s, i) => (
        <NavLink
          key={i}
          className={`scheme-card ${s.cls}`}
          to={s.path}
          onClick={() => {
            closeAll();
            setNavShow(false);
          }}
        >
          <div className="sc-top">
            <span className="sc-icon">{s.icon}</span>

            <div>
              <div className="sc-num">Scheme 0{i + 1}</div>
              <div className="sc-name">{s.name}</div>
            </div>
          </div>

          <div className="sc-sub">{s.sub}</div>

          <span className="sc-badge">{s.badge}</span>
        </NavLink>
      ))}
    </div>
  </>
);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" ref={navRef}>
        <div className="container-fluid bg-color">
          <img src={logo} alt="logo" className="navbar-brand logo" />

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              const next = !navShow;
              if (!next) {
                scheduleCloseAll(0);
              }
              setNavShow(next);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse nav-text ${navShow ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => setNavShow(false)}
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={() => setNavShow(false)}
                >
                  ABOUT US
                </NavLink>
              </li>

              {/* ── ACHIEVEMENTS ── */}
              <li
                className="nav-item dropdown ach-wrapper"
                onMouseEnter={onAchEnter}
                onMouseLeave={onAchLeave}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  onClick={handleAchievementsClick}
                >
                  ACHIEVEMENTS
                  {isMobile && (
                    <span
                      className={`ben-arrow ${showAchievements ? "open" : ""}`}
                      style={{ marginLeft: 8 }}
                    >
                      ›
                    </span>
                  )}
                </button>

                <ul
                  className={`dropdown-menu multy-drop ${showAchievements ? "show" : ""}`}
                  onMouseEnter={onDropEnter}
                  onMouseLeave={onDropLeave}
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/achievements"
                      onClick={() => {
                        closeAll();
                        setNavShow(false);
                      }}
                    >
                      DEVELOPMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/cmrf"
                      onClick={() => {
                        closeAll();
                        setNavShow(false);
                      }}
                    >
                      CMR FUNDS
                    </NavLink>
                  </li>

                  {/* BENEFICIARIES row */}
                  <li className="ben-li">
                    <div
                      className={`ben-trigger ${showBeneficiary ? "ben-active" : ""}`}
                      onMouseEnter={onBenEnter}
                      onMouseLeave={onBenLeave}
                      onClick={handleBeneficiaryClick}
                    >
                      <span className="ben-label">BENEFICIARIES</span>
                      <span
                        className={`ben-arrow ${showBeneficiary ? "open" : ""}`}
                      >
                        ›
                      </span>
                    </div>

                    {/* MOBILE: schemes inline */}
                    {isMobile && (
                      <div
                        className={`schemes-mega-fullwidth ${showBeneficiary ? "schemes-show" : ""}`}
                      >
                        <div className="schemes-mega-inner">
                          <SchemeCards />
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </li>

              {/* ── MULTIMEDIA ── */}
              <li
                className="nav-item dropdown"
                onMouseEnter={onMmEnter}
                onMouseLeave={onMmLeave}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  onClick={handleMultimediaClick}
                >
                  MULTIMEDIA
                  {isMobile && (
                    <span
                      className={`ben-arrow ${showMultimedia ? "open" : ""}`}
                      style={{ marginLeft: 8 }}
                    >
                      ›
                    </span>
                  )}
                </button>
                <ul
                  className={`dropdown-menu multy-drop ${showMultimedia ? "show" : ""}`}
                  onMouseEnter={onMmEnter}
                  onMouseLeave={onMmLeave}
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/Photoslanding"
                      onClick={() => {
                        closeAll();
                        setNavShow(false);
                      }}
                    >
                      GALLERY
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/videos"
                      onClick={() => {
                        closeAll();
                        setNavShow(false);
                      }}
                    >
                      VIDEOS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/press"
                      onClick={() => {
                        closeAll();
                        setNavShow(false);
                      }}
                    >
                      PRESS
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/accomplishments"
                  onClick={() => setNavShow(false)}
                >
                  ACCOMPLISHMENT
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={() => setNavShow(false)}
                >
                  CONTACT US
                </NavLink>
              </li>

              {/* ── OTHER TDP WINGS ── */}
              <li
                className="nav-item mega-menu-parent"
                onMouseEnter={onWingsEnter}
                onMouseLeave={onWingsLeave}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle border-0 bg-transparent"
                  onClick={handleWingsClick}
                >
                  OTHER TDP WINGS
                  {isMobile && (
                    <span
                      className={`ben-arrow ${showWings ? "open" : ""}`}
                      style={{ marginLeft: 8 }}
                    >
                      ›
                    </span>
                  )}
                </button>
                <div
                  className={`mega-menu ${showWings ? "mega-show" : ""}`}
                  onMouseEnter={onWingsEnter}
                  onMouseLeave={onWingsLeave}
                >
                  <div className="mega-menu-inner">
                    <p className="mega-menu-title">TDP WINGS</p>
                    <div className="mega-grid">
                      {tdpWings.map((wing, i) => (
                        <NavLink
                          key={i}
                          className="mega-item"
                          to={`/wings/${wing.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => {
                            closeAll();
                            setNavShow(false);
                          }}
                        >
                          <span className="mega-dot" aria-hidden="true" />
                          {wing}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item d-flex align-items-center">
                <button className="btn appoint-btn" type="button">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ── DESKTOP: schemes panel outside nav, full width, fixed ── */}
      {!isMobile && (
        <div
          ref={schemesRef}
          className={`schemes-mega-fullwidth ${showBeneficiary ? "schemes-show" : ""}`}
          style={{ top: `${navBottom}px` }}
          onMouseEnter={onSchemesEnter}
          onMouseLeave={onSchemesLeave}
        >
          <div className="schemes-mega-inner">
            <SchemeCards />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
