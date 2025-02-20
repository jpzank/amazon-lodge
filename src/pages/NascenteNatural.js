import React from 'react';
import { siteConfig } from '../config/siteConfig';
import PhotoCredit from '../components/PhotoCredit';
import { useTranslation } from 'react-i18next';

const NascenteNatural = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842036/Jardim_da_Amazônia-3602_sisbpp.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('naturalSpring.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('naturalSpring.hero.subtitle')}
          </p>
        </div>
        <PhotoCredit photographer="Marlon Erthal" />
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              {t('naturalSpring.intro.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
              {t('naturalSpring.intro.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Pool Section with Image */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 whitespace-nowrap">
                {t('naturalSpring.pool.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                {t('naturalSpring.pool.description1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t('naturalSpring.pool.description2')}
              </p>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl lg:w-[90%] ml-auto">
              <img
                src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842011/Jardim_da_Amazônia-3588_surdeb.jpg"
                alt={t('naturalSpring.pool.title')}
                className="w-full h-full object-cover"
              />
              <PhotoCredit photographer="Marlon Erthal" />
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t('naturalSpring.guidelines.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-2xl">volume_off</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('naturalSpring.guidelines.quietEnvironment.title')}</h3>
                <p className="text-gray-700">
                  {t('naturalSpring.guidelines.quietEnvironment.description')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-2xl">shower</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('naturalSpring.guidelines.waterCare.title')}</h3>
                <p className="text-gray-700">
                  {t('naturalSpring.guidelines.waterCare.description')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg md:col-span-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-2xl">family_restroom</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('naturalSpring.guidelines.childSupervision.title')}</h3>
                <p className="text-gray-700">
                  {t('naturalSpring.guidelines.childSupervision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              {t('naturalSpring.cta.title')}
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              {t('naturalSpring.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={siteConfig.buttonLinks.bookNow}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t('naturalSpring.cta.bookNow')}
              </a>
              <a 
                href={siteConfig.buttonLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {t('naturalSpring.cta.contact')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NascenteNatural;