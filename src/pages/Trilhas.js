import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFolderImage, getImagePhotographer } from '../config/cloudinaryConfig';
import PhotoCredit from '../components/PhotoCredit';
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

const Trilhas = () => {
  const [expandedRoteiro, setExpandedRoteiro] = useState(null);

  const atividades = {
    'Trilha do Jatobá': {
      imagem: getFolderImage('atividades', 'trilha-jatoba'),
      descricao: 'Trilha que permite apreciar a diversidade da floresta e árvores como o imponente jatobá, considerado sagrado pelos povos indígenas.'
    },
    'Lagoa das Araras': {
      imagem: getFolderImage('atividades', 'lagoa-araras'),
      descricao: 'Visita ao importante remanescente de floresta que protege um Ninhal que abriga uma diversidade de papagaios e araras.'
    },
    'Trilha do Laboratório': {
      imagem: getFolderImage('atividades', 'trilha-laboratorio'),
      descricao: 'Trilha educativa com foco em pesquisa e observação da biodiversidade local.'
    },
    'Visita ao Rio Arinos': {
      imagem: getFolderImage('atividades', 'rio-arinos'),
      descricao: 'Exploração das margens do Rio Arinos, com suas águas cristalinas e rica biodiversidade aquática.'
    },
    'Trilha do Piquiá': {
      imagem: getFolderImage('atividades', 'trilha-piquia'),
      descricao: 'Trilha intensa em ambiente de floresta, com acesso pelo Rio Claro, ideal para observação da flora nativa.'
    },
    'Trilha do Angelim': {
      imagem: getFolderImage('atividades', 'trilha-angelim'),
      descricao: 'Trilha que abrange uma variedade de habitats, ideal para observação de primatas e da majestosa árvore Angelim.'
    },
    'Visita a agriculturas locais': {
      imagem: getFolderImage('atividades', 'agricultura-local'),
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
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
      <div>
        <h5 className="text-lg font-medium text-gray-900 mb-1">{nome}</h5>
        <p className="text-gray-700 text-sm">{atividades[nome].descricao}</p>
      </div>
    </div>
  );

  const toggleRoteiro = (id) => {
    setExpandedRoteiro(expandedRoteiro === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: `url(${getFolderImage('trilhas', 'hero')})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4">Roteiros e Trilhas</h1>
          <p className="text-lg md:text-xl">Explore a biodiversidade do Jardim da Amazônia</p>
        </div>
        <PhotoCredit photographer={getImagePhotographer('trilhas', 'hero')} />
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-4">Nossas Trilhas</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Descubra nossa rede de trilhas e roteiros para você explorar a Amazônia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${getFolderImage('trilhas', 'jatoba')})` }}
                ></div>
                <PhotoCredit photographer={getImagePhotographer('trilhas', 'jatoba')} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Trilha do Jatobá</h3>
                <p className="text-gray-700 mb-8">
                  Esta trilha permite que você aprecie a diversidade da floresta e árvores como o imponente 
                  jatobá (Hymenaea courbaril), considerado sagrado pelos povos indígenas. É a mais acessível 
                  e frequentada de nossas trilhas, sendo particularmente boa para a observação de aves como 
                  Capito dayi (capitão-de-cinta), Heterocercus linteatus (coroa-de-fogo) e também para a 
                  observação de muitas borboletas, com destaque para a Morpho.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faClock} className="text-primary" />
                    2-3 horas
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="text-primary" />
                    3.2 km
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faBolt} className="text-primary" />
                    Moderada
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${getFolderImage('trilhas', 'angelim')})` }}
                ></div>
                <PhotoCredit photographer={getImagePhotographer('trilhas', 'angelim')} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Trilha do Angelim</h3>
                <p className="text-gray-700 mb-8">
                  Com acesso pelo Rio Claro, abrange uma maior variedade de habitats, inundadas sazonalmente. 
                  O habitat é particularmente bom para observação de primatas como o macaco-aranha-de-cara-preta 
                  (Ateles chamek), uma espécie em perigo de extinção. O Angelim é uma árvore majestosa com 
                  aproximadamente 30m de altura.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faClock} className="text-primary" />
                    1-2 horas
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="text-primary" />
                    800m
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faBolt} className="text-primary" />
                    Moderada
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${getFolderImage('trilhas', 'lagoa')})` }}
                ></div>
                <PhotoCredit photographer={getImagePhotographer('trilhas', 'lagoa')} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">Trilha da Lagoa</h3>
                <h5 className="text-lg text-primary mb-4">Experiência ao Pôr do Sol</h5>
                <p className="text-gray-700 mb-8">
                  Esta trilha permite apreciar a diversidade de aves como Capito dayi e Heterocercus linteatus, 
                  além de muitas borboletas. O pôr do sol oferece uma experiência perfeita para observação e 
                  fotografia.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faClock} className="text-primary" />
                    2-3 horas
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="text-primary" />
                    3.2 km
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faBolt} className="text-primary" />
                    Moderada
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${getFolderImage('trilhas', 'piquia')})` }}
                ></div>
                <PhotoCredit photographer={getImagePhotographer('trilhas', 'piquia')} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Trilha do Piquiá</h3>
                <p className="text-gray-700 mb-8">
                  Trilha intensa em ambiente de floresta, com acesso pelo Rio Claro, ideal para observação 
                  da flora nativa. O Piquiá é uma árvore de grande porte que produz frutos muito apreciados 
                  pela fauna local.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faClock} className="text-primary" />
                    2-3 horas
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faRulerHorizontal} className="text-primary" />
                    2.5 km
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <FontAwesomeIcon icon={faBolt} className="text-primary" />
                    Intensa
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Experiências Especiais
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faMoon} className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Avistamento Noturno</h3>
              <p className="text-gray-700 text-center">
                Safari noturno na passarela do Buriti para avistamentos do menor jacaré do mundo 
                (Jacaré anão - Paleosuchus palpebrosus) e diversas espécies de morcegos.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faSun} className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Pôr do Sol no Ninhal das Araras</h3>
              <p className="text-gray-700 text-center">
                Um importante remanescente de floresta que protege um Ninhal que abriga uma diversidade 
                de papagaios e araras, tornando o pôr-do-sol um momento inesquecível.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faDove} className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Lagoa do Tiê Bicudo</h3>
              <p className="text-gray-700 text-center">
                Safari fotográfico de barco a motor no rio de águas claras e belas praias de areia branca. 
                Habitat do Conothraupis mesoleuca (tiê-bicudo), registrado no local em 2008.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Recomendações
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faShirt} className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">O que vestir</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Roupas leves e confortáveis
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Calçados apropriados para caminhada
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Chapéu ou boné
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Meias extras
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faSuitcase} className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-6">O que levar</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Repelente
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Protetor solar
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Água
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  Câmera fotográfica
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roteiros Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Roteiros Sugeridos
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {Object.entries(roteiros).map(([id, roteiro]) => (
              <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button 
                  className={`w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200
                    ${expandedRoteiro === id ? 'bg-gray-50' : ''}`}
                  onClick={() => toggleRoteiro(id)}
                >
                  <h3 className="text-xl font-semibold">{roteiro.titulo}</h3>
                  <FontAwesomeIcon 
                    icon={expandedRoteiro === id ? faChevronUp : faChevronDown} 
                    className="text-lg text-gray-500" 
                  />
                </button>
                {expandedRoteiro === id && (
                  <div className="px-8 pb-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Manhã</h4>
                        <div className="space-y-4">
                          {roteiro.manha.map((atividade) => renderAtividade(atividade))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Tarde</h4>
                        <div className="space-y-4">
                          {roteiro.tarde.map((atividade) => renderAtividade(atividade))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trilhas; 