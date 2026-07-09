import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landingpage from "./components/Landingpage";
import Aboutus from "./components/aboutsection/Aboutus";
import Achievements from "./components/Achievements";
import Photoslanding from "./components/gallery/Photoslanding";
import Videos from "./components/gallery/Videos";
import Press from "./components/gallery/Press";
import Accomplishments from "./components/Accomplishments";
import Contact from "./components/Contact";
import Cmrf from "./components/Cmrf";
import AnnadathaSukhibhava from "./components/SuperSix/AnnadathaSukhibhava";
import DeepamGas from "./components/SuperSix/DeepamGas";
import FreeBus from "./components/SuperSix/FreeBus";
import ThallikiVandanam from "./components/SuperSix/ThallikiVandanam";
import AadabiddaNidhi from "./components/SuperSix/AadabiddaNidhi";
import AnnaCanteen from "./components/SuperSix/AnnaCanteen";
import Mp3 from "./components/Mp3";
import Mp4 from "./components/Mp4";
import Login from "./components/Login";
import PublicLayout from "./components/PublicLayout";
import AdminLayout from "./components/Dashboard/AdminLayout";
import DashboardLayout from "./components/Dashboard/DashboardLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/cmrf" element={<Cmrf />} />
          <Route path="/Photoslanding/*" element={<Photoslanding />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/press" element={<Press />} />
          <Route path="/accomplishments" element={<Accomplishments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aadabidda-nidhi" element={<AadabiddaNidhi />} />
          <Route path="/annadata-sukhi-bhava"element={<AnnadathaSukhibhava />}/>
          <Route path="/deepam-gas" element={<DeepamGas />} />
          <Route path="/free-bus" element={<FreeBus />} />
          <Route path="/talliki-vandhanam" element={<ThallikiVandanam />} />
          <Route path="/anna-canteen" element={<AnnaCanteen />} />
          <Route path="/mp3" element={<Mp3 />} />
          <Route path="/mp4" element={<Mp4 />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardLayout/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
