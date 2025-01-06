import React from 'react';
import '../styles/EventosCorporativos.css';
import { getFolderImage } from '../config/cloudinaryConfig';
import { 
  MdBusinessCenter, 
  MdNaturePeople, 
  MdCelebration
} from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';

function EventosCorporativos() {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('eventos', 'fogo-no-rio')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="eventos-corporativos">
      <section className="page-hero corporate" style={heroStyle}>
        <div className="hero-content">
          <h1>Eventos Corporativos</h1>
          <p>Transforme suas reuniões em experiências memoráveis em meio à natureza</p>
        </div>
      </section>

      <section className="event-packages">
        <div className="container">
          <h2>Nossos Pacotes</h2>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-image">
                <img src={getFolderImage('eventos', 'reuniao-executiva')} alt="Reuniões Executivas" />
              </div>
              <div className="package-content">
                <div className="package-icon">
                  <MdBusinessCenter />
                </div>
                <h3>Reuniões Executivas</h3>
                <ul className="package-features">
                  <li><BsCheckCircle /> Sala privativa para até 10 pessoas</li>
                  <li><BsCheckCircle /> Coffee breaks personalizados</li>
                  <li><BsCheckCircle /> Almoço executivo incluso</li>
                  <li><BsCheckCircle /> Wi-Fi de alta velocidade</li>
                  <li><BsCheckCircle /> Equipamentos audiovisuais</li>
                </ul>
                <div className="package-duration">
                  <span>Pacote Day Use</span>
                  <p>8 horas de evento</p>
                </div>
              </div>
            </div>

            <div className="package-card">
              <div className="package-image">
                <img src={getFolderImage('eventos', 'ocasioes-especiais')} alt="Team Building" />
              </div>
              <div className="package-content">
                <div className="package-icon">
                  <MdNaturePeople />
                </div>
                <h3>Team Building</h3>
                <ul className="package-features">
                  <li><BsCheckCircle /> Atividades de integração</li>
                  <li><BsCheckCircle /> Hospedagem completa</li>
                  <li><BsCheckCircle /> Todas as refeições inclusas</li>
                  <li><BsCheckCircle /> Trilhas e atividades na natureza</li>
                  <li><BsCheckCircle /> Espaço para reuniões</li>
                </ul>
                <div className="package-duration">
                  <span>Pacote com Hospedagem</span>
                  <p>2-3 dias de imersão</p>
                </div>
              </div>
            </div>

            <div className="package-card">
              <div className="package-image">
                <img src={getFolderImage('eventos', 'eventos-especiais')} alt="Eventos Especiais" />
              </div>
              <div className="package-content">
                <div className="package-icon">
                  <MdCelebration />
                </div>
                <h3>Eventos Especiais</h3>
                <ul className="package-features">
                  <li><BsCheckCircle /> Espaço para até 40 pessoas</li>
                  <li><BsCheckCircle /> Serviço de buffet completo</li>
                  <li><BsCheckCircle /> Decoração personalizada</li>
                  <li><BsCheckCircle /> Hospedagem opcional</li>
                  <li><BsCheckCircle /> Coordenador de eventos</li>
                </ul>
                <div className="package-duration">
                  <span>Pacote Flexível</span>
                  <p>Customizável às suas necessidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2>Planeje Seu Evento Conosco</h2>
          <p>Nossa equipe está pronta para criar uma experiência customizada para sua empresa</p>
          <button 
            className="cta-button" 
            onClick={() => window.open('https://wa.me/556540420595', '_blank')}
          >
            Falar pelo WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default EventosCorporativos; 