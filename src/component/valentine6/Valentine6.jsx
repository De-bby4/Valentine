import React, { useEffect } from 'react';
import '../valentine6/Valentine6.css';
import Valentine7 from '../valentine7/Valentine7';
import Valentine8 from '../valentine8/Valentine8';
import Val6 from '../../assets/val6.webp';

const Valentine6 = () => {
    const [showValentine7, setShowValentine7] = React.useState(false);
    const [showValentine8, setShowValentine8] = React.useState(false);

    useEffect(() => {
        const yesBtn = document.querySelector('.btn11');
        yesBtn.classList.add('grow'); 
    }, []);

    if (showValentine7) return <Valentine7 />;
    if (showValentine8) return <Valentine8 />;

    return (
        <div className='container6'>
            <div className="gif-container-5">
                <img
        src={Val6}
        alt="cute gif"
        loading='lazy'/>

            </div>

            <div className="ans-5">
                <h3 className='h3-5'>Will you be my Valentine?</h3>
                {/* Buttons directly under the question inside ans-1 */}
                <div className='btn-div5'>
                    <button className='btn11' onClick={() => setShowValentine8(true)}>Yes!</button>
                    <button className='btn12' onClick={() => setShowValentine7(true)}>...</button>
                </div>
            </div>
        </div>
    );
}

export default Valentine6;