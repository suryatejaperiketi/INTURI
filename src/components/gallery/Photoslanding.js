import React from "react";
import '../../styles/Photosection.css';
import Photosection from "./Photosection";
import Picsroutes from "./Picsroutes";
const Photoslanding = () => {
    return (
        <div style={{backgroundColor:"#FFF7D9"}}>
            <Photosection />
            <main className="pic-slides">
                 <Picsroutes/> 
            </main>
        </div>
    )
}
export default Photoslanding