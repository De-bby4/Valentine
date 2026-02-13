import React, { useEffect } from 'react';
import '../valentine7/Valentine7.css';
import Valentine8 from '../valentine8/Valentine8';
import Val7 from '../../assets/val7.webp';

const Valentine7 = () => {
    const [showValentine8, setShowValentine8] = React.useState(false);


    useEffect(() => {
        const yesBtn = document.querySelector('.btn13');
        yesBtn.classList.add('grow'); 
    }, []);

    if (showValentine8) return <Valentine8 />;

    return (
        <div className='container8'>
            <div className="gif-container-6">
                <img src={Val7} loading='lazy' />

            </div>

            <div className="ans-6">
                <h3 className='h3-6'>Will you be my Valentine?</h3>
                <div className='btn-div6'>
                    <button className='btn13' onClick={() => setShowValentine8(true)}>Yes!</button>
                   
                </div>
            </div>
        </div>
    );
}

export default Valentine7;