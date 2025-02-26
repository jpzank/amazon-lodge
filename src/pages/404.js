import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('404.title')}
        description={t('404.description')}
        noindex={true}
      />
      <div className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-primary mb-8">404</h1>
          <h2 className="text-3xl font-semibold mb-4">{t('404.heading')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('404.message')}</p>
          <div className="space-x-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              {t('404.homeButton')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 