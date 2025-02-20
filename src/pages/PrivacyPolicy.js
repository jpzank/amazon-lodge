import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('privacyPolicy.hero.title')}
        description={t('privacyPolicy.intro.description')}
      />
      
      <div className="relative bg-gray-900 py-12 sm:py-16">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('privacyPolicy.hero.title')}
            </h1>
            <p className="mt-4 text-base leading-7">
              {t('privacyPolicy.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 bg-white">
        <div className="py-8">
          <div className="prose prose-sm max-w-none">
            <p className="text-xs text-gray-500 mb-6">
              {t('privacyPolicy.lastUpdated')}
            </p>

            <div className="mb-8">
              <p className="text-base leading-relaxed text-gray-700">
                {t('privacyPolicy.intro.description')}
              </p>
            </div>

            {/* Cookies Section */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('privacyPolicy.cookies.title')}</h2>
              <p className="text-base mb-4 text-gray-700">
                {t('privacyPolicy.cookies.description')}
              </p>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{t('privacyPolicy.cookies.purposes.consent')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <p className="mb-1">{t('privacyPolicy.cookies.purposes.analytics.title')}</p>
                    <ul className="space-y-1 ml-4">
                      {t('privacyPolicy.cookies.purposes.analytics.items', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="space-y-2 text-gray-700">
                <p className="text-base font-medium">
                  {t('privacyPolicy.cookies.noPersonalData')}
                </p>
                <p className="text-base">
                  {t('privacyPolicy.cookies.control')}
                </p>
              </div>
            </section>

            {/* Booking Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('privacyPolicy.booking.title')}</h2>
              <div className="space-y-2 text-gray-700">
                <p className="text-base">
                  {t('privacyPolicy.booking.description')}
                </p>
                <p className="text-base">
                  {t('privacyPolicy.booking.recommendation')}
                  <a href="https://omnibees.com/politica-de-privacidade/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-primary hover:text-primary-dark font-medium ml-2">
                    Política de Privacidade Omnibees
                  </a>
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('privacyPolicy.contact.title')}</h2>
              <p className="text-base mb-4 text-gray-700">
                {t('privacyPolicy.contact.description')}
              </p>
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="text-base">
                  <strong className="text-gray-900">Email:</strong>
                  <a href={`mailto:${t('privacyPolicy.contact.email')}`} className="text-primary hover:text-primary-dark ml-2">
                    {t('privacyPolicy.contact.email')}
                  </a>
                </p>
              </div>
            </section>

            {/* Updates Section */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('privacyPolicy.updates.title')}</h2>
              <p className="text-base text-gray-700">
                {t('privacyPolicy.updates.description')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy; 