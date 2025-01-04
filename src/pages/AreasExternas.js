import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AreasExternas.css';

function AreasExternas() {
  const areas = [
    {
      id: 'piscina',
      title: 'Piscina Natural',
      description: 'Nossa piscina natural é um verdadeiro oásis em meio à floresta. Com águas cristalinas e refrescantes, proporciona momentos de relaxamento em total harmonia com a natureza.',
      features: [
        'Piscina de água potável de nascente',
        'Deck para banho de sol',
        'Imersão total na natureza',
        'Passarela pela floresta para acesso exclusivo'
      ],
      image: 'src/images/area-externa/piscina.jpg',
      link: null
    },
    {
      id: 'trilhas',
      title: 'Trilhas e Lagoas',
      description: 'Explore nossa extensa rede de trilhas que serpenteiam pela propriedade, passando por lagoas exuberantes e pontos de observação estratégicos.',
      features: [
        'Trilhas guiadas',
        'Lagoas exuberantes',
        'Pontos de observação',
        'Áreas de descanso'
      ],
      image: 'src/images/area-externa/trilhas.jpg',
      link: '/trilhas'
    },
    {
      id: 'convivencia',
      title: 'Espaços de Convivência',
      description: 'Áreas comuns aconchegantes projetadas para proporcionar interação social e momentos de descontração em meio à natureza.',
      features: [
        'Lounge ao ar livre',
        'Área de leitura',
        'Wi-Fi disponível',
        'Iluminação ambiente',
        'Casa de bonecas',
        'Mini-quadra de areia'
      ],
      image: 'src/images/area-externa/convivencia.jpg'
    }
  ];

  return (
    <div className="areas-externas">
      <div className="page-hero areas">
        <div className="hero-content">
          <h1>Áreas Externas</h1>
          <p>Espaços únicos em harmonia com a natureza</p>
        </div>
      </div>

      <section className="areas-intro">
        <div className="container">
          <p className="intro-text">
            Nossas áreas externas foram cuidadosamente planejadas para proporcionar 
            uma experiência completa de imersão na natureza. Cada espaço foi criado 
            pensando no seu conforto e na preservação do ambiente natural.
          </p>
        </div>
      </section>

      <section className="areas-grid">
        <div className="container">
          {areas.map((area) => (
            <div key={area.id} className="area-card">
              <div className="area-images">
                <div 
                  className="area-image"
                  style={{backgroundImage: `url(${area.image})`}}
                />
              </div>
              <div className="area-content">
                <h2>{area.title}</h2>
                <p className="area-description">{area.description}</p>
                <div className="area-features">
                  <h3>Destaques</h3>
                  <ul>
                    {area.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                {area.link && (
                  <Link to={area.link} className="btn-explore">
                    Saiba mais
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="activities-preview">
        <div className="container">
          <h2>Atividades Disponíveis</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">🌿</div>
              <h3>Observação de Aves</h3>
              <p>Explore a rica diversidade de aves amazônicas nos arredores da nossa propriedade</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">⚽</div>
              <h3>Área de Lazer</h3>
              <p>As crianças têm seu espaço garantido para a diversão na nossa mini-quadra de areia e na encantadora casa de bonecas</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">📸</div>
              <h3>Fotografia</h3>
              <p>Capture momentos únicos em cenários deslumbrantes da natureza amazônica</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🧘</div>
              <h3>Meditação</h3>
              <p>Encontre paz e tranquilidade em nossos espaços dedicados ao bem-estar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sustainability">
        <div className="container">
          <h2>Compromisso com a Sustentabilidade</h2>
          <div className="sustainability-content">
            <div className="sustainability-text">
              <p>
                Todas as nossas áreas externas foram desenvolvidas seguindo 
                critérios de sustentabilidade. Utilizamos materiais locais e técnicas 
                que minimizam o impacto ambiental, garantindo a preservação do 
                ecossistema natural.
              </p>
              <ul className="sustainability-features">
                <li>Iluminação de baixo impacto via energia solar</li>
                <li>Móveis feitos de madeira recuperada</li>
                <li>Projetos de monitoramento de fauna</li>
                <li>Preservação da vegetação nativa</li>
                <li>Parcerias com iniciativas de conservação</li>
                <li>Educação ambiental para visitantes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="area-cta">
        <div className="container">
          <h2>Venha Conhecer Nossos Espaços</h2>
          <p>Reserve sua estadia e desfrute de todas essas experiências únicas</p>
          <button className="btn-primary" onClick={() => window.location.href = '/reservas'}>
            Reserve Agora
          </button>
        </div>
      </section>
    </div>
  );
}

export default AreasExternas; 