import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const NascenteNatural = () => {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('nascente/hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[60vh] flex items-center justify-center" style={heroStyle}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nascente Natural</h1>
          <p className="text-xl md:text-2xl">Fonte de Vida na Floresta</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">Água Pura</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Nossa nascente natural é uma fonte de água cristalina que brota do 
            coração da floresta amazônica, fornecendo água pura e fresca para 
            todo o lodge.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-gray-600">Conteúdo em desenvolvimento</p>
        </div>
      </section>
    </div>
  );
}

export default NascenteNatural; 