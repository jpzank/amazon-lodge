import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description,
  image = 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085785/gatronomia-hero_kqnp26.jpg',
  keywords = '',
  noindex = false,
  canonicalUrl = null
}) => {
  const location = useLocation();
  const { pathname } = location;
  const siteName = 'Jardim Amazônia Lodge';
  const fullUrl = `https://www.jardimdaamazonia.com${pathname}`;
  
  // Define the canonical URL - either provided or current URL
  const canonical = canonicalUrl || fullUrl;

  // Check if this page is a redirect target
  const isRedirectTarget = ['/lodge', '/acomodacoes', '/como-chegar', '/gastronomia'].includes(pathname);

  // Structured data for better search engine understanding
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: siteName,
    description,
    image,
    url: canonical,
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

      {/* Indexing directives */}
      {noindex || isRedirectTarget ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Language alternates */}
      <link rel="alternate" hreflang="pt-BR" href={`${canonical}?lang=pt`} />
      <link rel="alternate" hreflang="en" href={`${canonical}?lang=en`} />
      <link rel="alternate" hreflang="x-default" href={canonical} />

      {/* Additional meta tags for search engines */}
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English, Portuguese" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={`${title} | ${siteName} - Amazon Birdwatching & Research Station`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
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