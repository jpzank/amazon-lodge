import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/siteConfig';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t, i18n } = useTranslation();

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
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
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
    <nav className={`fixed top-0 left-0 right-0 h-16 lg:h-[64px] z-50 transition-colors duration-300
      ${isScrolled || !isHome ? 'bg-primary-dark/85' : 'bg-transparent hover:bg-primary-dark/85'}`}>
      <div className="max-w-[1920px] mx-auto h-full px-4 lg:px-8">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <div className="w-[180px]">
            {!isHome && (
              <Link to={siteConfig.buttonLinks.home} className="h-[40px] lg:h-[50px] flex items-center" onClick={handleLinkClick}>
                <img src="/logo-white.png" alt="Jardim da Amazônia" className="h-full w-auto transition-transform duration-300" />
              </Link>
            )}
            {isHome && <div className="h-[40px] lg:h-[50px]" />}
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
                  {/* Mobile Close Button */}
                  <div className="lg:hidden flex justify-end px-6 pb-4">
                    <button 
                      onClick={toggleMenu}
                      className="text-white text-3xl h-12 w-12 flex items-center justify-center rounded-full hover:bg-white/10"
                      aria-label="Close menu"
                    >
                      ×
                    </button>
                  </div>
                  
                  <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full">
                    {/* Main Menu Items */}
                    <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
                      {/* Hospedagem Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(0)}
                          className="w-full lg:w-auto px-6 lg:px-3 py-3 lg:py-6 text-white text-lg lg:text-sm font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 0}
                        >
                          <span>{t('navigation.accommodation')}</span>
                          <span className="text-2xl lg:hidden w-10 h-10 flex items-center justify-center">{activeDropdown === 0 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 0 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.accommodation} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.accommodation')}</Link>
                          <Link to={siteConfig.buttonLinks.areasExternas} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.lodge')}</Link>
                          <Link to={siteConfig.buttonLinks.gastronomy} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.gastronomy')}</Link>
                          <Link to={siteConfig.buttonLinks.eventosNatureza} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.natureEvents')}</Link>
                        </div>
                      </li>

                      {/* Experiências Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(1)}
                          className="w-full lg:w-auto px-6 lg:px-3 py-3 lg:py-6 text-white text-lg lg:text-sm font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 1}
                        >
                          <span>{t('navigation.experiences')}</span>
                          <span className="text-2xl lg:hidden w-10 h-10 flex items-center justify-center">{activeDropdown === 1 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 1 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.birdwatching} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.birdwatching')}</Link>
                          <Link to={siteConfig.buttonLinks.primates} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.primatesObservation')}</Link>
                          <Link to={siteConfig.buttonLinks.safariBoat} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.safariBoat')}</Link>
                          <Link to={siteConfig.buttonLinks.trilhas} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.trails')}</Link>
                          <Link to={siteConfig.buttonLinks.guiasCampo} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.fieldGuides')}</Link>
                        </div>
                      </li>

                      {/* Conservação Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(2)}
                          className="w-full lg:w-auto px-6 lg:px-3 py-3 lg:py-6 text-white text-lg lg:text-sm font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 2}
                        >
                          <span>{t('navigation.conservation')}</span>
                          <span className="text-2xl lg:hidden w-10 h-10 flex items-center justify-center">{activeDropdown === 2 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 2 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.estacaoPesquisa} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.researchStation')}</Link>
                          <Link to={siteConfig.buttonLinks.nascenteNatural} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.nascentNatural')}</Link>
                          <Link to={siteConfig.buttonLinks.falaramDeNos} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.theySpokeAboutUs')}</Link>
                          <Link to={siteConfig.buttonLinks.galeria} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.photoGallery')}</Link>
                        </div>
                      </li>

                      {/* Prepare sua Viagem Dropdown */}
                      <li className="w-full lg:w-auto lg:h-full lg:relative group">
                        <button
                          onClick={() => handleDropdownClick(3)}
                          className="w-full lg:w-auto px-6 lg:px-3 py-3 lg:py-6 text-white text-lg lg:text-sm font-medium 
                            uppercase tracking-wider font-primary hover:text-white/80 transition-colors duration-300
                            flex justify-between lg:block items-center"
                          aria-expanded={activeDropdown === 3}
                        >
                          <span>{t('navigation.prepareYourTrip')}</span>
                          <span className="text-2xl lg:hidden w-10 h-10 flex items-center justify-center">{activeDropdown === 3 ? '−' : '+'}</span>
                        </button>
                        <div className={`${activeDropdown === 3 ? 'block mt-2' : 'hidden'} lg:hidden lg:group-hover:block
                          lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:w-[220px]
                          lg:bg-primary-dark/95 lg:rounded-lg lg:py-2 lg:border lg:border-white/10 lg:shadow-lg
                          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                          lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-all lg:duration-200`}>
                          <Link to={siteConfig.buttonLinks.faq} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.frequentlyAskedQuestions')}</Link>
                          <Link to={siteConfig.buttonLinks.comoChegar} className="block px-8 lg:px-6 py-3 text-white/90 lg:text-white text-base lg:text-[0.9rem] font-primary tracking-wide lg:hover:bg-white/10 lg:hover:pl-8 transition-all duration-200" onClick={handleLinkClick}>{t('navigation.howToGet')}</Link>
                        </div>
                      </li>
                    </div>

                    {/* Language and Reserve Buttons */}
                    <div className="flex items-center">
                      {/* Vertical Divider */}
                      <div className="hidden lg:block h-6 w-px bg-white/20 mx-4"></div>
                      
                      {/* Language Toggle - Desktop only */}
                      <button 
                        onClick={toggleLanguage}
                        className="lg:mx-3 px-3 lg:px-3 py-1 lg:py-1 text-white text-lg lg:text-sm font-medium 
                          uppercase tracking-wider font-primary hover:text-white/80 transition-all duration-300 
                          flex items-center justify-center rounded-full border-2 border-white/40 bg-white/15 
                          hover:bg-white/25 hover:border-white/50 hover:scale-105 
                          min-w-[42px] h-[42px] shadow-sm relative overflow-hidden hidden lg:flex"
                        aria-label={i18n.language === 'pt' ? 'Mudar para inglês' : 'Change to Portuguese'}
                      >
                        <span className="relative z-10">{i18n.language === 'pt' ? 'PT' : 'EN'}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
                      </button>
                    </div>
                  </ul>
                </div>

                {/* Bottom Actions - Mobile Only */}
                <div className="lg:hidden border-t border-white/10 p-6 space-y-4">
                  {/* Language Toggle - Mobile Only */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center justify-center px-4 py-2 text-white text-base font-medium 
                        border-2 border-white/40 bg-white/15 rounded-full w-[60px]
                        hover:bg-white/25 hover:border-white/50 transition-all duration-300 shadow-sm"
                      aria-label={i18n.language === 'pt' ? 'Mudar para inglês' : 'Change to Portuguese'}
                    >
                      {i18n.language === 'pt' ? 'PT' : 'EN'}
                    </button>
                    <span className="text-white/60 text-sm">Idioma / Language</span>
                  </div>
                
                  <a
                    href={siteConfig.buttonLinks.bookNow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#C4A24D] text-white text-base font-semibold uppercase tracking-wider px-4 py-3
                      rounded-full text-center hover:bg-[#d2af5b] transition-colors duration-300"
                  >
                    {t('navigation.bookNow')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button and Mobile Menu Toggle */}
          <div className="flex items-center">
            {/* Book Now Button */}
            <a
              href={siteConfig.buttonLinks.bookNow}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center h-8 px-4 text-sm font-medium text-primary bg-white rounded-full 
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {t('navigation.bookNow')}
            </a>

            {/* Mobile Menu Toggle - Only show when closed */}
            <button
              onClick={toggleMenu}
              className={`ml-4 lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full ${isOpen ? 'hidden' : 'flex'}`}
            >
              <span className="w-6 h-0.5 bg-white mb-1.5"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 