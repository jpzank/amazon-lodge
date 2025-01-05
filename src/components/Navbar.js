import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('PT');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const dropdownRefs = useRef([]);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) { // Swipe left
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'PT' ? 'EN' : 'PT');
  };

  const handleDropdownClick = (index) => {
    if (window.innerWidth <= 1024) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const handleClickOutside = React.useCallback((e) => {
    if (isOpen && !e.target.closest('.nav-menu') && !e.target.closest('.nav-toggle')) {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

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
    document.body.style.overflow = 'unset';
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHome ? 'home' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-white.png" alt="Jardim da Amazônia" />
        </Link>

        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul 
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <li 
            className={`nav-item dropdown ${activeDropdown === 0 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[0] = el}
            style={{"--item-index": 0}}
          >
            <span 
              className="nav-links" 
              onClick={() => handleDropdownClick(0)} 
              tabIndex={0}
              role="button"
              aria-expanded={activeDropdown === 0}
            >
              Hospedagem
            </span>
            <div className="dropdown-content">
              <Link to="/acomodacoes" style={{"--item-index": 0}}>Acomodações</Link>
              <Link to="/areas-externas" style={{"--item-index": 1}}>Áreas Externas</Link>
              <Link to="/gastronomia" style={{"--item-index": 2}}>Gastronomia</Link>
              <Link to="/eventos-corporativos" style={{"--item-index": 3}}>Eventos Corporativos</Link>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 1 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[1] = el}
            style={{"--item-index": 1}}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(1)} tabIndex={0}>
              Experiências
            </span>
            <div className="dropdown-content">
              <Link to="/birdwatching" style={{"--item-index": 0}}>Birdwatching</Link>
              <Link to="/primatas" style={{"--item-index": 1}}>Observação de Primatas</Link>
              <Link to="/safari-boat" style={{"--item-index": 2}}>Safari Boat</Link>
              <Link to="/trilhas" style={{"--item-index": 3}}>Trilhas</Link>
              <Link to="/guias-campo" style={{"--item-index": 4}}>Guias de Campo</Link>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 2 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[2] = el}
            style={{"--item-index": 2}}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(2)} tabIndex={0}>
              Conservação
            </span>
            <div className="dropdown-content">
              <Link to="/estacao-pesquisa" style={{"--item-index": 0}}>Estação de Pesquisa</Link>
              <Link to="/nascente-natural" style={{"--item-index": 1}}>Nascente Natural</Link>
              <Link to="/falaram-de-nos" style={{"--item-index": 2}}>Falaram de Nós</Link>
            </div>
          </li>
          <li 
            className={`nav-item dropdown ${activeDropdown === 3 ? 'active' : ''}`}
            ref={el => dropdownRefs.current[3] = el}
            style={{"--item-index": 3}}
          >
            <span className="nav-links" onClick={() => handleDropdownClick(3)} tabIndex={0}>
              Prepare sua Viagem
            </span>
            <div className="dropdown-content">
              <Link to="/faq">Perguntas Frequentes</Link>
              <Link to="/como-chegar">Como Chegar</Link>
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