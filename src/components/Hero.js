import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center text-center text-white
      bg-gradient-to-br from-primary-dark to-primary bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] px-5 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg
          font-display">
          Jardim da Amazônia Lodge
        </h1>
        
        <p className="text-xl md:text-3xl font-light mb-10 leading-relaxed drop-shadow-md
          max-w-3xl mx-auto">
          Descubra a magia da Amazônia em uma experiência única e inesquecível
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-12">
          <a
            href={siteConfig.buttonLinks.bookNow}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reserve Agora
          </a>
          <Link
            to="/nossa-historia"
            className="btn-secondary"
          >
            Explore Nossa História
          </Link>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
          <div className="flex md:flex-col items-center gap-3">
            <span className="text-4xl">🌿</span>
            <span className="text-lg font-medium">Ecoturismo Sustentável</span>
          </div>
          <div className="flex md:flex-col items-center gap-3">
            <span className="text-4xl">🛖</span>
            <span className="text-lg font-medium">Bangalôs Privativos</span>
          </div>
          <div className="flex md:flex-col items-center gap-3">
            <span className="text-4xl">🦜</span>
            <span className="text-lg font-medium">Observação da Vida Selvagem</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 