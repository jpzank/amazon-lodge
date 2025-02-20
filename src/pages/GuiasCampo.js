import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GuiasCampo = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842391/Jardim_da_Amazônia-3833_wmmlqx.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [activeCategory, setActiveCategory] = useState('mammals');

  const categories = {
    mammals: t('fieldGuides.categories.mammals'),
    birds: t('fieldGuides.categories.birds')
  };

  const scientificPublications = [
    {
      category: 'birds',
      items: [
        {
          title: t('fieldGuides.publications.birds.title'),
          authors: t('fieldGuides.publications.birds.authors'),
          year: t('fieldGuides.publications.birds.year'),
          description: t('fieldGuides.publications.birds.description'),
          downloadUrl: null,
          status: t('fieldGuides.publications.birds.status')
        }
      ]
    },
    {
      category: 'mammals',
      items: [
        {
          title: t('fieldGuides.publications.mammals.title'),
          authors: t('fieldGuides.publications.mammals.authors'),
          institutions: [
            'Jardim da Amazônia',
            'University of Salford - Manchester',
            'GECAS - Grupo de Ecologia Aplicada UFMT - Campus Sinop',
            'U. Porto (University of Porto)',
            'Vida Selvagem - Medicina da Conservação',
            'UFMT (Universidade Federal de Mato Grosso)',
            'Instituto Ecótono - IEco'
          ],
          year: t('fieldGuides.publications.mammals.year'),
          description: t('fieldGuides.publications.mammals.description'),
          downloadUrl: '/docs/mamiferos-jardim-amazonia.pdf'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced contrast and text shadow */}
      <div 
        className="relative h-[75vh] flex items-center justify-center text-center text-white mb-12"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-wide text-shadow-lg">
            {t('fieldGuides.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto tracking-wide text-shadow-lg font-medium">
            {t('fieldGuides.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Guides Intro Section - Enhanced spacing and typography */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
            {t('fieldGuides.speciesList.title')}
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            {t('fieldGuides.speciesList.description')}
          </p>
        </div>
      </section>

      {/* Species Lists Section - Enhanced card design */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === key 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {scientificPublications
                .find(cat => cat.category === activeCategory)?.items
                .map((pub, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl p-10 transition-all duration-300 hover:-translate-y-2 mb-10 last:mb-0">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900">{pub.title}</h3>
                      <p className="text-lg text-gray-700 font-medium">{pub.authors}</p>
                      {pub.institutions && (
                        <ul className="text-gray-600 list-none space-y-2 pl-4 border-l-4 border-primary/20">
                          {pub.institutions.map((institution, idx) => (
                            <li key={idx} className="text-lg">{institution}</li>
                          ))}
                        </ul>
                      )}
                      <p className="text-lg text-gray-500 font-medium">Ano: {pub.year}</p>
                      <p className="text-lg text-gray-600 leading-relaxed">{pub.description}</p>
                      {pub.downloadUrl ? (
                        <a 
                          href={pub.downloadUrl} 
                          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-medium rounded-xl hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Open PDF
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center px-8 py-4 bg-gray-200 text-gray-600 text-lg font-medium rounded-xl cursor-not-allowed">
                          {pub.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Support Section - Enhanced call-to-action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800">
            {t('fieldGuides.research.title')}
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {t('fieldGuides.research.description')}
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:adm@jardimamazonia.com"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-lg font-medium rounded-xl hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {t('fieldGuides.research.email')}
            </a>
            <a 
              href="/estacao-pesquisa"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary border-2 border-primary text-lg font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {t('fieldGuides.research.learnMore')}
            </a>
          </div>
        </div>
      </section>

      {/* Climate Section - Enhanced card design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            {t('fieldGuides.climate.title')}
          </h2>
          <div className="space-y-12">
            <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              {t('fieldGuides.climate.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-primary/5 rounded-2xl p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('fieldGuides.climate.rainy.title')}
                </h3>
                <p className="text-xl text-gray-700 font-medium">
                  {t('fieldGuides.climate.rainy.period')}
                </p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('fieldGuides.climate.dry.title')}
                </h3>
                <p className="text-xl text-gray-700 font-medium">
                  {t('fieldGuides.climate.dry.period')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuiasCampo; 