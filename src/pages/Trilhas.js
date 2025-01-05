import React, { useState } from 'react';
import '../styles/Trilhas.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFolderImage } from '../config/cloudinaryConfig';
import { 
  faClock, 
  faRulerHorizontal, 
  faBolt, 
  faMoon, 
  faSun, 
  faDove,
  faShirt,
  faSuitcase,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

function Trilhas() {
  const [expandedRoteiro, setExpandedRoteiro] = useState(null);

  const atividades = {
    'Trilha do Jatobá': {
      imagem: getFolderImage('atividades/trilha-jatoba'),
      descricao: 'Trilha que permite apreciar a diversidade da floresta e árvores como o imponente jatobá, considerado sagrado pelos povos indígenas.'
    },
    'Lagoa das Araras': {
      imagem: getFolderImage('atividades/lagoa-araras'),
      descricao: 'Visita ao importante remanescente de floresta que protege um Ninhal que abriga uma diversidade de papagaios e araras.'
    },
    'Trilha do Laboratório': {
      imagem: getFolderImage('atividades/trilha-laboratorio'),
      descricao: 'Trilha educativa com foco em pesquisa e observação da biodiversidade local.'
    },
    'Visita ao Rio Arinos': {
      imagem: getFolderImage('atividades/rio-arinos'),
      descricao: 'Exploração das margens do Rio Arinos, com suas águas cristalinas e rica biodiversidade aquática.'
    },
    'Trilha do Piquiá': {
      imagem: getFolderImage('atividades/trilha-piquia'),
      descricao: 'Trilha intensa em ambiente de floresta, com acesso pelo Rio Claro, ideal para observação da flora nativa.'
    },
    'Trilha do Angelim': {
      imagem: getFolderImage('atividades/trilha-angelim'),
      descricao: 'Trilha que abrange uma variedade de habitats, ideal para observação de primatas e da majestosa árvore Angelim.'
    },
    'Visita a agriculturas locais': {
      imagem: getFolderImage('atividades/agricultura-local'),
      descricao: 'Conhecimento das práticas agrícolas sustentáveis da região e interação com a comunidade local.'
    }
  };

  const roteiros = {
    '3dias': {
      titulo: '3 Dias / 2 Noites',
      manha: ['Trilha do Jatobá'],
      tarde: ['Lagoa das Araras']
    },
    '4dias': {
      titulo: '4 Dias / 3 Noites',
      manha: ['Trilha do Laboratório', 'Visita ao Rio Arinos'],
      tarde: ['Trilha do Jatobá', 'Lagoa das Araras', 'Trilha do Piquiá']
    },
    '5dias': {
      titulo: '5 Dias / 4 Noites',
      manha: ['Trilha do Laboratório', 'Visita ao Rio Arinos', 'Visita a agriculturas locais'],
      tarde: ['Trilha do Jatobá', 'Lagoa das Araras', 'Trilha do Piquiá', 'Trilha do Angelim']
    }
  };

  const renderAtividade = (nome) => (
    <motion.div 
      className="atividade-item"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="atividade-imagem" style={{ backgroundImage: `url(${atividades[nome].imagem})` }}></div>
      <div className="atividade-conteudo">
        <h5>{nome}</h5>
        <p>{atividades[nome].descricao}</p>
      </div>
    </motion.div>
  );

  const toggleRoteiro = (id) => {
    setExpandedRoteiro(expandedRoteiro === id ? null : id);
  };

  return (
    <div className="trilhas">
      <div className="page-hero trails">
        <div className="hero-content">
          <h1>Roteiros e Trilhas</h1>
          <p>Explore a biodiversidade do Jardim da Amazônia</p>
        </div>
      </div>

      <section className="roteiros">
        <div className="container">
          <h2>Roteiros Sugeridos</h2>
          <div className="roteiros-lista">
            {Object.entries(roteiros).map(([id, roteiro]) => (
              <div key={id} className="roteiro-expander">
                <button 
                  className={`roteiro-header ${expandedRoteiro === id ? 'expanded' : ''}`}
                  onClick={() => toggleRoteiro(id)}
                >
                  <h3>{roteiro.titulo}</h3>
                  <FontAwesomeIcon 
                    icon={expandedRoteiro === id ? faChevronUp : faChevronDown} 
                    className="expander-icon" 
                  />
                </button>
                {expandedRoteiro === id && (
                  <div className="roteiro-content">
                    <div className="periodo-section">
                      <h4>Manhã</h4>
                      <div className="atividades-list">
                        {roteiro.manha.map((atividade) => renderAtividade(atividade))}
                      </div>
                    </div>
                    <div className="periodo-section">
                      <h4>Tarde</h4>
                      <div className="atividades-list">
                        {roteiro.tarde.map((atividade) => renderAtividade(atividade))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nossas-trilhas">
        <div className="container">
          <h2>Nossas Trilhas</h2>
          <p className="section-intro">
            Descubra nossa rede de trilhas e roteiros para você explorar a Amazônia.
          </p>
          
          <div className="trilhas-grid">
            <motion.div 
              className="trilha-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="trilha-image" style={{ backgroundImage: `url('/images/trilhas/jatoba.jpg')` }}></div>
              <div className="trilha-content">
                <h3>Trilha do Jatobá</h3>
                <p className="trilha-description">
                  Esta trilha permite que você aprecie a diversidade da floresta e árvores como o imponente 
                  jatobá (Hymenaea courbaril), considerado sagrado pelos povos indígenas. É a mais acessível 
                  e frequentada de nossas trilhas, sendo particularmente boa para a observação de aves como 
                  Capito dayi (capitão-de-cinta), Heterocercus linteatus (coroa-de-fogo) e também para a 
                  observação de muitas borboletas, com destaque para a Morpho.
                </p>
                <div className="trilha-info">
                  <span className="info-item">
                    <FontAwesomeIcon icon={faClock} className="info-icon" />
                    2-3 horas
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="info-icon" />
                    3.2 km
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faBolt} className="info-icon" />
                    Moderada
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="trilha-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="trilha-image" style={{ backgroundImage: `url('/images/trilhas/angelim.jpg')` }}></div>
              <div className="trilha-content">
                <h3>Trilha do Angelim</h3>
                <p className="trilha-description">
                  Com acesso pelo Rio Claro, abrange uma maior variedade de habitats, inundadas sazonalmente. 
                  O habitat é particularmente bom para observação de primatas como o macaco-aranha-de-cara-preta 
                  (Ateles chamek), uma espécie em perigo de extinção. O Angelim é uma árvore majestosa com 
                  aproximadamente 30m de altura.
                </p>
                <div className="trilha-info">
                  <span className="info-item">
                    <FontAwesomeIcon icon={faClock} className="info-icon" />
                    1-2 horas
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="info-icon" />
                    800m
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faBolt} className="info-icon" />
                    Moderada
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="trilha-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <div className="trilha-image" style={{ backgroundImage: `url('/images/trilhas/lagoa.jpg')` }}></div>
              <div className="trilha-content">
                <h3>Trilha da Lagoa</h3>
                <h5>Experiência ao Pôr do Sol</h5>
                <p className="trilha-description">
                  Esta trilha permite apreciar a diversidade de aves como Capito dayi e Heterocercus linteatus, 
                  além de muitas borboletas. O pôr do sol oferece uma experiência perfeita para observação e 
                  fotografia.
                </p>
                <div className="trilha-info">
                  <span className="info-item">
                    <FontAwesomeIcon icon={faClock} className="info-icon" />
                    2-3 horas
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="info-icon" />
                    3.2 km
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faBolt} className="info-icon" />
                    Moderada
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="trilha-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <div className="trilha-image" style={{ backgroundImage: `url('/images/trilhas/piquia.jpg')` }}></div>
              <div className="trilha-content">
                <h3>Trilha do Piquiá</h3>
                <p className="trilha-description">
                  Trilha intensa em ambiente de floresta, com acesso pelo Rio Claro, à 10 minutos da pousada. 
                  Disponível somente para grupos.
                </p>
                <div className="trilha-info">
                  <span className="info-item">
                    <FontAwesomeIcon icon={faClock} className="info-icon" />
                    3-4 horas
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="info-icon" />
                    1.5 km
                  </span>
                  <span className="info-item">
                    <FontAwesomeIcon icon={faBolt} className="info-icon" />
                    Intensa
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="experiencias-especiais">
        <div className="container">
          <h2>Experiências Especiais</h2>
          <div className="experiencias-grid">
            <motion.div 
              className="experiencia-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="experiencia-icon">
                <FontAwesomeIcon icon={faMoon} />
              </div>
              <h3>Avistamento Noturno</h3>
              <p>Safari noturno na passarela do Buriti para avistamentos do menor jacaré do mundo 
                (Jacaré anão - Paleosuchus palpebrosus) e diversas espécies de morcegos.</p>
            </motion.div>

            <motion.div 
              className="experiencia-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="experiencia-icon">
                <FontAwesomeIcon icon={faSun} />
              </div>
              <h3>Pôr do Sol no Ninhal das Araras</h3>
              <p>Um importante remanescente de floresta que protege um Ninhal que abriga uma diversidade 
                de papagaios e araras, tornando o pôr-do-sol um momento inesquecível.</p>
            </motion.div>

            <motion.div 
              className="experiencia-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="experiencia-icon">
                <FontAwesomeIcon icon={faDove} />
              </div>
              <h3>Lagoa do Tiê Bicudo</h3>
              <p>Safari fotográfico de barco a motor no rio de águas claras e belas praias de areia branca. 
                Habitat do Conothraupis mesoleuca (tiê-bicudo), registrado no local em 2008.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="recomendacoes">
        <div className="container">
          <h2>Recomendações</h2>
          <div className="recomendacoes-grid">
            <motion.div 
              className="recomendacao-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="recomendacao-icon">
                <FontAwesomeIcon icon={faShirt} />
              </div>
              <h3>O que vestir</h3>
              <ul>
                <li>Roupas leves e confortáveis</li>
                <li>Calçados apropriados para caminhada</li>
                <li>Chapéu ou boné</li>
                <li>Meias extras</li>
              </ul>
            </motion.div>

            <motion.div 
              className="recomendacao-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="recomendacao-icon">
                <FontAwesomeIcon icon={faSuitcase} />
              </div>
              <h3>O que levar</h3>
              <ul>
                <li>Repelente</li>
                <li>Protetor solar</li>
                <li>Água</li>
                <li>Câmera fotográfica</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trilhas; 