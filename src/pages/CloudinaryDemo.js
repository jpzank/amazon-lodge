import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryDemo = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dxlhv2mji' } });
  
  // Array of image public IDs from your Cloudinary account
  const imageIds = [
    'cld-sample-5',
    'cld-sample-4',
    'cld-sample-3',
    'cld-sample-2',
  ];

  const getOptimizedImage = (publicId) => {
    return cld
      .image(publicId)
      .format('auto')
      .quality('auto')
      .resize(auto().gravity(autoGravity()).width(300).height(300));
  };

  return (
    <div style={{
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {imageIds.map((id) => (
        <div key={id} style={{ width: '100%' }}>
          <AdvancedImage cldImg={getOptimizedImage(id)} />
        </div>
      ))}
    </div>
  );
};

export default CloudinaryDemo; 