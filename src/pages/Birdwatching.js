import React, { useState, useEffect } from 'react';
import { getFolderImage, getImagePhotographer } from '../config/cloudinaryConfig';
import { siteConfig } from '../config/siteConfig';
import PhotoCredit from '../components/PhotoCredit';

const Birdwatching = () => {
  const heroImageUrl = getFolderImage('birdwatching', 'hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const galleryImages = [
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450244/beija_flor_tesoura_verde_JHONATA_ARAUJO_2_xk7oou.jpg",
      title: "Beija-flor Tesoura Verde",
      photographer: "Jhonata Araujo"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450245/bico_de_prata_-_pipira_vermelha_HAROLDO_PALO_JR_2_aeio1z.jpg",
      title: "Pipira Vermelha",
      photographer: "Haroldo Palo Jr."
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450280/choca_dagua_-_JHONATA_ARAUJO_7_q86nhg.jpg",
      title: "Choca d'Água",
      photographer: "Jhonata Araujo"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450249/JHONATA_ARAUJO_-_PICA-PAU_ANAO_DOURADO_3_ecrgqf.jpg",
      title: "Pica-pau Anão Dourado",
      photographer: "Jhonata Araujo"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450252/JHONATA_ARAUJO_-_UDU_DE_COROA_AZUL_4_smatkv.jpg",
      title: "Udu de Coroa Azul",
      photographer: "Jhonata Araujo"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450671/MANOEL_RUEDI_82_xor41e.jpg",
      title: "Aves da Amazônia",
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
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450277/MARACANA_DO_BURITI-_JHONATA_ARAUJO_10_ur2fgl.jpg",
      title: "Maracanã do Buriti",
      photographer: "Jhonata Araujo"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450236/martin_pescador_miudo_-_JHONATA_ARAUJO_-_6_gwslgv.jpg",
      title: "Martim Pescador Miúdo",
      photographer: "Jhonata Araujo"
    }
  ];

  useEffect(() => {
    if (!isFullScreen) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isFullScreen, galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  console.log('Hero image URL:', heroImageUrl); // For debugging

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085772/birds_wtstwh.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Birdwatching
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow text-justify">
            Top Hotspot para Observação de Aves no Brasil
          </p>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
            O Jardim da Amazônia é uma referência mundial na proteção de aves, pois é considerada uma IBA (Importante Bird Area), uma importante área para a Biodiversidade segundo o Birdlife International, E-bird, The Corrnell Lab e Wikiaves.
          </p>
        </div>
      </div>

      {/* Hotspot Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12 relative">
              Reconhecimento Internacional
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <span className="block text-4xl font-bold text-primary mb-2">Top 3</span>
                <span className="text-gray-600">Hotspot Brasil</span>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <span className="block text-4xl font-bold text-primary mb-2">Top 2</span>
                <span className="text-gray-600">Mato Grosso</span>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <span className="block text-4xl font-bold text-primary mb-2">587</span>
                <span className="text-gray-600">Espécies Catalogadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Species Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Aves Registradas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Criticamente em Perigo (CR) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450243/tie_bicudo_jh_hfnk4c.jpg"
                    alt="Tiê-bicudo"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                    CR
                  </span>
                  <PhotoCredit photographer={getImagePhotographer('birdwatching', 'tie-bicudo')} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tiê-bicudo</h3>
                  <p className="text-sm text-primary italic mb-2">Conothraupis mesoleuca</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    Ave endêmica do Brasil, descrita em 1939 durante a expedição de Claude Levi Strauss. 
                    O Rio Claro representa a quarta área conhecida de ocorrência desta espécie rara.
                  </p>
                </div>
              </div>
            </div>

            {/* Quase Ameaçada (NT) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085702/curica_enlrcd.jpg"
                    alt="Curica-de-bochecha-laranja"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-600 rounded">
                    NT
                  </span>
                  <PhotoCredit photographer={getImagePhotographer('birdwatching', 'curica')} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Curica-de-bochecha-laranja</h3>
                  <p className="text-sm text-primary italic mb-2">Pyrilia barrabandi</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    Papagaio com cabeça preta, mancha branca nos olhos e bochechas laranjas. 
                    Espetaculares manchas coloridas nas asas contrastam com o corpo verde.
                  </p>
                </div>
              </div>
            </div>

            {/* Mutum-cavalo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1738447044/mutum_iwmptx.png"
                    alt="Mutum-cavalo"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-600 rounded">
                    NT
                  </span>
                  <PhotoCredit photographer={getImagePhotographer('birdwatching', 'mutum')} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mutum-cavalo</h3>
                  <p className="text-sm text-primary italic mb-2">Pauxi tuberosa</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    Ave majestosa da família dos cracídeos, com capacete azul-turquesa. Habita florestas densas da Amazônia e é um importante indicador da qualidade ambiental.
                  </p>
                </div>
              </div>
            </div>

            {/* Em Perigo (EN) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1738446086/umbrella_bird_goycom.jpg"
                    alt="Pássaro-guarda-chuva"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-orange-600 rounded">
                    EN
                  </span>
                  <PhotoCredit photographer={getImagePhotographer('birdwatching', 'umbrella')} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pássaro-guarda-chuva</h3>
                  <p className="text-sm text-primary italic mb-2">Cephalopterus ornatus</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    Ave impressionante com crista em forma de guarda-chuva e bolsa gular. O macho exibe sua bolsa inflada, emitindo sons graves e ressonantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodiversity Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12 relative">
              Biodiversidade
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed text-justify mb-12">
              Em um cenário singular onde o Cerrado encontra a Amazônia, nosso lodge oferece a rara oportunidade de 
              vivenciar a interação de duas das mais ricas biodiversidades do planeta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Espécies Amazônicas</h3>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Capitão-de-cinta</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">VU</span>
                    </div>
                    <span className="text-sm text-primary italic">Capito dayi</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Coroa-de-fogo</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">LC</span>
                    </div>
                    <span className="text-sm text-primary italic">Heterocercus linteatus</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Cambaxirra-cinzenta</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">NT</span>
                    </div>
                    <span className="text-sm text-primary italic">Odontorchilus cinereus</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Tucano-de-papo-branco</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">VU</span>
                    </div>
                    <span className="text-sm text-primary italic">Ramphastos tucanus</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aves de Destaques</h3>
                <ul className="space-y-6">
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Uiraçu</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">NT</span>
                    </div>
                    <span className="text-sm text-primary italic">Morphnus guianensis</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Urubu-rei</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">LC</span>
                    </div>
                    <span className="text-sm text-primary italic">Sarcoramphus papa</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Limpa-folha-do-buriti</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">LC</span>
                    </div>
                    <span className="text-sm text-primary italic">Berlepschia rikeri</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-medium text-gray-800">Topetinho-do-brasil-central</span>
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">VU</span>
                    </div>
                    <span className="text-sm text-primary italic">Lophornis gouldii</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>CR - Criticamente em Perigo</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              <span>EN - Em Perigo</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>VU - Vulnerável</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>NT - Quase Ameaçada</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>LC - Pouco Preocupante</span>
            </div>
          </div>
        </div>
      </div>

      {/* Observation Spots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12 relative">
            Pontos de Observação
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E8F0EA] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Matas Ciliares do Rio Claro</h3>
              <p className="text-gray-600 text-justify">
                Habitat do raro Tiê-bicudo e diversas espécies amazônicas. A vegetação aberta ao 
                longo dos lagos oferece condições essenciais para observação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E8F0EA] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trilha do Jatobá</h3>
              <p className="text-gray-600 text-justify">
                Local privilegiado para observação do Capitão-de-cinta e outras espécies florestais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#E8F0EA] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lagoa do Tiê-bicudo</h3>
              <p className="text-gray-600 text-justify">
                Tour especial de barco para observação do Tiê-bicudo e outras espécies aquáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Tours Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16 relative">
              Tour Especial de Birdwatching
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Horário</h3>
                  <p className="text-lg text-gray-600">Saída às 5:30h da manhã</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Roteiro</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Safari de barco até a "Lagoa do Tiê-bicudo"
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Observação de aves no Rio Claro e Lagos
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Parada na "Trilha da Cabana" para espécies florestais
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Possibilidade de observar o Macaco-aranha-de-cara-preta
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Retorno para almoço no lodge
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-12 relative">
              Referências Internacionais
              <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 text-justify">
              Fique por dentro das novidades de birdwatching do Jardim da Amazônia dentro dos principais sites de birdwatching:
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href={siteConfig.buttonLinks.ebirdHotspot} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                E-Bird
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a 
                href={siteConfig.buttonLinks.birdlifeDatazone} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                BirdLife International
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a 
                href={siteConfig.buttonLinks.wikiAves} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                WikiAves
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Galeria</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden rounded-2xl cursor-pointer" onClick={() => setIsFullScreen(true)}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-semibold">{image.title}</h3>
                  </div>
                  <PhotoCredit photographer={image.photographer} isGallery={true} />
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="relative w-full h-full">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <h3 className="text-3xl font-semibold">{image.title}</h3>
                </div>
                <PhotoCredit photographer={image.photographer} isGallery={true} />
              </div>
            ))}

            {/* Fullscreen Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-6">Reserve Sua Experiência</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto text-justify">
            Venha descobrir por que somos um dos principais destinos de birdwatching do Brasil
          </p>
          <button 
            onClick={() => window.open('https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4', '_blank')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Fazer Reserva
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Birdwatching; 