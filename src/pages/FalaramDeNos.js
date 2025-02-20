import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import PhotoCredit from '../components/PhotoCredit';

const FalaramDeNos = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const noticias = t('theySpokeAboutUs.news', { returnObjects: true }).map(noticia => ({
    ...noticia,
    imagem: noticia.id === 1 ? 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085712/camalote-capa_xaeyct.jpg' :
           noticia.id === 2 ? 'https://pbs.twimg.com/profile_images/1437745332922814468/vA6M6gcI_400x400.jpg' :
           noticia.id === 3 ? 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085727/wonderlust_alvd9p.jpg' :
           noticia.id === 4 ? 'https://www.mammalwatching.com/wp-content/uploads/2024/10/Screenshot-2024-10-08-171951.jpg' :
           noticia.id === 5 ? 'https://s2-g1.glbimg.com/NlfYfi4wwL4Pj4Ybd-V9pz2kJos=/0x0:3888x2592/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/Q/B/yWHBC6RZCG4ZziGC9QZA/image00001-1-.jpeg' :
           noticia.id === 6 ? 'https://s3.glbimg.com/v1/AUTH_c7def7ff66fe4b13beac0810ffbf780f/secure/home-share-e7d30f4.png' :
           'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085709/eventos-especiais_wkym1o.jpg',
    imagens: noticia.id === 1 ? [
      'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085720/camalote-pagina1_dz0ek4.jpg',
      'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085725/camalote-pagina2_ep900h.jpg',
      'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085740/camalote-pagina3_af3v7z.jpg'
    ] : noticia.id === 3 ? [
      'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085722/wonderlust-1_cnm4vl.jpg',
      'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085728/wonderlust-2_wn6zao.jpg'
    ] : undefined,
    link: noticia.id === 6 ? 'https://globoplay.globo.com/v/12066242/' : 
          noticia.id === 5 ? 'https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2023/09/12/macaquear-pratica-de-observacao-de-primatas-tem-potencial-de-crescimento-no-brasil.ghtml' :
          noticia.id === 4 ? 'https://www.mammalwatching.com/community-post/brazilian-primates-piaui-maranhao-para-and-matto-gross/' :
          noticia.id <= 3 ? '#' : noticia.link
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085720/camalote-pagina1_dz0ek4.jpg')` }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('theySpokeAboutUs.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('theySpokeAboutUs.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Reviews Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  {noticia.imagem ? (
                    <img 
                      src={noticia.imagem} 
                      alt={noticia.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full min-h-[200px] bg-gray-100 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-600">{noticia.source}</span>
                    </div>
                  )}
                  {noticia.exclusive && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                      <span>{t('theySpokeAboutUs.exclusiveContent')}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold mb-4">{noticia.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <span className="font-semibold">{noticia.source}</span>
                    <span>{noticia.date}</span>
                  </div>
                  {(noticia.id === 1 || noticia.id === 3) ? (
                    <div className="prose prose-lg max-w-none">
                      {noticia.fullContent.split('\n\n').map((paragrafo, index) => (
                        <p key={index} className="mb-4 text-gray-700 text-justify">{paragrafo}</p>
                      ))}
                      {noticia.imagens && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                          {noticia.imagens.map((imagem, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-md">
                              <img 
                                src={imagem} 
                                alt={`${noticia.title} - Page ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {noticia.link !== "#" && (
                        <div className="mt-8 flex justify-end">
                          <a 
                            href={noticia.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                          >
                            {t('theySpokeAboutUs.buttons.viewOriginalSite')}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-6 text-justify">{noticia.description}</p>
                      <button 
                        className={`flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${
                          expandedId === noticia.id ? 'font-semibold' : ''
                        }`}
                        onClick={() => toggleExpanded(noticia.id)}
                      >
                        <span>
                          {expandedId === noticia.id 
                            ? t('theySpokeAboutUs.buttons.showLess')
                            : t('theySpokeAboutUs.buttons.readMore')
                          }
                        </span>
                        <span className="text-xl">{expandedId === noticia.id ? '−' : '+'}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
              {expandedId === noticia.id && noticia.id !== 1 && noticia.id !== 3 && (
                <div className="border-t border-gray-100 p-8">
                  <div className="prose prose-lg max-w-none">
                    {noticia.fullContent.split('\n\n').map((paragrafo, index) => (
                      <p key={index} className="mb-4 text-gray-700 text-justify">{paragrafo}</p>
                    ))}
                    {noticia.imagens && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {noticia.imagens.map((imagem, index) => (
                          <div key={index} className="rounded-xl overflow-hidden shadow-md">
                            <img 
                              src={imagem} 
                              alt={`${noticia.title} - Page ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {noticia.link !== "#" && (
                    <div className="mt-8 flex justify-end">
                      <a 
                        href={noticia.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        {noticia.exclusive 
                          ? t('theySpokeAboutUs.buttons.watchOnGloboplay')
                          : t('theySpokeAboutUs.buttons.viewOriginalSite')
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FalaramDeNos; 