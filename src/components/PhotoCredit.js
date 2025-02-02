import React from 'react';

const PhotoCredit = ({ photographer, isGallery }) => {
  if (!photographer) return null;
  
  return (
    <div className={`absolute bottom-2 right-2 ${
      isGallery 
        ? "bg-black/40 text-white text-sm px-3 py-1 rounded-sm" 
        : "bg-black/20 text-white/80 text-[8px] px-2 py-0.5 rounded-sm"
    }`}>
      {isGallery ? photographer : `Foto: ${photographer}`}
    </div>
  );
};

export default PhotoCredit; 