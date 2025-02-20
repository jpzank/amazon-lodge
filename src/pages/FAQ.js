import React, { useState } from 'react';
import PhotoCredit from '../components/PhotoCredit';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState({});

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739842419/Jardim_da_Amazônia-3851_hpelww.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const toggleItem = (sectionId, itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${sectionId}-${itemId}`]: !prev[`${sectionId}-${itemId}`]
    }));
  };

  const sections = [
    {
      id: 'accommodation',
      questions: ['roomTypes', 'roomAmenities']
    },
    {
      id: 'guides',
      questions: ['languages', 'specializedGuides']
    },
    {
      id: 'whatToBring',
      questions: ['clothing', 'equipment']
    },
    {
      id: 'birdwatching',
      questions: ['bestTime', 'species']
    },
    {
      id: 'tours',
      questions: ['types', 'duration']
    },
    {
      id: 'petPolicy',
      questions: ['allowed']
    },
    {
      id: 'reservations',
      questions: ['howTo', 'cancellation']
    },
    {
      id: 'location',
      questions: ['access', 'distance']
    },
    {
      id: 'facilitiesAndLeisure',
      questions: ['internet', 'activities']
    },
    {
      id: 'foodAndBeverage',
      questions: ['meals', 'drinks']
    },
    {
      id: 'checkInOut',
      questions: ['times', 'earlyArrival']
    },
    {
      id: 'dayUse',
      questions: ['availability']
    },
    {
      id: 'payment',
      questions: ['methods', 'international']
    },
    {
      id: 'photoAndEvents',
      questions: ['wedding']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center text-center text-white mb-16"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            {t('faq.hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            {t('faq.hero.subtitle')}
          </p>
        </div>
        <PhotoCredit photographer="Marlon Erthal" />
      </div>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {sections.map((section) => (
              <div key={section.id} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  {t(`faq.sections.${section.id}.title`)}
                </h3>
              <div className="space-y-4">
                  {section.questions.map((questionId, index) => (
                    <div key={questionId} className="bg-white rounded-xl shadow-md">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleItem(section.id, index)}
                      >
                        <h4 className="text-lg font-medium text-gray-900">
                          {t(`faq.sections.${section.id}.questions.${questionId}.question`)}
                        </h4>
                        <span className={`transform transition-transform duration-200 ${expandedItems[`${section.id}-${index}`] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                      <div className={`px-6 overflow-hidden transition-all duration-200 ${expandedItems[`${section.id}-${index}`] ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                        <p className="text-gray-600 whitespace-pre-line">
                          {t(`faq.sections.${section.id}.questions.${questionId}.answer`)}
                    </p>
                  </div>
                </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ; 