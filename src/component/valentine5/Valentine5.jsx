import React, { useEffect } from 'react';
import '../valentine5/Valentine5.css';
import Valentine6 from '../valentine6/Valentine6.jsx';
import Valentine8 from '../valentine8/Valentine8.jsx';
import Val5 from '../../assets/val5.webp';

const Valentine5 = () => {
    const [showValentine6, setShowValentine6] = React.useState(false);
    const [showValentine8, setShowValentine8] = React.useState(false);

    useEffect(() => {
        const yesBtn = document.querySelector('.btn9');
        yesBtn.classList.add('grow'); 
    }, []);
    if (showValentine6) return <Valentine6 />;
    if (showValentine8) return <Valentine8 />;

    return (
        <div className='container5'>
            <div className="gif-container-4">
                <img
                src={Val5}
                alt="cute gif"
                loading='lazy'/>

            </div>

            <div className="ans-4">
                <h3 className='h3-4'>Will you be my Valentine?</h3>
                {/* Buttons directly under the question inside ans-1 */}
                <div className='btn-div4'>
                    <button className='btn9' onClick={() => setShowValentine8(true)}>Yes!</button>
                    <button className='btn10' onClick={() => setShowValentine6(true)}>pls🥺..</button>
                </div>
            </div>
        </div>
    );
}

export default Valentine5;