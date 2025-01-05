import React from 'react';
import '../styles/Gastronomia.css';
import { Image } from 'cloudinary-react';
import { getFolderImage } from '../config/cloudinaryConfig';

function Gastronomia() {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('gastronomia/hero-gastronomia')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="gastronomia">
      <div className="page-hero gastronomy" style={heroStyle}>
        <div className="hero-content">
          <h1>Gastronomia</h1>
          <p>Do Produtor Para Mesa</p>
        </div>
      </div>

      <section className="food-gallery">
        <div className="container">
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/prato-especial-do-chef"
                alt="Prato especial do chef"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="gallery-caption">
                <h3>Prato Especial do Chef</h3>
                <p>Criações exclusivas com ingredientes da estação</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/cafe-da-manha"
                alt="Café da manhã regional"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="gallery-caption">
                <h3>Café da Manhã Regional</h3>
                <p>Delícias matinais com produtos locais</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/pratos-tipicos"
                alt="Pratos típicos"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="gallery-caption">
                <h3>Pratos Típicos</h3>
                <p>Sabores autênticos da região</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/sobremesas-especiais"
                alt="Sobremesas especiais"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="gallery-caption">
                <h3>Sobremesas Especiais</h3>
                <p>Doces artesanais e frutas da região</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/pratos-casa"
                alt="Pratos da casa"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="gallery-caption">
                <h3>Pratos da Casa</h3>
                <p>Especialidades preparadas com carinho</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/especiarias-regionais"
                alt="Especialidades regionais"
                width="auto"
                crop="scale"
                quality="auto"
              />
              <div className="gallery-caption">
                <h3>Culinária Regional</h3>
                <p>O melhor da gastronomia local</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chef-statement">
        <div className="container">
          <div className="chef-content">
            <div className="chef-image">
              <Image 
                cloudName="dxlhv2mji"
                publicId="gastronomia/chef-jose-sergio"
                alt="Chef José Sérgio"
                width="auto"
                crop="scale"
                quality="auto"
              />
            </div>
            <div className="chef-quote">
              <h2>A Essência da Nossa Cozinha</h2>
              <blockquote>
                <p>
                  "A gastronomia sempre teve o grande objetivo de unir pessoas, seja através da cocção dos 
                  alimentos ou do próprio alimento in natura. Mas o grande objetivo é alimentar a "alma" 
                  antes de alimentar o corpo, nessa grande busca pelo prazer em alimentar e proporcionar 
                  grandes momentos, grandes encontros."
                </p>
                <p>
                  "Frutos, sementes, hortaliças, peixes, vegetais e outras iguarias que encontrei nessa 
                  fusão Amazônia / Cerrado é indiscutivelmente a busca pelo meu projeto de vida como 
                  cozinheiro. Encontrei um porto seguro ou "cozinha segura". Cozinhar é antes de 
                  tudo um grande ato de AMOR."
                </p>
                <footer>- Chef José Sérgio -</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-highlights">
        <div className="container">
          <h2>Nossa Experiência Culinária</h2>
          <div className="menu-grid">
            <div className="menu-card">
              <div className="menu-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="gastronomia/cafe-da-manha"
                  alt="Café da Manhã"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
              </div>
              <div className="menu-content">
                <h3>Café da Manhã</h3>
                <p>
                  Frutas frescas da região, pães e mel caseiros, geleias artesanais e uma variedade de pratos 
                  preparados com ingredientes locais.
                </p>
                <ul className="menu-time">
                  <li>Horário: 7:30 às 9:30</li>
                </ul>
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="gastronomia/almoco"
                  alt="Almoço"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
              </div>
              <div className="menu-content">
                <h3>Almoço</h3>
                <p>
                  Pratos que celebram a fusão entre Amazônia e Cerrado, com destaque para peixes regionais 
                  e vegetais cultivados por produtores locais.
                </p>
                <ul className="menu-time">
                  <li>Horário: 12:30</li>
                </ul>
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-image">
                <Image 
                  cloudName="dxlhv2mji"
                  publicId="gastronomia/jantar"
                  alt="Jantar"
                  width="auto"
                  crop="scale"
                  quality="auto"
                />
              </div>
              <div className="menu-content">
                <h3>Jantar</h3>
                <p>
                  Experiência gastronômica completa que explora os sabores da região, harmonizando
                  tradição e criatividade.
                </p>
                <ul className="menu-time">
                  <li>Horário: 19:30</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="culinary-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Farm to Table</h3>
              <p>
                Nossa filosofia "Do Produtor Para Mesa" garante que cada refeição conte uma história sobre 
                nossa terra, nossa gente e nosso compromisso com a preservação ambiental.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Tradição & Inovação</h3>
              <p>
                Combinamos receitas tradicionais da culinária local com técnicas contemporâneas, 
                criando uma experiência gastronômica única.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Experiências Especiais</h3>
              <p>
                Oferecemos jantares temáticos e experiências gastronômicas personalizadas mediante 
                reserva prévia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dietary-info">
        <div className="container">
          <div className="info-content">
<h2>Reserve Sua Experiência Gastronômica</h2>
            <p>
              Venha descobrir os sabores da fusão entre Amazônia e Cerrado em uma 
              experiência gastronômica inesquecível.
            </p>
            <button className="btn-primary" onClick={() => window.location.href = '/reservas'}>
              Fazer Reserva
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gastronomia; 