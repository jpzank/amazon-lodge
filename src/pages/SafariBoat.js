import React from 'react';
import '../styles/SafariBoat.css';

function SafariBoat() {
  return (
    <div className="safari-boat">
      <div className="page-hero boat">
        <div className="hero-content">
          <h1>Safari Boat</h1>
          <p>Aventuras pelos Rios da Amazônia</p>
        </div>
      </div>

      <section className="rio-claro">
        <div className="container">
          <h2>Safari no Rio Claro</h2>
          <p className="rio-description">
            O Rio Claro, como revela o nome, um rio de águas muito claras que quanto mais avança a estação seca, 
            entre maio e setembro, mais transparentes ficam suas águas. Então, formam-se belas praias de areia 
            branca e sua água tem temperatura sempre agradável.
          </p>
          <p className="rio-wildlife">
            As matas de galeria ao longo do rio Claro e principalmente a vegetação de mata aberta ao longo dos lagos, 
            são hábitats do Conothraupis mesoleuca (tiê bicudo), registrado no local em 2006. O rio Claro é a 
            principal área conhecida de ocorrência da espécie.
          </p>
        </div>
      </section>

      <section className="wildlife">
        <div className="container">
          <h2>Vida Selvagem</h2>
          <p className="wildlife-intro">
            O Rio Claro e seus arredores são um refúgio para uma incrível diversidade de vida selvagem, cada expedição representa oportunidades de observar espécies fascinantes, como:
          </p>
          
          <div className="wildlife-grid">
            <div className="species-item">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/pirarucu.png')` }}></div>
              <div className="species-content">
                <span className="species-name">Arapaima gigas</span>
                <span className="common-name">(Pirarucu)</span>
                <p className="species-description">
                  O Pirarucu é um dos maiores peixes de água doce do mundo, podendo atingir até 3 metros 
                  de comprimento e pesar mais de 200 kg.
                </p>
              </div>
            </div>

            <div className="species-item">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/pintado.jpg')` }}></div>
              <div className="species-content">
                <span className="species-name">Pseudoplatystoma corruscans</span>
                <span className="common-name">(Pintado)</span>
                <p className="species-description">
                  O Pintado é um peixe de couro com coloração acinzentada e manchas escuras, podendo 
                  alcançar até 1,8 metro de comprimento e pesar cerca de 86 kg.
                </p>
              </div>
            </div>

            <div className="species-item">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/martim.jpg')` }}></div>
              <div className="species-content">
                <span className="species-name">Megaceryle torquata</span>
                <span className="common-name">(Martim-pescador-grande)</span>
                <p className="species-description">
                  Ave pescadora de coloração azulada e peito branco, especialista em capturar peixes 
                  com seus mergulhos precisos.
                </p>
              </div>
            </div>

            <div className="species-item">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/bigua.jpg')` }}></div>
              <div className="species-content">
                <span className="species-name">Nannopterum brasilianum</span>
                <span className="common-name">(Biguá)</span>
                <p className="species-description">
                  Ave mergulhadora comum em rios e lagos, de plumagem escura, exímia nadadora que 
                  pode permanecer submersa por longos períodos.
                </p>
              </div>
            </div>

            <div className="species-item">
              <div className="species-image" style={{ backgroundImage: `url('src/images/birdwatching/sucuri.jpg')` }}></div>
              <div className="species-content">
                <span className="species-name">Eunectes murinus</span>
                <span className="common-name">(Sucuri ou Anaconda)</span>
                <p className="species-description">
                  Serpente aquática de grande porte, frequentemente encontrada em corpos d'água da região, 
                  perfeitamente adaptada ao ambiente aquático.
                </p>
              </div>
            </div>
          </div>

          <p className="wildlife-note">
            Além destas espécies emblemáticas, o Rio Claro abriga uma extraordinária variedade de vida selvagem, 
            incluindo diversos peixes amazônicos, aves aquáticas, jacarés e tartarugas. Cada expedição oferece 
            oportunidades especiais de observação da fauna em seu habitat natural.
          </p>
        </div>
      </section>

      <section className="safety-info">
        <div className="container">
          <h2>Segurança e Conforto</h2>
          <div className="safety-grid">
            <div className="safety-card">
              <div className="safety-icon">🦺</div>
              <h3>Segurança Garantida</h3>
              <ul>
                <li>Coletes salva-vidas</li>
                <li>Kit primeiros socorros</li>
                <li>Comunicação por rádio</li>
                <li>Controle do limite de passageiros</li>
              </ul>
            </div>

            <div className="safety-card">
              <div className="safety-icon">🌡️</div>
              <h3>Para o seu conforto, traga:</h3>
              <ul>
                <li>Protetor solar indispensável</li>
                <li>Água mineral para hidratação</li>
                <li>Repelente para sua proteção contra insetos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-cta">
        <div className="container">
          <h2>Reserve Sua Aventura</h2>
          <p>
            Embarque em uma jornada inesquecível pelos rios da Amazônia
          </p>
          <button className="btn-primary" onClick={() => window.open('https://book.omnibees.com/hotel/19972?lang=pt-BR&currencyId=16&version=4', '_blank')}>
            Reserve Agora
          </button>
        </div>
      </section>
    </div>
  );
}

export default SafariBoat; 