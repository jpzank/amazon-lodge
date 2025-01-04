import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Jardim da Amazônia Lodge</h1>
        <p>Descubra a magia da Amazônia em uma experiência única e inesquecível</p>
        <div className="hero-buttons">
          <button className="cta-button primary">Reserve Agora</button>
          <button className="cta-button secondary">Explore Nossa História</button>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🌿</span>
            <span>Ecoturismo Sustentável</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🛖</span>
            <span>Bangalôs Privativos</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🦜</span>
            <span>Observação da Vida Selvagem</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 