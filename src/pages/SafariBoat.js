import React from 'react';
import { getFolderImage, getImagePhotographer } from '../config/cloudinaryConfig';
import PhotoCredit from '../components/PhotoCredit';

const SafariBoat = () => {
  const sections = [
    {
      title: 'Pirarucu',
      description: 'O maior peixe de escamas de água doce do mundo, podendo atingir até 3 metros.',
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085685/pirarucu_nwglqt.png',
      photographer: 'Kiko Silva'
    },
    {
      title: 'Pintado',
      description: 'Um dos peixes mais apreciados da região, conhecido por sua carne saborosa.',
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085676/pintado_tdk4hx.jpg',
      photographer: 'Kiko Silva'
    },
    {
      title: 'Martim Pescador',
      description: 'Ave pescadora que encanta com suas cores vibrantes e técnica de pesca precisa.',
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450236/martin_pescador_miudo_-_JHONATA_ARAUJO_-_6_gwslgv.jpg',
      photographer: 'Jhonata Araujo'
    },
    {
      title: 'Biguá',
      description: 'Ave aquática que mergulha em busca de peixes, comum nas margens dos rios.',
      image: getFolderImage('safari-boat', 'bigua'),
      photographer: getImagePhotographer('safari-boat', 'bigua')
    },
    {
      title: 'Sucuri',
      description: 'A maior cobra do mundo, que pode ser avistada nas margens dos rios.',
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1737918775/sucuri_a6v6wa.jpg',
      photographer: 'Kiko Silva'
    },
    {
      title: 'Rio Claro',
      description: 'Um dos mais belos rios da região, com suas águas cristalinas e rica biodiversidade.',
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739858885/MANOEL_RUEDI_26_ijhdjx.jpg',
      photographer: 'Manoel Ruedi'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085781/safari-boat_rvnwku.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Safari Boat
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Explore a vida selvagem dos rios amazônicos
          </p>
        </div>
        <PhotoCredit photographer="Kiko Silva" />
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed text-justify mb-8">
            O Safari Boat é uma experiência única que permite explorar a rica biodiversidade dos rios amazônicos. 
            Durante o passeio, você terá a oportunidade de observar diversas espécies de peixes, aves e répteis em seu habitat natural.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed text-justify">
            Nossos guias especializados compartilham seu conhecimento sobre a fauna local, proporcionando uma experiência educativa e emocionante.
          </p>
        </div>
      </section>

      {/* Species Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16">Espécies que você pode encontrar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <PhotoCredit photographer={section.photographer} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">O que levar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Protetor solar
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Repelente
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Chapéu ou boné
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Óculos de sol
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Câmera fotográfica
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Garrafa de água
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SafariBoat; 