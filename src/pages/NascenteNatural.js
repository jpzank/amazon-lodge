import React from 'react';
import '../styles/NascenteNatural.css';
import { getFolderImage } from '../config/cloudinaryConfig';

function NascenteNatural() {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('nascente/hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="nascente-natural">
      <div className="page-hero spring" style={heroStyle}>
        <div className="hero-content">
          <h1>Nascente Natural</h1>
          <p>Fonte de Vida na Floresta</p>
        </div>
      </div>

      <section className="spring-intro">
        <div className="container">
          <h2>Água Pura</h2>
          <p className="intro-text">
            Nossa nascente natural é uma fonte de água cristalina que brota do 
            coração da floresta amazônica, fornecendo água pura e fresca para 
            todo o lodge.
          </p>
        </div>
      </section>

      <section className="content-placeholder">
        <div className="container">
          <p>Conteúdo em desenvolvimento</p>
        </div>
      </section>
    </div>
  );
}

export default NascenteNatural; 