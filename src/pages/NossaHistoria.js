import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const NossaHistoria = () => {
  const { t } = useTranslation();
  
  const heroStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085697/almor-carmelita_tx0knl.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
  };

  // Animation variants for the timeline dots
  const dotVariants = {
    initial: { scale: 0, y: 0 },
    animate: { 
      scale: 1,
      y: [0, -4, 0],
      transition: {
        scale: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: 0.2
        },
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  // Animation variants for the timeline line
  const lineVariants = {
    initial: { height: 0 },
    animate: { 
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for the timeline cards
  const cardVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEO 
        title={t('meta.nossaHistoria.title')}
        description={t('meta.nossaHistoria.description')}
        image="https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085697/almor-carmelita_tx0knl.jpg"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div 
          className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
          style={heroStyle}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10"></div>
          <div className="relative z-20 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
              {t('ourHistory.hero.title')}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
              {t('ourHistory.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              {t('ourHistory.intro.description')}
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1048734981?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;sidedock=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="conheca_nossa_historia"
                  className="rounded-xl shadow-2xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                >
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16 relative">
              {/* Growing line container */}
              <motion.div 
                className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-1 bg-primary origin-top"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={lineVariants}
              />

              {/* Timeline items */}
              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.1980s.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.1980s.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.1980s.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.1986.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.1986.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.1986.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.1997.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.1997.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.1997.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.2000.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.2000.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.2000.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.2008.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.2008.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.2008.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.2017.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.2017.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.2017.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.2022.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.2022.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.2022.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 z-10"
                  variants={dotVariants}
                ></motion.div>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
                  variants={cardVariants}
                >
                  <h3 className="text-2xl font-semibold text-primary mb-2">{t('ourHistory.timeline.2024.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">{t('ourHistory.timeline.2024.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.2024.description')}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="relative pl-8 md:pl-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute w-6 h-6 bg-gradient-to-r from-primary to-purple-600 rounded-full -left-[11px] top-2 z-10 shadow-lg"
                  variants={{
                    initial: { scale: 0, y: 0 },
                    animate: { 
                      scale: 1,
                      y: [0, -6, 0],
                      transition: {
                        scale: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          delay: 0.2
                        },
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }
                    }
                  }}
                ></motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 border-2 border-primary/20"
                  variants={cardVariants}
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 text-center">{t('ourHistory.timeline.legacy.year')}</h3>
                  <h4 className="text-xl font-medium text-gray-900 mb-4 text-center">{t('ourHistory.timeline.legacy.title')}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('ourHistory.timeline.legacy.description')}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-semibold text-gray-900 mb-8">{t('ourHistory.mission.title')}</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                {t('ourHistory.mission.description')}
              </p>
              <Link 
                to="/estacao-pesquisa" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('ourHistory.mission.cta')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NossaHistoria; 