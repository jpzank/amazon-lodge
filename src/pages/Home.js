import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import '../styles/Home.css';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  return (
    <div className="home">
      <section className="video-hero">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <iframe
            src="https://player.vimeo.com/video/1043999382?muted=1&loop=1&background=1&autoplay=1&dnt=1&app_id=58479&quality=1080p&quality_selector=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%) scale(1.25)',
              objectFit: 'cover'
            }}
            title="Jardim da Amazonia">
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div className={`hero-overlay ${isScrolled ? 'scrolled' : ''}`}>
          <div className="hero-content">
            <h1>JARDIM DA AMAZÔNIA</h1>
            <p>Um Refúgio de Riquezas Naturais</p>
            <div className="hero-buttons">
              <a href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" target="_blank" rel="noopener noreferrer" className="btn-primary">Reserve Sua Experiência</a>
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
            <div className="biodiversity-stat">
              <div className="stat-number">580+</div>
              <h3>Espécies de Aves</h3>
              <p>Catalogadas em nossa reserva</p>
            </div>
            <div className="biodiversity-stat">
              <div className="stat-number">7</div>
              <h3>Espécies de Primatas</h3>
              <p>Dos 29 reconhecidos em MT</p>
            </div>
            <div className="biodiversity-stat">
              <div className="stat-number">30+</div>
              <h3>Mamíferos</h3>
              <p>De médio e grande porte</p>
            </div>
            <div className="biodiversity-stat">
              <div className="stat-number">∞</div>
              <h3>Experiências</h3>
              <p>Únicas na natureza</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition">
        <div className="section-container">
          <div className="recognition-grid">
            <div className="recognition-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="logos/save-brasil"
                alt="SAVE Brasil Badge"
                className="recognition-icon"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="recognition-content">
                <h3>Important Bird Area</h3>
                <p>Reconhecido pela BirdLife International e SAVE Brasil</p>
              </div>
            </div>
            <div className="recognition-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="logos/ebird"
                alt="Ebird Badge"
                className="recognition-icon"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="recognition-content">
                <h3>TOP 3 Hotspot</h3>
                <p>E-bird / The Cornell Lab of Ornithology</p>
              </div>
            </div>
            <div className="recognition-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="logos/i-eco"
                alt="Instituto Ecotono Badge"
                className="recognition-icon"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="recognition-content">
                <h3>Instituto Ecótono</h3>
                <p>Parceria com o IECO no em estudos científicos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <Image 
                cloudName="dxlhv2mji"
                publicId="home/vista-aerea-lodge"
                alt="Vista aérea do Lodge"
                width="auto"
                crop="scale"
                quality="auto"
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
                <div className="feature">
                  <i className="fas fa-leaf"></i>
                  <span>Conservação Ativa</span>
                </div>
                <div className="feature">
                  <i className="fas fa-home"></i>
                  <span>Acomodações Sustentáveis</span>
                </div>
                <div className="feature">
                  <i className="fas fa-users"></i>
                  <span>Guias Especializados</span>
                </div>
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
            <div className="experience-card">
              <div className="experience-image birdwatching"></div>
              <div className="experience-overlay">
                <h3>Birdwatching</h3>
                <p>Um dos melhores destinos de observação de aves do Brasil</p>
                <Link to="/birdwatching" className="btn-explore">Explorar</Link>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-image primates"></div>
              <div className="experience-overlay">
                <h3>Primatas</h3>
                <p>Descubra e explore a fascinante Rota dos Primatas</p>
                <Link to="/primatas" className="btn-explore">Explorar</Link>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-image safari"></div>
              <div className="experience-overlay">
                <h3>Safari no Rio Claro</h3>
                <p>Navegue por águas cristalinas em meio à natureza</p>
                <Link to="/safari-boat" className="btn-explore">Explorar</Link>
              </div>
            </div>
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
                <blockquote>
                  {testimonial.quote}
                  <footer>
                    <span className="author">{testimonial.author}</span>
                    <span className="date">{testimonial.date}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
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
              <a href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" target="_blank" rel="noopener noreferrer" className="btn-primary">Reserve Agora</a>
              <Link to="/como-chegar" className="btn-secondary">Como Chegar</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .experience-image.birdwatching {
          background-image: url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1/home/birdwatching');
        }
        
        .experience-image.primates {
          background-image: url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1/home/primates');
        }
        
        .experience-image.safari {
          background-image: url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1/home/safari');
        }
      `}</style>
    </div>
  );
}

export default Home; 