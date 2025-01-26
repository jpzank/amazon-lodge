import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';
import { siteConfig } from '../config/siteConfig';

const Birdwatching = () => {
  const heroImageUrl = getFolderImage('birdwatching', 'hero');
  console.log('Hero image URL:', heroImageUrl); // For debugging

  const heroStyle = {
    backgroundImage: heroImageUrl ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImageUrl})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
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
            Birdwatching
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Top Hotspot para Observação de Aves no Brasil
          </p>
        </div>
      </div>

      {/* Hotspot Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-16 relative">
              Reconhecimento Internacional
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <span className="block text-4xl font-bold text-primary mb-2">Top 3</span>
                <span className="text-gray-600">Hotspot Brasil</span>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <span className="block text-4xl font-bold text-primary mb-2">Top 2</span>
                <span className="text-gray-600">Mato Grosso</span>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <span className="block text-4xl font-bold text-primary mb-2">587</span>
                <span className="text-gray-600">Espécies Catalogadas</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              O Jardim da Amazônia alcançou em 2024 o expressivo número de 587 espécies de aves catalogadas 
              pelo E-bird/The Cornell Lab.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Species Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            Espécies Emblemáticas
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Criticamente em Perigo (CR) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="/src/images/birdwatching/tie-bicudo.jpg"
                  alt="Tiê-bicudo"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                  CR
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tiê-bicudo</h3>
                <p className="text-sm text-primary italic mb-4">Conothraupis mesoleuca</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ave endêmica do Brasil, descrita em 1939 durante a expedição de Claude Levi Strauss. 
                  O Rio Claro representa a quarta área conhecida de ocorrência desta espécie rara.
                </p>
              </div>
            </div>

            {/* Quase Ameaçada (NT) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="src/images/birdwatching/curica.jpg"
                  alt="Curica-de-bochecha-laranja"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-600 rounded">
                  NT
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curica-de-bochecha-laranja</h3>
                <p className="text-sm text-primary italic mb-4">Pyrilia barrabandi</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Papagaio com cabeça preta, mancha branca nos olhos e bochechas laranjas. 
                  Espetaculares manchas coloridas nas asas contrastam com o corpo verde.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="src/images/birdwatching/mutum.jpg"
                  alt="Mutum-cavalo"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-600 rounded">
                  NT
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mutum-cavalo</h3>
                <p className="text-sm text-primary italic mb-4">Mitu tuberosum</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ave grande escura de florestas não perturbada. Seu bico vermelho com uma protuberância 
                  é facilmente reconhecível.
                </p>
              </div>
            </div>

            {/* Pouco Preocupante (LC) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="src/images/birdwatching/anambe.jpg"
                  alt="Anambé-preto"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-green-600 rounded">
                  LC
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Anambé-preto</h3>
                <p className="text-sm text-primary italic mb-4">Cephalopterus ornatus</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fantástica ave amazônica que parece um enorme corvo, com crista espessa, 
                  "trança" pendente na garganta e olhos claros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodiversity Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16 relative">
              Biodiversidade
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-16">
              Em um cenário singular onde o Cerrado encontra a Amazônia, nosso lodge oferece a rara oportunidade de 
              vivenciar a interação de duas das mais ricas biodiversidades do planeta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Espécies Amazônicas</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Capitão-de-cinta (Capito dayi)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">VU</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Coroa-de-fogo (Heterocercus linteatus)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">LC</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Cambaxirra-cinzenta (Odontorchilus cinereus)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">NT</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Topetinho-do-brasil-central (Lophornis gouldii)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">VU</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Destaques Regionais</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Uiraçu (Morphnus guianensis)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">NT</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Urubu-rei (Sarcoramphus papa)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">LC</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Limpa-folha-do-buriti (Berlepschia rikeri)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">LC</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Tucano-de-papo-branco (Ramphastos tucanus)
                    <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">VU</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Observation Spots Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            Pontos de Observação
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Matas Ciliares do Rio Claro</h3>
              <p className="text-gray-600">
                Habitat do raro Tiê-bicudo e diversas espécies amazônicas. A vegetação aberta ao 
                longo dos lagos oferece condições essenciais para observação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trilha do Jatobá</h3>
              <p className="text-gray-600">
                Local privilegiado para observação do Capitão-de-cinta e outras espécies florestais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lagoa do Tiê-bicudo</h3>
              <p className="text-gray-600">
                Tour especial de barco para observação do Tiê-bicudo e outras espécies aquáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Tours Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16 relative">
              Tour Especial de Birdwatching
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Horário</h3>
                  <p className="text-lg text-gray-600">Saída às 5:30h da manhã</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Roteiro</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Safari de barco até a "Lagoa do Tiê-bicudo"
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Observação de aves no Rio Claro e Lagos
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Parada na "Trilha da Cabana" para espécies florestais
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Possibilidade de observar o Macaco-aranha-de-cara-preta
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Retorno para almoço no lodge
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-16 relative">
              Referências Internacionais
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href={siteConfig.buttonLinks.ebirdHotspot} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                E-Bird
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a 
                href={siteConfig.buttonLinks.birdlifeDatazone} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                BirdLife International
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a 
                href={siteConfig.buttonLinks.wikiAves} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                WikiAves
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-6">Reserve Sua Experiência</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Venha descobrir por que somos um dos principais destinos de birdwatching do Brasil
          </p>
          <button 
            onClick={() => window.open('https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4', '_blank')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Fazer Reserva
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Birdwatching; 