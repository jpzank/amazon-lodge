import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';
import { 
  MdLaptop,
  MdPhotoCamera,
  MdFavorite,
  MdCelebration,
  MdPalette,
  MdGroups,
  MdOutlineChurch,
  MdOutlineCake
} from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';

const EventosNatureza = () => {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('eventos', 'fogo-no-rio')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Experiências na Natureza
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Descubra diferentes maneiras de aproveitar nosso espaço, seja para trabalho, 
            conexão ou celebração, sempre em harmonia com a natureza.
          </p>
        </div>
      </div>

      {/* Insights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Como Aproveitar Nosso Espaço</h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Ensaios Fotográficos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'eventos-especiais')} 
                    alt="Ensaios Fotográficos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdPhotoCamera className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Ensaios Fotográficos</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Ensaios para gestantes, noivos e celebrações
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Meia diária inclusa para o ensaio
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Garrafa de vinho selecionado pela casa inclusa
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Eternize seus momentos especiais em cenários únicos, com todo conforto e acolhimento"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Noite de Núpcias */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'eventos-especiais')} 
                    alt="Noite de Núpcias" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdFavorite className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Noite de Núpcias</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Roupão e espumante de boas-vindas
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Enxoval especial para o casal
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Decoração romântica especial
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Comece sua história de amor em um cenário mágico e acolhedor"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confraternizações */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'eventos-especiais')} 
                    alt="Confraternizações" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdOutlineCake className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Confraternizações</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Eventos familiares e corporativos
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Gastronomia personalizada
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Atividades recreativas
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Momentos de alegria e descontração em um ambiente acolhedor"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Residências Artísticas */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'eventos-especiais')} 
                    alt="Residências Artísticas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdPalette className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Residências Artísticas</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Espaços para criação artística
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Inspiração na natureza
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Ambiente contemplativo
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Um refúgio para artistas encontrarem inspiração e desenvolverem seus projetos"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini-Weddings */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'eventos-especiais')} 
                    alt="Mini-Weddings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdOutlineChurch className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Mini-Weddings</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Cerimônias intimistas até 40 pessoas
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Cenário natural deslumbrante
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Hospedagem para convidados
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Celebre o amor em meio à natureza"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nômade Digital */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'reuniao-executiva')} 
                    alt="Nômade Digital" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdLaptop className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Nômade Digital</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Wi-Fi de alta velocidade
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Espaços de trabalho inspiradores
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Ambiente tranquilo e produtivo
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Perfeito para quem busca equilibrar trabalho remoto com conexão com a natureza"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Retiros Corporativos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:h-48">
                <div className="md:w-1/4">
                  <img 
                    src={getFolderImage('eventos', 'ocasioes-especiais')} 
                    alt="Retiros Corporativos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MdGroups className="text-xl text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Retiros Corporativos</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="space-y-2 flex-1">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Integração em ambiente natural
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Atividades ao ar livre
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <BsCheckCircle className="text-primary flex-shrink-0" />
                        Espaço para workshops
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic flex-1">
                      "Fortaleça os laços da sua equipe em um ambiente inspirador"
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Realize Seu Sonho Conosco</h2>
          <p className="text-xl text-gray-600 mb-12">
            Nossa equipe está pronta para ajudar você a criar experiências memoráveis
          </p>
          <button 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://wa.me/556540420595', '_blank')}
          >
            Falar pelo WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default EventosNatureza; 