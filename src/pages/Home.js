import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { getFolderImage, folderImageMapping } from '../config/cloudinaryConfig';
import { siteConfig, featureFlags } from '../config';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Move all hooks to the top level
  const testimonials = useMemo(() => siteConfig?.home?.testimonials?.items || [], []);
  
  const experienceStyles = useMemo(() => ({
    birdwatching: {
      backgroundImage: `url(${getFolderImage('birdwatching', 'hero')})`
    },
    primates: {
      backgroundImage: `url(${getFolderImage('primatas', 'hero')})`
    },
    safari: {
      backgroundImage: `url(${getFolderImage('safari-boat', 'hero')})`
    }
  }), []);

  const cloudinaryCommonProps = useMemo(() => ({
    cloudName: "dxlhv2mji",
    width: "auto",
    crop: "scale",
    loading: "lazy",
    quality: "auto:best",
    fetchFormat: "auto"
  }), []);

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
            loading="lazy"
          ></iframe>
        </div>
        {/* Logo Overlay */}
        <div className="absolute inset-x-0 top-16 flex items-start justify-center">
          <div className="bg-white/20 rounded-full p-6">
            <img
              src="/Logo_Jardim_Amazonia_COLORIDO.png"
              alt="Jardim Amazônia Logo"
              className="w-40 md:w-48 lg:w-56 drop-shadow-lg"
            />
          </div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
              <Image 
                {...cloudinaryCommonProps}
                publicId={folderImageMapping.home['about-image']}
                alt="Vista do Jardim da Amazônia"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
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
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                  style={experienceStyles[exp.id]}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-semibold mb-3">{exp.title}</h3>
                  <p className="text-white/90 mb-6">{exp.desc}</p>
                  <Link 
                    to={exp.link} 
                    className="btn-dark"
                  >
                    Explorar
                  </Link>
                </div>
              </div>
            ))}
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