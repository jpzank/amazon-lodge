import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('PT');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'PT' ? 'EN' : 'PT');
  };

  const handleDropdownClick = (index) => {
    if (window.innerWidth <= 1024) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    // Update dropdown positions
    dropdownRefs.current.forEach((dropdown, index) => {
      if (dropdown) {
        const rect = dropdown.getBoundingClientRect();
        const content = dropdown.querySelector('.dropdown-content');
        if (content) {
          content.style.left = `${rect.left + (rect.width / 2)}px`;
        }
      }
    });
  }, [isOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHome ? 'home' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-white.png" alt="Jardim da Amazônia" />
        </Link>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li 
            className={`nav-item dropdown ${activeDropdown === 0 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[0] = el}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(0)} tabIndex={0}>
              Hospedagem
            </span>
            <div className="dropdown-content">
              <Link to="/acomodacoes">Acomodações</Link>
              <Link to="/areas-externas">Áreas Externas</Link>
              <Link to="/gastronomia">Gastronomia</Link>
              <Link to="/eventos-corporativos">Eventos Corporativos</Link>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 1 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[1] = el}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(1)} tabIndex={0}>
              Experiências
            </span>
            <div className="dropdown-content">
              <Link to="/birdwatching">Birdwatching</Link>
              <Link to="/primatas">Observação de Primatas</Link>
              <Link to="/safari-boat">Safari Boat</Link>
              <Link to="/trilhas">Trilhas</Link>
              <Link to="/guias-campo">Guias de Campo</Link>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 2 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[2] = el}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(2)} tabIndex={0}>
              Conservação
            </span>
            <div className="dropdown-content">
              <Link to="/estacao-pesquisa">Estação de Pesquisa</Link>
              <Link to="/nascente-natural">Nascente Natural</Link>
              <Link to="/falaram-de-nos">Falaram de Nós</Link>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 3 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[3] = el}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(3)} tabIndex={0}>
              Prepare sua Viagem
            </span>
            <div className="dropdown-content">
              <Link to="/faq">Perguntas Frequentes</Link>
              <Link to="/como-chegar">Como Chegar</Link>
              <Link to="/o-que-trazer">O que Trazer</Link>
            </div>
          </li>
          <li className="nav-item language-switch" onClick={toggleLanguage}>
            {language}
          </li>
          <li className="nav-item">
            <a 
              href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Reservar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 