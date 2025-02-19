import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PhotoCredit from '../components/PhotoCredit';

const Galeria = () => {
  const sections = useMemo(() => ({
    acomodacoes: {
      title: "Acomodações",
      images: [
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1736121165/mata-6_jeycpm.jpg",
          title: "Casa da Mata - Exterior",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842228/Jardim_da_Amazônia-3751_wmnb8x.jpg",
          title: "Casa da Mata - Interior",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842195/Jardim_da_Amazônia-3740_alyqg2.jpg",
          title: "Casa da Mata - Detalhes",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842147/Jardim_da_Amazônia-3731_qtmjco.jpg",
          title: "Casa da Mata - Vista",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739922195/Jardim_da_Amazônia-3707_rt8aww.jpg",
          title: "Casa da Mata - Ambiente",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1736119365/jardim-hero_wi8rlu.jpg",
          title: "Bangalô Jardim - Vista Principal",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739919813/Jardim_da_Amazônia-587_m1zqc2.jpg",
          title: "Bangalô Jardim - Exterior",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739919800/Jardim_da_Amazônia-476_hmn9lp.jpg",
          title: "Bangalô Jardim - Detalhes",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1736118852/familia-hero_tjgrgj.jpg",
          title: "Bangalô Família - Vista Principal",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739921668/Jardim_da_Amazônia-1106_ws1fz1.jpg",
          title: "Bangalô Família - Exterior",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739921551/Jardim_da_Amazônia-1085_rba1ha.jpg",
          title: "Bangalô Família - Ambiente",
          photographer: "Marlon Erthal"
        }
      ]
    },
    areasExternas: {
      title: "Áreas Externas",
      images: [
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842552/Jardim_da_Amazônia-3930_ehdgyr.jpg",
          title: "Espaço de Convivência - Principal",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842551/Jardim_da_Amazônia-3902_nimzuq.jpg",
          title: "Espaço de Convivência - Área de Descanso",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739835876/Jardim_da_Amazônia-3031_xq0nne.jpg",
          title: "Espaço de Convivência - Lounge",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842036/Jardim_da_Amazônia-3602_sisbpp.jpg",
          title: "Piscina Natural - Vista Principal",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842011/Jardim_da_Amazônia-3588_surdeb.jpg",
          title: "Piscina Natural - Área de Banho",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841939/Jardim_da_Amazônia-3538_kppv8a.jpg",
          title: "Piscina Natural - Deck",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841682/Jardim_da_Amazônia-3495_em7syh.jpg",
          title: "Piscina Natural - Entardecer",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842392/Jardim_da_Amazônia-3829_hauhip.jpg",
          title: "Jardins e Lagoas - Vista Aérea",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842391/Jardim_da_Amazônia-3833_wmmlqx.jpg",
          title: "Jardins e Lagoas - Paisagem",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841326/Jardim_da_Amazônia-3216_yrohd0.jpg",
          title: "Trilhas - Caminho Principal",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841322/Jardim_da_Amazônia-3188_lceiu2.jpg",
          title: "Trilhas - Mata",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739841321/Jardim_da_Amazônia-3166_npmlu7.jpg",
          title: "Trilhas - Floresta",
          photographer: "Marlon Erthal"
        }
      ]
    },
    fauna: {
      title: "Fauna",
      images: [
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450244/beija_flor_tesoura_verde_JHONATA_ARAUJO_2_xk7oou.jpg",
          title: "Beija-flor Tesoura Verde",
          photographer: "Jhonata Araujo"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450243/tie_bicudo_jh_hfnk4c.jpg",
          title: "Tiê-bicudo",
          photographer: "Jhonata Araujo"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450280/choca_dagua_-_JHONATA_ARAUJO_7_q86nhg.jpg",
          title: "Choca d'Água",
          photographer: "Jhonata Araujo"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450277/MARACANA_DO_BURITI-_JHONATA_ARAUJO_10_ur2fgl.jpg",
          title: "Maracanã do Buriti",
          photographer: "Jhonata Araujo"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450671/MANOEL_RUEDI_82_xor41e.jpg",
          title: "Aves da Amazônia",
          photographer: "Manoel Ruedi"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450675/MANOEL_RUEDI_117_whajew.jpg",
          title: "Aves em Voo",
          photographer: "Manoel Ruedi"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450237/Sai_andorinha_VINCENT_KURT_5_nz36qm.jpg",
          title: "Saí Andorinha",
          photographer: "Vincent Kurt Lo"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450239/saira_de_cabeça_azul_-Vincent_Kurt_lo_1_z5hik4.jpg",
          title: "Saíra de Cabeça Azul",
          photographer: "Vincent Kurt Lo"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739857967/parauacu_tsk80b.jpg",
          title: "Parauacu",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739857952/zogue-zogue_1_o0mrje.jpg",
          title: "Zogue-zogue",
          photographer: "Marlon Erthal"
        },
        {
          url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739857960/macaco-cara-preta_ilsz9z.jpg",
          title: "Macaco Cara Preta",
          photographer: "Marlon Erthal"
        }
      ]
    }
  }), []);

  const [currentIndices, setCurrentIndices] = useState({
    acomodacoes: 0,
    areasExternas: 0,
    fauna: 0
  });

  const handlePrevImage = useCallback((section) => {
    setCurrentIndices(prev => ({
      ...prev,
      [section]: prev[section] === 0 ? sections[section].images.length - 1 : prev[section] - 1
    }));
  }, [sections]);

  const handleNextImage = useCallback((section) => {
    setCurrentIndices(prev => ({
      ...prev,
      [section]: prev[section] === sections[section].images.length - 1 ? 0 : prev[section] + 1
    }));
  }, [sections]);

  useEffect(() => {
    const intervals = {};
    
    Object.keys(sections).forEach(section => {
      intervals[section] = setInterval(() => {
        handleNextImage(section);
      }, 5000);
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [sections, handleNextImage]);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842391/Jardim_da_Amazônia-3833_wmmlqx.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Galeria de Fotos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore nossa coleção de imagens do Jardim da Amazônia
          </p>
        </div>
        <PhotoCredit photographer="Marlon Erthal" />
      </div>

      {/* Gallery Sections */}
      <div className="container mx-auto px-4 py-16">
        {Object.entries(sections).map(([sectionKey, section]) => (
          <div key={sectionKey} className="mb-24">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              {section.title}
              </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
                <div className="relative h-full">
                  <img
                    src={section.images[currentIndices[sectionKey]].url}
                    alt={section.images[currentIndices[sectionKey]].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {section.images[currentIndices[sectionKey]].title}
                    </h3>
                    <PhotoCredit photographer={section.images[currentIndices[sectionKey]].photographer} />
                  </div>
                </div>
              </div>

          <button
                onClick={() => handlePrevImage(sectionKey)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
                <IoIosArrowBack size={24} />
          </button>

          <button
                onClick={() => handleNextImage(sectionKey)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
                <IoIosArrowForward size={24} />
          </button>

              <div className="flex justify-center mt-4 gap-2">
                {section.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndices[sectionKey] ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Galeria; 