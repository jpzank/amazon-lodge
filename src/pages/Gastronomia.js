import React from 'react';
import PhotoCredit from '../components/PhotoCredit';
import { GiCookingPot } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Gastronomia = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('meta.gastronomia.title')}
        description={t('meta.gastronomia.description')}
        image="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085785/gatronomia-hero_kqnp26.jpg"
        canonicalUrl="https://www.jardimdaamazonia.com/gastronomia"
        noindex={false}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085785/gatronomia-hero_kqnp26.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
              {t('gastronomy.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
              {t('gastronomy.hero.subtitle')}
            </p>
          </div>
          <PhotoCredit photographer="Marlon Erthal" />
        </div>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-6 mb-12">
                <span>
                  <GiCookingPot className="text-4xl text-primary" />
                </span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-justify mb-8">
                {t('gastronomy.intro.description1')}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                {t('gastronomy.intro.description2')}
              </p>
            </div>
          </div>
        </section>

        {/* Food Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Gallery Items */}
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842557/Jardim_da_Amazônia-3979_eupwqn.jpg"
                    alt={t('gastronomy.gallery.traditionalDishes.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.gallery.traditionalDishes.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.gallery.traditionalDishes.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739922069/Jardim_da_Amazônia-2702_geb69g.jpg"
                    alt={t('gastronomy.gallery.desserts.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.gallery.desserts.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.gallery.desserts.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739922087/Jardim_da_Amazônia-2795_cq11f5.jpg"
                    alt={t('gastronomy.gallery.breakfast.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.gallery.breakfast.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.gallery.breakfast.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chef Statement Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
              <div className="lg:flex-shrink-0 w-full lg:w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1739921997/Jardim_da_Amazônia-2322_ojurek.jpg"
                  alt="Chef José Sérgio"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-semibold text-primary mb-8">{t('gastronomy.chefStatement.title')}</h2>
                <blockquote className="text-lg leading-relaxed text-gray-700 italic pl-8 border-l-4 border-primary">
                  <p className="mb-6">
                    {t('gastronomy.chefStatement.quote1')}
                  </p>
                  <p className="mb-6">
                    {t('gastronomy.chefStatement.quote2')}
                  </p>
                  <footer className="font-semibold text-primary mt-8 not-italic">
                    {t('gastronomy.chefStatement.author')}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Ingredientes Locais Card */}
                <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t('gastronomy.localIngredients.title')}</h3>
                  <p className="text-gray-600 text-justify">{t('gastronomy.localIngredients.description')}</p>
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085776/pratos-tipicos_f4meuw.png"
                    alt={t('gastronomy.additionalGallery.typicalDishes.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.additionalGallery.typicalDishes.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.additionalGallery.typicalDishes.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085770/sobremesas-especiais_osgafx.png"
                    alt={t('gastronomy.additionalGallery.specialDesserts.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.additionalGallery.specialDesserts.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.additionalGallery.specialDesserts.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085763/prato-especial-do-chef_w8ep8h.png"
                    alt={t('gastronomy.additionalGallery.chefDishes.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.additionalGallery.chefDishes.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.additionalGallery.chefDishes.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer group">
                  <img
                    src="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085756/cafe-da-manha_frcj7z.png"
                    alt={t('gastronomy.additionalGallery.breakfast.title')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 text-shadow">{t('gastronomy.additionalGallery.breakfast.title')}</h3>
                    <p className="text-sm text-white text-shadow">{t('gastronomy.additionalGallery.breakfast.subtitle')}</p>
                  </div>
                  <PhotoCredit photographer="Marlon Erthal" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gastronomia; 