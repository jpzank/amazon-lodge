import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { getFolderImage } from '../config/cloudinaryConfig';

const ComoChegar = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${getFolderImage('como-chegar/hero')})`,
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
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Como Chegar
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Sua jornada até o Jardim da Amazônia
          </p>
        </div>
      </div>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            Nossa Localização
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Endereço</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-lg">RODOVIA MT 10 - KM 88</p>
                  <p className="text-lg">SÃO JOSÉ DO RIO CLARO</p>
                  <p className="text-lg">MATO GROSSO - BRASIL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Options Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            Rotas de Acesso
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaCar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Via Cuiabá</h3>
              <p className="text-lg text-gray-600 mb-8">Distância: 290 KM do Aeroporto Internacional de Cuiabá</p>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Instruções</h4>
                <ol className="space-y-4">
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                    Siga pela Rodovia Helder Cândia (MT-010), conhecida como 'Estrada a Guia'
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                    Continue até o viaduto de Rosário Oeste
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                    Vire à direita na BR 163 (duplicada)
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">4</span>
                    Siga até o posto do Gil no alto da Serra
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">5</span>
                    Entre à direita antes do viaduto sentido Diamantino
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">6</span>
                    Prossiga por novo Diamantino sentido São José do Rio Claro
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaCar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Via Nova Mutum</h3>
              <p className="text-lg text-gray-600 mb-8">Distância: 90 KM de Nova Mutum</p>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Instruções</h4>
                <ol className="space-y-4">
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                    Na BR 163, em Nova Mutum, localize o Posto Águia Branca
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                    Vire à direita na rodovia MT235 sentido São José do Rio Claro
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                    Percorra 48 km até o trevo que liga a MT 010 (Fazenda Libra)
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">4</span>
                    Vire à direita para São José do Rio Claro
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">5</span>
                    Antes da Ponte do Rio Claro, entre à esquerda
                  </li>
                  <li className="flex items-start text-gray-600">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">6</span>
                    Siga por 4 km de estrada de terra
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            Localização no Mapa
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.9241309876206!2d-56.63488792350904!3d-13.540245537519661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a19415152a9b05%3A0xd016e0d7d7b65c17!2sJardim%20da%20Amaz%C3%B4nia%20Lodge!5e0!3m2!1sen!2sbr!4v1735970088546!5m2!1sen!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Jardim da Amazônia"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">Precisa de Ajuda?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Nossa equipe está pronta para auxiliar no planejamento da sua viagem
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaEnvelope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600">reservas@jardimdaamazonia.com.br</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600">+55 65 4042-0595</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Observação Importante</h3>
            <p className="text-gray-600 leading-relaxed">
              Para a rota alternativa no km 644 (próximo a duas antenas grandes na altura do posto São Genaro) 
              a São José do Rio Claro, por favor, solicite informações detalhadas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComoChegar; 