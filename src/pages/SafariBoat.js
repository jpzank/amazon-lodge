import React from 'react';
import { useTranslation } from 'react-i18next';
import PhotoCredit from '../components/PhotoCredit';

const SafariBoat = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('safariBoat.species.items.kingfisher.title'),
      description: t('safariBoat.species.items.kingfisher.description'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450236/martin_pescador_miudo_-_JHONATA_ARAUJO_-_6_gwslgv.jpg',
      photographer: 'Jhonata Araujo'
    },
    {
      title: t('safariBoat.species.items.caiman.title'),
      description: t('safariBoat.species.items.caiman.description'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1740001582/jacare_ggghha.jpg',
      photographer: 'Pablo Edini'
    },
    {
      title: t('safariBoat.species.items.tapir.title'),
      description: t('safariBoat.species.items.tapir.description'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1740001509/anta_atravessando_cfm9qo.jpg',
      photographer: 'Vincent Kurt Lo'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085781/safari-boat_rvnwku.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('safariBoat.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('safariBoat.hero.subtitle')}
          </p>
        </div>
        <PhotoCredit photographer="Kiko Silva" />
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed text-justify mb-8">
            {t('safariBoat.intro.description1')}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed text-justify">
            {t('safariBoat.intro.description2')}
          </p>
        </div>
      </section>

      {/* Species Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">{t('safariBoat.species.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <PhotoCredit photographer={section.photographer} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">{t('safariBoat.checklist.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-medium text-lg text-primary mb-4">{t('safariBoat.checklist.protection.title')}</h4>
                <ul className="space-y-3">
                  {t('safariBoat.checklist.protection.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 border-2 border-primary rounded-sm"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-lg text-primary mb-4">{t('safariBoat.checklist.equipment.title')}</h4>
                <ul className="space-y-3">
                  {t('safariBoat.checklist.equipment.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-700">
                      <div className="flex-shrink-0 w-5 h-5 border-2 border-primary rounded-sm"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SafariBoat; 