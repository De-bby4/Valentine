import React, { useRef, useState, useEffect } from 'react';
import Valentine from './component/valentine/Valentine.jsx';
import MySong from './assets/mysongs.mp3';

const App = () => {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Listen for first user interaction to start music
    const handleStart = () => {
      if (!started && audioRef.current) {
        audioRef.current.play().catch(err => console.log(err));
        setStarted(true);
        window.removeEventListener('click', handleStart);
      }
    };

    window.addEventListener('click', handleStart);

    return () => window.removeEventListener('click', handleStart);
  }, [started]);

  return (
    <div>
      <audio ref={audioRef} src={MySong} loop />
      <Valentine />
    </div>
  );
};

export default App;
