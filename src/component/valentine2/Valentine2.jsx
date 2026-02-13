import React, { useEffect, useState } from 'react';
import '../valentine2/Valentine2.css';
import Valentine3 from '../valentine3/Valentine3.jsx';
import Valentine8 from '../valentine8/Valentine8.jsx';
import Val2 from '../../assets/val2.webp';  

const Valentine2 = () => {
    const [showValentine3, setShowValentine3] = useState(false);
    const [showValentine8, setShowValentine8] = useState(false);
    
    useEffect(() => {
        const yesBtn = document.querySelector('.btn3');
        yesBtn?.classList.add('grow'); 
    }, []);

    if (showValentine3) return <Valentine3 />;
    if (showValentine8) return <Valentine8 />;


    return (
        <div className='container2'>
            <div className="gif-container-1">
                <img
        src={Val2}
        alt="cute gif"
        loading='lazy'/>

            </div>

            <div className="ans-1">
                <h3 className='h3-1'>Will you be my Valentine?</h3>
                <div className='btn-div1'>
                    <button className='btn3' onClick={() => setShowValentine8(true)}>Yes!</button>
                    <button className='btn4' onClick={() => setShowValentine3(true)}>
                        Are you <br/>sure🥺?
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Valentine2;
