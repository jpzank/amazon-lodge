import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PhotoCredit from '../components/PhotoCredit';
import { getImagePhotographer } from '../config/cloudinaryConfig';

const Birdwatching = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const galleryImages = [
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450243/tie_bicudo_jh_hfnk4c.jpg',
      photographer: getImagePhotographer('birdwatching', 'tie-bicudo'),
      title: t('birdwatching.registeredBirds.species.tieBicudo.name'),
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085702/curica_enlrcd.jpg',
      photographer: getImagePhotographer('birdwatching', 'curica'),
      title: t('birdwatching.registeredBirds.species.curica.name'),
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738446086/umbrella_bird_goycom.jpg',
      photographer: getImagePhotographer('birdwatching', 'passaro-guarda-chuva'),
      title: t('birdwatching.registeredBirds.species.umbrellaBird.name'),
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/video/upload/v1739860438/video_tie_bicudo_jpqggz.mp4',
      photographer: getImagePhotographer('birdwatching', 'video-tie-bicudo'),
      title: t('birdwatching.registeredBirds.species.tieBicudo.name'),
      type: 'video'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450244/beija_flor_tesoura_verde_JHONATA_ARAUJO_2_xk7oou.jpg',
      photographer: 'Jhonata Araujo',
      title: t('birdwatching.gallery.images.hummingbird'),
      type: 'image',
      objectFit: 'contain'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450280/choca_dagua_-_JHONATA_ARAUJO_7_q86nhg.jpg',
      photographer: 'Jhonata Araujo',
      title: t('birdwatching.gallery.images.waterThrush'),
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450277/MARACANA_DO_BURITI-_JHONATA_ARAUJO_10_ur2fgl.jpg',
      photographer: 'Jhonata Araujo',
      title: t('birdwatching.gallery.images.buritiMacaw'),
      type: 'image'
    },
    {
      url: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1738450239/saira_de_cabeça_azul_-Vincent_Kurt_lo_1_z5hik4.jpg',
      photographer: 'Vincent Kurt Lo',
      title: t('birdwatching.gallery.images.blueTanager'),
      type: 'image'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${galleryImages[0].url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('birdwatching.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('birdwatching.hero.subtitle')}
          </p>
        </div>
        <PhotoCredit photographer={galleryImages[0].photographer} />
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed text-justify">
            {t('birdwatching.intro.description')}
          </p>
        </div>
      </section>

      {/* Recognition Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            {t('birdwatching.recognition.title')}
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-4">{t('birdwatching.recognition.stats.brazil.number')}</h3>
              <p className="text-gray-600">{t('birdwatching.recognition.stats.brazil.label')}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-4">{t('birdwatching.recognition.stats.matoGrosso.number')}</h3>
              <p className="text-gray-600">{t('birdwatching.recognition.stats.matoGrosso.label')}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-primary mb-4">{t('birdwatching.recognition.stats.species.number')}</h3>
              <p className="text-gray-600">{t('birdwatching.recognition.stats.species.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registered Birds Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            {t('birdwatching.registeredBirds.title')}
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Criticamente em Perigo (CR) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src={galleryImages[0].url}
                    alt={t('birdwatching.registeredBirds.species.tieBicudo.name')}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                    {t('birdwatching.conservationStatus.cr').split(' - ')[0]}
                  </span>
                  <PhotoCredit photographer={galleryImages[0].photographer} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('birdwatching.registeredBirds.species.tieBicudo.name')}</h3>
                  <p className="text-sm text-primary italic mb-2">{t('birdwatching.registeredBirds.species.tieBicudo.scientificName')}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    {t('birdwatching.registeredBirds.species.tieBicudo.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quase Ameaçada (NT) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src={galleryImages[1].url}
                    alt={t('birdwatching.registeredBirds.species.curica.name')}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-600 rounded">
                    {t('birdwatching.conservationStatus.nt').split(' - ')[0]}
                  </span>
                  <PhotoCredit photographer={galleryImages[1].photographer} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('birdwatching.registeredBirds.species.curica.name')}</h3>
                  <p className="text-sm text-primary italic mb-2">{t('birdwatching.registeredBirds.species.curica.scientificName')}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    {t('birdwatching.registeredBirds.species.curica.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Pouco Preocupante (LC) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="flex flex-col md:flex-row h-48">
                <div className="md:w-1/3 relative h-full">
                  <img 
                    src={galleryImages[2].url}
                    alt={t('birdwatching.registeredBirds.species.umbrellaBird.name')}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-green-600 rounded">
                    {t('birdwatching.conservationStatus.lc').split(' - ')[0]}
                  </span>
                  <PhotoCredit photographer={galleryImages[2].photographer} />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('birdwatching.registeredBirds.species.umbrellaBird.name')}</h3>
                  <p className="text-sm text-primary italic mb-2">{t('birdwatching.registeredBirds.species.umbrellaBird.scientificName')}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-justify">
                    {t('birdwatching.registeredBirds.species.umbrellaBird.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodiversity Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            {t('birdwatching.biodiversity.title')}
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed text-justify mb-12">
              {t('birdwatching.biodiversity.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Amazonian Species */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('birdwatching.biodiversity.amazonianSpecies.title')}</h3>
                <ul className="space-y-4">
                  {Object.entries(t('birdwatching.biodiversity.amazonianSpecies.species', { returnObjects: true })).map(([key, species]) => (
                    <li key={key} className="flex flex-col">
                      <span className="font-medium text-gray-900">{species.name}</span>
                      <span className="text-sm text-primary italic">{species.scientificName}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlighted Birds */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('birdwatching.biodiversity.highlightedBirds.title')}</h3>
                <ul className="space-y-4">
                  {Object.entries(t('birdwatching.biodiversity.highlightedBirds.species', { returnObjects: true })).map(([key, species]) => (
                    <li key={key} className="flex flex-col">
                      <span className="font-medium text-gray-900">{species.name}</span>
                      <span className="text-sm text-primary italic">{species.scientificName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('birdwatching.gallery.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden rounded-2xl cursor-pointer bg-black" onClick={() => setIsFullScreen(true)}>
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ objectFit: item.objectFit || 'cover' }}
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={item.url}
                      className="w-full h-full object-cover"
                      onClick={(e) => e.stopPropagation()}
                      controls={false}
                      loop
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  {item.type === 'video' && (
                    <button
                      onClick={togglePlay}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors duration-300 z-20"
                    >
                      {isPlaying ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      )}
                    </button>
                  )}
                  <PhotoCredit photographer={item.photographer} isGallery={true} />
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

      {/* Special Tour Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            {t('birdwatching.specialTour.title')}
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('birdwatching.specialTour.schedule.title')}</h3>
                <p className="text-gray-600">{t('birdwatching.specialTour.schedule.departure')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('birdwatching.specialTour.itinerary.title')}</h3>
                <ul className="space-y-3">
                  {t('birdwatching.specialTour.itinerary.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Observation Spots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 relative">
            {t('birdwatching.observationSpots.title')}
            <span className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(t('birdwatching.observationSpots.spots', { returnObjects: true })).map(([key, spot]) => (
              <div key={key} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{spot.title}</h3>
                <p className="text-gray-600 text-justify">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-semibold mb-6">{t('birdwatching.references.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            {t('birdwatching.references.description')}
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://ebird.org/hotspot/L4154796"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              {t('birdwatching.references.links.ebird')}
            </a>
            <a 
              href="https://www.wikiaves.com.br/wiki/jardim_da_amazonia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300"
            >
              {t('birdwatching.references.links.wikiaves')}
            </a>
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
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{ objectFit: item.objectFit || 'cover' }}
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={item.url}
                    className="w-full h-full object-cover"
                    onClick={(e) => e.stopPropagation()}
                    controls={false}
                    loop
                  />
                )}
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
                {item.type === 'video' && (
                  <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors duration-300 z-20"
                  >
                    {isPlaying ? (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    )}
                  </button>
                )}
                <PhotoCredit photographer={item.photographer} isGallery={true} />
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Birdwatching;