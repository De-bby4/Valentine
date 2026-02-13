import React, { useEffect, useState} from 'react';
import '../valentine3/Valentine3.css';
import Valentine4 from '../valentine4/valentine4';
import Valentine8 from '../valentine8/Valentine8';
import Val3 from '../../assets/val3.webp';

const Valentine3 = () => {
    const [showValentine4, setShowValentine4] = useState(false);
    const [showValentine8, setShowValentine8] = useState(false);

    useEffect(() => {
        const yesBtn = document.querySelector('.btn5');
        yesBtn.classList.add('grow'); 
    }, []);
    if (showValentine4) return <Valentine4 />;
    if (showValentine8) return <Valentine8 />;

    return (
        <div className='container3'>
            <div className="gif-container-2">
                <img
        src={Val3}
        alt="cute gif"
        loading='lazy'/>

            </div>

            <div className="ans-2">
                <h3 className='h3-2'>Will you be my Valentine?</h3>
                {/* Buttons directly under the question inside ans-1 */}
                <div className='btn-div2'>
                    <button className='btn5' onClick={() => setShowValentine8(true)}>Yes!</button>
                    <button className='btn6' onClick={() => setShowValentine4(true)}>Really<br/>sure?🥺</button>
                </div>
            </div>
        </div>
    );
}

export default Valentine3;