import React from 'react';
import '../styles/Birdwatching.css';

function Birdwatching() {
  return (
    <div className="birdwatching">
      <div className="page-hero birdwatching">
        <div className="hero-content">
          <h1>Birdwatching</h1>
          <p>Top Hotspot para Observação de Aves no Brasil</p>
        </div>
      </div>

      <section className="hotspot-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Reconhecimento Internacional</h2>
            <div className="recognition-badges">
              <div className="badge">
                <span className="number">Top 3</span>
                <span className="label">Hotspot Brasil</span>
              </div>
              <div className="badge">
                <span className="number">Top 2</span>
                <span className="label">Mato Grosso</span>
              </div>
              <div className="badge">
                <span className="number">587</span>
                <span className="label">Espécies Catalogadas</span>
              </div>
            </div>
            <p className="highlight-text">
              O Jardim da Amazônia alcançou em 2024 o expressivo número de 587 espécies de aves catalogadas 
              pelo E-bird/The Cornell Lab.
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
              <div className="species-image" style={{ backgroundImage: `url('/src/images/birdwatching/tie-bicudo.jpg')` }}>
                <span className="status-badge cr">CR</span>
              </div>
              <div className="species-content">
                <h3>Tiê-bicudo</h3>
                <p className="scientific-name">Conothraupis mesoleuca</p>
                <p className="species-description">
                  Ave endêmica do Brasil, descrita em 1939 durante a expedição de Claude Levi Strauss. 
                  O Rio Claro representa a quarta área conhecida de ocorrência desta espécie rara.
                </p>
              </div>
            </div>

            {/* Quase Ameaçada (NT) */}
            <div className="species-card">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/curica.jpg')` }}>
                <span className="status-badge nt">NT</span>
              </div>
              <div className="species-content">
                <h3>Curica-de-bochecha-laranja</h3>
                <p className="scientific-name">Pyrilia barrabandi</p>
                <p className="species-description">
                  Papagaio com cabeça preta, mancha branca nos olhos e bochechas laranjas. 
                  Espetaculares manchas coloridas nas asas contrastam com o corpo verde.
                </p>
              </div>
            </div>

            <div className="species-card">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/mutum.jpg')` }}>
                <span className="status-badge nt">NT</span>
              </div>
              <div className="species-content">
                <h3>Mutum-cavalo</h3>
                <p className="scientific-name">Mitu tuberosum</p>
                <p className="species-description">
                  Ave grande escura de florestas não perturbada. Seu bico vermelho com uma protuberância 
                  é facilmente reconhecível.
                </p>
              </div>
            </div>

            {/* Pouco Preocupante (LC) */}
            <div className="species-card">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/anambe.jpg')` }}>
                <span className="status-badge lc">LC</span>
              </div>
              <div className="species-content">
                <h3>Anambé-preto</h3>
                <p className="scientific-name">Cephalopterus ornatus</p>
                <p className="species-description">
                  Fantástica ave amazônica que parece um enorme corvo, com crista espessa, 
                  "trança" pendente na garganta e olhos claros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="biodiversity">
        <div className="container">
          <h2>Biodiversidade</h2>
          <p className="section-intro">
          Em um cenário singular onde o Cerrado encontra a Amazônia, nosso lodge oferece a rara oportunidade de 
          vivenciar a interação de duas das mais ricas biodiversidades do planeta.
          </p>
          <div className="species-categories">
            <div className="category">
              <h3>Espécies Amazônicas</h3>
              <ul>
                <li>Capitão-de-cinta (Capito dayi) - VU</li>
                <li>Coroa-de-fogo (Heterocercus linteatus) - LC</li>
                <li>Cambaxirra-cinzenta (Odontorchilus cinereus) - NT</li>
                <li>Topetinho-do-brasil-central (Lophornis gouldii) - VU</li>
              </ul>
            </div>
            <div className="category">
              <h3>Destaques Regionais</h3>
              <ul>
                <li>Uiraçu (Morphnus guianensis) - NT</li>
                <li>Urubu-rei (Sarcoramphus papa) - LC</li>
                <li>Limpa-folha-do-buriti (Berlepschia rikeri) - LC</li>
                <li>Tucano-de-papo-branco (Ramphastos tucanus) - VU</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="observation-spots">
        <div className="container">
          <h2>Pontos de Observação</h2>
          <div className="spots-grid">
            <div className="spot-card">
              <h3>Matas Ciliares do Rio Claro</h3>
              <p>
                Habitat do raro Tiê-bicudo e diversas espécies amazônicas. A vegetação aberta ao 
                longo dos lagos oferece condições essenciais para observação.
              </p>
            </div>
            <div className="spot-card">
              <h3>Trilha do Jatobá</h3>
              <p>
                Local privilegiado para observação do Capitão-de-cinta e outras espécies florestais.
              </p>
            </div>
            <div className="spot-card">
              <h3>Lagoa do Tiê-bicudo</h3>
              <p>
                Tour especial de barco para observação do Tiê-bicudo e outras espécies aquáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="special-tours">
        <div className="container">
          <h2>Tour Especial de Birdwatching</h2>
          <div className="tour-details">
            <div className="tour-time">
              <h3>Horário</h3>
              <p>Saída às 5:30h da manhã</p>
            </div>
            <div className="tour-description">
              <h3>Roteiro</h3>
              <ul>
                <li>Safari de barco até a "Lagoa do Tiê-bicudo"</li>
                <li>Observação de aves no Rio Claro e Lagos</li>
                <li>Parada na "Trilha da Cabana" para espécies florestais</li>
                <li>Possibilidade de observar o Macaco-aranha-de-cara-preta</li>
                <li>Retorno para almoço no lodge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="references">
        <div className="container">
          <h2>Referências Internacionais</h2>
          <div className="reference-links">
            <a href="https://ebird.org/hotspot/L968651" target="_blank" rel="noopener noreferrer">E-Bird</a>
            <a href="https://datazone.birdlife.org/site/factsheet/rio-claro-iba-brazil" target="_blank" rel="noopener noreferrer">BirdLife International</a>
            <a href="https://www.wikiaves.com.br/municipio_5107305" target="_blank" rel="noopener noreferrer">WikiAves</a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Reserve Sua Experiência</h2>
          <p>Venha descobrir por que somos um dos principais destinos de birdwatching do Brasil</p>
          <button className="btn-primary" onClick={() => window.open('https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4', '_blank')}>
            Fazer Reserva
          </button>
        </div>
      </section>
    </div>
  );
}

export default Birdwatching; 