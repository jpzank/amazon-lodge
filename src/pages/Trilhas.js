import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoCredit from '../components/PhotoCredit';
import { 
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

const Trilhas = () => {
  const [expandedRoteiro, setExpandedRoteiro] = useState(null);

  const trilhas = [
    {
      id: 'jatoba',
      title: 'Trilha do Jatobá',
      description: 'Trilha que leva a uma árvore centenária de Jatobá, com mais de 40 metros de altura.',
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841326/Jardim_da_Amazônia-3216_yrohd0.jpg',
      photographer: 'Marlon Erthal',
      duracao: '1h30min',
      distancia: '2.5km',
      dificuldade: 'Fácil'
    },
    {
      id: 'lagoa',
      title: 'Lagoa das Araras',
      description: 'Caminhada até uma lagoa natural onde é possível observar araras e outras aves.',
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841322/Jardim_da_Amazônia-3188_lceiu2.jpg',
      photographer: 'Marlon Erthal',
      duracao: '2h',
      distancia: '3km',
      dificuldade: 'Moderada'
    },
    {
      id: 'laboratorio',
      title: 'Trilha do Laboratório',
      description: 'Percurso que passa por pontos de pesquisa científica e observação da fauna.',
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841321/Jardim_da_Amazônia-3166_npmlu7.jpg',
      photographer: 'Marlon Erthal',
      duracao: '1h',
      distancia: '1.8km',
      dificuldade: 'Fácil'
    },
    {
      id: 'arinos',
      title: 'Rio Arinos',
      description: 'Trilha que margeia o Rio Arinos, ideal para observação de aves e primatas.',
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841319/Jardim_da_Amazônia-3179_xym08p.jpg',
      photographer: 'Marlon Erthal',
      duracao: '2h30min',
      distancia: '4km',
      dificuldade: 'Moderada'
    },
    {
      id: 'piquia',
      title: 'Trilha do Pequiá',
      description: 'Caminhada por área de transição entre Cerrado e Amazônia.',
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841319/Jardim_da_Amazônia-3266_mbiwmz.jpg',
      photographer: 'Marlon Erthal',
      duracao: '1h45min',
      distancia: '2.8km',
      dificuldade: 'Fácil'
    },
    {
      id: 'angelim',
      title: 'Trilha do Angelim',
      description: 'Percurso que leva a uma majestosa árvore de Angelim, típica da região.',
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841318/Jardim_da_Amazônia-3256_h9yfjv.jpg',
      photographer: 'Marlon Erthal',
      duracao: '2h15min',
      distancia: '3.5km',
      dificuldade: 'Moderada'
    }
  ];

  const roteiros = {
    '3dias': {
      titulo: '3 Dias / 2 Noites',
      manha: ['Trilha do Jatobá'],
      tarde: ['Lagoa das Araras']
    },
    '4dias': {
      titulo: '4 Dias / 3 Noites',
      manha: ['Trilha do Laboratório', 'Visita ao Rio Arinos'],
      tarde: ['Trilha do Jatobá', 'Lagoa das Araras', 'Trilha do Piquiá']
    },
    '5dias': {
      titulo: '5 Dias / 4 Noites',
      manha: ['Trilha do Laboratório', 'Visita ao Rio Arinos', 'Visita a agriculturas locais'],
      tarde: ['Trilha do Jatobá', 'Lagoa das Araras', 'Trilha do Piquiá', 'Trilha do Angelim']
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
            Trilhas Ecológicas
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Explore a biodiversidade da Amazônia
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
                      Duração: {trilha.duracao}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                      Distância: {trilha.distancia}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      Dificuldade: {trilha.dificuldade}
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
          <h2 className="text-3xl font-bold text-center mb-12">Informações Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">O que levar</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Calçados apropriados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Protetor solar
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Repelente
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Água
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Recomendações</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Acompanhamento de guia
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Horários mais frescos
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Roupas leves e confortáveis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Respeito à natureza
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roteiros Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Roteiros Sugeridos</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {Object.entries(roteiros).map(([id, roteiro]) => (
              <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button 
                  className={`w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200
                    ${expandedRoteiro === id ? 'bg-gray-50' : ''}`}
                  onClick={() => toggleRoteiro(id)}
                >
                  <h3 className="text-xl font-semibold">{roteiro.titulo}</h3>
                  <FontAwesomeIcon 
                    icon={expandedRoteiro === id ? faChevronUp : faChevronDown} 
                    className="text-lg text-gray-500" 
                  />
                </button>
                {expandedRoteiro === id && (
                  <div className="px-8 pb-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Manhã</h4>
                        <div className="space-y-4">
                          {roteiro.manha.map((atividade) => renderAtividade(atividade))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Tarde</h4>
                        <div className="space-y-4">
                          {roteiro.tarde.map((atividade) => renderAtividade(atividade))}
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