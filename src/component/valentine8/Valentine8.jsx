import React, { useEffect } from 'react';
import '../valentine8/Valentine8.css';
import Val8 from '../../assets/val8.webp';

const Valentine8 = () => {

    return (
        <div className='container9'>
            <div className="gif-container-7">
                <img
                  src={Val8}
                   alt="cute gif"
                   loading='lazy'
                />
            </div>

            <div className="ans-7">
                <h3 className='h3-7'>Yayyyyyyy</h3>
            </div>
            <div className="text1">
                <h4 className='txt2'>
                    I know you wouldn’t break my little penguin heart.
                </h4>
                <h4 className='txt3' >
                    I made this because I wanted youto smile, even if just for a moment.
                    You’re important to me in ways I don’t always say out loud. And I hope this 
                    is just one of many cute memories we’ll make together. 💕
                </h4>
                
            </div>

        </div>
    );
}

export default Valentine8;