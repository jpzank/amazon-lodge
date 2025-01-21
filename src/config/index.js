export * from './cloudinaryConfig';
export * from './siteConfig';

// Central configuration object
export const config = {
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  version: process.env.REACT_APP_VERSION || '1.0.0'
}; 