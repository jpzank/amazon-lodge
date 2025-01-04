import React from 'react';
import '../styles/Primatas.css';

function Primatas() {
  return (
    <div className="primatas">
      <div className="page-hero primatas">
        <div className="hero-content">
          <h1>Observação de Primatas</h1>
          <p>Uma aventura em busca de importantes primatas da região sul da Amazônia</p>
        </div>
      </div>

      <section className="intro">
        <div className="container">
          <div className="intro-content">
            <p className="highlight-text">
              O Jardim da Amazônia, situado no município de São José do Rio Claro, no Chapadão dos Parecis, 
              é um ponto de convergência entre o Cerrado e a Floresta Amazônica, destacando-se como berço de 
              numerosas nascentes e de uma biodiversidade excepcional.
            </p>
            <p className="highlight-text">
              Este ambiente abriga mais de 30 espécies de mamíferos de médio e grande porte, incluindo 07 espécies 
              de primatas, sendo alguns criticamente em perigo de extinção e endêmicos do norte de MT.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-species">
        <div className="container">
          <h2>Espécies Emblemáticas</h2>
          <div className="species-grid">
            {/* Criticamente em Perigo (CR) */}
            <div className="species-card">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/zogue-zogue.jpg')` }}>
                <span className="status-badge cr">CR</span>
              </div>
              <div className="species-content">
                <h3>Zogue-zogue-do-mato-grosso</h3>
                <p className="scientific-name">Plecturocebus grovesi</p>
                <p className="english-name">Mato Grosso Titi Monkey</p>
                <p className="species-description">
                  Primata criticamente ameaçado, endêmico do norte de Mato Grosso, encontrado entre os rios 
                  Teles Pires e Arinos. Uma das 25 espécies de primatas mais ameaçadas do planeta.
                </p>
              </div>
            </div>

            {/* Vulnerável (VU) */}
            <div className="species-card">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/parauacu.jpg')` }}>
                <span className="status-badge vu">VU</span>
              </div>
              <div className="species-content">
                <h3>Parauacu</h3>
                <p className="scientific-name">Pithecia mittermeieri</p>
                <p className="english-name">Tapajo's Saki Monkey</p>
                <p className="species-description">
                  Espécie vulnerável que atua como jardineiro da floresta, dispersando sementes de vários 
                  tamanhos e durezas. Atualmente é objeto de estudo de doutorado focado em sua distribuição e conservação.
                </p>
              </div>
            </div>

            <div className="species-card">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/macaco-aranha.jpg')` }}>
                <span className="status-badge vu">VU</span>
              </div>
              <div className="species-content">
                <h3>Macaco-aranha-da-cara-preta</h3>
                <p className="scientific-name">Ateles chamek</p>
                <p className="english-name">Black-faced Spider Monkey</p>
                <p className="species-description">
                  O maior primata frugívoro da região, classificado como Vulnerável no Brasil e Em Perigo globalmente. 
                  Habita florestas altas, chuvosas, inundáveis ou em terra firme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="program">
        <div className="container">
          <h2>Nossos Roteiros Incluem</h2>
          <div className="activities-list">
            <ul>
              <li>Safari fotográfico</li>
              <li>Observação do Parauacu</li>
              <li>Observação de saguis e macacos-aranha</li>
              <li>Observação do Zogue-zogue-do-mato-grosso no rio Arinos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="optional-tour">
        <div className="container">
          <h2>Opcional: Aldeia Parecis</h2>
          <div className="optional-content">
            <p>
            Como opção adicional, é possível conhecer a cultura indígena dos Parecis em Campo Novo dos Parecis.
            A experiência inclui a oportunidade de aprender sobre o modo de vida tradicional, os costumes e as crenças
            dessa comunidade, além de uma visita às cachoeiras da região, um refúgio natural ideal para relaxar e admirar
            a beleza do Cerrado.
            </p>
          </div>
        </div>
      </section>

      <section className="recommendations">
        <div className="container">
          <h2>Recomendações</h2>
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <h3>O que Levar</h3>
              <ul>
                <li>Roupas leves e confortáveis (manga comprida)</li>
                <li>Calçados fechados para caminhada</li>
                <li>Proteção (chapéu, repelente, protetor solar)</li>
                <li>Equipamentos (binóculos, lanterna, garrafa d'água)</li>
              </ul>
            </div>
            <div className="recommendation-card">
              <h3>Melhor Época</h3>
              <p>
                O Sul da Amazônia possui clima quente e úmido. Janeiro a abril: período de chuvas com rios cheios. 
                Junho a setembro: estação seca com águas transparentes e praias de areia branca.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="research">
        <div className="container">
          <h2>Macaquear no Mato Grosso</h2>
          <div className="research-content">
            <p>
              O Brasil é o país com maior diversidade de primatas no mundo. Mato Grosso abriga 29 espécies 
              distribuídas entre Pantanal, Cerrado e Amazônia, tornando-o equivalente ao 13º país em 
              diversidade de primatas.
            </p>
            <p>
              "Macaquear" é uma iniciativa do Instituto Ecótono em parceria com a Sociedade Brasileira de 
              Primatologia, que incentiva a observação responsável de primatas como ferramenta de conservação 
              e desenvolvimento local.
            </p>
          </div>
        </div>
      </section>

      <section className="primate-route">
        <div className="container">
          <h2>Rota de Primatas do Mato Grosso</h2>
          <div className="route-content">
            <p className="route-intro">
              O Brasil é o país com maior número de espécies de primatas do mundo, e Mato Grosso, 
              se fosse um país, estaria entre os dez primeiros. Esta riqueza deve-se à variedade de 
              biomas e aos grandes rios que atuam como barreiras geográficas.
            </p>
            
            <div className="route-box">
              <h3>Sobre a Rota</h3>
              <p>
                Desde 2023, o Instituto Ecótono em parceria com as pousadas Jardim da Amazônia e 
                Cristalino Lodge desenvolvem uma rota que permite observar 14 espécies em sete locais, 
                em um roteiro de 15 dias.
              </p>
              
              <div className="route-features">
                <div className="feature">
                  <h4>Destinos</h4>
                  <p>São José do Rio Claro • Sinop • Alta Floresta</p>
                </div>
                <div className="feature">
                  <h4>Benefícios</h4>
                  <p>Ciência cidadã • Pesquisa acadêmica • Turismo sustentável • Renda local</p>
                </div>
              </div>
            </div>

            <p className="route-note">
              Todos os envolvidos seguem as boas práticas de observação de vida silvestre, contribuindo 
              para a conservação das florestas.
            </p>
          </div>
        </div>
      </section>

      <section className="references">
        <div className="container">
          <h2>Referências e Clipping</h2>
          <div className="reference-links">
            <a href="https://www.midiajur.com.br/midia-ciencia/pesquisador-da-ufmt-participa-de-evento-na-malasia-discutindo-a-observacao-de-primatas-como-alternativa-de-renda-e-conservacao/52673" target="_blank" rel="noopener noreferrer">
              Congresso de Primatologia
            </a>
            <a href="https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2023/09/12/macaquear-pratica-de-observacao-de-primatas-tem-potencial-de-crescimento-no-brasil.ghtml" target="_blank" rel="noopener noreferrer">
              G1 - Terra da Gente
            </a>
            <a href="https://oeco.org.br/reportagens/um-macaco-encurralado-pelo-desmatamento/" target="_blank" rel="noopener noreferrer">
              O Eco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Primatas; 