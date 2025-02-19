import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import PhotoCredit from '../components/PhotoCredit';
import { siteConfig } from '../config/siteConfig';
import { 
  FaWifi, 
  FaShower, 
  FaFan, 
  FaBed,
  FaMountain,
  FaHeart,
  FaSnowflake,
  FaUmbrellaBeach,
  FaWind,
  FaHistory,
  FaRegClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from 'react-icons/fa';
import { 
  MdNaturePeople, 
  MdBalcony,
  MdHotel,
  MdFamilyRestroom
} from 'react-icons/md';
import { GiPalmTree, GiForestCamp } from 'react-icons/gi';

function Acomodacoes() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState({});

  const commonAmenities = [
    { icon: <FaBed />, name: "Cama King Size" },
    { icon: <FaWifi />, name: "Wi-Fi" },
    { icon: <FaSnowflake />, name: "Ar Condicionado" },
    { icon: <FaFan />, name: "Ventilador de Teto" },
    { icon: <MdBalcony />, name: "Varanda" },
    { icon: <FaShower />, name: "Amenidades de Banho" },
    { icon: <FaWind />, name: "Secador de Cabelo" },
    { icon: <FaUmbrellaBeach />, name: "Guarda-chuvas" }
  ];

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
      title: "Incluído na Hospedagem",
      icon: <FaCheckCircle />,
      items: [
        "Café da manhã completo",
        "Almoço e jantar completo",
        "Wi-Fi nas áreas comuns",
        "Acesso à Piscina Natural"
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
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739834451/Jardim_da_Amazônia-1085_rba1ha.jpg',
      gallery: [
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739921284/Jardim_da_Amazônia-675_ppk2tk.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739921270/Jardim_da_Amazônia-665_xecad1.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739921362/Jardim_da_Amazônia-756_qpla99.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739921340/Jardim_da_Amazônia-751_svnptn.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739921311/Jardim_da_Amazônia-726_frmxvo.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739834451/Jardim_da_Amazônia-1144_oqujz8.jpg'
        }
      ]
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
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739833672/Jardim_da_Amazônia-131_trfay9.jpg',
      gallery: [
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739919654/Jardim_da_Amazônia-16_soj6ut.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739919696/Jardim_da_Amazônia-88_jmrava.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739919787/Jardim_da_Amazônia-465_wwnsh7.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739833651/Jardim_da_Amazônia-70_catuwk.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739833734/Jardim_da_Amazônia-323_vs32ru.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1736119362/jardim-2_ukfgpv.jpg'
        }
      ]
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
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1707_o4s4u5.jpg',
      gallery: [
        // Apartamento 5
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1707_o4s4u5.jpg',
          apt: '5',
          lowProfile: true
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1677_cygtxz.jpg',
          apt: '5',
          lowProfile: true
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1720_b3lxe8.jpg',
          apt: '5',
          lowProfile: true
        },
        // Apartamento 6
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1217_x4vuyi.jpg',
          apt: '6',
          lowProfile: true
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1288_lzebaa.jpg',
          apt: '6',
          lowProfile: true
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1185_kyywqy.jpg',
          apt: '6',
          lowProfile: true
        },
        // Apartamento 7
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1748_gzhe8v.jpg',
          apt: '7',
          lowProfile: true
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-1830_nkccqw.jpg',
          apt: '7',
          lowProfile: true
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/7fazenda-3_gnrzph.jpg',
          apt: '7',
          lowProfile: true
        }
      ],
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
          gallery: [
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg'
          ]
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
          gallery: [
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg'
          ]
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
          gallery: [
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg',
            'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858240/casa_fazenda_s1n8vm.jpg'
          ]
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
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3676_hn0sbn.jpg',
      gallery: [
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3635_pxeunv.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3626_lfykt4.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3652_dfxemv.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3690_ejddqg.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3731_qtmjco.jpg'
        },
        {
          src: 'https://res.cloudinary.com/dxlhv2mji/image/upload/q_auto:best,fl_progressive/v1739834451/Jardim_da_Amazônia-3751_wmnb8x.jpg'
        }
      ]
    }
  ];

  // Preload images when a room is selected
  useEffect(() => {
    if (selectedRoom) {
      setIsImageLoading(true);
      const preloadImages = async () => {
        const imagePromises = selectedRoom.gallery.map((image, index) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            const optimizedSrc = image.src.replace('/upload/', '/upload/c_scale,w_1600,f_auto,q_auto/');
            img.src = optimizedSrc;
            img.onload = () => {
              setPreloadedImages(prev => ({
                ...prev,
                [index]: optimizedSrc
              }));
              resolve();
            };
            img.onerror = reject;
          });
        });

        try {
          await Promise.all(imagePromises);
          setIsImageLoading(false);
        } catch (error) {
          console.error('Error preloading images:', error);
          setIsImageLoading(false);
        }
      };

      preloadImages();
    }
  }, [selectedRoom]);

  // Preload next and previous images when current index changes
  useEffect(() => {
    if (selectedRoom) {
      const preloadAdjacentImages = () => {
        const nextIndex = (currentImageIndex + 1) % selectedRoom.gallery.length;
        const prevIndex = currentImageIndex === 0 ? selectedRoom.gallery.length - 1 : currentImageIndex - 1;
        
        [nextIndex, prevIndex].forEach(index => {
          const img = new Image();
          const src = selectedRoom.gallery[index].src;
          const optimizedSrc = src.replace('/upload/', '/upload/c_scale,w_1600,f_auto,q_auto/');
          img.src = optimizedSrc;
          img.onload = () => {
            setPreloadedImages(prev => ({
              ...prev,
              [index]: optimizedSrc
            }));
          };
        });
      };

      preloadAdjacentImages();
    }
  }, [currentImageIndex, selectedRoom]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedRoom.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedRoom.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleShowDetails = (accommodation) => {
    setSelectedRoom(accommodation);
    setCurrentImageIndex(0);
  };

  const handleCloseDetails = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const heroStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dxlhv2mji/image/upload/q_100,f_auto,c_limit,w_2000/v1739921327/Jardim_da_Amazônia-744_solrly.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={heroStyle}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-[800px] px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider drop-shadow-lg">
            Acomodações
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Conforto e natureza em perfeita harmonia
          </p>
        </div>
      </div>

      {/* Room Introduction */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl text-primary"><MdHotel /></span>
            </div>
            <p className="text-xl leading-relaxed text-text font-light text-justify">
              Nossos bangalôs e apartamentos foram cuidadosamente projetados para proporcionar o máximo 
              conforto durante sua estadia, mantendo uma conexão harmoniosa com a natureza. Cada 
              acomodação oferece uma experiência singular para a sua experiência.
            </p>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {accommodations.map((accommodation) => (
            <div key={accommodation.id} className="bg-white rounded-xl overflow-hidden shadow-lg mb-8
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Room Image */}
                <div className="md:w-1/2 relative h-[400px]">
                  <img 
                    src={accommodation.image.replace('/upload/', '/upload/c_scale,w_800,f_auto,q_auto/')} 
                    alt={accommodation.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Room Content */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl text-primary mb-3">{accommodation.name}</h2>
                    <p className="text-base text-text leading-relaxed mb-6">
                      {accommodation.description}
                    </p>

                    {/* Features */}
                    <div className="flex justify-start items-center gap-6 mb-6">
                      {accommodation.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-text">
                          <span className="text-xl text-primary">{feature.icon}</span>
                          <span className="text-sm font-medium">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleShowDetails(accommodation)}
                    className="btn-primary w-full mt-6"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Philosophy Quote */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <blockquote className="relative">
            <div className="relative z-10">
              <span className="text-5xl text-primary-dark/20 absolute -top-4 -left-6">"</span>
              <p className="text-xl text-gray-700 leading-relaxed text-justify pl-8 pr-4">
                Aconchegantes instalações do Lodge que foram inspiradas nas <strong>casas de palafitas</strong> e de madeira da Amazônia dos anos 80, celebrando a <strong>harmonia entre o homem e a natureza</strong>. A Decoração adota <strong>tons terrosos e neutros</strong>, com uma paleta que evoca o ambiente natural: marrons, beges e verdes musgo, criam um estilo <strong>rústico chic</strong>, onde a simplicidade, traz uma atmosfera acolhedora perfeitamente integrada à paisagem amazônica.
              </p>
              <span className="text-5xl text-primary-dark/20 absolute -bottom-8 -right-4">"</span>
            </div>
            <footer className="mt-8 text-right">
              <cite className="text-gray-600 font-medium not-italic">— Alê Ribeiro</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Informações Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-background-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl text-primary">{policy.icon}</span>
                  <h3 className="text-xl font-semibold text-primary">{policy.title}</h3>
                </div>
                <ul className="space-y-3">
                  {policy.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`text-text ${!item && 'h-4'} ${item === '' && 'border-b border-gray-200 my-4'}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Viver essa Experiência?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Reserve agora sua estadia e prepare-se para momentos inesquecíveis em meio à natureza
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href={siteConfig.buttonLinks.bookNow}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Reserve Agora
            </a>
            <Link
              to={siteConfig.buttonLinks.contato}
              className="btn-secondary"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center
            transition-opacity duration-300"
          onClick={handleCloseDetails}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto
              transform transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Gallery */}
            <div className="relative h-[50vh] overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                {isImageLoading && (
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                )}
              </div>
              <img
                src={preloadedImages[currentImageIndex] || selectedRoom.gallery[currentImageIndex].src.replace('/upload/', '/upload/c_scale,w_1600,f_auto,q_auto/')}
                alt={selectedRoom.name}
                className={`w-full h-full object-cover cursor-pointer transition-all duration-500
                  ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullScreen(true);
                }}
                onLoad={() => setIsImageLoading(false)}
              />
              
              {/* Apartment Label */}
              {selectedRoom.gallery[currentImageIndex].apt && (
                <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-lg font-medium">
                  Apartment {selectedRoom.gallery[currentImageIndex].apt}
                </div>
              )}

              {/* Thumbnail Navigation with Loading States */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex justify-center gap-2 overflow-x-auto py-2">
                  {selectedRoom.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                        setIsImageLoading(true);
                      }}
                      className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all
                        ${currentImageIndex === index ? 'border-white scale-110' : 'border-transparent opacity-70'}
                        ${!preloadedImages[index] ? 'bg-gray-200 animate-pulse' : ''}`}
                    >
                      <img
                        src={image.src.replace('/upload/', '/upload/c_scale,w_100,f_auto,q_auto/')}
                        alt={`Thumbnail ${index + 1} - Apartamento ${image.apt}`}
                        className={`w-full h-full object-cover transition-opacity duration-300
                          ${preloadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                  bg-black/30 text-white flex items-center justify-center
                  hover:bg-black/50 transition-colors duration-300"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                  bg-black/30 text-white flex items-center justify-center
                  hover:bg-black/50 transition-colors duration-300"
              >
                <FaChevronRight />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/30 text-white
                px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedRoom.gallery.length}
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseDetails}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white
                  flex items-center justify-center hover:bg-black/50 transition-colors duration-300"
              >
                <FaTimes />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl text-primary font-bold mb-2">{selectedRoom.name}</h2>
              <p className="text-base text-text leading-relaxed mb-4">{selectedRoom.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {selectedRoom.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xl text-primary">{feature.icon}</span>
                    <span className="text-sm text-text">{feature.name}</span>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h3 className="text-lg text-primary font-semibold mb-3">Comodidades</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {commonAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-lg text-primary">{amenity.icon}</span>
                    <span className="text-sm text-text">{amenity.name}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={siteConfig.buttonLinks.bookNow}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Reserve Agora
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal with Loading States */}
      {isFullScreen && selectedRoom && (
        <div 
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {isImageLoading && (
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
            <img
              key={currentImageIndex}
              src={preloadedImages[currentImageIndex] || selectedRoom.gallery[currentImageIndex].src.replace('/upload/', '/upload/c_scale,w_2000,f_auto,q_auto/')}
              alt={selectedRoom.name}
              className={`max-h-screen max-w-full object-contain transition-all duration-500
                ${isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              onLoad={() => setIsImageLoading(false)}
            />
            
            {/* Apartment Label in Fullscreen */}
            {selectedRoom.gallery[currentImageIndex].apt && (
              <div className="absolute top-20 left-4 bg-black/70 text-white px-6 py-3 rounded-lg text-xl font-medium">
                Apartment {selectedRoom.gallery[currentImageIndex].apt}
              </div>
            )}
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-center gap-2 overflow-x-auto py-2 max-w-4xl mx-auto">
              {selectedRoom.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all
                    ${currentImageIndex === index ? 'border-white scale-110' : 'border-transparent opacity-70'}`}
                >
                  <img
                    src={image.src.replace('/upload/', '/upload/c_scale,w_100,f_auto,q_auto/')}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
              bg-black/30 text-white flex items-center justify-center
              hover:bg-black/50 transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
              bg-black/30 text-white flex items-center justify-center
              hover:bg-black/50 transition-colors duration-300"
          >
            <FaChevronRight />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 text-white
            px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} / {selectedRoom.gallery.length}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsFullScreen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 text-white
              flex items-center justify-center hover:bg-black/50 transition-colors duration-300"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
}

export default Acomodacoes; 