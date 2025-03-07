import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const getFeatureIcon = (key) => {
  const iconMap = {
    water: 'droplet',
    deck: 'sun',
    immersion: 'leaf',
    path: 'path',
    trail: 'hiking',
    communal: 'users',
    default: 'check'
  };
  return iconMap[key] || iconMap.default;
};

const Lodge = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842392/Jardim_da_Amazônia-3829_hauhip.jpg')`
  };

  const areas = [
    {
      id: 'piscina',
      title: t('externalAreas.areas.naturalPool.title'),
      description: t('externalAreas.areas.naturalPool.description'),
      features: (() => {
        const features = t('externalAreas.areas.naturalPool.features', { returnObjects: true });
        return Object.entries(features || {}).map(([key, text]) => ({
          icon: getFeatureIcon(key),
          text
        }));
      })(),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841939/Jardim_da_Amazônia-3434_jsn8sr.jpg'
    },
    {
      id: 'trilhas',
      title: t('externalAreas.areas.trails.title'),
      description: t('externalAreas.areas.trails.description'),
      features: (() => {
        const features = t('externalAreas.areas.trails.features', { returnObjects: true });
        return (Array.isArray(features) ? features : []).map(text => ({
          icon: getFeatureIcon('trail'),
          text
        }));
      })(),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841326/Jardim_da_Amazônia-3216_yrohd0.jpg'
    },
    {
      id: 'convivencia',
      title: t('externalAreas.areas.communalArea.title'),
      description: t('externalAreas.areas.communalArea.description'),
      features: (() => {
        const features = t('externalAreas.areas.communalArea.features', { returnObjects: true });
        return (Array.isArray(features) ? features : []).map(text => ({
          icon: getFeatureIcon('communal'),
          text
        }));
      })(),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842551/Jardim_da_Amazônia-3902_nimzuq.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title={t('meta.lodge.title')}
        description={t('meta.lodge.description')}
        image="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085785/lodge-hero_kqnp26.jpg"
        canonicalUrl="https://www.jardimdaamazonia.com/lodge"
        noindex={false}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
          style={heroStyle}
        >
          <div className="relative z-20 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
              {t('lodge.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
              {t('lodge.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <blockquote className="relative">
              <div className="relative z-10">
                <span className="text-5xl text-primary-dark/20 absolute -top-4 -left-6">"</span>
                <p className="text-xl text-gray-700 leading-relaxed text-justify pl-8 pr-4">
                  {t('lodge.intro.quote')}
                </p>
                <span className="text-5xl text-primary-dark/20 absolute -bottom-8 -right-4">"</span>
              </div>
              <footer className="mt-8 text-right">
                <cite className="text-gray-600 font-medium not-italic">— {t('lodge.intro.author')}</cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Areas Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="space-y-16">
              {areas.map((area) => (
                <div key={area.id} className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
                    >
                      <img 
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">{area.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">{area.description}</p>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Destaques</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {area.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {typeof feature === 'string' ? feature : feature.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {area.id === 'trilhas' && (
                      <Link 
                        to="/trilhas"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 mt-auto"
                      >
                        Saiba mais
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Preview Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center mb-16 relative">
              {t('lodge.activities.title')}
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {t('lodge.activities.items.birdwatching.title')}
                </h3>
                <p className="text-gray-600 text-center">
                  {t('lodge.activities.items.birdwatching.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⚽</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {t('lodge.activities.items.recreation.title')}
                </h3>
                <p className="text-gray-600 text-center">
                  {t('lodge.activities.items.recreation.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {t('lodge.activities.items.photography.title')}
                </h3>
                <p className="text-gray-600 text-center">
                  {t('lodge.activities.items.photography.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {t('lodge.activities.items.meditation.title')}
                </h3>
                <p className="text-gray-600 text-center">
                  {t('lodge.activities.items.meditation.description')}
                  <br />
                  <span className="text-sm italic">{t('lodge.activities.items.meditation.note')}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-semibold text-center mb-16 relative">
              {t('lodge.sustainability.title')}
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  {t('lodge.sustainability.description')}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {(() => {
                    const features = t('lodge.sustainability.features', { returnObjects: true });
                    return (Array.isArray(features) ? features : []).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ));
                  })()}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-semibold mb-6">{t('lodge.cta.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('lodge.cta.description')}
            </p>
            <button 
              onClick={() => window.open('https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4', '_blank')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {t('lodge.cta.button')}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Lodge; 