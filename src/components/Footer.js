import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nossa-historia">História</Link></li>
            <li><Link to="/galeria">Galeria de Imagens</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Hospedagem</h3>
          <ul>
            <li><Link to="/acomodacoes">Acomodações</Link></li>
            <li><Link to="/areas-externas">Áreas Externas</Link></li>
            <li><Link to="/gastronomia">Gastronomia</Link></li>
            <li><Link to="/eventos-corporativos">Eventos Corporativos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Experiências</h3>
          <ul>
            <li><Link to="/birdwatching">Birdwatching</Link></li>
            <li><Link to="/primatas">Observação de Primatas</Link></li>
            <li><Link to="/safari-boat">Safari Boat</Link></li>
            <li><Link to="/trilhas">Trilhas</Link></li>
            <li><Link to="/guias-campo">Guias de Campo</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Informações</h3>
          <ul>
            <li><Link to="/faq">Perguntas Frequentes</Link></li>
            <li><Link to="/como-chegar">Como Chegar</Link></li>
            <li><Link to="/reservas">Reservas</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>
              <strong>E-mail:</strong>
              <a href="mailto:atendimento@jardimamazonia.com"> atendimento@jardimamazonia.com</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>
              <a href="https://wa.me/556540420595" target="_blank" rel="noopener noreferrer"> +55 65 4042-0595</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://instagram.com/jardimdaamazonia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com/jardimdaamazonia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="copyright">
          © 2025 Jardim da Amazônia / CNPJ: 02.025.529/0001-95
        </p>
      </div>
    </footer>
  );
}

export default Footer; 