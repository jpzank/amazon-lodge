import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import PhotoCredit from '../components/PhotoCredit';
import { useTranslation } from 'react-i18next';

const ComoChegar = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841321/Jardim_da_Amazônia-3166_npmlu7.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
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
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('howToGet.map.title')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <div className="flex flex-col items-center gap-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('home.location.address.title')}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="text-lg">RODOVIA MT 10 - KM 88</p>
                      <p className="text-lg">SÃO JOSÉ DO RIO CLARO</p>
                      <p className="text-lg">MATO GROSSO - BRASIL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.9241309876206!2d-56.63488792350904!3d-13.540245537519661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a19415152a9b05%3A0xd016e0d7d7b65c17!2sJardim%20da%20Amaz%C3%B4nia%20Lodge!5e1!3m2!1sen!2sbr!4v1735970088546!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('howToGet.map.title')}
                  className="w-full"
                ></iframe>
              </div>
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
                <ol className="space-y-4">
                  {(() => {
                    const steps = t('howToGet.access.options.cuiaba.instructions.steps', { returnObjects: true });
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">{t('howToGet.contact.title')}</h2>
            <p className="text-xl text-gray-600 mb-12">
              {t('howToGet.contact.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="mailto:atendimento@jardimamazonia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaEnvelope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('footer.sections.contact.email')}</h3>
                <p className="text-gray-600">atendimento@jardimamazonia.com</p>
              </a>

              <a 
                href="https://wa.link/i6c6cj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('footer.sections.contact.whatsapp')}</h3>
                <p className="text-gray-600">+55 65 4042-0595</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('howToGet.recommendations.title')}</h3>
            <ul className="space-y-4">
              {(() => {
                const items = t('howToGet.recommendations.items', { returnObjects: true });
                return Array.isArray(items) ? items.map((item, index) => (
                  <li key={index} className="text-xl text-gray-600 leading-relaxed flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-1">{index + 1}</span>
                    {item}
                  </li>
                )) : null;
              })()}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComoChegar; 