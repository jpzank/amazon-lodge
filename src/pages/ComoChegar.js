import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import PhotoCredit from '../components/PhotoCredit';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const ComoChegar = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841321/Jardim_da_Amazônia-3166_npmlu7.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <SEO 
        title={t('meta.comoChegar.title')}
        description={t('meta.comoChegar.description')}
        image="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841321/Jardim_da_Amazônia-3166_npmlu7.jpg"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
          style={heroStyle}
        >
          <div className="relative z-20 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
              {t('howToGet.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
              {t('howToGet.hero.subtitle')}
            </p>
          </div>
          <PhotoCredit photographer="Marlon Erthal" />
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              {t('howToGet.intro.description')}
            </p>
          </div>
        </section>

        {/* Map and Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t('howToGet.map.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address Card */}
              <div className="bg-white rounded-3xl shadow-md p-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#E8F0EA] rounded-full flex items-center justify-center mb-6">
                    <FaMapMarkerAlt className="w-6 h-6 text-[#1A472A]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t('home.location.address.title')}</h3>
                  <div className="text-center space-y-2 text-gray-600">
                    <p>RODOVIA MT 10 - KM 88</p>
                    <p>SÃO JOSÉ DO RIO CLARO</p>
                    <p>MATO GROSSO - BRASIL</p>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="md:col-span-2">
                <a 
                  href="https://maps.app.goo.gl/ChpGnni9eEjmZ13Q9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#F5F5F5]">
                    <div className="aspect-w-16 aspect-h-10">
                      <img
                        src="/Map_screenshot.png"
                        alt={t('howToGet.map.alt')}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="bg-white rounded-full px-6 py-3 flex items-center gap-2">
                        <FaMapMarkerAlt className="w-5 h-5" />
                        <span className="font-medium">{t('howToGet.map.openInGoogleMaps')}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Route Options Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t('howToGet.access.title')}</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FaCar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howToGet.access.options.cuiaba.title')}</h3>
                <p className="text-lg text-gray-600 mb-8">{t('howToGet.access.options.cuiaba.distance')}</p>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('howToGet.access.options.cuiaba.instructions.title')}</h4>
                  <ol className="list-decimal list-inside space-y-4 text-gray-600">
                    {t('howToGet.access.options.cuiaba.instructions.steps', { returnObjects: true }).map((step, index) => (
                      <li key={index} className="text-lg">{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FaCar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howToGet.access.options.sinop.title')}</h3>
                <p className="text-lg text-gray-600 mb-8">{t('howToGet.access.options.sinop.distance')}</p>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('howToGet.access.options.sinop.instructions.title')}</h4>
                  <ol className="space-y-4">
                    {(() => {
                      const steps = t('howToGet.access.options.sinop.instructions.steps', { returnObjects: true });
                      return Array.isArray(steps) ? steps.map((step, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">{index + 1}</span>
                          {step}
                        </li>
                      )) : null;
                    })()}
                  </ol>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howToGet.access.importantNote.title')}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('howToGet.access.importantNote.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t('howToGet.contact.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="https://wa.me/556540420595"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-green-500 text-white py-4 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span className="text-lg font-medium">WhatsApp</span>
              </a>
              <a
                href="mailto:atendimento@jardimdaamazonia.com"
                className="flex items-center justify-center gap-4 bg-primary text-white py-4 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                <FaEnvelope className="w-6 h-6" />
                <span className="text-lg font-medium">Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Important Note Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">{t('howToGet.recommendations.title')}</h2>
              <ul className="space-y-4">
                {t('howToGet.recommendations.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">{index + 1}</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComoChegar; 