import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import '../styles/core/components/index.css';
import { getFolderImage, folderImageMapping } from '../config/cloudinaryConfig';
import { siteConfig, featureFlags } from '../config';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Move all hooks to the top level
  const testimonials = useMemo(() => siteConfig?.home?.testimonials?.items || [], []);
  
  const experienceStyles = useMemo(() => ({
    birdwatching: {
      backgroundImage: `url(${getFolderImage('birdwatching', 'hero')})`
    },
    primates: {
      backgroundImage: `url(${getFolderImage('primatas', 'hero')})`
    },
    safari: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'hero')})`
    }
  }), []);

  const cloudinaryCommonProps = useMemo(() => ({
    cloudName: "dxlhv2mji",
    width: "auto",
    crop: "scale",
    loading: "lazy",
    quality: "auto:best",
    fetchFormat: "auto"
  }), []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if ((scrollPosition > 50 && !isScrolled) || (scrollPosition <= 50 && isScrolled)) {
      setIsScrolled(scrollPosition > 50);
    }
  }, [isScrolled]);

  // Debug CSS
  useEffect(() => {
    const styleSheets = Array.from(document.styleSheets);
    console.log('Loaded stylesheets:', styleSheets.map(sheet => sheet.href));
  }, []);

  // Scroll effect
  useEffect(() => {
    let scrollTimeout;
    const debouncedScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => handleScroll());
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [handleScroll]);

  // Testimonial rotation effect - only runs if testimonials feature is enabled
  useEffect(() => {
    if (!featureFlags?.enableTestimonials) return;
    
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  // Debug siteConfig
  console.log('siteConfig:', siteConfig);
  console.log('conservation:', siteConfig?.home?.conservation);

  return (
    <div className="home">
      <section className="video-hero">
        <div className="video-container">
          <iframe
            src={`${siteConfig?.home?.hero?.videoUrl}?muted=1&loop=1&background=1&autoplay=1&dnt=1&app_id=58479&quality=auto`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="background-video"
            title={siteConfig?.site?.name}
            loading="lazy"
          ></iframe>
        </div>
        <div className={`hero-overlay ${isScrolled ? 'scrolled' : ''}`}></div>
      </section>

      <section className="about">
        <div className="container">
          <div className="section-header">
            <h2>BEM-VINDO AO JARDIM DA AMAZÔNIA</h2>
            <p>Onde a Amazônia encontra o Cerrado</p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-description">
                Localizado às margens do Rio Claro, o Jardim da Amazônia é um refúgio onde a 
                Floresta Amazônica encontra o Cerrado, criando um dos ecossistemas mais diversos do Brasil. 
                Nossa missão é proporcionar experiências únicas de conexão com a natureza, enquanto 
                preservamos este tesouro natural para as futuras gerações.
              </p>
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <span>Conservação Ativa</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <span>Acomodações Sustentáveis</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <span>Guias Especializados</span>
                </div>
              </div>
              <div className="about-cta">
                <Link to="/nossa-historia" className="btn-primary">
                  Conheça Nossa História
                </Link>
              </div>
            </div>
            <div className="about-image">
              <Image 
                {...cloudinaryCommonProps}
                publicId={folderImageMapping.home['vista-aerea-lodge']}
                alt="Vista aérea do Lodge"
                className="image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="biodiversity">
        <div className="biodiversity-grid">
          {siteConfig?.home?.biodiversity?.stats?.map((stat, index) => (
            <div key={index} className="biodiversity-stat">
              <div className="biodiversity-number">{stat.number}</div>
              <div className="biodiversity-label">{stat.title}</div>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recognition">
        <div className="recognition-grid">
          {siteConfig?.home?.recognition?.items?.map((item) => (
            <div key={item.id} className="recognition-item">
              <Image 
                {...cloudinaryCommonProps}
                publicId={folderImageMapping.logos[item.id]}
                alt={`${item.title} Badge`}
                className="recognition-icon"
              />
              <div className="recognition-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experiences">
        <div className="experiences-header">
          <h2>{siteConfig?.home?.experiences?.title}</h2>
          <p>{siteConfig?.home?.experiences?.subtitle}</p>
        </div>
        <div className="experiences-grid">
          {siteConfig?.home?.experiences?.items?.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-image" style={experienceStyles[exp.id]}></div>
              <div className="experience-overlay">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.desc}</p>
                <Link to={exp.link} className="btn-explore">Explorar</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {featureFlags?.enableTestimonials && (
        <section className="testimonials">
          <div className="testimonials-header">
            <h2>{siteConfig?.home?.testimonials?.title}</h2>
          </div>
          <div className="testimonial-slider">
            {testimonials?.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-item ${index === activeTestimonial ? 'active' : ''}`}
              >
                <blockquote>{testimonial.quote}</blockquote>
                <cite className="author">{testimonial.author}</cite>
                <span className="date">{testimonial.date}</span>
              </div>
            ))}
            <div className="testimonial-nav">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta">
        <div className="cta-content">
          <h2>{siteConfig?.home?.cta?.title}</h2>
          <p>{siteConfig?.home?.cta?.subtitle}</p>
          <div className="cta-buttons">
            <a href={siteConfig?.site?.bookingUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary">
              Reserve Agora
            </a>
            <Link to="/como-chegar" className="btn-secondary">
              Como Chegar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 