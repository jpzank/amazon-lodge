import React from 'react';
import '../styles/EstacaoPesquisa.css';
import { getFolderImage } from '../config/cloudinaryConfig';

function EstacaoPesquisa() {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('estacao-pesquisa/hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="estacao-pesquisa">
      <div className="page-hero" style={heroStyle}>
        <div className="hero-content">
          <h1>Estação de Pesquisa Jardim da Amazônia</h1>
          <p>Preservando a biodiversidade através da ciência e educação ambiental</p>
        </div>
      </div>

      <section className="research-intro">
        <div className="container">
          <p className="intro-text">
            A Estação de Pesquisa Jardim da Amazônia, em sua fase inicial, conta com a infraestrutura da 
            Pousada Jardim da Amazônia, um dos locais do Brasil mais visitados por observadores de aves. 
            Nossa estação é um centro dedicado à pesquisa, educação ambiental e conservação, oferecendo 
            espaço para oficinas, cursos e reuniões através de três programas integrados.
          </p>
        </div>
      </section>

      <section className="biodiversity">
        <div className="container">
          <h2>Biodiversidade</h2>
          <p>
            Nossa região é privilegiada por estar localizada em uma zona de transição Amazônia-Cerrado, 
            abrigando uma extraordinária diversidade de espécies. Aqui, é possível encontrar tanto 
            seriemas e macacos-prego (Sapajus cay) típicos do Cerrado, quanto anambés e 
            macacos-aranha (Ateles chamek) característicos da Amazônia.
          </p>
          <p className="environmental-note">
            A preservação dessas florestas é vital não apenas para a sobrevivência desta rica 
            biodiversidade, mas também para garantir a existência do Rio Claro, que integra a 
            importante bacia hidrográfica que alimenta os rios Arinos, Juruena, Tapajós e Amazonas.
          </p>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <h2>Nossos Programas</h2>
          
          <div className="program-card">
            <h3>Monitoramento da Biodiversidade</h3>
            <p>
              Pesquisadores, estudantes e voluntários trabalham na coleta sistemática de 
              informações sobre nossa biodiversidade local, utilizando métodos científicos. 
              Construímos uma base de dados com imagens e sons que fundamentam nossas 
              estratégias de conservação.
            </p>
          </div>

          <div className="program-card">
            <h3>Sensibilização Ambiental</h3>
            <p>
              Transformamos o conhecimento científico em materiais informativos e trilhas 
              autoguiadas, com o objetivo de conscientizar sobre nossa responsabilidade 
              no cuidado com o planeta.
            </p>
          </div>

          <div className="program-card">
            <h3>Ciência Cidadã</h3>
            <p>
              Convidamos todos a participarem ativamente da pesquisa científica! Você pode 
              contribuir com registros de avistamentos, participar de cursos e oficinas, 
              tendo seus vídeos e fotografias incluídos em nosso Acervo Digital.
            </p>
          </div>
        </div>
      </section>

      <section className="research-methods">
        <div className="container">
          <h2>Metodologia de Pesquisa</h2>
          <div className="method-grid">
            <div className="method-item">
              <h3>Transectos</h3>
              <p>
                Percorremos trilhas documentando avistamentos, vocalizações e vestígios da fauna, 
                utilizando tecnologia para mapear e quantificar nossa biodiversidade.
              </p>
            </div>

            <div className="method-item">
              <h3>Armadilhas Fotográficas</h3>
              <p>
                Câmeras estrategicamente posicionadas nos permitem monitorar a vida selvagem 
                de forma não invasiva, revelando padrões de comportamento e ocupação.
              </p>
            </div>

            <div className="method-item">
              <h3>Gravadores Automáticos</h3>
              <p>
                Capturam a paisagem sonora da floresta, permitindo identificar espécies 
                e estudar seus padrões de atividade através de análise acústica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="target-species">
        <div className="container">
          <h2>Espécies-Alvo</h2>
          <div className="species-columns">
            <div className="fauna-column">
              <h3>Fauna</h3>
              <ul>
                <li>Parauacu (Pithecia mittermeieri)</li>
                <li>Macaco-aranha-da-cara-preta (Ateles chamek)</li>
                <li>Anambé-preto (Cephalopterus ornatus)</li>
                <li>Zogue-zogue-do-mato-grosso (Plecturocebus grovesi)</li>
                <li>Tiê-bicudo (Conotraupis mesoleuca)</li>
              </ul>
            </div>
            <div className="flora-column">
              <h3>Flora</h3>
              <ul>
                <li>Piquiá</li>
                <li>Angelim-saia (Parkia pendula)</li>
                <li>Buriti (Mauritia flexuosa)</li>
                <li>Jatobá (Hymenaea courbaril)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default EstacaoPesquisa; 