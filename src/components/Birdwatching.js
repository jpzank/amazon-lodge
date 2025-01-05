import React from 'react';
import '../styles/Birdwatching.css';
import { Image } from 'cloudinary-react';

const Birdwatching = () => {
  return (
    <div className="birdwatching">
      <div 
        className="page-hero birdwatching"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dxlhv2mji/image/upload/v1/birdwatching/hero)` 
        }}
      >
        <div className="hero-content">
          <h1>Observação de Aves</h1>
          <p>Descubra a incrível diversidade de aves da Amazônia</p>
        </div>
      </div>

      <section className="hotspot-intro">
        <div className="container">
          <div className="recognition-badges">
            <div className="badge">
              <span className="number">300+</span>
              <span className="label">Espécies Registradas</span>
            </div>
            <div className="badge">
              <span className="number">50+</span>
              <span className="label">Espécies Endêmicas</span>
            </div>
            <div className="badge">
              <span className="number">12</span>
              <span className="label">Pontos de Observação</span>
            </div>
          </div>
          <p className="highlight-text">
            Nossa pousada é reconhecida como um dos principais hotspots para observação de aves na Amazônia,
            oferecendo uma experiência única para ornitólogos e entusiastas.
          </p>
        </div>
      </section>

      <section className="featured-species">
        <div className="container">
          <h2>Espécies Emblemáticas</h2>
          <div className="species-grid">
            <div className="species-card">
              <div className="species-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="birdwatching/tie-bicudo"
                  alt="Tiê-bicudo"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
                <span className="status-badge cr">CR</span>
              </div>
              {/* ... rest of species card content ... */}
            </div>

            <div className="species-card">
              <div className="species-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="birdwatching/curica"
                  alt="Curica-de-bochecha-laranja"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
                <span className="status-badge nt">NT</span>
              </div>
              {/* ... rest of species card content ... */}
            </div>

            <div className="species-card">
              <div className="species-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="birdwatching/mutum"
                  alt="Mutum-cavalo"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
                <span className="status-badge nt">NT</span>
              </div>
              {/* ... rest of species card content ... */}
            </div>

            <div className="species-card">
              <div className="species-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="birdwatching/anambe"
                  alt="Anambé-preto"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
                <span className="status-badge lc">LC</span>
              </div>
              {/* ... rest of species card content ... */}
            </div>
          </div>
        </div>
      </section>

      <section className="biodiversity">
        <div className="container">
          <h2>Nossa Biodiversidade</h2>
          <p className="section-intro">
            A região abriga uma extraordinária variedade de espécies, desde pequenas aves canoras até
            majestosas aves de rapina.
          </p>
          <div className="species-categories">
            {/* Add your species categories here */}
          </div>
        </div>
      </section>

      <section className="observation-spots">
        <div className="container">
          <h2>Pontos de Observação</h2>
          <div className="spots-grid">
            {/* Add your observation spots here */}
          </div>
        </div>
      </section>

      <section className="special-tours">
        <div className="container">
          <h2>Tours Especializados</h2>
          <div className="tour-details">
            {/* Add your tour details here */}
          </div>
        </div>
      </section>

      <section className="references">
        <div className="container">
          <h2>Referências e Guias</h2>
          <div className="reference-links">
            {/* Add your reference links here */}
          </div>
        </div>
      </section>

      <section 
        className="cta"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${kiko})` }}
      >
        <div className="container">
          <h2>Reserve Sua Experiência</h2>
          <p>Venha descobrir o paraíso das aves na Amazônia</p>
          <button className="btn-primary">Agendar Agora</button>
        </div>
      </section>
    </div>
  );
};

export default Birdwatching; 