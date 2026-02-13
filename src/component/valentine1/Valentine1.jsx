import React, { useState } from 'react';
import '../valentine1/Valentine1.css';
import Valentine2 from '../valentine2/Valentine2.jsx';
import Valentine8 from '../valentine8/Valentine8.jsx';
import Val1 from '../../assets/val1.webp';

const Valentine1 = () => {
    const [showValentine2, setShowValentine2] = useState(false);
    const [showValentine8, setShowValentine8] = useState(false);

    if (showValentine2) return <Valentine2 />;
    if (showValentine8) return <Valentine8 />;

    return (
        <div className='container1'>
            <div className="gif-container">
                <img
        src={Val1}
        alt="cute gif"
        loading='lazy'/>

            </div>

            <div className="ans">
                <h3 className='h3'>Will you be my Valentine?</h3>
                <div className='btn-div'>
                    <button className='btn1' onClick={() => setShowValentine8(true)}>Yes!</button>
                    <button className='btn2' onClick={() => setShowValentine2(true)}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Valentine1;
