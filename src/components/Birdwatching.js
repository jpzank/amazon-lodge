import React from 'react';
import '../styles/Birdwatching.css';
import { birdwatching, kiko } from '../images';

const Birdwatching = () => {
  return (
    <div className="birdwatching">
      <div 
        className="page-hero birdwatching"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${birdwatching})` }}
      >
        {/* Rest of your hero content */}
      </div>

      {/* Other sections */}

      <div 
        className="cta"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${kiko})` }}
      >
        {/* CTA content */}
      </div>
    </div>
  );
};

export default Birdwatching; 