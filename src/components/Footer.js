import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { siteConfig } from '../config/siteConfig';

function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16 px-8 mt-auto">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">Sobre Nós</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.home} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Home</Link></li>
            <li><Link to={siteConfig.buttonLinks.ourHistory} className="text-white/80 hover:text-white transition-default text-[0.95rem]">História</Link></li>
            <li><Link to={siteConfig.buttonLinks.galeria} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Galeria de Imagens</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">Hospedagem</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.accommodation} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Acomodações</Link></li>
            <li><Link to={siteConfig.buttonLinks.areasExternas} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Áreas Externas</Link></li>
            <li><Link to={siteConfig.buttonLinks.gastronomy} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Gastronomia</Link></li>
            <li><Link to={siteConfig.buttonLinks.eventosCorporativos} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Eventos na Natureza</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">Experiências</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.birdwatching} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Birdwatching</Link></li>
            <li><Link to={siteConfig.buttonLinks.primates} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Observação de Primatas</Link></li>
            <li><Link to={siteConfig.buttonLinks.safariBoat} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Safari Boat</Link></li>
            <li><Link to={siteConfig.buttonLinks.trilhas} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Trilhas</Link></li>
            <li><Link to={siteConfig.buttonLinks.guiasCampo} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Guias de Campo</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">Informações</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.faq} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Perguntas Frequentes</Link></li>
            <li><Link to={siteConfig.buttonLinks.comoChegar} className="text-white/80 hover:text-white transition-default text-[0.95rem]">Como Chegar</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">Contato</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-white font-medium">E-mail:</strong>
              <a href={siteConfig.buttonLinks.email} className="text-white/80 hover:text-white transition-default text-[0.95rem] ml-1">
                atendimento@jardimamazonia.com
              </a>
            </li>
            <li>
              <strong className="text-white font-medium">WhatsApp:</strong>
              <a href={siteConfig.buttonLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-default text-[0.95rem] ml-1">
                +55 65 4042-0595
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href={siteConfig.buttonLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white text-2xl hover:opacity-80 transition-default"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.buttonLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white text-2xl hover:opacity-80 transition-default"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
        <p className="text-white/60 text-sm">
          © 2025 Jardim da Amazônia / CNPJ: 02.025.529/0001-95
        </p>
      </div>
    </footer>
  );
}

export default Footer; 