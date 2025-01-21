import React from 'react';
import '../styles/Documentos.css';
import Menu from '../components/Menu';
import WineList from '../components/WineList';
import Receptivo from '../components/Receptivo';
import Cestas from '../components/Cestas';
import GoogleReviews from '../components/GoogleReviews';

function Documentos() {
  return (
    <div className="documentos">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Documentos Úteis</h1>
            <p>Informações importantes para sua estadia</p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="documents-section">
        <div className="container">
          <div className="document-grid">
            <Receptivo />
            <div className="menu-wine-container">
              <Menu />
              <WineList />
            </div>
            <Cestas />
            <GoogleReviews />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documentos; 