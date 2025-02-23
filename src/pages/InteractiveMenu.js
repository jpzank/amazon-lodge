import React, { useState } from 'react';
import { GiWineBottle, GiGrapes } from 'react-icons/gi';
import { CLOUDINARY_BASE_URL } from '../config/cloudinaryConfig';
import { useTranslation } from 'react-i18next';

function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState('food'); // 'food' or 'wine'
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-[#1a472a]"
        style={{
          backgroundImage: `url(${CLOUDINARY_BASE_URL}/v1739835351/Jardim_da_Amazônia-2855_asjqeo)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
            <img src="/Logo Jd Amazonia.png" alt={t('home.welcome.title')} className="h-24 w-auto mb-12" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t('menu.food.title')}</h1>
            <p className="text-xl text-gray-200">{t('gastronomy.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Meal Times and Service Information */}
      <div className="border-t border-b border-[#1a472a]/20 py-4 mb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {/* Operating Hours */}
              <div className="text-sm text-gray-600">
                <div className="mb-4">
                  <p className="text-[#1a472a] font-medium mb-2">{t('menu.schedule.operatingHours')}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#1a472a]">•</span>
                      <span>{t('menu.schedule.breakfastLabel')}: {t('menu.schedule.breakfast')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#1a472a]">•</span>
                      <span>{t('menu.schedule.lunchLabel')}: {t('menu.schedule.lunch')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#1a472a]">•</span>
                      <span>{t('menu.schedule.dinnerLabel')}: {t('menu.schedule.dinner')}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[#1a472a] font-medium mb-2">{t('menu.schedule.serviceTypes')}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#1a472a]">•</span>
                      <span>{t('menu.schedule.weekdays')}: {t('menu.schedule.dailySpecial')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#1a472a]">•</span>
                      <span>{t('menu.schedule.weekends')}: {t('menu.schedule.buffet')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#1a472a]">•</span>
                      <span>{t('menu.schedule.groups')}: {t('menu.schedule.buffet')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          {i18n.language.toUpperCase()}
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('food')}
              className={`px-6 py-4 font-semibold text-lg transition-colors duration-200 border-b-2 ${
                activeTab === 'food'
                  ? 'text-black border-black'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {t('menu.food.title')}
            </button>
            <button
              onClick={() => setActiveTab('wine')}
              className={`px-6 py-4 font-semibold text-lg transition-colors duration-200 border-b-2 ${
                activeTab === 'wine'
                  ? 'text-black border-black'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {t('menu.wine.title')}
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'food' ? (
          <div className="max-w-3xl mx-auto">
            {/* Non-alcoholic beverages */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.food.sections.nonAlcoholic.title')}
              </h2>
              
              <div className="space-y-8">
                {/* Sucos */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t('menu.food.sections.nonAlcoholic.juices.title')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.nonAlcoholic.juices.items.grapeAndLemonade')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <div className="flex flex-col items-end">
                          <span className="font-semibold whitespace-nowrap">R$ 20 <span className="text-sm text-gray-600">400ml</span></span>
                          <span className="font-semibold whitespace-nowrap">R$ 40 <span className="text-sm text-gray-600">950ml</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Águas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t('menu.food.sections.nonAlcoholic.water.title')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.nonAlcoholic.water.items.still')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 6 <span className="text-sm text-gray-600">500ml</span></span>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.nonAlcoholic.water.items.sparkling')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 8 <span className="text-sm text-gray-600">500ml</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Refrigerantes */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t('menu.food.sections.nonAlcoholic.softDrinks.title')}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-gray-800 flex-1">
                      {t('menu.food.sections.nonAlcoholic.softDrinks.items.list')}
                    </span>
                    <div className="ml-4 flex items-baseline">
                      <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                      <span className="font-semibold whitespace-nowrap">R$ 8</span>
                    </div>
                  </div>
                </div>

                {/* Energéticos */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t('menu.food.sections.nonAlcoholic.energyDrinks.title')}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-gray-800 flex-1">Monster Energy</span>
                    <div className="ml-4 flex items-baseline">
                      <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                      <span className="font-semibold whitespace-nowrap">R$ 18</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Alcoholic beverages */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.food.sections.alcoholic.title')}
              </h2>
              
              <div className="space-y-8">
                {/* Cervejas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t('menu.food.sections.alcoholic.beers.title')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">Heineken, Budweiser</span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 16 <span className="text-sm text-gray-600">{t('menu.food.sections.alcoholic.beers.items.longNeck')}</span></span>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">Brahma</span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 8 <span className="text-sm text-gray-600">{t('menu.food.sections.alcoholic.beers.items.can')}</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Drinks e Cachaças */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t('menu.food.sections.alcoholic.drinks.title')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.alcoholic.drinks.items.caipirinha')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 30</span>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.alcoholic.drinks.items.caipiroska')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 35</span>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.alcoholic.drinks.items.cachacaShot')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 12</span>
                      </div>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 flex-1">
                        {t('menu.food.sections.alcoholic.drinks.items.campari')}
                      </span>
                      <div className="ml-4 flex items-baseline">
                        <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                        <span className="font-semibold whitespace-nowrap">R$ 18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Appetizers and Snacks */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.food.sections.appetizers.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {t('menu.food.sections.appetizers.items.coldCuts.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.appetizers.items.coldCuts.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 40</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {t('menu.food.sections.appetizers.items.fishStrips.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.appetizers.items.fishStrips.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 60</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {t('menu.food.sections.appetizers.items.grilledCheese.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.appetizers.items.grilledCheese.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 25</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Dishes */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.food.sections.quickDishes.title')}
              </h2>
              <p className="text-sm text-gray-600 italic mb-6">
                {t('menu.food.sections.quickDishes.notice')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-baseline">
                  <span className="text-gray-800 flex-1">
                    {t('menu.food.sections.quickDishes.items.gnocchi.name')}
                  </span>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 45</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-gray-800">
                      {t('menu.food.sections.quickDishes.items.spaghetti.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.quickDishes.items.spaghetti.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 45</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Desserts */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.food.sections.desserts.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start group">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      {t('menu.food.sections.desserts.items.sagu.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.desserts.items.sagu.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 10 <span className="text-sm text-gray-600">100ml</span></span>
                  </div>
                </div>

                <div className="flex justify-between items-start group">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      {t('menu.food.sections.desserts.items.quickPie.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.desserts.items.quickPie.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 16</span>
                  </div>
                </div>

                <div className="flex justify-between items-start group">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      {t('menu.food.sections.desserts.items.iceCreamPudding.name')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('menu.food.sections.desserts.items.iceCreamPudding.description')}
                    </p>
                  </div>
                  <div className="ml-4 flex items-baseline">
                    <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                    <span className="font-semibold whitespace-nowrap">R$ 16</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Dietary Restrictions Notice */}
            <p className="text-center text-gray-600 italic mb-8 px-4">
              {t('menu.food.footer.dietaryRestrictions')}
            </p>

            {/* Footer with Review Box */}
            <footer className="text-center pt-8 pb-6">
              <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-yellow-400 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-gray-800 font-medium text-lg">
                      {t('menu.food.footer.review')}
                    </h3>
                  </div>
                  <a 
                    href="https://g.page/r/CRdcttfX4BbQEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#1a472a] text-white rounded-lg hover:bg-[#143d23] transition-colors font-medium"
                  >
                    {t('menu.food.footer.reviewButton')}
                  </a>
                  <div className="pt-2">
                  </div>
                </div>
              </div>
            </footer>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {/* Wine List Header */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <GiWineBottle className="text-2xl text-primary" />
              <div className="w-16 h-px bg-primary"></div>
              <GiGrapes className="text-2xl text-primary" />
            </div>

            {/* Red Wines */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.wine.sections.red.title')}
              </h2>
              
              <div className="space-y-8">
                {/* Argentina */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ARGENTINA</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">KALEU MALBEC-BONARDA</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 120</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Mendoza | Aitor Ider Balbo</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">ZAPA MALBEC</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 140</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Mendoza | Familia Falasconza</p>
                    </div>
                  </div>
                </div>

                {/* Chile */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">CHILE</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">RAVANAL SELECTION TERRIOR CARMENERE</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 120</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Valle Central | Vinos Ravanal</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">VIU MANENT RESERVA CARBERNET SAUVIGNON</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 170</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Valle Colchagua | Viu Manent</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">DON CAYTANO PINOT NOIR</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 120</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Valle Central</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sparkling and White Wines */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
                {t('menu.wine.sections.whiteAndSparkling.title')}
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium text-gray-800">BOSSA BRUT</h4>
                    <div className="ml-4 flex items-baseline">
                      <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                      <span className="font-semibold whitespace-nowrap">R$ 145</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Bento Gonçalves | Cave Hermann</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">CHILE</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">ZAPA TORRONTES</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 140</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Mendoza | Familia Falascomza</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">RAVANAL SELECTION TERRIOR SAUVIGNON BLANC</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 120</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Valle Central | Vinos Ravanal</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-medium text-gray-800">RAVANAL SELECTION TERRIOR CHARDONNAY</h4>
                        <div className="ml-4 flex items-baseline">
                          <div className="border-b border-dotted border-gray-300 flex-grow w-16"></div>
                          <span className="font-semibold whitespace-nowrap">R$ 120</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Valle Central | Vinos Ravanal</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dietary Restrictions Notice */}
            <p className="text-center text-gray-600 italic mb-8 px-4">
              {t('menu.food.footer.dietaryRestrictions')}
            </p>

            {/* Wine List Footer with Review Box */}
            <footer className="text-center pt-8 pb-6">
              <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-yellow-400 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-gray-800 font-medium text-lg">
                      {t('menu.food.footer.review')}
                    </h3>
                  </div>
                  <a 
                    href="https://g.page/r/CRdcttfX4BbQEBM/review" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#1a472a] text-white rounded-lg hover:bg-[#143d23] transition-colors font-medium"
                  >
                    {t('menu.food.footer.reviewButton')}
                  </a>
                  <div className="pt-2">
                  </div>
                </div>
              </div>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveMenu; 