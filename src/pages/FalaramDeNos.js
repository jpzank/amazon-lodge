import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import PhotoCredit from '../components/PhotoCredit';

const FalaramDeNos = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const noticias = [
    {
      id: 1,
      titulo: "Jardim da Amazônia: Destaque no Turismo Científico e Ecológico",
      veiculo: "Revista Camalote",
      data: "2024",
      link: "https://www.revistacamalote.com.br/",
      descricao: "O lodge é reconhecido como um dos principais pontos da Rota dos Primatas do Mato Grosso, destacando-se na conservação e pesquisa científica.",
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085712/camalote-capa_xaeyct.jpg',
      imagens: [
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085720/camalote-pagina1_dz0ek4.jpg',
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085725/camalote-pagina2_ep900h.jpg',
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085740/camalote-pagina3_af3v7z.jpg'
      ],
      conteudoCompleto: `O Jardim da Amazônia foi destaque novamente em publicações recentes, reforçando seu papel como um dos destinos mais fascinantes do Mato Grosso para o turismo científico e ecológico.

Rota dos Primatas do Mato Grosso: O Jardim da Amazônia foi mencionado como um dos sete locais principais dessa iniciativa de conservação, liderada pelo Instituto Ecótono em parceria com universidades e centros de pesquisa. Localizado a cerca de quatro horas de Cuiabá, o Jardim da Amazônia se destaca pela rica biodiversidade, incluindo espécies como o macaco-aranha-da-cara-preta e o parauacu. Os visitantes têm a oportunidade única de observar pelo menos 14 espécies de primatas ao longo da rota.

Conservação do Parauacu: Com estudos de doutorado em andamento, o Jardim da Amazônia reforça sua missão de proteger a fauna local, desempenhando um papel crucial na dispersão de sementes e preservação ecológica.

Feiras Turísticas e Divulgação Científica: O Jardim também participou de importantes eventos, como a WTM Latin America e ITB Berlin, promovendo o turismo sustentável e educativo.

Esses reconhecimentos reforçam o compromisso do Jardim da Amazônia com a sustentabilidade, a pesquisa e o turismo de impacto positivo.`
    },
    {
      id: 2,
      titulo: "Amazônia: O novo refúgio para amantes da natureza e da biodiversidade rara",
      veiculo: "Glamurama",
      data: "2024",
      link: "https://glamurama.uol.com.br/modo-de-vida/amazonia-o-novo-refugio-para-amantes-da-natureza-e-da-biodiversidade-rara/",
      descricao: "Reconhecido internacionalmente como um dos três melhores destinos para observação de aves e espécies raras, o lodge oferece uma experiência única para os amantes da biodiversidade.",
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085727/wonderlust_alvd9p.jpg',
      imagens: [
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085722/wonderlust-1_cnm4vl.jpg',
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085728/wonderlust-2_wn6zao.jpg'
      ],
      conteudoCompleto: `Nos últimos anos, o turismo ecológico tem ganhado força no Brasil, com a Amazônia se destacando como um dos destinos mais procurados por viajantes em busca de conexão com a natureza. O Jardim da Amazônia Lodge, localizado no coração da floresta tropical, é reconhecido internacionalmente como um dos três melhores destinos para observação de aves e espécies raras. Com uma estrutura sustentável e práticas voltadas à preservação ambiental, o lodge oferece uma experiência única, permitindo que os visitantes conheçam de perto espécies ameaçadas de extinção, como a arara-azul-grande, o mutum-de-penacho e o gavião-real.  

Para Raquel Zanchet, diretora do Jardim da Amazônia Lodge, o turismo ecológico é mais do que uma tendência: é uma ferramenta essencial para a conscientização e conservação ambiental. "Nosso objetivo é proporcionar uma experiência transformadora para os visitantes, ao mesmo tempo em que contribuímos ativamente para a preservação da biodiversidade amazônica", afirma. Passeios guiados por especialistas permitem explorar a rica biodiversidade da região, promovendo um entendimento mais profundo dos desafios e da importância de proteger este ecossistema vital.`
    },
    {
      id: 3,
      titulo: "Wanderlust Magazine destaca o Jardim da Amazônia",
      veiculo: "Wanderlust Magazine", 
      data: "2024",
      link: "https://www.wanderlustmagazine.com/",
      descricao: "Na edição de dezembro/janeiro, o Jardim da Amazônia é destacado como uma experiência imperdível no coração do Brasil, onde o Pantanal encontra a Amazônia.",
      imagem: 'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085720/camalote-pagina1_dz0ek4.jpg',
      imagens: [
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085722/wonderlust-1_cnm4vl.jpg',
        'https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085728/wonderlust-2_wn6zao.jpg'
      ],
      conteudoCompleto: `Na edição de dezembro/janeiro da revista Wanderlust, o Jardim da Amazônia foi destacado como uma experiência imperdível no coração do Brasil. Descrito como um lugar onde "o Pantanal encontra a Amazônia", o artigo ressaltou a singularidade da nossa localização e a abundância de vida selvagem ao redor. Eles recomendaram o Jardim da Amazônia como uma base ideal para explorar a rica biodiversidade e paisagens deslumbrantes da região, especialmente durante a temporada seca, quando os animais são mais facilmente avistados.

O artigo também enfatizou o charme da nossa hospitalidade e a oportunidade de conexão profunda com a natureza, proporcionando uma experiência autêntica e memorável para quem busca se aventurar pela beleza selvagem do Pantanal`
    },
    {
      id: 4,
      titulo: "Brazilian Primates: Piauí, Maranhão, Pará and Matto Grosso",
      veiculo: "Mammalwatching.com",
      data: "2024",
      link: "https://www.mammalwatching.com/community-post/brazilian-primates-piaui-maranhao-para-and-matto-gross/",
      descricao: "Lodge é destacado como ponto estratégico para observação de primatas na região amazônica.",
      imagem: "https://www.mammalwatching.com/wp-content/uploads/2024/10/Screenshot-2024-10-08-171951.jpg",
      conteudoCompleto: `O Jardim da Amazônia brilhou novamente em um relato sobre a "Rota de Observação de Primatas de Mato Grosso", uma iniciativa inovadora criada por especialistas como Russ Mittermeier e Gustavo Canale. O projeto foca na conservação e observação de 16 espécies de primatas da região, das quais 10 estão ameaçadas de extinção. Durante a visita ao Jardim, viajantes ficaram encantados com a rica diversidade de espécies avistadas, como os sakis de cara branca de Mittermeier, macacos-aranha-negros e macacos-prego-de-Azara, além de outros animais como capivaras e tamanduás.  

A infraestrutura do lodge, liderada pela família Zanchet, foi destacada pela hospitalidade impecável, gastronomia refinada e compromisso com a preservação ambiental, incluindo a criação de corredores de árvores para a fauna local. Um dos pontos altos do relato foi a área de floresta alagada próxima à piscina natural, onde famílias de sakis frequentemente se alimentam, proporcionando encontros fascinantes para os visitantes. Esse projeto reafirma o Jardim da Amazônia como um destino essencial para quem busca turismo sustentável e experiências científicas únicas.`
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white mb-16"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dxlhv2mji/image/upload/v1736085720/camalote-pagina1_dz0ek4.jpg')` }}
      >
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide text-shadow">
            Falaram de Nós
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto tracking-wide text-shadow">
            O que dizem sobre o Jardim da Amazônia
          </p>
        </div>
      </div>

      {/* Reviews Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  {noticia.imagem ? (
                    <img 
                      src={noticia.imagem} 
                      alt={noticia.titulo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full min-h-[200px] bg-gray-100 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-600">{noticia.veiculo}</span>
                    </div>
                  )}
                  {noticia.exclusivo && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                      <span>Conteúdo Exclusivo para Assinantes do Globoplay</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold mb-4">{noticia.titulo}</h3>
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <span className="font-semibold">{noticia.veiculo}</span>
                    <span>{noticia.data}</span>
                  </div>
                  {(noticia.id === 1 || noticia.id === 3) ? (
                    <div className="prose prose-lg max-w-none">
                      {noticia.conteudoCompleto.split('\n\n').map((paragrafo, index) => (
                        <p key={index} className="mb-4 text-gray-700 text-justify">{paragrafo}</p>
                      ))}
                      {noticia.imagens && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                          {noticia.imagens.map((imagem, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-md">
                              <img 
                                src={imagem} 
                                alt={`${noticia.titulo} - Página ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-8 flex justify-end">
                        {noticia.link !== "#" && (
                          <a 
                            href={noticia.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                          >
                            Ver site original
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-6 text-justify">{noticia.descricao}</p>
                      <button 
                        className={`flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${
                          expandedId === noticia.id ? 'font-semibold' : ''
                        }`}
                        onClick={() => toggleExpanded(noticia.id)}
                      >
                        <span>{expandedId === noticia.id ? 'Mostrar menos' : 'Leia mais'}</span>
                        <span className="text-xl">{expandedId === noticia.id ? '−' : '+'}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
              {expandedId === noticia.id && noticia.id !== 1 && noticia.id !== 3 && (
                <div className="border-t border-gray-100 p-8">
                  <div className="prose prose-lg max-w-none">
                    {noticia.conteudoCompleto.split('\n\n').map((paragrafo, index) => (
                      <p key={index} className="mb-4 text-gray-700 text-justify">{paragrafo}</p>
                    ))}
                    {noticia.imagens && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {noticia.imagens.map((imagem, index) => (
                          <div key={index} className="rounded-xl overflow-hidden shadow-md">
                            <img 
                              src={imagem} 
                              alt={`${noticia.titulo} - Página ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-8 flex justify-end">
                    {noticia.link !== "#" && (
                      <a 
                        href={noticia.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        {noticia.exclusivo ? 'Assistir no Globoplay' : 'Ver site original'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FalaramDeNos; 