import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoCredit from '../components/PhotoCredit';
import { useTranslation } from 'react-i18next';
import { 
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

const Trilhas = () => {
  const { t } = useTranslation();
  const [expandedRoteiro, setExpandedRoteiro] = useState(null);

  const trilhas = [
    {
      id: 'jatoba',
      title: t('trails.trails.jatoba.title'),
      description: t('trails.trails.jatoba.description'),
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450241/hypoedaleus%20guttatus_ilemhy.jpg',
      photographer: 'Vincent Kurt Lo',
      duracao: t('trails.trails.jatoba.duration'),
      distancia: t('trails.trails.jatoba.distance'),
      dificuldade: t('trails.trails.jatoba.difficulty')
    },
    {
      id: 'lagoa',
      title: t('trails.trails.lagoa.title'),
      description: t('trails.trails.lagoa.description'),
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085800/birdwatching_yywf16.jpg',
      photographer: 'Kiko Silva',
      duracao: t('trails.trails.lagoa.duration'),
      distancia: t('trails.trails.lagoa.distance'),
      dificuldade: t('trails.trails.lagoa.difficulty')
    },
    {
      id: 'laboratorio',
      title: t('trails.trails.laboratorio.title'),
      description: t('trails.trails.laboratorio.description'),
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450239/saira_de_cabeça_azul_-Vincent_Kurt_lo_1_z5hik4.jpg',
      photographer: 'Vincent Kurt Lo',
      duracao: t('trails.trails.laboratorio.duration'),
      distancia: t('trails.trails.laboratorio.distance'),
      dificuldade: t('trails.trails.laboratorio.difficulty')
    },
    {
      id: 'arinos',
      title: t('trails.trails.arinos.title'),
      description: t('trails.trails.arinos.description'),
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1740003077/arinos_cytj5q.jpg',
      photographer: 'Acervo Jardim Amazônia',
      duracao: t('trails.trails.arinos.duration'),
      distancia: t('trails.trails.arinos.distance'),
      dificuldade: t('trails.trails.arinos.difficulty')
    },
    {
      id: 'piquia',
      title: t('trails.trails.piquia.title'),
      description: t('trails.trails.piquia.description'),
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1740003791/WhatsApp_Image_2025-02-19_at_14.21.25_pxi1lh.jpg',
      photographer: 'Acervo Jardim Amazônia',
      duracao: t('trails.trails.piquia.duration'),
      distancia: t('trails.trails.piquia.distance'),
      dificuldade: t('trails.trails.piquia.difficulty')
    },
    {
      id: 'angelim',
      title: t('trails.trails.angelim.title'),
      description: t('trails.trails.angelim.description'),
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1740003668/PHOTO-2025-02-19-14-07-39_ese2ez.jpg',
      photographer: 'Acervo Jardim Amazônia',
      duracao: t('trails.trails.angelim.duration'),
      distancia: t('trails.trails.angelim.distance'),
      dificuldade: t('trails.trails.angelim.difficulty')
    }
  ];

  const roteiros = {
    '3dias': {
      titulo: t('trails.itineraries.3days.title'),
      manha: t('trails.itineraries.3days.morning', { returnObjects: true }),
      tarde: t('trails.itineraries.3days.afternoon', { returnObjects: true })
    },
    '4dias': {
      titulo: t('trails.itineraries.4days.title'),
      manha: t('trails.itineraries.4days.morning', { returnObjects: true }),
      tarde: t('trails.itineraries.4days.afternoon', { returnObjects: true })
    },
    '5dias': {
      titulo: t('trails.itineraries.5days.title'),
      manha: t('trails.itineraries.5days.morning', { returnObjects: true }),
      tarde: t('trails.itineraries.5days.afternoon', { returnObjects: true })
    }
  };

  const renderAtividade = (nome) => (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
      <div>
        <h5 className="text-lg font-medium text-gray-900 mb-1">{nome}</h5>
        <p className="text-gray-700 text-sm">{trilhas.find(t => t.title === nome)?.description}</p>
      </div>
    </div>
  );

  const toggleRoteiro = (id) => {
    setExpandedRoteiro(expandedRoteiro === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1737919751/trilhas-hero_qjfilt.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('trails.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('trails.hero.subtitle')}
          </p>
        </div>
        <PhotoCredit photographer="Joao Marcos Rosa" />
      </div>

      {/* Trails Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trilhas.map((trilha) => (
              <div key={trilha.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={trilha.imagem}
                    alt={trilha.title}
                    className="w-full h-full object-cover"
                    style={
                      trilha.id === 'lagoa' ? { objectPosition: 'top' } :
                      trilha.id === 'arinos' ? { objectPosition: 'bottom' } :
                      trilha.id === 'angelim' ? { objectPosition: 'bottom' } :
                      undefined
                    }
                  />
                  <PhotoCredit photographer={trilha.photographer} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{trilha.title}</h3>
                  <p className="text-gray-600 mb-4">{trilha.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {t('trails.details.duration')}: {trilha.duracao}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                      {t('trails.details.distance')}: {trilha.distancia}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      {t('trails.details.difficulty')}: {trilha.dificuldade}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('trails.info.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('trails.info.whatToBring.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                {t('trails.info.whatToBring.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('trails.info.recommendations.title')}</h3>
              <ul className="space-y-3 text-gray-600">
                {t('trails.info.recommendations.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roteiros Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('trails.itineraries.title')}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {Object.entries(roteiros).map(([key, roteiro]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => toggleRoteiro(key)}
                >
                  <h3 className="text-xl font-semibold">{roteiro.titulo}</h3>
                  <FontAwesomeIcon
                    icon={expandedRoteiro === key ? faChevronUp : faChevronDown}
                    className="text-gray-500"
                  />
                </button>
                {expandedRoteiro === key && (
                  <div className="px-6 pb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Manhã:</h4>
                        <div className="space-y-2">
                          {roteiro.manha.map((atividade, index) => (
                            <div key={index}>{renderAtividade(atividade)}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Tarde:</h4>
                        <div className="space-y-2">
                          {roteiro.tarde.map((atividade, index) => (
                            <div key={index}>{renderAtividade(atividade)}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trilhas; 