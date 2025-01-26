import React, { useState } from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const FalaramDeNos = () => {
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
      imagem: getFolderImage('falaram-de-nos/glamurama-1'),
      conteudoCompleto: `Nos últimos anos, o turismo ecológico tem se fortalecido...`
    },
    {
      id: 3,
      titulo: "Wanderlust Magazine destaca o Jardim da Amazônia",
      veiculo: "Wanderlust Magazine", 
      data: "2024",
      link: "https://www.wanderlustmagazine.com/",
      descricao: "Na edição de dezembro/janeiro, o Jardim da Amazônia é destacado como uma experiência imperdível no coração do Brasil, onde o Pantanal encontra a Amazônia.",
      imagem: getFolderImage('falaram-de-nos/wonderlust'),
      imagens: [
        getFolderImage('falaram-de-nos/wonderlust-1'),
        getFolderImage('falaram-de-nos/wonderlust-2')
      ],
      conteudoCompleto: `Na edição de dezembro/janeiro da revista Wanderlust...`
    },
    {
      id: 4,
      titulo: "Brazilian Primates: Piauí, Maranhão, Pará and Matto Grosso",
      veiculo: "Mammalwatching.com",
      data: "2024",
      link: "https://www.mammalwatching.com/community-post/brazilian-primates-piaui-maranhao-para-and-matto-gross/",
      descricao: "Lodge é destacado como ponto estratégico para observação de primatas na região amazônica.",
      imagem: getFolderImage('falaram-de-nos/mammalwatching'),
      conteudoCompleto: `O Jardim da Amazônia foi novamente destaque...`
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
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[60vh] bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Falaram de Nós</h1>
          <p className="text-xl md:text-2xl">O que a mídia e nossos visitantes dizem sobre o Jardim da Amazônia</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 space-y-12">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                    <span>Conteúdo Exclusivo</span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold mb-4">{noticia.titulo}</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <span className="font-semibold">{noticia.veiculo}</span>
                  <span>{noticia.data}</span>
                </div>
                <p className="text-gray-700 mb-6">{noticia.descricao}</p>
                <button 
                  className={`flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${
                    expandedId === noticia.id ? 'font-semibold' : ''
                  }`}
                  onClick={() => toggleExpanded(noticia.id)}
                >
                  <span>{expandedId === noticia.id ? 'Mostrar menos' : 'Leia mais'}</span>
                  <span className="text-xl">{expandedId === noticia.id ? '−' : '+'}</span>
                </button>
              </div>
            </div>
            {expandedId === noticia.id && (
              <div className="border-t border-gray-100 p-8">
                <div className="prose prose-lg max-w-none">
                  {noticia.conteudoCompleto.split('\n\n').map((paragrafo, index) => (
                    <p key={index} className="mb-4 text-gray-700">{paragrafo}</p>
                  ))}
                  {noticia.imagens && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
    </div>
  );
}

export default FalaramDeNos; 