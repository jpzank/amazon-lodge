import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const Gastronomia = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{
          backgroundImage: `url(${getFolderImage('gastronomia', 'hero')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Gastronomia
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            A experiência culinária que combina sabores tradicionais com técnicas modernas de preparo
          </p>
        </div>
      </div>

      {/* Food Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Items */}
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
              <img
                src="/images/food1.jpg"
                alt="Prato Amazônico"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Pratos tradicionais</h3>
                <p className="text-sm text-white text-shadow">Sabores autênticos e deliciosos</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
              <img
                src="/images/food2.jpg"
                alt="Sobremesa Especial"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Sobremesas Deliciosas</h3>
                <p className="text-sm text-white text-shadow">Doces clássicos que encantam o paladar e os olhos</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
              <img
                src="/images/food3.jpg"
                alt="Café da Manhã"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Café da Manhã</h3>
                <p className="text-sm text-white text-shadow">Um café da manhã acolhedor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Statement Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:flex-shrink-0 w-full lg:w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/chef.jpg"
                alt="Nosso Chef"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-primary mb-8">Nossa Filosofia Culinária</h2>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic pl-8 border-l-4 border-primary">
                <p className="mb-6">
                  "A gastronomia sempre teve o grande objetivo de unir pessoas, seja através da cocção dos alimentos ou do próprio alimento in natura. Mas o grande objetivo é alimentar a "alma" antes de alimentar o corpo, nessa grande busca pelo prazer em alimentar e proporcionar grandes momentos, grandes encontros, desde a nossa ancestralidade essa busca era constante, nos tempos atuais isso não é diferente, temos uma infinidade de produtos e produtores, nasceu então o "FARM TO TABLE", algo da terra para a mesa, essa busca me trouxe como chef para uma imersão no Ecótono, Amazônia / Cerrado, buscando essa união me deparei com um lugar incrível chamado Jardim da Amazônia, com uma cozinha muito caseira comandada por uma senhora chamada CARMELITA ZANCHET."
                </p>
                <p className="mb-6">
                  "Nessa jornada descobri que o simples é essencial aos olhos e a alma. Frutos, sementes, hortaliças, peixes, vegetais e outras iguarias que encontrei nessa fusão Amazônia / Cerrado é indiscutivelmente a busca pelo meu projeto de vida como cozinheiro. Encontrei um porto serguro ou "cozinha segura". Onde essa jornada vai me conduzir? Ainda estou descobrindo e sem pressa de chegar ao fim! Cozinhar é antes de tudo um grande ato de AMOR."
                </p>
                <footer className="font-semibold text-primary mt-8 not-italic">
                  Chef José Sérgio
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            Destaques do Menu
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/menu1.jpg"
                  alt="Peixe Grelhado"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Peixe Grelhado na Folha de Bananeira</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Peixe fresco da região, temperado com ervas amazônicas e grelhado tradicionalmente em folha de bananeira.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/menu2.jpg"
                  alt="Moqueca Regional"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Moqueca Regional</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Preparada com peixes nobres da região, leite de coco fresco e aromáticos locais, servida com pirão e arroz.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/menu3.jpg"
                  alt="Sobremesa Especial"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sobremesas da Casa</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Deliciosas sobremesas preparadas com frutas típicas da Amazônia, combinando tradição e criatividade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipe Especializada</h3>
              <p className="text-gray-600">Nossa equipe de cozinha é dedicada a proporcionar sabores autênticos.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredientes Locais</h3>
              <p className="text-gray-600">Valorizamos os produtores locais, garantindo ingredientes frescos e contribuindo para o fortalecimento da economia da região.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6">Informações Dietéticas</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos preocupamos com o bem-estar de nossos hóspedes e oferecemos opções para diferentes necessidades dietéticas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Oferecemos opções vegetarianas, veganas e sem glúten em todos os nossos cardápios. Nossa equipe está preparada para atender a restrições alimentares específicas, desde que informadas com antecedência.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Todos os pratos são preparados com ingredientes frescos, cuidadosamente selecionados, e provenientes de fornecedores locais confiáveis, garantindo qualidade e sabor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Para solicitar uma dieta especial</strong>, adicione essa informação ao fazer sua reserva ou entre em contato pelo WhatsApp, mencionando seu nome ou código de reserva. Estamos à disposição para atender às suas necessidades!
              </p>
              <div className="pt-6 flex justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/556540420595', '_blank')}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
                >
                  Solicitar Dieta Especial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gastronomia; 