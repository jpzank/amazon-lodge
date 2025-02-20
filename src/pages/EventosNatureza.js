import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import PhotoCredit from '../components/PhotoCredit';
import { 
  MdLaptop,
  MdPhotoCamera,
  MdFavorite,
  MdPalette,
  MdOutlineChurch,
  MdOutlineCake
} from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';

const EventosNatureza = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842552/Jardim_da_Amazônia-3930_ehdgyr.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const getFeatures = (eventId) => {
    try {
      const features = t(`natureEvents.events.${eventId}.features`, { returnObjects: true });
      return Array.isArray(features) ? features : [];
    } catch (error) {
      console.warn(`Could not get features for event ${eventId}:`, error);
      return [];
    }
  };

  const events = [
    {
      id: 'photoSessions',
      title: t('natureEvents.events.photoSessions.title'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739998252/PHOTO-2025-02-19-12-49-40_pbvwxb.jpg',
      icon: <MdPhotoCamera />,
      features: getFeatures('photoSessions'),
      quote: t('natureEvents.events.photoSessions.quote')
    },
    {
      id: 'weddingNight',
      title: t('natureEvents.events.weddingNight.title'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739919800/Jardim_da_Amazônia-476_hmn9lp.jpg',
      icon: <MdFavorite />,
      features: getFeatures('weddingNight'),
      quote: t('natureEvents.events.weddingNight.quote')
    },
    {
      id: 'gatherings',
      title: t('natureEvents.events.gatherings.title'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085709/eventos-especiais_wkym1o.jpg',
      icon: <MdOutlineCake />,
      features: getFeatures('gatherings'),
      quote: t('natureEvents.events.gatherings.quote')
    },
    {
      id: 'artisticResidencies',
      title: t('natureEvents.events.artisticResidencies.title'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739999196/vestido_artistica_zosis4.jpg',
      icon: <MdPalette />,
      features: getFeatures('artisticResidencies'),
      quote: t('natureEvents.events.artisticResidencies.quote')
    },
    {
      id: 'miniWeddings',
      title: t('natureEvents.events.miniWeddings.title'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1739998951/aliancas-e-flores_ommkzm.jpg',
      icon: <MdOutlineChurch />,
      features: getFeatures('miniWeddings'),
      quote: t('natureEvents.events.miniWeddings.quote')
    },
    {
      id: 'digitalNomad',
      title: t('natureEvents.events.digitalNomad.title'),
      image: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085711/reuniao-executiva_ouxhas.jpg',
      icon: <MdLaptop />,
      features: getFeatures('digitalNomad'),
      quote: t('natureEvents.events.digitalNomad.quote')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('natureEvents.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('natureEvents.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Insights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('natureEvents.intro.title')}</h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:h-48">
                  <div className="md:w-1/4">
                    <img 
                      src={event.image}
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                      <ul className="space-y-2 flex-1">
                        {event.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <BsCheckCircle className="text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 italic flex-1">
                        {event.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">{t('natureEvents.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-12">
            {t('natureEvents.cta.description')}
          </p>
          <button 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://wa.me/556540420595', '_blank')}
          >
            {t('natureEvents.cta.contact')}
          </button>
        </div>
      </section>
    </div>
  );
}

export default EventosNatureza; 