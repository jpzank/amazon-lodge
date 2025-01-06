import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import '../styles/Home.css';
import { getFolderImage, getCloudinaryUrl, folderImageMapping } from '../config/cloudinaryConfig';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Memoize testimonials data to prevent unnecessary re-renders
  const testimonials = useMemo(() => [
    {
      quote: "Jardim da Amazônia – Uma incrível empresa familiar na linha de frente da conservação da Floresta Amazônica!",
      author: "M Carr - USA",
      date: "April 2023"
    },
    {
      quote: "Uma experiência única de imersão na natureza. O encontro perfeito entre conforto e aventura sustentável.",
      author: "Ana Silva - Brasil",
      date: "Março 2023"
    },
    {
      quote: "Paradise for birdwatchers! The diversity of species and professional guidance made our stay unforgettable.",
      author: "John Miller - UK",
      date: "May 2023"
    }
  ], []);

  // Optimize scroll handler with useCallback and debounce
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if ((scrollPosition > 50 && !isScrolled) || (scrollPosition <= 50 && isScrolled)) {
      setIsScrolled(scrollPosition > 50);
    }
  }, [isScrolled]);

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

  // Testimonial auto-rotation with cleanup
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  // Memoize experience styles to prevent recalculation on each render
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

  // Memoize common Cloudinary image props
  const cloudinaryCommonProps = useMemo(() => ({
    cloudName: "dxlhv2mji",
    width: "auto",
    crop: "scale",
    loading: "lazy",
    quality: "auto:best",
    fetchFormat: "auto"
  }), []);

  return (
    <div className="home">
      <section className="video-hero">
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/1043999382?muted=1&loop=1&background=1&autoplay=1&dnt=1&app_id=58479&quality=auto"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="background-video"
            title="Jardim da Amazonia"
            loading="lazy"
          ></iframe>
        </div>
        <div className={`hero-overlay ${isScrolled ? 'scrolled' : ''}`}>
          <div className="hero-content">
            <h1>JARDIM DA AMAZÔNIA</h1>
            <p>Um Refúgio de Riquezas Naturais</p>
            <div className="hero-buttons">
              <a href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary">
                Reserve Sua Experiência
              </a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      <section className="biodiversity">
        <div className="section-container">
          <div className="biodiversity-grid">
            {[
              { number: "580+", title: "Espécies de Aves", desc: "Catalogadas em nossa reserva" },
              { number: "7", title: "Espécies de Primatas", desc: "Dos 29 reconhecidos em MT" },
              { number: "30+", title: "Mamíferos", desc: "De médio e grande porte" },
              { number: "∞", title: "Experiências", desc: "Únicas na natureza" }
            ].map((stat, index) => (
              <div key={index} className="biodiversity-stat">
                <div className="stat-number">{stat.number}</div>
                <h3>{stat.title}</h3>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recognition">
        <div className="section-container">
          <div className="recognition-grid">
            {[
              {
                id: 'save-brasil',
                title: 'Important Bird Area',
                desc: 'Reconhecido pela BirdLife International e SAVE Brasil'
              },
              {
                id: 'ebird',
                title: 'TOP 3 Hotspot',
                desc: 'E-bird / The Cornell Lab of Ornithology'
              },
              {
                id: 'i-eco',
                title: 'Instituto Ecótono',
                desc: 'Parceria com o IECO no em estudos científicos'
              }
            ].map((item) => (
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
        </div>
      </section>

      <section className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <Image 
                {...cloudinaryCommonProps}
                publicId={folderImageMapping.home['vista-aerea-lodge']}
                alt="Vista aérea do Lodge"
              />
            </div>
            <div className="about-content">
              <h2>SANTUÁRIO ECOLÓGICO</h2>
              <p>
                Localizado às margens do Rio Claro, o Jardim da Amazônia é um refúgio onde a 
                Floresta Amazônica encontra o Cerrado, criando um dos ecossistemas mais diversos do Brasil. 
                Nossa missão é proporcionar experiências únicas de conexão com a natureza, enquanto 
                preservamos este tesouro natural para as futuras gerações.
              </p>
              <div className="about-features">
                {[
                  { icon: 'leaf', text: 'Conservação Ativa' },
                  { icon: 'home', text: 'Acomodações Sustentáveis' },
                  { icon: 'users', text: 'Guias Especializados' }
                ].map((feature, index) => (
                  <div key={index} className="feature">
                    <i className={`fas fa-${feature.icon}`}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="button-container">
                <Link to="/nossa-historia" className="btn-explore">Conheça Nossa História</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experiences">
        <div className="section-container">
          <div className="section-header">
            <h2>EXPERIÊNCIAS EXTRAORDINÁRIAS</h2>
            <p>Aventuras no Coração da Natureza</p>
          </div>
          <div className="experiences-grid">
            {[
              {
                style: experienceStyles.birdwatching,
                title: 'Birdwatching',
                desc: 'Um dos melhores destinos de observação de aves do Brasil',
                link: '/birdwatching'
              },
              {
                style: experienceStyles.primates,
                title: 'Primatas',
                desc: 'Descubra e explore a fascinante Rota dos Primatas',
                link: '/primatas'
              },
              {
                style: experienceStyles.safari,
                title: 'Safari no Rio Claro',
                desc: 'Navegue por águas cristalinas em meio à natureza',
                link: '/safari-boat'
              }
            ].map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-image" style={exp.style}></div>
                <div className="experience-overlay">
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                  <Link to={exp.link} className="btn-explore">Explorar</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-container">
          <h2 className="section-title">O QUE DIZEM NOSSOS VISITANTES</h2>
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-item ${index === activeTestimonial ? 'active' : ''}`}
              >
                <blockquote>{testimonial.quote}</blockquote>
                <cite>{testimonial.author}</cite>
                <span className="date">{testimonial.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="conservation">
        <div className="section-container">
          <div className="conservation-content">
            <h2>COMPROMISSO COM O FUTURO</h2>
            <p>
              Nossa dedicação à conservação da biodiversidade e ao turismo sustentável 
              tem ajudado a preservar uma das últimas áreas intocadas de floresta 
              amazônica primária, transformando este lugar em um importante santuário 
              ecológico para as gerações futuras.
            </p>
            <div className="conservation-actions">
              <Link to="/estacao-pesquisa" className="btn-secondary">Conheça Nossos Projetos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Sua Aventura Começa Aqui</h2>
            <p>Descubra experiências únicas no coração da Amazônia</p>
            <div className="cta-buttons">
              <a href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" 
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
        </div>
      </section>
    </div>
  );
}

export default Home; 