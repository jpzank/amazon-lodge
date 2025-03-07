import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const EstacaoPesquisa = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `url(https://res.cloudinary.com/dxlhv2mji/image/upload/v1740008226/WhatsApp_Image_2025-02-19_at_14.46.05_1_aj8jn8.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  };

  return (
    <>
      <SEO 
        title={t('meta.estacaoPesquisa.title')}
        description={t('meta.estacaoPesquisa.description')}
        image="https://res.cloudinary.com/dxlhv2mji/image/upload/v1740008226/WhatsApp_Image_2025-02-19_at_14.46.05_1_aj8jn8.jpg"
      />
      <div className="min-h-screen bg-white">
        <div className="relative min-h-[60vh] flex items-center justify-center" style={heroStyle}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('researchStation.hero.title')}</h1>
            <p className="text-xl md:text-2xl">{t('researchStation.hero.subtitle')}</p>
          </div>
        </div>

        <div className="w-full flex justify-center py-8 bg-white">
          <img 
            src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1740006003/Estacao_de_Pesquisa_i5kai7.png"
            alt={t('researchStation.hero.title')}
            className="h-60 w-auto"
          />
        </div>

        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              {t('researchStation.intro.description')}
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">{t('researchStation.support.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{t('researchStation.support.infrastructure.title')}</h3>
                <p className="text-gray-700">
                  {t('researchStation.support.infrastructure.description')}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{t('researchStation.support.database.title')}</h3>
                <p className="text-gray-700">
                  {t('researchStation.support.database.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8">{t('researchStation.species.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-12">
              {t('researchStation.species.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">{t('researchStation.species.fauna.title')}</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2"></div>
                    <div>
                      <span className="font-semibold">{t('researchStation.species.fauna.items.spiderMonkey.name')}</span>
                      <br />
                      <span className="text-sm italic">({t('researchStation.species.fauna.items.spiderMonkey.scientificName')})</span>
                      <p className="text-sm mt-1">{t('researchStation.species.fauna.items.spiderMonkey.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2"></div>
                    <div>
                      <span className="font-semibold">{t('researchStation.species.fauna.items.sakiMonkey.name')}</span>
                      <br />
                      <span className="text-sm italic">({t('researchStation.species.fauna.items.sakiMonkey.scientificName')})</span>
                      <p className="text-sm mt-1">{t('researchStation.species.fauna.items.sakiMonkey.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2"></div>
                    <div>
                      <span className="font-semibold">{t('researchStation.species.fauna.items.umbrellabird.name')}</span>
                      <br />
                      <span className="text-sm italic">({t('researchStation.species.fauna.items.umbrellabird.scientificName')})</span>
                      <p className="text-sm mt-1">{t('researchStation.species.fauna.items.umbrellabird.description')}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">{t('researchStation.species.flora.title')}</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2"></div>
                    <div>
                      <span className="font-semibold">{t('researchStation.species.flora.items.angelim.name')}</span>
                      <br />
                      <span className="text-sm italic">({t('researchStation.species.flora.items.angelim.scientificName')})</span>
                      <p className="text-sm mt-1">{t('researchStation.species.flora.items.angelim.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2"></div>
                    <div>
                      <span className="font-semibold">{t('researchStation.species.flora.items.buriti.name')}</span>
                      <br />
                      <span className="text-sm italic">({t('researchStation.species.flora.items.buriti.scientificName')})</span>
                      <p className="text-sm mt-1">{t('researchStation.species.flora.items.buriti.description')}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2"></div>
                    <div>
                      <span className="font-semibold">{t('researchStation.species.flora.items.jatoba.name')}</span>
                      <br />
                      <span className="text-sm italic">({t('researchStation.species.flora.items.jatoba.scientificName')})</span>
                      <p className="text-sm mt-1">{t('researchStation.species.flora.items.jatoba.description')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800">{t('researchStation.contact.title')}</h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              {t('researchStation.contact.description')}
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:adm@jardimdaamazonia.com"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-lg font-medium rounded-xl hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                {t('researchStation.contact.button')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default EstacaoPesquisa; 