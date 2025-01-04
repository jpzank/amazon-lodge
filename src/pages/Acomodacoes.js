import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Acomodacoes.css';
import { 
  FaWifi, 
  FaShower, 
  FaFan, 
  FaBed, 
  FaLeaf,
  FaMountain,
  FaHeart,
  FaRegClock,
  FaCheckCircle,
  FaInfoCircle,
  FaSnowflake,
  FaUmbrellaBeach,
  FaWind,
  FaHistory,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { 
  MdNaturePeople, 
  MdBalcony,
  MdHotel,
  MdFamilyRestroom
} from 'react-icons/md';
import { GiPalmTree, GiForestCamp } from 'react-icons/gi';

function Acomodacoes() {
  const [currentAccommodationIndex, setCurrentAccommodationIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const commonAmenities = [
    { icon: <FaWifi />, name: "Wi-Fi" },
    { icon: <FaSnowflake />, name: "Ar Condicionado" },
    { icon: <FaFan />, name: "Ventilador de Teto" },
    { icon: <MdBalcony />, name: "Varanda" },
    { icon: <FaShower />, name: "Amenidades de Banho" },
    { icon: <FaWind />, name: "Secador de Cabelo" },
    { icon: <FaUmbrellaBeach />, name: "Guarda-chuvas" }
  ];

  const accommodations = [
    {
      id: 'bangalo-familia',
      type: 'Bangalô',
      name: 'Bangalô Família',
      icon: <MdFamilyRestroom />,
      description: 'Desfrute da vista do Rio Claro e lagoas nos confortáveis bangalôs, com cama king size, camas de solteiro para até 4 pessoas, lençóis de algodão, amenidades ecológicas e redes na varanda para relaxar após aventuras na selva.',
      features: [
        { icon: <FaBed />, name: '1-4 Hóspedes' },
        { icon: <MdNaturePeople />, name: 'Vista para o Rio Claro' },
        { icon: <FaHeart />, name: 'Ideal para Famílias' }
      ],
      image: 'src/images/acomodacoes/bangalo-familia.png',
      gallery: Array(6).fill('/src/images/kiko.jpg')
    },
    {
      id: 'bangalo-jardim',
      type: 'Bangalô',
      name: 'Bangalô Jardim',
      icon: <GiPalmTree />,
      description: 'Charmoso bangalô para até 2 pessoas, perfeito para casais. Relaxe na varanda privativa com redes, cercado pela tranquilidade da natureza.',
      features: [
        { icon: <FaBed />, name: '1-2 Hóspedes' },
        { icon: <MdNaturePeople />, name: 'Vista para o Jardim' },
        { icon: <FaHeart />, name: 'Ideal para Casais' }
      ],
      image: 'src/images/acomodacoes/bangalo-jardim.jpg',
      gallery: Array(6).fill('/src/images/kiko.jpg')
    },
    {
      id: 'casa-fazenda',
      type: 'Casa da Fazenda',
      name: 'Casa da Fazenda',
      icon: <FaHistory />,
      description: 'A histórica Casa da Fazenda, construída em 1986, oferece apartamentos que combinam o charme do mobiliário de época com conforto moderno.',
      features: [
        { icon: <MdHotel />, name: 'Mobília de Época' },
        { icon: <MdNaturePeople />, name: 'Vista Panorâmica' },
        { icon: <FaHeart />, name: 'Experiência Histórica' }
      ],
      image: 'src/images/acomodacoes/casa-fazenda.png',
      gallery: Array(6).fill('/src/images/kiko.jpg'),
      subitems: [
        {
          id: 'apartamento-5',
          name: 'Apartamento 5',
          description: 'Parte da histórica casa de 1986, este apartamento une o charme do mobiliário de época, selecionado por Raquel e Carmelita Zanchet, ao conforto moderno. Ideal para famílias, proporciona uma experiência única com vista exuberante.',
          features: [
            { icon: <FaBed />, name: '1-3 Hóspedes' },
            { icon: <MdHotel />, name: 'Mobília de Época' },
            { icon: <MdNaturePeople />, name: 'Vista Panorâmica' }
          ],
          gallery: Array(6).fill('/src/images/kiko.jpg')
        },
        {
          id: 'apartamento-6',
          name: 'Apartamento 6',
      description: 'O mais espaçoso dos apartamentos da Casa da Fazenda, ideal para famílias maiores. Mantém a essência histórica do mobiliário de época com o conforto contemporâneo, proporcionando uma estadia memorável com vista para a natureza.',
          features: [
            { icon: <FaBed />, name: '1-4 Hóspedes' },
            { icon: <MdHotel />, name: 'Mobília de Época' },
            { icon: <MdFamilyRestroom />, name: 'Ideal para Famílias' }
          ],
          gallery: Array(6).fill('/src/images/kiko.jpg')
        },
        {
          id: 'apartamento-7',
          name: 'Apartamento 7',
      description: 'Um charmoso apartamento para casais na histórica Casa da Fazenda, combinando a atmosfera romântica do mobiliário vintage com comodidades modernas. Perfeito para quem busca uma experiência única em meio à natureza.',
          features: [
            { icon: <FaBed />, name: '1-2 Hóspedes' },
            { icon: <MdHotel />, name: 'Mobília de Época' },
            { icon: <FaHeart />, name: 'Ideal para Casais' }
          ],
          gallery: Array(6).fill('/src/images/kiko.jpg')
        }
      ]
    },
    {
      id: 'casa-mata',
      type: 'Casa da Mata',
      name: 'Casa da Mata',
      icon: <GiForestCamp />,
      description: 'Retrofit de uma casa próxima à floresta, onde beija-flores podem ser avistados. Esta casa especial oferece uma experiência imersiva entre as árvores, conectando você à biodiversidade local com todo o conforto.',
      features: [
        { icon: <FaBed />, name: '1-2 Hóspedes' },
        { icon: <MdNaturePeople />, name: 'Vista para a Mata' },
        { icon: <FaMountain />, name: 'Experiência Imersiva' }
      ],
      image: 'src/images/acomodacoes/casa-mata.jpg',
      gallery: Array(6).fill('/src/images/kiko.jpg')
    }
  ];

  const handlePrevious = () => {
    setCurrentAccommodationIndex((prev) => 
      prev === 0 ? accommodations.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentAccommodationIndex((prev) => 
      prev === accommodations.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? 5 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 5 ? 0 : prev + 1
    );
  };

  const currentAccommodation = accommodations[currentAccommodationIndex];

  const policies = [
    {
      title: "Horários",
      icon: <FaRegClock />,
      items: [
        "Check-in: 16:00",
        "Check-out: 14:00",
        "",
        "Café da Manhã: 7:30 às 9:30",
        "Almoço: 12:30",
        "Jantar: 19:30"
      ]
    },
    {
      title: "Incluído na Diária",
      icon: <FaCheckCircle />,
      items: [
        "Café da manhã completo",
        "Pensão completa",
        "Wi-Fi nas áreas comuns",
        "Estacionamento"
      ]
    },
    {
      title: "Informações Importantes",
      icon: <FaInfoCircle />,
      items: [
        "Não são permitidos animais de estimação",
        "Proibido fumar nas acomodações",
        "Aceitamos cartões de crédito",
        "Necessária reserva antecipada"
      ]
    }
  ];

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="acomodacoes">
      <section className="page-hero accommodations">
        <div className="hero-content">
          <h1>ACOMODAÇÕES</h1>
          <p>Conforto e História em Harmonia com a Natureza</p>
        </div>
      </section>

      <section className="room-intro">
        <div className="container">
          <div className="intro-content">
            <FaLeaf className="intro-icon" />
          <p className="intro-text">
            Os apartamentos na antiga casa da fazenda, construída em 1986, foram inspirados nas casas de 
            palafitas no Salto das Andorinhas - Rio Roosevelt | Aripuanã-MT pelo proprietário Almor Zanchet. 
            Os móveis fazem parte de um acervo de mobiliário de época, cuidadosamente garimpados por Raquel Zanchet e
            Carmelita Zanchet, trazendo história e personalidade para cada ambiente.
          </p>
          </div>
        </div>
      </section>

      <section className="room-types">
        <div className="container">
          <div className="room-navigation">
            <button onClick={handlePrevious} className="nav-button">
              <FaChevronLeft />
            </button>
            <div className="room-card">
              <div className="room-image-container">
                <div 
                  className="room-image" 
                  style={{backgroundImage: `url(${currentAccommodation.image})`}}
                ></div>
                <div className="room-counter">
                  {currentAccommodationIndex + 1}
                </div>
              </div>
              <div className="room-content">
                <h2>{currentAccommodation.name}</h2>
                <p className="room-description">{currentAccommodation.description}</p>
                
                <div className="room-features">
                  {currentAccommodation.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>

                {currentAccommodation.subitems && (
                  <div className="subitems-section">
                    <h3>Opções de Apartamentos</h3>
                    {currentAccommodation.subitems.map((subitem, index) => (
                      <div key={subitem.id} className="subitem-card">
                        <h4>{subitem.name}</h4>
                        <p>{subitem.description}</p>
                        <div className="subitem-features">
                          {subitem.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="feature-item">
                              <div className="feature-icon">{feature.icon}</div>
                              <span>{feature.name}</span>
                            </div>
                          ))}
                        </div>
                        <div className="subitem-actions">
                          <button 
                            onClick={handleShowDetails}
                            className="btn-details"
                          >
                            Saiba Mais
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="room-amenities-grid">
                  {commonAmenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      {amenity.icon}
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>

                <div className="room-actions">
                  {!currentAccommodation.subitems && (
                  <button 
                      onClick={handleShowDetails}
                    className="btn-details"
                  >
                      Saiba Mais
                  </button>
                  )}
                </div>
              </div>
            </div>
            <button onClick={handleNext} className="nav-button">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {showDetails && (
        <div className="modal-overlay" onClick={handleCloseDetails}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseDetails}>×</button>
            <h2>{currentAccommodation.name}</h2>
            
            <div className="modal-gallery">
              <button onClick={handlePrevImage} className="gallery-nav prev">
                <FaChevronLeft />
              </button>
              <div className="gallery-main-image">
                <img 
                  src={currentAccommodation.gallery[currentImageIndex]} 
                  alt={`${currentAccommodation.name} - Imagem ${currentImageIndex + 1}`} 
                />
                <div className="gallery-counter">
                  {currentImageIndex + 1} / {currentAccommodation.gallery.length}
                </div>
              </div>
              <button onClick={handleNextImage} className="gallery-nav next">
                <FaChevronRight />
              </button>
            </div>

            <div className="modal-description">
              <p>{currentAccommodation.description}</p>
              
              <div className="modal-features">
                <h3>Características</h3>
                <div className="features-grid">
                  {currentAccommodation.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {currentAccommodation.subitems && (
                <div className="modal-subitems">
                  <h3>Opções de Apartamentos</h3>
                  {currentAccommodation.subitems.map((subitem) => (
                    <div key={subitem.id} className="modal-subitem-card">
                      <h4>{subitem.name}</h4>
                      <div className="subitem-gallery">
                        <button onClick={handlePrevImage} className="gallery-nav prev">
                          <FaChevronLeft />
                        </button>
                        <div className="gallery-main-image">
                          <img 
                            src={subitem.gallery[currentImageIndex]} 
                            alt={`${subitem.name} - Imagem ${currentImageIndex + 1}`} 
                          />
                          <div className="gallery-counter">
                            {currentImageIndex + 1} / {subitem.gallery.length}
                          </div>
                        </div>
                        <button onClick={handleNextImage} className="gallery-nav next">
                          <FaChevronRight />
                        </button>
                      </div>
                      <p>{subitem.description}</p>
                      <div className="subitem-features">
                        {subitem.features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <div className="feature-icon">{feature.icon}</div>
                            <span>{feature.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="modal-amenities">
                <h3>Comodidades</h3>
                <div className="amenities-grid">
                  {commonAmenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      {amenity.icon}
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <a 
                  href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-book"
                >
                  Reservar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="policies-section">
        <div className="container">
          <h2 className="section-title">Informações Úteis</h2>
          <div className="policies-grid">
            {policies.map((policy, index) => (
              <div key={index} className="policy-card">
                <div className="policy-header">
                  {policy.icon}
                  <h3>{policy.title}</h3>
                </div>
                <ul>
                  {policy.items.map((item, itemIndex) => (
                    item === "separator" ? (
                      <li key={itemIndex} className="separator"></li>
                    ) : (
                      <li key={itemIndex}>{item}</li>
                    )
                  ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Pronto para uma Experiência em meio à Natureza?</h2>
          <p>Reserve sua estadia e prepare-se para momentos inesquecíveis no coração da Amazônia</p>
          <div className="cta-buttons">
            <a 
              href="https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Reserve Agora
            </a>
            <Link to="/como-chegar" className="btn-secondary">Como Chegar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Acomodacoes; 