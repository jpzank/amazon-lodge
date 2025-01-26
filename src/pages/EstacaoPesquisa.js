import React from 'react';
import { getFolderImage } from '../config/cloudinaryConfig';

const EstacaoPesquisa = () => {
  const heroStyle = {
    backgroundImage: `url(${getFolderImage('estacao-pesquisa/hero')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[60vh] flex items-center justify-center" style={heroStyle}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Estação de Pesquisa Jardim da Amazônia</h1>
          <p className="text-xl md:text-2xl">Preservando a biodiversidade através da ciência e educação ambiental</p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            A Estação de Pesquisa Jardim da Amazônia, em sua fase inicial, conta com a infraestrutura da 
            Jardim da Amazônia, um dos locais do Brasil mais visitados por observadores de aves. 
            Nossa estação é um centro dedicado à pesquisa, educação ambiental e conservação, oferecendo 
            espaço para oficinas, cursos e reuniões através de três programas integrados.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">Biodiversidade</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa região é privilegiada por estar localizada em uma zona de transição Amazônia-Cerrado, 
              abrigando uma extraordinária diversidade de espécies. Aqui, é possível encontrar tanto 
              seriemas e macacos-prego (Sapajus cay) típicos do Cerrado, quanto anambés e 
              macacos-aranha (Ateles chamek) característicos da Amazônia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A preservação dessas florestas é vital não apenas para a sobrevivência desta rica 
              biodiversidade, mas também para garantir a existência do Rio Claro, que integra a 
              importante bacia hidrográfica que alimenta os rios Arinos, Juruena, Tapajós e Amazonas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Programas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Monitoramento da Biodiversidade</h3>
              <p className="text-gray-700">
                Pesquisadores, estudantes e voluntários trabalham na coleta sistemática de 
                informações sobre nossa biodiversidade local, utilizando métodos científicos. 
                Construímos uma base de dados com imagens e sons que fundamentam nossas 
                estratégias de conservação.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Sensibilização Ambiental</h3>
              <p className="text-gray-700">
                Transformamos o conhecimento científico em materiais informativos e trilhas 
                autoguiadas, com o objetivo de conscientizar sobre nossa responsabilidade 
                no cuidado com o planeta.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Ciência Cidadã</h3>
              <p className="text-gray-700">
                Convidamos todos a participarem ativamente da pesquisa científica! Você pode 
                contribuir com registros de avistamentos, participar de cursos e oficinas, 
                tendo seus vídeos e fotografias incluídos em nosso Acervo Digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Metodologia de Pesquisa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Transectos</h3>
              <p className="text-gray-700">
                Percorremos trilhas documentando avistamentos, vocalizações e vestígios da fauna, 
                utilizando tecnologia para mapear e quantificar nossa biodiversidade.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Armadilhas Fotográficas</h3>
              <p className="text-gray-700">
                Câmeras estrategicamente posicionadas nos permitem monitorar a vida selvagem 
                de forma não invasiva, revelando padrões de comportamento e ocupação.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Gravadores Automáticos</h3>
              <p className="text-gray-700">
                Capturam a paisagem sonora da floresta, permitindo identificar espécies 
                e estudar seus padrões de atividade através de análise acústica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Espécies-Alvo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Fauna</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Parauacu (Pithecia mittermeieri)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Macaco-aranha-da-cara-preta (Ateles chamek)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Anambé-preto (Cephalopterus ornatus)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Zogue-zogue-do-mato-grosso (Plecturocebus grovesi)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Tiê-bicudo (Conotraupis mesoleuca)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Flora</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Piquiá
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Angelim-saia (Parkia pendula)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Buriti (Mauritia flexuosa)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  Jatobá (Hymenaea courbaril)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EstacaoPesquisa; 