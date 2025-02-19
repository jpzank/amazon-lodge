import React, { useState } from 'react';

const GuiasCampo = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842391/Jardim_da_Amazônia-3833_wmmlqx.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [activeCategory, setActiveCategory] = useState('mamiferos');

  const categories = {
    mamiferos: 'Mamíferos',
    aves: 'Aves'
  };

  const vegetationTypes = [
    {
      title: 'Floresta de Terra Firme',
      description: 'Área não sujeita a inundações periódicas, com grande diversidade de espécies.'
    },
    {
      title: 'Floresta de Igapó',
      description: 'Área periodicamente inundada, com adaptações específicas da flora.'
    },
    {
      title: 'Floresta Decídua',
      description: 'Vegetação que perde folhas sazonalmente, adaptada a períodos secos.'
    },
    {
      title: 'Mata Ciliar',
      description: 'Vegetação às margens dos rios, essencial para a preservação dos cursos d\'água.'
    }
  ];

  const scientificPublications = [
    {
      category: 'aves',
      items: [
        {
          title: 'Aves do Jardim da Amazônia',
          authors: 'Equipe de Pesquisa do Jardim da Amazônia',
          year: '-',
          description: 'Catálogo das espécies de aves observadas na região. Conteúdo em desenvolvimento.',
          downloadUrl: null,
          status: 'Em desenvolvimento'
        }
      ]
    },
    {
      category: 'mamiferos',
      items: [
        {
          title: 'Mamíferos do Jardim da Amazônia',
          authors: 'Colaboração entre:',
          institutions: [
            'Jardim da Amazônia',
            'University of Salford - Manchester',
            'GECAS - Grupo de Ecologia Aplicada UFMT - Campus Sinop',
            'U. Porto (University of Porto)',
            'Vida Selvagem - Medicina da Conservação',
            'UFMT (Universidade Federal de Mato Grosso)',
            'Instituto Ecótono - IEco'
          ],
          year: '2023',
          description: 'Lista dos mamíferos registrados na área do Jardim da Amazônia.',
          downloadUrl: '/docs/mamiferos-jardim-amazonia.pdf'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-8"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Guias de Campo
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Conheça a biodiversidade do Jardim da Amazônia
          </p>
        </div>
      </div>

      {/* Guides Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Listas de Espécies</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Nossa região abriga uma extraordinária biodiversidade, documentada através 
            de anos de pesquisa científica. Aqui você encontra guias e publicações 
            sobre nossa fauna e flora.
          </p>
        </div>
      </section>

      {/* Species Lists Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === key 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              {scientificPublications
                .find(cat => cat.category === activeCategory)?.items
                .map((pub, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 mb-8 last:mb-0">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{pub.title}</h3>
                      <p className="text-gray-600 font-medium">{pub.authors}</p>
                      {pub.institutions && (
                        <ul className="text-gray-600 list-none space-y-1">
                          {pub.institutions.map((institution, idx) => (
                            <li key={idx}>{institution}</li>
                          ))}
                        </ul>
                      )}
                      <p className="text-gray-500">Ano: {pub.year}</p>
                      <p className="text-gray-600">{pub.description}</p>
                      {pub.downloadUrl ? (
                        <a 
                          href={pub.downloadUrl} 
                          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Open PDF
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center px-6 py-3 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed">
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

      {/* Vegetation Types Section */}
      {activeCategory === 'vegetacao' && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Tipos de Vegetação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {vegetationTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Support Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Apoio à Pesquisa</h2>
          <p className="text-xl text-gray-600 mb-12">
            O Jardim da Amazônia apoia ativamente a pesquisa científica em nossa região. 
            Se você é pesquisador e tem interesse em desenvolver estudos em nossa área, 
            entre em contato conosco.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:adm@jardimamazonia.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">Clima</h2>
          <div className="space-y-12">
            <p className="text-xl text-gray-600 text-center">
              Nossa região apresenta um clima típico amazônico, com estações bem 
              definidas. O conhecimento das condições climáticas é essencial para 
              o planejamento de atividades de observação da fauna e flora.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Estação Chuvosa</h3>
                <p className="text-gray-600">Novembro a Abril</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Estação Seca</h3>
                <p className="text-gray-600">Maio a Outubro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuiasCampo; 