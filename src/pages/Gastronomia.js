import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';
import { GiCookingPot } from 'react-icons/gi';

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
            Tradição familiar e criatividade contemporânea
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-6 mb-12">
              <span>
                <GiCookingPot className="text-4xl text-primary" />
              </span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-justify mb-8">
              As receitas de família, tradicionalmente preparadas por <span className="font-semibold text-primary">Carmelita</span>, ganharam uma nova roupagem com a chegada do chef <span className="font-semibold text-primary">José Sérgio</span>. Pratos à base de peixes da região, como matrinxã e pintado, se unem à clássica abóbora cabotiá, legumes grelhados e farofa de banana-da-terra.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed text-justify">
              A polenta frita e o sagu na sobremesa trazem à mesa as raízes italianas da família Zanchet, em uma combinação de <span className="italic">tradição e criatividade</span>. No café da manhã, o aroma do café com leite se mistura ao aconchego dos ovos mexidos, bolos caseiros e outras delícias que confortam o paladar e o coração.
            </p>
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Chef Statement Section */}
      <section className="py-16 bg-gray-50">
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
              <h2 className="text-4xl font-semibold text-primary mb-8">Do Produtor à Mesa</h2>
              <blockquote className="text-lg leading-relaxed text-gray-700 italic pl-8 border-l-4 border-primary">
                <p className="mb-6">
                  "A gastronomia sempre teve como objetivo unir pessoas, seja através da cocção dos alimentos ou do alimento in natura. O verdadeiro propósito é alimentar a 'alma' antes de alimentar o corpo. Essa busca pelo prazer de alimentar e proporcionar momentos significativos é uma constante desde a nossa ancestralidade. Nos dias de hoje, essa busca continua, com uma infinidade de produtos e produtores. Assim nasceu o conceito 'FARM TO TABLE', que significa trazer o que é da terra para a mesa. Essa jornada me levou a uma imersão no Ecótono, entre a Amazônia e o Cerrado, onde encontrei um lugar incrível chamado Jardim da Amazônia, com uma cozinha caseira comandada por uma senhora chamada CARMELITA ZANCHET."
                </p>
                <p className="mb-6">
                  "Nessa jornada, descobri que o simples é essencial para os olhos e a alma. Frutos, sementes, hortaliças, peixes, vegetais e outras iguarias que encontrei nessa fusão Amazônia/Cerrado são indiscutivelmente a busca pelo meu projeto de vida como cozinheiro. Encontrei um porto seguro, ou 'cozinha segura'. Para onde essa jornada me levará? Ainda estou descobrindo, sem pressa de chegar ao fim! Cozinhar é, acima de tudo, um grande ato de AMOR."
                </p>
                <footer className="font-semibold text-primary mt-8 not-italic">
                  Chef José Sérgio
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ingredientes Locais Card */}
              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Ingredientes Locais</h3>
                <p className="text-gray-600 text-justify">Valorizamos os produtores locais, garantindo ingredientes frescos e contribuindo para o fortalecimento da economia da região.</p>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                <img
                  src="/images/food6.jpg"
                  alt="Pratos Típicos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Pratos Típicos</h3>
                  <p className="text-sm text-white text-shadow">Sabores da região</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                <img
                  src="/images/food7.jpg"
                  alt="Sobremesas Especiais"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Sobremesas Especiais</h3>
                  <p className="text-sm text-white text-shadow">Doces que encantam</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                <img
                  src="/images/food8.jpg"
                  alt="Pratos Vegetarianos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Opções Vegetarianas</h3>
                  <p className="text-sm text-white text-shadow">Legumes e grãos selecionados</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                <img
                  src="/images/food9.jpg"
                  alt="Bebidas Especiais"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2 text-shadow">Bebidas Especiais</h3>
                  <p className="text-sm text-white text-shadow">Refrescantes e saborosas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gastronomia; 