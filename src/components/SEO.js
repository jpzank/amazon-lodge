import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description,
  image = 'https://res.cloudinary.com/dxvjcuqyy/image/upload/v1708472386/Jardim_da_Amazônia-1_nmhh66.jpg',
  url = 'https://www.jardimamazonia.com'
}) => {
  const { t } = useTranslation();
  const siteName = 'Jardim da Amazônia';
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO; 