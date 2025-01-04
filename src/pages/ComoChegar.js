import React from 'react';
import '../styles/ComoChegar.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

function ComoChegar() {
  return (
    <div className="como-chegar">
      <div className="page-hero directions">
        <div className="hero-content">
          <h1>Como Chegar</h1>
          <p>Sua jornada até o Jardim da Amazônia</p>
        </div>
      </div>

      <section className="directions-intro">
        <div className="container">
          <h2>Nossa Localização</h2>
          <div className="location-card">
            <div className="location-header">
              <div className="location-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="location-address">
                <h3>Endereço</h3>
                <p className="address-line">RODOVIA MT 10 - KM 88</p>
                <p className="address-line">SÃO JOSÉ DO RIO CLARO</p>
                <p className="address-line">MATO GROSSO - BRASIL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-options">
        <div className="container">
          <h2>Rotas de Acesso</h2>
          <div className="routes-grid">
            <div className="route-card">
              <div className="route-icon">
                <FaCar />
              </div>
              <h3>Via Cuiabá</h3>
              <p className="distance">Distância: 290 KM do Aeroporto Internacional de Cuiabá</p>
              <div className="route-details">
                <h4>Instruções</h4>
                <ol className="route-steps">
                  <li>Siga pela Rodovia Helder Cândia (MT-010), conhecida como 'Estrada a Guia'</li>
                  <li>Continue até o viaduto de Rosário Oeste</li>
                  <li>Vire à direita na BR 163 (duplicada)</li>
                  <li>Siga até o posto do Gil no alto da Serra</li>
                  <li>Entre à direita antes do viaduto sentido Diamantino</li>
                  <li>Prossiga por novo Diamantino sentido São José do Rio Claro</li>
                </ol>
              </div>
            </div>

            <div className="route-card">
              <div className="route-icon">
                <FaCar />
              </div>
              <h3>Via Nova Mutum</h3>
              <p className="distance">Distância: 90 KM de Nova Mutum</p>
              <div className="route-details">
                <h4>Instruções</h4>
                <ol className="route-steps">
                  <li>Na BR 163, em Nova Mutum, localize o Posto Águia Branca</li>
                  <li>Vire à direita na rodovia MT235 sentido São José do Rio Claro</li>
                  <li>Percorra 48 km até o trevo que liga a MT 010 (Fazenda Libra)</li>
                  <li>Vire à direita para São José do Rio Claro</li>
                  <li>Antes da Ponte do Rio Claro, entre à esquerda</li>
                  <li>Siga por 4 km de estrada de terra</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Localização no Mapa</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.9241309876206!2d-56.63488792350904!3d-13.540245537519661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a19415152a9b05%3A0xd016e0d7d7b65c17!2sJardim%20da%20Amaz%C3%B4nia%20Lodge!5e0!3m2!1sen!2sbr!4v1735970088546!5m2!1sen!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Jardim da Amazônia"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2>Precisa de Ajuda?</h2>
          <p>Nossa equipe está pronta para auxiliar no planejamento da sua viagem</p>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>reservas@jardimdaamazonia.com.br</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>+55 65 4042-0595</p>
            </div>
          </div>
        </div>
      </section>

      <div className="important-note">
        <div className="container">
          <div className="note-content">
            <h3>Observação Importante</h3>
            <p>Para a rota alternativa no km 644 (próximo a duas antenas grandes na altura do posto São Genaro) a São José do Rio Claro, por favor, solicite informações detalhadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComoChegar; 