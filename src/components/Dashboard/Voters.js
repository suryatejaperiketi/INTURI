import React, { useState } from "react";
import "../../styles/Voters.css";

/* ---------------- Icon set (inline SVG, no external deps) ---------------- */
const Icon = ({ name, className = "" }) => {
  const paths = {
    users: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
    check: <path d="m20 6-11 11-5-5" />,
    pie: <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" />,
    male: (
      <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM14.5 3h4.5v4.5M18.5 3.5 13.8 8.2" />
    ),
    female: (
      <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13v8M9 18h6" />
    ),
    userPlus: (
      <path d="M14 19v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9.5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6" />
    ),
    download: <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />,
    building: (
      <path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M4 21h16M9 11h.01M15 11h.01M9 7h.01M15 7h.01" />
    ),
    upload: <path d="M12 21V9m0 0-4 4m4-4 4 4M4 3h16" />,
    search: <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" />,
    addBooth: (
      <path d="M4 21V10l8-6 8 6v11M9 21v-5h6v5M12 3v0" />
    ),
    list: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
    report: (
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6ZM14 3v6h6M9 13h6M9 17h6M9 9h1" />
    ),
    bell: (
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0" />
    ),
    refresh: <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
    swap: <path d="m17 2 4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" />,
    beneficiary: (
      <path d="M20 21a8 8 0 1 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    ),
    family: (
      <path d="M18 20a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a2.5 2.5 0 0 1 2-2.5M20 20a2.5 2.5 0 0 0-2-2.5M6 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    ),
    scheme: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" />,
    plus: <path d="M12 5v14M5 12h14" />,
    map: (
      <path d="m9 20-5.5-2.5A1 1 0 0 1 3 16.5v-13a1 1 0 0 1 1.45-.9L9 4.5m0 15.5 6-3m-6 3V4.5m6 12 5.55 2.6a1 1 0 0 0 1.45-.9v-13a1 1 0 0 0-.55-.9L15 4.5m0 12V4.5m0 0L9 4.5" />
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
};

/* ---------------- Data ---------------- */
const STAT_CARDS = [
  {
    icon: "users",
    tone: "indigo",
    title: "Total Voters",
    value: "2,18,859",
    desc: "Total Electors",
  },
  {
    icon: "check",
    tone: "green",
    title: "Votes Cast (2024)",
    value: "1,79,900",
    desc: "Total Votes Polled",
  },
  {
    icon: "pie",
    tone: "purple",
    title: "Voter Turnout",
    value: "82.19%",
    desc: "In 2024 Elections",
  },
  {
    icon: "male",
    tone: "blue",
    title: "Male Voters",
    value: "1,10,000",
    desc: "50.29% of Total",
  },
  {
    icon: "female",
    tone: "pink",
    title: "Female Voters",
    value: "1,08,500",
    desc: "49.71% of Total",
  },
  {
    icon: "userPlus",
    tone: "orange",
    title: "New Voters (2024)",
    value: "3,256",
    desc: "Added This Year",
  },
];

const CONSTITUENCY_INFO = [
  { label: "Constituency No.", value: "109" },
  { label: "State", value: "Andhra Pradesh" },
  { label: "District", value: "Prakasam" },
  { label: "Lok Sabha Constituency", value: "Nellore" },
  { label: "Current MLA (2024)", value: "Inturi Nageswara Rao (TDP)", link: true },
  { label: "Established", value: "1951" },
];

const TURNOUT = [
  { year: 2014, pct: 74.35 },
  { year: 2019, pct: 78.62 },
  { year: 2024, pct: 82.19 },
];

const MANDALS = [
  { name: "Kandukur", male: 32450, female: 31820, total: 64270, pct: "29.36%" },
  { name: "Lingasamudram", male: 18950, female: 18710, total: 37660, pct: "17.20%" },
  { name: "Gudluru", male: 25300, female: 24870, total: 50170, pct: "22.91%" },
  { name: "Ulavapadu", male: 17250, female: 16860, total: 34110, pct: "15.58%" },
  { name: "Voletivaripalem", male: 15050, female: 16240, total: 31290, pct: "14.31%" },
];

const ACTIVITIES = [
  {
    icon: "check",
    tone: "green",
    title: "New voter registration completed",
    desc: "125 new voters added in Kandukur mandal",
    time: "10:30 AM",
  },
  {
    icon: "refresh",
    tone: "blue",
    title: "Voter data updated",
    desc: "Voter list updated for 2024 elections",
    time: "Yesterday",
  },
  {
    icon: "check",
    tone: "purple",
    title: "Voter corrections completed",
    desc: "342 corrections processed",
    time: "21 May 2024",
  },
  {
    icon: "swap",
    tone: "orange",
    title: "Voter transfers processed",
    desc: "87 voter transfer requests completed",
    time: "20 May 2024",
  },
];

const BENEFICIARIES = [
  { icon: "beneficiary", tone: "indigo", title: "Total Beneficiaries", value: "18,742", desc: "Govt Schemes" },
  { icon: "family", tone: "purple", title: "Families Covered", value: "15,890", desc: "Across Schemes" },
  { icon: "scheme", tone: "orange", title: "Schemes Active", value: "12", desc: "Currently Running" },
  { icon: "userPlus", tone: "blue", title: "This Month Added", value: "324", desc: "New Beneficiaries" },
];

const QUICK_ACTIONS = [
  { icon: "userPlus", tone: "indigo", label: "Add Voter" },
  { icon: "upload", tone: "green", label: "Bulk Upload" },
  { icon: "search", tone: "purple", label: "Voter Search" },
  { icon: "addBooth", tone: "orange", label: "Add Booth" },
  { icon: "download", tone: "blue", label: "Download List" },
  { icon: "report", tone: "pink", label: "Generate Report" },
];

const MANDAL_SHAPES = [
  { name: "Lingasamudram", tone: "green", cls: "shape-top-right" },
  { name: "Gudluru", tone: "purple", cls: "shape-right" },
  { name: "Kandukur", tone: "blue", cls: "shape-center" },
  { name: "Ulavapadu", tone: "yellow", cls: "shape-left" },
  { name: "Voletivaripalem", tone: "pink", cls: "shape-bottom-right" },
];

/* ---------------- Small building blocks ---------------- */
const StatCard = ({ icon, tone, title, value, desc }) => (
  <div className="stat-card">
    <div className={`icon-badge tone-${tone}`}>
      <Icon name={icon} />
    </div>
   <div className="tvd">
     <div className="stat-title">{title}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-desc">{desc}</div>
   </div>
  </div>
);

const DoughnutChart = () => {
  const malePct = 50.29;
  const circumference = 2 * Math.PI * 70;
  const maleLen = (malePct / 100) * circumference;
  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 200 200" className="donut-svg">
        <circle cx="100" cy="100" r="70" fill="none" stroke="#fbcfe8" strokeWidth="26" />
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="26"
          strokeDasharray={`${maleLen} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
        <text x="100" y="94" textAnchor="middle" className="donut-number">
          2,18,859
        </text>
        <text x="100" y="116" textAnchor="middle" className="donut-label">
          Total Voters
        </text>
      </svg>
      <div className="donut-legend">
        <div className="legend-item">
          <span className="legend-dot dot-blue" />
          <span className="legend-text">Male</span>
          <span className="legend-value">1,10,000 (50.29%)</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot dot-pink" />
          <span className="legend-text">Female</span>
          <span className="legend-value">1,08,500 (49.71%)</span>
        </div>
      </div>
    </div>
  );
};

const TurnoutChart = () => {
  const max = 100;
  const width = 280;
  const height = 130;
  const points = TURNOUT.map((t, i) => {
    const x = (i / (TURNOUT.length - 1)) * (width - 20) + 10;
    const y = height - (t.pct / max) * (height - 20) - 10;
    return { x, y, ...t };
  });
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <div className="turnout-wrap">
      <div className="turnout-select">Turnout %</div>
      <svg viewBox={`0 0 ${width} ${height + 30}`} className="turnout-svg">
        <defs>
          <linearGradient id="turnoutFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#turnoutFill)" />
        <path d={pathD} fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="#22c55e" stroke="#fff" strokeWidth="2" />
            <text x={p.x} y={p.y - 12} textAnchor="middle" className="turnout-pct">
              {p.pct}%
            </text>
            <text x={p.x} y={height + 22} textAnchor="middle" className="turnout-year">
              {p.year}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

const ConstituencyMap = () => (
  <div className="map-card-inner">
    <div className="map-shapes">
      {MANDAL_SHAPES.map((m) => (
        <div key={m.name} className={`map-shape ${m.cls} shape-tone-${m.tone}`}>
          <span>{m.name}</span>
        </div>
      ))}
    </div>
    <div className="map-stats">
      <div className="map-stat">
        <div className="map-stat-value">5 Mandals</div>
      </div>
      <div className="map-stat">
        <div className="map-stat-value blue">280</div>
        <div className="map-stat-label">Total Booths</div>
      </div>
    </div>
  </div>
);

/* ---------------- Main Component ---------------- */
export default function Voters() {
  const [search, setSearch] = useState("");

  const filteredMandals = MANDALS.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="vd-root">
      {/* Header */}
      <div className="vd-header">
        <div>
          <h1 className="vd-title">Voters Dashboard</h1>
          <div className="vd-subtitle-row">
            <span className="vd-subtitle">Kandukur Assembly Constituency</span>
            <span className="verified-badge" title="Verified">
              <Icon name="check" />
            </span>
          </div>
          <div className="vd-meta">
            <span>Constituency No. 109</span>
            <span className="dot">•</span>
            <span>Prakasam District, Andhra Pradesh</span>
            <span className="dot">•</span>
            <span>Lok Sabha: Nellore</span>
          </div>
        </div>
        <button className="btn-primary">
          <Icon name="download" />
          Download Report
        </button>
      </div>

      {/* Section 1: Stat cards */}
      <div className="grid-stats">
        {STAT_CARDS.map((c) => (
          <StatCard key={c.title} {...c} />
        ))}
      </div>

      {/* Section 2: Info / Donut / Turnout */}
      <div className="grid-section2">
        <div className="card">
          <div className="card-header">
            <Icon name="building" className="header-icon" />
            <span>Constituency Information</span>
          </div>
          <ul className="info-list">
            {CONSTITUENCY_INFO.map((row) => (
              <li key={row.label}>
                <span className="info-label">{row.label}</span>
                <span className={`info-value ${row.link ? "link" : ""}`}>{row.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-header">
            <Icon name="pie" className="header-icon" />
            <span>Gender Distribution</span>
          </div>
          <DoughnutChart />
        </div>

        <div className="card">
          <div className="card-header spread">
            <div className="header-title-group">
              <Icon name="report" className="header-icon" />
              <span>Voter Turnout Over the Years</span>
            </div>
          </div>
          <TurnoutChart />
        </div>
      </div>

      {/* Section 3: Table / Map */}
      <div className="grid-section3">
        <div className="card">
          <div className="table-toolbar">
            <div className="card-header no-margin">
              <Icon name="list" className="header-icon" />
              <span>Mandal Wise Voters Summary</span>
            </div>
            <div className="toolbar-actions">
              <button className="btn-chip green">
                <Icon name="plus" /> Add Voter
              </button>
              <button className="btn-chip blue">
                <Icon name="upload" /> Import Excel
              </button>
              <button className="btn-chip purple">
                <Icon name="download" /> Export Excel
              </button>
              <div className="search-box">
                <Icon name="search" />
                <input
                  type="text"
                  placeholder="Search mandal..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mandal</th>
                  <th>Male Voters</th>
                  <th>Female Voters</th>
                  <th>Total Voters</th>
                  <th>% of Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredMandals.map((m, i) => (
                  <tr key={m.name}>
                    <td>{i + 1}</td>
                    <td className="mandal-name">{m.name}</td>
                    <td>{m.male.toLocaleString("en-IN")}</td>
                    <td>{m.female.toLocaleString("en-IN")}</td>
                    <td>{m.total.toLocaleString("en-IN")}</td>
                    <td>{m.pct}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>Total</td>
                  <td>1,10,000</td>
                  <td>1,08,500</td>
                  <td>2,18,859</td>
                  <td>100.00%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header span-const">
            <Icon name="map" className="header-icon" />
            <span>Constituency Map</span>
          </div>
          <ConstituencyMap />
        </div>
      </div>

      {/* Section 4: Activities / Beneficiaries */}
      <div className="grid-section4">
        <div className="card">
          <div className="card-header spread">
            <div className="header-title-group">
              <Icon name="bell" className="header-icon" />
              <span>Recent Voter Activities</span>
            </div>
            <button className="link-btn">View All</button>
          </div>
          <ul className="activity-list">
            {ACTIVITIES.map((a, i) => (
              <li key={i}>
                <div className={`activity-icon tone-${a.tone}`}>
                  <Icon name={a.icon} />
                </div>
                <div className="activity-body">
                  <div className="activity-title">{a.title}</div>
                  <div className="activity-desc">{a.desc}</div>
                </div>
                <div className="activity-time">{a.time}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-header spread">
            <div className="header-title-group">
              <Icon name="beneficiary" className="header-icon" />
              <span>Beneficiaries Summary</span>
            </div>
            <button className="link-btn">View All</button>
          </div>
          <div className="beneficiary-grid">
            {BENEFICIARIES.map((b) => (
              <div key={b.title} className="beneficiary-card">
                <div className={`icon-badge small tone-${b.tone}`}>
                  <Icon name={b.icon} />
                </div>
                <div className="beneficiary-value">{b.value}</div>
                <div className="beneficiary-title">{b.title}</div>
                <div className="beneficiary-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Quick actions */}
      <div className="card">
        <div className="card-header">
          <Icon name="plus" className="header-icon" />
          <span>Quick Actions</span>
        </div>
        <div className="quick-actions-grid">
          {QUICK_ACTIONS.map((q) => (
            <button key={q.label} className="quick-action-card">
              <div className={`icon-badge tone-${q.tone}`}>
                <Icon name={q.icon} />
              </div>
              <span>{q.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
