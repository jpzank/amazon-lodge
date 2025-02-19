import React from 'react';
import { siteConfig } from '../config/siteConfig';
import PhotoCredit from '../components/PhotoCredit';

const NascenteNatural = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842036/Jardim_da_Amazônia-3602_sisbpp.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            A Nascente Natural
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto tracking-wide text-shadow">
            Coração de Nosso Santuário Ecológico
          </p>
        </div>
        <PhotoCredit photographer="Marlon Erthal" />
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Descubra a Pureza da Nossa Nascente
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
              No coração do Jardim da Amazonia, encontramos uma nascente natural que desempenha 
              um papel fundamental na preservação do nosso ecossistema e na experiência dos nossos 
              hóspedes. Esta nascente, fonte de conservação, garante a continuidade da vida na nossa 
              propriedade, alimentando a piscina com água cristalina e potável.
            </p>
          </div>
        </div>
      </section>

      {/* Pool Section with Image */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 whitespace-nowrap">
                A Piscina Alimentada pela Nascente
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                A piscina do Lodge é um verdadeiro reflexo da beleza natural que nos cerca. Alimentada 
                diretamente pela nascente, a água permanece limpa e potável, oferecendo aos nossos 
                hóspedes um espaço seguro e refrescante para relaxar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                As características naturais da piscina, como aquários e lagoas, proporcionam uma imersão 
                completa na natureza, permitindo que você desfrute de um banho rodeado pela serenidade 
                da floresta.
              </p>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl lg:w-[90%] ml-auto">
              <img
                src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842011/Jardim_da_Amazônia-3588_surdeb.jpg"
                alt="Piscina Natural"
                className="w-full h-full object-cover"
              />
              <PhotoCredit photographer="Marlon Erthal" />
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Restrições Visando a Preservação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-2xl">volume_off</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ambiente Tranquilo</h3>
                <p className="text-gray-700">
                  Não é permitido som nas áreas comuns
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-2xl">shower</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Cuidados com a Água</h3>
                <p className="text-gray-700">
                  Se estiver fazendo uso de cosméticos, protetores ou repelentes, faça uso da ducha disponível na área externa antes de entrar na água
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg md:col-span-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-2xl">family_restroom</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Supervisão de Crianças</h3>
                <p className="text-gray-700">
                  Crianças somente acompanhadas pelos pais ou responsáveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Onde a Natureza Encontra o Conforto
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Pronto para conhecer nossa nascente natural?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={siteConfig.buttonLinks.bookNow}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reserve Agora
              </a>
              <a 
                href={siteConfig.buttonLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NascenteNatural; 