import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NossaHistoria = () => {
  const heroStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1739834451/Jardim_da_Amazônia-4000_zyxwvu.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={heroStyle}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Nossa História
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            Uma jornada de preservação e amor pela natureza
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            O Jardim da Amazônia é mais do que uma pousada - é a história de uma família que 
            dedicou sua vida à preservação da natureza e ao desenvolvimento sustentável do 
            ecoturismo no Brasil.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">Anos 1980</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">O Início da Jornada</h4>
                <p className="text-gray-600 leading-relaxed">
                  A história começa com a chegada da família Zanchet, vindos do Rio Grande do Sul 
                  para Mato Grosso.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">1986</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Construção da Casa Original</h4>
                <p className="text-gray-600 leading-relaxed">
                  A fundação desta casa foi construída do zero, marcando o início físico 
                  da nossa presença neste pedaço da Amazônia.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">1997</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Nascimento da Pousada</h4>
                <p className="text-gray-600 leading-relaxed">
                  Por sugestão de um amigo, a ideia de construir uma pousada ganhou vida. 
                  Raquel Zanchet e Carmelita Zanchet dão início à Pousada Jardim da Amazônia, 
                  com a visão de desenvolver o ecoturismo brasileiro. No mesmo ano, Almor e 
                  Carmelita Zanchet investem no laboratório de piscicultura e iniciam as 
                  atividades de observação de aves, marcando o começo de uma nova era para 
                  o turismo ecológico na região.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">2000</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Início do Birdwatching</h4>
                <p className="text-gray-600 leading-relaxed">
                  Começamos a receber os primeiros grupos dedicados à observação de aves, 
                  estabelecendo as bases para nos tornarmos um destino reconhecido para 
                  birdwatching na Amazônia.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">2008</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Descoberta do Tiê-Bicudo</h4>
                <p className="text-gray-600 leading-relaxed">
                  Um marco importante para a região com o registro do Tiê-Bicudo (Conothraupis mesoleuca), 
                  uma espécie criticamente em extinção. Esta descoberta ressalta a importância da nossa 
                  área para a conservação de espécies raras.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">2017</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Global Big Day</h4>
                <p className="text-gray-600 leading-relaxed">
                  Participação no Global Big Day, um dia dedicado ao conhecimento e 
                  catalogação das aves da região, colocando nossa área no mapa mundial 
                  de observação de aves.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">2022</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Pesquisas sobre Primatas</h4>
                <p className="text-gray-600 leading-relaxed">
                  Início das pesquisas dedicadas aos primatas da região, expandindo nosso 
                  conhecimento sobre a fauna local.
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
                <h3 className="text-2xl font-semibold text-primary mb-2">2024</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4">Rota dos Primatas</h4>
                <p className="text-gray-600 leading-relaxed">
                  Lançamento oficial da Rota dos Primatas de Mato Grosso, um novo capítulo 
                  em nossa história de conservação e ecoturismo.
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
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 text-center">1997 - Presente</h3>
                <h4 className="text-xl font-medium text-gray-900 mb-4 text-center">Um Legado de Preservação</h4>
                <p className="text-gray-600 leading-relaxed">
                  O trabalho pioneiro da família resultou na preservação de uma extensa área 
                  de floresta amazônica primária intocada. Devotos da natureza, transformaram 
                  o Jardim da Amazônia em um importante santuário ecológico, onde a 
                  biodiversidade prospera e visitantes de todo o mundo podem testemunhar a 
                  riqueza da flora e fauna amazônica em seu estado mais puro.
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
            <h2 className="text-4xl font-semibold text-gray-900 mb-8">Nossa Missão Continua</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Hoje, o Jardim da Amazônia é um testemunho vivo do compromisso da família 
              Zanchet com a preservação ambiental. Continuamos a trabalhar para manter 
              vivo o sonho de nossos fundadores, proporcionando experiências únicas de 
              ecoturismo enquanto protegemos este precioso pedaço da Amazônia para as 
              futuras gerações.
            </p>
            <Link 
              to="/estacao-pesquisa" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Conheça Nossa Estação de Pesquisa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NossaHistoria; 