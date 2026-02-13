import React, { useState } from 'react';
import '../valentine/Valentine.css';
import ValentinePage1 from '../valentine1/Valentine1.jsx'; 

const Valentine = () => {
    const [showPage1, setShowPage1] = useState(false);

    if (showPage1) return <ValentinePage1 />;

    return (
        <div className='container'>
            <div className='hearts'>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className='heart'></div>
                ))}
            </div>

            <button className='btn' onClick={() => setShowPage1(true)}>
                Tap me 
            </button>
        </div>
    )
}

export default Valentine;
