import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>Bem-vindo ao Jardim da Amazônia</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="highlight">
              Localizado no coração da Floresta Amazônica, o Jardim da Amazônia Lodge oferece uma 
              experiência única de imersão na natureza, combinando conforto com aventura sustentável.
            </p>
            <p>
              Nossa pousada é um refúgio onde você pode despertar com o canto dos pássaros, explorar 
              trilhas centenárias, e se maravilhar com a rica biodiversidade da região. Cada momento 
              aqui é uma oportunidade de conexão com a natureza em seu estado mais puro.
            </p>
            <p>
              Comprometidos com o turismo sustentável, trabalhamos em harmonia com as comunidades 
              locais e preservamos este tesouro natural para as futuras gerações.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Ecoturismo Responsável</h3>
              <p>Práticas sustentáveis e preservação ambiental</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚶‍♂️</div>
              <h3>Trilhas Guiadas</h3>
              <p>Explore a floresta com guias especializados</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍃</div>
              <h3>Experiência Natural</h3>
              <p>Integração total com a natureza amazônica</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛖</div>
              <h3>Acomodações Únicas</h3>
              <p>Conforto em harmonia com a floresta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 