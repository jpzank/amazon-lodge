import React from 'react';

const PhotoCredit = ({ photographer }) => {
  if (!photographer) return null;
  
  return (
    <div className="absolute bottom-2 right-2 bg-black/20 text-white/80 text-[8px] px-2 py-0.5 rounded-sm">
      Foto: {photographer}
    </div>
  );
};

export default PhotoCredit; 