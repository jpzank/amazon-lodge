import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { useTranslation } from 'react-i18next';
import { getFolderImage, folderImageMapping, getImagePhotographer } from '../config/cloudinaryConfig';
import { siteConfig, featureFlags } from '../config';
import PhotoCredit from '../components/PhotoCredit';
import SEO from '../components/SEO';
import Atropos from 'atropos/react';
import 'atropos/css';

const Home = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  const heroImages = useMemo(() => ({
    desktop: [
      'Jardim_da_Amazônia-1_nmhh66',
      'Jardim_da_Amazônia-3014_dotnjn',
      'Jardim_da_Amazônia-2790_wgu7st',
      'fogo-no-rio_u7cpws.png',
      'Jardim_da_Amazônia-3434_jsn8sr',
      'Jardim_da_Amazônia-3806_tg99vp',
    ],
    mobile: [
      'Jardim_da_Amazônia-3238_fb5k3w',
      'Jardim_da_Amazônia-3868_wajqd7',
      'Jardim_da_Amazônia-3427_jshmzs',
      'Jardim_da_Amazônia-1165_ztchyn',
      'arvore_almazonia_f9qkkf',
      'MANOEL_RUEDI_90_dedxfy',
      'Jardim_da_Amazônia-3602_sisbpp',
    ]
  }), []);

  const experienceImages = useMemo(() => ({
    birdwatching: {
      image: getFolderImage('birdwatching', 'manoel-ruedi-122-liksbm'),
      photographer: getImagePhotographer('birdwatching', 'manoel-ruedi-122-liksbm')
    },
    primates: {
      image: getFolderImage('primatas', 'primates-hero-lodpmk'),
      photographer: getImagePhotographer('primatas', 'primates-hero-lodpmk')
    },
    safari: {
      image: getFolderImage('safari-boat', 'safari-boat-rvnwku'),
      photographer: getImagePhotographer('safari-boat', 'safari-boat-rvnwku')
    }
  }), []);

  const cloudinaryCommonProps = useMemo(() => ({
    cloudName: "dxlhv2mji",
    width: "auto",
    crop: "scale",
    quality: "auto:best",
    fetchFormat: "auto",
    secure: true
  }), []);

  const criticalImageProps = useMemo(() => ({
    ...cloudinaryCommonProps,
    loading: "eager",
    fetchpriority: "high"
  }), [cloudinaryCommonProps]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if ((scrollPosition > 50 && !isScrolled) || (scrollPosition <= 50 && isScrolled)) {
      setIsScrolled(scrollPosition > 50);
    }
  }, [isScrolled]);

  useEffect(() => {
    const currentScrollPosition = window.scrollY;
    setIsScrolled(currentScrollPosition > 50);
  }, []);

  useEffect(() => {
    let scrollTimeout;
    const debouncedScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => handleScroll());
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!featureFlags?.enableTestimonials) return;
    
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % t('home.testimonials.items', { returnObjects: true }).length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [t]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveHeroImage((prev) => {
        const images = isMobile ? heroImages.mobile : heroImages.desktop;
        return (prev + 1) % images.length;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, [isMobile, heroImages]);

  return (
    <>
      <SEO 
        title={t('meta.home.title')}
        description={t('meta.home.description')}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Image Carousel Section */}
        <section className="relative h-screen w-screen overflow-hidden">
          {(isMobile ? heroImages.mobile : heroImages.desktop).map((imageId, index) => (
            <div
              key={imageId}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                {...criticalImageProps}
                publicId={imageId}
                alt={`Jardim da Amazônia - ${index + 1}`}
                className="w-full h-full object-cover"
                quality="100"
                transformation={[
                  { width: isMobile ? 1200 : 1920, crop: "scale" },
                  { quality: "auto:best" }
                ]}
              />
              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
            </div>
          ))}
          {/* Logo Overlay with enhanced shadow */}
          <div className="absolute inset-x-0 top-24 flex items-start justify-center px-4">
            <div className="relative">
              <Atropos
                className="relative rounded-full"
                rotateTouch="scroll-y"
                highlight={true}
                shadow={false}
                innerClassName="rounded-full"
              >
                <img
                  src="/Logo_Jardim_Amazonia_white_whole1.png"
                  alt="Jardim Amazônia Logo"
                  className="relative w-64 md:w-[22rem] lg:w-[24rem] drop-shadow-lg p-4"
                  loading="eager"
                  fetchpriority="high"
                  data-atropos-offset="5"
                />
              </Atropos>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="mb-4">
                <span className="block text-lg mb-3 font-light tracking-wider text-primary">{t('home.welcome.greeting')}</span>
                <span className="block text-5xl font-normal tracking-wide">{t('home.welcome.title')}</span>
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto italic">{t('home.welcome.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <p className="text-base text-gray-700 leading-relaxed text-justify">
                  {t('home.about.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-icons text-primary text-2xl">eco</span>
                    </div>
                    <span className="font-medium">{t('home.about.features.naturalPool')}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-icons text-primary text-2xl">cottage</span>
                    </div>
                    <span className="font-medium">{t('home.about.features.accommodation')}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="material-icons text-primary text-2xl">hiking</span>
                    </div>
                    <span className="font-medium">{t('home.about.features.trails')}</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link 
                    to={siteConfig.buttonLinks.ourHistory} 
                    className="btn-primary"
                  >
                    {t('home.about.cta')}
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px] after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/20 after:via-transparent after:to-white/20 after:pointer-events-none">
                <Image 
                  {...criticalImageProps}
                  publicId={folderImageMapping['trilhas']['jardim-da-amazônia-3234-h1mjwq'].id}
                  alt={t('home.welcome.title')}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <PhotoCredit photographer={folderImageMapping['trilhas']['jardim-da-amazônia-3234-h1mjwq'].photographer} />
              </div>
            </div>
          </div>
        </section>

        {/* Biodiversity Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <blockquote className="relative">
                <div className="relative z-10">
                  <span className="text-5xl text-primary-dark/20 absolute -top-4 -left-6">"</span>
                  <p className="text-xl text-gray-700 leading-relaxed text-justify pl-8 pr-4">
                    {t('home.biodiversity.quote')}
                  </p>
                  <span className="text-5xl text-primary-dark/20 absolute -bottom-8 -right-4">"</span>
                </div>
                <footer className="mt-8 text-right">
                  <cite className="text-gray-600 font-medium not-italic">— {t('home.biodiversity.author')}</cite>
                </footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">{t('home.biodiversity.stats.birds.count')}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{t('home.biodiversity.stats.birds.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.biodiversity.stats.birds.subtitle')}</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">{t('home.biodiversity.stats.primates.count')}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{t('home.biodiversity.stats.primates.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.biodiversity.stats.primates.subtitle')}</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">{t('home.biodiversity.stats.mammals.count')}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{t('home.biodiversity.stats.mammals.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.biodiversity.stats.mammals.subtitle')}</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-4">{t('home.biodiversity.stats.experiences.count')}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{t('home.biodiversity.stats.experiences.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.biodiversity.stats.experiences.subtitle')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('home.experiences.title')}</h2>
              <p className="text-xl text-gray-600">{t('home.experiences.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                  <Image 
                    {...criticalImageProps}
                    publicId={experienceImages.birdwatching.image}
                    alt={t('home.experiences.items.birdwatching.title')}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <PhotoCredit photographer={experienceImages.birdwatching.photographer} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 translate-y-0 group-hover:translate-y-full">
                  <h3 className="text-3xl font-semibold text-white text-shadow">{t('home.experiences.items.birdwatching.title')}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-semibold mb-3 text-white text-shadow">{t('home.experiences.items.birdwatching.title')}</h3>
                  <p className="text-white/90 mb-6 text-shadow">{t('home.experiences.items.birdwatching.description')}</p>
                  <Link 
                    to="/birdwatching" 
                    className="btn-dark w-fit"
                  >
                    {t('home.experiences.cta')}
                  </Link>
                </div>
              </div>

              <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                  <Image 
                    {...criticalImageProps}
                    publicId={experienceImages.primates.image}
                    alt={t('home.experiences.items.primates.title')}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <PhotoCredit photographer={experienceImages.primates.photographer} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 translate-y-0 group-hover:translate-y-full">
                  <h3 className="text-3xl font-semibold text-white text-shadow">{t('home.experiences.items.primates.title')}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-semibold mb-3 text-white text-shadow">{t('home.experiences.items.primates.title')}</h3>
                  <p className="text-white/90 mb-6 text-shadow">{t('home.experiences.items.primates.description')}</p>
                  <Link 
                    to="/primatas" 
                    className="btn-dark w-fit"
                  >
                    {t('home.experiences.cta')}
                  </Link>
                </div>
              </div>

              <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                  <Image 
                    {...criticalImageProps}
                    publicId={experienceImages.safari.image}
                    alt={t('home.experiences.items.safari.title')}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <PhotoCredit photographer={experienceImages.safari.photographer} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 translate-y-0 group-hover:translate-y-full">
                  <h3 className="text-3xl font-semibold text-white text-shadow">{t('home.experiences.items.safari.title')}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-semibold mb-3 text-white text-shadow">{t('home.experiences.items.safari.title')}</h3>
                  <p className="text-white/90 mb-6 text-shadow">{t('home.experiences.items.safari.description')}</p>
                  <Link 
                    to="/safari-boat" 
                    className="btn-dark w-fit"
                  >
                    {t('home.experiences.cta')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where to Find Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">{t('home.location.title')}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('home.location.description')}
                  </p>
                  <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-3">
                      <span className="text-primary">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                          <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{t('home.location.address.title')}</h3>
                        <p className="text-gray-600">{t('home.location.address.text')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                          <circle cx="7.5" cy="14.5" r="1.5"/>
                          <circle cx="16.5" cy="14.5" r="1.5"/>
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{t('home.location.distances.title')}</h3>
                        <p className="text-gray-600">{t('home.location.distances.cuiaba')}</p>
                        <p className="text-gray-600">{t('home.location.distances.sinop')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{t('home.location.airports.title')}</h3>
                        <p className="text-gray-600">{t('home.location.airports.cuiaba')}</p>
                        <p className="text-gray-600">{t('home.location.airports.sinop')}</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/como-chegar" 
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300 mt-8 group"
                  >
                    <span className="font-medium">{t('home.location.howToGet')}</span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>
                <div className="relative h-[480px] lg:h-[580px] lg:ml-auto">
                  <Image 
                    {...criticalImageProps}
                    publicId="Jd_Amazonia_map_d1k1zb"
                    alt={t('home.map.alt')}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {featureFlags?.enableTestimonials && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">{t('home.testimonials.title')}</h2>
              </div>
              <div className="max-w-4xl mx-auto relative">
                <div className="absolute -left-4 top-0 text-6xl text-primary/20 font-serif leading-none">
                  "
                </div>
                <div className="absolute -right-4 top-0 text-6xl text-primary/20 font-serif leading-none">
                  "
                </div>
                <div className="relative h-auto min-h-[280px] md:h-[200px] mb-16 px-8">
                  {[
                    {
                      quote: "Uma experiência maravilhosa que recomendo de coração! Tudo foi incrível: o local, os quartos, o atendimento – tudo impecável. A piscina de águas cristalinas e naturais foi inesquecível e me deixou uma eterna saudade.",
                      author: "Aquila Neves",
                      location: "Tapurah, MT",
                      date: "Fevereiro 2025"
                    },
                    {
                      quote: "Lugar tranquilo, de fácil acesso, longe do barulho, contato permanente com a natureza. Piscina natural de água cristalina, excelente recepção, feita pela família (Seo Almor é um Show de anfitrião). Pessoal nos atendeu maravilhosamente bem. Os bangalôs são nota 10, comida excelente.",
                      author: "Koczkoday",
                      location: "Mato Grosso",
                      date: "Novembro 2024"
                    },
                    {
                      quote: "Absolutely lovely Amazon hotel. This hotel has so many garden features, bird feeders, and ponds. It is just fun to walk around. We went on hikes to look for birds and animals. The spring-fed pool was a very nice place to cool off after a walk. Our dietary needs were accommodated with pleasure.",
                      author: "Julietravelsalot",
                      location: "Minnesota, USA",
                      date: "Setembro 2023"
                    },
                    {
                      quote: "Jardim da Amazônia – Uma incrível empresa familiar na linha de frente da conservação da Floresta Amazônica!",
                      author: "M Carr",
                      location: "USA",
                      date: "Abril 2023"
                    },
                    {
                      quote: "Paradise for birdwatchers! The diversity of species and professional guidance made our stay unforgettable.",
                      author: "John Miller",
                      location: "UK",
                      date: "Maio 2023"
                    }
                  ].map((testimonial, index) => (
                    <div 
                      key={index} 
                      className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                        index === activeTestimonial 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 translate-y-8 pointer-events-none'
                      }`}
                    >
                      <blockquote className="text-lg md:text-xl text-gray-700 text-center italic mb-8 px-4 md:px-12">
                        {testimonial.quote}
                      </blockquote>
                      <div className="text-center">
                        <cite className="text-base md:text-lg font-semibold text-gray-900 not-italic">
                          {testimonial.author}
                        </cite>
                        <span className="block text-sm text-gray-500 mt-1">
                          {testimonial.location} • {testimonial.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-3 mt-4">
                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeTestimonial 
                          ? 'bg-primary scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="my-16">
                  <div className="w-24 h-[1px] bg-gray-200 mx-auto"></div>
                </div>

                <p className="text-center text-gray-600 mb-8">
                  {t('home.testimonials.platformsTitle')}
                </p>

                <div className="flex justify-center items-center gap-8 opacity-70">
                  <a 
                    href="https://www.tripadvisor.com.br/Hotel_Review-g2510096-d2500139-Reviews-Jardim_Da_Amazonia_Lodge-Sao_Jose_do_Rio_Claro_State_of_Mato_Grosso.html"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 3419.4210338656544 1586.48"
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="35"
                    >
                      <path d="M3394.56 1435.52a24.85 24.85 0 1 0 24.85 24.85 24.87 24.87 0 0 0-24.85-24.85zm0 45.79a20.94 20.94 0 1 1 20.94-20.94 21 21 0 0 1-20.94 20.94zm8.06-25.16c0-4.53-3.23-7.21-7.91-7.21h-8v22.62h3.91v-8.21h4.23l4.11 8.21h4.2l-4.53-9a6.52 6.52 0 0 0 3.99-6.41zm-8.11 3.74h-3.84v-7.49h3.84c2.62 0 4.2 1.32 4.2 3.75s-1.58 3.74-4.2 3.74zM399.79 1184.01v-60.1h-92.14v357.62h92.14V1267.1c0-38.85 25-57.85 63.79-57.85H514v-85.29h-43.09c-33.71-.05-63.03 17.54-71.12 60.05zm200.53-201.57c-31.51 0-55.69 24.92-55.69 56.43a55.7 55.7 0 1 0 111.4 0c.03-31.51-24.16-56.43-55.68-56.43zm-46 499.09h91.93v-357.62h-91.86zm529.95-178.81c0 102.09-82.76 184.85-184.85 184.85a177.9 177.9 0 0 1-108.44-36.32v135.23h-91.93v-462.57h91.93v30.24a177.9 177.9 0 0 1 108.51-36.28c102.09 0 184.85 82.76 184.85 184.85zm-92.53 0a100.42 100.42 0 1 0-100.41 100.42 100.41 100.41 0 0 0 100.46-100.42zm1690.76-31.37l-53.64-14.72c-35.29-9.18-49-20-49-38.66 0-18.19 19.32-30.89 47-30.89 26.34 0 47 17.26 47 39.29v2h84.74v-2c0-64.9-52.93-108.5-131.72-108.5-78.05 0-134.7 43.57-134.7 103.6 0 46.71 31 81.89 85 96.52l51.38 14c39 10.8 53.54 22.8 53.54 44.27 0 22.67-21 37.9-52.19 37.9-32.55 0-54.42-20.58-54.42-51.2v-2h-90v2c0 73.37 59.07 124.61 143.64 124.61 81.5 0 140.65-50 140.65-119 .01-33.75-15.16-78-87.21-97.22zm-1272-147.44h91.93v357.62h-91.93v-30.28a177.91 177.91 0 0 1-108.52 36.28c-102.09 0-184.85-82.76-184.85-184.85s82.76-184.85 184.85-184.85a177.91 177.91 0 0 1 108.52 36.28zm0 178.82a100.42 100.42 0 1 0-100.42 100.43 100.42 100.42 0 0 0 100.47-100.45zm424-306.11h91.93v484.91h-91.93v-30.28a177.91 177.91 0 0 1-108.52 36.28c-102.09 0-184.85-82.76-184.85-184.85s82.76-184.85 184.85-184.85a177.91 177.91 0 0 1 108.52 36.28zm0 306.1a100.42 100.42 0 1 0-100.42 100.42 100.41 100.41 0 0 0 100.43-100.42zm518.9 178.81h91.93v-357.62h-91.93zm46-499.09c-31.52 0-55.7 24.92-55.7 56.43a55.7 55.7 0 1 0 111.4 0c-.02-31.51-24.21-56.43-55.72-56.43zm767.83 320.28c0 102.09-82.76 184.85-184.85 184.85s-184.85-82.76-184.85-184.85 82.76-184.85 184.85-184.85 184.83 82.76 184.83 184.85zm-84.43 0a100.42 100.42 0 1 0-100.42 100.42 100.41 100.41 0 0 0 100.41-100.42zm-2730-306.1H0v82h130.56v402.88h91.61v-402.85h130.56zm1783.85 387l-81.86-259.71h-96.58l122.69 357.62h110.64l123.41-357.62h-96.58zm1165.38-199.59v-60.1h-92.24v357.62h92.18V1267.1c0-38.84 24.92-57.9 63.76-57.9h50.42v-85.29h-43.09c-33.73 0-63.04 17.59-71.1 60.1z" />
                      <circle cx="1708.04" cy="470.28" fill="#34e0a1" r="470.28" />
                      <path d="M1998.47 378.5l56.77-61.76H1929.4a393.1 393.1 0 0 0-442.34 0h-126.17l56.77 61.76a173.48 173.48 0 1 0 234.79 255.45l55.62 60.51 55.58-60.47a172.83 172.83 0 0 0 117.86 46.2c95.81 0 173.55-77.67 173.55-173.48a173.05 173.05 0 0 0-56.59-128.21zm-463.92 245.61a117.4 117.4 0 1 1 117.4-117.4 117.4 117.4 0 0 1-117.4 117.4zm173.52-120.78c0-77.26-56.2-143.55-130.31-171.9a338.82 338.82 0 0 1 260.59 0c-74.1 28.36-130.28 94.65-130.28 171.9zm173.44 120.78a117.4 117.4 0 1 1 117.4-117.4 117.4 117.4 0 0 1-117.4 117.4zm0-178.94a61.55 61.55 0 1 0 61.55 61.54 61.54 61.54 0 0 0-61.55-61.54zm-285.41 61.54a61.55 61.55 0 1 1-61.55-61.54 61.55 61.55 0 0 1 61.55 61.54z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.google.com/travel/hotels/s/N6HzmW4TEP74LibA7"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <svg width="120" height="24" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4285f4]">
                      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-12.51-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                      <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 25.03 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.booking.com/hotel/br/pousada-jardim-da-amazonia.en-gb.html?aid=1549630&label=bckbtn-clicktrip-bn-n39-200225-jardim_da_amaz_nia_lodge-i1392653-s122893-wof1bQZc0oXL7arQB-cu_tab-d703-dc3&sid=f8ffc0ac200c6e2d935a6f2631bed609"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <svg 
                      width="120" 
                      height="35" 
                      viewBox="-.092 .015 2732.125 2671.996" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z" fill="#0c3b7c"/>
                      <path d="m.001 1659.991h1364.531v1012.019h-1364.53z" fill="#0c3b7c"/>
                      <g fillRule="nonzero">
                        <path d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244" fill="#fff"/>
                        <path d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.894 72.402 161.894 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894" fill="#00bafc"/>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">{t('home.cta.title')}</h2>
              <p className="text-xl text-gray-700 mb-12">{t('home.cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={siteConfig.buttonLinks.bookNow} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  {t('home.cta.bookNow')}
                </a>
                <Link 
                  to={siteConfig.buttonLinks.comoChegar} 
                  className="btn-secondary"
                >
                  {t('home.cta.howToGet')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
