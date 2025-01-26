import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const Primatas = () => {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('primatas', 'hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const zogueZogueStyle = {
    backgroundImage: `url(${getFolderImage('primatas', 'zogue-zogue')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[60vh] flex items-center justify-center" style={heroStyle}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Observação de Primatas</h1>
          <p className="text-lg md:text-xl">Uma aventura em busca de importantes primatas da região sul da Amazônia</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              O Jardim da Amazônia, situado no município de São José do Rio Claro, no Chapadão dos Parecis, 
              é um ponto de convergência entre o Cerrado e a Floresta Amazônica, destacando-se como berço de 
              numerosas nascentes e de uma biodiversidade excepcional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Este ambiente abriga mais de 30 espécies de mamíferos de médio e grande porte, incluindo 07 espécies 
              de primatas, sendo alguns criticamente em perigo de extinção e endêmicos do norte de MT.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-semibold text-center mb-16">Espécies Emblemáticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64" style={zogueZogueStyle}>
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded">CR</span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Zogue-zogue-do-mato-grosso</h3>
                <p className="text-sm text-gray-600 italic">Plecturocebus grovesi</p>
                <p className="text-sm text-gray-500">Mato Grosso Titi Monkey</p>
                <p className="text-gray-700">
                  Primata criticamente ameaçado, endêmico do norte de Mato Grosso, encontrado entre os rios 
                  Teles Pires e Arinos. Uma das 25 espécies de primatas mais ameaçadas do planeta.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64" style={{ backgroundImage: `url(${getFolderImage('primatas', 'parauacu')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">VU</span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Parauacu</h3>
                <p className="text-sm text-gray-600 italic">Pithecia mittermeieri</p>
                <p className="text-sm text-gray-500">Tapajo's Saki Monkey</p>
                <p className="text-gray-700">
                  Espécie vulnerável que atua como jardineiro da floresta, dispersando sementes de vários 
                  tamanhos e durezas. Atualmente é objeto de estudo de doutorado focado em sua distribuição e conservação.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64" style={{ backgroundImage: `url(${getFolderImage('primatas', 'macaco-aranha')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">VU</span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Macaco-aranha-da-cara-preta</h3>
                <p className="text-sm text-gray-600 italic">Ateles chamek</p>
                <p className="text-sm text-gray-500">Black-faced Spider Monkey</p>
                <p className="text-gray-700">
                  O maior primata frugívoro da região, classificado como Vulnerável no Brasil e Em Perigo globalmente. 
                  Habita florestas altas, chuvosas, inundáveis ou em terra firme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span>CR - Criticamente em Perigo</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>VU - Vulnerável</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>LC - Pouco Preocupante</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Nossos Roteiros Incluem</h2>
          <div className="bg-primary/5 rounded-2xl p-8">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Safari fotográfico
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Observação do Parauacu
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Observação de saguis e macacos-aranha
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Observação do Zogue-zogue-do-mato-grosso no rio Arinos
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Opcional: Aldeia Parecis</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Como opção adicional, é possível conhecer a cultura indígena dos Parecis em Campo Novo dos Parecis.
              A experiência inclui a oportunidade de aprender sobre o modo de vida tradicional, os costumes e as crenças
              dessa comunidade, além de uma visita às cachoeiras da região, um refúgio natural ideal para relaxar e admirar
              a beleza do Cerrado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Recomendações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">O que Levar</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Roupas leves e confortáveis (manga comprida)
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Calçados fechados para caminhada
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Proteção (chapéu, repelente, protetor solar)
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Equipamentos (binóculos, lanterna, garrafa d'água)
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Melhor Época</h3>
              <div className="space-y-6">
                <p className="text-gray-700">O Sul da Amazônia possui clima quente e úmido.</p>
                <div className="space-y-3">
                  <div className="text-gray-600">
                    <span className="font-medium">Janeiro a Abril:</span>
                    <p className="ml-4">Período de chuvas com rios cheios</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-medium text-primary">Período Ideal: Junho a Setembro</p>
                    <p className="ml-4 mt-1">Estação seca com águas transparentes e praias de areia branca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Macaquear no Mato Grosso</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <p className="text-gray-700 leading-relaxed">
              O Brasil é o país com maior diversidade de primatas no mundo. Mato Grosso abriga 29 espécies 
              distribuídas entre Pantanal, Cerrado e Amazônia, tornando-o equivalente ao 13º país em 
              diversidade de primatas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              "Macaquear" é uma iniciativa do Instituto Ecótono em parceria com a Sociedade Brasileira de 
              Primatologia, que incentiva a observação responsável de primatas como ferramenta de conservação 
              e desenvolvimento local.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Rota de Primatas do Mato Grosso</h2>
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed text-center">
              O Brasil é o país com maior número de espécies de primatas do mundo, e Mato Grosso, 
              se fosse um país, estaria entre os dez primeiros. Esta riqueza deve-se à variedade de 
              biomas e aos grandes rios que atuam como barreiras geográficas.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Sobre a Rota</h3>
              <p className="text-gray-700 mb-8">
                Desde 2023, o Instituto Ecótono em parceria com as pousadas Jardim da Amazônia e 
                Cristalino Lodge desenvolvem uma rota que permite observar 14 espécies em sete locais, 
                em um roteiro de 15 dias.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Destinos</h4>
                  <p className="text-gray-700">São José do Rio Claro • Sinop • Alta Floresta</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Benefícios</h4>
                  <p className="text-gray-700">Ciência cidadã • Pesquisa acadêmica • Turismo sustentável • Renda local</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-center italic">
              Todos os envolvidos seguem as boas práticas de observação de vida silvestre, contribuindo 
              para a conservação das florestas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Referências e Clipping</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.midiajur.com.br/midia-ciencia/pesquisador-da-ufmt-participa-de-evento-na-malasia-discutindo-a-observacao-de-primatas-como-alternativa-de-renda-e-conservacao/52673" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Congresso de Primatologia
            </a>
            <a 
              href="https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2023/09/12/macaquear-pratica-de-observacao-de-primatas-tem-potencial-de-crescimento-no-brasil.ghtml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              G1 - Terra da Gente
            </a>
            <a 
              href="https://oeco.org.br/reportagens/um-macaco-encurralado-pelo-desmatamento/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              O Eco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Primatas; 