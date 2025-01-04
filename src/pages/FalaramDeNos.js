import React, { useState } from 'react';
import '../styles/FalaramDeNos.css';

function FalaramDeNos() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const noticias = [
    {
      id: 2,
      titulo: "Amazônia: O novo refúgio para amantes da natureza e da biodiversidade rara",
      veiculo: "Glamurama",
      data: "2024",
      link: "https://glamurama.uol.com.br/modo-de-vida/amazonia-o-novo-refugio-para-amantes-da-natureza-e-da-biodiversidade-rara/",
      descricao: "Reconhecido internacionalmente como um dos três melhores destinos para observação de aves e espécies raras, o lodge oferece uma experiência única para os amantes da biodiversidade.",
      imagem: "https://static.glamurama.uol.com.br/2024/12/image0-1.jpeg",
      conteudoCompleto: `Nos últimos anos, o turismo ecológico tem se fortalecido, especialmente no Brasil, com a Amazônia emergindo como um dos destinos mais cobiçados por viajantes em busca de imersão na natureza. Um dos locais que se destaca nesse cenário é o Jardim da Amazônia Lodge, situado no coração da floresta tropical. Reconhecido internacionalmente como um dos três melhores destinos para observação de aves e espécies raras, o lodge oferece uma experiência única e essencial para os amantes da biodiversidade.

Com uma estrutura sustentável e práticas focadas na preservação ambiental, o Jardim da Amazônia Lodge proporciona aos visitantes a oportunidade de conhecer de perto espécies ameaçadas de extinção, como a arara-azul-grande, o mutum-de-penacho e o gavião-real. A região, que conta com uma biodiversidade impressionante, abriga uma grande variedade de flora e fauna, e é explorada por meio de passeios guiados realizados por especialistas que compartilham os desafios e a importância da conservação deste ecossistema vital.

Raquel Zanchet, diretora do Jardim da Amazônia Lodge, destaca a importância do turismo ecológico não apenas como uma tendência crescente, mas como uma ferramenta crucial para conscientizar sobre a preservação ambiental. "Nosso objetivo é proporcionar uma experiência transformadora para os visitantes, ao mesmo tempo em que contribuímos ativamente para a conservação da biodiversidade amazônica", afirma.`
    },
    {
      id: 3,
      titulo: "Wanderlust Magazine destaca o Jardim da Amazônia",
      veiculo: "Wanderlust Magazine",
      data: "2024",
      link: "https://www.wanderlustmagazine.com/",
      descricao: "Na edição de dezembro/janeiro, o Jardim da Amazônia é destacado como uma experiência imperdível no coração do Brasil, onde o Pantanal encontra a Amazônia.",
      imagem: "/src/images/falaram-de-nos/wonderlust.jpg",
      imagens: [
        "/src/images/falaram-de-nos/wonderlust-1.jpg",
        "/src/images/falaram-de-nos/wonderlust-2.jpg"
      ],
      conteudoCompleto: `Na edição de dezembro/janeiro da revista Wanderlust, o Jardim da Amazônia foi destacado como uma experiência imperdível no coração do Brasil. Descrito como um lugar onde "o Pantanal encontra a Amazônia", o artigo ressaltou a singularidade da nossa localização e a abundância de vida selvagem ao redor. Eles recomendaram o Jardim da Amazônia como uma base ideal para explorar a rica biodiversidade e paisagens deslumbrantes da região, especialmente durante a temporada seca, quando os animais são mais facilmente avistados.

O artigo também enfatizou o charme da nossa hospitalidade e a oportunidade de conexão profunda com a natureza, proporcionando uma experiência autêntica e memorável para quem busca se aventurar pela beleza selvagem do Pantanal.`
    },
    {
      id: 4,
      titulo: "Brazilian Primates: Piauí, Maranhão, Pará and Matto Grosso",
      veiculo: "Mammalwatching.com",
      data: "2024",
      link: "https://www.mammalwatching.com/community-post/brazilian-primates-piaui-maranhao-para-and-matto-gross/",
      descricao: "Lodge é destacado como ponto estratégico para observação de primatas na região amazônica.",
      imagem: "https://www.mammalwatching.com/wp-content/uploads/2024/10/Screenshot-2024-10-08-171951.jpg",
      conteudoCompleto: `O Jardim da Amazônia foi novamente destaque em um relato de viagem memorável de observação de primatas no Brasil, onde se destacou como parte essencial da inovadora "Rota de Observação de Primatas de Mato Grosso". O projeto, idealizado por especialistas renomados como Russ Mittermeier e Gustavo Canale, visa priorizar a conservação e a observação de 16 espécies de primatas na região, das quais 10 estão ameaçadas de extinção.

Durante a visita ao Jardim, os viajantes ficaram impressionados com a diversidade de espécies avistadas, incluindo sakis de cara branca de Mittermeier, macacos-aranha-negros e macacos-prego-de-Azara, além de capivaras e tamanduás. A infraestrutura acolhedora do lodge, administrado pela família Zanchet, foi elogiada por seus serviços impecáveis, gastronomia gourmet e envolvimento com a preservação ambiental, como a criação de corredores de árvores para a fauna local.

O artigo ainda destaca a área de floresta alagada próxima à piscina natural, onde famílias de sakis se alimentam frequentemente, proporcionando encontros únicos para os visitantes. Esse projeto reforça a posição do Jardim da Amazônia como um destino indispensável para turismo sustentável e científico.`
    },
    {
      id: 1,
      titulo: "Ecótono Cerrado-Amazônia no + Natureza",
      veiculo: "Globoplay",
      data: "2023",
      link: "https://globoplay.globo.com/v/12066242/?s=0s",
      descricao: "Programa + Natureza destaca o Jardim da Amazônia em episódio especial sobre o encontro do Cerrado com a Amazônia.",
      imagem: "https://seeklogo.com/images/G/globoplay-logo-A3E04309E0-seeklogo.com.png",
      conteudoCompleto: `O programa + Natureza, exibido em 21 de outubro de 2023, dedicou um episódio especial à região do Ecótono Cerrado-Amazônia, onde está localizado o Jardim da Amazônia Lodge. Com duração de 26 minutos, o programa explorou as características únicas desta zona de transição entre dois dos mais importantes biomas brasileiros.

O episódio está disponível exclusivamente para assinantes do Globoplay e apresenta a riqueza da biodiversidade local, destacando como o encontro desses dois biomas cria um ambiente único para a observação de fauna e flora.

Durante o programa, foram apresentadas as diferentes espécies que podem ser encontradas na região, bem como o trabalho de conservação e pesquisa realizado no lodge, reforçando seu papel como importante ponto de apoio para estudos científicos e turismo de observação.`,
      exclusivo: true
    },
    {
      id: 5,
      titulo: "Macaquear: prática de observação de primatas tem potencial de crescimento no Brasil",
      veiculo: "G1 - Terra da Gente",
      data: "2023",
      link: "https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2023/09/12/macaquear-pratica-de-observacao-de-primatas-tem-potencial-de-crescimento-no-brasil.ghtml",
      descricao: "Jardim da Amazônia é citado como referência em programas de observação de primatas no Mato Grosso.",
      imagem: "https://s2-g1.glbimg.com/FbVz0ca2APs16LnbTGamW_05LL8=/0x0:1600x1220/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/W/7/oZ4loKT4y7Q4XAHREhNQ/whatsapp-image-2023-09-12-at-10.25.54-1-.jpeg",
      conteudoCompleto: `"Macaquear é o ato de observar os primatas, ou seja, macacos, micos, saguis, em seu habitat natural. O grande valor do macaquear é observar macacos livres na natureza, fazendo comportamentos naturais, com a mínima intervenção humana", explica Gustavo Canale, vice-presidente da Sociedade Brasileira de Primatologia.

De acordo com Canale, o nome macaquear foi inspirado em outra prática bem comum no mundo, a observação de aves que traz os termos 'passarinhar' ou 'bird watching'. "No Brasil, o 'bird watching' tem oferecido uma ótima oportunidade para observar macacos também, porque muitos observadores de aves ao mirar seus binóculos para a copa das árvores acabam flagrando macacos-prego, bugios, macacos-aranha, saguis. Por exemplo, alguns dos melhores locais para se observar aves na Amazônia de Mato Grosso, o Jardim da Amazônia e o Cristalino Lodge, já começaram a organizar programas para 'macaquear' em seus roteiros turísticos", conta.`
    },
    {
      id: 6,
      titulo: "Jardim da Amazônia: Destaque no Turismo Científico e Ecológico",
      veiculo: "Revista Camalote",
      data: "2023",
      link: "https://www.revistacamalote.com.br/",
      descricao: "O lodge é reconhecido como um dos principais pontos da Rota dos Primatas do Mato Grosso, destacando-se na conservação e pesquisa científica.",
      imagem: "/src/images/falaram-de-nos/camalote-capa.jpg",
      imagens: [
        "/src/images/falaram-de-nos/camalote-pagina1.jpg",
        "/src/images/falaram-de-nos/camalote-pagina2.jpg",
        "/src/images/falaram-de-nos/camalote-pagina3.jpg"
      ],
      conteudoCompleto: `O Jardim da Amazônia foi destaque novamente em publicações recentes, reforçando seu papel como um dos destinos mais fascinantes do Mato Grosso para o turismo científico e ecológico.

Rota dos Primatas do Mato Grosso: O Jardim da Amazônia foi mencionado como um dos sete locais principais dessa iniciativa de conservação, liderada pelo Instituto Ecótono em parceria com universidades e centros de pesquisa. Localizado a cerca de quatro horas de Cuiabá, o Jardim da Amazônia se destaca pela rica biodiversidade, incluindo espécies como o macaco-aranha-da-cara-preta e o parauacu. Os visitantes têm a oportunidade única de observar pelo menos 14 espécies de primatas ao longo da rota.

Conservação do Parauacu: Com estudos de doutorado em andamento, o Jardim da Amazônia reforça sua missão de proteger a fauna local, desempenhando um papel crucial na dispersão de sementes e preservação ecológica.

Feiras Turísticas e Divulgação Científica: O Jardim também participou de importantes eventos, como a WTM Latin America e ITB Berlin, promovendo o turismo sustentável e educativo. Destacado por sua abordagem de imersão científica, oferece aos visitantes uma experiência inesquecível de conexão com a natureza.

Esses reconhecimentos reforçam o compromisso do Jardim da Amazônia com a sustentabilidade, a pesquisa e o turismo de impacto positivo.`
    }
  ];

  return (
    <div className="falaram-de-nos">
      <div className="hero-section">
        <h1>Falaram de Nós</h1>
        <p>Confira o que a mídia tem falado sobre o Jardim da Amazônia</p>
      </div>
      
      <div className="noticias-container">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="noticia-card">
            <div className="noticia-content">
              <div className="noticia-imagem">
                {noticia.imagem ? (
                  <img src={noticia.imagem} alt={noticia.titulo} />
                ) : (
                  <div className="imagem-placeholder">
                    <span>{noticia.veiculo}</span>
                  </div>
                )}
                {noticia.exclusivo && (
                  <div className="conteudo-exclusivo">
                    <span>Conteúdo Exclusivo para Assinantes</span>
                  </div>
                )}
              </div>
              <div className="noticia-texto">
                <h3>{noticia.titulo}</h3>
                <div className="noticia-info">
                  <span className="veiculo">{noticia.veiculo}</span>
                  <span className="data">{noticia.data}</span>
                </div>
                <p>{noticia.descricao}</p>
                <button 
                  className={`leia-mais-btn ${expandedId === noticia.id ? 'active' : ''}`}
                  onClick={() => toggleExpanded(noticia.id)}
                >
                  <span>{expandedId === noticia.id ? 'Mostrar menos' : 'Leia mais'}</span>
                  <span className="btn-icon">{expandedId === noticia.id ? '−' : '+'}</span>
                </button>
              </div>
            </div>
            {expandedId === noticia.id && (
              <div className="noticia-expandida">
                <div className="noticia-conteudo-completo">
                  {noticia.conteudoCompleto.split('\n\n').map((paragrafo, index) => (
                    <p key={index}>{paragrafo}</p>
                  ))}
                  {noticia.imagens && (
                    <div className="noticia-paginas">
                      {noticia.imagens.map((imagem, index) => (
                        <div key={index} className="noticia-pagina">
                          <img src={imagem} alt={`${noticia.titulo} - Página ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="noticia-acoes">
                  {noticia.link !== "#" && (
                    <a 
                      href={noticia.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="fonte-original"
                    >
                      {noticia.exclusivo ? 'Assistir no Globoplay' : 'Ver site original'}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FalaramDeNos; 