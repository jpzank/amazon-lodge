import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description,
  image = 'https://res.cloudinary.com/dxvjcuqyy/image/upload/v1708472386/Jardim_da_Amazônia-1_nmhh66.jpg',
  url,
  keywords = 'Amazonia birdwatching, Amazon rainforest research, bird watching Brazil, Amazon wildlife observation, scientific research Amazon, biodiversity studies, Amazon nature lodge, bird species Amazon, wildlife photography Amazon, ecological research station'
}) => {
  const location = useLocation();
  const siteName = 'Jardim da Amazônia';
  const baseUrl = 'https://www.jardimamazonia.com';
  const fullUrl = url || `${baseUrl}${location.pathname}`;
  
  // Structured data for better search engine understanding
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LodgingBusiness', 'ResearchProject'],
    name: siteName,
    description,
    image,
    url: fullUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'Mato Grosso'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -15.946254,
      longitude: -55.139799
    },
    touristType: [
      'Birdwatchers',
      'Nature Enthusiasts',
      'Researchers',
      'Wildlife Photographers'
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Birdwatching Trails',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Research Facilities',
        value: true
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{`${title} | ${siteName} - Amazon Birdwatching & Research Station`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Additional meta tags for search engines */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English, Portuguese" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={`${title} | ${siteName} - Amazon Birdwatching & Research Station`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="pt_BR" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName} - Amazon Birdwatching & Research Station`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 