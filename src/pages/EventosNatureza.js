import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';
import { 
  MdBusinessCenter, 
  MdNaturePeople, 
  MdCelebration
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
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Eventos na Natureza
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Transforme reuniões, imersões e celebrações em momentos inesquecíveis, cercados 
            pela tranquilidade e beleza natural.
          </p>
        </div>
      </div>

      {/* Event Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Pacotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Reuniões Executivas */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={getFolderImage('eventos', 'reuniao-executiva')} 
                  alt="Reuniões Executivas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MdBusinessCenter className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Reuniões Executivas</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Sala privativa para até 10 pessoas
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Coffee breaks personalizados
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Almoço executivo incluso
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Wi-Fi de alta velocidade
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Equipamentos audiovisuais
                  </li>
                </ul>
                <div className="pt-6 border-t border-gray-200">
                  <span className="block font-semibold text-gray-900 mb-2">Pacote Day Use</span>
                  <p className="text-gray-600">8 horas de evento</p>
                </div>
              </div>
            </div>

            {/* Team Building */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={getFolderImage('eventos', 'ocasioes-especiais')} 
                  alt="Team Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MdNaturePeople className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Team Building</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Atividades de integração
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Hospedagem completa
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Todas as refeições inclusas
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Trilhas e atividades na natureza
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Espaço para reuniões
                  </li>
                </ul>
                <div className="pt-6 border-t border-gray-200">
                  <span className="block font-semibold text-gray-900 mb-2">Pacote com Hospedagem</span>
                  <p className="text-gray-600">2-3 dias de imersão</p>
                </div>
              </div>
            </div>

            {/* Eventos Especiais */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src={getFolderImage('eventos', 'eventos-especiais')} 
                  alt="Eventos Especiais" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MdCelebration className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Eventos Especiais</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Espaço para até 40 pessoas
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Serviço de buffet completo
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Decoração personalizada
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Hospedagem opcional
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <BsCheckCircle className="text-primary flex-shrink-0" />
                    Coordenador de eventos
                  </li>
                </ul>
                <div className="pt-6 border-t border-gray-200">
                  <span className="block font-semibold text-gray-900 mb-2">Pacote Flexível</span>
                  <p className="text-gray-600">Customizável às suas necessidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Planeje Seu Evento Conosco</h2>
          <p className="text-xl text-gray-600 mb-12">
            Nossa equipe está pronta para criar uma experiência customizada para sua empresa
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