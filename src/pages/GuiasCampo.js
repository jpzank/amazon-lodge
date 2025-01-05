import React, { useState } from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';
import '../styles/GuiasCampo.css';

function GuiasCampo() {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('guias-campo/hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const categoryImages = {
    aves: getFolderImage('guias-campo/aves'),
    mamiferos: getFolderImage('guias-campo/mamiferos'),
    repteis: getFolderImage('guias-campo/repteis'),
    borboletas: getFolderImage('guias-campo/borboletas'),
    vegetacao: getFolderImage('guias-campo/vegetacao')
  };

  const [activeCategory, setActiveCategory] = useState('aves');

  const categories = {
    aves: 'Aves',
    mamiferos: 'Mamíferos',
    repteis: 'Répteis',
    borboletas: 'Borboletas',
    vegetacao: 'Vegetação'
  };

  const vegetationTypes = [
    {
      title: 'Floresta de Terra Firme',
      description: 'Área não sujeita a inundações periódicas, com grande diversidade de espécies.'
    },
    {
      title: 'Floresta de Igapó',
      description: 'Área periodicamente inundada, com adaptações específicas da flora.'
    },
    {
      title: 'Floresta Decídua',
      description: 'Vegetação que perde folhas sazonalmente, adaptada a períodos secos.'
    },
    {
      title: 'Mata Ciliar',
      description: 'Vegetação às margens dos rios, essencial para a preservação dos cursos d\'água.'
    }
  ];

  const scientificPublications = [
    {
      category: 'aves',
      items: [
        {
          title: 'Aves do Jardim da Amazônia',
          authors: 'Equipe de Pesquisa do Jardim da Amazônia',
          year: '2023',
          description: 'Catálogo completo das espécies de aves observadas na região.',
          downloadUrl: '/docs/aves-jardim-amazonia.pdf'
        }
      ]
    },
    {
      category: 'mamiferos',
      items: [
        {
          title: 'Mamíferos do Jardim da Amazônia',
          authors: 'Equipe de Pesquisa do Jardim da Amazônia',
          year: '2023',
          description: 'Lista atualizada dos mamíferos registrados na área.',
          downloadUrl: '/docs/mamiferos-jardim-amazonia.pdf'
        }
      ]
    }
  ];

  return (
    <div className="guias-campo">
      <div className="page-hero guides" style={heroStyle}>
        <div className="hero-content">
          <h1>Guias de Campo</h1>
          <p>Conheça a biodiversidade do Jardim da Amazônia</p>
        </div>
      </div>

      <section className="guides-intro">
        <div className="container">
          <h2>Listas de Espécies</h2>
          <p className="intro-text">
            Nossa região abriga uma extraordinária biodiversidade, documentada através 
            de anos de pesquisa científica. Aqui você encontra guias e publicações 
            sobre nossa fauna e flora.
          </p>
        </div>
      </section>

      <section className="species-lists">
        <div className="container">
          <div className="category-filters">
            {Object.entries(categories).map(([key, value]) => (
              <button
                key={key}
                className={`filter-button ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="publications-grid">
            {scientificPublications
              .find(cat => cat.category === activeCategory)?.items
              .map((pub, index) => (
                <div key={index} className="publication-card">
                  <div className="publication-content">
                    <h3>{pub.title}</h3>
                    <p className="authors">{pub.authors}</p>
                    <p className="year">Ano: {pub.year}</p>
                    <p className="description">{pub.description}</p>
                    <a href={pub.downloadUrl} className="btn-download" target="_blank" rel="noopener noreferrer">
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {activeCategory === 'vegetacao' && (
        <section className="vegetation-types">
          <div className="container">
            <h2>Tipos de Vegetação</h2>
            <div className="vegetation-grid">
              {vegetationTypes.map((type, index) => (
                <div key={index} className="vegetation-card">
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="research-support">
        <div className="container">
          <h2>Apoio à Pesquisa</h2>
          <p>
            O Jardim da Amazônia apoia ativamente a pesquisa científica em nossa região. 
            Se você é pesquisador e tem interesse em desenvolver estudos em nossa área, 
            entre em contato conosco.
          </p>
          <div className="contact-buttons">
            <a href="mailto:adm@jardimdaamazonia.com.br" className="btn-primary">
              Contato para Pesquisadores
            </a>
          </div>
        </div>
      </section>

      <section className="books-interest">
        <div className="container">
          <h2>Livros de Interesse</h2>
          <div className="books-grid">
            <div className="book-card">
              <div className="book-image">
                <div className="image-placeholder">Imagem do Livro</div>
              </div>
              <div className="book-content">
                <h3>Guia de Aves da Amazônia</h3>
                <p>Guia completo com as principais espécies da região</p>
                <a href="#" className="btn-more">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="climate-info">
        <div className="container">
          <h2>Clima</h2>
          <div className="climate-content">
            <p>
              Nossa região apresenta um clima típico amazônico, com estações bem 
              definidas. O conhecimento das condições climáticas é essencial para 
              o planejamento de atividades de observação da fauna e flora.
            </p>
            <div className="climate-seasons">
              <div className="season">
                <h3>Estação Chuvosa</h3>
                <p>Novembro a Abril</p>
              </div>
              <div className="season">
                <h3>Estação Seca</h3>
                <p>Maio a Outubro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuiasCampo; 