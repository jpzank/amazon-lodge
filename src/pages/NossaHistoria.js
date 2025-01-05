import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';
import '../styles/NossaHistoria.css';

function NossaHistoria() {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('nossa-historia/hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="nossa-historia">
      <div className="page-hero history" style={heroStyle}>
        <div className="hero-content">
          <h1>Nossa História</h1>
          <p>Uma jornada de preservação e amor pela natureza</p>
        </div>
      </div>

      <section className="history-intro">
        <div className="container">
          <p className="intro-text">
            O Jardim da Amazônia é mais do que uma pousada - é a história de uma família que 
            dedicou sua vida à preservação da natureza e ao desenvolvimento sustentável do 
            ecoturismo no Brasil.
          </p>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Anos 1980</h3>
              <h4>O Início da Jornada</h4>
              <p>
                A história começa com a chegada da família Zanchet, vindos do Rio Grande do Sul 
                para Mato Grosso.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>1986</h3>
              <h4>Construção da Casa Original</h4>
              <p>
                A fundação desta casa foi construída do zero, marcando o início físico 
                da nossa presença neste pedaço da Amazônia.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>1997</h3>
              <h4>Nascimento da Pousada</h4>
              <p>
                Por sugestão de um amigo, a ideia de construir uma pousada ganhou vida. 
                Raquel Zanchet e Carmelita Zanchet dão início à Pousada Jardim da Amazônia, 
                com a visão de desenvolver o ecoturismo brasileiro. No mesmo ano, Almor e 
                Carmelita Zanchet investem no laboratório de piscicultura e iniciam as 
                atividades de observação de aves, marcando o começo de uma nova era para 
                o turismo ecológico na região.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2000</h3>
              <h4>Início do Birdwatching</h4>
              <p>
                Começamos a receber os primeiros grupos dedicados à observação de aves, 
                estabelecendo as bases para nos tornarmos um destino reconhecido para 
                birdwatching na Amazônia.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2008</h3>
              <h4>Descoberta do Tie-Bicudo</h4>
              <p>
                Um marco importante para a região com o registro do Tie-Bicudo (Conothraupis mesoleuca), 
                uma espécie criticamente em extinção. Esta descoberta ressalta a importância da nossa 
                área para a conservação de espécies raras.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2017</h3>
              <h4>Global Big Day</h4>
              <p>
                Participação no Global Big Day, um dia dedicado ao conhecimento e 
                catalogação das aves da região, colocando nossa área no mapa mundial 
                de observação de aves.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2022</h3>
              <h4>Pesquisas sobre Primatas</h4>
              <p>
                Início das pesquisas dedicadas aos primatas da região, expandindo nosso 
                conhecimento sobre a fauna local.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2024</h3>
              <h4>Rota dos Primatas</h4>
              <p>
                Lançamento oficial da Rota dos Primatas de Mato Grosso, um novo capítulo 
                em nossa história de conservação e ecoturismo.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>1997 - Presente</h3>
              <h4>Um Legado de Preservação</h4>
              <p>
                O trabalho pioneiro da família resultou na preservação de uma extensa área 
                de floresta amazônica primária intocada. Devotos da natureza, transformaram 
                o Jardim da Amazônia em um importante santuário ecológico, onde a 
                biodiversidade prospera e visitantes de todo o mundo podem testemunhar a 
                riqueza da flora e fauna amazônica em seu estado mais puro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy">
        <div className="container">
          <div className="legacy-content">
            <h2>Nossa Missão Continua</h2>
            <p>
              Hoje, o Jardim da Amazônia é um testemunho vivo do compromisso da família 
              Zanchet com a preservação ambiental. Continuamos a trabalhar para manter 
              vivo o sonho de nossos fundadores, proporcionando experiências únicas de 
              ecoturismo enquanto protegemos este precioso pedaço da Amazônia para as 
              futuras gerações.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NossaHistoria; 