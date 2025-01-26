import React from 'react';

function About() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 relative">
          Bem-vindo ao Jardim da Amazônia
          <span className="block w-20 h-0.5 bg-primary mx-auto mt-4"></span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-6">
            <blockquote className="text-xl text-primary font-medium leading-relaxed pl-6 border-l-4 border-primary">
              Localizado no coração da Floresta Amazônica, o Jardim da Amazônia Lodge oferece uma 
              experiência única de imersão na natureza, combinando conforto com aventura sustentável.
            </blockquote>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa pousada é um refúgio onde você pode despertar com o canto dos pássaros, explorar 
              trilhas centenárias, e se maravilhar com a rica biodiversidade da região. Cada momento 
              aqui é uma oportunidade de conexão com a natureza em seu estado mais puro.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Comprometidos com o turismo sustentável, trabalhamos em harmonia com as comunidades 
              locais e preservamos este tesouro natural para as futuras gerações.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Ecoturismo Responsável</h3>
              <p className="text-gray-600">Práticas sustentáveis e preservação ambiental</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🚶‍♂️</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Trilhas Guiadas</h3>
              <p className="text-gray-600">Explore a floresta com guias especializados</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Experiência Natural</h3>
              <p className="text-gray-600">Integração total com a natureza amazônica</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🛖</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Acomodações Únicas</h3>
              <p className="text-gray-600">Conforto em harmonia com a floresta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 