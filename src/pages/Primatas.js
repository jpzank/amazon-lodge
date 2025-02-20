import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getFolderImage, getImagePhotographer } from '../config/cloudinaryConfig';
import PhotoCredit from '../components/PhotoCredit';

const Primatas = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const galleryImages = [
    {
      url: getFolderImage('primatas', 'zogue-zogue-eqbdel'),
      title: t('primatas.species.zoguezogue.name'),
      photographer: "Fred Crema"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/image/upload/v1739857960/macaco-cara-preta_ilsz9z.jpg",
      title: t('primatas.species.macacoaranha.name'),
      photographer: "Gustavo Canale",
      type: "image"
    },
    {
      url: "https://res.cloudinary.com/dxlhv2mji/video/upload/v1739860423/video_parauacu2_khrzuo.mp4",
      title: t('primatas.species.parauacu.name'),
      photographer: "Jhonata Araujo",
      type: "video"
    },
    {
      url: getFolderImage('primatas', 'macaco-aranha-b3z78a'),
      title: t('primatas.species.macacoaranha.name'),
      photographer: "Gustavo Canale",
      type: "image"
    },
    {
      url: getFolderImage('primatas', 'parauacu-udmaqc'),
      title: t('primatas.species.parauacu.name'),
      photographer: "Fernando Frosini",
      type: "image"
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${getFolderImage('primatas', 'primates-hero-lodpmk')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('primatas.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('primatas.hero.subtitle')}
          </p>
        </div>
        <PhotoCredit photographer={getImagePhotographer('primatas', 'primates-hero-lodpmk')} />
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('primatas.intro.title')}</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('primatas.intro.description1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('primatas.intro.description2')}
            </p>
          </div>
        </div>
      </section>

      {/* Species Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-semibold text-center mb-16">{t('primatas.species.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64" style={{ 
                backgroundImage: `url(${getFolderImage('primatas', 'zogue-zogue-eqbdel')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">CR</span>
                <PhotoCredit photographer="Fred Crema" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{t('primatas.species.zoguezogue.name')}</h3>
                <p className="text-sm text-gray-600 italic">{t('primatas.species.zoguezogue.scientificName')}</p>
                <p className="text-sm text-gray-500">{t('primatas.species.zoguezogue.englishName')}</p>
                <p className="text-gray-700">{t('primatas.species.zoguezogue.description')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64" style={{ 
                backgroundImage: `url(${getFolderImage('primatas', 'parauacu-udmaqc')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">VU</span>
                <PhotoCredit photographer="Fernando Frosini" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{t('primatas.species.parauacu.name')}</h3>
                <p className="text-sm text-gray-600 italic">{t('primatas.species.parauacu.scientificName')}</p>
                <p className="text-sm text-gray-500">{t('primatas.species.parauacu.englishName')}</p>
                <p className="text-gray-700">{t('primatas.species.parauacu.description')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64" style={{ 
                backgroundImage: `url(${getFolderImage('primatas', 'macaco-aranha-b3z78a')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">VU</span>
                <PhotoCredit photographer="Gustavo Canale" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{t('primatas.species.macacoaranha.name')}</h3>
                <p className="text-sm text-gray-600 italic">{t('primatas.species.macacoaranha.scientificName')}</p>
                <p className="text-sm text-gray-500">{t('primatas.species.macacoaranha.englishName')}</p>
                <p className="text-gray-700">{t('primatas.species.macacoaranha.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>CR - {t('primatas.conservationStatus.CR')}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>VU - {t('primatas.conservationStatus.VU')}</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>LC - {t('primatas.conservationStatus.LC')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('primatas.gallery.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden rounded-2xl cursor-pointer" onClick={() => setIsFullScreen(true)}>
              {galleryImages.map((media, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {media.type === 'video' ? (
                    <video
                      src={media.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={media.url}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-8 left-8 text-white z-10">
                    <h3 className="text-2xl font-semibold">{media.title}</h3>
                  </div>
                  <PhotoCredit photographer={media.photographer} isGallery={true} />
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
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
            {galleryImages.map((media, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {media.type === 'video' ? (
                  <video
                    src={media.url}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <img
                    src={media.url}
                    alt={media.title}
                    className="w-full h-full object-contain"
                  />
                )}
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <h3 className="text-3xl font-semibold">{media.title}</h3>
                </div>
                <PhotoCredit photographer={media.photographer} isGallery={true} />
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">{t('primatas.recommendations.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('primatas.recommendations.whatToBring.title')}</h3>
              <ul className="space-y-4 text-gray-700">
                {t('primatas.recommendations.whatToBring.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">{t('primatas.recommendations.bestTime.title')}</h3>
              <div className="space-y-6">
                <p className="text-gray-700">{t('primatas.recommendations.bestTime.description')}</p>
                <div className="space-y-3">
                  <div className="text-gray-600">
                    <span className="font-medium">{t('primatas.recommendations.bestTime.seasons.rainy.period')}:</span>
                    <p className="ml-4">{t('primatas.recommendations.bestTime.seasons.rainy.description')}</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-medium text-primary">{t('primatas.recommendations.bestTime.seasons.ideal.period')}</p>
                    <p className="ml-4 mt-1">{t('primatas.recommendations.bestTime.seasons.ideal.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">{t('primatas.macaquear.title')}</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t('primatas.macaquear.description1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('primatas.macaquear.description2')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">{t('primatas.route.title')}</h2>
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed text-center">
              {t('primatas.route.intro')}
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">{t('primatas.route.about.title')}</h3>
              <p className="text-gray-700 mb-8">
                {t('primatas.route.about.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">{t('primatas.route.about.destinations.title')}</h4>
                  <p className="text-gray-700">{t('primatas.route.about.destinations.places')}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">{t('primatas.route.about.benefits.title')}</h4>
                  <p className="text-gray-700">{t('primatas.route.about.benefits.items')}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-center italic">
              {t('primatas.route.note')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">{t('primatas.references.title')}</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.midiajur.com.br/midia-ciencia/pesquisador-da-ufmt-participa-de-evento-na-malasia-discutindo-a-observacao-de-primatas-como-alternativa-de-renda-e-conservacao/52673" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              {t('primatas.references.links.congress')}
            </a>
            <a 
              href="https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2023/09/12/macaquear-pratica-de-observacao-de-primatas-tem-potencial-de-crescimento-no-brasil.ghtml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              {t('primatas.references.links.terra')}
            </a>
            <a 
              href="https://oeco.org.br/reportagens/um-macaco-encurralado-pelo-desmatamento/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              {t('primatas.references.links.eco')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Primatas; 