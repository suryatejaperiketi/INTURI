import React from "react";
import Home from './Home';
import Content from './Content';
import Excllence from './Excllence';
import Pulse from './Pulse';
import Scrollgallery from './Scrollgallery';
import Follow from './Follow';
import Footer from './Footer';

const Landingpage = () => {
    return (

            <div style={{ backgroundColor: "#FFF7D9" }}>
                <Home />
                <Content />
                <Excllence />
                <Pulse/>
                <Scrollgallery/>
                <Follow/>
                <Footer/>
            </div>
    )
}
export default Landingpage