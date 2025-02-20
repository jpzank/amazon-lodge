import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/siteConfig';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark text-white py-16 px-8 mt-auto">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">{t('footer.sections.about.title')}</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.home} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.about.home')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.ourHistory} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.about.history')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.galeria} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.about.gallery')}</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">{t('footer.sections.accommodation.title')}</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.accommodation} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.accommodation.rooms')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.areasExternas} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.accommodation.lodge')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.gastronomy} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.accommodation.gastronomy')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.eventosNatureza} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.accommodation.natureEvents')}</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">{t('footer.sections.experiences.title')}</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.birdwatching} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.experiences.birdwatching')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.primates} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.experiences.primates')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.safariBoat} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.experiences.safariBoat')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.trilhas} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.experiences.trails')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.guiasCampo} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.experiences.fieldGuides')}</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">{t('footer.sections.information.title')}</h3>
          <ul className="space-y-3">
            <li><Link to={siteConfig.buttonLinks.faq} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.information.faq')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.comoChegar} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.information.howToGet')}</Link></li>
            <li><Link to={siteConfig.buttonLinks.privacyPolicy} className="text-white/80 hover:text-white transition-default text-[0.95rem]">{t('footer.sections.information.privacyPolicy')}</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-white text-lg font-medium uppercase tracking-wider">{t('footer.sections.contact.title')}</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-white font-medium">{t('footer.sections.contact.email')}</strong>
              <a href={`mailto:${siteConfig.buttonLinks.email}`} className="text-white/80 hover:text-white transition-default text-[0.95rem] ml-1">
                atendimento@jardimamazonia.com
              </a>
            </li>
            <li>
              <strong className="text-white font-medium">{t('footer.sections.contact.whatsapp')}</strong>
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
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}

export default Footer; 