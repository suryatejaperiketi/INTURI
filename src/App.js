import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Aboutus from './components/aboutsection/Aboutus';
import Achievements from './components/Achievements';
import Photoslanding from './components/gallery/Photoslanding';
import Videos from './components/gallery/Videos';
import Press from './components/gallery/Press';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Cmrf from './components/Cmrf';
import AnnadathaSukhibhava from './components/SuperSix/AnnadathaSukhibhava';
import DeepamGas from './components/SuperSix/DeepamGas';
import FreeBus from './components/SuperSix/FreeBus';
import ThallikiVandanam from './components/SuperSix/ThallikiVandanam';


function App() {
  return (
    <div>
      <div className='navbar-main'>
        <Navbar />
      </div >
      <div className='land-section'>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/cmrf" element={<Cmrf />} />
        <Route path="/Photoslanding/*" element={<Photoslanding />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/press' element={<Press />} />
        <Route path='/accomplishments' element={<Accomplishments />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/annadata-sukhi-bhava' element={<AnnadathaSukhibhava/>} />
        <Route path='/deepam-gas' element={<DeepamGas/>} />
        <Route path='/free-bus' element={<FreeBus/>} />
        <Route path='/talliki-vandhanam' element={<ThallikiVandanam/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;