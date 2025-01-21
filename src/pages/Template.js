import React from 'react';
import '../styles/Template.css';
import { 
  FaWifi, 
  FaShower, 
  FaFan, 
  FaLeaf, 
  FaMountain, 
  FaHeart,
  FaChevronRight
} from 'react-icons/fa';
import { getFolderImage } from '../config/cloudinaryConfig';

const heroStyle = {
  backgroundImage: `url(${getFolderImage('home', 'hero')})`,
};

function Template() {
  return (
    <div className="template">
      {/* Hero Section */}
      <section className="page-hero" style={heroStyle}>
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-label">Design System</span>
            <h1>Jardim Amazônia</h1>
            <p>Guia de estilo e componentes</p>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="section typography">
        <div className="container">
          <div className="section-header">
            <span className="section-label">01</span>
            <h2>Typography</h2>
            <p className="section-description">Sistema tipográfico harmonioso que combina elegância e legibilidade</p>
          </div>

          <div className="typography-examples">
            <div className="type-item">
              <h1>Heading 1</h1>
              <div className="type-details">
                <span className="font-name">Montserrat Bold</span>
                <span className="font-specs">4rem (64px) | Weight: 700</span>
                <span className="font-usage">Hero titles, main headlines</span>
              </div>
            </div>

            <div className="type-item">
              <h2>Heading 2</h2>
              <div className="type-details">
                <span className="font-name">Montserrat SemiBold</span>
                <span className="font-specs">2.5rem (40px) | Weight: 600</span>
                <span className="font-usage">Section headers, important titles</span>
              </div>
            </div>

            <div className="type-item">
              <h3>Heading 3</h3>
              <div className="type-details">
                <span className="font-name">Montserrat Medium</span>
                <span className="font-specs">1.5rem (24px) | Weight: 500</span>
                <span className="font-usage">Subtitles, card headers</span>
              </div>
            </div>

            <div className="type-item">
              <p className="body-text-example">Body Text Example</p>
              <div className="type-details">
                <span className="font-name">Lato Regular</span>
                <span className="font-specs">1rem (16px) | Weight: 400</span>
                <span className="font-usage">Main content, descriptions, paragraphs</span>
              </div>
            </div>

            <div className="type-item">
              <p className="ui-text-example">UI Text Example</p>
              <div className="type-details">
                <span className="font-name">Poppins Medium</span>
                <span className="font-specs">0.9rem (14px) | Weight: 500</span>
                <span className="font-usage">Buttons, labels, navigation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="section colors">
        <div className="container">
          <div className="section-header">
            <span className="section-label">02</span>
            <h2>Colors</h2>
            <p className="section-description">Paleta de cores que reflete a natureza e sustentabilidade</p>
          </div>

          <div className="color-grid">
            <div className="color-item primary">
              <div className="color-box"></div>
              <div className="color-info">
                <h3>Primary Green</h3>
                <span className="color-hex">#45A049</span>
                <p className="color-usage">Main actions, highlights, accents</p>
              </div>
            </div>

            <div className="color-item secondary">
              <div className="color-box"></div>
              <div className="color-info">
                <h3>Deep Forest</h3>
                <span className="color-hex">#2C5530</span>
                <p className="color-usage">Headers, secondary elements</p>
              </div>
            </div>

            <div className="color-item neutral">
              <div className="color-box"></div>
              <div className="color-info">
                <h3>Earth Gray</h3>
                <span className="color-hex">#333333</span>
                <p className="color-usage">Text, content, icons</p>
              </div>
            </div>

            <div className="color-item background">
              <div className="color-box"></div>
              <div className="color-info">
                <h3>Cloud White</h3>
                <span className="color-hex">#F5F5F5</span>
                <p className="color-usage">Backgrounds, cards, sections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="section components">
        <div className="container">
          <div className="section-header">
            <span className="section-label">03</span>
            <h2>Components</h2>
            <p className="section-description">Elementos de interface consistentes e reutilizáveis</p>
          </div>

          {/* Cards */}
          <div className="component-group">
            <h3>Cards</h3>
            <div className="component-description">
              <p>Cartões informativos com layout flexível e hierarquia clara</p>
            </div>

            <div className="room-card">
              <div className="room-image-container">
                <div className="room-image" style={{backgroundImage: `url(${getFolderImage('acomodacoes', 'bangalo-familia')})`}}></div>
                <div className="room-badge">
                  <FaLeaf />
                  <span>Premium</span>
                </div>
              </div>
              <div className="room-content">
                <h3>Bangalô Família</h3>
                <p className="room-description">
                  Espaçosa acomodação com vista privilegiada para a natureza, ideal para famílias que buscam conforto e privacidade.
                </p>
                <div className="room-features">
                  <div className="feature-item">
                    <FaWifi className="feature-icon" />
                    <span>Wi-Fi</span>
                  </div>
                  <div className="feature-item">
                    <FaShower className="feature-icon" />
                    <span>Chuveiro Natural</span>
                  </div>
                  <div className="feature-item">
                    <FaFan className="feature-icon" />
                    <span>Ventilador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="component-group">
            <h3>Buttons</h3>
            <div className="component-description">
              <p>Botões com diferentes níveis de ênfase e propósito</p>
            </div>

            <div className="button-grid">
              <button className="btn primary-btn">
                <span>Primary Action</span>
                <FaChevronRight />
              </button>
              <button className="btn secondary-btn">Secondary Action</button>
              <button className="btn outline-btn">Outline Button</button>
              <button className="btn text-btn">Text Button</button>
            </div>
          </div>

          {/* Form Elements */}
          <div className="component-group">
            <h3>Form Elements</h3>
            <div className="component-description">
              <p>Campos de formulário estilizados e acessíveis</p>
            </div>

            <div className="form-examples">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" placeholder="Digite seu nome" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" placeholder="Digite sua mensagem"></textarea>
              </div>
              <div className="form-group checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">Li e aceito os termos de uso</label>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="component-group">
            <h3>Icons</h3>
            <div className="component-description">
              <p>Sistema de ícones consistente para melhor comunicação visual</p>
            </div>

            <div className="icon-grid">
              <div className="icon-item">
                <FaWifi />
                <span>Wi-Fi</span>
              </div>
              <div className="icon-item">
                <FaShower />
                <span>Chuveiro</span>
              </div>
              <div className="icon-item">
                <FaMountain />
                <span>Trilhas</span>
              </div>
              <div className="icon-item">
                <FaHeart />
                <span>Favoritos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template; 