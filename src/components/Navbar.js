import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('PT');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveDropdown(null);
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleDropdownClick = (index) => {
    if (window.innerWidth <= 1024) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'unset';
  };

  const toggleLanguage = () => {
    setLanguage(language === 'PT' ? 'EN' : 'PT');
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
    document.body.style.overflow = 'unset';
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 lg:h-[80px] z-50 transition-colors duration-300
      ${isScrolled || !isHome ? 'bg-primary-dark/85' : 'bg-transparent hover:bg-primary-dark/85'}`}>
      <div className="max-w-[1920px] mx-auto h-full px-4 lg:px-12">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <div className="w-[200px]">
            {!isHome && (
              <Link to={siteConfig.buttonLinks.home} className="h-[50px] lg:h-[70px] flex items-center" onClick={handleLinkClick}>
                <img src="/logo-white.png" alt="Jardim da Amazônia" className="h-full w-auto transition-transform duration-300" />
              </Link>
            )}
            {isHome && <div className="h-[50px] lg:h-[70px]" />}
          </div>

          {/* Center Navigation */}
          <div className="flex-1 flex justify-center">
            <div className="max-w-4xl w-full">
              {/* Navigation Menu */}
              <div className={`fixed lg:static top-0 right-0 bottom-0 lg:h-full w-full lg:w-auto
                bg-primary-dark/95 lg:bg-transparent transform transition-transform duration-300 ease-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
                
                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-6 lg:py-0 lg:overflow-visible">
                  <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full">
                    {/* Main Menu Items */}
                    <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-center">
                      {/* Hospedagem Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(0)}
                          className="w-full lg:w-auto px-6 lg:px-4 py-3 lg:py-8 text-white text-lg lg:text-base font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 0}
                        >
                          <span>Hospedagem</span>
                          <span className="text-2xl lg:hidden">{activeDropdown === 0 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 0 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.accommodation} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Acomodações</Link>
                          <Link to={siteConfig.buttonLinks.areasExternas} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>O Lodge</Link>
                          <Link to={siteConfig.buttonLinks.gastronomy} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Gastronomia</Link>
                          <Link to={siteConfig.buttonLinks.eventosNatureza} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Eventos na Natureza</Link>
                        </div>
                      </li>

                      {/* Experiências Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(1)}
                          className="w-full lg:w-auto px-6 lg:px-4 py-3 lg:py-8 text-white text-lg lg:text-base font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 1}
                        >
                          <span>Experiências</span>
                          <span className="text-2xl lg:hidden">{activeDropdown === 1 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 1 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.birdwatching} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Birdwatching</Link>
                          <Link to={siteConfig.buttonLinks.primates} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Observação de Primatas</Link>
                          <Link to={siteConfig.buttonLinks.safariBoat} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Safari Boat</Link>
                          <Link to={siteConfig.buttonLinks.trilhas} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Trilhas</Link>
                          <Link to={siteConfig.buttonLinks.guiasCampo} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Guias de Campo</Link>
                        </div>
                      </li>

                      {/* Conservação Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(2)}
                          className="w-full lg:w-auto px-6 lg:px-4 py-3 lg:py-8 text-white text-lg lg:text-base font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 2}
                        >
                          <span>Conservação</span>
                          <span className="text-2xl lg:hidden">{activeDropdown === 2 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 2 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.estacaoPesquisa} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Estação de Pesquisa</Link>
                          <Link to={siteConfig.buttonLinks.nascenteNatural} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Nascente Natural</Link>
                          <Link to={siteConfig.buttonLinks.falaramDeNos} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Falaram de Nós</Link>
                          <Link to={siteConfig.buttonLinks.galeria} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Galeria de Fotos</Link>
                        </div>
                      </li>

                      {/* Prepare sua Viagem Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(3)}
                          className="w-full lg:w-auto px-6 lg:px-4 py-3 lg:py-8 text-white text-lg lg:text-base font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 3}
                        >
                          <span>Prepare sua Viagem</span>
                          <span className="text-2xl lg:hidden">{activeDropdown === 3 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 3 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.faq} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Perguntas Frequentes</Link>
                          <Link to={siteConfig.buttonLinks.comoChegar} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>Como Chegar</Link>
                        </div>
                      </li>
                    </div>

                    {/* Language and Reserve Buttons */}
                    <div className="lg:flex items-center gap-6">
                      <li className="lg:flex items-center gap-6">
                        <button
                          onClick={toggleLanguage}
                          className="hidden lg:block px-3 py-1 text-white text-sm font-medium border border-white/20 rounded
                            hover:bg-white/10 hover:border-accent transition-all duration-300"
                        >
                          {language}
                        </button>
                      </li>
                    </div>
                  </ul>
                </div>

                {/* Bottom Actions - Mobile Only */}
                <div className="lg:hidden border-t border-white/10 p-6 space-y-4">
                  <button
                    onClick={toggleLanguage}
                    className="w-full px-4 py-2 text-white text-base font-medium border border-white/20 rounded
                      hover:bg-white/10 transition-colors duration-300"
                  >
                    {language}
                  </button>

                  <a
                    href={siteConfig.buttonLinks.bookNow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#C4A24D] text-white text-base font-semibold uppercase tracking-wider px-4 py-3
                      rounded-full text-center hover:bg-[#D4B25D] transition-colors duration-300"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 transform origin-center
              ${isOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300
              ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 transform origin-center
              ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`} />
          </button>

          {/* Right Section with Reservar Button */}
          <div className="hidden lg:flex items-center w-[200px] justify-end">
            <a
              href={siteConfig.buttonLinks.bookNow}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4A24D] text-white font-semibold text-sm uppercase tracking-wider px-6 py-2.5
                rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 