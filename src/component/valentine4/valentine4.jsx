import React, { useEffect } from 'react';
import '../valentine4/Valentine4.css';
import Valentine5 from '../valentine5/Valentine5.jsx';
import Valentine8 from '../valentine8/Valentine8.jsx';
import Val4 from '../../assets/val4.webp';

const Valentine4 = () => {
    const [showValentine5, setShowValentine5] = React.useState(false);
    const [showValentine8, setShowValentine8] = React.useState(false);

    useEffect(() => {
        const yesBtn = document.querySelector('.btn7');
        yesBtn.classList.add('grow'); 
    }, []);
    if (showValentine5) return <Valentine5 />;
    if (showValentine8) return <Valentine8 />;

    return (
        <div className='container4'>
            <div className="gif-container-3">
                <img
        src={Val4}
        alt="cute gif"
        loading='lazy'/>

            </div>

            <div className="ans-3">
                <h3 className='h3-3'>Will you be my Valentine?</h3>
                {/* Buttons directly under the question inside ans-1 */}
                <div className='btn-div3'>
                    <button className='btn7' onClick={() => setShowValentine8(true)}>Yes!</button>
                    <button className='btn8' onClick={() => setShowValentine5(true)}>pookie<br/>please</button>
                </div>
            </div>
        </div>
    );
}

export default Valentine4;