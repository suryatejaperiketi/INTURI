import React from "react";
import i1 from '../../essets/i1.png';
import i2 from '../../essets/i2.png';
import i3 from '../../essets/i3.png';
import i4 from '../../essets/i4.png';
import i5 from '../../essets/i5.png';
import i6 from '../../essets/i6.png';
import i7 from '../../essets/i7.png';
import i8 from '../../essets/i8.png';
import i9 from '../../essets/i9.png';
import i10 from '../../essets/i10.png';
import i11 from '../../essets/i11.png';
import i12 from '../../essets/i12.png';
import i13 from '../../essets/i13.png';
import i14 from '../../essets/i14.png';
import i15 from '../../essets/i15.png';

const Inogrations = () => {

    const inogration = [
        i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15
    ]

    return (
        <>
            <div className="gallery-container">

                {inogration.map((inogration, index) => (

                    <div className="gallery-item" key={index}>

                        <img
                            src={inogration}
                            alt={`gallery-${index}`}
                            className="gallery-image"
                        />

                    </div>

                ))}

            </div>
        </>
    )
}
export default Inogrations