import React, { useState } from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const heroStyle = {
    backgroundImage: `url(${getFolderImage('hero/faq-hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const toggleItem = (sectionId, itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${sectionId}-${itemId}`]: !prev[`${sectionId}-${itemId}`]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center text-center text-white mb-16"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Perguntas Frequentes
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Tudo que você precisa saber sobre sua estadia
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Acomodações */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Acomodações</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('acomodacao', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">O que tem no quarto?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['acomodacao-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['acomodacao-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Nossos quartos são equipados com itens essenciais para o seu conforto, incluindo cama confortável, banheiro privativo, ar-condicionado, e Wi-Fi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alimentos e Bebidas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Alimentos e Bebidas (A&B)</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('ab', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Há opções de almoço e jantar no local?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['ab-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['ab-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, oferecemos refeições em nosso restaurante. Horários:<br />
                      - <em>Almoço:</em> 12:30<br />
                      - <em>Jantar:</em> 19:30
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('ab', 1)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Posso levar minha própria bebida?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['ab-1'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['ab-1'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Não é permitido trazer bebidas.<br />
                      Solicite nossa Carta de vinhos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Check-in e Check-out */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Check-in e Check-out</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('checkin', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Posso chegar antes do horário do check-in?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['checkin-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['checkin-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, você pode chegar e aproveitar nosso ambiente. Caso deseje consumir refeições antes do horário da sua reserva, será cobrada uma taxa de <em>R$200 por pessoa</em> para acesso ao buffet à vontade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day Use */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Day Use</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('day-use', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Vocês oferecem Day Use?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['day-use-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['day-use-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, atendemos com reserva antecipada conforme disponibilidade.<br />
                      Consulte com nossa equipe de vendas ou recepção 65 99675-1401.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formas de Pagamento */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Formas de Pagamento</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('pagamento', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Quais formas de pagamento vocês aceitam?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['pagamento-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['pagamento-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Aceitamos cartões de crédito, débito e transferências bancárias.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('pagamento', 1)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Aceitam cartão internacional?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['pagamento-1'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['pagamento-1'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, aceitamos cartões internacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fotografia e Eventos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Fotografia e Eventos</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('foto', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">É possível fazer fotos de casamento no local?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['foto-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['foto-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, oferecemos pacotes específicos para ensaios fotográficos. Entre em contato para mais detalhes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fotos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Fotos</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('foto', 1)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Posso ver mais fotos da estrutura e passeios?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['foto-1'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['foto-1'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, visite nossa galeria no site ou solicite fotos específicas para nossa equipe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guias */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Guias</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('guia', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Oferecem guia bilíngue?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['guia-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['guia-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, guias bilíngues estão disponíveis mediante solicitação prévia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Horários</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('horario', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Quais são os horários das refeições e atividades?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['horario-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['horario-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      - <em>Café da manhã:</em> 7:30 às 9:30<br />
                      - <em>Almoço:</em> 12:30<br />
                      - <em>Jantar:</em> 19:30<br />
                      - <em>Trilhas (quando confirmadas):</em> a partir das 8:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* O que levar */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">O que levar?</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('levar', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">O que levar?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['levar-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['levar-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Recomendamos trazer protetor solar, repelente, roupas confortáveis para trilhas e passeios, e calçados adequados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Observação de Aves */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Observação de Aves</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('obs', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Há atividades para observação de Aves?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['obs-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['obs-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, temos áreas ideais para birdwatching. Guias especializados podem ser contratados mediante solicitação.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passeios */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Passeios</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('passeio', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Quais passeios vocês oferecem?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['passeio-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['passeio-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Dispomos de atividades, como trilhas e Safari de barco a motor no Rio Claro. Consulte a recepção para informações detalhadas.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('passeio', 1)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Crianças podem participar dos passeios?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['passeio-1'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['passeio-1'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, porém algumas atividades têm restrições de idade. Verifique com nossa equipe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Política de Animais de Estimação */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Política de Animais de Estimação</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('animal', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Aceitam pets?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['animal-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['animal-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Não, infelizmente não recebemos pets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Política de Crianças */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Política de Crianças</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('crianca', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Crianças são bem-vindas?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['crianca-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['crianca-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Sim, crianças são bem-vindas!<br />
                      - A <em>primeira criança</em> de até 2 anos <em>não paga</em>.<br />
                      - A <em>segunda criança em diante</em> ou acima de 2 anos: taxa de R$99 por criança.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Reservas</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleItem('reserva', 0)}
                  >
                    <h4 className="text-lg font-medium text-gray-900">Posso reservar no mesmo dia?</h4>
                    <span className={`transform transition-transform duration-200 ${expandedItems['reserva-0'] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems['reserva-0'] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">
                      Reservas de última hora devem ser feitas diretamente com nossa recepção ou equipe de reservas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ; 