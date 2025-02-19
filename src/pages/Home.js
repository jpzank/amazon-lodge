import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { getFolderImage, folderImageMapping, getImagePhotographer } from '../config/cloudinaryConfig';
import { siteConfig, featureFlags } from '../config';
import PhotoCredit from '../components/PhotoCredit';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Move all hooks to the top level
  const testimonials = useMemo(() => siteConfig?.home?.testimonials?.items || [], []);
  
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
    fetchFormat: "auto"
  }), []);

  const criticalImageProps = useMemo(() => ({
    ...cloudinaryCommonProps,
    loading: "eager",
    fetchPriority: "high"
  }), [cloudinaryCommonProps]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if ((scrollPosition > 50 && !isScrolled) || (scrollPosition <= 50 && isScrolled)) {
      setIsScrolled(scrollPosition > 50);
    }
  }, [isScrolled]);

  // Debug CSS
  useEffect(() => {
    const styleSheets = Array.from(document.styleSheets);
    console.log('Loaded stylesheets:', styleSheets.map(sheet => sheet.href));
  }, []);

  // Scroll effect
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

  // Testimonial rotation effect - only runs if testimonials feature is enabled
  useEffect(() => {
    if (!featureFlags?.enableTestimonials) return;
    
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debug siteConfig
  console.log('siteConfig:', siteConfig);
  console.log('conservation:', siteConfig?.home?.conservation);

  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden transform scale-[1.3] origin-center">
          <iframe
            src={`${isMobile ? siteConfig?.home?.hero?.mobileVideoUrl : siteConfig?.home?.hero?.videoUrl}?muted=1&loop=1&background=1&autoplay=1&dnt=1&app_id=58479&quality=auto`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full h-full object-cover"
            title={siteConfig?.site?.name}
            loading="eager"
            fetchpriority="high"
          ></iframe>
        </div>
        {/* Logo Overlay */}
        <div className="absolute inset-x-0 top-16 flex items-start justify-center">
          <img
            src="/Logo_Jardim_Amazonia_COLORIDO.png"
            alt="Jardim Amazônia Logo"
            className="w-48 md:w-64 lg:w-72 drop-shadow-lg"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <span className="block text-lg mb-2 font-normal">BEM VINDO!</span>
              <span className="block text-5xl">JARDIM DA AMAZÔNIA</span>
            </h2>
            <p className="text-xl text-gray-600">UM OÁSIS DE ÁGUAS CRISTALINAS AO SUL DA AMAZÔNIA</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Situado às margens do Rio Claro, o Jardim da Amazônia é um refúgio que une a Floresta Amazônica 
              e o Cerrado, oferecendo um dos ecossistemas mais ricos e diversificados do Brasil. Nosso objetivo 
              é proporcionar uma experiência autêntica de conexão com a natureza, em um ambiente tranquilo e preservado, 
              enquanto cuidamos do legado natural para as gerações futuras.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-icons text-primary text-2xl">eco</span>
                  </div>
                  <span className="font-medium">Piscina Natural</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-icons text-primary text-2xl">cottage</span>
                  </div>
                  <span className="font-medium">Acomodações Aconchegantes</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-icons text-primary text-2xl">hiking</span>
                  </div>
                  <span className="font-medium">Trilhas e Natureza</span>
                </div>
              </div>
              <div className="flex justify-center">
                <Link 
                  to={siteConfig.buttonLinks.ourHistory} 
                  className="btn-primary"
                >
                  Conheça Nossa História
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px] after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/20 after:via-transparent after:to-white/20 after:pointer-events-none">
              <Image 
                {...criticalImageProps}
                publicId={folderImageMapping['trilhas']['jardim-da-amazônia-3234-h1mjwq'].id}
                alt="Vista do Jardim da Amazônia"
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
                  Um corredor ecológico formado por um ecótono, onde Cerrado e Amazônia se encontram, criando um verdadeiro refúgio para a biodiversidade, com:
                </p>
                <span className="text-5xl text-primary-dark/20 absolute -bottom-8 -right-4">"</span>
              </div>
              <footer className="mt-8 text-right">
                <cite className="text-gray-600 font-medium not-italic">— Raquel Zanchet</cite>
              </footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">580+</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Espécies de Aves</h3>
              <p className="text-gray-600 text-sm">Catalogadas em nossa reserva</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">7</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Espécies de Primatas</h3>
              <p className="text-gray-600 text-sm">Dos 29 reconhecidos em MT</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">30+</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Mamíferos</h3>
              <p className="text-gray-600 text-sm">De médio e grande porte</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-4">∞</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Experiências</h3>
              <p className="text-gray-600 text-sm">na natureza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experiências</h2>
            <p className="text-xl text-gray-600">Explore, descubra e se encante com a vida selvagem em seu habitat natural.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig?.home?.experiences?.items?.map((exp, index) => (
              <div key={index} className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0">
                  <Image 
                    {...criticalImageProps}
                    publicId={experienceImages[exp.id].image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <PhotoCredit photographer={experienceImages[exp.id].photographer} />
                </div>
                {/* Initial overlay with just title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 translate-y-0 group-hover:translate-y-full">
                  <h3 className="text-3xl font-semibold text-white text-shadow">{exp.title}</h3>
                </div>
                {/* Hover overlay with full content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-semibold mb-3 text-white text-shadow">{exp.title}</h3>
                  <p className="text-white/90 mb-6 text-shadow">{exp.desc}</p>
                  <Link 
                    to={exp.link} 
                    className="btn-dark w-fit"
                  >
                    Explorar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Find Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Onde Estamos</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O Jardim da Amazônia está localizado no município de São José do Rio Claro, Mato Grosso, em uma área de transição ecológica entre a Floresta Amazônica e o Cerrado brasileiro.
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
                      <h3 className="font-medium text-gray-900 mb-1">Endereço</h3>
                      <p className="text-gray-600">São José do Rio Claro - MT</p>
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
                      <h3 className="font-medium text-gray-900 mb-1">Distâncias</h3>
                      <p className="text-gray-600">330 km de Cuiabá</p>
                      <p className="text-gray-600">180 km de Sinop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Aeroportos Próximos</h3>
                      <p className="text-gray-600">Aeroporto de Cuiabá (CGB)</p>
                      <p className="text-gray-600">Aeroporto de Sinop (OPS)</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/como-chegar" 
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300 mt-8 group"
                >
                  <span className="font-medium">Como Chegar</span>
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
              <div className="relative h-[480px] lg:h-[580px] lg:ml-auto">
                <Image 
                  {...criticalImageProps}
                  publicId="Jd_Amazonia_map_d1k1zb"
                  alt="Mapa de Localização do Jardim da Amazônia"
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
              <h2 className="text-4xl font-bold">{siteConfig?.home?.testimonials?.title}</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              {testimonials?.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-500 ${
                    index === activeTestimonial 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 absolute'
                  }`}
                >
                  <blockquote className="text-xl text-gray-700 text-center italic mb-8">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-center">
                    <cite className="text-lg font-semibold text-gray-900 not-italic">
                      {testimonial.author}
                    </cite>
                    <span className="block text-sm text-gray-500 mt-1">{testimonial.date}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center gap-3 mt-12">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-primary' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{siteConfig?.home?.cta?.title}</h2>
            <p className="text-xl text-gray-700 mb-12">{siteConfig?.home?.cta?.subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={siteConfig.buttonLinks.bookNow} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Reserve Agora
              </a>
              <Link 
                to={siteConfig.buttonLinks.comoChegar} 
                className="btn-secondary"
              >
                Como Chegar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 