import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Allgallery from './Allgallery';
import Leaders from './Leaders';
import Events from './Events';
import Spiritual from './Spiritual';
import Inogrations from './Inogrations';
import Sports from './Sports';
import Others from './Others';
const Picsroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="//" element={<Allgallery />} />
                <Route path='/leaders' element={<Leaders/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/spiritual' element={<Spiritual/>}/>
                <Route path='/inaugurations' element={<Inogrations/>}/>
                <Route path='/sports' element={<Sports/>}/>
                <Route path='/others' element={<Others/>}/>
            </Routes>
        </div>
    )
}
export default Picsroutes